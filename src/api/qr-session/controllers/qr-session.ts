import { v4 as uuidv4 } from 'uuid';

export default {

  async generate(ctx) {
    const token = uuidv4();
    await strapi.entityService.create('api::qr-session.qr-session', {
      data: {
        token,
        estado: 'pending',
      },
    });
    return ctx.send({ token });
  },

  async status(ctx) {
    const { token } = ctx.params;
    const sessions = await strapi.entityService.findMany('api::qr-session.qr-session', {
      filters: { token },
      populate: ['user'],
    });
    const session = (Array.isArray(sessions) && sessions.length > 0) ? sessions[0] : null;

    if (!session) {
      return ctx.notFound('Token não encontrado');
    }

    const age = Date.now() - new Date(session.createdAt).getTime();
    if (age > 5 * 60 * 1000) {
      await strapi.entityService.update('api::qr-session.qr-session', session.id, {
        data: { estado: 'expired' },
      });
      return ctx.badRequest('QR Code expirado');
    }

    if (session.estado === 'authorized') {
      await strapi.entityService.delete('api::qr-session.qr-session', session.id);
      return ctx.send({
        status: 'authorized',
        jwt: session.tempJwt,
        user: (session as any).user,
      });
    }

    return ctx.send({ status: session.estado });
  },

  async authorize(ctx) {
    const { token } = ctx.request.body;
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized('Não autenticado');
    }

    const sessions = await strapi.entityService.findMany('api::qr-session.qr-session', {
      filters: { token, estado: 'pending' },
    });
    const session = (Array.isArray(sessions) && sessions.length > 0) ? sessions[0] : null;

    if (!session) {
      return ctx.notFound('Sessão não encontrada ou já expirada');
    }

    const jwt = strapi.plugin('users-permissions').service('jwt').issue({ id: user.id });

    await strapi.entityService.update('api::qr-session.qr-session', session.id, {
      data: {
        estado: 'authorized',
        user: user.id,
        tempJwt: jwt,
      },
    });

    return ctx.send({ ok: true });
  },

};