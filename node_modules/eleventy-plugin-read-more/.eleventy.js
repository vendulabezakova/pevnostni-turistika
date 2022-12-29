const excerpt = (content, tag) => content.split(tag)[0];
const hasMoretag = (content, tag) => content.includes(tag);

module.exports = {
  configFunction: function (eleventyConfig, options = {}) {
    const config = Object.assign(
      {
        readMoreTag: "<!--more-->",
      },
      options
    );

    eleventyConfig.addFilter("excerpt", (content) =>
      excerpt(content, config.readMoreTag)
    );

    eleventyConfig.addFilter("hasMoretag", (content) =>
      hasMoretag(content, config.readMoreTag)
    );

    eleventyConfig.addPairedShortcode("readMore", (readMoreLink, content) => {
      if (hasMoretag(content, config.readMoreTag)) {
        return `${excerpt(content, config.readMoreTag)} ${readMoreLink}`;
      }

      return content;
    });
  },
};
