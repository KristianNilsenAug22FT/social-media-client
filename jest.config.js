// jest.config.js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['jest-localstorage-mock'],
    // other Jest configurations...
  };
  