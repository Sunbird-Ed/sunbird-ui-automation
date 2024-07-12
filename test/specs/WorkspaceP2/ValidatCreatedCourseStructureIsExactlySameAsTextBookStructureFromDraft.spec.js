const { browser } = require('protractor');

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const EtbPageObj = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getExcelPath = require(protractor.basePath + "/test/pathFolder/changePath.js");
const genericFun = require(protractor.basePath + "/test/genericFunctions/GenericFunction.js");


describe('CopyBookAsCourseAndSendForReview', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });

    it('ValidatCreatedCourseStructureIsExactlySameAsTextBookStructureFromDraft', function () {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
var cred = genericFun.readParticularDataFromExcelFile(sheetPath, "3");
var fetchTextbook = cred[54]["CourseDescription"];
        utility.handleDropDown();
            utility.handleLocationPopup();
            utility.userLogin('ContentCreator');
            sanityFun.passBookFromMethod(fetchTextbook);
            sanityFun.validateCourseStructureFromDraft();
        })
    });