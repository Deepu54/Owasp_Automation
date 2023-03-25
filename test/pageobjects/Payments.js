const dataInp =require('..//../testConfig.json')
const utils=require('..//specs/utils')




//locators
const _addCard='[id="mat-expansion-panel-header-0"]'
const _name= '//*[contains(text(),"Name")]/parent::label/parent::span/preceding-sibling::input'

const _cardNumber='//*[contains(text(),"Card Number")]/parent::label/parent::span/preceding-sibling::input'
const _expiryMonth='#mat-input-18'
const _expiryYear='#mat-input-19'
const _submit='[id="submitButton"]'
const _tapCardDetails='[class="mat-radio-inner-circle"]'
const _finalSubmit='//span[text()="Continue"]'
const _placeorder='[id="checkoutButton"]'

class Payments {
    static async AddCard() {
        await utils.clickOnElement(_addCard)
    }
    static async CardName() {
        await utils.clickOnElement(_name)
        await utils.typeText(_name, dataInp.firstName)
    }
    static async CardNumber() {
        await utils.clickOnElement(_cardNumber)
        await utils.typeText(_cardNumber,dataInp.card)
    }
    static async ExpireMonth() {
        await $(_expiryMonth).selectByIndex("6")
    }
    static async ExpireYear() {
        await $(_expiryYear).selectByIndex("15")
    }
    static async Submit() {
        await utils.clickOnElement(_submit)
    }
    static async TapCardDetails() {
        await utils.clickOnElement(_tapCardDetails)
    }
    static async FinalSubmit() {
        await utils.clickOnElement(_finalSubmit)
    }
    static async PlaceOrder() {
        await utils.clickOnElement(_placeorder)
    }

}
module.exports=Payments
