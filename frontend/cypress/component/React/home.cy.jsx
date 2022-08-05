/// <reference types='cypress' />

import 'cypress-react-selector';
import Home from '../../../src/pages/Home'
import ColorToggleButton from '../../../src/components/ColorToggleButton';
import SelectControl from '../../../src/components/SelectControl';
import { Pagination } from '@mui/material';
import DescriptionCard from '../../../src/components/cards/DescriptionCard';

const root = '[data-cy-root]'

describe('Should exist Home components', () => {

  it('mounts Home', () => {
    cy.mount(<Home />)
    cy.get(root).should('exist')
  })

  it('mounts ColorToggleButton and check if exists', () => {
    cy.mount(<ColorToggleButton />)
    cy.get('[type=button]').should('have.value', 'all_faves')
    cy.get('[type=button],[value=all_faves]').should('exist')
  })

  it('mounts SelectControl and pick Angular item with select component', () => {
    cy.mount(<SelectControl />)
    cy.get(root)
      .find('[data-testid=ArrowDropDownIcon]').should('exist')
      .parent()
      .click()
      .should('be.visible')
      .get('.Angular')
      .should('exist')
  })

  it('mounts SelectControl and pick Angular item with select component', () => {
    cy.mount(<SelectControl />)
    cy.get(root)
      .find('[data-testid=ArrowDropDownIcon]').should('exist')
      .parent()
      .click()
      .should('be.visible')
      .get('.Angular')
      .should('exist')
      .and('have.text', 'Angular')
  })

  it('mounts Pagination and click a page', () => {
    cy.mount(<Pagination />)
    cy.get(root)
      .children()
      .get('ul.MuiPagination-ul')
      .find('li')
      .find('[type=button],[aria-label="Go to page 3"]')
      .should('exist')
      .and('have.text', '1')
      .contains('1')
      .click()
  })

  it('mounts DescriptionCard and return story_title values from hits array', () => {
    cy.mount(<DescriptionCard hit={'Thinking with pen and paper'} />)
      .request({
        method: 'GET',
        url: "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=3"
      })
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.hits).length.to.be.greaterThan(1)
        cy.get(response.body.hits).each(async ($hit) => {
          cy.log('story.title', $hit.story_title)
          return await $hit.story_title;
        })
      })
  })

  it('Another method: mounts DescriptionCard and return story_title values from hits array', () => {
    cy.mount(<DescriptionCard hit={'Thinking with pen and paper'} />)
      .fixture('hits.json')
      .each(async ($hit) => {
        // expect($hit.story_title).length.to.be.greaterThan(1)
        // expect($hit.story_title).to.contain('Thinking with pen and paper')
        cy.log('story.title', $hit.story_title)
        return await $hit.story_title;
      })
  })
})