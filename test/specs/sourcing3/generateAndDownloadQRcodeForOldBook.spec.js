const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('generateAndDownloadQRcodeForOldBook', () => {


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
    it('generateAndDownloadQRcodeForOldBook', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        let bookName = sanityfun.createBookSaveAsDraft();
        utility.userLogout();
        //let bookName = "BookBSanford";
        utility.userLogin('Book Creator');
        tpdPageObj.dwnldAndGenerateQRinBookFromDraft(bookName);
        utility.userLogout();
        utility.userLogin('Book Creator');
        //let bookName ="BookBMaximilian";
        utility.userLogin('Book Reviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName);
        utility.userLogout();
        utility.userLogin('Book Creator');
        tpdPageObj.dwnldAndGenerateQRinBookFromPublish(bookName);
    })
});