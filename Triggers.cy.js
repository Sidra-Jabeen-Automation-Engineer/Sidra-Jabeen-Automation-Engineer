describe('Triggers', () => {
    beforeEach(() => {
      // Visit dashboard before each test
      cy.viewport(1920, 1080);
      cy.login();
    });
    it('Verify Covenant added successfully', () => {
      
      // Navigate to the Customer section in the left pane
      cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
      cy.get("#customer_view_8f0aa4d9-16f3-494f-a437-a5836e19c290", {timeout: 19000}).should('be.visible').click();
      cy.wait(10000);   
      
      // Add Trigger
      cy.get("#test-id-trigger_customer_detail_tab_tab", { timeout: 8000 }).should('be.visible').click();
      cy.contains('Add Triggers').click();

      // Add Trigger
 cy.get('[placeholder="Select Trigger Group"]' , { timeout: 8000 }).should('be.visible').click();
 cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
 cy.contains('li.MuiAutocomplete-option', 'Covenant', { timeout: 8000 } ).should('be.visible').click();

// Add Trigger type
cy.get('[placeholder="Select Trigger Type"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Annual Line Cleanup', { timeout: 8000 } ).should('be.visible').click();

cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #-content > .MuiAccordionDetails-root > .justify-end > .custom_button > .flex > .text-xl').click();


// Step 2
// Requirement
cy.get('[placeholder="Select Requirement"]' , { timeout: 8000 }).should('be.visible').click();
 cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
 cy.contains('li.MuiAutocomplete-option', '<=', { timeout: 8000 } ).should('be.visible').click();

// Target
cy.get('[placeholder="Enter Target"]').type('10');

// Frequency
cy.get('[placeholder="Select Frequency"]' , { timeout: 8000 }).should('be.visible').click();
 cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
 cy.contains('li.MuiAutocomplete-option', '30 Days', { timeout: 8000 } ).should('be.visible').click();

// Test as of date
cy.get('input[placeholder="MM-DD-YYYY"]').should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

// Based on
cy.get('[placeholder="Select Based On"]' , { timeout: 8000 }).should('be.visible').click();
 cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
 cy.contains('li.MuiAutocomplete-option', 'At least 015 days prior', { timeout: 8000 } ).should('be.visible').click();

// Due by
cy.get('[placeholder="Select Due By"]' , { timeout: 8000 }).should('be.visible').click();
 cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
 cy.contains('li.MuiAutocomplete-option', 'At least 015 days prior', { timeout: 8000 } ).should('be.visible').click();

cy.contains('Submit').click();
cy.contains('Submit').click();
cy.wait(10000);


    });



    it('Verify Reports added successfully', () => {
      
        // Navigate to the Customer section in the left pane
        cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
        cy.get("#customer_view_8f0aa4d9-16f3-494f-a437-a5836e19c290", {timeout: 19000}).should('be.visible').click();
        cy.wait(10000);   
        
        // Add Memo
        cy.get("#test-id-trigger_customer_detail_tab_tab", { timeout: 8000 }).should('be.visible').click();
        cy.contains('Add Triggers').click();
  
        // Add Trigger
   cy.get('[placeholder="Select Trigger Group"]' , { timeout: 8000 }).should('be.visible').click();
   cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
   cy.contains('li.MuiAutocomplete-option', 'Reports', { timeout: 8000 } ).should('be.visible').click();
  
  // Add Trigger type
  cy.get('[placeholder="Select Trigger Type"]' , { timeout: 8000 }).should('be.visible').click();
  cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
  cy.contains('li.MuiAutocomplete-option', 'Borrowing Base Certificate', { timeout: 8000 } ).should('be.visible').click();
  
  cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #-content > .MuiAccordionDetails-root > .justify-end > .custom_button > .flex > .text-xl').click();

  // Requirement
cy.get('[placeholder="Select Requirement"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Audited', { timeout: 8000 } ).should('be.visible').click();

// Frequency
cy.get('[placeholder="Select Frequency"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', '30 Days', { timeout: 8000 } ).should('be.visible').click();

// Test as of date
cy.get('input[placeholder="MM-DD-YYYY"]').should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

// Due by
cy.get('[placeholder="Select Due By"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'At least 015 days prior', { timeout: 8000 } ).should('be.visible').click();

cy.contains('Submit').click();
cy.contains('Submit').click();
cy.wait(10000);

});

it('Verify Site Visit Tickler added successfully', () => {
      
  // Navigate to the Customer section in the left pane
  cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
  cy.get("#customer_view_8f0aa4d9-16f3-494f-a437-a5836e19c290", {timeout: 19000}).should('be.visible').click();
  cy.wait(10000);   
  
  // Add Trigger
  cy.get("#test-id-trigger_customer_detail_tab_tab", { timeout: 8000 }).should('be.visible').click();
  cy.contains('Add Triggers').click();

  // Add Trigger
cy.get('[placeholder="Select Trigger Group"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Tickler', { timeout: 8000 } ).should('be.visible').click();

// Add Trigger type
cy.get('[placeholder="Select Trigger Type"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Site Visit', { timeout: 8000 } ).should('be.visible').click();

cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #-content > .MuiAccordionDetails-root > .justify-end > .custom_button > .flex > .text-xl').click();

// Step 2

// Frequency
cy.get('[placeholder="Select Frequency"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', '30 Days', { timeout: 8000 } ).should('be.visible').click();


// Test as of date
cy.get('input[placeholder="MM-DD-YYYY"]').should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

// Due by
cy.get('[placeholder="Select Due By"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'At least 015 days prior', { timeout: 8000 } ).should('be.visible').click();

cy.contains('Submit').click();
cy.contains('Submit').click();
cy.wait(8000);

});


it('Verify UCC-1 Tickler added successfully', () => {
      
  // Navigate to the Customer section in the left pane
  cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
  cy.get("#customer_view_8f0aa4d9-16f3-494f-a437-a5836e19c290", {timeout: 19000}).should('be.visible').click();
  cy.wait(10000);   
  
  // Add Trigger
  cy.get("#test-id-trigger_customer_detail_tab_tab", { timeout: 8000 }).should('be.visible').click();
  cy.contains('Add Triggers').click();

  // Add Trigger
cy.get('[placeholder="Select Trigger Group"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Tickler', { timeout: 8000 } ).should('be.visible').click();

// Add Trigger type
cy.get('[placeholder="Select Trigger Type"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'UCC-1', { timeout: 8000 } ).should('be.visible').click();

cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #-content > .MuiAccordionDetails-root > .justify-end > .custom_button > .flex > .text-xl').click();

// Step 2

// Frequency
cy.get('[placeholder="Select Frequency"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', '30 Days', { timeout: 8000 } ).should('be.visible').click();


// Expiration date
cy.get('input[placeholder="MM-DD-YYYY"]').first().should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

// Test as of date
cy.get('input[placeholder="MM-DD-YYYY"]').last().should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click({ multiple: true });


// Due by
cy.get('[placeholder="Select Due By"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'At least 015 days prior', { timeout: 8000 } ).should('be.visible').click();


// State
cy.get('[placeholder="Select State"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Delaware', { timeout: 8000 } ).should('be.visible').click();

// City
cy.get('[placeholder="Select City"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Blades', { timeout: 8000 } ).should('be.visible').click();

cy.get('[placeholder="Enter Record Number"]').type('123');


// Secured Party
cy.get('[placeholder="Select Secured Party"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Cadnz Bank Limited', { timeout: 8000 } ).should('be.visible').click();

cy.contains('Submit').click();
cy.contains('Submit').click();
cy.wait(8000);

});

it('Verify Real Estate Taxes Tickler added successfully', () => {
      
  // Navigate to the Customer section in the left pane
  cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
  cy.get("#customer_view_8f0aa4d9-16f3-494f-a437-a5836e19c290", {timeout: 19000}).should('be.visible').click();
  cy.wait(10000);   
  
  // Add Trigger
  cy.get("#test-id-trigger_customer_detail_tab_tab", { timeout: 8000 }).should('be.visible').click();
  cy.contains('Add Triggers').click();

  // Add Trigger
cy.get('[placeholder="Select Trigger Group"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Tickler', { timeout: 8000 } ).should('be.visible').click();

// Add Trigger type
cy.get('[placeholder="Select Trigger Type"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Real Estate Taxes', { timeout: 8000 } ).should('be.visible').click();

cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #-content > .MuiAccordionDetails-root > .justify-end > .custom_button > .flex > .text-xl').click();

// Step 2


// Last Paid
cy.get('[placeholder="MM-DD-YYYY"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

// Due by
cy.get('[placeholder="Select Due By"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'At least 030 days prior', { timeout: 8000 } ).should('be.visible').click();


// Tax amount
cy.get('[placeholder="Enter Tax Amount"]').type('3000');

// Frequency
cy.get('[placeholder="Select Frequency"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', '30 Days', { timeout: 8000 } ).should('be.visible').click();


// Monitioring service account number
cy.get('[placeholder="Enter Monitoring Service Account Number"]').type('12356789');

cy.contains('Submit').click();
cy.contains('Submit').click();
cy.wait(8000);


});


it('Verify Flood Certificate in Doc. Exceptions added successfully', () => {
      
  // Navigate to the Customer section in the left pane
  cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
  cy.get("#customer_view_8f0aa4d9-16f3-494f-a437-a5836e19c290", {timeout: 19000}).should('be.visible').click();
  cy.wait(10000);   
  
  // Add Trigger
  cy.get("#test-id-trigger_customer_detail_tab_tab", { timeout: 8000 }).should('be.visible').click();
  cy.contains('Add Triggers').click();

  // Add Trigger
cy.get('[placeholder="Select Trigger Group"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Doc. Exceptions', { timeout: 8000 } ).should('be.visible').click();

// Add Trigger type
cy.get('[placeholder="Select Trigger Type"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Flood Certificate', { timeout: 8000 } ).should('be.visible').click();

cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #-content > .MuiAccordionDetails-root > .justify-end > .custom_button > .flex > .text-xl').click();

// Step 2


// Last Paid
cy.get('[placeholder="MM-DD-YYYY"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

// Exception
cy.get('[placeholder="Select Exception"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Monitored', { timeout: 8000 } ).should('be.visible').click();


// Loan
cy.get('[placeholder="Select Loans"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'ACH Line Credit', { timeout: 8000 } ).should('be.visible').click();

//  Due By
cy.get('[placeholder="Select Due By"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'At least 030 days prior', { timeout: 8000 } ).scrollIntoView().should('be.visible').click();

// Expiration date
cy.get('input[placeholder="MM-DD-YYYY"]').first().should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

cy.contains('Submit').click();
cy.contains('Submit').click();
cy.wait(8000);


});

it('Verify Policy Exception added successfully', () => {
      
  // Navigate to the Customer section in the left pane
  cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
  cy.get("#customer_view_8f0aa4d9-16f3-494f-a437-a5836e19c290", {timeout: 19000}).should('be.visible').click();
  cy.wait(10000);   
  
  // Add Trigger
  cy.get("#test-id-trigger_customer_detail_tab_tab", { timeout: 8000 }).should('be.visible').click();
  cy.contains('Add Triggers').click();

  // Add Trigger
cy.get('[placeholder="Select Trigger Group"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Policy Exceptions', { timeout: 8000 } ).should('be.visible').click();

// Add Trigger type
cy.get('[placeholder="Select Trigger Type"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'House Lending Limit', { timeout: 8000 } ).should('be.visible').click();

cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #-content > .MuiAccordionDetails-root > .justify-end > .custom_button > .flex > .text-xl').click();

// Approval date
cy.get('input[placeholder="MM-DD-YYYY"]').should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

// Highest approval level
cy.get('[placeholder="Select Highest Approval Level"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'B', { timeout: 8000 } ).should('be.visible').click();


cy.contains('Submit').click();
cy.contains('Submit').click();
cy.wait(8000);

});

it.only('Verify Flood insurance trigger added successfully', () => {
      
  // Navigate to the Customer section in the left pane
  cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
  cy.get("#customer_view_8f0aa4d9-16f3-494f-a437-a5836e19c290", {timeout: 19000}).should('be.visible').click();
  cy.wait(10000);   
  
  // Add Trigger
  cy.get("#test-id-trigger_customer_detail_tab_tab", { timeout: 8000 }).should('be.visible').click();
  cy.contains('Add Triggers').click();

  // Add Trigger
cy.get('[placeholder="Select Trigger Group"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Insurance', { timeout: 8000 } ).should('be.visible').click();

// Add Trigger type
cy.get('[placeholder="Select Trigger Type"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Flood', { timeout: 8000 } ).should('be.visible').click();

cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #-content > .MuiAccordionDetails-root > .justify-end > .custom_button > .flex > .text-xl').click();

// Frequency
cy.get('[placeholder="Select Frequency"]' , { timeout: 8000 }).should('be.visible').click();
 cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
 cy.contains('li.MuiAutocomplete-option', '30 Days', { timeout: 8000 } ).should('be.visible').click();

// Test as of date
cy.get('[name="test_asof"]').should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

 // Due by
cy.get('[placeholder="Select Due By"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'At least 015 days prior', { timeout: 8000 } ).should('be.visible').click();

// Expiration date
cy.get('[name="expiration_date"]').should('be.visible').click();
cy.get('[data-timestamp="1713985200000"]').click();

// NFIP Info 
// Community number
cy.get('[placeholder="Select Community Number"]').type('1234');

// Community name
cy.get('[placeholder="Select Community Name"]').type('1Test Community');

// Map effective date
cy.get('[name="effective_date"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'A - High Risk Area', { timeout: 8000 } ).should('be.visible').click();

// Flood zone
cy.get('[placeholder="Select Flood zone"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'A - High Risk Area', { timeout: 8000 } ).should('be.visible').click();

// Flood cert date

cy.get('[name="flood_cert_date"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();
// Policy number
cy.get('[placeholder="Enter Policy Number"]').type('0786');

// policy effective date
cy.get('[name="policy_effective_date"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

// policy expiry date
cy.get('[name="policy_expiry_date"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

// RE Property Coverage
cy.get('[placeholder="Enter RE Property Coverage"]').type('0786');
// Content Amount

cy.get('[placeholder="Enter Content Amount"]').type('2000');


cy.contains('Submit').click();
cy.contains('Submit').click();
cy.wait(8000);

});

it('Verify General insurance trigger added successfully', () => {
      
  // Navigate to the Customer section in the left pane
  cy.contains('Customers', {timeout: 10000}).should('be.visible').click();
  cy.get("#customer_view_8f0aa4d9-16f3-494f-a437-a5836e19c290", {timeout: 19000}).should('be.visible').click();
  cy.wait(10000);   
  
  // Add Trigger
  cy.get("#test-id-trigger_customer_detail_tab_tab", { timeout: 8000 }).should('be.visible').click();
  cy.contains('Add Triggers').click();

  // Add Trigger
cy.get('[placeholder="Select Trigger Group"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Insurance', { timeout: 8000 } ).should('be.visible').click();

// Add Trigger type
cy.get('[placeholder="Select Trigger Type"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'General Insurance', { timeout: 8000 } ).should('be.visible').click();

cy.get('.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #-content > .MuiAccordionDetails-root > .justify-end > .custom_button > .flex > .text-xl').click();

// Frequency
cy.get('[placeholder="Select Frequency"]' , { timeout: 8000 }).should('be.visible').click();
 cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
 cy.contains('li.MuiAutocomplete-option', '30 Days', { timeout: 8000 } ).should('be.visible').click();

 // Notice period
cy.get('[placeholder="Enter Notice Period"]').type('30');


// policy effective date
cy.get('[name="policy_effective_date"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('[data-timestamp="1711911600000"]').click();

// policy expiry date
cy.get('[name="policy_expiry_date"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('[data-timestamp="1714590000000"]').click();
 // Due by
 cy.get('[placeholder="Select Due By"]' , { timeout: 8000 }).should('be.visible').click();
 cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
 cy.contains('li.MuiAutocomplete-option', 'At least 015 days prior', { timeout: 8000 } ).should('be.visible').click();

// Expiration date

// Due date 

cy.get('button.custom_purple_button').contains('Add Agency').click();

// Agency name 
cy.get('[placeholder="Enter Agency Name"]').type('Test Agency');

// MAin Telephone
cy.get('[placeholder="1 (702) 123-4567"]').first().type('2345789097');

// Enter Email
cy.get('[placeholder="Enter Email"]').type('abc.wistech.biz');
// Website URL
cy.get('[placeholder="Enter Website URL"]').type('https://uat.cadnz.com');
// Enter address
cy.get('[placeholder="Enter Address 1"]').type('Street 14 Brookfield');

// State
cy.get('[placeholder="Select State"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'California', { timeout: 8000 } ).should('be.visible').click();

// City
cy.get('[placeholder="Select City"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Yucaipa', { timeout: 8000 } ).should('be.visible').click();

// zip code
cy.get('[placeholder="Enter Zip Code"]').type('1232');

// Add agent 
cy.get('button.custom_purple_button').contains('Add Row').click();

// Add agent detail
// Add agent name
cy.get('[placeholder="Enter First Name"]').type('Test');
// Add last name
cy.get('[placeholder="Enter Last Name"]').type('Agent');
// Phone
cy.get('[placeholder="1 (702) 123-4567"]').first().type('2345789097');

// Mobile
cy.get('[placeholder="1 (702) 123-4567"]').last().type('2345789097');
// Enter Email
cy.get('[placeholder="Enter Email"]').type('abcdef.wistech.biz');


cy.contains('Submit').click();

cy.contains('Submit').click();

// Insurance coverage
// Insurance type
cy.get('[placeholder="Select Insurance Type"]' , { timeout: 8000 }).should('be.visible').click();
cy.get('.MuiAutocomplete-popper', { timeout: 8000 } ).should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'test', { timeout: 8000 } ).should('be.visible').click();

// Policy number
cy.get('[placeholder="Enter Policy Number"]').type('1232');

// Policy effective date

// Policy expiry date

// Each occurance
cy.get('[placeholder="Enter Each Occurance"]').type('332');

// General Aggregate
cy.get('[placeholder="Enter Policy Number"]').type('234');

// Deductible Amount
cy.get('[placeholder="Enter Policy Number"]').type('1232000');

cy.contains('Submit').click();
cy.contains('Submit').click();
cy.wait(8000);


});


});