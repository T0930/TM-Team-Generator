const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');


function generateData(details){

    return `<!DOCTYPE html>
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
    s
    <body>
    
      <div class="fullRoster">
        <div class="rosterClass" id="rosterId">
    
          <div class="roster-card manager">
            <div class="name">Name</div>
            <div class="role manager"><i class="fas fa-mug-hot"></i>${details.value}</div>
                <ul>
                    <li class = 'empID'>ID #</li>
                    <li class = 'empEmail'><a href="mailto:email@example.com">Employee E-mail</a></li>
                    <li class = 'officeNum'>Office #</li>
                </ul>
          </div>
    
          <div class="roster-card engineer">
            <div class="name">Name</div>
            <div class="role engineer"><i class="fas fa-glasses"></i> Engineer</div>
                <ul>
                    <li class = 'empID'>ID #</li>
                    <li class = 'empEmail'><a href="mailto:email@example.com">Employee E-mail</a></li>
                    <li class = 'empGithub'><a href="https://www.github.com/" target="_blank">GitHub Link</a></li>
                </ul>
          </div>
    
          <div class="roster-card engineer">
            <div class="name">Name</div>
            <div class="role engineer"><i class="fas fa-glasses"></i> Engineer</div>
                <ul>
                    <li class = 'empID'>ID #</li>
                    <li class = 'empEmail'><a href="mailto:email@example.com">Employee E-mail</a></li>
                    <li class = 'empGithub'><a href="https://www.github.com/" target="_blank">GitHub Link</a></li>
                </ul>
          </div>
    
          <div class="roster-card engineer">
            <div class="name">Name</div>
            <div class="role engineer"><i class="fas fa-glasses"></i> Engineer</div>
                <ul>
                    <li class = 'empID'>ID #</li>
                    <li class = 'empEmail'><a href="mailto:email@example.com">Employee E-mail</a></li>
                    <li class = 'empGithub'><a href="https://www.github.com/" target="_blank">GitHub Link</a></li>
                </ul>
          </div>
    
          <div class="roster-card intern">
            <div class="name">Name</div>
            <div class="role intern"><i class="fas fa-user-graduate"></i> Intern</div>
                <ul>
                    <li class = 'empID'>ID #</li>
                    <li class = 'empEmail'><a href="mailto:email@example.com">Employee E-mail</a></li>
                    <li class = 'school'>Intern School</li>
                </ul>
          </div>
    
        </div>
      </div>
      </div>`;
}
















module.exports = generateData;