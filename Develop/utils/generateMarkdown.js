// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const license = data.license[0];
  let licenseLK = " ";
  if(license == 'MIT License') {
    licenseLK = `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)`
  } else if (license == 'GNU GPLv3') {
    licenseLK = `[![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`
  } else if (license == 'Apache License 2.0') {
    licenseLK = `[![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)`
  } else if (license == 'Boost Software License 1.0') {
    licenseLK = `[![License: Boost](https://img.shields.io/badge/License-Boost-blue.svg)](https://choosealicense.com/licenses/bsl-1.0/)`
  } else if (license == 'The Unlicense') {
    licenseLK = `[![License: Boost](https://img.shields.io/badge/License-Boost-blue.svg)](https://choosealicense.com/licenses/unlicense/)`
  } else {
    licenseLK = ''
  }
  return licenseLK;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const license = data.license;
  let licenseLink = " ";
  if(license == 'MIT License') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license == 'GNU GPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/'
  } else if (license == 'Apache License 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/'
  } else if (license == 'Boost Software License 1.0') {
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/'
  } else if (license == 'The Unlicense') {
    licenseLink = 'https://choosealicense.com/licenses/unlicense/'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(data) {
//   const license = data.license[0];
//   let licenseDisplay = " ";
//   if(license == null) {
//     licenseDisplay = '';
//   } else {
//     licenseDisplay = `${data.license}`
//   }
//   return licenseDisplay;
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents (Optional)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Installation
  ${data.install}
  ## Credits
  ${data.credit}
  ## License
  ${renderLicenseBadge(data)}
  </br>
  ${renderLicenseLink(data)}
  

  ## Questions
  If you have any questions, please use the contact information below
  Email: ${data.emails}
  GitHub: https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
