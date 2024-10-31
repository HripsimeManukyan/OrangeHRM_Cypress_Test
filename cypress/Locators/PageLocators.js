const PageLocators = {
    Login: {
        username_input: "input[name='username']",
        password_input: "input[name='password']",
        loginButton: "button[type='submit']"
    },

    PersonalDetails: {
        firstName_input: "input[name='firstName']",
        middleName_input: "input[name='middleName']",
        lastName_input: "input[name='lastName']"
    }
}

const constants = {
    url: "https://opensource-demo.orangehrmlive.com/"
}

export {PageLocators, constants}
