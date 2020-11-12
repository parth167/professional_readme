// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// array of questions for user
const questions =[
    {
        type: 'input',
        message: 'Type your GitHub username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Type your email address:',
        name: 'email'
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
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None']
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
function writeToFile(data) {
    fs.writeFile(
        '.READMETEST.md',
        data,
        (err) => {
            if (err) throw err;
            console.log('File saved!')
        });
};

async function getUserInput() {
    let response = await inquirer.prompt(questions);
    if (response) {
        if(response.License === 'MIT'){
            response.badge = '![MIT license](https://img.shields.io/badge/license-MIT-green)';
            response.licenseurl = 'https://choosealicense.com/licenses/mit/';
        };
        if(response.License === 'Apache License 2.0'){
            response.badge ='![Apache 2.0 license](https://img.shields.io/badge/license-Apache%202.0-blue)';
            response.licenseurl = 'https://choosealicense.com/licenses/apache-2.0/';
        };
        if(response.License === 'GPL 3'){
            response.badge ='![GPL 3 license](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)';
            response.licenseurl = 'https://choosealicense.com/licenses/gpl-3.0/';
        };
        writeToFile(generate(response));
    }
};

// function to initialize program
function init() {
getUserInput();
};

// function call to initialize program
init();
