const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj = require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('Verify that the latest relevant live contents are available in the add from library page by default', () => {

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

    it('verifyThatLatestRelevantLiveContentsAreAvailableInTheAddFromLibraryPage',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        tpdPageObj.createBookAndVerifyLatestRelevantLiveContentsAvailable();
    })
});
