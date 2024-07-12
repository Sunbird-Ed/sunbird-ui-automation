const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js')

describe('After Rejecting course Add New Resource , again publish', () => {

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
    it('verfiyRejectedCourseAndUpdateResource',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        
        tpdPageObj.createCourse();
        let courseName=tpdPageObj.sendForReviewCourseWithName();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.rejectLessonPlan(courseName)
        utility.userLogout();
        utility.userLogin('Creator');
        tpdPageObj.editTheCourseInDraftAddNewResource();
        tpdPageObj.sendForReviewTheRejectedCourse();
        utility.userLogout();
        utility.userLogin('Reviewer');
        
        tpdPageObj.publishTheCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        
        lspPageObj.deleteCreatedItems();
       
       
    })

   
   
});
   
