const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const templateHTML = require("./src/generateHTML");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const teamMembers = [];

function init() {

  function createManager() {
    // Filler string to visually block out and organize the terminal for user
    console.log(`
    ---------------------------
    Welcome to Team-generator!
    ---------------------------
    `);
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Hello manager! What is your name?"

      },
      {
        type: "input",
        name: "id",
        message: "Please enter your employee ID."
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address."
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
      }
    ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      // Put the newly created manager object into the array of team members.
      teamMembers.push(manager);
      // Create team will open the prompt menu to ask what employees they would like to add. 
      createTeam();
    })
  };

  // What type of employee are you wanting to add?
  function createTeam() {
    return inquirer.prompt([
      {
        type: "list",
        name: "promptMenu",
        message: "Which employee type would you like to add to your team?",
        choices: ["Engineer", "Intern", "My team is complete."]
      }])
      // Based on the choice, run the appropriate function.
      .then(choice => {
        switch (choice.promptMenu) {
          case "Engineer":
            response = addEngineer();
            break;
          case "Intern":
            response = addIntern();
            break;
          default:
            response = buildTeam();
            break;
        } return response;
      });
  };
  
  function addEngineer(){
    // Filler string to visually block out and organize the terminal for user
    console.log(`
    ----------------------
    Creating new Engineer
    ----------------------
    `);
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?."
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?"
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's Github username?"
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamMembers.push(engineer);
      // Return to createTeam prompt menu
      createTeam();
    })
  };

  function addIntern(){
    // Filler string to visually block out and organize the terminal for user
    console.log(`
    ----------------------
    Creating new Intern
    ----------------------
    `);
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?."
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?"
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
      }
    ]).then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      teamMembers.push(intern);
      // Return to createTeam prompt menu
      createTeam();
    })
  };
  
  function buildTeam() {
    // Filler string to visually block out and organize the terminal for user
    console.log(`
    ---------------------------
    Finished building the team!
    ---------------------------
    `);
    
    // probably call a function, passing in your team members array - send it to another js file 
    fs.writeFileSync("dist/index.html", templateHTML(teamMembers), "utf-8");
    console.log("File written successfully!\n");
    console.log("The written has the following contents to index.html:\n");
    console.log(fs.readFileSync("dist/index.html", "utf8"));
  }

  // Calling this at the end of the init will make it the first question asked.
  createManager();
} 
init();