// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');

// TODO: Create an array of questions for user input
//const answerArr = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are your project installation instructions?',
      name: 'install',
    },
    {
        type: 'input',
        message: 'Enter the usage instructions for the project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List all of the contributers of the project.',
        name: 'contributers',
    },
    {
        type: 'input',
        message: 'Enter testing instructions for the application.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What license is used in your project?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'none'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
  ])
  .then((response) => {
    console.log('Thank you for your responses.');
    writeToFile('README.md', response);
  }
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
      err ? console.log(err) : console.log('README Generated!')
    );
}


