const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('validateShowFeedbackSolutionAndSubmit', () => {
    
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().deleteAllCookies();
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });

    it('verifyBackButtonIsPresentInIndividualAssetsOnconsumptionScreen ', function () {
        utility.handleDropDown();
      utility.handleLocationPopup();
        utility.userLogin('TCTestUser');
        sanityfun.verifyBackButtonIsPresentInIndividualAssetsOnconsumptionScreen();
    })
});