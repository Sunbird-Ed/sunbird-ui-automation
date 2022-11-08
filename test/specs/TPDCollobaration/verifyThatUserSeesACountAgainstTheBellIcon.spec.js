const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const sanityPage=require(protractor.basePath+'/test/pageObject/SanityPageObj.js');
describe('Verify that user is able to enable DF in groups ', () => {

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
    it('verifyThatUserSeesACountAgainstTheBellIcon ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        EnrollTBFCPageObj.openExistingGroup();
        EnrollTBFCPageObj.addActivityToTheExistingGroup();
        utility.userLogout();
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.userCanClearAllNotifications();
        utility.userLogout();
        utility.userLogin('ContentCreator');
        EnrollTBFCPageObj.openExistingGroup1();
        EnrollTBFCPageObj.addActivityToTheExistingGroup();
        utility.userLogout();
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.verifyThatUserSeesACountAgainstTheBellIcon();
     
    })
});