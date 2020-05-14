import { Selector, t } from 'testcafe'

class LoginPage {
    constructor(){
        this.login_form = Selector('#login_form')
        this.accountsumary = Selector('#account_summary_tab')
        this.contmenu = Selector('.icon-user')
        this.logout_button = Selector('#logout_link')
        this.userPassword = Selector('#user_password')
        this.userLogin = Selector('#user_login')
        this.logInButton = Selector('.btn-primary')
    }
    async loginApp(username, password) {
        await t 
                .typeText(this.userLogin, username, {paste: true})
                .typeText(this.userPassword, password, {paste: true})
                .click(this.logInButton)
    }
}

export default LoginPage