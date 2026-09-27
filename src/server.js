const { config } = require("./config");

console.log("Notes API Demo");
console.log("Environment:", process.env.APP_ENV || "development");
console.log("API configured:", Boolean(config.apiKey));
