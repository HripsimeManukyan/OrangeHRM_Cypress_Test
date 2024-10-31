class DashBoardPage {

    clickOn_myInfo() {
        cy.get('nav .oxd-main-menu').contains('My Info')
            .find('span').click()
    }
}

export default DashBoardPage
