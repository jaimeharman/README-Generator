const inquirer = require("inquirer");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    // console.log(process.argv[2])
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter a title',
        name: 'title'
      },
      {
        type: 'input',
        message: 'Enter a description',
        name: 'description'
      },
      {
        type: 'input',
        message: 'Enter a table of contents',
        name: 'tableOfContents'
      },
      {
        type: 'input',
        message: 'Enter an installation',
        name: 'installation'
      },
      {
        type: 'input',
        message: 'Enter a usage',
        name: 'usage'
      },
      {
        type: 'input',
        message: 'Enter a license',
        name: 'license'
      },
      {
        type: 'input',
        message: 'Enter a contributor',
        name: 'contributors'
      },
      {
        type: 'input',
        message: 'Enter a test',
        name: 'tests'
      },
      {
        type: 'input',
        message: 'Enter a question',
        name: 'questions'
      }
    ])
    .then((answers) => console.log(JSON.stringify(answers, null, '  ')));
}

// function call to initialize program
init();

