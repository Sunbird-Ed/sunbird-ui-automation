const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');


describe('Verify that the kebab menu and the text "Sync progress now" is displayed for old courses as well', () => {

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
    it('verifyThatTheKebabMenuAndTheTextSyncProgressNowIsDisplayedOldCourses',function(){
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.verifyThatTheKebabMenuAndTheTextSyncProgressNowIsDisplayedOldCourses();    
    });
});