import prompt from "prompt-sync"; 
import chalk from "chalk";

/*
let collegue1 = prompt("Quel est le nom de votre premier collegue?");
let collegue2 = prompt("Quel est le nom de votre deuxieme collegue?");
let collegue3 = prompt("Quel est le nom de votre troisieme collegue?");
let collegue4 = prompt("Quel est le nom de votre quatrieme collegue?");
*/

let collegue1 = 'Vincent'
let collegue2 =  'Annas'
let collegue3 = 'Marc'
let collegue4 = 'Adams'

console.log(
  `voici les nom de vos collegue : collegue 1 : ${chalk.bgWhite.blue(
    ' ',collegue1,' '
  )}, collegue 2 : ${chalk.bgWhite.red(' ',collegue2,' ')}, collegue 3 : ${chalk.bgWhite.green(
    ' ',collegue3,' '
  )}, collegue 4 : ${chalk.bgWhite.yellow(' ',collegue4,' ')} `
);
