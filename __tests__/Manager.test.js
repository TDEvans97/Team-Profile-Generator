const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Manager(name);
    expect(e.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.id).toBe(testValue);
  });
  
  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  
  test("Can get name via getOfficeNumber()", () => {
    const testValue = "1234";
    const e = new Manager("name", 1, "name@email.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });