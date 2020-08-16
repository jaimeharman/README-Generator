const inquirer = require("inquirer");
const fs = require('fs');

// array of questions for user
const questions = [
  "Enter a title",
  "Enter a description", 
  "Enter an installation",
  "Enter a usage",
  "Enter a license",
  "Enter a contributor", 
  "Enter a test", 
  "Enter a question"
];

// function to write README file
function writeToFile(fileName, data) {
  console.log(data)

  // Turn data.license into a badge

  // Create a Description section

  // Create a Table of Contents section: containing each section below as a hyperlink

  // Create an Installation section

  // Create a Usage section

  // Create a Contributing section

  // Create a License section

  // Create a Tests section

  // Create a Questions section: link to gitHub profile, instructions on how to contact

  // Create the file with fs.writeFile
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
        name: 'installation'
      },
      {
        type: 'input',
        message: questions[3],
        name: 'usage'
      },
      {
        type: 'input', // Checkbox to select gitHub license options
        message: questions[4],
        name: 'license' 
      },
      {
        type: 'input',
        message: questions[5],
        name: 'contributors'
      },
      {
        type: 'input',
        message: questions[6],
        name: 'tests'
      },
      {
        type: 'input',
        message: questions[7],
        name: 'questions'
      }

      // Ask for author email
    ])
    .then((answers) => {
      const data = JSON.stringify(answers, null, '  ')
      writeToFile("README.md", data)
    });
}

// function call to initialize program
init();

