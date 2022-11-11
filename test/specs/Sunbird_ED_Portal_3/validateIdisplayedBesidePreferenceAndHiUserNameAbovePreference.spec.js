const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const searchAALTPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');


describe('validateIdisplayedBesidePreferenceAndHiUserNameAbovePreference', () => {

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

    it('validateIdisplayedBesidePreferenceAndHiUserNameAbovePreference',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        searchAALTPageObj.validateClickedOnLogoNoctedToDigitalTextBook();
        utility.userLogin('Public User1');
        searchAALTPageObj.validateClickedOnLogoNoctedToDigitalTextBook();
    })
});