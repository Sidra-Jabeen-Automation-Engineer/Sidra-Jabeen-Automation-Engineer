import {
  randomfirstName,
  randommiddleName,
  randomsuffix,
  randomlastName,
  randomfullName,
  randomEmail,
  randomNumber,
  randomCompany,
  randomaddress,
  randomFixNumber,
  randomURL,
} from "../Lib/fakedata";

describe("Add Business Customer", () => {
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
  
  it("Verify that Business Customer has added successfully with all mandatory and optional data", () => {

cy.intercept('https://uat.cadnz.com/home/dashboard').as("apiRequest");
  cy.visit('https://uat.cadnz.com/home/dashboard');
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get("#customer").click();
    cy.contains("Add New").click();
    cy.wait(6000);
    cy.get("body").click();

    cy.url().should("include", "/customers/add-new-customer");

    // Search Customer
    cy.get('[placeholder="Enter Company Name"]').should("be.visible").type(randomCompany);
   
    cy.get(".custom_button").click().wait(4000);
    cy.get(".custom_button").click().wait(5000);

    // Relationship Manager

    const optionIndex1 = 2; // Change this to the index you want
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).should('be.visible')
      .click()
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex1).click();

    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Company name
    cy.get('[name="company_legal_name"]').type(randomCompany);

    // Entity type
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "C-Corp. - Privately held"
    ).click();

    // Fiscal year end
    cy.get('[placeholder="Fiscal Year End"]').click();
    cy.get(".rdtPrev").should("be.visible");
    cy.get('[data-value="16"]').click();

    // Customer Type
    cy.get('[placeholder="Select Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "C1").click();

    // Enter CIF
    cy.get('[placeholder="CIF"]').type(randomFixNumber);

    // Relationship Name
    const optionIndex2 = 2; // Change this to the index you want
    cy.get('[placeholder="Relationship Name"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex2).click();

    // Enter Tax ID
    cy.get('[placeholder="Tax ID"]').type(randomNumber);

    //Source
    cy.get('[placeholder="Source"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "RM - Calling").click();

    // Add number of workers
    cy.get('[placeholder="Select Number Of Workers"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Firms with no workers").click();

    // Time in Business
    cy.get('[placeholder="Select Time In Business"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Less than 2 years").click();

    // Ownershipp status

    cy.get('[placeholder="Select Ownership Statuses"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Women -owned business").click();

    // Gross Annual Review
    cy.get('[name="annual_gross_revenue"]').type(randomNumber);

    // Select Govt agency
    cy.get('input[name="is_govt_agency"]').check({ force: true });
    cy.get('[placeholder="Select Agency Type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Finance Authority of Maine"
    ).click();

    cy.get("[placeholder='Enter Email']").type(randomEmail);

    // Number
    cy.get('[placeholder="1 (702) 123-4567"]').type(randomNumber);

    //Select contact Type
    cy.get('[placeholder="Select Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business Main").click();

    //  Address
    cy.get("textarea#customer_address_box").type(randomaddress);

    // NAICS Informaton

    const optionIndex3 = 2; // Change this to the index you want
    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex3).click();

    //Borrower Risk Rating
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Exceptional (10)")
      .click()
      ;

    // Submit
    cy.get('[type="submit"]',{timeout:10000}).click();

    cy.url().should(
      "include",
      "https://uat.cadnz.com/customer/account-details/"
    );
  });

  it("should display a message and highlights to fill mandatory fields if they are left empty", () => {

    cy.intercept('https://uat.cadnz.com/home/dashboard').as("apiRequest");
  cy.visit('https://uat.cadnz.com/home/dashboard');
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Navigate to the Customer section in the left pane
    cy.get("#customer").click();
    cy.contains("Add New").click();
    cy.wait(6000);
    cy.get("body").click();

    cy.url().should("include", "/customers/add-new-customer");

    // Search Customer
    cy.get('[placeholder="Enter Company Name"]').should("be.visible").type(randomCompany);
   
    cy.get(".custom_button").click().wait(4000);
    cy.get(".custom_button").click();

    cy.get('[type="submit"]').should('be.visible').click();
    // Customer type visibility
    cy.get('[placeholder="Select Customer Type"]')
      .parent() // or the appropriate container
      .should("be.visible");
    //source visibility
    cy.get('[placeholder="Source"]').parent().should("be.visible");
    
    // Phone Number visibility
    cy.get('[placeholder="1 (702) 123-4567"]').should("be.visible");
    // NAICS description visibility
    cy.get('[placeholder="NAICS Description"]').parent().should("be.visible");

    // Relationship Manager visibility
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000})
      .parent()
      .should("be.visible");

    // Submit
    cy.get('[type="submit"]', {timeout:10000}).click();

    cy.url().should("eq", "https://uat.cadnz.com/customer/add-new-customer");
  });

  it("Verify that Business customer should not create with existing Email", () => {
    
    cy.intercept('https://uat.cadnz.com/home/dashboard').as("apiRequest");
    cy.visit('https://uat.cadnz.com/home/dashboard');
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Navigate to the Customer section in the left pane
    cy.get("#customer").click();
    cy.contains("Add New").click();
    cy.wait(6000);
    cy.get("body").click();

    cy.url().should("include", "/customers/add-new-customer");

    // Search Customer
    cy.get('[placeholder="Enter Company Name"]').should("be.visible").type(randomCompany);
   
    cy.get(".custom_button").click().wait(4000);
    cy.get(".custom_button").click();

       // Relationship Manager
       const optionIndex1 = 2; // Change this to the index you want
       cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000})
         .click()
         ;
       cy.get(".MuiAutocomplete-popper").should("be.visible");
       cy.get("li.MuiAutocomplete-option").eq(optionIndex1).click();

    // Entity
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "C-Corp. - Privately held"
    ).click();

    // State of Incorporation
    cy.get('[placeholder="State Of Incorporation"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Delaware").click();

    // Fiscal year end
    cy.get('[placeholder="Fiscal Year End"]').click();
    cy.get(".rdtPrev").should("be.visible");
    cy.get('[data-value="16"]').click();

    //Company name
    cy.get("[name='company_legal_name']").clear().type(randomCompany);

    // Customer Type
    cy.get('[placeholder="Select Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "C1").click();

  
    // Relationship Name
    const optionIndex2 = 2; // Change this to the index you want
    cy.get('[placeholder="Relationship Name"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex2).click();

    //Source
    cy.get('[placeholder="Source"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "RM - Calling").click();

    // Enter Email
    cy.get("[placeholder='Enter Email']").clear().type("sidra@wistech.biz");

    // State of Type
    cy.get('[placeholder="Select Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business Contact").click();

    // Number
    cy.get('[placeholder="1 (702) 123-4567"]').type(randomNumber);

    //  Address
    cy.get("textarea#customer_address_box").type(randomaddress);

    // NAICS Informaton
    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Coal and ore conveyors manufacturing - 333922"
    ).click();

    // Submit
    cy.get('[type="submit"]',{timeout:10000}).click();

    cy.url().should("eq", "https://dev.cadnz.com/customer/add-new-customer");
  });

  it("Verify that Business customer does not create with Invalid Email", () => {

    cy.intercept('https://uat.cadnz.com/home/dashboard').as("apiRequest");
    cy.visit('https://uat.cadnz.com/home/dashboard');
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Navigate to the Customer section in the left pane
    cy.get("#customer").click();
    cy.contains("Add New").click();
    cy.wait(6000);
    cy.get("body").click();

    cy.url().should("include", "/customers/add-new-customer");

    // Search Customer
    cy.get('[placeholder="Enter Company Name"]').should("be.visible").type(randomCompany);
   
    cy.get(".custom_button").click().wait(4000);
    cy.get(".custom_button").click();

    // Relationship Manager
        const optionIndex1 = 2; // Change this to the index you want
        cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).should("be.visible")
          .click();
        cy.get(".MuiAutocomplete-popper").should("be.visible");
        cy.get("li.MuiAutocomplete-option").eq(optionIndex1).click();

    // Entity
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "C-Corp. - Privately held"
    ).click();

    // State of Incorporation
    cy.get('[placeholder="State Of Incorporation"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Delaware").click();

    // Fiscal year end
    cy.get('[placeholder="Fiscal Year End"]').click();
    cy.get(".rdtPrev").should("be.visible");
    cy.get('[data-value="16"]').click();

    //Company name
    cy.get("[name='company_legal_name']").clear().type(randomCompany);

    // Customer Type
    cy.get('[placeholder="Select Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "C1").click();

 // Relationship Name
 const optionIndex2 = 2; // Change this to the index you want
 cy.get('[placeholder="Relationship Name"]').click();
 cy.get(".MuiAutocomplete-popper").should("be.visible");
 cy.get("li.MuiAutocomplete-option").eq(optionIndex2).click();

    //Source
    cy.get('[placeholder="Source"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "RM - Calling").click();

    // Enter Email
    cy.get("[placeholder='Enter Email']").clear().type('Invalid Email');

    // State of Type
    cy.get('[placeholder="Select Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business Contact").click();

    // Number
    cy.get('[placeholder="1 (702) 123-4567"]').type(randomNumber);

    //  Address
    cy.get("textarea#customer_address_box").type(randomaddress);

    // NAICS Informaton
    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Coal and ore conveyors manufacturing - 333922"
    ).click();

    // Submit
    cy.get('[type="submit"]',{timeout:10000}).click();

    cy.url().should("eq", "https://dev.cadnz.com/customer/add-new-customer");
  });

  it("should select valid value from from Relationship Manager dropdown", () => {

    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Relationship Manager

    const optionIndex4 = 2; // Change this to the index you want
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).should('be.visible')
      .click()
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex4).click();
  });

  it("should search and select value from Relationship Manager dropdown", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).type(" Sher Letch");
    cy.contains(".MuiAutocomplete-option", "Sher Letch").should("exist");
    cy.contains(".MuiAutocomplete-option", "Sher Letch").click();
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).should(
      "have.value",
      " Sher Letch"
    );
  });

  it("should handle invalid input gracefully from Relationship Manager dropdown", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });
  // Record type

  it("should select valid value from dropdown Record type", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();
    // Verify the selected value
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("have.value", "Business");
  });

  it("should search and select value from dropdown Record type", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Record Type"]', {timeout:10000}).type("Business");
    cy.contains(".MuiAutocomplete-option", "Business").should("exist");
    cy.contains(".MuiAutocomplete-option", "Business").click();
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("have.value", "Business");
  });

  it("should handle invalid input gracefully  from dropdown Record type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Click the dropdown
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Record Type"]', {timeout:10000}).type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Etity type

  it("should select valid value from dropdown Etity type ", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "C-Corp. - Privately held"
    ).click();
    // Verify the selected value
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should(
      "have.value",
      "C-Corp. - Privately held"
    );
  });

  it("should search and select value from dropdown Entity type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).type(
      "C-Corp. - Privately held"
    );
    cy.contains(".MuiAutocomplete-option", "C-Corp. - Privately held").should(
      "exist"
    );
    cy.contains(".MuiAutocomplete-option", "C-Corp. - Privately held").click();
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should(
      "have.value",
      "C-Corp. - Privately held"
    );
  });

  it("should handle invalid input gracefully from dropdown Etity type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // State of incorporation

  it("should select valid value from dropdown State of incorporation ", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();
    cy.wait(5000);
    cy.get('[placeholder="State Of Incorporation"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Delaware").click();
    // Verify the selected value
    cy.get('[placeholder="State Of Incorporation"]').should(
      "have.value",
      "Delaware"
    );
  });

  it("should search and select value from dropdown State of incorporation", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="State Of Incorporation"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="State Of Incorporation"]').type("Delaware");
    cy.contains(".MuiAutocomplete-option", "Delaware").should("exist");
    cy.contains(".MuiAutocomplete-option", "Delaware").click();
    cy.get('[placeholder="State Of Incorporation"]').should(
      "have.value",
      "Delaware"
    );
  });

  it("should handle invalid input gracefully from dropdown State of incorporation", () => {

    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper", {timeout:6000}).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="State Of Incorporation"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="State Of Incorporation"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("should select valid value from dropdown of Customer type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Customer Type
    cy.get('[placeholder="Select Customer Type"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "C1").click();
    // Verify the selected value
    cy.get('[placeholder="Select Customer Type"]').should(
      "have.value",
      "C1 (Meets ROE hurdle)"
    );
  });

  it("should search and select value from dropdown of Customer type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Customer Type"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Customer Type"]').type("C2");
    cy.contains(".MuiAutocomplete-option", "C2").should("exist");
    cy.contains(".MuiAutocomplete-option", "C2").click();
    cy.get('[placeholder="Select Customer Type"]').should(
      "have.value",
      "C2 (Can grow to meet ROE hurdle)"
    );
  });

  it("should handle invalid input gracefully from dropdown of Customer type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Customer Type"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Customer Type"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("should select valid value from dropdown Relationship name", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Relationship Name"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Korlat Group").click();
    // Verify the selected value
    cy.get('[placeholder="Relationship Name"]').should(
      "have.value",
      "Korlat Group"
    );
  });
  //Relationship Name

  it("should search and select value from dropdown Relationship name", () => {
    
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Relationship Name"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Relationship Name"]').type("Georgiev Paler");
    cy.contains(".MuiAutocomplete-option", "Georgiev Paler").should("exist");
    cy.contains(".MuiAutocomplete-option", "Georgiev Paler").click();
    cy.get('[placeholder="Relationship Name"]').should(
      "have.value",
      "Georgiev Paler"
    );
  });

  it("should handle invalid input gracefully from dropdown Relationship name", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Relationship Name"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Relationship Name"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });
  // Tax type
  it("should select valid value from dropdown Relationship Name", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Select Tax Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "SSN").click();
    // Verify the selected value
    cy.get('[placeholder="Select Tax Type"]').should("have.value", "SSN");
  });

  // Tax type
  it("should search and select value from dropdown Tax type", () => {
   
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Tax Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Tax Type"]').type("SSN");
    cy.contains(".MuiAutocomplete-option", "SSN").should("exist");
    cy.contains(".MuiAutocomplete-option", "SSN").click();
    cy.get('[placeholder="Select Tax Type"]').should("have.value", "SSN");
  });

  // Tax type
  it("should handle invalid input gracefully from dropdown Tax type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Tax Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Tax Type"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Source

  it("should select valid value from dropdown Source", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Source"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "RM - Calling").click();
    // Verify the selected value
    cy.get('[placeholder="Source"]').should("have.value", "RM - Calling");
  });

  it("should search and select value from dropdown Source", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Source"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Source"]').type("RM - Calling");
    cy.contains(".MuiAutocomplete-option", "RM - Calling").should("exist");
    cy.contains(".MuiAutocomplete-option", "RM - Calling").click();
    cy.get('[placeholder="Source"]').should("have.value", "RM - Calling");
  });

  it("should handle invalid input gracefully from dropdown Source", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Source"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Source"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Number of workers
  it("should select valid value from dropdown Number of workers", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    cy.get('[placeholder="Select Number Of Workers"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Code-1 Firms with no workers"
    ).click();
    // Verify the selected value
    cy.get('[placeholder="Select Number Of Workers"]').should(
      "have.value",
      "Code-1 Firms with no workers"
    );
  });

  it("should search and select value Number of workers", () => {

    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="Select Number Of Workers"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Number Of Workers"]').type(
      "Code-1 Firms with no workers"
    );
    cy.contains(
      ".MuiAutocomplete-option",
      "Code-1 Firms with no workers"
    ).should("exist");
    cy.contains(
      ".MuiAutocomplete-option",
      "Code-1 Firms with no workers"
    ).click();
    cy.get('[placeholder="Select Number Of Workers"]').should(
      "have.value",
      "Code-1 Firms with no workers"
    );
  });

  it("should handle invalid input gracefully Number of workers", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();
    // Click the dropdown
    cy.get('[placeholder="Select Number Of Workers"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Number Of Workers"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Time in business
  it("should select valid value from dropdown Time in business", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Record Type"]', {timeout:10000}, {timeout:10000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    cy.get('[placeholder="Select Time In Business"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Less than 2 years").click();
    // Verify the selected value
    cy.get('[placeholder="Select Time In Business"]').should(
      "have.value",
      "Less than 2 years"
    );
  });

  it("should search and select value from dropdown Time in business", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Record Type"]', {timeout:10000}, {timeout:10000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="Select Time In Business"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Time In Business"]').type("Less than 2 years");
    cy.contains(".MuiAutocomplete-option", "Less than 2 years").should("exist");
    cy.contains(".MuiAutocomplete-option", "Less than 2 years").click();
    cy.get('[placeholder="Select Time In Business"]').should(
      "have.value",
      "Less than 2 years"
    );
  });

  it("should handle invalid input gracefully from dropdown Time in business", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="Select Time In Business"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Time In Business"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });
  // Ownership statses

  it("should select valid value from dropdown Ownership statuses", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    cy.get('[placeholder="Select Ownership Statuses"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Code 2 - Women -owned business"
    ).click();
    // Verify the selected value
    cy.get('[placeholder="Select Ownership Statuses"]').should(
      "have.value",
      "Code 2 - Women -owned business"
    );
  });

  it("should search and select value from dropdown Ownership statuses", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="Select Ownership Statuses"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Ownership Statuses"]').type(
      "Code 2 - Women -owned business"
    );
    cy.contains(
      ".MuiAutocomplete-option",
      "Code 2 - Women -owned business"
    ).should("exist");
    cy.contains(
      ".MuiAutocomplete-option",
      "Code 2 - Women -owned business"
    ).click();
    cy.get('[placeholder="Select Ownership Statuses"]').should(
      "have.value",
      "Code 2 - Women -owned business"
    );
  });

  it("should handle invalid input gracefully from dropdown Ownership statuses", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Click the dropdown
    cy.get('[placeholder="Select Ownership Statuses"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Ownership Statuses"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // contact type
  it("should select valid value from dropdown phone type ", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Select Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business Main").click();
    // Verify the selected value
    cy.get('[placeholder="Select Type"]').should("have.value", "Business Main");
  });

  it("should search and select value from dropdown phone type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Type"]').type("Business Main");
    cy.contains(".MuiAutocomplete-option", "Business Main").should("exist");
    cy.contains(".MuiAutocomplete-option", "Business Main").click();
    cy.get('[placeholder="Select Type"]').should("have.value", "Business Main");
  });

  it("should handle invalid input gracefully from dropdown phone type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Type"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // NAICS Description
  it("should select valid value from dropdown NAICS Description ", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

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
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

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
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="NAICS Description"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Borrower risk rating
  it("should select valid value from dropdown Borrower risk rating", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Exceptional (10)").click();
    // Verify the selected value
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).should(
      "have.value",
      "Exceptional (10)"
    );
  });

  it("should search and select value from dropdown Borrower risk rating", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000},{timeout:10000}).type("Exceptional (10)");
    cy.contains(".MuiAutocomplete-option", "Exceptional (10)").should("exist");
    cy.contains(".MuiAutocomplete-option", "Exceptional (10)").click();
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).should(
      "have.value",
      "Exceptional (10)"
    );
  });

  it("should handle invalid input gracefully from dropdown Borrower risk rating", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Automate checkbox Govt agency

  it("should check if checkbox Govt agency is visible and enabled", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Select Govt agency
    cy.get('input[name="is_govt_agency"]').should("not.be.disabled");
  });

  it("should check and uncheck the checkbox", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    cy.get('input[name="is_govt_agency"]') // Replace with the actual checkbox selector
      .check({ force: true })
      .should("be.checked");

    cy.get('input[name="is_govt_agency"]') // Replace with the actual checkbox selector
      .uncheck({ force: true })
      .should("not.be.checked");
  });

  it("should verify the initial state of the checkbox", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    cy.get('input[name="is_govt_agency"]').should("not.be.checked"); // Assuming initial state is unchecked
  });

  // Automate checkbox IS COI

  it("should check if checkbox Govt agency is visible and enabled", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Select Govt agency
    cy.get('input[name="is_coi"]').should("not.be.disabled");
  });

  it("should check and uncheck the checkbox", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    cy.get('input[name="is_coi"]') // Replace with the actual checkbox selector
      .check({ force: true })
      .should("be.checked");

    cy.get('input[name="is_coi"]') // Replace with the actual checkbox selector
      .uncheck({ force: true })
      .should("not.be.checked");
  });

  it("should verify the initial state of the checkbox", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    cy.get('input[name="is_coi"]').should("not.be.checked"); // Assuming initial state is unchecked
  });
});

describe("Add Individual Customer", () => {
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
  // Let's  create individual customer
  it("Verify that Individual customer has created successfully with all mandatory and non mandatory data", () => {
   
    cy.intercept('https://uat.cadnz.com/home/dashboard').as("apiRequest");
  cy.visit('https://uat.cadnz.com/home/dashboard');
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.url().should("include", "/home/dashboard");
    cy.wait(7000);

    // Navigate to the Customer section in the left pane
    cy.get("#customer").click();
    cy.contains("Add New").should("be.visible").click();
    cy.wait(6000);
    cy.get("body").click();

    cy.url().should("include", "/customers/add-new-customer");

    // Search Customer
    cy.get('[placeholder="Enter Company Name"]').should("be.visible").type(randomCompany);
   
    cy.get(".custom_button").click().wait(4000);
    cy.get(".custom_button").click();

    // Relationship Manager
    const optionIndex1 = 2; // Change this to the index you want
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).should('be.visible')
      .click()
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex1).click();

    //Select record type Individual
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    //Select Salutation
    cy.get('[placeholder="Salutation"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Mr").click();

    // Enter First Name, middle name, last name and suffix
    cy.get('[name="first_name"]').type(randomfirstName);
    cy.get('[name="middle_name"]').type(randommiddleName);
    cy.get('[name="last_name"]').type(randomlastName);
    cy.get('[placeholder="Suffix"]').type(randomsuffix);

    // Legal Notice
    cy.get('label.checkbox__style input[name="legal_notice"]').check({
      force: true,
    });
    // Check use last name in correspondence
    cy.get(
      'label.checkbox__style input[name="use_last_name_in_correspondence"]'
    ).check({ force: true });

    // Enter DBA
    cy.get('input[name="dba"].custom-input').check({ force: true });
    cy.wait(5000);
    cy.get('[placeholder=" Enter DBA Name"]').type(randomCompany);

    // Select Entity type
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "C-Corp. - Privately held"
    ).click();

    // Employer name
    cy.get('[name="employer_name"]').type(randomfullName);

    // Job title
    cy.get('[placeholder="Select Job Title"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Associate Vice President"
    ).click();

    // Fiscal year end
    cy.get('[placeholder="Fiscal Year End"]').click();
    cy.get(".rdtPrev").should("be.visible");
    cy.get('[data-value="16"]').click();

    // Customer Type
    cy.get('[placeholder="Select Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "C1").click();

    // Enter CIF
    cy.get('[placeholder="CIF"]').type(randomFixNumber);

    // Relationship Name
    const optionIndex2 = 2; // Change this to the index you want
    cy.get('[placeholder="Relationship Name"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex2).click();

    // Enter Tax ID
    cy.get('[placeholder="Select Tax Type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "TIN/EIN").click();

    // Enter Tax ID
    cy.get('[placeholder="Tax ID"]').type(randomNumber);

    //Source
    cy.get('[placeholder="Source"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "RM - Calling").click();

    // Is employee of the bank
    cy.get('input[name="is_employee"].custom-input').check({ force: true });
    // Is insider
    // cy.get('input[name="is_insider"].custom-input').check({force: true});

    // Select Gender
    cy.get('[placeholder="Select Gender"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Female").click();

    /* Owner Ethinicities 
cy.get('[placeholder="Select Owner Ethnicity"]').click();
cy.get('.MuiAutocomplete-popper').should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Puerto Rican').click().click(); 


// Owner Race
cy.get('[placeholder="Select Owner Race"]').click();
cy.get('.MuiAutocomplete-popper').should('be.visible');
cy.contains('li.MuiAutocomplete-option', 'Asian Indian').click().click();
*/

    // Enter Email

    cy.get('[placeholder="Enter Email"]').type(randomEmail);

    // Number
    cy.get('[placeholder="1 (702) 123-4567"]').type(randomNumber);

    //Select Contact
    cy.get('[placeholder="Select Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business Main").click();

    //  Address
    cy.get("textarea#customer_address_box").type(randomaddress);

    // NAICS Informaton
    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Mustard seed farming, field and seed production - 111120"
    ).click();

    //Borrower Risk Rating
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Exceptional (10)")
      .click()
      ;

    // Submit
    cy.get('[type="submit"]').should('be.visible').click();

    cy.url().should(
      "include",
      "https://uat.cadnz.com/customer/account-details/"
    );
  });

  it("Verify that Individual customer has created successfully with mandatory data", () => {
    cy.visit('https://uat.cadnz.com/home/dashboard');
cy.wait(8000);
    // Navigate to the Customer section in the left pane
    cy.get("#customer").click();
    cy.contains("Add New").should("be.visible").click();
    cy.wait(6000);
    cy.get("body").click();

    cy.url().should("include", "/customers/add-new-customer");

    // Search Customer
    cy.get('[placeholder="Enter Company Name"]').should("be.visible").type(randomCompany);
   
    cy.get(".custom_button").click().wait(4000);
    cy.get(".custom_button").click();

    // Relationship Manager

    const optionIndex1 = 2; // Change this to the index you want
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).should('be.visible')
      .click()
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex1).click();

    //Select record type Individual
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should('be.visible').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    //Select Salutation
    cy.get('[placeholder="Salutation"]').should('be.visible').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Ms").click();

    // Enter First Name, middle name, last name and suffix
    cy.get('[name="first_name"]').type("Sidra");
    cy.get('[name="last_name"]').type("Rana");

    // Customer Type
    cy.get('[placeholder="Select Customer Type"]').should('be.visible').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "C1").click();

    //Source
    cy.get('[placeholder="Source"]').should('be.visible').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "RM - Calling").click();

    // Type the generated email into the email input field
    cy.get("[placeholder='Enter Email']").type(randomEmail);

    // Number
    cy.get('[placeholder="1 (702) 123-4567"]').type(randomNumber);

    //Select Contact
    cy.get('[placeholder="Select Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business Contact").click();

    //  Address
    cy.get("textarea#customer_address_box").type(randomaddress);

    // NAICS Informaton
    cy.get('[placeholder="NAICS Description"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Coal and ore conveyors manufacturing - 333922"
    ).click();

    // Submit
    cy.get('[type="submit"]').should('be.visible').click();

    cy.url().should(
      "include",
      "https://dev.cadnz.com/customer/account-details/"
    );
  });


  it("should select valid value from from Relationship Manager dropdown", () => {
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");

    cy.url().should("include", "/customer/add-new-customer");
    cy.wait(7000);

    // Relationship Manager

    const optionIndex4 = 2; // Change this to the index you want
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).should('be.visible')
      .click()
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get("li.MuiAutocomplete-option").eq(optionIndex4).click();
  });

  it("should search and select value from Relationship Manager dropdown", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).type(" Sher Letch");
    cy.contains(".MuiAutocomplete-option", "Sher Letch").should("exist");
    cy.contains(".MuiAutocomplete-option", "Sher Letch").click();
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).should(
      "have.value",
      " Sher Letch"
    );
  });

  it("should handle invalid input gracefully from Relationship Manager dropdown", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Relationship Manager"]', {timeout:10000}).type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Record type

  it("should select valid value from dropdown Record type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();
    // Verify the selected value
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("have.value", "Individual");
  });

  it("should search and select value from dropdown Record type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Record Type"]', {timeout:10000}).type("Individual");
    cy.contains(".MuiAutocomplete-option", "Individual").should("exist");
    cy.contains(".MuiAutocomplete-option", "Individual").click();
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("have.value", "Individual");
  });

  it("should handle invalid input gracefully  from dropdown Record type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Record Type"]', {timeout:10000}).type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Etity type

  it("should select valid value from dropdown Etity type ", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "C-Corp. - Privately held"
    ).click();
    // Verify the selected value
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should(
      "have.value",
      "C-Corp. - Privately held"
    );
  });

  it("should search and select value from dropdown Entity type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).type(
      "C-Corp. - Privately held"
    );
    cy.contains(".MuiAutocomplete-option", "C-Corp. - Privately held").should(
      "exist"
    );
    cy.contains(".MuiAutocomplete-option", "C-Corp. - Privately held").click();
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should(
      "have.value",
      "C-Corp. - Privately held"
    );
  });

  it("should handle invalid input gracefully from dropdown Etity type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Entity Type"]', {timeout:10000}).type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Salutation

  it("should handle invalid input gracefully from dropdown Salutation", () => {
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait(7000);

    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
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
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait(7000);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('[placeholder="Salutation"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Honorable").click();
    // Verify the selected value
    cy.get('[placeholder="Salutation"]').should("have.value", "Honorable");
  });

  it("should search and select value from dropdown Salutation", () => {
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait(7000);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000})
      .should("be.visible")
      .click()
      ;
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
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait(7000);

    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Select Job Title"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Job Title"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("should select valid value from dropdown Job Title ", () => {
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait(7000);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('[placeholder="Select Job Title"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains(
      "li.MuiAutocomplete-option",
      "Associate Vice President"
    ).click();
    // Verify the selected value
    cy.get('[placeholder="Select Job Title"]').should(
      "have.value",
      "Associate Vice President"
    );
  });

  it("should search and select value from dropdown Job Title", () => {
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait(7000);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000})
      .should("be.visible")
      .click()
      ;
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Select Job Title"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Job Title"]').type("Associate Vice President");
    cy.contains(".MuiAutocomplete-option", "Associate Vice President").should(
      "exist"
    );
    cy.contains(".MuiAutocomplete-option", "Associate Vice President").click();
    cy.get('[placeholder="Select Job Title"]').should(
      "have.value",
      "Associate Vice President"
    );
  });

  // Customer type
  it("should select valid value from dropdown of Customer type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Customer Type
    cy.get('[placeholder="Select Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "C1").click();
    // Verify the selected value
    cy.get('[placeholder="Select Customer Type"]').should(
      "have.value",
      "C1 (Meets ROE hurdle)"
    );
  });

  it("should search and select value from dropdown of Customer type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Customer Type"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Customer Type"]').type("C2");
    cy.contains(".MuiAutocomplete-option", "C2").should("exist");
    cy.contains(".MuiAutocomplete-option", "C2").click();
    cy.get('[placeholder="Select Customer Type"]').should(
      "have.value",
      "C2 (Can grow to meet ROE hurdle)"
    );
  });

  it("should handle invalid input gracefully from dropdown of Customer type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Customer Type"]').should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Customer Type"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Gender

  it("should handle invalid input gracefully from dropdown Gender", () => {
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait(7000);

    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Select Gender"]')
      .should("be.visible")
      .click()
      ;
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Gender"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  it("should select valid value from dropdown Gender ", () => {
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait(7000);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('[placeholder="Select Gender"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Female").click();
    // Verify the selected value
    cy.get('[placeholder="Select Gender"]').should("have.value", "Female");
  });

  it("should search and select value from dropdown Gender", () => {
    cy.visit("https://uat.cadnz.com/customer/add-new-customer");
    cy.wait(7000);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000})
      .should("be.visible")
      .click()
      ;
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Click the dropdown
    cy.get('[placeholder="Select Gender"]').click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Gender"]').type("Female");
    cy.contains(".MuiAutocomplete-option", "Female").should("exist");
    cy.contains(".MuiAutocomplete-option", "Female").click();
    cy.get('[placeholder="Select Gender"]').should("have.value", "Female");
  });

  // Relationship Name

  it("should select valid value from dropdown Relationship name", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Relationship Name"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Korlat Group").click();
    // Verify the selected value
    cy.get('[placeholder="Relationship Name"]').should(
      "have.value",
      "Korlat Group"
    );
  });
  //Relationship Name

  it("should search and select value from dropdown Relationship name", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Relationship Name"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Relationship Name"]').type("Georgiev Paler");
    cy.contains(".MuiAutocomplete-option", "Georgiev Paler").should("exist");
    cy.contains(".MuiAutocomplete-option", "Georgiev Paler").click();
    cy.get('[placeholder="Relationship Name"]').should(
      "have.value",
      "Georgiev Paler"
    );
  });

  it("should handle invalid input gracefully from dropdown Relationship name", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Relationship Name"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Relationship Name"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Tax type
  it("should select valid value from dropdown Relationship Name", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Select Tax Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "TIN/EIN").click();
    // Verify the selected value
    cy.get('[placeholder="Select Tax Type"]').should("have.value", "TIN/EIN");
  });

  // Tax type
  it("should search and select value from dropdown Tax type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Tax Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Tax Type"]').type("TIN/EIN");
    cy.contains(".MuiAutocomplete-option", "TIN/EIN").should("exist");
    cy.contains(".MuiAutocomplete-option", "TIN/EIN").click();
    cy.get('[placeholder="Select Tax Type"]').should("have.value", "TIN/EIN");
  });

  // Tax type
  it("should handle invalid input gracefully from dropdown Tax type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Tax Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Tax Type"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Source

  it("should select valid value from dropdown Source", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Source"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "RM - Calling").click();
    // Verify the selected value
    cy.get('[placeholder="Source"]').should("have.value", "RM - Calling");
  });

  it("should search and select value from dropdown Source", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Source"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Source"]').type("RM - Calling");
    cy.contains(".MuiAutocomplete-option", "RM - Calling").should("exist");
    cy.contains(".MuiAutocomplete-option", "RM - Calling").click();
    cy.get('[placeholder="Source"]').should("have.value", "RM - Calling");
  });

  it("should handle invalid input gracefully from dropdown Source", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Source"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Source"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // contact type
  it("should select valid value from dropdown phone type ", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Select Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business Main").click();
    // Verify the selected value
    cy.get('[placeholder="Select Type"]').should("have.value", "Business Main");
  });

  it("should search and select value from dropdown phone type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Type"]').type("Business Main");
    cy.contains(".MuiAutocomplete-option", "Business Main").should("exist");
    cy.contains(".MuiAutocomplete-option", "Business Main").click();
    cy.get('[placeholder="Select Type"]').should("have.value", "Business Main");
  });

  it("should handle invalid input gracefully from dropdown phone type", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Select Type"]').should("be.visible").should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Select Type"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // NAICS Description
  it("should select valid value from dropdown NAICS Description ", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="NAICS Description"]', {timeout:10000}).should("be.visible").click();
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
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="NAICS Description"]', {timeout:10000}).should("be.visible").click();
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
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="NAICS Description"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="NAICS Description"]').type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Borrower risk rating
  it("should select valid value from dropdown Borrower risk rating", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Exceptional (10)").click();
    // Verify the selected value
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).should(
      "have.value",
      "Exceptional (10)"
    );
  });

  it("should search and select value from dropdown Borrower risk rating", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).type("Exceptional (10)");
    cy.contains(".MuiAutocomplete-option", "Exceptional (10)").should("exist");
    cy.contains(".MuiAutocomplete-option", "Exceptional (10)").click();
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).should(
      "have.value",
      "Exceptional (10)"
    );
  });

  it("should handle invalid input gracefully from dropdown Borrower risk rating", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);

    // Click the dropdown
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.get('[placeholder="Borrower Risk Rating"]',{timeout:10000}).type(randomCompany);
    cy.contains(".MuiAutocomplete-option", randomCompany).should("not.exist");
    cy.get(".MuiAutocomplete-popper").should("contain", "No options");
  });

  // Automate checkbox Legal notice

  it("should check if checkbox legal notice is visible and enabled", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Select legal_notice
    cy.get('[name="legal_notice"]').should("not.be.disabled");
  });
  it("should check and uncheck the checkbox of legal_notice", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('input[name="legal_notice"]') // Replace with the actual checkbox selector
      .check({ force: true })
      .should("be.checked");

    cy.get('input[name="legal_notice"]') // Replace with the actual checkbox selector
      .uncheck({ force: true })
      .should("not.be.checked");
  });

  it("should verify the initial state of the checkbox legal_notice", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('input[name="legal_notice"]').should("not.be.checked"); // Assuming initial state is unchecked
  });

  // Automate checkbox Use last name in correspondence

  it("should check if checkbox last name in correspondence is visible and enabled", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    // Select Govt agency
    cy.get('[name="use_last_name_in_correspondence"]').should(
      "not.be.disabled"
    );
  });

  it("should check and uncheck the checkbox last name in correspondence", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('input[name="use_last_name_in_correspondence"]') // Replace with the actual checkbox selector
      .check({ force: true })
      .should("be.checked");

    cy.get('input[name="use_last_name_in_correspondence"]') // Replace with the actual checkbox selector
      .uncheck({ force: true })
      .should("not.be.checked");
  });

  it("should verify the initial state of the checkbox last name in correspondence", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('input[name="use_last_name_in_correspondence"]').should(
      "be.checked"
    ); // Assuming initial state is unchecked
  });

  // Automate checkbox Is COI

  it("should check if checkbox Is COI is visible and enabled", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Business").click();

    // Select Govt agency
    cy.get('input[name="is_coi"]').should("not.be.disabled");
  });

  it("should check and uncheck the checkbox Is COI", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('input[name="is_coi"]') // Replace with the actual checkbox selector
      .check({ force: true })
      .should("be.checked");

    cy.get('input[name="is_coi"]') // Replace with the actual checkbox selector
      .uncheck({ force: true })
      .should("not.be.checked");
  });

  it("should verify the initial state of the checkbox Is COI", () => {
    cy.intercept("https://uat.cadnz.com/customer/add-new-customer").as("apiRequest");
  cy.visit("https://uat.cadnz.com/customer/add-new-customer");
  cy.wait("@apiRequest").its("response.statusCode").should("eq", 200);
    // Record type
    cy.get('[placeholder="Record Type"]', {timeout:10000}).should("be.visible").click();
    cy.get(".MuiAutocomplete-popper").should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Individual").click();

    cy.get('input[name="is_coi"]').should("not.be.checked"); // Assuming initial state is unchecked
  });
});
