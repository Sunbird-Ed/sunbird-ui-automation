const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const collectionPo = require(protractor.basePath +'/test/pageObject/collectionPageObj.js');
describe('addChildSiblingNodeInContentPlaylist', () => {


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
        utility.userLogout();
        browser.manage().deleteAllCookies();

    });

    it('addChildSiblingNodeInContentPlaylist', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        collectionPo.createCollectionWithDiffCollectionTypes("contentPlaylist");
        utility.userLogout();
        utility.userLogin('Creator');
        tpdPageObj.addChildAndSiblingNode();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview();
    })
});