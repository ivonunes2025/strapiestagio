 export default {
  routes: [
    {
      method: 'POST',
      path: '/qr/generate',
      handler: 'qr-session.generate',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/qr/status/:token',
      handler: 'qr-session.status',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/qr/authorize',
      handler: 'qr-session.authorize',
      config: {
        auth: {
          scope: ['plugin::users-permissions.user'],
        },
      },
    },
  ],
};