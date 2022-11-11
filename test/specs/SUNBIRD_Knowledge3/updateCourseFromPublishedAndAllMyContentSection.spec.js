const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('updateCourseFromPublishedAndAllMyContentSection', () => {


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
    it('updateCourseFromPublishedAndAllMyContentSection', function () {
        utility.handleDropDown();
        //browser.sleep(30000);
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        //utility.validateWorkspace();
        let courseName = sanityfun.createCourseAndSendForReview();
        console.log(courseName);
        utility.userLogout();
        utility.userLogin('Reviewer');
        //utility.validateWorkspace();
        tpdPageObj.publishContentFromUpForReviewBucket(courseName)
        utility.userLogout();
        utility.userLogin('Creator');
        //let courseName="courseCVincenza";
        tpdPageObj.EditTargetFrameworkWithMultipleCategoricalValues(courseName);
        tpdPageObj.EditDraftedTargetFrameworkWithMultipleCategoricalValues(courseName);
        
    })
});

