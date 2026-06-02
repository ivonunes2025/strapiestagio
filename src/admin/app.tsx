import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      'pt',
    ],
    // Force the admin panel to use pt by default if possible
    translations: {
      'pt': {
        // Auth & Profile
        'Auth.form.welcome.title': 'Bem-vindo!',
        'Auth.form.welcome.subtitle': 'Inicie sessão na sua conta',
        'Auth.form.firstname.label': 'Primeiro nome',
        'Auth.form.lastname.label': 'Apelido',
        'Auth.form.email.label': 'E-mail',
        'Auth.form.username.label': 'Nome de utilizador',
        'Auth.form.password.label': 'Palavra-passe',
        'Auth.form.confirmPassword.label': 'Confirmar palavra-passe',
        'Settings.profile.form.section.experience.title': 'Experiência',
        'Settings.profile.form.section.experience.interfaceLanguage': 'Idioma da interface',
        'Settings.profile.form.section.experience.interfaceMode': 'Modo da interface',
        'Settings.profile.form.section.experience.interfaceMode.hint': 'Escolha o modo de interface para a sua conta.',
        'Settings.profile.form.section.experience.interfaceLanguage.hint': 'Escolha o idioma da interface para a sua conta.',
        
        // General Labels (some components use these)
        'First name': 'Primeiro nome',
        'Last name': 'Apelido',
        'Email': 'E-mail',
        'Username': 'Nome de utilizador',
        'Password': 'Palavra-passe',
        'Confirm Password': 'Confirmar palavra-passe',
        'Experience': 'Experiência',
        'Interface language': 'Idioma da interface',
        'Interface mode': 'Modo da interface',
        'Save': 'Guardar',
        'Cancel': 'Cancelar',

        // Sidebar & Plugins
        'app.components.LeftMenu.navbrand.title': 'Painel de Administração',
        'app.components.LeftMenu.navbrand.workplace': 'Área de Trabalho',
        'app.components.HomePage.welcome.title': 'Bem-vindo ao Strapi!',
        'app.components.HomePage.welcome.subtitle': 'Gira o seu conteúdo facilmente em Português.',
        'global.content-manager': 'Gestor de Conteúdo',
        'global.content-manager.plural': 'Gestor de Conteúdo',
        'global.plugins': 'Plugins',
        'global.settings': 'Definições',
        'global.marketplace': 'Mercado',
        'global.media-library': 'Biblioteca de Media',
        'global.media-library.plural': 'Biblioteca de Media',
        'Content Manager': 'Gestor de Conteúdo',
        'Content-Type Builder': 'Construtor de Conteúdo',
        'Media Library': 'Biblioteca de Media',
        'Collection Types': 'Tipos de Coleção',
        'Single Types': 'Tipos Únicos',
        'Components': 'Componentes',
        'Settings': 'Definições',
        'General': 'Geral',
        'Plugins': 'Plugins',
        'Marketplace': 'Mercado',
        'Internationalization': 'Internacionalização',
        'Roles': 'Funções',
        'Users': 'Utilizadores',
        'API Tokens': 'Tokens de API',
        'Transfer Tokens': 'Tokens de Transferência',
        'Audit Logs': 'Registos de Auditoria',
        'User Permissions': 'Permissões de Utilizador',
        'Content Manager.sidebar.collection-types': 'Tipos de Coleção',
        'Content Manager.sidebar.single-types': 'Tipos Únicos',

        // Navigation Plugin
        'navigation.plugin.name': 'Navegação',
        'navigation.header.title': 'Navegação',
        'navigation.header.description': 'Defina a navegação do seu portal',
        'navigation.header.button.save': 'Guardar',
        'navigation.header.button.manage': 'Gerir',
        'navigation.header.button.expandAll': 'Expandir Tudo',
        'navigation.header.button.collapseAll': 'Recolher Tudo',
        'navigation.header.button.newItem': '+ Novo Item',
        'Navigation': 'Navegação',
        'Define your portal navigation': 'Defina a navegação do seu portal',
        'Manage': 'Gerir',
        'Expand All': 'Expandir Tudo',
        'Collapse All': 'Recolher Tudo',
        'New Item': 'Novo Item',
        'Add nested item': 'Adicionar item aninhado',
      },
    },
  },
  bootstrap(app: StrapiApp) {
    // Force PT language in localStorage
    window.localStorage.setItem('strapi-admin-language', '"pt"');
    // If we want to change it on the fly, we can also try this (though might not be supported in all versions)
    document.documentElement.setAttribute('lang', 'pt');
  },
};
