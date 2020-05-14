import { Selector, t } from 'testcafe'

class Navbar {
    constructor() {
        this.searchBox = Selector('#searchTerm')
        this.signInButton = Selector('#signin_button')
        this.feedbackButton = Selector('#feedback')
    }

    async search(text) {
        await t
           .typeText(this.searchBox, text, { paste: true, replace: true})
           .pressKey('enter')
    }
}

export default Navbar