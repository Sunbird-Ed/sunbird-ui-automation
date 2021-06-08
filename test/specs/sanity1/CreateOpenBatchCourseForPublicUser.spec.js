const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const sanityfun =require(protractor.basePath+'/test/pageObject/SanityPageObj.js');
describe('User should be able to consume open course..', () => {

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
    it('CreateOpenBatchCourseForPublicUser',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        let courseName=sanityfun.createCourseAndSendForReview();
        // tpdPageObj.createCourse();
        // let courseName=tpdPageObj.sendForReviewCourseWithName();
        utility.userLogout();
        utility.userLogin('Reviewer');
        utility.validateWorkspace();
        tpdPageObj.publishCourseFromUpForReview(courseName)
       // tpdPageObj.publishTheCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName); 
        tpdPageObj.createOpenBatch();
        lspPageObj.deleteCreatedItems();
        
    })

   
   
});
   
