const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const collectionPageObj = require(protractor.basePath + '/test/pageObject/collectionPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const CreateIOBBAMAMFRASPageObj = require(protractor.basePath+'/test/pageObject/contentCreationPageObj.js');

describe('validateAndeditTextBookLiveCollectionFromDraftAndSendForReview', () => {
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
    
    it('validateAndeditTextBookLiveCollectionFromDraftAndSendForReview', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Admin2');
        let bookName= sanityfun.createBook();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName);
        utility.userLogout();
        utility.userLogin('Admin2');
        tpdPageObj.validateLivetextBookandEdit(collectionName);
        utility.userLogout();
    })
});