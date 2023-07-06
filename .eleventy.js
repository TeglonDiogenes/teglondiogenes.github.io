/*
 * .eleventy.js
 * Copyright (C) 2023 mrubanov717 <mrubanov717@nilgroun>
 *
 * Distributed under terms of the MIT license.
 */
const markdownIt = require('markdown-it');
module.exports =function (config) {
  config.addLayoutAlias('main', 'layout/maln.njk');
  const options = {
    html: true,
    breaks: true,
    lnkify: true
  };
  config.setLibrary("md",markdownIt(options))

}
