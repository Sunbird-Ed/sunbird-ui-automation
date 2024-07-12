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

    it('Enter26CharactersInCustomKeyboardInEnlishLanguage',function(){
      
     utility.handleDropDown();
       utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
       var TwentySixCharacter="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
        resourcePageObj.Enter26CharactersInCustomKeyboardInEnglishLanguage(TwentySixCharacter);
    })
});