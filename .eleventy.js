/*
 * .eleventy.js
 * Copyright (C) 2023 mrubanov717 <mrubanov717@nilgroun>
 *
 * Distributed under terms of the MIT license.
 */
//const markdownIt = require('markdown-it');
module.exports =function (config) {
  const options = {
    html: true,
    breaks: true,
    lnkify: true
  };
  //config.dir.output = "docs";
  //config.setLibrary("md",markdownIt(options))
  return {
    dir:{
      //output:"docs",
      //includes:"_includes",
      //layouts:"_layouts",

    }
  }
}
