import { Selector, t } from 'testcafe'

class SearchResultsPage {
    constructor() {
        this.results = Selector('h2')
        this.resultsLink = Selector('div')
    }
}

export default SearchResultsPage