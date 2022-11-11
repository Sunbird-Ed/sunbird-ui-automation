const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');

describe('validateOrderOfContentInConsumptionForContentPlaylist', () => {
    
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

    it('validateOrderOfContentInConsumptionForContentPlaylist', function () {
        utility.handleDropDown();
        browser.sleep(20000);
        //utility.handleLocationPopup();
        utility.userLogin('Creator');
        let collectionName = sanityfun.createCollectionWithDiffCollectionTypes("contentPlaylist");
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(collectionName);
        utility.userLogout();
        utility.userLogin('Public User1');
        resourcePageObj.navigateToLibraryAndSearchContentAndValidateOrderContents(collectionName);
    })
});