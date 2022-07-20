class Employee {
  constructor(name, id, email) {
    // Instance properties
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Instance methods
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;