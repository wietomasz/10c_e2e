"use strict"

const TIMEOUTS = { S: 1000, M: 5000, L: 10000, XL: 20000, XXL: 30000, XXXL: 40000 }

class MainPage {
    //UI elements
    carrerTab() { return $("a[href *= 'careers']") }

    //Methods
    navigate() {
        browser.url("https://10clouds.com/")
    }

    openCareers() {
        this.carrerTab().waitForEnabled(TIMEOUTS.M)
        this.carrerTab().click()
    }
}

module.exports.MainPage = MainPage