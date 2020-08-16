const inquirer = require("inquirer");

// array of questions for user
const questions = [
  "Enter a title",
  "Enter a description", 
  "Enter a table of contents",
  "Enter an installation",
  "Enter a usage",
  "Enter a license",
  "Enter a contributor", 
  "Enter a test", 
  "Enter a question"
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
        message: questions[0],
        name: 'title'
      },
      {
        type: 'input',
        message: questions[1],
        name: 'description'
      },
      {
        type: 'input',
        message: questions[2],
        name: 'tableOfContents'
      },
      {
        type: 'input',
        message: questions[3],
        name: 'installation'
      },
      {
        type: 'input',
        message: questions[4],
        name: 'usage'
      },
      {
        type: 'input',
        message: questions[5],
        name: 'license'
      },
      {
        type: 'input',
        message: questions[6],
        name: 'contributors'
      },
      {
        type: 'input',
        message: questions[7],
        name: 'tests'
      },
      {
        type: 'input',
        message: questions[8],
        name: 'questions'
      }
    ])
    .then((answers) => console.log(JSON.stringify(answers, null, '  ')));
}

// function call to initialize program
init();

