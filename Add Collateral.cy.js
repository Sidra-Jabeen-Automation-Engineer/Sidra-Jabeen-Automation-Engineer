import {
  randomDescription,
  randomThreeDigit,
  randomTwoDigit,
  randomFixNumber,
  randomMaxNumber,
  randomRangePrice,
} from "../Lib/fakedata";

describe("Add Collateral", () => {
  beforeEach(() => {
    // Visit dashboard before each test
    cy.viewport(1920, 1080);
    cy.login();
  });

  it.only("Verify that Collateral for Secureded does not add and system should give error", () => {
    cy.contains("Customer").click();
    cy.wait(10000);

    cy.get('[placeholder="Search here"]', { timeout: 10000 }).type(
      "test{enter}"
    );
    cy.get("#customer_view_3aaec484-b64f-4b4c-8c0d-a1f1132fd103", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
    cy.wait(15000);

    cy.get("#test-id-collateral_customer_detail_tab")
      .should("be.visible")
      .click();
    cy.get("#collateral-selections-add").click();
    cy.get(8000);
    // Select Roll Up
    cy.get('[placeholder="Select Roll up"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Secureded", { timeout: 8000 })
      .should("be.visible")
      .click();
    
      cy.get("#add-collateral-first-step").click();
      cy.contains('Rollup field is required');


    });

  it("Verify that Collateral for Secured added successfully", () => {
    cy.contains("Customer").click();
    cy.wait(10000);

    cy.get('[placeholder="Search here"]', { timeout: 10000 }).type(
      "test{enter}"
    );
    cy.get("#customer_view_3aaec484-b64f-4b4c-8c0d-a1f1132fd103", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
    cy.wait(15000);

    cy.get("#test-id-collateral_customer_detail_tab")
      .should("be.visible")
      .click();
    cy.get("#collateral-selections-add").click();

    // Select Roll Up
    cy.get('[placeholder="Select Roll up"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Unsecured", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Select BAC
    cy.get('[placeholder="Select BAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Unsecured", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Select NAC
    cy.get('[placeholder="Select NAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Unsecured Commercial", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    cy.get("#add-collateral-first-step").click();
    cy.wait(10000);
  });

  it("Verify that Collateral for Real estate added successfully", () => {
    /// Navigate to the Customer section in the left pane
    cy.contains("Customer").click();
    cy.wait(10000);

    cy.get('[placeholder="Search here"]', { timeout: 10000 }).type(
      "test{enter}"
    );
    cy.get("#customer_view_3aaec484-b64f-4b4c-8c0d-a1f1132fd103", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
    cy.wait(15000);

    cy.get("#test-id-collateral_customer_detail_tab")
      .should("be.visible")
      .click();
    cy.get("#collateral-selections-add").click();

    // Select Roll Up
    cy.get('[placeholder="Select Roll up"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Real Estate", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Select BAC
    cy.get('[placeholder="Select BAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Industrial/Manufacturing", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    // Select NAC
    cy.get('[placeholder="Select NAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Ind/Mfg. - OO", { timeout: 8000 })
      .should("be.visible")
      .click();

    cy.contains("Next").click();

    // Step 2
    // Add Description
    cy.get('[placeholder="Write description"]', { timeout: 3000 })
      .should("be.visible")
      .type(randomDescription)
      .click();

    // Security Positions
    cy.get('[placeholder="Select Security Position"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Jr. Mortgage to Others", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    // Enter Zip code
    cy.get('[placeholder="Zip Code"]', { timeout: 8000 })
      .should("be.visible")
      .type("23234");

    // Add Address
    cy.get('[placeholder="Enter Address"]', { timeout: 3000 })
      .should("be.visible")
      .type("123 Maple Street")
      .click();

    // Enter Area
    cy.get('[placeholder="Enter Area"]', { timeout: 3000 })
      .should("be.visible")
      .type("12000");
    // Area Type
    cy.get('[placeholder="Select area type"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Acres", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Property Status
    cy.get('[placeholder="Select property Status"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "New Construction", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    cy.get(
      "form > .MuiAccordionDetails-root > .mt-20 > .justify-end > .custom_button",
      { timeout: 19000 }
    ).click();

    //Step3
    cy.contains("Add Value", { timeout: 10000 }).click();

    // Add Description
    cy.get('[placeholder="Description"]', { timeout: 8000 }).type(
      randomDescription
    );

    // Add value source
    cy.get('[placeholder="Value Source"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Complete Appraisal", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    // Rights valued
    cy.get('[placeholder="Rights Valued"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Co-Operative", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Enter TLA Office
    cy.get('[placeholder="Enter TLA Office / Retail"]').type("1200");
    // Enter Residential units
    cy.get('[name="residential_units"]').type("1000");
    //cy.get('[placeholder="Enter FF&E Discount"]').should('include', 40);
    cy.get('[placeholder="Enter Purchase Price"]').type("20000");
    // Purchase price
    cy.get('[placeholder="Enter Purchase Price"]').type("12000");
    // Value type
    cy.get('[placeholder="Select Type"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 18000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Prospective - As Stabilized", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    // Select effective date

    cy.get('[placeholder="MM-DD-YYYY"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get('[data-timestamp="1716577200000"]').should("be.visible").click();

    //Enter land value
    cy.get('[name="land"]').type("5000");
    // Enter Real property
    cy.get('[name="real_property"]').type("200");
    // Enter FF&E
    cy.get('[name="ff_e"]').type("500");
    // Enter business value
    cy.get('[name="business_value"]').type("5000000");

    // Enter Review value
    cy.get('[name="reviewer_value"]').type("520");
    // Adjustment
    cy.get('[name="adjustments"]').type("250");
    // Adv.rate
    cy.get('[name="adv_rate"]').type("530");
    // less_prior_liens
    cy.get('[name="less_prior_liens"]').type("250");
    // submit form
    cy.get('[id="collateral-add-value-real-estate-modal-submit"]').click();
    cy.wait(10000);
    cy.get('[id="collateral-add-value-real-estate-modal-submit"]').click();
    cy.wait(10000);

    //Add Rent Roll
    cy.contains("Add Rent Roll", { timeout: 10000 }).click();
    cy.get(
      '[placeholder="Enter Vacancy And Collection And Loss (Residential)"]'
    ).type("40");
    cy.get(
      '[placeholder="Enter Vacancy And Collection And Loss (Office)"]'
    ).type("12");
    cy.get(
      '[placeholder="Enter Vacancy And Collection And Loss (Retail)"]'
    ).type("23");

    // Enter Tenant name or unit type
    cy.get('[name="ten_name_unit"]').type("test");

    //enter credit rating
    cy.get('[name="credit_rating"]').type("23");

    //Lease start date
    cy.get('[placeholder="MM-DD-YYYY"]', { timeout: 8000 })
      .first()
      .should("be.visible")
      .click();
    cy.get('[data-timestamp="1716663600000"]')
      .first()
      .should("be.visible")
      .click();

    //Lease Expiration
    cy.get('[placeholder="MM-DD-YYYY"]', { timeout: 8000 })
      .last()
      .should("be.visible")
      .click();
    cy.get('[data-timestamp="1716663600000"]')
      .last()
      .should("be.visible")
      .click();

    // Select Area type
    cy.get('[placeholder="Select Area Type"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Office", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Select lease type
    cy.get('[placeholder="Select Lease Type"]', { timeout: 8000 })
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Modified Gross", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    cy.contains("Submit").wait(8000).click();
    cy.contains("Submit").wait(8000).click();

    cy.wait(10000);
    // Add Environmental
    cy.contains("Add Environmental", { timeout: 10000 }).click();
    // Select As of date
    cy.get('[placeholder="Select Date..."]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get('[data-value="26"]').should("be.visible").click();
    // Reqquired Action
    cy.get('[name="req_actions"]').type("Test-Action");

    // Level of study
    cy.get('[placeholder="Select level of study"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 10000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Phase 2", { timeout: 8000 })
      .should("be.visible")
      .click();

    // submit form
    cy.contains("Submit", { timeout: 8000 }).click();

    cy.get('[id="collateral-thirdstep-add-update"]').click();

    cy.wait(10000);
  });

  

  it("Verify that Collateral for Deposit added successfully", () => {
    cy.contains("Customer").click();
    cy.wait(10000);

    cy.get('[placeholder="Search here"]', { timeout: 10000 }).type(
      "test{enter}"
    );
    cy.get("#customer_view_3aaec484-b64f-4b4c-8c0d-a1f1132fd103", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
    cy.wait(15000);

    cy.get("#test-id-collateral_customer_detail_tab")
      .should("be.visible")
      .click();
    cy.get("#collateral-selections-add").click();

    // Select Roll Up
    cy.get('[placeholder="Select Roll up"]', { timeout: 8000 })
      .should("be.visible")
      .click();
  
      // When U type Depost in wrong way it should not select the rollup
      cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Depositsssss", { timeout: 8000 })
      .should("be.visible")
      .click();
      
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Deposits", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Select BAC
    cy.get('[placeholder="Select BAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Deposit Accounts", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    // Select NAC
    cy.get('[placeholder="Select NAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Commercial DDA at the Bank", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    cy.contains("Next").click();

    // step2
    // Add desription
    cy.get('[placeholder="Write description"]', { timeout: 3000 })
      .should("be.visible")
      .type(randomDescription)
      .click();

    // Security Positions
    cy.get('[placeholder="Select Security Position"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Pledged - Hold", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    // Add Held at
    cy.get('[placeholder="Enter Held at"]').type("USA");

    // Have a negitive test casse where don't ill the ino and hit enter 
    // Script should have Error in dom and when now fuill the info the script should not find the info 

    cy.get("#collateral-secondstep-next", { timeout: 19000 }).click();
    cy.wait(10000);

    // step 3

    // Add value
    cy.contains("Add Value", { timeout: 8000 }).click();
    // select valuation date
    cy.get('[placeholder="Select Date..."]', { timeout: 8000 }).click();
    cy.get(':nth-child(6) > [data-value="30"]').should("be.visible").click();

    //Add description
    cy.get('[placeholder="Write Description"]').type(randomDescription);

    // select value source
    cy.get('[placeholder="Select Value Source"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Statement", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Add Account number
    cy.get('[placeholder="Enter Account #"]').type(randomFixNumber);

    // Add gross_value
    cy.get('[name="gross_value"]').type(randomTwoDigit);

    // Enter Less ineligibles
    cy.get('[name="ineligibles"]').type(randomTwoDigit);

    // Enter adv_rate

    cy.get('[name="adv_rate"]').type(randomTwoDigit);

    //Enter cap_limit name="cap_limit"
    cy.get('[name="cap_limit"]').type(randomTwoDigit);

    // Enter less_prior_liens
    cy.get('[name="less_prior_liens"]').type(randomThreeDigit);

    // Add comments
    cy.get('[placeholder="Write Comments"]').type(randomDescription);
    // Submit form
    cy.get("#collateral-add-value-deposit-modal-submit", {
      timeout: 8000,
    }).click();

    cy.get("#collateral-thirdstep-add-update", { timeout: 8000 }).click();

    cy.wait(10000);
  });

  it("Verify that Collateral for Securities & Equivalent added successfully", () => {
    cy.contains("Customer").click();
    cy.wait(10000);

    cy.get('[placeholder="Search here"]', { timeout: 10000 }).type(
      "test{enter}"
    );
    cy.get("#customer_view_3aaec484-b64f-4b4c-8c0d-a1f1132fd103", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
    cy.wait(15000);

    cy.get("#test-id-collateral_customer_detail_tab")
      .should("be.visible")
      .click();
    cy.get("#collateral-selections-add").click();

    // Select Roll Up
    cy.get('[placeholder="Select Roll up"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Securities & Equivalent", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    // Select BAC
    cy.get('[placeholder="Select BAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Stocks", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Select NAC
    cy.get('[placeholder="Select NAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Marketable Securities", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    cy.contains("Next").click();

    // Step 2
    // Add Description
    cy.get('[placeholder="Write description"]', { timeout: 3000 })
      .should("be.visible")
      .type(randomDescription)
      .click();

    // Security Positions
    cy.get('[placeholder="Select Security Position"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Pledged - Acknowledged", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    cy.get("#collateral-secondstep-next", { timeout: 19000 }).click();

    //Step3

    cy.contains("Add Value", { timeout: 10000 }).click();

    // Select date
    cy.get('[placeholder="Select Date..."]').click();
    cy.get(':nth-child(6) > [data-value="6"]').click();

    // Value Source
    cy.get('[placeholder="Select Value Source"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Stock Market", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Value Source
    cy.get('[placeholder="Select Availability is Formula Based"]', {
      timeout: 8000,
    })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Yes", { timeout: 8000 })
      .should("be.visible")
      .click();

    // cusip

    cy.get('[name="cusip"]').type(randomMaxNumber);

    // Symbol

    cy.get('[name="symbol"]').type("MM");

    // EXCHANGE

    cy.get('[placeholder="Select Exchange"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "NYSE", { timeout: 8000 })
      .should("be.visible")
      .click();

    // No of shares

    cy.get('[name="no_of_shares"]').type(randomRangePrice);

    //PRICE
    cy.get('[name="price"]').type(randomRangePrice);

    // Add gross_value
    cy.get('[name="gross_value"]').type(randomMaxNumber);

    // Enter Less ineligibles
    cy.get('[name="ineligibles"]').type(randomMaxNumber);

    // Enter adv_rate

    cy.get('[name="adv_rate"]').type(randomMaxNumber);

    //Enter cap_limit
    cy.get('[name="cap_limit"]').type(randomMaxNumber);

    //Enter prior liens
    cy.get('[name="less_prior_liens"]').type(randomMaxNumber);

    cy.get("#collateral-add-value-stocks-modal-submit").click();

    cy.contains("Submit").click();
  });

  it("Verify that Collateral for Blanket Lien working assetes added successfully", () => {
    cy.contains("Customer").click();
    cy.wait(10000);

    cy.get('[placeholder="Search here"]', { timeout: 10000 }).type(
      "test{enter}"
    );
    cy.get("#customer_view_3aaec484-b64f-4b4c-8c0d-a1f1132fd103", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
    cy.wait(15000);

    cy.get("#test-id-collateral_customer_detail_tab")
      .should("be.visible")
      .click();
    cy.get("#collateral-selections-add").click();

    // Select Roll Up
    cy.get('[placeholder="Select Roll up"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Working Assets", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    // Select BAC
    cy.get('[placeholder="Select BAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Blanket Lien", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Select NAC
    cy.get('[placeholder="Select NAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Blanket Lien on all assets", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    cy.contains("Next").click();

    // step2
    // Add desription
    cy.get('[placeholder="Write description"]', { timeout: 3000 })
      .should("be.visible")
      .type(randomDescription)
      .click();

    // Security Positions
    cy.get('[placeholder="Select Security Position"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "FSIAA - UCC", { timeout: 8000 })
      .should("be.visible")
      .click();

    cy.get("#collateral-secondstep-next").click();
    cy.wait(10000);

    // stepp 3
    // Add value
    cy.contains("Add Value", { timeout: 8000 }).click();

    //Select effective date
    cy.get('[placeholder="Select Date..."]', { timeout: 8000 }).click();
    cy.get('[data-value="18"]').should("be.visible").click();

    // select either  availability if formula based
    cy.get('[placeholder="Select Availability is Formula Based"]', {
      timeout: 8000,
    })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Yes", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Add description
    cy.get(":nth-child(3) > .capitalize")
      .first()
      .should("be.visible")
      .type(randomDescription);

    // Add value source
    cy.get('[name="source_id"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "FYE Financials", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    //select value type
    cy.get('[name="value_type_id"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 18000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "As Reported", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Add gross_value
    cy.get('[name="gross_value"]').type(randomThreeDigit);

    // Enter Less ineligibles
    cy.get('[name="ineligibles"]').type(randomThreeDigit);

    //Enter adv rate
    cy.get('[name="adv_rate"]').type(randomTwoDigit);

    //Enter cap_limit name="cap_limit"
    cy.get('[name="cap_limit"]').type(randomTwoDigit);

    // Enter less_prior_liens
    cy.get('[name="less_prior_liens"]').clear().type(randomThreeDigit);

    // Add comments
    cy.get('[placeholder="Write Comments"]').type("Add coments here");
    // Submit form
    cy.get("#collateral-add-value-general-modal-submit").click();
    cy.wait(6000);

    cy.get("#collateral-thirdstep-add-update", { timeout: 8000 }).click();

    cy.wait(10000);
  });
  it("Verify that Collateral for Other Assets (NRE) added successfully", () => {
    cy.contains("Customer").click();
    cy.wait(10000);

    cy.get('[placeholder="Search here"]', { timeout: 10000 }).type(
      "test{enter}"
    );
    cy.get("#customer_view_3aaec484-b64f-4b4c-8c0d-a1f1132fd103", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
    cy.wait(15000);

    cy.get("#test-id-collateral_customer_detail_tab")
      .should("be.visible")
      .click();
    cy.get("#collateral-selections-add").click();

    cy.wait(5000);

    // Select Roll Up
    cy.get('[placeholder="Select Roll up"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Other Assets (NRE)", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    // Select BAC
    cy.get('[placeholder="Select BAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Furniture & Fixtures", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    // Select NAC
    cy.get('[placeholder="Select NAC"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "General Furniture & Fixtures", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    cy.contains("Next").click();

    // step2
    // Add desription
    cy.get('[placeholder="Write description"]', { timeout: 3000 })
      .should("be.visible")
      .type(randomDescription)
      .click();

    // Security Positions
    cy.get('[placeholder="Select Security Position"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "JSI to us - UCC", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    cy.get("#collateral-secondstep-next", { timeout: 19000 }).click();
    cy.wait(10000);

    // stepp 3
    // Add value
    cy.contains("Add Value", { timeout: 8000 }).click();
    //Select effective date
    cy.get('[placeholder="Select Date..."]', { timeout: 8000 }).click();
    cy.get('[data-value="18"]').should("be.visible").click();

    // select either  availability if formula based
    cy.get('[placeholder="Select Availability is Formula Based"]', {
      timeout: 8000,
    })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Yes", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Add description
    cy.get(":nth-child(3) > .capitalize")
      .first()
      .should("be.visible")
      .type(randomDescription);

    // Add value source
    cy.get('[name="source_id"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 8000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "FYE Financials", {
      timeout: 8000,
    })
      .should("be.visible")
      .click();

    //select value type
    cy.get('[name="value_type_id"]', { timeout: 8000 })
      .should("be.visible")
      .click();
    cy.get(".MuiAutocomplete-popper", { timeout: 18000 }).should("be.visible");
    cy.contains("li.MuiAutocomplete-option", "Book", { timeout: 8000 })
      .should("be.visible")
      .click();

    // Add gross_value
    cy.get('[name="gross_value"]').type(randomTwoDigit);

    // Enter Less ineligibles
    cy.get('[name="ineligibles"]').type(randomTwoDigit);

    // Enter adv_rate

    cy.get('[name="adv_rate"]').type(randomTwoDigit);

    //Enter cap_limit name="cap_limit"
    cy.get('[name="cap_limit"]').type(randomTwoDigit);

    // Enter less_prior_liens
    cy.get('[name="less_prior_liens"]').clear().type(randomThreeDigit);

    // Add comments
    cy.get('[placeholder="Write Comments"]').type(randomDescription);
    // Submit form
    cy.get("#collateral-add-value-general-modal-submit").click();
    cy.wait(6000);

    cy.get("#collateral-thirdstep-add-update", { timeout: 8000 }).click();

    cy.wait(10000);
  });
});
