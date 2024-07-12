const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
let getExcelPath = require(protractor.basePath + "/test/pathFolder/changePath.js");
const genericFun = require(protractor.basePath + "/test/genericFunctions/GenericFunction.js");
const collectionPageObj = require(protractor.basePath + '/test/pageObject/collectionPageObj.js');

describe('Create Course save and send for review and publish.', () => {
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
    
    it('TryToRearrangeCollectionByReviewerSide', function () {      
        utility.handleDropDown();
        utility.handleLocationPopup();
        // utility.userLogin('Creator');
        // let collectionName = collectionPageObj.createCollection();
        // utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.tryToRearrangeContent('do_21381910336662732819');
    })
});