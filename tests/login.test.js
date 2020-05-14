import {selector, t, Selector} from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'

const loginPage = new LoginPage()
const navbar = new Navbar()

fixture `login test`
    .page `http://zero.webappsecurity.com/`

    .beforeEach( async t => {
        await t.setTestSpeed(1)
        })
 
    test ('test niepoprawnymi danymi', async t => {
    await t.click(navbar.signInButton)
    loginPage.loginApp('wrongusername', 'wronguserpassword')
    
    const error_message = Selector('.alert-error').innerText
    await t.expect(error_message).contains('Login and/or password are wrong.')
})


test ('logowanie poprawynymi danymi', async t => {
    await t.click(navbar.signInButton)
    loginPage.loginApp('username', 'password')

    await t.expect(loginPage.accountsumary.exists).ok()
    await t.expect(loginPage.login_form.exists).notOk()
    await t.click(loginPage.contmenu)
    await t.click(loginPage.logout_button)
    await t.expect(loginPage.logout_button.exists).notOk()
    await t.expect(loginPage.login_form.exists).notOk()
})