import { Selector, t } from 'testcafe'

class PayPage {
    constructor(){
        this.menuPay = Selector('#pay_bills_tab')
        this.addPay = Selector('a').withText('Add New Payee')
        this.payName = Selector('#np_new_payee_name')
        this.payAdress = Selector('#np_new_payee_address')
        this.payAcount = Selector('#np_new_payee_account')
        this.payDetails = Selector('#np_new_payee_details')
        this.buttonPay = Selector('#add_new_payee')
        this.confirmMessage = Selector('#alert_content')
    }
    async buy(name, adress, acount, details) {
        await t
            .click(this.menuPay)
            .click(this.addPay)
            .typeText(this.payName, name, {paste: true, replace: true})
            .typeText(this.payAdress, adress, {paste: true, replace: true})
            .typeText(this.payAcount, acount, {paste: true, replace: true})
            .typeText(this.payDetails, details, {paste: true, replace: true})
            .click(this.buttonPay)
    }
}

export default PayPage