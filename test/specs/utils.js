class utils {
    static async typeText(locator,value) {
        const P =$(locator,value);
        await P.setValue(value);
    }
    static async clickOnElement(locator) {
        const P =$(locator);
        await P.click()
    }
    static async getDAta(locator,value) {
        const P=$(locator,value);
        await P.setValue(value);
    }
    static async Pause(time) {
        await browser.pause(time)
    }
    static async browserScroll() {
        await browser.scroll()
    }
    static async browserMaxize() {
        await browser.maximizeWindow()
    }
}
module.exports =utils