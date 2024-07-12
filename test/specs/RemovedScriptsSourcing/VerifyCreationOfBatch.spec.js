const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const sanityfun =require(protractor.basePath+'/test/pageObject/SanityPageObj.js');
describe('VerifyCreationOfBatch', () => {

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
        utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    it('VerifyCreationOfBatch',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Mentor');
        let courseName=sanityfun.createCourseAndSendForReview();
    //     EnrollTBFCPageObj.createCourse();
    //    let coursename=EnrollTBFCPageObj.sendForReviewCourseWithName();
        utility.userLogout();

        utility.userLogin('Reviewer');
        EnrollTBFCPageObj.publishCourseFromUpForReview(courseName);
        utility.userLogout();

        utility.userLogin('Mentor');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        EnrollTBFCPageObj.batchNameAndEndDateIsMandatoryFields();
        EnrollTBFCPageObj.createOpenBatchWithEnrolmentDate();
        utility.userLogout();

        utility.userLogin('Public User2');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        var fetchCoursename= EnrollTBFCPageObj.enrollForOpenBatch();
        //EnrollTBFCPageObj.checkTheCourseInMyCourseSection(fetchCoursename);
        utility.userLogout();

        utility.userLogin('Mentor');
        lspPageObj.deleteCreatedItems();
        


      
      
    })
    
   
   
    
});