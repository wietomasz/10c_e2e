"use strict"

module.exports = {
    before: () => {
        var chai = require("chai")
        global.expect = chai.expect
    },
    afterEach: () => {
        browser.reloadSession()
    },
}