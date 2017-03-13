require("jest-fetch-mock");
// console.log("mockResponse", global.fetch.mockResponse);

global.navigator = {
  userAgent: "node.js"
};

require("mock-local-storage");
