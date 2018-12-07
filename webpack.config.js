var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')

    .addEntry('app', './assets/js/main.js')
    .addEntry('favicon', './assets/images/favicon.ico')
    .addStyleEntry('css/index', './assets/scss/main.scss')
    .addStyleEntry('css/login', './assets/scss/login.scss')
    .addStyleEntry('css/slider', './assets/scss/slider.scss')
    .addStyleEntry('css/card', './assets/scss/card.scss')

    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .autoProvidejQuery()

module.exports = Encore.getWebpackConfig();
