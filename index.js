#! /usr/bin/env node

import { program } from 'commander';
import fileCommand from './commands/commandLobby.js';

// import fileFlag from './flags/fileFlag.js';
// import sortFlag from './flags/sortFlag.js';
// import pricedbFlag from './flags/pricedbFlag.js';

program.version('0.1.5');

program
    .option('-f, --file <argo>', "Just testing file.")
    .option('-s, --sort <argo>', "Sorts the file by date (from newest)")
    .option('-pd, --price-db <argo>', "Just testing pricedb.")
    .description('Hello and welcome to Ledger. Follow the instructions in the ReadME!')
    .action(fileCommand);

program.parse();

// How to use the cli (only print command)
// ledgerApprentice15 --file ./files/Income.ledger print ---> Para un ledger
// ledgerApprentice15 --file ./files/Index.ledger print ---> Para todos los ledgers

/* program
    .command('print')
    .description('Add a new TODO task')
    .action(sortFlag)

program
    .command('balance')
    .description('Add a new TODO task')
    .action(pricedbFlag) */

/*
program
    .option('--file <argumento...>', "The file you're trying to use. If not specified, it will show an error.")
    .option('-f <argumento...>', "The file you're trying to use. If not specified, it will show an error.")
    .description('Read file as a ledgercito file')
    .action(fileCommand);

program
    .option('--sort', "it sorts the values of the file. If not specified, it will show an error.")
    .description('For sorting values')
    .action(sortFlag);

program
    .option('--price-db <argumento...>', "Show price of the file values or something. If not specified, it will show an error.")
    .description('Check prices in ledgercito')
    .action(pricedbFlag);

*/

    /* 
program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone) */
