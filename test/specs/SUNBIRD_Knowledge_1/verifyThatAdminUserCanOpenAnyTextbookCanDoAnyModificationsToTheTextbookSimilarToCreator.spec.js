const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj = require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('verifyThatAdminUserCanOpenAnyTextbookCanDoAnyModificationsToTheTextbookSimilarToCreator', () => {

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

    it('verifyThatAdminUserCanOpenAnyTextbookCanDoAnyModificationsToTheTextbookSimilarToCreator',function(){
        utility.handleDropDown();
        browser.sleep(30000);
        //utility.handleLocationPopup();
        utility.userLogin('Creator');
        tpdPageObj.openAndVerifyAllTextBookTab();
    })
});