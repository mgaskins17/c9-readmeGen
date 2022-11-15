const fs = require('fs');
const inquirer = require('inquirer');

const promptQuestions = [
    {
        type: 'input',
        message: 'What is your project title.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description of your projects purpose.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter installation guidelines.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please describe how to use your project.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What type of license do you have?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please list guidelines for contributing to your project',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please describe what tests you performed on your project',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please enter your github username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    }, 
    
]
inquirer.prompt(promptQuestions).then(({title, description, installation, usage, license, contributing, tests, email, github}) => {
    let badgeUrl;
    let licenseUrl;
    switch(license){
        case 'Apache License 2.0':
            licenseUrl = `![License: Apache 2.0]`
            badgeUrl = '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
            break;
        case 'GNU General Public License v3.0':
            licenseUrl = `![License: GPL v3]`
            badgeUrl = '(https://img.shields.io/badge/License-GPLv3-blue.svg)';
            break;
        case 'MIT License':
            licenseUrl = `![License: MIT]`
            badgeUrl = `(https://img.shields.io/badge/License-MIT-yellow.svg)`;
            break;
    }
    const rmTemplate = 
`# ${title} ${licenseUrl}${badgeUrl}</br>

# Table of Contents
<a href = 'https://github.com/EfSoren/c9-readmeGen/edit/main/README.md#description'> Description</a></br>
<a href = 'https://github.com/EfSoren/c9-readmeGen/edit/main/README.md#installation'> Installation</a></br>
<a href = 'https://github.com/EfSoren/c9-readmeGen/edit/main/README.md#usage'> Usage</a></br>
<a href = 'https://github.com/EfSoren/c9-readmeGen/edit/main/README.md#license'> License</a></br>
<a href = 'https://github.com/EfSoren/c9-readmeGen/edit/main/README.md#contributing'> Contributing</a></br>
<a href = 'https://github.com/EfSoren/c9-readmeGen/edit/main/README.md#tests'> Tests</a></br>
<a href = 'https://github.com/EfSoren/c9-readmeGen/edit/main/README.md#questions'> Questions</a></br>

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
This repo is licensed under the ${license}

## Contributing
Guidelines for contributing to this project are as follows </br>
</br>
${contributing}

## Tests
${tests}

## Questions
Please refer to either my github or email with any questions you may have</br>
https://github.com/${github} </br>
${email}</br>
` 
    
   fs.writeFile('README.md', `${rmTemplate}`, (err) => err ? console.error(err) : console.log(`README Generated`))
})
