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
  ${data.contributors}
  # Tests
  ${data.tests}
  # Questions
  Have a question? Email me at [${data.author}](mailto:${data.author})
  `;
}

// Turn data.license into a badge
function badgeMaker(license) {
  let badgeImg;
  let badgeURL;

  switch (license) {
    case "None":
      badgeImg = "";
      badgeURL = "";
      break;
    case "Apache License 2.0":
      badgeImg = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      badgeURL = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GNU General Public License v3.0":
      badgeImg = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      badgeURL = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "MIT License":
      badgeImg = "https://img.shields.io/badge/License-MIT-yellow.svg";
      badgeURL = "https://opensource.org/licenses/MIT";
      break;
    case 'BSD 2-Clause "Simplified" License':
      badgeImg =
        "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg";
      badgeURL = "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badgeImg =
        "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
      badgeURL = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Boost Software License 1.0":
      badgeImg =
        "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg";
      badgeURL = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "Creative Commons Zero v1.0 Universal":
      badgeImg = "https://licensebuttons.net/l/zero/1.0/80x15.png";
      badgeURL = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case "Eclipse Public License 2.0":
      badgeImg = "https://img.shields.io/badge/License-EPL%201.0-red.svg";
      badgeURL = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "GNU Affero General Public License v3.0":
      badgeImg = "https://img.shields.io/badge/License-AGPL%20v3-blue.svg";
      badgeURL = "https://www.gnu.org/licenses/agpl-3.0";
      break;
    case "GNU General Public License v2.0":
      badgeImg = "https://img.shields.io/badge/License-GPL%20v2-blue.svg";
      badgeURL = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "GNU Lesser General Public License v2.1":
      badgeImg = "https://img.shields.io/badge/License-LGPL%20v3-blue.svg";
      badgeURL = "https://www.gnu.org/licenses/lgpl-3.0";
      break;
    case "Mozilla Public License 2.0":
      badgeImg =
        "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
      badgeURL = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "The Unilicense":
      badgeImg = "https://img.shields.io/badge/license-Unlicense-blue.svg";
      badgeURL = "http://unlicense.org/";
      break;
  }
  return `[![License](${badgeImg})](${badgeURL})`;
}

module.exports = generateMarkdown;
