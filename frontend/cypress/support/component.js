/// <reference types='cypress' />
import { mount } from 'cypress/react'
import { MemoryRouter } from 'react-router-dom'

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
})

Cypress.Commands.add('mount', (component, options = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options
  const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>
  return mount(wrapped, mountOptions)
})