#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000
let myPin = 727727
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter you pin",
            type: "number",
        }
    ]
);

if (pinAnswer.pin === myPin) {
    console.log("correct pin code!");


let operationAnswer = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]
);

if (operationAnswer.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]
);

    myBalance -= amountAnswer.amount;

    console.log("your remaining balance is: " + myBalance)
}

 if (operationAnswer.operation === "check balance") {
    console.log(`your balance is: ${myBalance}`);
    
}

else if (operationAnswer.operation === "fast cash"){
    let fastCashAns = await inquirer.prompt(
        [
            {
              name: "fastCash",
              message: "Enter you amount",
              type: "list",
              choices: ["500","1000","1500","2000"]
            }
        ]
    )
    myBalance -= fastCashAns.fastCash
    console.log(`your remaining amount is: ${myBalance}`);
    
}
}
else {
    console.log("Incorrect pin");
    
}






