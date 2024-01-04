import prompt from "prompt-sync"; 
import chalk from "chalk";

/*
let collegue1 = prompt("Quel est le nom de votre premier collegue?");
let collegue2 = prompt("Quel est le nom de votre deuxieme collegue?");
let collegue3 = prompt("Quel est le nom de votre troisieme collegue?");
let collegue4 = prompt("Quel est le nom de votre quatrieme collegue?");
*/

const collegue1 = 'Vincent'
const collegue2 = 'Anas'
const collegue3 = 'Marc'
const collegue4 = 'Samuel'

console.log(
  `voici le nom de vos collègues : \n -collègue 1 : ${chalk.bgWhite.blue(
    ' ',collegue1,' '
  )},\n -collègue 2 : ${chalk.bgWhite.red(' ',collegue2,' ')},\n -collègue 3 : ${chalk.bgWhite.green(
    ' ',collegue3,' '
  )},\n -collègue 4 : ${chalk.bgWhite.yellow(' ',collegue4,' ')} `
);
