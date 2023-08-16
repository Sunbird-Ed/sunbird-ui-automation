const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
let getExcelPath = require(protractor.basePath + "/test/pathFolder/changePath.js");
const genericFun = require(protractor.basePath + "/test/genericFunctions/GenericFunction.js");

describe('Create Course save and send for review and publish.', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().deleteAllCookies();
        browser.manage().timeouts().implicitlyWait(30000);
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
        browser.close();
    });
    
    it('TryToRearrangeContentByReviewerSide', function () {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, "3");
        var contentname = cred[56]["CourseDescription"];
        browser.driver.manage().window().maximize();        
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Reviewer');
        tpdPageObj.tryToRearrangeContent(contentname);
    })
});