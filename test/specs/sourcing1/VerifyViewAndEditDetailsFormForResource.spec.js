let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');

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
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let contentName=resourcePageObj.createQuestionFITBWithAllStyles();
        resourcePageObj.sendForReviewTheResource();
        utility.userLogout();
        utility.userLogin('Reviewer');
        //let contentName = "do_21337527559235174411623"
        resourcePageObj.publishTheResourceFromUpForReview(contentName);
        utility.userLogout();
        utility.userLogin('Public User1');
        resourcePageObj.ConsumeResourceAndValidateScoreForFITB(contentName);
      

    });
});

