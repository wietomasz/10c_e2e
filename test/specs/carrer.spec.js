"use strict"

import { MainPage } from "../../elements/main.page"
import { CarrerPage } from "../../elements/carrer.page"
import beforeAfter from "../../helpers/beforeAfterHelpers"
import { expect } from "chai"

describe("Carrer spec ", () => {

    const mainPage = new MainPage()
    const carrerPage = new CarrerPage()

    before(() => {
        beforeAfter.before(this)
        mainPage.navigate()
        mainPage.openCareers()
    })

    // it("Should open 10C carrers page and check if there  is exactly 1 'QA Automation Engineer' role open", () => {
    //     carrerPage.main().waitForDisplayed(4000)
    //     let job = carrerPage.countJob("QA Automation Engineer")
    //     expect(job).to.equal(1)
    // })

    it("should verify that job search result contains key word", () => {
        carrerPage.main().waitForDisplayed(4000)
        carrerPage.searchJob("Automation")
        browser.pause(4000)
        carrerPage.jobTittle().forEach(job => {
            expect(job.getText()).to.include("Automation")
        })
    })
})