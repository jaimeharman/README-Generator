const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("../Develop/utils/generateMarkdown");

// array of questions for user
const questions = [
  "Enter a title",
  "Enter a description", 
  "Enter an installation",
  "Enter a usage",
  "Enter a license",
  "Enter a contributor", 
  "Enter a test", 
  "Enter a question",
  "Enter author's email address"
];

// function to write README file
function writeToFile(fileName, data) {
  console.log(data)
  const markup = generateMarkdown(data)

  fs.writeFile(fileName, markup, 'utf8', function(err) {
    if (err) {
      console.log(err)
    } 
});
}

// function to initialize program
function init() {
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
        type: 'list', 
        message: questions[4],
        name: 'license', 
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'New' or 'Revised' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unilicense"] 
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
      },
      {
        type: 'input',
        message: questions[8],
        name: 'author'
      }
    ])
    .then((answers) => {
      writeToFile("README.md", answers)
    });
}

// function call to initialize program
init();

