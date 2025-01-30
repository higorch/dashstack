let mix = require('laravel-mix');

mix.js("src/js/app.js", "html/assets/js/app.js");
mix.js("src/js/custom.js", "html/assets/js/custom.js");

mix.postCss("src/css/app.css", "html/assets/css/app.css", [
    require("tailwindcss"),
]).options({
    processCssUrls: false
});