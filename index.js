const inquirer = require('inquirer'); /// npm init -y /// npm i inquirer
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateData = require('./src/generatedata');
const fs = require('fs');

let myTeam = [];

const questionsManager =[
{
    type: 'input',
    message: "What is your manager's name?",
    name: 'userName',
},
{
    type: 'input',
    message: 'What is manager office number?',
    name: 'officeNumber',
},
{
    type: 'input',
    message: 'What is manager I.D. Number?',
    name: 'userID',
},
{
    type: 'input',
    message: 'What is manager E-mail?',
    name: 'userEmail',
}
];

const questionsTeam = [
    {
        type: 'list',
        message: 'Add member or complete team',
        choices: ['Add Engineer', 'Add Intern', 'Done: Build Team'],
        name: 'teamRole',
}
];

const questionsEngineer = [
{
    type: 'input',
    message: 'What is engineer name?',
    name: 'userName',
},
{
    type: 'input',
    message: 'What is engineer I.D. Number?',
    name: 'userID',
},
{
    type: 'input',
    message: 'What is engineer E-mail?',
    name: 'userEmail',
},
{
    type: 'input',
    message: 'What is engineer GitHub username?',
    name: 'github',
}
];

const questionsIntern = [
{
    type: 'input',
    message: 'What is intern name?',
    name: 'userName',
},
{
    type: 'input',
    message: 'What is intern I.D. Number?',
    name: 'userID',
},
{
    type: 'input',
    message: 'What is intern E-mail?',
    name: 'userEmail',
},
{
    type: 'input',
    message: 'Where did intern go to school?',
    name: 'school',
}
];


function init() {
    inquirer.prompt(questionsManager)
    .then((data) => {
        const manager = new Manager(data.userName, data.userID, data.userEmail, data.officeNumber)
        myTeam.push(manager);
        teamAddition();
    })
}


function teamAddition() {
    inquirer.prompt(questionsTeam)
    .then((data) => {
    if (data.teamRole == 'Add Engineer'){
        
        addEngineer();
    }
    else if (data.teamRole == 'Add Intern'){

        addIntern();
    }
    else {
        buildTeam(myTeam);
    }
 })       
}


function addEngineer() {
    inquirer.prompt(questionsEngineer)
    .then((data) => {
        const engineer = new Engineer(data.userName, data.userID, data.userEmail, data.github)
        myTeam.push(engineer);
        teamAddition();
    })
}

function addIntern() {
    inquirer.prompt(questionsIntern)
    .then((data) => {
        const intern = new Intern(data.userName, data.userID, data.userEmail, data.school)
        myTeam.push(intern);
        teamAddition();
    })
}

function buildTeam(myTeam){
    console.log(myTeam);
    fs.writeFile('test.html', generateData(myTeam), (err) => {
        err ? console.error(err) : console.log('Success!')
})
}

init();