const UserData = require('../support/datatest/UserData')
const LoginPage = require('../support/pages/LoginPage')
const DashboardPage = require('../support/pages/DashboardPage')


let loginpage = new LoginPage()
let dashboardpage = new DashboardPage()
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
  })

describe('User should be able to login', () => {
    beforeEach(() => {
        loginpage.visit('https://appstaging.viseetor.id/login')
    })
   

    it('with valid data', () => {
        loginpage.verify_login_page()
        loginpage.type_email(UserData.datatest.email)
        loginpage.type_password(UserData.datatest.password)
        loginpage.click_login_button()
        dashboardpage.click_perbesar()
        dashboardpage.verify_dashboard_page()
      
    })
    it('with invalid data email salah dan password salah', () => {
        loginpage.verify_login_page()
        loginpage.type_email_salah(UserData.datatest.emailsalah)
        loginpage.type_password_salah(UserData.datatest.passwordsalah)
        loginpage.click_login_button()
        loginpage.verify_login_failed()
    })

    it('with invalid data email salah password benar', () => {
         loginpage.verify_login_page()
         loginpage.type_email_salah(UserData.datatest.emailsalah)
         loginpage.type_password(UserData.datatest.password)
         loginpage.click_login_button()
         loginpage.verify_login_failed()
     })

     it('with invalid data email benar password salah', () => {
        loginpage.verify_login_page()
         loginpage.type_email(UserData.datatest.email)
         loginpage.type_password(UserData.datatest.passwordsalah)
         loginpage.click_login_button()
         loginpage.verify_login_failed()
     })

     it('with invalid data kosong', () => {
        loginpage.verify_login_page()
        cy.get('#email').should('have.text', '');
        cy.get('#password').should('have.text', '');
        loginpage.click_login_button()
        loginpage.verify_login_failed()
     })
})
