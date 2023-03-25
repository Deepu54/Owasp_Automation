const utils =require('..//specs/utils')


//locators

const _myaccount='[id="navbarAccount"]'
const _logout='[id="navbarLogoutButton"]'


class Logout {
    static async MyAccount() {
        await utils.clickOnElement(_myaccount)
    }
    static async Logout() {
        await utils.clickOnElement(_logout)
    }
}
module.exports=Logout