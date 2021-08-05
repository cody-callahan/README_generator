// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

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
  ##Credits
  ${data.credit}
  ##License
  ${data.license}
  ##Questions
  If you have any questions, please use the contact information below
  Email: ${data.emails}
  GitHub: https://github.com/${data.github}
  
`;
}

module.exports = generateMarkdown;
