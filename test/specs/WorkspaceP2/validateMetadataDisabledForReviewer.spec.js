const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const collectionPageObj = require(protractor.basePath + '/test/pageObject/collectionPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('validateMetadataDisabledForReviewer', () => {

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

    it('validateMetadataDisabledForReviewer', function () {
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let collectionName = collectionPageObj.createCollection();
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishContentFromUpForReviewBucket(collectionName);
        utility.userLogout();
        utility.userLogin('Creator');
        
        lspPageObj.deleteCreatedItems();
    })
});

