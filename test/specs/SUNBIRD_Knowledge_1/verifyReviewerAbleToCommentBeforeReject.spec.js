const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('verifyReviewerAbleToCommentBeforeReject', () => {

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
    
    it('verifyReviewerAbleToCommentBeforeReject', function () {
        utility.handleDropDown();
        browser.sleep(25000);
        //utility.handleLocationPopup();
        utility.userLogin('Creator');
        let bookName = sanityfun.createBook();
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.rejectContentWithAnyRegionalLanguage(bookName,"தமிழ்");
    })
});
