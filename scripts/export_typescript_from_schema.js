#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { compileFromFile } = require('json-schema-to-typescript');

const argv = require('yargs')
    .usage('$0 [options]')
    .command(
        '',
        'export TypeScript definitions from JSON Schema')
    .option('i', {
        alias: 'input',
        type: 'string',
        default: './',
        describe: 'the directory containing the JSON Schema files'
    })
    .option('o', {
        alias: 'output',
        type: 'string',
        default: './',
        describe: 'the directory in which the TypeScript definitions will be written'
    })
    .help()
    .argv;

let inputDir = './',
    outputDir = './';
if (argv.input) {
    inputDir = argv.input;
}
if (argv.output) {
    outputDir = argv.output;
}

const dirContent = fs.readdirSync(inputDir);
dirContent.forEach(filename => {
    if(filename.endsWith('.json')) {
        const fileanameNoExt = filename.substr(0, filename.length - 5);
        // compile from file
        compileFromFile(path.join(inputDir, filename))
            .then(ts => fs.writeFileSync(path.join(outputDir, fileanameNoExt + '.d.ts'), ts));
    }
});
