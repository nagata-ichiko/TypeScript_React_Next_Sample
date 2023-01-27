const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });
const customJestConfig = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_ modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_ modules", "<rootDir>/src"],
  testEnvironment: "jsdom",
};
module.exports = createJestConfig(customJestConfig);
