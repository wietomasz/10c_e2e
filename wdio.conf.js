require("babel-core/register")

exports.config = {
    hostname: "localhost",
    port: 4444,
    path: "/wd/hub",
    specs: [
        "./test/specs/**/*.js"
    ],
    exclude: [],
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
        acceptInsecureCerts: true,
    }],
    //
    logLevel: "info",
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    // services: ["chromedriver"],
    framework: "mocha",
    reporters: ["spec"],

    mochaOpts: {
        ui: "bdd",
        timeout: 60000
    },
}
