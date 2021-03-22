let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('dist/assets/popup.scss', 'dist/css')
    
    .options({
        processCssUrls: false
    });