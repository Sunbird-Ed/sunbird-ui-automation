const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('groupMembersConsumeContentAndValidateProgressBarInActivityDashboard', () => {

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
        browser.close();
    });
    
    it('groupMembersConsumeContentAndValidateProgressBarInActivityDashboard', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let data = tpdPageObj.createCourseAndReturnDoidAndCourseNameForGroup();
        let course = data.courseName;
        let urldata = data.currentUrl;
        urldata.then(function (input) {
        var doid = input.split("/")[6];
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(course);
        utility.userLogout();
        utility.userLogin('NewCredCourseToc');
        sanityfun.verifyAddActivitySearchedByKeyword(course);
        sanityfun.clickOnActivityInGroupAndValidateProgressBar();
        utility.userLogout();
        utility.userLogin('Public User2');
        sanityfun.clickAddedActivityAndConsume();
        utility.userLogout();
        utility.userLogin('NewCredCourseToc');
        sanityfun.validateProgressBarAfterConsumingCourse();
    })
  })
})