const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const searchCBFPPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const etbFun = require(protractor.basePath + '/test/pageObject/etbPageObj.js');

describe('verify Course and text book is displayed for the same QRCode', () => {

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
    
    it('verifyTextbookAndCourseIsDisplayedForSameQRCode',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Public User1');
        etbFun.verifyDisplayedCourseAndTextBookAsPerQRCode();
    });
});