const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('validateSSOloginFlow', () => {
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
    
    it('validateSSOloginFlow',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin();
        usrOnBoardfun.verifySSOandCustodUserMergeAndValidatePopUp();
        utility.userLogout();
        utility.userLogin();
        usrOnBoardfun.verifySSOandCustodUserMergeAndValidatePopUpAndInvalid();
    })
});