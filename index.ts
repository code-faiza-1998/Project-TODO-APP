#! /usr/bin/env node

import inquirer from "inquirer";
import promptSync from "prompt-sync";
import chalk from "chalk";
const prompt = promptSync() //empty array to store list
let myTodoList:string[] = [];
console.log(chalk.bgBlue("========WELCOME TO THE TODO LIST APP========"));


while(true)

{

const answer =await inquirer.prompt([{

name:"query",
type:"list",
message:("\n What do you want to do in your TODO list application\n"),
choices:["View List", "Add Items In List", "Delete Items", "Quit"],
}
])
if (answer.query==="View List") {
  console.log(chalk.bgGreen("\n.......Here Is The List......\n"));
  for(let item of myTodoList){
    console.log((myTodoList.indexOf(item) + ": " + item ));
  }
  if(myTodoList[0] === undefined){
    console.log(chalk.redBright("\n xxxxx NO ENTRIES xxxxxx\n"));
  }
  
}else if (answer.query === "Add Items In List"){
  let input = prompt(chalk.greenBright("Enter Your Todo Items Here : "));
  myTodoList.push(input);
  console.log(chalk.green(`"${input}" , added in the list`));
}else if (answer.query === "Delete Items") {
  for (let item of myTodoList){
    console.log(chalk.yellow(myTodoList.indexOf(item) + ": " + item));
  }
  let deleteIndex = Number(prompt(chalk.yellowBright("Enter Index Number Of item that you want to delete : ")));
  console.log(chalk.red(`${myTodoList[deleteIndex]} , is now removed from the list . `));
  myTodoList.splice(deleteIndex, 1);

}else {
  console.log(chalk.bgMagentaBright("\tTHANKS FOR USING MY TODO LIST APP"));
  console.log(chalk.bgMagentaBright("\t=========GOOD BYE========="));
  break;
}
}





