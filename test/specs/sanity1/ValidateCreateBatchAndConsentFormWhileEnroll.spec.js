const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const sanityfun =require(protractor.basePath+'/test/pageObject/SanityPageObj.js');
describe('ValidateCreateBatchAndConsentFormWhileEnroll', () => {

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
    it('ValidateCreateBatchAndConsentFormWhileEnroll',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Mentor');
        utility.validateWorkspace();
        let courseName=sanityfun.createCourseAndSendForReview();
        // tpdPageObj.createCourse();
        // let courseName=tpdPageObj.sendForReviewCourseWithName();
        utility.userLogout();
        utility.userLogin('Reviewer');
        utility.validateWorkspace();
        tpdPageObj.publishCourseFromUpForReview(courseName)
        //tpdPageObj.publishTheCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Mentor');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName); 
        tpdPageObj.checkCreateBatchOption();
        tpdPageObj.createOpenBatch();
        utility.userLogout();
        utility.userLogin('Public User1');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        tpdPageObj.enrollForOpenBatch();
        utility.userLogout();
        utility.userLogin('Mentor');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName); 
        tpdPageObj.checklastUpdatedOption();
    })

   
   
});
   
