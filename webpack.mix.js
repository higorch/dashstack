let mix = require('laravel-mix');

mix.js("src/js/app.js", "html/assets/js");

mix.postCss("src/css/app.css", "html/assets/css", [
    require("@tailwindcss/postcss"),
]).options({
    processCssUrls: false
});