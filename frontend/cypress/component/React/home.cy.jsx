/// <reference types='cypress' />

import 'cypress-react-selector';
import Home from '../../../src/pages/Home'
import ColorToggleButton from '../../../src/components/ColorToggleButton';

const root = '[data-cy-root]'

describe('Should exist Home components', () => {

  it('mounts Home', () => {
    cy.mount(<Home />)
    cy.get(root).should('exist')
  })

  it('mounts ColorToggleButton and click on like button', () => {
    cy.mount(<ColorToggleButton />)
    cy.get('[type=button]').should('have.value', 'all_faves')
    cy.get('[type=button],[value=all_faves]').should('exist')
  })
})