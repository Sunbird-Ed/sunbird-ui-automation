const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('Create Book save and send for review and publish.', () => {

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
    it('CreateBookWithOnlyCreatorRole', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('OnlyCreator');
        let bookName= sanityfun.createBook();
        utility.userLogout();
        utility.userLogin('OnlyContentReviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName)
    
    })
});
