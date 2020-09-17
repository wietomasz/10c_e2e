"use strict"

import { TIMEOUTS } from "./base.page"

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