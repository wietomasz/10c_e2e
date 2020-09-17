"use strict"

import { TIMEOUTS } from "./base.page"

class CarrerPage {

    //UI elements
    getMain() { return $("main") }
    getJobTittle() { return $$(".job-offer__title") }
    getSearchInput() { return $(".job-offers__search input") }
    getJobs() { return $("#job-offers-section") }

    //Methods
    countJob(title) {
        this.getJobs().waitForDisplayed(TIMEOUTS.L)
        this.getJobs().scrollIntoView()
        let count = this.getJobTittle().filter(element => {
            return element.getText() === title
        })
        return count.length
    }

    searchJob(job) {
        this.getSearchInput().waitForDisplayed(TIMEOUTS.M)
        this.getSearchInput().scrollIntoView()
        this.getSearchInput().setValue(job)
    }
}

module.exports.CarrerPage = CarrerPage