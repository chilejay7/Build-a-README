// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questionPrompts = [
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
        message: "Please describe how this application should be used.",
    },
    {
        type: 'input',
        name: 'license',
        message: "Which license was used?",
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
        name: 'questions',
        message: "Questions for the developer?",
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
        console.log(err);
    })
};


// TODO: Create a function to initialize app
init = async () => {

  const answers = await inquirer
    .prompt(questionPrompts)

    await writeToFile('Sample_README.md', generateMarkdown(answers));

}

// Function call to initialize app
init();
