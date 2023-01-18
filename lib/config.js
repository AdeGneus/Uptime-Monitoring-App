/*
 * Create and export configuration variables
 *
 */

// Container for all environments
const environments = {};

// Staging (default) environment
environments.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging",
  hashingSecret: "thisIsASecret",
  maxChecks: 5,
  twilio: {
    accountSid: "ACd24b0cbd3e08aa1cd4b66a7c78ae30d8",
    authToken: "8e5e9da6db206b9a9191cc106f026dd6",
    fromPhone: "+17655306237",
  },
  templateGlobals: {
    appName: "Uptime Checker",
    companyName: "Ersatz, Inc.",
    yearCreated: "2022",
    baseUrl: "http://localhost:3000/",
  },
};

// Production environment
environments.production = {
  httpPort: 8000,
  httpsPort: 8001,
  envName: "production",
  hashingSecret: "thisIsAlsoASecret",
  maxChecks: 5,
  twilio: {
    accountSid: "",
    authToken: "",
    fromPhone: "",
  },
  templateGlobals: {
    appName: "Uptime Checker",
    companyName: "Ersatz, Inc.",
    yearCreated: "2022",
    baseUrl: "http://localhost:8000/",
  },
};

// Determine which environment was passed as a command-line argument
const currEnv =
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "";
// Check that the current environment is one of the environments above, otherwise default to staging
const envToExport =
  typeof environments[currEnv] == "object"
    ? environments[currEnv]
    : environments.staging;

// Export the module
module.exports = envToExport;
