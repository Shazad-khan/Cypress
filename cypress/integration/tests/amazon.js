
describe('Amazon', ()=>{
    it('Testing Amazon',()=>{
        //visiting the amazon webpage
        cy.visit('www.amazon.in')

        //to get the Today's deals
        cy.contains("Today's Deals").click()

        // cy.get('#a-page').scrollTo('10','100')
        cy.get('.DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32').eq(2).click()
        // cy.get('[data-testid="grid-deals-container"]').eq(2).click()

        // cy.get('[name="dropdown_selected_size_name"]')
        // cy.get("6 UK (6.5 US) ").click()
        // cy.get('.a-list-normal').eq(0).click() //for mobiles and shoes
        // cy.get('.columns').first()
        cy.get('.ProductGridItem__itemOuter__5ow0w').eq(0).click() //for laptops

        // cy.get('[name="submit.add-to-cart"]').click()
        // cy.get('#add-to-cart-button').click()
        cy.get("[data-click-type='ADDTOCART']").click()
        
        cy.wait(1000)
        // cy.get('#attach-sidesheet-view-cart-button').wait(1000).click()
        cy.get('#nav-cart-count').wait(1000).click()
        
        cy.get('#sc-subtotal-label-buybox').should('have.text',"\n\n\n\n\n\n\n\n\nSubtotal (1 item):")

        cy.get('#twotabsearchtextbox').click().type('mobiles')
        cy.get('#nav-search-submit-button').click()

        cy.get('#search').scrollTo('bottom {ensureScrollable: false}')
    










        
        // cy.scrollTo('0','450')
        // cy.get('#a-page').click('80', '75')
        // cy.click(nth .div(3))
        // cy.contains(["data-deal-id='e2d0465b'"]).click()
        // .should('contains','Exciting offers on pTron, WeCool & others')

    })
})