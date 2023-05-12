const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('bookCreatorAbleToEditContentByCopyingAndValidateTheUpdatedDetails', () => {

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

    it('bookCreatorAbleToEditContentByCopyingAndValidateTheUpdatedDetails', function () {
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        let bookName= sanityfun.createBook();
        utility.userLogout();
        utility.userLogin('Book Reviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName);
        utility.userLogout();
        utility.userLogin('Book Creator');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(bookName);
        let copyOfBookName = tpdPageObj.clickCopyContentInBook();
        utility.userLogout();
        utility.userLogin('Book Reviewer');
        tpdPageObj.publishCourseFromUpForReview(copyOfBookName);
        utility.userLogout();
        utility.userLogin('Book Creator');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(copyOfBookName);
        tpdPageObj.validateLiscenceInfo();
    })
});