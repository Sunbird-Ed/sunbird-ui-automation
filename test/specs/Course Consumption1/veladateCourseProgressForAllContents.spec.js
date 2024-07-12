const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('veladateCourseProgressForAllContents', () => {

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

    it('veladateCourseProgressForAllContents', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let courseName = sanityfun.createCourseWithPdfMp4h5pAndytVedio();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        tpdPageObj.publishCourseFromUpForReview2(courseName);
        utility.userLogout();
        utility.userLogin('ContentCreator');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        tpdPageObj.createOpenBatch();
        utility.userLogout();
        utility.userLogin('Public User2');
        EnrollTBFCPageObj.navigateToCourseAndSearchForProgressValidation(courseName);
        EnrollTBFCPageObj.consumeContentsAndValidateProgress();
    })
});