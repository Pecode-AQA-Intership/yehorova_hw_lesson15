export function checkValue(selector, value) {
    cy.get(selector)
        .type(value)
        .should('have.value', value)
}

export function changeValue(selector, value) {
    cy.get(selector)
        .clear()
        .type(value)
        .should('have.value', value)
}

export function searchBox(value) {
    cy.get('#searchBox')
        .clear()
        .type(value)
    cy.get('.rt-tbody')
        .should('contain', value)
}
export const sortUsers = (index, array) => {
    return array.sort(function(a, b) {
      return b[index] - a[index];
    });
  }