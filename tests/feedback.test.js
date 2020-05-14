import { Selector, t, } from 'testcafe'
import FeedbackPage from '../page-objects/pages/FeedbackPage'
import Nevbar from '../page-objects/components/Navbar'

const nevbar = new Nevbar()
const feedbackPage = new FeedbackPage()

fixture `feedback test`
    .page `http://zero.webappsecurity.com/`
    .beforeEach( async t => {
        await t.setTestSpeed(1)
        })

    test ('test wysłąnie formularza kontaktowego', async t => {
        await t. click(nevbar.feedbackButton)
        feedbackPage.feedback('Jakub', 'kuba@test.pl', 'test', 'test sprawdzajacy feedback')

        await t.expect(feedbackPage.succesSendMassage.innerText).contains('Thank you for your comments, Jakub.')
    })

