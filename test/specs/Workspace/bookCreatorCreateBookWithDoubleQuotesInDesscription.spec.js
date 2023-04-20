const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');

describe('bookCreatorCreateBookWithDoubleQuotesInDesscription', () => {
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
    
    it('bookCreatorCreateBookWithDoubleQuotesInDesscription', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        let bookName= sanityfun.createBookWithDoubleQuotesInDesc();
        utility.userLogout();
        utility.userLogin('Book Reviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName);
    })
});