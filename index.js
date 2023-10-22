// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

const tableArray = ['Description', 'Installation', 'Usage', 'License', 'Contributions', 'Tests', 'Questions for the Developer?'];

// TODO: Create an array of questions for user input
const questionPrompts = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a description of your project / application.",
    },
    {
        name: 'tableOfContents',
        type: 'checkbox',
        message: "Please select the sections you would like to include in your table of contents.",
        choices: tableArray
    },
    {
        type: 'input',
        name: 'installation',
        message: "What is the process for installing the application?",
    },
    {
        type: 'input',
        name: 'use',
        message: "Please describe how this application should be used.",
    },
    {
        type: 'list',
        name: 'license',
        message: "Please select the license used for this application.",
        choices: [
            {name: 'ISC', value: 'ISC'},
            {name: 'PDDL', value: 'PDDL'},
            {name: 'MIT', value: 'MIT'},
            {name: 'ODbl', value: 'ODbl'},
         ],
    },
    {
        type: 'input',
        name: 'contributions',
        message: "Were there any contributions from other developers or sources you consulted for this application?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "If tests were run on the application, what were they and how should they be conducted?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address where questions can be directed?",
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your github username?",
    },
]

// TODO: Create a function to write README file
writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        // console.log(err);
    })
};

// TODO: Create a function to initialize app
// An async function was neeeded to force the script to wait for the prompts to complete. When initialized without an async function
// it was prompting for the first question and then continuing to run the following functions.
init = async () => {

  const answers = await inquirer
    .prompt(questionPrompts)

    await writeToFile('Sample_README.md', generateMarkdown(answers));
}

// Function call to initialize app
init();
