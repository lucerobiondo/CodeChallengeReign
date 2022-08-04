/// <reference types="cypress" />
import React from 'react'
import 'cypress-react-selector';

describe("Home dashboard", () => {

  beforeEach(() => {
      cy.visit("localhost:3000/")
      cy.waitForReact()
  })

  it('get request method', () => {
    cy.intercept('GET', 'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0').as('getTech')
    // cy.wait('@getTech').its('response.statusCode').should('eq', 200)
  })
  

})