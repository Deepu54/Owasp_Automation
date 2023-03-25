
const utils=require('../specs/utils')
const dataInp=require('../../testConfig.json')



//locators
const _checkout='[id="checkoutButton"]'
const _tapAddress='[class="mat-focus-indicator btn btn-new-address mat-button mat-raised-button mat-button-base mat-primary"]'
const _addNewAddress='[class="mat-focus-indicator btn btn-new-address mat-button mat-raised-button mat-button-base mat-primary"]'
const _country='[data-placeholder="Please provide a country."]'
const _Name='[data-placeholder="Please provide a name."]'
const _phoneNumber ='[data-placeholder="Please provide a mobile number."]'
const _zipCode='[data-placeholder="Please provide a ZIP code."]'
const _address='[placeholder="Please provide an address."]'
const _city='[data-placeholder="Please provide a city."]'
const _state='[data-placeholder="Please provide a state."]'
const _submit='[id="submitButton"]'
const _selectAddress='[class="mat-radio-inner-circle"]'
const _continueAddress='[aria-label="Proceed to payment selection"]'
const _fastDelivery='(//span[@class="mat-radio-inner-circle"])[2]'
const _deliveryContinue='[class="mat-focus-indicator btn nextButton mat-button mat-raised-button mat-button-base mat-primary"]'






class CheckoutAddress{
    static async Chckout() {
        await utils.clickOnElement(_checkout)
    }
    static async TapAddress() {
        await utils.clickOnElement(_tapAddress)
    }
    static async AddNewAddress() {
        await utils.clickOnElement(_addNewAddress)
    }
    static async Country() {
        await utils.typeText(_country,dataInp.country)
    }
    static async Name() {
        await utils.typeText(_Name,dataInp.firstName)
    }
    static async PhoneNumber() {
        await utils.typeText(_phoneNumber,dataInp.phonenumber)
    }
    static async Zipcode() {
        await utils.typeText(_zipCode,dataInp.postalcode)
    }
    static async address() {
        await utils.typeText(_address,dataInp.Address)
    }
    static async City() {
        await utils.typeText(_city,dataInp.city)
    }
    static async State() {
        await utils.typeText(_state,dataInp.state)
    }
    static async SubmitBtn() {
        await utils.clickOnElement(_submit)
    }
    static async SelectAddress() {
        await utils.clickOnElement(_selectAddress)
    }
    static async ContinueAddress() {
        await utils.clickOnElement(_continueAddress)
    }
    static async FastDelivery() {
        await utils.clickOnElement(_fastDelivery)
    }
    static async DeliveryContinue() {
        await utils.clickOnElement(_deliveryContinue)
    }
    
}
module.exports = CheckoutAddress