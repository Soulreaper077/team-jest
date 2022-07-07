const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');
const Manager = require('./lib/Manager'); 
const Intern = require('./lib/Intern'); 
const Engineer = require('./lib/Engineer');

const teamMemebers = []; 
// prompt the set of questions for the manager 
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: ' what is your name (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true; 
                } else {
                    console.log('please enter your name ')
                    return false; 
                }
            } 
        }, 
        {
            type: 'input',
            name: 'employeeId',
            message: ' Enter your employee id (required)',
            validate: employeeId => {
                if (employeeId) {
                    return true; 
                } else {
                    console.log('please enter a valid ID ')
                    return false; 
                }
            } 
        }, 
        {
            type: 'input',
            name: 'email',
            message: ' what is your email(required)',
            validate: email => {
                if (email) {
                    return true; 
                } else {
                    console.log('please enter an email ')
                    return false; 
                }
            } 
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: ' Enter your office number (required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true; 
                } else {
                    console.log('please enter your office number ')
                    return false; 
                }
            } 
        },  // end of the manager questions 
    ]) .then(data => {
        //console.log(data); 
        const manager = new Manager(data.name, data.employeeId, data.email, data.officeNumber);
        teamMemebers.push(manager); // push the new manager into the team members array 
        menu(); // prompt the meu function 
    })
}

const menu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'would you like to add anything else?',
            choices: ['add engineer', 'add intern', 'finish']
        }])
        .then(userChoice => {  // adding a switch statement to filter through the choices 
            switch (userChoice.menu) {
                case 'add engineer': // if they choose eignieer 
                    promptEngineer(); // prompt the engineer questions 
                    break;
                case 'add intern': // if they chose intern 
                    promptIntern(); // prompt the intern questions 
                    break;
                default: // default of none of these cases are chosen 
                    genPage(); // generate the team html page     
            }
        }); 
};
// prompted questions for the engineer employee 
const promptEngineer = () => {
    console.log('add an enginner');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:' what is the engineers name',
            valdate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message:' enter your employee ID (required)',
            valdate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('please enter a valid id')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message:' enter your email address (required)',
            valdate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('please enter a valid email address')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message:' what is your github username? (required)',
            valdate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('please enter your github username!')
                    return false; 
                }
            }
        }
        // end of the engineer questions 
    ]).then(data => {
        //console.log(data); 
        const enginner = new Engineer(data.name, data.employeeId, data.email, data.githubUsername);
        teamMemebers.push(enginner); // pushing new engineer to the array 
        menu(); // prompt menu function 
    })
}; 
// prompt the questions for the intern employee 
const promptIntern = () => {
    console.log('add an intern');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:' what is the name of the intern (required) ',
            valdate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log( 'please enter the name of the intern')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message:' enter your employee ID (required)',
            valdate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('please enter a valid id')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message:' enter your email address (required)',
            valdate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('please enter a valid email address')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message:' enter the school name (required)',
            valdate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('please enter your school! ')
                    return false; 
                }
            }
        }
        // end of the intern questions 
    ]).then(data => {
        console.log(data); 
        const intern = new Intern(data.name, data.employeeId, data.email, data.school);
        teamMemebers.push(intern); // push new intern into the array 
        menu(); // prompt the menu 
    })
}; 
// function in order to generate the page with the employees 
const genPage = () => {
    const saveData = generateHTML(teamMemebers); // pushing the team members into the genrate page 
    fs.writeFileSync('team.html', saveData) // writing the html wile with the saved data 
    console.log('Your team has been built! ') 
}

promptManager(); // first prompt 