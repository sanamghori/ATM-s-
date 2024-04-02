#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; //dollar
let mypin = 223344;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fastCash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is:" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your blance is" + myBalance);
    }
    else if (operationAns.operation === "fastCash") {
        let fastCashOptions = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "choose one",
                choices: [1000, 2000, 5000, 10000, 15000, 20000],
            }
        ]);
        if (myBalance >= fastCashOptions.options) {
            myBalance = myBalance - fastCashOptions.options;
            console.log(`Amount withdrow successfully.your Remaining myBalance:${myBalance}`);
        }
        else {
            console.log(`insufficient myBalance,your balance isFinite:${myBalance}`);
        }
    }
}
else {
    console.log("incorrect pin number");
}
