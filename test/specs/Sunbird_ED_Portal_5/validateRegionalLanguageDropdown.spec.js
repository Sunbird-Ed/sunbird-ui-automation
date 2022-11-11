const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const searchAALTPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('validateRegionalLanguageDropdown', () => {

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

    it('validateRegionalLanguageDropdown',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        searchAALTPageObj.vaidatePageLangaugeTranslation();
        //utility.userLogout();
        // searchAALTPageObj.LangaugeTranslation();
        // searchAALTPageObj.SearchCouseWithRegionalLang();
    })
});