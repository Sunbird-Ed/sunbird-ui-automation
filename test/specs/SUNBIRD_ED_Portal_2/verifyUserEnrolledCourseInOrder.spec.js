const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const sanityfun =require(protractor.basePath+'/test/pageObject/SanityPageObj.js');
describe('Course Enrolled By the user should dispay in descending order', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });

    it('verifyUserEnrolledCourseInOrder ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let courseName=sanityfun.createCourseAndSendForReview();
        console.log(courseName);
        // EnrollTBFCPageObj.createCourse();
        // let coursename=EnrollTBFCPageObj.sendForReviewCourseWithName();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        EnrollTBFCPageObj.publishCourseFromUpForReview2(courseName);
        utility.userLogout();
        utility.userLogin('ContentCreator');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        EnrollTBFCPageObj.createOpenBatch();
        utility.userLogout();
        utility.userLogin('Public User2');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        EnrollTBFCPageObj.enrollForOpenBatch();
        EnrollTBFCPageObj.checkTheCourseInMyCourseSection(courseName);
    })
});