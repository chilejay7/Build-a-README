// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What would you like to include in your table of contents?",
    "What is the process for installing the application?",
    "How is the application used?",
    "Which license was used?",
    "Which contributions or sources did you use for this application?",
    "What are the tests?",
    "Which questions does this answer?",
];

inquirer
    .prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
