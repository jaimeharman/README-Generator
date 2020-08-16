// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${badgeMaker(data.license)}
  # ${data.title}
  # Description
  ${data.description}
  # Table of Contents 
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Contributing
  ${data.contributing}
  # Tests
  ${data.tests}
  # Questions
  ${data.questions}
  Have a question? Email me at [${data.author}](mailto:${data.author})
  `
}

// Turn data.license into a badge
function badgeMaker(license) {
  return license
}
module.exports = generateMarkdown;
