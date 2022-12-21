const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Generates office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Alexandria", 1, "example@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Alexandria", 1, "example@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Generates office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Alexandria", 1, "example@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});