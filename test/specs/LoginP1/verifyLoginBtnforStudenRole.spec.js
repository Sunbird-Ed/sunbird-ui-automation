const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const searchCBFPPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('VerifyCollapseAllOption', () => {

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

    it('verifyLoginBtnforStudenRole',function(){
        utility.handleLocationPopupAsStudent();
        utility.handleLocationPopup();
        utility.userLogin('Public User2');
    });
});