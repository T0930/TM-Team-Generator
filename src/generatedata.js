const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');


let generateManager = (Manager) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-header">
     <div>${Manager.getName()}</div>
    <i class="fas fa-mug-hot"></i> ${Manager.getRole()}
  </div>
  <ul id = "ulist" class="list-group list-group-flush">
    <li class="list-group-item ulist">Employee ID#: ${Manager.getId()}</li>
    <li class="list-group-item ulist"><a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
    <li class="list-group-item ulist">Office #: ${Manager.getOfficeNumber()}</li>
  </ul>
</div>
`
}

let generateEngineer = (Engineer) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-header">
     <div>${Engineer.getName()}</div>
     <i class="fas fa-glasses"></i> ${Engineer.getRole()}
  </div>
  <ul id = "ulist" class="list-group list-group-flush">
    <li class="list-group-item ulist">Employee ID#: ${Engineer.getId()}</li>
    <li class="list-group-item ulist"><a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
    <li class="list-group-item ulist"><a href="https://www.github.com/${Engineer.getGithub()}" target="_blank">GitHub Profile</a></li>
  </ul>
</div>
`
}

let generateIntern = (Intern) => {
  return `
  <div class="card" style="width: 18rem;">
  <div class="card-header">
     <div>${Intern.getName()}</div>
     <i class="fas fa-user-graduate"></i> ${Intern.getRole()}
  </div>
  <ul id = "ulist" class="list-group list-group-flush">
    <li class="list-group-item ulist">Employee ID#: ${Intern.getId()}</li>
    <li class="list-group-item ulist"><a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
    <li class="list-group-item ulist">School: ${Intern.getSchool()}</li>
  </ul>
</div>
`
}

function generateTeam(myTeam){
  let boxes = [];
  for(let i = 0; i < myTeam.length; i++){
    let wholeTeam = myTeam[i];
    if ((wholeTeam.getRole()) === 'Manager') {
      const manager = new Manager(wholeTeam.name, wholeTeam.id, wholeTeam.email, wholeTeam.officeNumber);
      boxes.push(generateManager(manager));
    } else if ((wholeTeam.getRole()) === "Engineer") {
      const engineer = new Engineer(wholeTeam.name, wholeTeam.id, wholeTeam.email, wholeTeam.github);
      boxes.push(generateEngineer(engineer));
    } else {
      const intern = new Intern(wholeTeam.name, wholeTeam.id, wholeTeam.email, wholeTeam.school);
      boxes.push(generateIntern(intern));
    }
}
return boxes.join('')
}

function generateData(myTeam){
    return `  <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>TM-Team-Gen-Template</title>
    </head>
    
    <header>
      <div class="page-header">
        <h1 class= "teamGeneratorText">Team Generator</h1>
      </div>
      <h2 class = "myTeamText">My Team</h2>
    </header>
    <body>
    
      <div class="fullRoster">
        <div class="rosterClass" id="rosterId">
            ${generateTeam(myTeam)}
        </div>
      </div>
      </div>`;
}

module.exports = generateData;