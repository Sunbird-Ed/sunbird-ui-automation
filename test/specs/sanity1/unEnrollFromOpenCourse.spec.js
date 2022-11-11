const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('able to create course and enroll consume unEnrollFromOpenCourse', () => {


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

    it('unEnrollFromOpenCourse', function () {
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let courseName = sanityfun.createCourseAndSendForReview();
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(courseName)
        utility.userLogout();
        utility.userLogin('Creator');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        EnrollTBFCPageObj.createOpenBatch();
        utility.userLogout();
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        var fetchCoursename = EnrollTBFCPageObj.enrollForOpenBatch2();
        tpdPageObj.unenrollFromBatch();
    })
});