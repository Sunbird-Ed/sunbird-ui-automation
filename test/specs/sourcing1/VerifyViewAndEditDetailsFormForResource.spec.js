let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('VrifyViewAndEditDetailsFormForResource', () => {

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
    it('VerifyViewAndEditDetailsFormForResource',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let contentName=resourcePageObj.createQuestionFITBWithAllStyles();
        resourcePageObj.sendForReviewTheResource();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(contentName);
        
      

    });
});

