const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('verifyUserAbleToExtendStartAndEndDateForUpcomingBatch', () => {

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
    
    it('verifyUserAbleToExtendStartAndEndDateForUpcomingBatch', async function () {
        utility.handleDropDown();
        browser.sleep(30000);
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let courseName = sanityfun.createCourseAndSendForReview();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        tpdPageObj.publishCourseFromUpForReview2(courseName)
        utility.userLogout();
        utility.userLogin('ContentCreator');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        // EnrollTBFCPageObj.createFutureBatch();
        EnrollTBFCPageObj.selectUpcomingBatchFromDropdown();
        let upcomingDate=await EnrollTBFCPageObj.validateUpcomingDates();
        EnrollTBFCPageObj.selectAndValidateUpcomingBatch();
        let extendedDate=await EnrollTBFCPageObj.validateUpcomingDates();
        expect(upcomingDate).not.toEqual(extendedDate);
    })
});