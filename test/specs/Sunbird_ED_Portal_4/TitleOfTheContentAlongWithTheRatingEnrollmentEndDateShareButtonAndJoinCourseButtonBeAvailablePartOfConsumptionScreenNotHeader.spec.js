const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('TitleOfTheContentAlongWithTheRatingEnrollmentEndDateShareButtonAndJoinCourseButtonBeAvailablePartOfConsumptionScreenNotHeader', () => {

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

    it('TitleOfTheContentAlongWithTheRatingEnrollmentEndDateShareButtonAndJoinCourseButtonBeAvailablePartOfConsumptionScreenNotHeader', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Public User1');
        let courseName = "do_213426415570976768143";
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        tpdPageObj.validateConsumptionScreen();
        utility.userLogout();
    })
});

