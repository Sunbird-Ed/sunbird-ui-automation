const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('Verify that when user clicks on Add certificate and user should be able to click on + sign', () => {

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

    it('userClickOnAddCertificateAndShouldBeAbletoClickPlusSignToAddScore', function () {
        utility.handleDropDown();
        browser.sleep(30000);
        //utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let courseName = sanityfun.createCourseAndSendForReviewWithMeritCourse();
        console.log(courseName);
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        tpdPageObj.publishCourseFromUpForReview2(courseName)
        utility.userLogout();
        utility.userLogin('ContentCreator');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        tpdPageObj.addCertificateAndCreateTemplateFromScratch();
        EnrollTBFCPageObj.verifyThatUserIsAbleToEditScoreAndSelectScore();
        utility.userLogout();
        utility.userLogin('Public User2');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatchWithCertificateAndConsume();
    })
});












