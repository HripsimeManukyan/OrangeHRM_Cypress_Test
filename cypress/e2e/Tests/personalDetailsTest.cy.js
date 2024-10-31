import LoginPage from "../Pages/loginPage";
import DashBoardPage from "../Pages/dashBoardPage";
import PersonalDetailsPage from "../Pages/personalDetailsPage";


describe('Personal Details Edition Test ', () => {
    it('Test successful login and personal details edit', () => {

        const loginPage = new LoginPage()
        const dashBoardPage = new DashBoardPage()
        const personalDetailsPage = new PersonalDetailsPage()

        const username ='Admin'
        const password = 'admin123'

        const firstName = 'Manual'
        const middleName = 'New'
        const lastName = 'QA'


        loginPage.open();
        loginPage.login(username, password);
        loginPage.click_login_button()
        loginPage.assertLoginSuccess()
        dashBoardPage.clickOn_myInfo()
        personalDetailsPage.editPersonalDetails(firstName, middleName, lastName)
        personalDetailsPage.click_save_button()
        personalDetailsPage.assertSuccessMessage()
        personalDetailsPage.assertEditedData(firstName, middleName, lastName)
    })
})
