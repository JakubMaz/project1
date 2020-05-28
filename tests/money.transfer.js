import { Selector, t } from 'testcafe'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import PayPage from '../page-objects/pages/PayPage'

const loginPage = new LoginPage()
const navbar = new Navbar()
const payPage = new PayPage()

fixture `Transfer Test`
    .page `http://zero.webappsecurity.com/`

const formAccount = Selector('#tf_fromAccountId')
const formAccountOption = formAccount.find('option')

const formToAccount = Selector('#tf_toAccountId')
const formToAccountOption = formToAccount.find('option')

const amount = Selector('[name="amount"]')
const description = Selector('[name = "description"]')
const continueButton = Selector('#btn_submit')
const cancleButton = Selector('#btn_cancel')
const boardContent = Selector('.board-content')
const alertbox = Selector('.alert.alert-success')
const checkammount = Selector('.span3')

test ('transter pieniądza', async t => {
    
    await t.setTestSpeed(1)
    await t.click(navbar.signInButton)
    loginPage.loginApp('username', 'password', {paste: true})
    await t.click(payPage.menuTransfer)
           .click(formAccount)
           .click(formAccountOption.withText('Savings(Avail. balance = $ 1548)'))
           .expect(formAccount.value).eql('3')
    await t.click(formToAccount)
           .click(formToAccountOption.withText('Loan(Avail. balance = $ 780)'))
           .expect(formToAccount.value).eql('4')
    await t.typeText(amount, '100', {paste:true})
           .typeText(description, 'test', {paste:true})
           .click(continueButton)
           .expect(cancleButton).ok()
           .click(formAccount)
           .expect(formAccount.hasAttribute('disabled')).ok()
           // TO DO - check why .contains doesn't work
           .expect(boardContent.withText('Please verify that the following transaction is correct')).ok()
           .click(continueButton)
           //.expect(alertbox).contains('You successfully submitted your transaction.')
           .expect(alertbox.withText('You successfully submitted your transaction.')).ok()
           .expect(checkammount.withText('$ 100')).ok()

    });