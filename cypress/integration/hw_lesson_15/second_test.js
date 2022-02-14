import { secondTestChangeUser, secondTestUser, currentUser } from '../../second_test/second_test_data.js';
import { checkValue, changeValue, searchBox, sortUsers } from '../../second_test/second_test_method.js';

describe('HW Lesson 15', () => {
    it('Cypress navigation', () => {
        cy.visit('https://demoqa.com/webtables')

        // Should be on a new URL which includes '/webtables'
        cy.url().should('include', '/webtables')

        cy.get('.btn-primary').click()

        secondTestUser.forEach(item => checkValue(item["selector"], item["value"]));

        cy.get('#submit').click()

        cy.get('.rt-tr-group')
            .should('contain', secondTestUser[0].value)
            .and('contain', secondTestUser[1].value)
            .and('contain', secondTestUser[2].value)
            .and('contain', secondTestUser[3].value)
            .and('contain', secondTestUser[4].value)
            .and('contain', secondTestUser[5].value)
            .contains(secondTestUser[0].value).parent().find('.mr-2').click();

    })

    it('Edit user and check that each field is editable and delete', () => {

        secondTestChangeUser.forEach(item => changeValue(item["selector"], item["value"]));

        cy.get('#submit').click()

        cy.get('.rt-tr-group')
            .should('contain', secondTestChangeUser[0].value)
            .and('contain', secondTestChangeUser[1].value)
            .and('contain', secondTestChangeUser[2].value)
            .and('contain', secondTestChangeUser[3].value)
            .and('contain', secondTestChangeUser[4].value)
            .and('contain', secondTestChangeUser[5].value)
            .contains(secondTestChangeUser[0].value).parent().find('.mr-2').next().click();
    })

    it('check that user was deleted', () => {

        cy.contains(
            secondTestChangeUser[0].value,
            secondTestChangeUser[1].value,
            secondTestChangeUser[2].value,
            secondTestChangeUser[3].value,
            secondTestChangeUser[4].value,
            secondTestChangeUser[5].value
        ).should('not.exist')

        

    })

    it('Check searching feature, check that appropriate user can be searched by each field', () => {

        searchBox(currentUser['currentUserFirstName']);
        searchBox(currentUser['currentUserLastName']);
        searchBox(currentUser['currentUserEmail']);
        searchBox(currentUser['currentUserAge']);
        searchBox(currentUser['currentUserSalary']);
        searchBox(currentUser['curentUserDepartment']);
    })

    it('should verify table data is sorted ascending', () => {
        
        cy.get('#searchBox')
        .clear()
        
        let table = [
          ['Kierra', 'Gentry', '29', 'kierra@example.com', '2000', 'Legal'],
          ['Cierra', 'Vega', '39', 'cierra@example.com', '10000', 'Insurance'],
          ['Alden', 'Cantrell', '45', 'alden@example.com', '12000', 'Compliance'],
        ]
        cy.get('[role=columnheader]').each(($header, index) => {
          if(index <= 5) {
            $header.click()
            table = sortUsers(index, table)
            cy.get('.rt-tbody [role=row]').each(($row, rowIndex) => {
              cy.wrap($row).find('[role=gridcell]').each(($cell, cellIndex) => {
                if(!!table[rowIndex] && cellIndex <= 5) {
                  expect($cell).to.contain(table[rowIndex][cellIndex])
                }
              });
            });
          }
          
        })
    });

    

})
