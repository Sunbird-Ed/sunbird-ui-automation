const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('createBookAndInsideTocValidateTheCreatedNodesAndTheSequence', () => {
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
    
    it('createBookAndInsideTocValidateTheCreatedNodesAndTheSequence', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let bookName = sanityfun.createBookSaveAsDraft();
        utility.userLogout();
        utility.userLogin('ContentCreator');
        tpdPageObj.contentSearchInDraftAndUpdateChildNode(bookName);
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName);
        utility.userLogout();
        utility.userLogin('Public User2');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(bookName);
        var fetchCoursename = EnrollTBFCPageObj.enrollForOpenBatchandValidateNodes();
    })
});