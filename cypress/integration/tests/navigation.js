describe('Amazon', ()=>{
    it('Testing Amazon',()=>{
        //visiting the amazon webpage
        cy.visit('www.amazon.in')
        
        cy.get('.nav-line-1-container').should('have.text','Hello, Sign in').click()

        cy.fixture('example.json').then((user)=>{
            cy.get('[type="email"]').type(user.username)
            cy.get('#continue').click()
            cy.get('[type="password"]').type(user.password)
            cy.get('#signInSubmit').click()

        })
        



        cy.contains('Account & Lists').click()
        
        //For adding payment method
        
        // cy.get('[class="a-box ya-card--rich"]').eq(4).click()
        // cy.get('[id="apx-add-credit-card-action-test-id"]').invoke('show').click()
        // cy.wait(5000)

        // cy.get('[class="a-input-text a-form-normal"]').eq(0).click().type(5419190522102204)
        // cy.get('[class="a-input-text a-form-normal"]').eq(1).click().type('SHAZAD KHAN')
        
        // cy.get('[class="a-section a-spacing-none apx-add-credit-card-number"]').click().type(5419190522102204)
        // cy.get('#pp-tBHFQG-17').click().type('SHAZAD KHAN')

        // cy.get('[class="a-column a-span9"]').click().type(5419190522102204)
        // cy.get('[class="a-column a-span8 pmts-customer-card-name-input-box a-span-last"]').click().type('SHAZAD KHAN')

        // cy.get('[name="addCreditCardNumber"]').invoke('show').click().type(5419190522102204)
        // cy.get('[name="ppw-accountHolderName"]').invoke('show').click().type('SHAZAD KHAN')

        // cy.get('.a-dropdown-prompt').eq(0).click()
        // cy.get('.a-dropdown-item').eq(8).click()

        // cy.get('.a-dropdown-prompt').eq(1).click()
        // cy.get('.a-dropdown-item').eq(3).click()

        // cy.get('[name="ppw-widgetEvent:AddCreditCardEvent"]')


        //For  adding address
        cy.get('[class="a-box ya-card--rich"]').eq(3).click()

        cy.get('#ya-myab-plus-address-icon').click()

        cy.get('[name="address-ui-widgets-enterAddressFullName"]').type('shazad khan')

        cy.get('[name="address-ui-widgets-enterAddressPhoneNumber"]').type('9123128573')

        cy.get('[name="address-ui-widgets-enterAddressPostalCode"]').type('831012')

        cy.get('[name="address-ui-widgets-enterAddressLine1"]').type('mango')

        cy.get('[name="address-ui-widgets-enterAddressLine2"]').type('old purulia, Road no 1')

        cy.get('[name="address-ui-widgets-landmark"]').type('near Baitul mukkaram masjid')

        cy.get('[name="address-ui-widgets-enterAddressCity"]').type('jamshedpur')

        cy.get('.a-dropdown-prompt').eq(1).click()

        cy.contains('JHARKHAND').click({force: true})

        cy.get('.a-dropdown-prompt').eq(2).click()

        cy.get('#dropdown1_1').click()

        cy.get('.a-button-input').click()

        cy.get('#ya-myab-display-address-block-3')
        .should('contain','mango')



        


    })
})