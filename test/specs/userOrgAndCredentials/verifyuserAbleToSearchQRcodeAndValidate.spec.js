const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const userOnboard = require(protractor.basePath +'/test/pageObject/UserOnBoardingPageObj.js');

describe('verifySignInWithGoole', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/get';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    
    it('verifySignInWithGoole',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        userOnboard.validatingQRcodeSearchAndValidate();
    });
});