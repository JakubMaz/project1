import { Selector, t } from 'testcafe'

class ForgottedPasswordPage{
    constructor(){
        this.forgottenpass = Selector('a').withText('Forgot your password ?')
        this.email_input = Selector('#user_email')
        this.massage = Selector('div')
    }
}

export default ForgottedPasswordPage