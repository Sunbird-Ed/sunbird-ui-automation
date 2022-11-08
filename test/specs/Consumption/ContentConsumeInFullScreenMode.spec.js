const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const cont = require(protractor.basePath+ '/test/pageObject/contentCreationPageObj.js');

describe('ConsumeContentInFullScreenMode play', () => {

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
    it('ContentConsumeInFullScreenMode',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        // utility.userLogin('Creator');
        // let contentName=resourcePageObj.createQuestionFITBWithAllStyles();
        // resourcePageObj.sendForReviewTheResource();
        // utility.userLogout();
        // utility.userLogin('Reviewer');
        // resourcePageObj.publishTheResourceFromUpForReview(contentName);
        // utility.userLogout();

        utility.userLogin('Public User1');
        cont.consumeContent(contentName);
    })
    
});
