module.exports = function(eleventyConfig) {

eleventyConfig.addPassthroughCopy("images");

eleventyConfig.addPassthroughCopy("css");

eleventyConfig.addPassthroughCopy("admin");

const eleventyReadMorePlugin = require("eleventy-plugin-read-more");
 
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyReadMorePlugin);
};

return {
    templateFormats: ["njk", "html", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
}

};