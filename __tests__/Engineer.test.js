const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Engineer(name);
    expect(e.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Engineer("Foo", testValue);
    expect(e.id).toBe(testValue);
  });
  
  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Engineer("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  
  test("Can get name via getGithub()", () => {
    const testValue = "Alice98";
    const e = new Engineer("name", 1, "email", testValue);
    expect(e.getGithub()).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });