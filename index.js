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
    message: 'What is your office number?',
    name: 'officeNumber',
},
{
    type: 'input',
    message: 'What is your I.D. Number?',
    name: 'userID',
},
{
    type: 'input',
    message: 'What is your E-mail?',
    name: 'userEmail',
}
];

const questionsTeam = [
    {
        type: 'list',
        message: 'Add member or build team',
        choices: ['Engineer', 'Intern', 'Done: Build Team'],
        name: 'teamRole',
}
];

const questionsEngineer = [
{
    type: 'input',
    message: 'What is your name?',
    name: 'userName',
},
{
    type: 'input',
    message: 'What is your I.D. Number?',
    name: 'userID',
},
{
    type: 'input',
    message: 'What is your E-mail?',
    name: 'userEmail',
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'userGit',
}
];

const questionsIntern = [
{
    type: 'input',
    message: 'What is your name?',
    name: 'userName',
},
{
    type: 'input',
    message: 'What is your I.D. Number?',
    name: 'userID',
},
{
    type: 'input',
    message: 'What is your E-mail?',
    name: 'userEmail',
},
{
    type: 'input',
    message: 'Where did you go to school?',
    name: 'userSchool',
}
];


function init() {
    inquirer.prompt(questionsManager)
    .then((data) => {
        let details =''
        const manager = new Manager(data.userName, data.userID, data.userEmail, data.officeNumber)
        details = JSON.stringify(manager);
        myTeam.push(manager);
        teamAddition();
    })
}


function teamAddition() {
    inquirer.prompt(questionsTeam)
    .then((data) => {
    if (data.teamRole == 'Engineer'){
        
        addEngineer();
    }
    else if (data.teamRole == 'Intern'){

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
        const engineer = new Engineer(data.userName, data.userID, data.userEmail, data.userGit)
        myTeam.push(engineer);
        teamAddition();
    })
}

function addIntern() {
    inquirer.prompt(questionsIntern)
    .then((data) => {
        const intern = new Intern(data.userName, data.userID, data.userEmail, data.userSchool)
        myTeam.push(intern);
        teamAddition();
    })
}

function buildTeam(myTeam){
    console.log(myTeam);
    const convertTeam = JSON.stringify(myTeam)
    console.log(convertTeam);

    fs.writeFile('test.html', generateData(myTeam), (err) => {
        err ? console.error(err) : console.log('Success!')
})
}


init();