import { Selector, t } from 'testcafe'

class FeedbackPage{
    constructor(){
        this.headSection = Selector('#feedback-title')
        this.inputName = Selector('#name')
        this.inputEmail = Selector('#email')
        this.inputSubject = Selector('#subject')
        this.inputComm = Selector('#comment')
        this.buttonSendMessage = Selector('input').withAttribute('value', 'Send Message')
        this.succesSendMassage = Selector('div')
    }

    async feedback(name, email, subject, comment) {
        await t
            .typeText(this.inputName, name, {paste:true, replace: true})
            .typeText(this.inputEmail, email, {paste:true, replace: true})
            .typeText(this.inputSubject, subject, {paste: true, replace: true})
            .typeText(this.inputComm, comment, {paste: true, replace: true})
            .click(this.buttonSendMessage)
    }
}

export default FeedbackPage