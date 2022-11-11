const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('userMemberAbleToCreateThreadInDFAndReplyOnTheSameThread', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().deleteAllCookies();
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    
    it('userMemberAbleToCreateThreadInDFAndReplyOnTheSameThread', function () {
        utility.handleDropDown();
        //browser.sleep(25000);
        utility.handleLocationPopup();
        utility.userLogin('NewCustUser1');
        let groupName = sanityfun.verifyAddActivitySearchedByKeywordAndEnblaForum("AutomationCourseCompletedBatch");
        sanityfun.validateAdminNameIsPresentOnTopAndMembersAreBelowToit();
        utility.userLogout();
        console.log(groupName);
        utility.userLogin('Public User1');
        sanityfun.validateUserAbletoCreateThreadAndReply(groupName);
    })
});