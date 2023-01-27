/// <reference types = "Cypress"/>

describe("RenmoneyReskin Automation", ()=>{

    //Landing Page is visible and Header is asserted
    it("Landing Page", () => {
        cy.visit("https://renweb-v3-redesign.renmoney.com/login/new")
        
        cy.get('.hero-text-container > h3').should("be.visible")
    

    //Login is successful with Existing Username and Password
        cy.get('.nav-actions > .dark').click()
        cy.get('.flex-column > .mt-3').should("be.visible")
        cy.get('.weight-regular').should("be.visible")
        cy.get('.form > :nth-child(1) > .fw-bold').should("have.text", "Enter your email")

    //Enter Email address
        cy.get('#email').click().type("ukam@gmail.com")
        cy.get('.btn').click()
       
    //Before User enters Password Assertions
        cy.get('.primary-text-profile').should("be.visible")
        cy.get('.ms-2').should("be.visible")
        cy.get(':nth-child(3) > .fs-12').should("have.text", "Password")

    //User enters Password
        cy.get('#password').click().type("Ukam12345@")
        cy.get('.me-2').click()
        cy.get('.me-2').click()
        cy.get('.btn').click()
   
    //USER IS ON DASHBOARD

    //CREATE A SMART GOAL
        cy.get('app-sidebar > [title="Save"]').click()
        cy.get('.bg-cream-200 > .rounded-pill').click()

        //Name your Smart Goal
        cy.get('#planName').type("FoodCo")
        cy.get('.renmoney__btn').click()

        //How much do you want to save?
        cy.get('#planAmount').type("10000")
        cy.get('.renmoney__btn').click()

        //For how long?
        cy.get('#dateChoice').select("12 months")
        cy.get('.renmoney__btn').click()

        //Please confirm
        cy.get('.text-center').should("have.text", "Review Date")
        cy.get('.renmoney__btn').click()

        //How often do you want to save?
        cy.get('.smartTypePlan > :nth-child(3)').click()
        cy.get('.mt-4').should('be.visible')
        cy.get('.renmoney__btn').click()

        //Let's review this plan
        cy.get('.planReview__header > p').should("have.text", "See if everything looks good, then go ahead.")
        cy.get('.renmoney__btn').click()

        //How would you like to fund this?
        cy.get('.fund-options__renmoney.ng-star-inserted').click()
        cy.get('.renmoney__btn').click()

        cy.get('.renmoney__btn').click()
    })


})