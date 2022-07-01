describe("Green comute",()=>{
    it("Visiting Green comute website",()=>{

        cy.viewport(1800, 1200)
        // visiting to the green comute website
        cy.visit('http://3.12.149.188:3000/')
        cy.url().should('eq', 'http://3.12.149.188:3000/')
    
    })
    it("Giving My current location",()=>{
        cy.fixture('Greencomute.json').then((user)=>{
            cy.get("#combo-box-demo").type(user.Current_location)
            cy.get(".MuiAutocomplete-listbox").click()
    
            cy.get(".MuiButton-root").click()
            
        
        })
    })

    it("Giving Job Destination",()=>{
        //job desta
        cy.fixture('Greencomute.json').then((user)=>{
  
            cy.get("#combo-box-demo").type(user.Job_Destination)
            cy.get(".MuiAutocomplete-listbox").click()
    
            cy.get("#combo-box-demo").type(user.Job_destination)
            cy.get(".MuiAutocomplete-listbox").click()
            cy.get('[data-testid="aqi"]').eq(0).should('contain',user.Job_Destination)
            cy.get('[data-testid="aqi"]').eq(1).should('contain',user.Job_destination)
            cy.get('[data-testid="nextButton"]').should('contain','Next').click()
        })
    })

    it("Giving Job description",()=>{
        // //To give the deiscription about job
        cy.fixture('Greencomute.json').then((user)=>{

            cy.get("#combo-box-demo").type(user.JobType)
            cy.get(".MuiAutocomplete-listbox").click()
    
            cy.get("#combo-box-demo").type(user.Jobtype)
            cy.get(".MuiAutocomplete-listbox").click()
            cy.get('[class="MuiTypography-root MuiTypography-h5 css-j0u76w-MuiTypography-root"]')
            .should('contain','Jobs Found in locations')
    
            cy.get('[data-testid="nextButton"]').should('contain','Next').click()

        })
    })

    it("clicking on the first job",()=>{

        //to check the url should contain findjobs
        cy.url().should('contain','findjobs')

        //to click on the first job
        cy.get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root makeStyles-root-61 css-1lik5q-MuiPaper-root-MuiCard-root"]').eq(0).click()

    })

    it("Clicking on save button",()=>{
      //to click on save button
      cy.get('[class="MuiTypography-root MuiTypography-caption makeStyles-saveTypo-83 css-1w444da-MuiTypography-root"]')
      .should('contain','Save')
      .click()

    })


    it("Selecting the save jobs tab",()=>{
  
        // //to click on save jobs
        cy.get('[class="MuiTypography-root MuiTypography-body2 makeStyles-navtext-20 css-1i51xdo-MuiTypography-root"]').eq(1)
        .should('contain','Saved Jobs')
        .click()
        
    })


    it("Checking the job is present is present in that tab",()=>{

        cy.get('[class="MuiTypography-root MuiTypography-body1 makeStyles-saveJobTypo-110 css-194jna6-MuiTypography-root"]').should('contain','Saved Jobs')

        cy.get('[class="MuiTypography-root MuiTypography-body2 css-1bfj4bb-MuiTypography-root"]')
        .should('contain', 'User Experience Designer')
        
    })


    it("Going back to the find jobs tab",()=>{
        cy.get('[data-testid="findJobs"]').click()

        cy.get('[class="MuiGrid-root MuiGrid-item makeStyles-root1-148 css-13i4rnv-MuiGrid-root"]').eq(0).click()
        
    })

    
    it("Clicking on the unsave button",()=>{

        //to click on unsave
        cy.get('[class="MuiTypography-root MuiTypography-caption makeStyles-saveTypo-172 css-1w444da-MuiTypography-root"]')
        .should('contain','Unsave')
        .click()

        
    })


    it("Clicking on the filter button",()=>{

        cy.get('[data-testid="filter-button"]').click()
        
    })


    it("Selecting the appropriate filters",()=>{
        //for filtering date posted
        cy.get('[value="Past 24 hours"]').click()
        cy.get('[value="Past week"]').click()
        cy.get('[value="Past month"]').click()
        cy.get('[value="Anytime"]').click()

        //for filtering green comute
        cy.get('[value="Yes"]').click()

        //for filtering job type
        cy.get('[value="Full time"]').click()
        cy.get('[value="Internship"]').click()

        //for filtering Experinced level
        cy.get('[value="Fresher"]').click()
        cy.get('[value="Mid - level"]').click()
        cy.get('[value="Director"]').click()

        
    })


    it("Clicking on apply button",()=>{
        //applying filter
        cy.get('[class="MuiTypography-root MuiTypography-caption makeStyles-applyButton-131 css-1w444da-MuiTypography-root"]').click()
        cy.wait(2000)
        
    })

    it("Clicking on clear all button",()=>{
        //to remove filter from the cross icon
        cy.get('[data-testid="CloseIcon"]').eq(0).click()
        cy.get('[data-testid="CloseIcon"]').eq(1).click()

        //to remove filter through clear all
        cy.get('[class="MuiTypography-root MuiTypography-caption makeStyles-clearAllText-224 css-1w444da-MuiTypography-root"]')
        .should('contain','Clear All')
        .click()

        
    })

    it("Clicking on the Green comute routes",()=>{

            //to click on green commute routes
            cy.wait(2000)
            cy.get('[class="MuiTypography-root MuiTypography-subtitle1 css-19zpkew-MuiTypography-root"]')
            .should('contain','Green Commute Routes')
            .click()
    
        
    })


    it("Checking the routes with bus and cars",()=>{
             //to check the routes
             cy.wait(3000)
             cy.get('[class="MuiTypography-root MuiTypography-body1 makeStyles-text-299 css-194jna6-MuiTypography-root"]').should('contain','Common Routes')
             cy.get('[data-testid="DirectionsBusIcon"]').click()
             cy.get('[data-testid="DirectionsCarIcon"]').click()
        
    })


    it("And clicking on apply",()=>{
        cy.get('[class="MuiTypography-root MuiTypography-caption makeStyles-applyTypo-294 css-1w444da-MuiTypography-root"]')
        .should('contain','Applied')
        .click()
      
    })
        //for filtering the distance

        // cy.get('[value="0 - 10 Kms"]').click()
        // cy.get('[value="11 - 20 Kms"]').click()
        // cy.get('[value="21 - 30 Kms"]').click()
        // cy.get('[value="31 - 40 Kms"]').click()

        //for filtering Transport
        // cy.get('[value="Metro"]').click()
        // cy.get('[value="Bus"]').click()
        // cy.get('[value="Car pooling"]').click()
})
