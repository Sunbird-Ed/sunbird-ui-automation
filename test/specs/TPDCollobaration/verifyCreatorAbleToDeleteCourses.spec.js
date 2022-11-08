const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('verifyCreatorAbleToDeleteCourses', () => {

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
    
    it('verifyCreatorAbleToDeleteCourses ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        let courseName = sanityFun.CreateCourseAndSaveAsDraft1();
        console.log(courseName)
        tpdPageObj.searchContent("draft");
        tpdPageObj.deleteWorSpaceContent(courseName);
        utility.userLogout();
        let courseName2 = sanityFun.createCourseAndSendForReview();
        tpdPageObj.searchContent("allContent");
        tpdPageObj.deleteWorSpaceContent(courseName2);

        
        
        // lspPageObj.deleteCreatedItems();
        // lspPageObj.deleteAllMyContentItems(); 
    })
});
   
