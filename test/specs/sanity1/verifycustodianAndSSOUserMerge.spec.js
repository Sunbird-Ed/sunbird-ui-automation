const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('Verify SSO user merged with Custodian User', () => {

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
    
    it('Verify SSO user merged with Custodian User',function(){
        utility.handleLocationPopup();
        utility.userLogin();
        usrOnBoardfun.verifySSOAndCustodianMerge();
        //usrOnBoardfun.userLogin('Custodian4');
        
    })
}); 