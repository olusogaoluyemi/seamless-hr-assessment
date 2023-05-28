/// <reference types = "Cypress"/>

describe("SeamlessHR Assessment", ()=>{

    //Landing Page Of Seamless HR
    it("Test valid Login using valid credentials", () => {
        cy.visit("https://the-internet.herokuapp.com/")
        cy.wait(5000);
        cy.get(':nth-child(21) > a').click()

    //Login page page is displayed
        cy.wait(3000);
        cy.get('h2').contains("Login Page")

     //Login with valid Credentials 
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.fa').click();

        cy.wait(3000);
        cy.get('#flash').contains("You logged into a secure area!")
     //Click Logout Button
         cy.get('.button').click()
       
    })

    it("Test Invalid Login with Valid User with Invalid Password", () => {
    cy.visit("https://the-internet.herokuapp.com/")
    cy.wait(5000);
    cy.get(':nth-child(21) > a').click()

    //Login page validation
    cy.wait(3000);
    cy.get('h2').contains("Login Page")

    //Login with Invalid Credentials (Valid User with Invalid Password)
    cy.get('#username').clear().type("tomsmith")
    cy.get('#password').type("SecretPassword!")
    cy.get('.fa').click();
    cy.wait(3000);
    cy.get('#flash').contains("Your password is invalid!")
   
})

it("Test Invalid Login with InValid User with Invalid Password", () => {
    cy.visit("https://the-internet.herokuapp.com/")
    cy.wait(5000);
    cy.get(':nth-child(21) > a').click()

    //Login page
    cy.wait(3000);
    cy.get('h2').contains("Login Page")
    //Login with Invalid Credentials (InValid User with Invalid Password)
    cy.wait(3000)
    cy.get('#username').type("thomas")
    cy.get('#password').type("SecretPassword!")
    cy.get('.fa').click();
    cy.wait(3000);
    cy.get('#flash').contains("Your username is invalid!")
})

it("Test Invalid Login with InValid User with valid Password", () => {
    cy.visit("https://the-internet.herokuapp.com/")
    cy.wait(5000);
    cy.get(':nth-child(21) > a').click()

    //Login page
    cy.wait(3000);
    cy.get('h2').contains("Login Page")
    //Login with Invalid Credentials (InValid User with valid Password)
    cy.wait(3000)
    cy.get('#username').type("thomas")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click();
    cy.wait(3000);
    cy.get('#flash').contains("Your username is invalid!")

    })
})






