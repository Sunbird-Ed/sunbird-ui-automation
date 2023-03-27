const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const lessonPlanPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('ontent creator is able to save the content ( Lesson Plan) & send the content ( Lesson Plan)for review.', () => {

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
    it('CreateLessonPlanSaveAndSendForReviewAndPublish',function(){
         utility.handleDropDown();
         utility.handleLocationPopup();
        utility.userLogin('Mentor2');
        let lessonPlan=lessonPlanPageObj.createLessonPlan();
        lessonPlanPageObj.sendForReviewTheLessonPlan();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        lessonPlanPageObj.publishTheLessonPlanFromUpForReview(lessonPlan);
        utility.userLogout();
        utility.userLogin('Mentor2');
        
        lessonPlanPageObj.deleteCreatedItems();
        
    })

   
   
});
   
