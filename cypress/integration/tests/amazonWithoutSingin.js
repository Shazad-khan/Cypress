describe('Amazon', ()=>{
    it('Testing Amazon',()=>{
        //visiting the amazon webpage
        cy.visit('www.amazon.in')
        cy.url().should('eq', 'https://www.amazon.in/')
        
        
        //Getting the third list
        cy.get('.feed-carousel-card').eq(2).click()
        .should('have.class','feed-carousel-card _deals-shoveler-v2_style_dealCard__1HqkZ')

        //Getting the first item in the third list
        // cy.get('.a-list-normal').eq(0).click()
        // .should('have.class', 'a-list-normal a-spacing-none no-margin-right overflow-hidden octopus-response-li-width')

        //Adding that item to the cart
        cy.get('#add-to-cart-button').should('have.value', 'Add to Cart')
        .click().wait(1000)
        
        //To view the cart
        cy.get('#attach-sidesheet-view-cart-button').should('contain', 'Cart')
        .wait(5000).click()
        
        //To check that the item has been sucessfully added
        cy.get('#sc-subtotal-label-buybox').should('have.text', '\n\n\n\n\n\n\n\n\nSubtotal (1 item):')

        //To search Mobiles
        cy.get('.nav-search-field').type('Mobiles')
        .should('have.class','nav-search-field')

        //To click on submit
        cy.get('#nav-search-submit-text')
        .should('have.class','nav-search-submit-text nav-sprite nav-progressive-attribute')
        .click()
        
        cy.wait(5000)

        //To scrool to bottom of the page
        cy.scrollTo('bottom')

        //To poing out the last item in the page
        cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').eq(24)
        .invoke('removeAttr', 'target')
        .should('have.class','a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal')
        .click().wait(1000)

        cy.go(-1)
        //To click on the left navigation menu
        cy.get('#nav-hamburger-menu').click()
        .should('contain',('All'))

        cy.get('[data-menu-id="8"]').click()
        .should('contain', 'Mobiles, Computers')

        cy.contains('All Mobile Phones').click()
        .should('have.text','All Mobile Phones')

        cy.get('[class="bxc-grid__image   bxc-grid__image--light bxc-grid__image--beauty bxc-grid__image--beauty"]').eq(0)
        .should('have.class','bxc-grid__column')
        .click()
    })
})