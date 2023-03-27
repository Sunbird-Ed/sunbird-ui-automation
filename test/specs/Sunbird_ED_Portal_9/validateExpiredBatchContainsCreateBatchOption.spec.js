const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('validateExpiredBatchContainsCreateBatchOption', () => {
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
        utility.userLogout();
        browser.manage().deleteAllCookies();
    });

    it('validateExpiredBatchContainsCreateBatchOption', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Public User2');
        tpdPageObj.navigateToCourseAndSearchForOpenBatchMessageAndValidate();
        utility.userLogout();
        utility.userLogin('ContentCreator');
        tpdPageObj.validateCreateBatchOptionIsEnableForExpiredBatch();
    });
});