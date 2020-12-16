#!/usr/bin/env node
// const cmdList = require('npm');
const abbrev = require('abbrev');
const npm = require('npm');
const cl = require('npm/lib/config/cmd-list');
const childProcess = require('child_process');
const fs = require('fs');
const aliases = cl.aliases;
const cmdList = cl.cmdList;
const plumbing = cl.plumbing;

// Refer: https://github.com/npm/cli/blob/v6.11.2/lib/npm.js#L93-L99
const aliasNames = Object.keys(aliases);
const fullList = cmdList.concat(aliasNames).filter(c => plumbing.indexOf(c) === -1);
const abbrevs = abbrev(fullList);
// console.info(fullList)
// console.info(npm)
// console.info(abbrevs)
// console.log(process.argv);
const pkg = fs.readFileSync('package.json', 'utf-8');

console.log(JSON.parse(pkg));
childProcess.fork('git',['--version']);