describe('React Email Editor', () => {
  
  beforeEach(() => {
    cy.visit('https://react-email-editor-demo.netlify.app/')
  })  

  it('Verify Text Drag & Drop Functionality', () => {
    cy
      .get('iframe')
      .should(iframe => expect(iframe.contents().find('body')))
      .then(iframe => cy.wrap(iframe.contents().find('body')))
      .within({}, $iframe => {
        cy.get('.blockbuilder-content-tools .blockbuilder-content-tool:nth-child(6)').drag('#u_body #u_row_2', { force: true })
        cy.contains('This is a new Text block. Change the text.').dblclick({force: true})
        cy.get('[aria-label="Align center"]').click()
      })
  })
})
