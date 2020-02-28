const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");

let role;
let name;
let id;
let github;
let email;
let officeNumber;
let school;

const employees = [];

const menu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'Employee Role',
            message: "What is the role? Select 'Done' if no more employees",
            choices: ['Engineer', 'Intern', 'Manager', 'Done']
        },
    ]).then(teamMembers => {
        console.log(teamMembers);
        role = workers['Employee Role'];
        console.log(role);

        eachRole()
    })
}

const eachRole = () => {
    switch(role) {

        case "Engineer":
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'Github Username',
                    message: "What is the engineer's GitHub username?"
                }
            ]).then(handle => {
                console.log(handle);
                github = handle["GitHub Username"];
                console.log(github);
                allRoles();
            })

            break;
        
        case 'Manager':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'Office Number',
                    message: "what is the manager's office number?"
                }
            ]).then(office => {
                console.log(office);
                officeNumber = office["office Number"];
                console.log(officeNumber);
                allRoles();
            })

            break;

            case 'Intern':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'School',
                        message: "Which school is the intern attending?"
                    }
                ]).then(school => {
                    console.log(school);
                    school = school['School'];
                    console.log(school);
                    allRoles();
                })

                break;

                case 'Done':
                    render(employees)    
    }
}

submenu2 = allRoles
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
