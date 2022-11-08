const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('validateRecentlyPublishedCoursesLabel', () => {

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

    it('validateRecentlyPublishedCoursesLabel', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let courseName = sanityfun.createCourseAndSendForReview();
        utility.userLogout();
        utility.userLogin('Reviewer');
        utility.validateWorkspace();
        let courseName = tpdPageObj.publishCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        tpdPageObj.createOpenBatch();
        utility.userLogout();
       // let courseName = "cert";
        utility.userLogin('User');
        tpdPageObj.recentlyPublishedCourse(courseName);
        utility.userLogout();
    })
});

