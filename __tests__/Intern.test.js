const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Intern(name);
    expect(e.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.id).toBe(testValue);
  });
  
  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Intern("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  
  test("Can get name via getSchool()", () => {
    const testValue = "Harvard";
    const e = new Intern("name", 1, "name@email.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });