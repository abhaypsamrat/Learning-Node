// const validator = require('validator')

// const command = process.argv[2]

// console.log(process.argv)

// if(command === 'add') {
//     console.log('Adding note!')
// }else if(command === 'remove') {
//     console.log('Removing note!')
// }

const chalk = require('chalk');
const log = console.log;

log(chalk.blue.bgRed.bold('Hello world!'));
log(chalk.blue('Hello') + ' ' + chalk.green('World!'));


console.log(process.argv)
const command = process.argv[2]

if(command === 'add'){
    console.log('Adding note')
}else if(command === 'remove'){
    console.log('removing note')
}