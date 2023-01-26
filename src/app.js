import inquirer from "inquirer";
import chalk from "chalk";

import path from "node:path"

const initialQuestions = [{
    type: "input",
    name: "name",
    message: "Comment s'appelle le projet ?",
    default: path.basename(process.cwd())
},{
    type: "list",
    name: "type",
    message: "Quels type de projet ?",
    choices: ["Front", "Back", "Fullstack"]
}]


const buildConfig = () => {
    inquirer.prompt(initialQuestions).then(resp => {
        if(resp.type === "Front"){
            console.log("front");
        }
        if(resp.prtypeojectType === "Back"){
            console.log("front");
        }
        if(resp.type === "Fullstack"){
            console.log("front");
        }
    })
}


buildConfig();





const buildProject = (options) => {
    switch(options){
        case "Front":
            break;
        case "Back" :
    }
}
const initalQuestions = () => {}
const frontQuestions = () => {}
const backQuestions = () => {}
const fullQuestions = () => {}


