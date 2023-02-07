const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const HTMLtemplate = require("./src/template.js");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outPutPath = path.join(OUTPUT_DIR, "profile.html");

// array to hold the team members to be used for the html
const teamArray = [];

// creates html file with the data stored in the teamArray
const createTeam = () => {
  fs.writeFileSync(outPutPath, HTMLtemplate(teamArray), "utf-8");
};

// prompt to start a team with a manager, when complete will run createMembers() to add additional team members
const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please input the managers name.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please input a valid name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please input the managers email address.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please input a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please input the managers employee id.",
        validate: (employeeIdInput) => {
          if (employeeIdInput) {
            return true;
          } else {
            console.log("Please input a valid employee id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please input the managers office number.",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please input a valid office number!");
            return false;
          }
        },
      },
    ])
    .then((inputs) => {
      const manager = new Manager(
        inputs.name,
        inputs.email,
        inputs.employeeId,
        inputs.officeNumber
      );
      teamArray.push(manager);
      createMembers();
    });
};

// prompt to add additional team members
const createMembers = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "createMember",
        message: "Please select one of the following prompts",
        choices: ["Create engineer", "Create intern", "Create team"],
      },
    ])
    .then((userInput) => {
      switch (userInput.createMember) {
        case "Create engineer":
          createEngineer();
          break;
        case "Create intern":
          createIntern();
          break;
        default:
          createTeam();
      }
    });
};

// prompt to add an engineer to the team
const createEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please input the name of the engineer.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please input a valid name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please input the engineers email address.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please input a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please input the engineers employee id.",
        validate: (employeeIdInput) => {
          if (employeeIdInput) {
            return true;
          } else {
            console.log("Please input a valid employee id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "gitHubAccount",
        message: "Please input the engineers Github account.",
        validate: (gitHubAccount) => {
          if (gitHubAccount) {
            return true;
          } else {
            console.log("Please input a valid Github account!");
            return false;
          }
        },
      },
    ])
    .then((inputs) => {
      const engineer = new Engineer(
        inputs.name,
        inputs.email,
        inputs.employeeId,
        inputs.gitHubAccount
      );
      teamArray.push(engineer);
      createMembers();
    });
};

// prompt to add an intern to the team
const createIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please input the name of the intern.",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please input a valid name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please input the interns email address.",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please input a valid email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please input the interns employee id.",
        validate: (employeeIdInput) => {
          if (employeeIdInput) {
            return true;
          } else {
            console.log("Please input a valid employee id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "Please input the name of the interns school.",
        validate: (internSchool) => {
          if (internSchool) {
            return true;
          } else {
            console.log("Please input a valid school!");
            return false;
          }
        },
      },
    ])
    .then((inputs) => {
      const intern = new Intern(
        inputs.name,
        inputs.email,
        inputs.employeeId,
        inputs.internSchool
      );
      teamArray.push(intern);
      createMembers();
    });
};

// starts the app by creating a manager for the team
createManager();
