const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const collectionPageObj = require(protractor.basePath + '/test/pageObject/collectionPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('addSameContentToDifferentFoldersUnderDifferentCollectionType', () => {

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
    
    it('addSameContentToDifferentFoldersUnderDifferentCollectionType', function () {
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let collectionName1 = sanityfun.createCollectionWithDiffCollectionTypesToAddSameContentinContentPlaylistCollection("digitalTxtbook");
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishContentFromUpForReviewBucket(collectionName1);
        utility.userLogout();
        utility.userLogin('Creator');
        let collectionName2 = sanityfun.createCollectionWithDiffCollectionTypesToAddSameContentinQuestionPaperCollection("contentPlaylist");
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishContentFromUpForReviewBucket(collectionName2);
        utility.userLogout();
        utility.userLogin('Creator');
        let collectionName3 = sanityfun.createCollectionWithDiffCollectionTypesToAddSameContentinQuestionPaperCollection("questionPaper");
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishContentFromUpForReviewBucket(collectionName3);
    })
});