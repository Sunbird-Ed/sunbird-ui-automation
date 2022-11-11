const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Add timer Plugin in Resource Edior', () => {

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
    it('AddTimerInResource',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
            let contentName=resourcePageObj.createQuestionMCQWithFormualAndAllStyles();
        resourcePageObj.addPluginActivtyInResourceEditor('Timer');
        resourcePageObj.addTimerInResourceEditor();
        resourcePageObj.sendForReviewTheResource();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(contentName);
        utility.userLogout();
        // utility.userLogin('Public User1');
        // resourcePageObj.ConsumeResourceAndValidateScoreForMCQ(contentName);
      
      
    })
    
});
