const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj = require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('Verify that the Any changes(added/Removed) contents  done to the added course then it should reflect in textbook once after republishing the textbook', () => {

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

    it('verifyThatAnyChangesDoneShouldReflectInTextbookOnceAfterRepublishingTheTextbook',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        tpdPageObj.openPublishedBook();
        utility.userLogout();
        utility.userLogin('Book Reviewer');
        tpdPageObj.publishContent('DontDelete');
    })
});
