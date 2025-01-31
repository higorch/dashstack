let mix = require('laravel-mix');

mix.js("src/js/frontend.js", "html/assets/js/frontend.js");
mix.js("src/js/custom.js", "html/assets/js/custom.js");

mix.postCss("src/css/frontend.css", "html/assets/css/frontend.css", [
    require("tailwindcss"),
]).options({
    processCssUrls: false
});