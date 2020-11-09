// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Type your GitHub username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Type your email address:',
        name: 'Email'
    },
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'Type a description of the project:',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'Type instructions on how to install the project:',
        name: 'Install'
    },
    {
        type: 'input',
        message: 'Type instructions on how to use the project:',
        name: 'Usage'
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'License',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        message: 'Type how to contribute to the project:',
        name: 'Contribute'
    },
    {
        type: 'input',
        message: 'Type how to test the project:',
        name: 'Test'
    },
    
];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
