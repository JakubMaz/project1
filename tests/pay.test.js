import {Selector} from 'testcafe'
import {login} from '../helper' 
import PayPage from '../page-objects/pages/PayPage'

const payPage = new PayPage()

fixture `pay test`
    .page `http://zero.webappsecurity.com/`
    
    test.before(async t => {
        await login('username', 'password')
    })('test spłatności', async t => {
     
        payPage.buy('Jakub', 'nie interere', 'terefere', 'sprawdzamy')

        await t.expect(payPage.confirmMessage.innerText).contains('successfully created.')
    })