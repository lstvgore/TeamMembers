const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");
const { ADDRGETNETWORKPARAMS } = require("dns");

const TeamArr = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

function addRole(){
    inquirer
    prompt([{
        type: 'list'
        name: 'addRole'
        message: 'Team Role are you add?'
        Choices: ['Manager', 'Engineer', 'Intern']
    },
])
.then((res) => {
    console.log(res);
    if(res.addRole === 'Manager'){
        addManager();
    } else if(res.addRole === 'Engineer'){
        addEngineer();
    } else {
        addIntern();
    }
})
};

function addManager (){
    inquirer.prompt([
        {
          type: "Input",
          name: "ManagerName",
          message: "what is the Manager's Name?", 
        },
        {
            type: "Input",
            name: "ManagerId",
            message: "what is the Manager's Id?", 
          },
          {
            type: "Input",
            name: "ManagerEmail",
            message: "what is the Manager's Email", 
          },
          {
            type: "Input",
            name: "officeNumber",
            message: "what is the Manager's office number?", 
          },
    ])
    .then((res)) => {
        console.log(res);
        const newManager = new Manager(res.ManagerName, res.ManagerId, res.ManagerEmail, res.ManagerOfficeNumber)
        TeamArr.push(newManager);
        addNew();
    }
};

function addEngineer (){
    inquirer.prompt([
        {
          type: "Input",
          name: "EngineerName",
          message: "what is the Engineer's Name?", 
        },
        {
            type: "Input",
            name: "EngineerId",
            message: "what is the Engineer's Id?", 
          },
          {
            type: "Input",
            name: "EngineerEmail",
            message: "what is the Engineer's Email", 
          },
          {
            type: "Input",
            name: "Github",
            message: "what is the Engineer's Github?", 
          },
    ])
    .then((res)) => {
        console.log(res);
        const newEngineer = new Engineer(res.EngineerName, res.EngineerId, res.EngineerEmail, res.EngineerGithub)
        TeamArr.push(newEngineer);
        addNew();
    }
};
function addIntern (){
    inquirer.prompt([
        {
          type: "Input",
          name: "InternName",
          message: "what is the Intern's Name?", 
        },
        {
            type: "Input",
            name: "InternId",
            message: "what is the Intern's Id?", 
          },
          {
            type: "Input",
            name: "InternEmail",
            message: "what is the Intern's Email", 
          },
          {
            type: "Input",
            name: "School",
            message: "what is the Intern's office School?", 
          },
    ])
    .then((res)) => {
        console.log(res);
        const newIntern = new Intern(res.InternName, res.InternId, res.InternEmail, res.InternSchool)
        TeamArr.push(newIntern);
        addNew();
    }
};
function addNew (){
    inquirer.prompt([
        {
          type: "Input",
          name: "addName",
          message: "Would you like to add new team member?", 
        }
    ])
    .then((res)) => {
        if(res.addNew === true){
            addRole();
        } else{
            renderTeam
        }
    }
};
function renderTeam (){

}

addRole()