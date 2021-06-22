const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('Verify that YOB is not displayed to new and existing Goolge users', () => {

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
    
    it('verifyYOBdisplayedToNewAndExistingGoogleUser',function(){
        utility.handleLocationPopup();
        utility.userLogin();
        usrOnBoardfun.verifyYOBpopUpdisplayedToNewAndExistingUsers();
        utility.handleLocationPopup();
        console.log('Verified for new google users');
        
    });
}); 