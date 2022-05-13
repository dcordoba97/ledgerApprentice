import chalk from 'chalk';

export default function errorMsg() {
    console.log(
        chalk.redBright("ERROR: Please use the right sintaxis:  \n")
        +chalk.yellowBright("--file, --sort, --price-db> <filepath> <command>\n")
        +chalk.yellowBright("Remember that the avaliable commands are: print\n")
        +chalk.yellowBright("balance and register are still WIP")
    );
}