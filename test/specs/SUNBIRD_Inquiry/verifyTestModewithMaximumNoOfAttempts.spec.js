const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');


describe('verify Test Mode With Maximum No Of Attempts.', () => {

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
    it('verifyTestModewithMaximumNoOfAttempts ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('AddUserCred');
        verifyCEBpageobj.addUserInProfile();
        utility.handleDropDown();  
        utility.handleLocationPopupAfterAddUser(); 
     //   resourcePageObj.AddUserProfileVerification();
        sanityfun.verifyTestModewithMaximumNoOfAttempts();
        
    }) 
   
});