const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const reso = require(protractor.basePath +'/test/pageObject/resourcePageObj.js')

describe('createCourseWithMp4PdfAndAssessment', () => {

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
    
    it('createCourseWithMp4PdfAndAssessment  ', function () {
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let courseName = sanityfun.createCourseWithPdfMp4AndCourseAssessment();
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('StateTenant');
        reso.userSltFiltersTabs();
    })
});