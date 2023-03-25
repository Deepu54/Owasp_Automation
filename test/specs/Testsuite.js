const utils=require('../specs/utils')
const dataInp=require('..//..//testConfig.json')
const homepage =require('..//pageobjects/Homepage')
const RegisterPage=require('..//pageobjects/register')
const CheckoutAddress=require('..//pageobjects/checkout&address')
const Payments=require('..//pageobjects/Payments')
const Logout =require('..//pageobjects/Logout')
const LoginPage = require('..//pageobjects/login.page')
const Homepage = require('..//pageobjects/Homepage')
let date = new Date().getTime()
const recentEmail = date



describe("Owasp juice world ",async function() {
    it(' should open the correct website',async function() {
        await utils.browserMaxize()
        await browser.url(dataInp.baseUrl)
        
         
        
    })

})
describe("Owasp jucie world Registration",async function() {
    it('user should be able to register',async function() { 
        await utils.Pause(1000)
        await RegisterPage.Click() 
        await RegisterPage.TapAccount()
        await RegisterPage.TapLogin()
        await RegisterPage.NotYetCustomer()
        await RegisterPage.Email(recentEmail)
        await RegisterPage.Password()
        await RegisterPage.ConfirmPassword()
        await RegisterPage.SecurityQuestion()
        await RegisterPage.SecurityQuestion1()
        await RegisterPage.SecurityAnswer()
        await RegisterPage.Submit()

    })

})
describe("Owasp juice world Login",async function() {
    it('user should be able to Login',async function() {
        await LoginPage.Email(recentEmail)
        await LoginPage.Password()
        await LoginPage.Login()

    })
})

describe("Owasp juice world Add items ",async function() {
    it('user should be able to Add juices to baskets',async function() {
        await Homepage.AppleJuice()
        await Homepage.ApplePomace()
        await Homepage.BananaJuice()
        await Homepage.YourBasket()
        await utils.Pause(3000)
        await Homepage.IncreaseItems1()
        await Homepage.IncreaseItems2()
        await utils.Pause(2000)
    })
})
describe("Owasp juice world Billing",async function() {
    it('user should be able to checkout and add address',async function(){
        await CheckoutAddress.Chckout()
        await CheckoutAddress.AddNewAddress()
        await CheckoutAddress.Country()
        await CheckoutAddress.Name()
        await CheckoutAddress.PhoneNumber()
        await CheckoutAddress.Zipcode()
        await CheckoutAddress.address()
        await CheckoutAddress.City()
        await CheckoutAddress.State()
        await CheckoutAddress.SubmitBtn()
        await utils.Pause(1500)
        await CheckoutAddress.SelectAddress()
        await CheckoutAddress.ContinueAddress()
        await CheckoutAddress.FastDelivery()
        await CheckoutAddress.DeliveryContinue()

    })
})
describe("Owasp juice world Payment",async function(){
    it('user should be able to make payments',async function() {
        await utils.Pause(3000)
        await Payments.AddCard()
        await utils.Pause(3000)
        await Payments.CardName()
        await utils.Pause(3000)
        await Payments.CardNumber()
        await Payments.ExpireMonth()
        await Payments.ExpireYear()
        await Payments.Submit()
        await utils.Pause(2000)
        await Payments.TapCardDetails()
        await utils.browserScroll(0,700)
        await Payments.FinalSubmit()
        await Payments.PlaceOrder()
    })
})
describe("Owasp juice world Logout",async function(){
    it('user should be able to Logout ',async function() {
        await RegisterPage.TapAccount()
        await Logout.Logout()

    })
})
