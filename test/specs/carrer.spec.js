"use strict"

import { MainPage } from "../../elements/main.page"
import { CarrerPage } from "../../elements/carrer.page"
import beforeAfter from "../../helpers/beforeAfterHelpers"
import { expect } from "chai"
import { TIMEOUTS } from "../../elements/base.page"

const jobTitle = "QA Automation Engineer"

describe("Carrer spec ", () => {

    const mainPage = new MainPage()
    const carrerPage = new CarrerPage()

    before(() => {
        beforeAfter.before(this)
        mainPage.navigate()
        mainPage.openCareers()
    })

    it("Should open 10C carrers page and check if there  is exactly 1 'QA Automation Engineer' role open", () => {
        carrerPage.getMain().waitForDisplayed(TIMEOUTS.M)
        let job = carrerPage.countJob(jobTitle)
        expect(job).to.equal(1)
    })

    it("should verify that job search result contains key word", () => {
        carrerPage.getMain().waitForDisplayed(TIMEOUTS.M)
        carrerPage.searchJob("Automation")
        carrerPage.getJobTittle().forEach(job => {
            expect(job.getText()).to.include("Automation")
        })
    })
})