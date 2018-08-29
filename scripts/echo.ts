#!/usr/bin/env node
'use strict';

const program = require('commander');

program
    .version('0.0.1')
    .command('list [directory]')
    .description('List files and folders')
    .option('-a, --all','List all files and folders')
    .option('-l, --long','')
    .action(
        () => console.log('Echo!')
    );

program.parse(process.argv);