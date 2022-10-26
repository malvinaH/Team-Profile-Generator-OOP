// DEPENDENCIES
// npm
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// JS files
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "Id",
            message: "Enter your employee ID",
            validate: Id => {
                if (Id) {
                    return true;
                } else {
                    console.log("Please enter your employee ID!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your office number",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Please enter your office number!");
                    return false;
                }
            }
        },
    ]).then(response => {
        const managerObj = new Manager(response.name, response.Id, response.email, response.officeNumber);
        teamMembers.push(managerObj);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Please select which option you would like to continue with:",
            choices: ["add an engineer", "add an intern", "finish building my team"]
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`

// add new engineer

    `);

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of engineer? ",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log("Please enter the name of engineer!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "Id",
            message: "Enter your employee ID ",
            validate: Id => {
                if (Id) {
                    return true;
                } else {
                    console.log("Please enter your employee ID!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address ",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "githubUsername",
            message: "Enter your Github username. ",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter your Github username!");
                    return false;
                }
            }
        }
    ]).then(response => {
        console.log(response);
        const engineer = new Engineer(response.name, response.Id, response.email, response.github);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    // Add a New Intern
    `);

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the intern? ",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter the name of the intern!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "Id",
            message: "Enter your employee ID ",
            validate: Id => {
                if (Id) {
                    return true;
                } else {
                    console.log("Please enter your employee ID!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address ",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter your school name. ",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter your school name!");
                    return false;
                }
            }
        }
    ]).then(response => {
        console.log(response);
        const intern = new Intern(response.name, response.Id, response.email, response.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    // Finished building my team!
    `);
}

promptManager();