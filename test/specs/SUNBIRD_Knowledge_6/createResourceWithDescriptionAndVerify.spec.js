const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('createResourceWithDescriptionAndVerify.', () => {

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
    
    it('createResourceWithDescriptionAndVerify',function(){
        utility.handleDropDown();
        browser.sleep(30000);
        //utility.handleLocationPopup();
        utility.userLogin('Creator');
        let resourceName=resourcePageObj.createResource();
        resourcePageObj.sendForReviewTheResource();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(resourceName);
        utility.userLogout();
        utility.userLogin('Creator');
        lspPageObj.deleteCreatedItems();
    })
});