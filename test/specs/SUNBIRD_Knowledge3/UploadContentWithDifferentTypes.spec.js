const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('UploadContentWithDifferentTypes', () => {

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

    it('UploadContentWithDifferentTypes',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let contentName=resourcePageObj.createQuestionFITBWithAllStyles();
        resourcePageObj.sendForReviewTheResource();
        utility.userLogout();
        console.log(contentName);
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(contentName);
        utility.userLogout();
    })
});