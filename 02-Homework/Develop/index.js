// array of questions for user
//What is the title of your project?
//What is the description of your description, installation instructions, usage information, contribution guidelines, and test instructions?
//Enter License for your project
//Enter your Github username
//Enter your E-mail address
//Make links in readme clickable

//Add const for inquirer
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown =require("./utils/generateMarkdown");


const questions = [
       {
           type: "input",
           message: "What is the title of your project?",
           name: "Title"
       },
       {
        type: "input",
           message: "What is the description of your description, installation instructions, usage information, contribution guidelines, and test instructions?",
           name: "Description"   
       }, 
       {
        type: "input",
           message: "Enter License for your project",
           name: "License"   
       }, 
       {
        type: "input",
           message: "Enter your Github username",
           name: "Github"   
       }, 
       {
        type: "input",
           message: "Enter your E-mail address",
           name: "E-mail"   
       }, 
    //    {
    //     type: "input",
    //        message: "What is the title of your project?",
    //        name: "Title"   
    //    }, 
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
