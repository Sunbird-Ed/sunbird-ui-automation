const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const addCAPRPageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');

describe('Content creator is able to add a collaborator in all the types of content.', () => {

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

    it('AddCollaboratorAndPublishResource', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let resourceName = resourcePageObj.createResource();
        resourcePageObj.addCollaboratorOnly();
        utility.userLogout();
        utility.userLogin('Creator');
        resourcePageObj.collaboratorSendTheResourceForReview(resourceName);
        resourcePageObj.sendForReviewTheResource();
        // utility.userLogout();
        // utility.userLogin('Reviewer');
        // resourcePageObj.publishTheResourceFromUpForReview(resourceName);
    })
});
