import {selector, t, Selector} from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

fixture `login test`
    .page `http://zero.webappsecurity.com/`

    test('test wyszukiwarki', async t => {
        navbar.search('online bank')
        
        await t.expect(searchResultsPage.results.exists).ok()
        await t.expect(navbar.searchBox.exists).ok()
        await t
            .expect(searchResultsPage.resultsLink.innerText)
            .contains('Zero - Free Access to Online Banking')

    })