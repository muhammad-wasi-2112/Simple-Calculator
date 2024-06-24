#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.gray.bold(`---------${chalk.magentaBright.bold("Simple Calculator")}---------`));
// User input
do {
    let answers = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter your first number:",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter your second number:",
        },
        {
            name: "operator",
            type: "list",
            message: "Select the operator:",
            choices: ['+', '-', '*', '/'],
        }
    ]);
    // Variable declaration
    let number1 = answers.num1;
    let number2 = answers.num2;
    let opt = answers.operator;
    // Conditional statements
    if (opt === "+") {
        console.log(chalk.yellowBright.bold(`${number1} ${opt} ${number2} = ${number1 + number2}`));
    }
    else if (opt === "-") {
        console.log(chalk.yellowBright.bold(`${number1} ${opt} ${number2} = ${number1 - number2}`));
    }
    else if (opt === "*") {
        console.log(chalk.yellowBright.bold(`${number1} ${opt} ${number2} = ${number1 * number2}`));
    }
    else if (opt === "/") {
        console.log(chalk.yellowBright.bold(`${number1} ${opt} ${number2} = ${number1 / number2}`));
    }
} while (true);
