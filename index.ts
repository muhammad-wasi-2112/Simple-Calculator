#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.gray.bold(`---------${chalk.yellowBright.bold("Simple Calculator")}---------`));

// User input
do{
let answers = await inquirer.prompt([
    {
        name:"num1",
        type:"number",
        message:"Enter your first number:",
    },
    {
        name:"num2",
        type:"number",
        message:"Enter your second number:",
    },
    {
        name:"operator",
        type:"list",
        mmeesage:"Select the operator:",
        choices:['+','-','*','/'],
    }
])

// Variable declaration
let number1:number = answers.num1
let number2:number = answers.num2
let opt:string = answers.operator

// Conditional statements
if (opt === "+"){
    console.log(chalk.cyanBright.bold(`${number1} ${opt} ${number2} = ${number1 + number2}`));
}
else if (opt === "-"){
    console.log(chalk.cyanBright.bold(`${number1} ${opt} ${number2} = ${number1 - number2}`));
}
else if (opt === "*"){
    console.log(chalk.cyanBright.bold(`${number1} ${opt} ${number2} = ${number1 * number2}`));
}
else if (opt === "/"){
    console.log(chalk.cyanBright.bold(`${number1} ${opt} ${number2} = ${number1 / number2}`));
}
}while(true)