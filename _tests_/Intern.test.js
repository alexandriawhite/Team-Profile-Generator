const Intern = require("../lib/Intern");

test("Sets school via constructor", () => {
  const testValue = "TCU";
  const e = new Intern("Alexandria", 1, "example@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Alexandria", 1, "example@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Generates school via getSchool()", () => {
  const testValue = "TCU";
  const e = new Intern("Alexandria", 1, "example@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});