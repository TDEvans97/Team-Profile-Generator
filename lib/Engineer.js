const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Call parent constructor properties
    super(name, id, email);
    
    // Instance properties
    this.github = github;
  }

  // Instance methods
  getGithub() {
    return this.github;
  }
  // Used polymorphism to override the parent class' getRole value
  getRole() {
    return "Engineer";
  }
}
  
module.exports = Engineer;