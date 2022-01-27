'use strict';

const mustache = require('mustache');
const path = require('path');
const fs = require('fs/promises');
const cache = {};

async function read (file) {
  if (file in cache) {
    return cache[file];
  }
  try {
    const template = await fs.readFile(file, {encoding: 'utf-8'});
    mustache.parse(template);
    cache[file] = template;
    return template;
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  defaultLayout: path.join(__dirname, 'layout.mu'),
  render: async function (file, model) {
    const template = await read(file);

    return mustache.render(template, model);
  },
  renderString: async function (template, model) {
    return mustache.render(template, model);
  }
};
