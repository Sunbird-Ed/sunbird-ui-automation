const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const sanityFun = require(protractor.basePath + "/test/pageObject/SanityPageObj.js");


describe('validateConsumingQuestioSetAndNavigateBackPopUpWithOKCancelGenerates', () => {
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

    it('validateConsumingQuestioSetAndNavigateBackPopUpWithOKCancelGenerates',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Public User2');
        sanityFun.consumeQuestionSetAndNavagateBackToValidatePopUp();
    })
});