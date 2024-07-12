const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Course creator is able to share the course content via link', () => {

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
    it('editAndSendLimitedSharingForReview',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        
        tpdPageObj.createCourse();
        tpdPageObj.SendForLimitedSharing();
        let courseName=tpdPageObj.sendForReviewCourseWithName();
        utility.userLogout();
        utility.userLogin('Reviewer');
        
        tpdPageObj.publishTheCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Public User2');
        tpdPageObj.navigateToCourseAndSearch(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        
        lspPageObj.deleteCreatedItems();
       
    
       
    });
    
    

 
});
   
