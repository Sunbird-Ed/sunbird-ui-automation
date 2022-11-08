const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js')

describe('Course reviewer is able to rejects the SelfAssesmentcourse .', () => {

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
        utility.userLogout();
        browser.manage().deleteAllCookies();

    });
    it('RejectSelfAssesmentContentInCourse', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        let courseName = tpdPageObj.createCourseAssessment();
        console.log("nam is"+courseName);
        tpdPageObj.sendForReviewTheCourseAssessment();
        resourcePageObj.reviewInSubmissions(courseName);
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.rejectLessonPlan(courseName)
        utility.userLogout();
        utility.userLogin('Creator');
        resourcePageObj.editTheContentInDraft();
        tpdPageObj.sendForReviewTheRejectedCourse();
        utility.userLogout();
        utility.userLogin('Reviewer');
        utility.validateWorkspace();
        tpdPageObj.publishTheCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        lspPageObj.deleteCreatedItems();
    })
});