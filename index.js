// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genearte = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: "What would you like to include in your table of contents?",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What is the process for installing the application?",
    },
    {
        type: 'input',
        name: 'use',
        message: "How is the application used?",
    },
    {
        type: 'input',
        name: 'license',
        message: "Which license was used?",
    },
    {
        type: 'input',
        name: 'contributions',
        message: "Which contributions or sources did you use for this application?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "How was this tested?",
    },
    {
        type: 'input',
        name: 'questions',
        message:  "Which questions does this answer?",
    },
];

inquirer
    .prompt(questions)
    .then((response, err) => {
        err ? console.log(err) : console.log(response)
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
