const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('verifyCreatorAbleToEditFramework', () => {

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
        //utility.userLogout();
        browser.manage().deleteAllCookies();
    });

    it('verifyCreatorAbleToEditFramework', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        utility.validateWorkspace();
        sanityfun.CreateCourseAndSaveAsDraft("CPD");
    });
});
