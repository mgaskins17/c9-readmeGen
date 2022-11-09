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
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please list guidelines for contributing to your project',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'placeholder',
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
    const rmTemplate = 
        `# ${title}
        
        ## Description
        ${description}
        
        ## Table of Contents
        Add links here
        
        ##Installation
        ${installation}
        
        ## Usage
        ${usage}
        
        ## License
        ${license}
        
        ## Contributing
        ${contributing}
        
        ## Tests
        ${tests}
        
        ## Questions
        Please refer to either my github or email with questions
        ${email}
        https://github.com/${github} 
        ` 

   fs.writeFile('README.md', `${rmTemplate}`, (err) => err ? console.error(err) : console.log(`README Generated`))
})
