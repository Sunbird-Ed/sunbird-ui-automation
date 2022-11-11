const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js')
const sanityfun =require(protractor.basePath+'/test/pageObject/SanityPageObj.js');
describe('verifyContentDeletedFromDraftReviewMyContent', () => {

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
    it('verifyContentDeletedFromDraftReviewMyContent',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        
        console.log("User is trying to delete drafted course from draft and allMyContent section");
        let courseName1=sanityfun.CreateCourseAndSaveAsDraft1();
        //lspPageObj.searchAnddeleteDraftItems(courseName1);
        lspPageObj.searchAnddeleteAllMyContentItems(courseName1);
        utility.userLogout();
        utility.userLogin('Creator');
        console.log("User is trying to delete reviwed course from draft and allMyContent section");
        let courseName2=sanityfun.createCourseAndSendForReview();
        lspPageObj.searchAnddeleteAllMyContentItems(courseName2);
    })
});
   
