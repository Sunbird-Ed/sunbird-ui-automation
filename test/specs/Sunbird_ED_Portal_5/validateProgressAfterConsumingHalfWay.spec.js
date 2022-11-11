const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('validateProgressAfterConsumingHalfWay', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().deleteAllCookies();
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });

    it('validateProgressAfterConsumingHalfWay', function () {
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let courseName = tpdPageObj.createCourseAndSendForReviewBySearchingContentInLibrary("pdf_13");
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        EnrollTBFCPageObj.createOpenBatch();
        utility.userLogout();
        //let courseName = "CourseDEllie";
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        EnrollTBFCPageObj.JoinCourseWithOpenBatch();
        EnrollTBFCPageObj.validateAndConsumeOngoingContentHalfway(courseName);
    })
});