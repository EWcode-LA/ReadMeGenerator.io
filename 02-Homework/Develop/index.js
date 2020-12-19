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
           message: "Enter your description",
           name: "Description"   
       }, 
       {
        type: "input",
           message: "Enter Installation",
           name: "Installation"   
       }, 
       {
        type: "input",
           message: "Enter Usage",
           name: "Usage"   
       }, 
       {
        type: "input",
           message: "Enter License for your project",
           name: "License"   
       }, 
       {
        type: "input",
           message: "Enter Contributing",
           name: "Contribution"   
       }, 
       {
        type: "input",
           message: "Enter your tests",
           name: "Tests"   
       }, 
       {
        type: "input",
           message: "Enter Questions",
           name: "Questions"   
       }, 
       {
        type: "input",
           message: "Enter your Github username",
           name: "Github"   
       }, 
       {
        type: "input",
           message: "Enter your E-mail address",
           name: "Email"   
       }, 
    //    {
    //     type: "input",number, confirm, list
    //        message: "What is the title of your project?",
    //        name: "Title"   
    //    }, 
];

// function to write README file
//use node.fs based on tutorials and activity 14
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("ReadMe Complete");
    });
}

// function to initialize program
// Use inquirer and prompts
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// function call to initialize program
init();
