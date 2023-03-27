const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EtbPageObj = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
const tpdPageObj = require(protractor.basePath +"/test/pageObject/tpdPageObj.js");

describe('validatReltrackableIsDisabledByDefault', () => {
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

    it('validatReltrackableIsDisabledByDefault',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin("ContentCreator");
        sanityFun.relNameNotAcceptsmoreThan120CharAndCannotLeftEmptyForBook();
    });
});