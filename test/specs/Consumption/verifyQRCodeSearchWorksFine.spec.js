const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('verifyQRCodeSearchWorksFine', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().deleteAllCookies();
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
        
    });
    
    it('verifyQRCodeSearchWorksFine',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Mentor2');
        BookName=sanityFun.verifyQRCodeAtBookLevelAndUnitLevel();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        tpdPageObj.publishContentFromUpForReviewBucket(BookName);
        utility.userLogout();
        utility.userLogin('Public User1');
        tpdPageObj.verifyQRCodeSearchWorksFine();
       
    });
});