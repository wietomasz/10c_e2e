"use strict"

const TIMEOUTS = { S: 1000, M: 5000, L: 10000, XL: 20000, XXL: 30000, XXXL: 40000 }

class Page {
    static get TIMEOUTS() { return TIMEOUTS }
}

module.exports = Page
