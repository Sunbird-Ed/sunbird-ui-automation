const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');

describe('validateExpiredCourseInMyLearningSectionCreateNewBatchAndConsumeValidateBothOngoingAndExpiredCourseInLearningSectionAgain', () => {
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
    
    it('validateExpiredCourseInMyLearningSectionCreateNewBatchAndConsumeValidateBothOngoingAndExpiredCourseInLearningSectionAgain', function () {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, "3");
        var expiredContent = cred[41]["Title"];
       
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.validateExpiredBatchInMyLearningSection(expiredContent);
        utility.userLogout();
        utility.userLogin('Creator');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(expiredContent);
        EnrollTBFCPageObj.createOpenBatch();
        utility.userLogout();
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.navigateToCourseAndSearchCourse(expiredContent);
        EnrollTBFCPageObj.validateAndConsumeOngoingContentAndAlsoValidateExpiredContentInMyLearningSection("AutomationExpiredCourse");     
    })
});