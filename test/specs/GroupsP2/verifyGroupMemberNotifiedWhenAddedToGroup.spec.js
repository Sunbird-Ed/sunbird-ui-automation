const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('verifyGroupMemberNotifiedWhenAddedToGroup', () => {

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

    it('verifyGroupMemberNotifiedWhenAddedToGroup ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentReviewer');
        EnrollTBFCPageObj.switchToUserAndCopyUserID();
        utility.userLogout();
        utility.userLogin('Creator');
        EnrollTBFCPageObj.validateMemeberNotificationWhenAddedToGroup();
        utility.userLogout();
        utility.userLogin('Reviewer');
        EnrollTBFCPageObj.verifyNotificationBell();
    })
});