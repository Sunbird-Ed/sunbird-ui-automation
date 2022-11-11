const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const collectionPageObj = require(protractor.basePath+'/test/pageObject/collectionPageObj.js');
const lessonPlanPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js')

describe('ontent reviewer is able to Publish/Reject content.( Lesson Plan).', () => {

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
    it('RejectTheLessonPlan',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Mentor2');
        let lessonPlan=lessonPlanPageObj.createLessonPlan();
        lessonPlanPageObj.sendForReviewTheLessonPlan();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        resourcePageObj.rejectTheLessonPlan(lessonPlan)
        utility.userLogout();
        utility.userLogin('Mentor2');
        resourcePageObj.editTheContentInDraft();  
    })   
});
   
