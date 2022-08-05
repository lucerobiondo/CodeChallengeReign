/// <reference types='cypress' />
import 'cypress-react-selector';
import Home from '../../../src/pages/Home'

describe('Check Home component', () => {

  it('mounts', () => {
    cy.mount(<Home />)
  })
})