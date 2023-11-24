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
        loginpage.visit('https://appstaging.viseetor.id/register')
    })


})