const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resource = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('FilterRetainedUntilUserRefreshes', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();
       
    });
    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    it('FilterChangeShouldbePersistedForSession',function(){
        utility.handleDropDown();
                utility.handleLocationPopup();
        utility.userLogin('Creator');
        resource.filterRetainedFromHomeTabToAnother();
    })
});