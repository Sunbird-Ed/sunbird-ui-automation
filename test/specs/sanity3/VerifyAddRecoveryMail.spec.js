const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('VerifyAddRecoveryMail', () => {

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
        //utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    
    it('VerifyAddRecoveryMail',function(){
        utility.handleLocationPopup();
        utility.userLogin('SubOrgMentor');
        usrOnBoardfun.addRecoveryID();
        utility.userLogout();
        //usrOnBoardfun.forgetPassword();
    });
});
   

