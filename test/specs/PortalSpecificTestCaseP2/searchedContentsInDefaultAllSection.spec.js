const { contentCreation } = require("../../pages/contentCreation/contentCreation.po");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/etbPageObj.js');
const content = require(protractor.basePath + '/test/pageObject/contentCreationPageObj.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');


describe('searchedContentsInDefaultAllSection', () => {

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
    it('searchedContentsInDefaultAllSection', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let searchedContentName = content.searchedContentsDefaultALLtab("Resource");
        console.log(searchedContentName);
    })
});

