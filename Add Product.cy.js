describe('Add Product', () => {
  beforeEach(() => {
    // Visit dashboard before each test
    cy.viewport(1920, 1080);
    cy.login();
  });
   it.skip('Verify that Product Commercial - Cash Management added successfully', () => {
    

// Navigate to the Customer section in the left pane
cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
cy.get("#customer_view_70caca45-2084-4db3-bb03-7330a5b4d0a9", {timeout: 19000}).should('be.visible').scrollIntoView().click();
cy.wait(10000);   

// Select Product
cy.get("#test-id-products_customer_detail_tab" , { timeout: 8000 }).should('be.visible').click();
cy.get("#test-id-add_product_customer_detail_button", {timeout: 8000}).scrollIntoView().should('be.visible').click();

// Product RM
const optionIndex2 = 2; // Change this to the index you want
cy.get('[placeholder="Select Product RM"]', { timeout: 10000 }).click().wait(3000);
cy.get('.MuiAutocomplete-popper', { timeout: 12000 } ).should('be.visible');
cy.get('li.MuiAutocomplete-option',).eq(optionIndex2).click().wait(3000);

// Select Roll up
cy.get('[placeholder="Select Roll up"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Commercial', { timeout: 8000 }).should('be.visible').click();  

// Select Product Group
cy.get('[placeholder="Select Product Group"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Cash Management', { timeout: 8000 }).should('be.visible').click();  

// select Product type 
cy.get('[placeholder="Select Product Type"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Account Analysis', { timeout: 8000 }).should('be.visible').click();  

// Anticipated closing date

cy.get('[placeholder="Select Date..."]', {timeout: 8000}).should('be.visible').click();
cy.get('.rdtNext').click();
cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)')
      .then($dates => {
        if ($dates.length > 0) {
          // If there are enabled dates in the current month, select the first one
          cy.wrap($dates).first().click();
        } else {
          // If there are no enabled dates in the current month, navigate to the next month
          cy.get('.rdtNext').click();

          // Then select the first enabled date in the next month
          cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)').first().click();
        }
      });

// Select prob. of close
cy.get('[placeholder="Select Prob.of Close"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Discussing Needs (10.00%)', { timeout: 8000 }).should('be.visible').click();  

cy.contains('Next').click();


//Step 2
// select ACH customer category
cy.get('[placeholder="Select ACH Customer Category"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Municipality', { timeout: 8000 }).should('be.visible').click();  

//Settlement method
cy.get('[placeholder="Select Settlement Method"]',  { timeout: 10000 } ).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Pre Funding', { timeout: 8000 }).should('be.visible').click();  

// Enter Batch Limit
cy.get('[placeholder="Enter Batch Limit"]').type('2000000');
// Enter Maximum number of open batches
cy.get('[placeholder="Enter Maximum no of Open Batches"]').type('10');

// Enter total limit 
cy.get('[placeholder="Enter Total Limit"]').type('200');
cy.wait(1000);


cy.get("#test-id-submit_button_product").click();
cy.wait(1000);

cy.get("#test-id-submit_button_product").click();
cy.wait(1000);


});


   it.skip('Verify that Product Commercial - Certificate of deposit added successfully', () => {
    
// Navigate to the Customer section in the left pane
cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
cy.get("#customer_view_70caca45-2084-4db3-bb03-7330a5b4d0a9", {timeout: 10000}).should('be.visible').scrollIntoView().click();
cy.wait(10000);   

// Select Product
cy.get("#test-id-products_customer_detail_tab" , { timeout: 8000 }).should('be.visible').click();
cy.get("#test-id-add_product_customer_detail_button", {timeout: 8000}).scrollIntoView().should('be.visible').click();


    // Product RM
    const optionIndex1 = 2; // Change this to the index you want
    cy.get('[placeholder="Select Product RM"]', { timeout: 10000 }).click().wait(3000);
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.get('li.MuiAutocomplete-option',).eq(optionIndex1).click().wait(3000);
    
    // Select Roll up
    cy.get('[placeholder="Select Roll up"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Commercial', { timeout: 8000 }).should('be.visible').click();  
    
    // Select Product Group
    cy.get('[placeholder="Select Product Group"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Certificate of Deposit - Com', { timeout: 8000 }).should('be.visible').click();  
    
    // select Product type 
    cy.get('[placeholder="Select Product Type"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Commercial CD 12 Month – Special Rate', { timeout: 8000 }).should('be.visible').click();  
    
    // Anticipated closing date

cy.get('[placeholder="Select Date..."]', {timeout: 8000}).should('be.visible').click();
cy.get('.rdtNext').click();
cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)')
      .then($dates => {
        if ($dates.length > 0) {
          // If there are enabled dates in the current month, select the first one
          cy.wrap($dates).first().click();
        } else {
          // If there are no enabled dates in the current month, navigate to the next month
          cy.get('.rdtNext').click();

          // Then select the first enabled date in the next month
          cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)').first().click();
        }
      });
    
    // Select prob. of close
    cy.get('[placeholder="Select Prob.of Close"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Discussing Needs (10.00%)', { timeout: 8000 }).should('be.visible').click();  
    
    cy.contains('Next').click();
    
    //Step 2
    // select deposit branch
    cy.get('[placeholder="Select Deposit Branch"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Park Avenue Branch', { timeout: 8000 }).should('be.visible').click();  
    
    // Enter Proposed amount
    cy.get('[placeholder="Enter Proposed Amount"]').type('200000000');

    // Enter Index rate 
    cy.get('[placeholder="Enter Index Rate"]').type('200');

    // Enter Add/sub percentage
    cy.get('[placeholder="Enter Add/Sub Percentage"]').type('10');
    
    // Enter final rate 
    cy.get('[placeholder="Enter Final Rate"]').type('20000');

    // select reason for rate change
    cy.get('[placeholder="Select Reason For Rate Change"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Match Competitor Rate', { timeout: 8000 }).should('be.visible').click();  

// select source
    cy.get('[placeholder="Select Sources"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'RM - Calling', { timeout: 8000 }).should('be.visible').click();
    
    cy.get('#test-id-submit_button_product').click();

    cy.wait(15000);
       });
       it.skip('Verify that Product Commercial - CRE Mortgage added successfully', () => {
    
        // Navigate to the Customer section in the left pane
        cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
        cy.get("#customer_view_70caca45-2084-4db3-bb03-7330a5b4d0a9", {timeout: 10000}).should('be.visible').scrollIntoView().click();
        cy.wait(10000);   
        
        // Select Product
        cy.get("#test-id-products_customer_detail_tab", { timeout: 8000 }).should('be.visible').click();
        cy.get("#test-id-add_product_customer_detail_button", {timeout: 8000}).scrollIntoView().should('be.visible').click();
        cy.wait(10000);
        
            // Product RM
            const optionIndex2 = 2; // Change this to the index you want
            cy.get('[placeholder="Select Product RM"]', { timeout: 10000 }).click().wait(3000);
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.get('li.MuiAutocomplete-option',).eq(optionIndex2).should('be.visible').click();
            
            // Select Roll up
            cy.get('[placeholder="Select Roll up"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Commercial', { timeout: 8000 }).should('be.visible').click();  
            
            // Select Product Group
            cy.get('[placeholder="Select Product Group"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'CRE Mortgage', { timeout: 8000 }).scrollIntoView().should('be.visible').click();  
            
            // select Product type 
            cy.get('[placeholder="Select Product Type"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'CREM - Interest Only', { timeout: 8000 }).should('be.visible').click();  
            
            // Anticipated closing date
        
        cy.get('[placeholder="Select Date..."]', {timeout: 8000}).should('be.visible').click();
        cy.get('.rdtNext').click();
        cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)')
              .then($dates => {
                if ($dates.length > 0) {
                  // If there are enabled dates in the current month, select the first one
                  cy.wrap($dates).first().click();
                } else {
                  // If there are no enabled dates in the current month, navigate to the next month
                  cy.get('.rdtNext').click();
        
                  // Then select the first enabled date in the next month
                  cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)').first().click();
                }
              });
            
            // Select prob. of close
            cy.get('[placeholder="Select Prob.of Close"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Discussing Needs (10.00%)', { timeout: 8000 }).should('be.visible').click();  
            
         cy.get("#test-id-next_button_product").click();
    
            //Step 2
            // select purpose
            cy.get('[placeholder="Select Product Purpose"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'CRE - RCO Other Collateral', { timeout: 8000 }).should('be.visible').click();  
            
            // select FRR
            cy.get('[placeholder="Select FRR"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Lgd < 20%', { timeout: 8000 }).should('be.visible').click();  
    
            // Enter Proposed amount
            cy.get('[placeholder="Enter Proposed Amount"]').type('4000000');
    
           
    
    // Add interest and Payment 
    cy.get('#test-id-amort_add_interest_and_payment_button', {timeout: 10000}).should('be.visible').click();
    
    
          //Add Interest Rate - Int Only
           // Select type
           cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Int. Only', { timeout: 8000 }).should('be.visible').click();  
            cy.get("#test-id-next_interest_rate_form_button_product").should('be.visible').click();
    
    
        // select type
        cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Fixed', { timeout: 8000 }).should('be.visible').click();  
            // select index
            cy.get('[placeholder="Select Index"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', '1 US Treasury Note', { timeout: 8000 }).should('be.visible').click();  
    
            // Enter margin
            cy.get('[placeholder="Enter Margin"]').type('10');
    
            /*select rate change
            cy.get('[placeholder="Select Rate Change"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Quarterly', { timeout: 8000 }).should('be.visible').click();  */
    
            // Select frequency
            cy.get('[placeholder="Select Frequency"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Monthly', { timeout: 8000 }).should('be.visible').click();  
           
            // Enter Term
            cy.get('[placeholder="Enter Term"]').clear().type('12');
            // Add 
            cy.get('#test-id-submit_interest_rate_form_button_product').click();
    
    
           
    
    // Add participaton
    cy.get(':nth-child(5) > .flex > .checkbox__style > .checkmark').should('be.visible').click();
    cy.wait(5000);
    cy.get('#test-id-amort_add_participation_button').should('be.visible').click();
    
    cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Sold', { timeout: 8000 }).should('be.visible').click(); 
    
    // Name participant
    cy.get('[placeholder="Select Participant"]',  { timeout: 10000 } ).should('be.visible').first().click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Valley National Bank', { timeout: 8000 }).should('be.visible').click(); 
    
    // select position
    cy.get('[placeholder="Select Bank\'s Position"]',  { timeout: 10000 } ).should('be.visible').last().click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Participant', { timeout: 8000 }).should('be.visible').click(); 
    
    // submit
    cy.get("#test-id-submit_participation_form_button_product").should('be.visible').click();
    
    // Add Fee 
    cy.get('#test-id-amort_add_fee_button').should('be.visible').click();
    cy.get('[placeholder="Select Type"]')
    
    // select Fee type
    cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Bringdown', { timeout: 8000 }).should('be.visible').click(); 
    // select frequency
    cy.get('[placeholder="Select Frequency"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Annually', { timeout: 8000 }).should('be.visible').click(); 
    // select method
    cy.get('[placeholder="Select Method"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Percent of Commitment', { timeout: 8000 }).should('be.visible').click(); 
    // Amount type
    cy.get('[placeholder="Select Amount Type"]',  { timeout: 10000 } ).should('be.visible').click();
    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
    cy.contains('li.MuiAutocomplete-option', 'Pro Rata', { timeout: 8000 }).should('be.visible').click(); 
    
    // Enter amout
    cy.get('[placeholder="Enter Amount"]').type('15');
    // submit 
    cy.get("#test-id-submit_fee_form_button_product").should('be.visible').click();
    
    
    // Add product
            cy.get("#test-id-submit_button_product").should('be.visible').click();    
            cy.get("#test-id-submit_button_product").should('be.visible').click();    
    
            cy.wait(15000);
               
          
          
          
          });

          it.only('Verify that Product Commercial - Term Loan added successfully', () => {
    
            // Navigate to the Customer section in the left pane
            cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
            cy.get("#customer_view_70caca45-2084-4db3-bb03-7330a5b4d0a9", {timeout: 10000}).should('be.visible').scrollIntoView().click();
            cy.wait(10000);   
            
            // Select Product
            cy.get("#test-id-products_customer_detail_tab" , { timeout: 8000 }).should('be.visible').click();
            cy.get("#test-id-add_product_customer_detail_button", {timeout: 8000}).scrollIntoView().should('be.visible').click();
            cy.wait(10000);
            
               // Product RM
            const optionIndex3 = 2; // Change this to the index you want
            cy.get('[placeholder="Select Product RM"]', { timeout: 10000 }).click().wait(3000);
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.get('li.MuiAutocomplete-option',).eq(optionIndex3).should('be.visible').click();
                
                // Select Roll up
                cy.get('[placeholder="Select Roll up"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Commercial', { timeout: 8000 }).should('be.visible').click();  
                
                // Select Product Group
                cy.get('[placeholder="Select Product Group"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Term Loan', { timeout: 8000 }).scrollIntoView().should('be.visible').click();  
                
                // select Product type 
                cy.get('[placeholder="Select Product Type"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'BHG-JV', { timeout: 8000 }).should('be.visible').click();  
                
                // Anticipated closing date
            
            cy.get('[placeholder="Select Date..."]', {timeout: 8000}).should('be.visible').click();
            cy.get('.rdtNext').click();
            cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)')
                  .then($dates => {
                    if ($dates.length > 0) {
                      // If there are enabled dates in the current month, select the first one
                      cy.wrap($dates).first().click();
                    } else {
                      // If there are no enabled dates in the current month, navigate to the next month
                      cy.get('.rdtNext').click();
            
                      // Then select the first enabled date in the next month
                      cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)').first().click();
                    }
                  });
                
                // Select prob. of close
                cy.get('[placeholder="Select Prob.of Close"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Discussing Needs (10.00%)', { timeout: 8000 }).should('be.visible').click();  
                
             cy.get("#test-id-next_button_product").click();
        
                //Step 2
                // select purpose
                cy.get('[placeholder="Select Product Purpose"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Working Capital Support', { timeout: 8000 }).should('be.visible').click();  
                
                // select FRR
                cy.get('[placeholder="Select FRR"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Lgd < 10%', { timeout: 8000 }).should('be.visible').click();  
        
                // Enter Proposed amount
                cy.get('[placeholder="Enter Proposed Amount"]').type('200000000');
            
                //Add Interest Rate - Int Only
                cy.get("#test-id-dd_add_interest_and_payment_button", {timeout: 10000}).click();
               // Select type
               cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Int. Only', { timeout: 8000 }).should('be.visible').click();  
                cy.get("#test-id-next_interest_rate_form_button_product").should('be.visible').click();
        
        
            // select type
            cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Floating', { timeout: 8000 }).should('be.visible').click();  
                // select index
                cy.get('[placeholder="Select Index"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', '1 US Treasury Note', { timeout: 8000 }).should('be.visible').click();  
        
                // Enter margin
                cy.get('[placeholder="Enter Margin"]').type('10');
        
                /* select rate change
                cy.get('[placeholder="Select Rate Change"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Quarterly', { timeout: 8000 }).should('be.visible').click();*/  
        
                // Select frequency
                cy.get('[placeholder="Select Frequency"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Monthly', { timeout: 8000 }).should('be.visible').click();  
               
                // Enter Term
                cy.get('[placeholder="Enter Term"]').type('12');
                // Add 
                cy.get("#test-id-submit_interest_rate_form_button_product").click();
        
        
                // Add Interest Rate - P&I
                cy.get("#test-id-dd_add_interest_and_payment_button", {timeout: 10000}).click();
               // Select type
               cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'P&I', { timeout: 8000 }).should('be.visible').click();  
                cy.get("#test-id-next_interest_rate_form_button_product").should('be.visible').click();
        
        
            // select type
            cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Variable', { timeout: 8000 }).should('be.visible').click();  
                // select index
                cy.get('[placeholder="Select Index"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', '1 Month LIBOR', { timeout: 8000 }).should('be.visible').click();  
        
                // Enter margin
                cy.get('[placeholder="Enter Margin"]').type('10');
        
                /*select rate change
                cy.get('[placeholder="Select Rate Change"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Monthly', { timeout: 8000 }).should('be.visible').click();   */
        
                // Select frequency
                cy.get('[placeholder="Select Frequency"]',  { timeout: 10000 } ).should('be.visible').click();
                cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                cy.contains('li.MuiAutocomplete-option', 'Quarterly', { timeout: 8000 }).should('be.visible').click();  
               
                // Enter Amortization
                cy.get('[placeholder="Enter Amortization"]').should('be.visible').type('22');
        
                // Enter Term
                cy.get('[placeholder="Enter Term"]').should('be.visible').type('12');
                // Add 
                cy.get("#test-id-submit_interest_rate_form_button_product").click();
        
        // Add Interest Rate - P+I
        cy.get("#test-id-dd_add_interest_and_payment_button", {timeout: 10000}).click();
        // Select type
        cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
         cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
         cy.contains('li.MuiAutocomplete-option', 'P+I', { timeout: 8000 }).should('be.visible').click();  
         cy.get("#test-id-next_interest_rate_form_button_product").should('be.visible').click();
        
        
        // select type
        cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
         cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
         cy.contains('li.MuiAutocomplete-option', 'Fixed', { timeout: 8000 }).should('be.visible').click();  
         // select index
         cy.get('[placeholder="Select Index"]',  { timeout: 10000 } ).should('be.visible').click();
         cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
         cy.contains('li.MuiAutocomplete-option', '1 Month LIBOR', { timeout: 8000 }).should('be.visible').click();  
        
         // Enter margin
         cy.get('[placeholder="Enter Margin"]').type('10');
        
         /* select rate change
         cy.get('[placeholder="Select Rate Change"]',  { timeout: 10000 } ).should('be.visible').click();
         cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
         cy.contains('li.MuiAutocomplete-option', 'Monthly', { timeout: 8000 }).should('be.visible').click();   */
        
         // Select frequency
         cy.get('[placeholder="Select Frequency"]',  { timeout: 10000 } ).should('be.visible').click();
         cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
         cy.contains('li.MuiAutocomplete-option', 'Annually', { timeout: 8000 }).should('be.visible').click();  
        
         // Enter Amortization
         cy.get('[placeholder="Enter Amortization"]').should('be.visible').type('32');
        
         // Enter Term
         cy.get('[placeholder="Enter Term"]').should('be.visible').type('12');
         // Add 
         cy.get("#test-id-submit_interest_rate_form_button_product").click();
        
        
        // Add Interest Rate - Principal Only
        cy.get("#test-id-dd_add_interest_and_payment_button", {timeout: 10000}).click();
        // Select type
        cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
         cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
         cy.contains('li.MuiAutocomplete-option', 'Principal Only', { timeout: 8000 }).should('be.visible').click();  
         cy.get("#test-id-next_interest_rate_form_button_product").should('be.visible').click();
        
         // Select frequency
         cy.get('[placeholder="Select Frequency"]',  { timeout: 10000 } ).should('be.visible').click();
         cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
         cy.contains('li.MuiAutocomplete-option', 'Annually', { timeout: 8000 }).should('be.visible').click();  
        
        // Review date 
         cy.get('#alert-dialog-slide-description [placeholder="Select Date..."]', { timeout: 8000 }).should('be.visible').click();
        
         cy.get('#alert-dialog-slide-description .rdtNext').click();
            cy.get('#alert-dialog-slide-description .rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)')
                  .then($dates => {
                    if ($dates.length > 0) {
                      // If there are enabled dates in the current month, select the first one
                      cy.wrap($dates).first().click();
                    } else {
                      // If there are no enabled dates in the current month, navigate to the next month
                      cy.get('#alert-dialog-slide-description .rdtNext').click();
            
                      // Then select the first enabled date in the next month
                      cy.get('#alert-dialog-slide-description .rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)').first().click();
                    }
                  
          });
        
        
               // starting with payment 
               cy.get('[placeholder="Enter Starting Payment"]').should('be.visible').type(2000);
               // No of payments
               cy.get('[placeholder="Enter No. of Payments"]').should('be.visible').type(10);
               cy.get("#test-id-submit_interest_rate_form_button_product").click();
        
        
        // Add participaton
        cy.get(':nth-child(5) > .flex > .checkbox__style > .checkmark').should('be.visible').click();
        cy.wait(5000);
        cy.get("#test-id-dd_add_participation_button").should('be.visible').click();
        
        cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
        cy.contains('li.MuiAutocomplete-option', 'Bought', { timeout: 8000 }).should('be.visible').click(); 
        // bank owned
        cy.get('[placeholder="Enter Bank Owned"]').clear().first().type('20');
        // Bank's position
        cy.get('[placeholder="Select Bank\'s Position"]',  { timeout: 10000 } ).should('be.visible').first().click();
        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
        cy.contains('li.MuiAutocomplete-option', 'Participant', { timeout: 8000 }).should('be.visible').click(); 
        
        // Name participant
        cy.get('[placeholder="Select Participant"]',  { timeout: 10000 } ).should('be.visible').first().click();
        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
        cy.contains('li.MuiAutocomplete-option', 'Ocean First', { timeout: 8000 }).should('be.visible').click(); 
        
        // select position
        cy.get('[placeholder="Select Bank\'s Position"]',  { timeout: 10000 } ).should('be.visible').last().click();
        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
        cy.contains('li.MuiAutocomplete-option', 'Participant', { timeout: 8000 }).should('be.visible').click(); 
        
        // submit
        cy.get("#test-id-submit_participation_form_button_product").should('be.visible').click();
        
        // Add Fee 
        cy.get("#test-id-dd_add_fee_button", {timeout: 8000}).should('be.visible').click();
        cy.get('[placeholder="Select Type"]')
        
        // select Fee type
        cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
        cy.contains('li.MuiAutocomplete-option', 'Attorney', { timeout: 8000 }).should('be.visible').click(); 
        // select frequency
        cy.get('[placeholder="Select Frequency"]',  { timeout: 10000 } ).should('be.visible').click();
        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
        cy.contains('li.MuiAutocomplete-option', 'Annually', { timeout: 8000 }).should('be.visible').click(); 
        // select method
        cy.get('[placeholder="Select Method"]',  { timeout: 10000 } ).should('be.visible').click();
        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
        cy.contains('li.MuiAutocomplete-option', 'Percent of Commitment', { timeout: 8000 }).should('be.visible').click(); 
        // Amount type
        cy.get('[placeholder="Select Amount Type"]',  { timeout: 10000 } ).should('be.visible').click();
        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
        cy.contains('li.MuiAutocomplete-option', 'Pro Rata', { timeout: 8000 }).should('be.visible').click(); 
        
        // Enter amout
        cy.get('[placeholder="Enter Amount"]').type('15');
        // submit 
        cy.get("#test-id-submit_fee_form_button_product").should('be.visible').click();
               
        

        // Add product
                cy.get("#test-id-submit_button_product").should('be.visible').click();    
                cy.get("#test-id-submit_button_product").should('be.visible').click();    
        
                cy.wait(15000);
                   
              
              
              
              });

              it('Verify that Product Commercial - RLOC, Committed added successfully', () => {
    
                // Navigate to the Customer section in the left pane
                cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
                cy.get("#customer_view_70caca45-2084-4db3-bb03-7330a5b4d0a9", {timeout: 10000}).should('be.visible').scrollIntoView().click();
                cy.wait(10000);   
                
                // Select Product
                cy.get("#test-id-products_customer_detail_tab", { timeout: 8000 }).should('be.visible').click();
                cy.get("#test-id-add_product_customer_detail_button", {timeout: 8000}).scrollIntoView().should('be.visible').click();
                cy.wait(10000);
                
                    // Product RM
                    const optionIndex2 = 2; // Change this to the index you want
                    cy.get('[placeholder="Select Product RM"]', { timeout: 10000 }).click().wait(3000);
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.get('li.MuiAutocomplete-option',).eq(optionIndex2).should('be.visible').click();
                    
                    // Select Roll up
                    cy.get('[placeholder="Select Roll up"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', 'Commercial', { timeout: 8000 }).should('be.visible').click();  
                    
                    // Select Product Group
                    cy.get('[placeholder="Select Product Group"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', 'RLOC, Committed', { timeout: 8000 }).scrollIntoView().should('be.visible').click();  
                    
                    // select Product type 
                    cy.get('[placeholder="Select Product Type"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', 'RLOC > 1 YR', { timeout: 8000 }).should('be.visible').click();  
                    
                    // Anticipated closing date
                
                cy.get('[placeholder="Select Date..."]', {timeout: 8000}).should('be.visible').click();
                cy.get('.rdtNext').click();
                cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)')
                      .then($dates => {
                        if ($dates.length > 0) {
                          // If there are enabled dates in the current month, select the first one
                          cy.wrap($dates).first().click();
                        } else {
                          // If there are no enabled dates in the current month, navigate to the next month
                          cy.get('.rdtNext').click();
                
                          // Then select the first enabled date in the next month
                          cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)').first().click();
                        }
                      });
                    
                    // Select prob. of close
                    cy.get('[placeholder="Select Prob.of Close"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', 'Discussing Needs (10.00%)', { timeout: 8000 }).should('be.visible').click();  
                    
                 cy.get("#test-id-next_button_product").click();
            
                    //Step 2
                    // select purpose
                    cy.get('[placeholder="Select Product Purpose"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', 'Working Capital Support', { timeout: 8000 }).should('be.visible').click();  
                    
                    // select FRR
                    cy.get('[placeholder="Select FRR"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', 'Lgd < 10%', { timeout: 8000 }).should('be.visible').click();  
            
                    // Enter Proposed amount
                    cy.get('[placeholder="Enter Proposed Amount"]').type('200000000');
            
                   // Average utilization
                   cy.get('[placeholder="Enter Avg. Utilization"]').clear().type('10');
            
            // Add interest and Payment 
            cy.get('#test-id-crem_add_interest_and_payment_button', {timeout: 10000}).should('be.visible').click();
            
            
                  //Add Interest Rate - Int Only
                   // Select type
                   cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', 'Int. Only', { timeout: 8000 }).should('be.visible').click();  
                    cy.get("#test-id-next_interest_rate_form_button_product").should('be.visible').click();
            
            
                // select type
                cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', 'Fixed', { timeout: 8000 }).should('be.visible').click();  
                    // select index
                    cy.get('[placeholder="Select Index"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', '1 US Treasury Note', { timeout: 8000 }).should('be.visible').click();  
            
                    // Enter margin
                    cy.get('[placeholder="Enter Margin"]').type('10');
            
                    /* select rate change
                    cy.get('[placeholder="Select Rate Change"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', 'Quarterly', { timeout: 8000 }).should('be.visible').click();  */
            
                    // Select frequency
                    cy.get('[placeholder="Select Frequency"]',  { timeout: 10000 } ).should('be.visible').click();
                    cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                    cy.contains('li.MuiAutocomplete-option', 'Monthly', { timeout: 8000 }).should('be.visible').click();  
                   
                    // Enter Term
                    cy.get('[placeholder="Enter Term"]').clear().type('12');
                    // Add 
                    cy.get('#test-id-submit_interest_rate_form_button_product').click();
            
            
                   
            
            // Add participaton
            cy.get(':nth-child(5) > .flex > .checkbox__style > .checkmark').should('be.visible').click();
            cy.wait(5000);
            cy.get('#test-id-crem_add_participation_button').should('be.visible').click();
            
            cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Sold', { timeout: 8000 }).should('be.visible').click(); 
            
            // Name participant
            cy.get('[placeholder="Select Participant"]',  { timeout: 10000 } ).should('be.visible').first().click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Valley National Bank', { timeout: 8000 }).should('be.visible').click(); 
            
            // select position
            cy.get('[placeholder="Select Bank\'s Position"]',  { timeout: 10000 } ).should('be.visible').last().click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Participant', { timeout: 8000 }).should('be.visible').click(); 
            
            // submit
            cy.get("#test-id-submit_participation_form_button_product").should('be.visible').click();
            
            // Add Fee 
            cy.get('#test-id-crem_add_fee_button').should('be.visible').click();
            cy.get('[placeholder="Select Type"]')
            
            // select Fee type
            cy.get('[placeholder="Select Type"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Attorney', { timeout: 8000 }).should('be.visible').click(); 
            // select frequency
            cy.get('[placeholder="Select Frequency"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Annually', { timeout: 8000 }).should('be.visible').click(); 
            // select method
            cy.get('[placeholder="Select Method"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Percent of Commitment', { timeout: 8000 }).should('be.visible').click(); 
            // Amount type
            cy.get('[placeholder="Select Amount Type"]',  { timeout: 10000 } ).should('be.visible').click();
            cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
            cy.contains('li.MuiAutocomplete-option', 'Pro Rata', { timeout: 8000 }).should('be.visible').click(); 
            
            // Enter amout
            cy.get('[placeholder="Enter Amount"]').type('15');
            // submit 
            cy.get("#test-id-submit_fee_form_button_product").should('be.visible').click();
            
            
            // Add product
                    cy.get("#test-id-submit_button_product").should('be.visible').click();    
                    cy.get("#test-id-submit_button_product").should('be.visible').click();    
            
                    cy.wait(15000);
                       
                  
                  
                  
                  });
                  it('Verify that Product Commercial - Saving Deposit added successfully', () => {
    
                    // Navigate to the Customer section in the left pane
                    cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
                    cy.get("#customer_view_70caca45-2084-4db3-bb03-7330a5b4d0a9", {timeout: 10000}).should('be.visible').scrollIntoView().click();
                    cy.wait(10000);   
                    
                    // Select Product
                    cy.get("#test-id-products_customer_detail_tab", { timeout: 8000 }).should('be.visible').click();
                    cy.get("#test-id-add_product_customer_detail_button", {timeout: 8000}).scrollIntoView().should('be.visible').click();
                    cy.wait(10000);
                    
                        // Product RM
                        const optionIndex2 = 2; // Change this to the index you want
                        cy.get('[placeholder="Select Product RM"]', { timeout: 10000 }).click().wait(3000);
                        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                        cy.get('li.MuiAutocomplete-option',).eq(optionIndex2).should('be.visible').click();
                        
                        // Select Roll up
                        cy.get('[placeholder="Select Roll up"]',  { timeout: 10000 } ).should('be.visible').click();
                        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                        cy.contains('li.MuiAutocomplete-option', 'Commercial', { timeout: 8000 }).should('be.visible').click();  
                        
                        // Select Product Group
                        cy.get('[placeholder="Select Product Group"]',  { timeout: 10000 } ).should('be.visible').click();
                        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                        cy.contains('li.MuiAutocomplete-option', 'Deposit Savings - Comm', { timeout: 8000 }).scrollIntoView().should('be.visible').click();  
                        
                        // select Product type 
                        cy.get('[placeholder="Select Product Type"]',  { timeout: 10000 } ).should('be.visible').click();
                        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                        cy.contains('li.MuiAutocomplete-option', 'CashZone Omnibus Savings for Cardholders', { timeout: 8000 }).should('be.visible').click();  
                        
                        // Anticipated closing date
                    
                    cy.get('[placeholder="Select Date..."]', {timeout: 8000}).should('be.visible').click();
                    cy.get('.rdtNext').click();
                    cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)')
                          .then($dates => {
                            if ($dates.length > 0) {
                              // If there are enabled dates in the current month, select the first one
                              cy.wrap($dates).first().click();
                            } else {
                              // If there are no enabled dates in the current month, navigate to the next month
                              cy.get('.rdtNext').click();
                    
                              // Then select the first enabled date in the next month
                              cy.get('.rdtDay:not(.rdtOld):not(.rdtNew):not(.rdtDisabled)').first().click();
                            }
                          });
                        
                        // Select prob. of close
                        cy.get('[placeholder="Select Prob.of Close"]',  { timeout: 10000 } ).should('be.visible').click();
                        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                        cy.contains('li.MuiAutocomplete-option', 'Discussing Needs (10.00%)', { timeout: 8000 }).should('be.visible').click();  
                        
                     cy.get("#test-id-next_button_product").click();
                
                        //Step 2
                        // select deposit branch
                        cy.get('[placeholder="Select Deposit Branch"]',  { timeout: 10000 } ).should('be.visible').click();
                        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                        cy.contains('li.MuiAutocomplete-option', '46th Street Branch', { timeout: 8000 }).should('be.visible').click();  
                // Enter average collection balance
                cy.get('[placeholder="Enter Amount"]').clear().first().type('200000');
                // Index rate
                cy.get('[placeholder="Enter Index Rate"]').clear().type('20');
                // Enter Add/Sub
                cy.get('[placeholder="Enter Add/Sub Percentage"]').clear().type('8');
                // Enter final rate
                cy.get('[placeholder="Enter Final Rate"]').clear().type('190000');
                
                // Select reason for rate change
                cy.get('[placeholder="Select Reason For Rate Change"]',  { timeout: 10000 } ).should('be.visible').click();
                        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                        cy.contains('li.MuiAutocomplete-option', 'Match Competitor Rate', { timeout: 8000 }).should('be.visible').click();  
                // Select Source
                cy.get('[placeholder="Select Sources"]',  { timeout: 10000 } ).should('be.visible').click();
                        cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
                        cy.contains('li.MuiAutocomplete-option', 'COI - Referral', { timeout: 8000 }).should('be.visible').click();  
                
                // Add product
                        cy.get("#test-id-submit_button_product").should('be.visible').click();    
                        cy.get("#test-id-submit_button_product").should('be.visible').click();    
                
                        cy.wait(15000);
                           
                      
                      
                      
                      });


       
  });

