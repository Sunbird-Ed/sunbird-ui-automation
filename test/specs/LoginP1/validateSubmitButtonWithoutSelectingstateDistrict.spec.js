const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyUOpage = require(protractor.basePath+'/test/pageObject/UserOnBoardingPageObj.js');


describe('validateSubmitButtonWithoutSelectingstateDistrict', () => {
    
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
    
    it('validateSubmitButtonWithoutSelectingstateDistrict',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        verifyUOpage.verifyLocationPopUpByDisableStateDistrict();
    });
});
