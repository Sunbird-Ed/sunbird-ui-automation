const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const sanityPage=require(protractor.basePath+'/test/pageObject/SanityPageObj.js');
describe('userShouldBeRetainedOnTheSameScreenOnRefresh', () => {

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
    
    it('userShouldBeRetainedOnTheSameScreenOnRefresh',function(){
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        EnrollTBFCPageObj.openExistingGroup();
        EnrollTBFCPageObj.addActivityToTheExistingGroup();
        EnrollTBFCPageObj.addActivityToTheExistingGroup();
        utility.userLogout();
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.sameUiRetainedAfterRefresh();
    })
});