const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('createBookWithCourseInLibraryByDoIdInsideUnitAndChildNode', () => {


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

    it('createBookWithCourseInLibraryByDoIdInsideUnitAndChildNode', function () {
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let data = tpdPageObj.createCourseAndReturnDoidAndCourseName();
        let course = data.courseName;
        let urldata = data.currentUrl;
        urldata.then(function (input){
        var doid = input.split("/")[6];
        utility.userLogout();
        utility.userLogin('Reviewer');
        utility.validateWorkspace();
        tpdPageObj.publishCourseFromUpForReview(course);
        utility.userLogout();
        utility.userLogin('Creator');
        let bookName = tpdPageObj.createBookAndAddCoursesInChildAndUnitLevel(doid,course);
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName)
        utility.userLogout();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        lspPageObj.deleteCreatedItems();
       })
    })
});