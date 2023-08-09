//const { browser } = require("protractor");

const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('verifySubmitButtonDisabledWhenPhoneNumberEntered', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    
    it('verifySubmitButtonDisabledWhenPhoneNumberEntered',function(){
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Notification');
        sanityfun.validateSubmitDetail();
        sanityfun.validateSubmitDetailsDisabledWhenPhoneNumberEdited(0);
        sanityfun.validateSubmitDetailsDisabledWhenPhoneNumberEdited(1);
        sanityfun.validateSubmitDetailsDisabledWhenPhoneNumberEdited(2);
        sanityfun.validateSubmitDetailsDisabledWhenPhoneNumberEdited(3);
        sanityfun.validateSubmitDetailsDisabledWhenPhoneNumberEdited(4);
        sanityfun.validateSubmitDetailsDisabledWhenPhoneNumberEdited(5);
    })
});