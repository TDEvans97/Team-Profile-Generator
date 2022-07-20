const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Call parent constructor properties
    super(name, id, email);
    
    // Instance properties
    this.officeNumber = officeNumber;
  }

  // Instance methods
  getOfficeNumber() {
    return this.officeNumber;
  }
  // Used polymorphism to override the parent class' getRole value
  getRole() {
    return "Manager";
  }
}
  
module.exports = Manager;