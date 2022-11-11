const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('membersNotifiedWhenGroupIsDeleted', () => {

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
    
    it('membersNotifiedWhenGroupIsDeleted ',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Admin3');
        let groupName = EnrollTBFCPageObj.addMemeberByUserId();
        EnrollTBFCPageObj.deleteGroup();
        utility.userLogout();
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.verifyNotificationBell();
    })
});