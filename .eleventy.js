const markdownIt = require('markdown-it')
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/css/main.css");
    eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownIt));
}