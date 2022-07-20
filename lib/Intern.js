const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // Call parent constructor properties
    super(name, id, email);
    
    // Instance properties
    this.school = school;
  }

  // Instance methods
  getSchool() {
    return this.school;
  }
  // Used polymorphism to override the parent class' getRole value
  getRole() {
    return "Intern";
  }
}
  
module.exports = Intern;