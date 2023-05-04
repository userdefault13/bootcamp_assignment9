const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license for your project:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide testing instructions for your project:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please provide any additional information or instructions for your project:',
    },
  ])
  .then((answers) => {
    const licenseBadge = `![License](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-green.svg)`;

    const licenseNotice = `This project is licensed under the ${answers.license} license.`;

    const questionsSection = `
## Questions
For any questions or feedback regarding this application, please feel free to reach out to me at ${answers.email} or on [GitHub](https://github.com/${answers.github}).
${answers.questions}`;

    const content = `
# ${answers.title}
${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${licenseNotice}

${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

${questionsSection}
`;

    fs.writeFile('README.md', content, (err) => {
      if (err) throw err;
      console.log('README.md has been successfully generated!');
    });
  })
  .catch((err) => {
    console.error(err);
  });
