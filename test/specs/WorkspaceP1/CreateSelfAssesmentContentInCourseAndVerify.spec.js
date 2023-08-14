const { browser } = require("protractor");

 const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePage = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');


describe('Create SelfAssesmentCourse save and send for review and publish.', () => {

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
        browser.close();
    });
    it('CreateSelfAssesmentContentInCourseAndVerify  ',function(){
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Mentor2');
        let courseName=tpdPageObj.createCourseAssessment();
        tpdPageObj.sendForReviewTheCourseAssessment();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        resourcePage.publishTheResourceFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Mentor2');
        lspPageObj.deleteCreatedItems();    
    })
});