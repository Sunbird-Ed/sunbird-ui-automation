const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');


describe('Verify that custodian users is displayed with YOB popup and the user is not allowed to proceed further without filling the YOB popup', () => {

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
      //  utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    it('Custodian users YOB popup submit before onboarding ',function(){
        utility.handleLocationPopup();
        utility.userLogin('CustUser12');
        verifyCEBpageobj.verifyYOBforCustodianUsers();
        
    })
});
   