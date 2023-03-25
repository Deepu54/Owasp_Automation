const utils=require('../specs/utils')
const _appleJuiceBAsket='(//button[@class="mat-focus-indicator btn-basket mat-button mat-raised-button mat-button-base mat-primary ng-star-inserted"])[1]'
const _applePomace='(//button[@aria-label="Add to Basket"])[2]'
const _bananaJucie='(//button[@aria-label="Add to Basket"])[3]'
const _yourBasket='[class="mat-focus-indicator buttons mat-button mat-button-base ng-star-inserted"]'
const _increaseItems1='(//button[@class="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"])[1]'
const _increaseItems2='(//button[@class="mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted"])[2]'
//locators

class Homepage {
    
    static async AppleJuice() {
        await utils.clickOnElement(_appleJuiceBAsket)
    }
    static async ApplePomace() {
        await utils.clickOnElement(_applePomace)
    }
    static async BananaJuice() {
        await utils.clickOnElement(_bananaJucie)
    }
    static async YourBasket(){
        await utils.clickOnElement(_yourBasket)
    }
    static async IncreaseItems1() {
        await utils.clickOnElement(_increaseItems1)
    }
    static async IncreaseItems2() {
        await utils.clickOnElement(_increaseItems2)
      
}
}
module.exports=Homepage

