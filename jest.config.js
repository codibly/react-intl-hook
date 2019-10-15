module.exports = {
  preset: "ts-jest",
  rootDir: ".",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).ts?(x)"],
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/App/test/mock/fileMock.ts"
  },
  coverageReporters: ["lcov", "text-summary"],
  reporters: ["default"],
  coveragePathIgnorePatterns: ["<rootDir>/src/@codibly/autobahn/"]
};
