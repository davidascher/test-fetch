require("jest-fetch-mock");
// console.log("mockResponse", global.fetch.mockResponse);
global.fetch = require('jest-fetch-mock');

global.navigator = {
  userAgent: "node.js"
};

require("mock-local-storage");
