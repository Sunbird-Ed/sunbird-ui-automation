const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('verifyDFenabledInGroupAndUserAbletoCreateDF', () => {
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

    it('verifyDFenabledInGroupAndUserAbletoCreateDF',function(){
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Admin');
        sanityfun.verifyEnableAndDisableDiscussionForGroup2();
        utility.userLogout();
        utility.userLogin('Admin');
        EnrollTBFCPageObj.GroupAdminIsAbleToAddAnActivity();
        // utility.userLogout();
        // utility.userLogin('Public User2');
        // EnrollTBFCPageObj.EditTitleDescriptionTags();
    })
});