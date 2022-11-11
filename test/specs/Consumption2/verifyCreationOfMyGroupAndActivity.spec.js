const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
describe('Verify Create group add member and add activity', () => {

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
    
    it('verifyCreationOfMyGroupAndActivity ',function(){
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        EnrollTBFCPageObj.verifyCreateMyGroupAddMemberandAddActivity();
        utility.userLogout();
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.groupMemberCourseConsumptionstatus();
        utility.userLogout();
        // utility.userLogin('Creator');
        // EnrollTBFCPageObj.verifylastUpdatedandCourseConsumption();
        // utility.userLogout();
    })
});