const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');
const cont = require(protractor.basePath+ '/test/pageObject/contentCreationPageObj.js');

describe('openDraftLiveBookAndUpdateChildNodesWithQrCodeOfDiffTenant', () => {
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
    
    it('openDraftLiveBookAndUpdateChildNodesWithQrCodeOfDiffTenant', function () {
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let bookName = sanityfun.createBookAndAddQrCode();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName);
        utility.userLogout();
        utility.userLogin('ContentCreator');
        cont.verifyPublishedContentInDraftVersionAndValidateInLibrary(bookName);
    })
});