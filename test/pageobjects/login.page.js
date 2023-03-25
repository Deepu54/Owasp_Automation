const utils=require('../specs/utils')
const dataInp=require('..//../testConfig.json')
let date = new Date().getTime()
const recentemail=date

//locators
const _email='[id="email"]'
const _password='[id="password"]'
const _login='[id="loginButton"]'


class LoginPage {
    static async Email() {
        await utils.typeText(_email,dataInp.firstEmail+recentemail+dataInp.lastEmail)
    }
    static async Password() {
        await utils.typeText(_password,dataInp.password)
    }
    static async Login() {
        await utils.clickOnElement(_login)
    }
}
module.exports=LoginPage


