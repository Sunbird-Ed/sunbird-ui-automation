const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const collectionPageObj = require(protractor.basePath + '/test/pageObject/collectionPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('Vefy content creator is able to add collaborators using the Add collaborator option while creating collection and remove collaborator also', () => {

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
    it('AddSearchAndRemoveCollaboratorAndTryToPublishCollection', function () {
                utility.handleDropDown();
                utility.handleLocationPopup();
        utility.userLogin('Creator');
        let collectionName = collectionPageObj.createCollectionAndSaveAsDraft();
        sanityfun.addCollborator(collectionName);
        sanityfun.removeCollboratortoDraftAndSaveBook(collectionName);
        //collectionPageObj.submitForReview();
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishContentFromUpForReviewBucket(collectionName);
    });
});
