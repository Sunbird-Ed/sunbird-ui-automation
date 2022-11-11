const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');


describe('varifyReviewerAbleToViewMetadata', () => {
    
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
    
    it('varifyReviewerAbleToViewMetadata',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        utility.validateWorkspace();
        let courseName = sanityfun.validateMetadataValues("k12");
        console.log(courseName);
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        utility.validateWorkspace();
        sanityfun.publishCourseFromUpForReviewAndValidateMetadata(courseName);
    });
});

