describe('Amazon', ()=>{
    it('Login in to Amazon',()=>{
        //visiting the amazon webpage
        cy.visit('www.amazon.in')
        cy.url().should('eq', 'https://www.amazon.in/')
        
        //To click on sing in
        cy.get('.nav-line-1-container').should('have.text','Hello, Sign in').click()
        
        cy.fixture('example.json').then((user)=>{
            cy.get('[type="email"]').type(user.username)
            .should('have.class','a-input-text a-span12 auth-autofocus auth-required-field')
            cy.get('#continue').click()
            cy.get('[type="password"]').type(user.password)
            .should('have.class','a-input-text a-span12 auth-autofocus auth-required-field')
            cy.get('#signInSubmit').click()

        })
                

        //To get the account and lists
        cy.contains('Account & Lists')
        .click()

        //To click on the orders
        cy.get('.a-box')
        .should('have.class','a-box')
        .eq(0).click()

        //To click on the first item
        cy.get('#a-autoid-4').should('have.text','\n View Return/Refund Status\n        ')
        .click()
        
        //To check when the item will be deliverd
        cy.get('#a-autoid-3-announce').click()
        cy.get('.last-milestone > .a-fixed-left-grid-inner')
        .should('contain','Arriving tomorrow')

        cy.go(-1)
        
        //to get the previous year orders
        cy.get('#a-autoid-1-announce').click()
        cy.get('#orderFilter_3').should('contain','2021').click()

        //to check the order status of a particular item
        cy.get('[id="a-autoid-4"]')
        .should('have.class','a-button a-button-normal a-spacing-mini a-button-primary')
        .click()
        cy.wait(5000)

        cy.go(-1)
       
    })
    it('Adding Address',()=>{

        cy.get('#nav-link-accountList > .nav-line-2').click()

        cy.get('[class="a-box ya-card--rich"]')
        .should('have.class','a-box ya-card--rich')
        .eq(3).click()
        
                cy.fixture('example.json').then((user)=>{
                    cy.get('[type="email"]').type(user.username)
                    .should('have.class','a-input-text a-span12 auth-autofocus auth-required-field')
                    cy.get('#continue').click()
                    cy.get('[type="password"]').type(user.password)
                    .should('have.class','a-input-text a-span12 auth-autofocus auth-required-field')
                    cy.get('#signInSubmit').click()
        
                })
                        

        cy.get('#ya-myab-plus-address-icon')
        .should('have.class','a-section a-spacing-none address-plus-icon aok-inline-block')
        .click()

        cy.get('[name="address-ui-widgets-enterAddressFullName"]')
        .should('have.class','a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input')
        .type('shazad khan')

        cy.get('[name="address-ui-widgets-enterAddressPhoneNumber"]')
        .should('have.class','a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input')
        .type('9123128573')

        cy.get('[name="address-ui-widgets-enterAddressPostalCode"]')
        .should('have.class','a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input')
        .type('831012')

        cy.get('[name="address-ui-widgets-enterAddressLine1"]')
        .should('have.class','a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input')
        .type('mango')

        cy.get('[name="address-ui-widgets-enterAddressLine2"]')
        .should('have.class','a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input')
        .type('old purulia, Road no 1')

        cy.get('[name="address-ui-widgets-landmark"]')
        .should('have.class','a-input-text address-ui-widgets-desktop-form-field-full-width addrui-form-text-input')
        .type('near Baitul mukkaram masjid')

        // cy.get('[name="address-ui-widgets-enterAddressCity"]').should('contain','Jamshedpur')

        cy.get('.a-dropdown-prompt')
        .should('have.class','a-dropdown-prompt')
        .eq(1).click()

        cy.contains('JHARKHAND').click({force: true})
        cy.get('.a-dropdown-prompt').should('contain','JHARKHAND')

        cy.get('.a-dropdown-prompt')
        .should('have.class','a-dropdown-prompt')
        .eq(2).click()

        cy.get('#dropdown1_1')
        .should('contain',' Home (7 am – 9 pm delivery) ')
        .click()

        cy.get('.a-button-input')
        .should('have.class','a-button-input')
        .click()

        //To check that the adress is sucessfylly added
        cy.get('#ya-myab-display-address-block-3')
        .should('contain','mango')

    })

})