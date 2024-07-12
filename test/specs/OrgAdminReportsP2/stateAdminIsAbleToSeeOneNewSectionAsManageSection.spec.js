const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyUOpage = require(protractor.basePath+'/test/pageObject/UserOnBoardingPageObj.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('stateAdminIsAbleToSeeOneNewSectionAsManageSection', () => {
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
    
    it('stateAdminIsAbleToSeeOneNewSectionAsManageSection',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin("Admin3");
        EnrollTBFCPageObj.validateDowloadButtonInGreenColourInsideManagesection();
    });
});