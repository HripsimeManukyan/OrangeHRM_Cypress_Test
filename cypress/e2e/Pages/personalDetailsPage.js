import {PageLocators} from "../../Locators/PageLocators";

class PersonalDetailsPage {

    editPersonalDetails(firstName, middleName, lastName) {
        cy.get(PageLocators.PersonalDetails.firstName_input).clear().type(firstName)
        cy.get(PageLocators.PersonalDetails.middleName_input).clear().type(middleName)
        cy.get(PageLocators.PersonalDetails.lastName_input).clear().type(lastName)

    }

    click_save_button() {
        cy.get("button[type='submit']", {timeout: 10000}).first().click();
    }

    assertSuccessMessage() {
        cy.get('div.oxd-toast.oxd-toast--success').should('be.visible')
            .and('contain.text', 'SuccessSuccessfully Updated')
    }

    assertEditedData(firstName, middleName, lastName) {
        cy.get(PageLocators.PersonalDetails.firstName_input).should('have.value', firstName)
        cy.get(PageLocators.PersonalDetails.middleName_input).should('have.value', middleName)
        cy.get(PageLocators.PersonalDetails.lastName_input).should('have.value', lastName)

    }
}

export default PersonalDetailsPage
