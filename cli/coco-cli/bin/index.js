#!/usr/bin/env node

const program = require('commander');
const generate = require('../command/generator');

program
  .command('create [template]')
  .description('generator a new template')
  .action(function(template){
    generate(template);
  });