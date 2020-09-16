"use strict"

const TIMEOUTS = { S: 1000, M: 5000, L: 10000, XL: 20000, XXL: 30000, XXXL: 40000 }

class CarrerPage {
    //UI elements
    main() { return $("main") }
    jobTittle() { return $$(".job-offer__title") }
    searchInput() { return $(".job-offers__search input") }
    getJobs() { return $("#job-offers-section") }
    //Methods
    countJob(title) {
        this.getJobs().waitForDisplayed(TIMEOUTS.L)
        this.getJobs().scrollIntoView()
        let count = this.jobTittle().filter(element => {
            return element.getText() === title
        })
        return count.length
    }

    searchJob(job) {
        this.searchInput().scrollIntoView()

        this.searchInput().waitForDisplayed(TIMEOUTS.M)
        // this.searchInput().scrollIntoView()
        this.searchInput().setValue(job)
    }
}

module.exports.CarrerPage = CarrerPage