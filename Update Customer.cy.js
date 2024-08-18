import {
  randomEmail,
  randomURL,
  randomFixNumber,
  randomCompany,
  randomfirstName,
  randomlastName,
  randommiddleName,
  randomsuffix,
  randomfullName
} from "../Lib/fakedata";


describe("Update Business Customer", () => {
  
  before(() => {
    // Perform login only once before all tests
    cy.viewport(1920, 1080);
    cy.session("login", () => {
      cy.login();
   });
  });

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.session("login", () => {
      cy.login();
    });
  });
  it("Update customer details", () => {

    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);



    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Customer Type
    const optionIndex2 = 2; // Change this to the index you want

    cy.get('[placeholder="Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex2).click();

    // Enter CIF
    cy.get('[placeholder="CIF"]').clear().type(randomFixNumber);

    //Source

    const optionIndex3 = 3; // Change this to the index you want

    cy.get('[placeholder="Source"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex3).click();

    // Submit
    cy.contains("Update").click();

    cy.contains(optionIndex2).should("exist");
    cy.contains(randomFixNumber);
    cy.contains(optionIndex3).should("exist");

    cy.get("#edit_customer_contact_info", {timeout:20000}).click();

    // Update EMAIL
    cy.get('[placeholder="Enter Email"]').clear().type(randomEmail);

    // Submit
    cy.contains("Update").click();

    // Edit customer NAICS
    cy.get("#edit_customer_naics", {timeout:20000}).should("be.visible").click();

    const optionIndex1 = 1; // Change this to the index you want

    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex1).click();

    // Submit
    cy.contains("Update").click();

    cy.get("#edit_customer_social_media")
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Website
    cy.get('[placeholder="Enter Website"]').clear().type(randomURL);
    // Facebook
    cy.get('[placeholder="Enter Facebook"]').clear().type(randomURL);
    // Instagramnpx
    cy.get('[placeholder="Enter Instagram"]').clear().type(randomURL);
    // Twitter
    cy.get('[placeholder="Enter Twitter"]').clear().type(randomURL);
    // LinkedIn
    cy.get('[placeholder="Enter Linkedin"]').clear().type(randomURL);

    // Submit
    cy.contains("Update").click();
    cy.contains('.toaster_container', 'Customer has been updated.', {timeout:20000}).should('exist');
  });

  it("Update customer details and hit cancel", () => {

    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

   

    // Update basic info
    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();
    cy.wait(5000);

    //Select record type Business
    cy.get('[placeholder="Record type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Enter CIF
    cy.get('[placeholder="CIF"]').clear().type("12345678912");

      // Customer Type
      const optionIndex2 = 2; // Change this to the index you want

      cy.get('[placeholder="Customer Type"]').click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get("li.MuiAutocomplete-option").eq(optionIndex2).click();

     //Source
     cy.get('[placeholder="Source"]').click();
     cy.get(".MuiAutocomplete-popper").should("be.visible");
     cy.contains("li.MuiAutocomplete-option", "RM - Calling").click();

    // Submit form with cancel action
    cy.get("#cancel_btn_edit_customer_basic_info > .text-xl")
      .click();


    cy.contains("123456", {timeout:8000}).should("not.exist");
    cy.contains("RM - Calling").should("not.exist");
    cy.contains("P3 - (Difficult to move from current bank)").should(
      "not.exist"
    );

    cy.get("#edit_customer_contact_info", {timeout:20000}).click();

    // Update EMAIL
    cy.get('[placeholder="Enter Email"]')
      .clear()
      .type("Do not update@gmail.com");

    // Submit form with cancel action
    cy.get("#cancel_btn_edit_customer_personal_details").click();
    cy.contains("Do not update@gmail.com").should("not.exist");

    // Edit customer NAICS
    cy.get("#edit_customer_naics", {timeout:20000}).click();

    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Mustard seed farming, field and seed production - 111120"
    )
      .click();

    // Submit form with cancel action
    cy.get("#cancel_btn_edit_customer_naics").click();
    cy.contains("Belt conveyor systems manufacturing - 333922").should(
      "not.exist"
    );

    // Edit social media
    cy.get("#edit_customer_social_media")
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Website
    cy.get('[placeholder="Enter Website"]')
      .clear()
      .type("https://Do/not/update/site/");
    // Facebook
    cy.get('[placeholder="Enter Facebook"]')
      .clear()
      .type("https://Do/not/update/facebook/");
    // Instagramnpx
    cy.get('[placeholder="Enter Instagram"]')
      .clear()
      .type("https://Do/not/update/instagram/");
    // Twitter
    cy.get('[placeholder="Enter Twitter"]')
      .clear()
      .type("https://Do/not/update/twitter/");
    // LinkedIn
    cy.get('[placeholder="Enter Linkedin"]')
      .clear()
      .type("https://Do/not/update/linkedin/");

    // Submit form with cancel action
    cy.get("#cancel_btn_edit_customer_social_links").click();

    cy.contains("https://Do/not/update/site/").should("not.exist");
    cy.contains("https://Do/not/update/facebook/").should("not.exist");
    cy.contains("https://Do/not/update/instagram/").should("not.exist");
    cy.contains("https://Do/not/update/twitter/").should("not.exist");
    cy.contains("https://Do/not/update/linkedin/").should("not.exist");
  });

  it("Update and verify updated data of cutomer type", () => {
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Customer Type
    const optionIndex2 = 2; // Change this to the index you want

    cy.get('[placeholder="Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex2).click();
    cy.contains("Update").should("be.visible").click();
  

    cy.contains(optionIndex2).should("exist");
  });

  it("Update and verify updated data of CIF", () => {
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Enter CIF
    cy.get('[placeholder="CIF"]').clear().type(randomFixNumber);
    cy.contains("Update").should("be.visible").click();
   

    cy.contains(randomFixNumber).should("be.visible");
  });

  it("Update and verify updated data of Source", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
   

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Source
    const optionIndex3 = 3; // Change this to the index you want

    cy.get('[placeholder="Source"]').click({ force: true });
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Referral - Board Member").click();

    cy.contains("Update").should("be.visible").click();
   

    cy.contains(optionIndex3).should("exist");
  });

  it("Update and verify updated data of Email", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_contact_info", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Update EMAIL
    cy.get('[placeholder="Enter Email"]').clear().type(randomEmail);
    cy.contains("Update").scrollIntoView().should("be.visible").click();
    cy.wait(5000);

    cy.contains(randomEmail).scrollIntoView().should("exist");
  });

  it("Update and verify updated data of NAICS", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
 
    cy.get("#edit_customer_naics", {timeout:20000}).click();

    const optionIndex1 = 1; // Change this to the index you want

    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex1).click();

    cy.contains("Update").should("be.visible").click();
   

    cy.contains(optionIndex1, { timeout: 8000 }).scrollIntoView().should("be.visible");
  });

  it("Update and verify updated data of URLs", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
    cy.get("#edit_customer_social_media", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Website
    cy.get('[placeholder="Enter Website"]').clear().type(randomURL);
    // Facebook
    cy.get('[placeholder="Enter Facebook"]').clear().type(randomURL);
    // Instagramnpx
    cy.get('[placeholder="Enter Instagram"]').clear().type(randomURL);
    // Twitter
    cy.get('[placeholder="Enter Twitter"]').clear().type(randomURL);
    // LinkedIn
    cy.get('[placeholder="Enter Linkedin"]').clear().type(randomURL);

    // Submit
    cy.contains("Update").click();

    cy.contains('.toaster_container', 'Customer has been updated.').should('exist');

  });

  it("should select valid value from dropdown of Customer type", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
  
    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    // Customer Type
    cy.get('[placeholder="Customer Type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "C1").click();
    // Verify the selected value
    cy.get('[placeholder="Customer Type"]').should(
      "have.value",
      "C1 - (Meets ROE hurdle)"
    );
  });

  it("should search and select value from dropdown of Customer type", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="Customer Type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Customer Type"]').type("C2");
    cy.contains(".MuiAutocomplete-option", "C2").should("exist");
    cy.contains(".MuiAutocomplete-option", "C2").click();
    cy.get('[placeholder="Customer Type"]').should(
      "have.value",
      "C2 - (Can grow to meet ROE hurdle)"
    );
  });

  it("should handle invalid input gracefully from dropdown of Customer type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
   
    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="Customer Type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Customer Type"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("should select valid value from dropdown Source", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
   
    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();
    cy.get('[placeholder="Source"]')
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "RM - Calling").click();
    // Verify the selected value
    cy.get('[placeholder="Source"]').should("have.value", "RM - Calling");
  });

  it("should search and select value from dropdown Source", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
  
    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    // Click the dropdown
    cy.get('[placeholder="Source"]')
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Source"]').type("RM - Calling");
    cy.contains(".MuiAutocomplete-option", "RM - Calling").should("exist");
    cy.contains(".MuiAutocomplete-option", "RM - Calling").click();
    cy.get('[placeholder="Source"]').should("have.value", "RM - Calling");
  });

  it("should handle invalid input gracefully from dropdown Source", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Click the dropdown
    cy.get('[placeholder="Source"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Source"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("should select valid value from dropdown NAICS Description ", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Edit customer NAICS
    cy.get("#edit_customer_naics", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.get('[placeholder="NAICS Description"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Mustard seed farming, field and seed production - 111120"
    ).click();
    // Verify the selected value
    cy.get('[placeholder="NAICS Description"]').should(
      "have.value",
      "Mustard seed farming, field and seed production - 111120"
    );
  });

  it("should search and select value NAICS Description ", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
   
    // Edit customer NAICS
    cy.get("#edit_customer_naics", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Click the dropdown
    cy.get('[placeholder="NAICS Description"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="NAICS Description"]').type(
      "Mustard seed farming, field and seed production - 111120"
    );
    cy.contains(
      ".MuiAutocomplete-option",
      "Mustard seed farming, field and seed production - 111120"
    ).should("exist");
    cy.contains(
      ".MuiAutocomplete-option",
      "Mustard seed farming, field and seed production - 111120"
    ).click();
    cy.get('[placeholder="NAICS Description"]').should(
      "have.value",
      "Mustard seed farming, field and seed production - 111120"
    );
  });

  it("should handle invalid input gracefully NAICS Description ", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
   
    // Edit customer NAICS
    cy.get("#edit_customer_naics", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Click the dropdown
    cy.get('[placeholder="NAICS Description"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="NAICS Description"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper", {timeout:8000}).should("contain", "No options");
  });

  it("Verify that Business customer does not update with Invalid Email", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
    cy.get("#edit_customer_contact_info", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Enter Email
    cy.get("[placeholder='Enter Email']").clear().type("Enter@Invalid Email");
    cy.contains("Invalid Email").should("exist");
   

  });
});


describe("Update Individual Customer", () => {
  before(() => {
    // Perform login only once before all tests
    cy.viewport(1920, 1080);
    cy.session("login", () => {
      cy.login();
    });
  });

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.session("login", () => {
      cy.login();
    });
  });

  it("Update individual customer details", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
 

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    //Borrower Risk Rating
    cy.get('[placeholder="Borrower Risk Rating"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Acceptable (47)")
      .click();

    //Select Salutation
    cy.get('[placeholder="Salutation"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Mr").click();

    // Enter First Name,last name
    cy.get('[name="first_name"]').type('Elon');
   
    cy.get('[name="last_name"]').type('Shawn');

    // Customer Type
    const optionIndex2 = 2; // Change this to the index you want

    cy.get('[placeholder="Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex2).click();

    // Enter CIF
    cy.get('[placeholder="CIF"]').clear().type(randomFixNumber);

    //Source

    const optionIndex3 = 3; // Change this to the index you want

    cy.get('[placeholder="Source"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex3).click();

    // Select Entity type
    cy.get('[placeholder="Entity"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "C-Corp. - Privately held"
    ).click();

    // Submit
    cy.contains("Update").should("be.visible").click();

    cy.contains(optionIndex2, {timeout:20000}).should("exist");
    cy.contains(optionIndex3, {timeout:20000}).should("exist");
    cy.contains("C-Corp. - Privately held").should("exist");

    cy.get("#edit_customer_contact_info", {timeout:20000}).should("be.visible").click();

    // Update EMAIL
    cy.get('[placeholder="Enter Email"]').clear().type(randomEmail);

    // Submit
    cy.contains("Update").click();
    cy.contains(randomEmail, {timeout:20000}).should("exist");

    // Edit customer NAICS
    cy.get("#edit_customer_naics", {timeout:20000}).should("be.visible").click();

    const optionIndex1 = 1; // Change this to the index you want

    cy.get('[placeholder="NAICS Description"]', {timeout:20000}).click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex1).click();

    // Submit
    cy.contains("Update").click();

    cy.contains(optionIndex1, {timeout:20000}).should("exist");

    cy.get("#edit_customer_social_media", {timeout:5000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Website
    cy.get('[placeholder="Enter Website"]').clear().type(randomURL);
    // Facebook
    cy.get('[placeholder="Enter Facebook"]').clear().type(randomURL);
    // Instagramnpx
    cy.get('[placeholder="Enter Instagram"]').clear().type(randomURL);
    // Twitter
    cy.get('[placeholder="Enter Twitter"]').clear().type(randomURL);
    // LinkedIn
    cy.get('[placeholder="Enter Linkedin"]').clear().type(randomURL);

    // Submit
    cy.contains("Update").click();
     cy.contains('.toaster_container', 'Customer has been updated.', {timeout:20000}).should('exist');
  });

  it("Update customer details and hit cancel", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);


    // Update basic info
    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();
    cy.wait(5000);

    //Select record type Individual
    cy.get('[placeholder="Record type"]', {timeout:5000})
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Enter CIF
    cy.get('[placeholder="CIF"]').clear().type("12345678912");

    // Customer Type
    const optionIndex2 = 2; // Change this to the index you want

    cy.get('[placeholder="Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex2).click();

    //Source

    const optionIndex3 = 3; // Change this to the index you want

    cy.get('[placeholder="Source"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex3).click();

    // Submit form with cancel action
    cy.get("#cancel_btn_edit_customer_basic_info > .text-xl", {timeout:5000})
      .click();
    cy.contains("123456", { timeout: 8000 }).should("not.exist");
    cy.contains("P3 - (Difficult to move from current bank)").should(
      "not.exist"
    );

    cy.get("#edit_customer_contact_info", {timeout:20000}).click();

    // Update EMAIL
    cy.get('[placeholder="Enter Email"]')
      .clear()
      .type("Do not update@gmail.com");

    // Submit form with cancel action
    cy.get("#cancel_btn_edit_customer_personal_details", {timeout:5000}).click();

    cy.contains("Do not update@gmail.com").should("not.exist");

    // Edit customer NAICS
    cy.get("#edit_customer_naics", {timeout:20000}).should("be.visible").click();

    const optionIndex1 = 1; // Change this to the index you want

    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex1).click();

    // Submit form with cancel action
    cy.get("#cancel_btn_edit_customer_naics").click();

    // Edit social media
    cy.get("#edit_customer_social_media", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Website
    cy.get('[placeholder="Enter Website"]')
      .clear()
      .type("https://Do/not/update/site/");
    // Facebook
    cy.get('[placeholder="Enter Facebook"]')
      .clear()
      .type("https://Do/not/update/facebook/");
    // Instagramnpx
    cy.get('[placeholder="Enter Instagram"]')
      .clear()
      .type("https://Do/not/update/instagram/");
    // Twitter
    cy.get('[placeholder="Enter Twitter"]')
      .clear()
      .type("https://Do/not/update/twitter/");
    // LinkedIn
    cy.get('[placeholder="Enter Linkedin"]')
      .clear()
      .type("https://Do/not/update/linkedin/");

    // Submit form with cancel action
    cy.get("#cancel_btn_edit_customer_social_links", {timeout:5000}).click();

    cy.contains("https://Do/not/update/site/").should("not.exist");
    cy.contains("https://Do/not/update/facebook/").should("not.exist");
    cy.contains("https://Do/not/update/instagram/").should("not.exist");
    cy.contains("https://Do/not/update/twitter/").should("not.exist");
    cy.contains("https://Do/not/update/linkedin/").should("not.exist");
  });

  it("Update and verify updated data of cutomer type", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
   
    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Customer Type
    const optionIndex2 = 2; // Change this to the index you want

    cy.get('[placeholder="Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex2).click();
    

    cy.contains(optionIndex2, {timeout:20000}).should("exist");
  });

  it("Update data of CIF", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Enter CIF
    cy.get('[placeholder="CIF"]').clear().type(randomFixNumber);
  
  });

  it("Update and verify updated data of Source", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
  

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Source
    const optionIndex3 = 3; // Change this to the index you want

    cy.get('[placeholder="Source"]').click({ force: true });
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Referral - Board Member").click();


    cy.contains(optionIndex3, {timeout:6000}).should("exist");
  });

  it("Update and verify updated data of Email", () => {
  
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
  

    cy.get("#edit_customer_contact_info", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Update EMAIL
    cy.get('[placeholder="Enter Email"]').clear().type(randomEmail);

 // Submit
 cy.contains("Update").click();

 cy.contains('.toaster_container', 'Customer has been updated.').should('exist');

  });

  it("Update and verify updated data of NAICS", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
   
    cy.get("#edit_customer_naics", {timeout:20000}).click();

    const optionIndex1 = 1; // Change this to the index you want

    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex1).click();

    cy.contains("Update").should("be.visible").click();
   

    cy.contains(optionIndex1, { timeout: 8000 }).scrollIntoView().should("be.visible");
  });

  it("Update and verify updated data of URLs", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
   
    cy.get("#edit_customer_social_media", { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Website
    cy.get('[placeholder="Enter Website"]').clear().type(randomURL);
    // Facebook
    cy.get('[placeholder="Enter Facebook"]').clear().type(randomURL);
    // Instagramnpx
    cy.get('[placeholder="Enter Instagram"]').clear().type(randomURL);
    // Twitter
    cy.get('[placeholder="Enter Twitter"]').clear().type(randomURL);
    // LinkedIn
    cy.get('[placeholder="Enter Linkedin"]').clear().type(randomURL);

    // Submit
    cy.contains("Update").click();

   cy.contains('.toaster_container', 'Customer has been updated.').should('exist');
  });

  it("should select valid value from dropdown of Customer type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    
    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    // Customer Type
    cy.get('[placeholder="Customer Type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "C1").click();
    // Verify the selected value
    cy.get('[placeholder="Customer Type"]').should(
      "have.value",
      "C1 - (Meets ROE hurdle)"
    );
  });

  it("should search and select value from dropdown of Customer type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="Customer Type"]', {timeout:5000})
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Customer Type"]').type("C2");
    cy.contains(".MuiAutocomplete-option", "C2").should("exist");
    cy.contains(".MuiAutocomplete-option", "C2").click();
    cy.get('[placeholder="Customer Type"]').should(
      "have.value",
      "C2 - (Can grow to meet ROE hurdle)"
    );
  });

  it("should handle invalid input gracefully from dropdown of Customer type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="Customer Type"]', {timeout:5000})
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Customer Type"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("should select valid value from dropdown Source", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Business
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    cy.get('[placeholder="Source"]')
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "RM - Calling").click();
    // Verify the selected value
    cy.get('[placeholder="Source"]').should("have.value", "RM - Calling");
  });

  it("should search and select value from dropdown Source", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200); 

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    // Click the dropdown
    cy.get('[placeholder="Source"]')
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Source"]').type("RM - Calling");
    cy.contains(".MuiAutocomplete-option", "RM - Calling").should("exist");
    cy.contains(".MuiAutocomplete-option", "RM - Calling").click();
    cy.get('[placeholder="Source"]').should("have.value", "RM - Calling");
  });

  it("should handle invalid input gracefully from dropdown Source", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Click the dropdown
    cy.get('[placeholder="Source"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Source"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("should select valid value from dropdown NAICS Description ", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Edit customer NAICS
    cy.get("#edit_customer_naics", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Mustard seed farming, field and seed production - 111120"
    ).click();
    // Verify the selected value
    cy.get('[placeholder="NAICS Description"]').should(
      "have.value",
      "Mustard seed farming, field and seed production - 111120"
    );
  });

  it("should search and select value NAICS Description ", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Edit customer NAICS
    cy.get("#edit_customer_naics", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click();

    // Click the dropdown
    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="NAICS Description"]').type(
      "Mustard seed farming, field and seed production - 111120"
    );
    cy.contains(
      ".MuiAutocomplete-option",
      "Mustard seed farming, field and seed production - 111120"
    ).should("exist");
    cy.contains(
      ".MuiAutocomplete-option",
      "Mustard seed farming, field and seed production - 111120"
    ).click();
    cy.get('[placeholder="NAICS Description"]').should(
      "have.value",
      "Mustard seed farming, field and seed production - 111120"
    );
  });

  it("should handle invalid input gracefully NAICS Description ", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();
    // Edit customer NAICS
    cy.get("#edit_customer_naics", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click({force:true});

    // Click the dropdown
    cy.get('[placeholder="NAICS Description"]', {timeout:5000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="NAICS Description"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("Verify that Business customer does not create with Invalid Email", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();
    cy.get("#edit_customer_contact_info", {timeout:20000})
      .scrollIntoView()
      .should("be.visible")
      .click({force:true});

    // Enter Email
    cy.get("[placeholder='Enter Email']").clear().type("Enter@Invalid Email");
    cy.contains("Invalid Email").should("exist");
  });

  // Borrower risk rating
  it("should select valid value from dropdown Borrower risk rating", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('[placeholder="Borrower Risk Rating"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Exceptional (10)").click();
    // Verify the selected value
    cy.get('[placeholder="Borrower Risk Rating"]').should(
      "have.value",
      "Exceptional (10)"
    );
  });

  it("should search and select value from dropdown Borrower risk rating", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information",{timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Borrower Risk Rating"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Borrower Risk Rating"]').type("Exceptional (10)");
    cy.contains(".MuiAutocomplete-option", "Exceptional (10)").should("exist");
    cy.contains(".MuiAutocomplete-option", "Exceptional (10)").click();
    cy.get('[placeholder="Borrower Risk Rating"]').should(
      "have.value",
      "Exceptional (10)"
    );
  });

  it("should handle invalid input gracefully from dropdown Borrower risk rating", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();
    // Click the dropdown
    cy.get('[placeholder="Borrower Risk Rating"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Borrower Risk Rating"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Record type

  it("should select valid value from dropdown Record type", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();
    cy.get('[placeholder="Record type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();
    // Verify the selected value
    cy.get('[placeholder="Record type"]').should("have.value", "Individual");
  });

  it("should search and select value from dropdown Record type", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Record type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Record type"]').type("Individual");
    cy.contains(".MuiAutocomplete-option", "Individual").click();
    
  });

  it("should handle invalid input gracefully  from dropdown Record type", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
      
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Record type"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });
  // Tax type
  it("should select valid value from dropdown Relationship Name", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('[placeholder="Select Tax type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "SSN").click();
    // Verify the selected value
    cy.get('[placeholder="Select Tax type"]').should("have.value", "SSN");
  });

  // Tax type
  it("should search and select value from dropdown Tax type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Select Tax type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Tax type"]').type("SSN");
    cy.contains(".MuiAutocomplete-option", "SSN").should("exist");
    cy.contains(".MuiAutocomplete-option", "SSN").click();
    cy.get('[placeholder="Select Tax type"]').should("have.value", "SSN");
  });

  // Tax type
  it("should handle invalid input gracefully from dropdown Tax type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
      
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Select Tax type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Tax type"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });
  it("should handle invalid input gracefully from dropdown Salutation", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information",{timeout:20000}).should("be.visible").click();

    //Select record type Individual
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Salutation"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Salutation"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("should select valid value from dropdown Salutation ", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();
    // Record type
    cy.get('[placeholder="Record type"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('[placeholder="Salutation"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Honorable").click();
    // Verify the selected value
    cy.get('[placeholder="Salutation"]').should("have.value", "Honorable");
  });

  it("should search and select value from dropdown Salutation", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();
    // Record type
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Salutation"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Salutation"]').type("Honorable");
    cy.contains(".MuiAutocomplete-option", "Honorable").should("exist");
    cy.contains(".MuiAutocomplete-option", "Honorable").click();
    cy.get('[placeholder="Salutation"]').should("have.value", "Honorable");
  });

  // job title

  it("should handle invalid input gracefully from dropdown Job Title", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    // Record type
    cy.get('[placeholder="Record type"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Job Title"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Job Title"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("should select valid value from dropdown Job Title ", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    // Record type
    cy.get('[placeholder="Record type"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('[placeholder="Job Title"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Associate Vice President"
    ).click();
    // Verify the selected value
    cy.get('[placeholder="Job Title"]').should(
      "have.value",
      "Associate Vice President"
    );
  });

  it("should search and select value from dropdown Job Title", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

    // Record type
    cy.get('[placeholder="Record type"]')
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Job Title"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Job Title"]').type("Associate Vice President");
    cy.contains(".MuiAutocomplete-option", "Associate Vice President").should(
      "exist"
    );
    cy.contains(".MuiAutocomplete-option", "Associate Vice President").click();
    cy.get('[placeholder="Job Title"]').should(
      "have.value",
      "Associate Vice President"
    );
    // Etity type

    it("should select valid value from dropdown Etity type ", () => {
     
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

      cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

      cy.get('[placeholder="Entity"]').click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.contains(
        "li.MuiAutocomplete-option",
        "C-Corp. - Privately held"
      ).click();
      // Verify the selected value
      cy.get('[placeholder="Entity"]').should(
        "have.value",
        "C-Corp. - Privately held"
      );
    });

    it("should search and select value from dropdown Entity type", () => {
     
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

      cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

      // Click the dropdown
      cy.get('[placeholder="Entity"]').click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Entity"]').type("C-Corp. - Privately held");
      cy.contains(".MuiAutocomplete-option", "C-Corp. - Privately held").should(
        "exist"
      );
      cy.contains(
        ".MuiAutocomplete-option",
        "C-Corp. - Privately held"
      ).click();
      cy.get('[placeholder="Entity"]').should(
        "have.value",
        "C-Corp. - Privately held"
      );
    });

    it("should handle invalid input gracefully from dropdown Etity type", () => {
      
      cy.intercept("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info").as("apiRequest");
      cy.visit("https://uat.cadnz.com/customer/account-details/800f1844-b532-4284-ae79-8f94cdd6dc92?tab=account_info");
      cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

      cy.get("#edit_customer_basic_information", {timeout:20000}).should("be.visible").click();

      // Click the dropdown
      cy.get('[placeholder="Entity"]').click();
      cy.get(".MuiAutocomplete-popper").should("be.visible");
      cy.get('[placeholder="Select Entity Type"]').type(randomCompany);
      cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
      cy.get(".MuiAutocomplete-popper").should("contain", "No options");
    });
  });
});
