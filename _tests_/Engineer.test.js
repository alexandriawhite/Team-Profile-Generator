const Engineer = require("../lib/Engineer");

test("Sets and returns GitHub", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Alexandria", 1, "example@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Alexandria", 1, "example@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Generate GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Alexandria", 1, "example@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});