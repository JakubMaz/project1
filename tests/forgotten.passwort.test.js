import {selector, t, Selector} from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage'

const forgottenPasswordPage = new ForgottenPasswordPage()
const navbar = new Navbar()

fixture `login test`
    .page `http://zero.webappsecurity.com/`

    test ('Przypomnienie hasła', async t => {
        
        // const forgottenpass = Selector('a').withText('Forgot your password ?')
        // const email_input = Selector('#user_email')
        // const massage = Selector('div').innerText

        await t.click(navbar.signInButton)
        await t.click(forgottenPasswordPage.forgottenpass)
        await t.typeText(forgottenPasswordPage.email_input, 'test@mail.com')
        await t.pressKey('enter')
        
        await t.expect(forgottenPasswordPage.massage.innerText).contains('test@mail.com')
        await t.expect(forgottenPasswordPage.email_input.exists).notOk()
    })