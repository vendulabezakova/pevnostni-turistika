<h1>eleventy-plugin-read-more</h1>

A plugin that provides shortcodes and filters for easily displaying post summaries and read-more links.

- [Installation](#installation)
- [Usage](#usage)
  - [readMore](#readmore)
  - [excerpt](#excerpt)
  - [hasMoretag](#hasmoretag)
- [Options](#options)
- [License](#license)

## Installation

```sh
# npm
npm i eleventy-plugin-read-more

# yarn
yarn add eleventy-plugin-read-more
```

## Usage

Register the plugin in you `.eleventy.js` file:

```js
const eleventyReadMorePlugin = require("eleventy-plugin-read-more");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyReadMorePlugin);
});
```

In your post content, insert a `readMoreTag` break point using `<!--more-->`.

For example:

```md
Post content to be shown in summary and full view

<!--more-->

The rest of the post
```

In your template (nunjucks example):

```nunjucks
{% readMore content %}
<p>
  <a href="{{ page.url }}">Continue reading &rarr;</a>
</p>
{% endreadMore %}
```

This will output:

```html
Post content to be shown in summary and full view
<p>
  <a href="/posts/2020/01/01/my-awesome-post">Continue reading &rarr;</a>
</p>
```

### readMore

A paired eleventy shortcode (see [Usage](#usage)). It will only show before the `readMoreTag` and, if found, will append the provided read more link.

Nunjucks example:

```nunjucks
{% readMore __CONTENT__ %} __READ_MORE_LINK__ {% endreadMore %}
```

### excerpt

An eleventy filter. Will return all the supplied content before the `readMoreTag`.

Nunjucks example:

```nunjucks
{{ "A post summary <!--more--> The full content" | excerpt }}
```

Outputs `"A post summary"`.

### hasMoretag

An eleventy filter. Will return true or false if the supplied content contains the `readMoreTag`. This can be used in conditional statements.

Nunjucks example:

```nunjucks
{{ "A post summary <!--more--> The full content" | hasMoretag }}
```

Outputs `true`.

## Options

```js
var options = {
  readMoreTag: "<!--my-read-more-tag-->",
};

eleventyConfig.addPlugin(eleventyNavigationPlugin, options);
```

- `readMoreTag` (string, default `<!--more-->`) - a text string to use to break content and insert a read-more link.

## License

This software is released under the [MIT License](./LICENSE).
