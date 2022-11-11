const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('bookReviewerCreatesContentPlaylistWithDoubleQuotesDesc', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    
    it('bookReviewerCreatesContentPlaylistWithDoubleQuotesDesc', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        let collectionName = sanityfun.createCollectionWithDiffCollectionTypesToAddSameContentinContentPlaylistWithDoubleQuotes("digitalTxtbook");
        utility.userLogout();
        utility.userLogin('Book Reviewer');
        tpdPageObj.reviewerAbleTovalidateDoublequotes(collectionName);
    })
});