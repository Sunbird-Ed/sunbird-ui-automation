const { browser, Browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL= require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('verifyTheCommaSeparatedWordsCanBeEnteredInCustomKeyboardInputFieldAndTheSameRendersCorrectlyInPreviewKeyboard', () => {
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

    it('Enter26CharactersInCustomKeyboardInReginalLanguage',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
       var TwentySixCharacter="ಕ ,ಖ, ಗ ,ಘ, ಙ, ಚ, ಛ, ಜ, ಝ, ಝ,ಕ ,ಖ, ಗ ,ಘ, ಙ, ಚ, ಛ, ಜ, ಝ, ಝ,ಙ, ಚ, ಛ, ಜ, ಝ, ಝ,";
        resourcePageObj.Enter26CharactersInCustomKeyboardInReginalLanguage(TwentySixCharacter);
    })
});