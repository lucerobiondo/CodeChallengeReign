/// <reference types='cypress' />

describe('Home dashboard', () => {

  beforeEach(() => {
    cy.visit('localhost:3000/')
    // cy.waitForReact()
  })

  it('GET method', () => {
    cy.intercept('GET', 'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0',
      {
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'server': 'cloudflare'
        },
        payload: {
          'query': 'angular',
          'page': '0'
        }
      }).as('getAngular')
  })

  it('POST method response', () => {
    cy.intercept('POST',
      'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0', (req) => {
        const { body } = req
        req.continue((res) => {
          res.body.hitsPerPage = 20
        })
      }).as('postAngular')
    // cy.wait('@postAngular').its('response.statusCode').should('eq', 200)
  })

  it("Gets a list of hits not empty.", () => {
    cy.request({
      method: 'GET',
      url: "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0"
    })
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.hits).length.to.be.greaterThan(1)
      })
  })

  it("Should exist a value of story_title from hits list.", () => {
    cy.request({
      method: 'GET',
      url: "https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0"
    })
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.hits).length.to.be.greaterThan(1)
        cy.get(response.body.hits).each(($hit) => {
          if ($hit.story_title === 'Blender 3.2.2 Released')
            expect($hit.story_title).to.exist
        })
      })
  })
})