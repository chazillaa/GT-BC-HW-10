// places manager data into a div template
const createManager = (manager) => {
  return `
    <div class="card m-1" style="width: 18rem;">
        <div class="card-header bg-danger">
            <h2 class="card-title text-light">${manager.getName()}</h2>
        <h3 class="text-light"><i class="fas fa-mug-hot" style="color:white"></i> Manager</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</a></li>
        </ul>
    </div>
    `;
};

// places engineer data into a div template
const createEngineer = (engineer) => {
  return `
    <div class="card m-1" style="width: 18rem;">
        <div class="card-header bg-danger">
            <h2 class="card-title text-light">${engineer.getName()}</h2>
        <h3 class="text-light"><i class="fas fa-mug-hot" style="color:white"></i> Manager</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: <a href="https://www.github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
        </ul>
    </div>
    `;
};

// places intern data into a div template
const createIntern = (intern) => {
  return `
    <div class="card m-1" style="width: 18rem;">
        <div class="card-header bg-danger">
            <h2 class="card-title text-light">${intern.getName()}</h2>
        <h3 class="text-light"><i class="fas fa-mug-hot" style="color:white"></i> Manager</h3>
        </div>
        <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${intern.getId()}</li>
             <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
             <li class="list-group-item">School: ${intern.getSchool()}</li>
         </ul>
    </div>
    `;
};

// For loop that goes through the inputs, creates a div for each team member, and then puts them into one div
const createDiv = (teamArray) => {
  let createTeam = "";

  for (i = 0; i < teamArray.length; i++) {
    if (teamArray[i].getRole() === "Manager") {
      createTeam = createTeam + createManager(teamArray[i]);
    }
    if (teamArray[i].getRole() === "Engineer") {
      createTeam = createTeam + createEngineer(teamArray[i]);
    }
    if (teamArray[i].getRole() === "Intern") {
      createTeam = createTeam + createIntern(teamArray[i]);
    }
  }
  return createTeam;
};

// HTML template that takes in the team member divs
const createHTML = (inputs) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
    <div class="container-fluid">
    <div class="row">
    <div class="col-12 jumbotron mb-3 team-heading bg-primary">
      <h1 class="text-center text-light">My Team</h1>
    </div>
    </div>
    </div>
    <div class="container">
    <div class="row p-5">
      ${createDiv(inputs)}
    </div>
    </div>
    </div>
    </body>
    </html>
    `;
};

module.exports = createHTML;
