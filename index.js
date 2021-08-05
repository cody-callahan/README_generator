// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a project title.');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'description',
    message: 'Describe your project',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please describe your project');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
    validate: instructionsInput => {
      if (instructionsInput) {
        return true;
      } else {
        console.log('Please enter installation instructions');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use',
    validate: instructionsInput => {
      if (instructionsInput) {
        return true;
      } else {
        console.log('Please explain instuctions for use');
        return false;
      }
    }
  }, 
  // true/false: were there any collaborators?
  {
    type: 'confirm',
    name: 'confirmCollaborators',
    message: 'Are there any collaborators on this project?',
    default: false
  }, {
    type: 'input',
    name: 'credit',
    message: 'List your collaborators',
    when: ({confirmCollaborators}) => {
        if (confirmCollaborators) {
          return true;
        } else {
          return false;
        }
      }
  },
  // true/false: are there any additional collaborators?
//   {
//     type: 'confirm',
//     name: 'confirmAdditionalCollaborators',
//     message: 'Are there any additional collaborators on this project?',
//     default: false,
//     when: ({confirmCollaborators}) => {
//         if (confirmCollaborators) {
//           return true;
//         } else {
//           return false;
//         }
//       }
//   }
{
    type: 'checkbox',
    name: 'license',
    message: 'Please select a license for this project',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
  }, {
    type: 'input',
    name: 'username',
    message: 'Please enter your github username',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter your github username');
        return false;
      }
    }
  }, {
    type: 'input',
    name: 'email',
    message: 'Please enter your email',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFile('./GENERATED_README.md', data, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out index.html in this directory to see it!');
      })
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then(answers => {
        writeToFile(generateMarkdown(answers));
        console.log(answers);
    });
};


// Function call to initialize app
init();
