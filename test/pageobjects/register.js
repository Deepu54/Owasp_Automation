const { util } = require('chai')
const utils =require('../specs/utils')
const dataInp=require('..//../testConfig.json')
let date = new Date().getTime()



//locators
const _accountTap='[id="navbarAccount"]'
const _loginTap='[id="navbarLoginButton"]'
const _notyetCustomer='[id="newCustomerLink"]'
const _email='[id="emailControl"]'
const _password='[id="passwordControl"]'
const _repeatPassword='[id="repeatPasswordControl"]'
const _securityQuestion='[aria-describedby="mat-hint-3"]'
const _SecurityQuestion1='//span[text()=" Your eldest siblings middle name? "]'
const _securityAnswer='[id="securityAnswerControl"]'
const _registerSubmit='[id="registerButton"]'
const _click='[class="mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted"]'
const recentemail = date


class Registerpage {
    static async Click() {
        await utils.clickOnElement(_click)
    }
    static async TapAccount() {
        await utils.clickOnElement(_accountTap)
    }
    static async TapLogin() {
        await utils.clickOnElement(_loginTap)
    }
    
    static async NotYetCustomer() {
        await utils.clickOnElement(_notyetCustomer)
    }
    static async Email(recentemail) {
        await utils.typeText(_email,dataInp.firstEmail+recentemail+dataInp.lastEmail)
    }
    static async Password() {
        await utils.typeText(_password,dataInp.password)
    }
    static async ConfirmPassword() {
        await utils.typeText(_repeatPassword,dataInp.confirmPassword)
    }
    static async SecurityQuestion() {
        await utils.clickOnElement(_securityQuestion)
    }
    static async SecurityQuestion1() {
        await utils.clickOnElement(_SecurityQuestion1)
    }
    static async SecurityAnswer() {
        await utils.typeText(_securityAnswer,dataInp.SecurityAnswer)
    }
    static async Submit() {
        await utils.clickOnElement(_registerSubmit)
    }
}
module.exports=Registerpage
