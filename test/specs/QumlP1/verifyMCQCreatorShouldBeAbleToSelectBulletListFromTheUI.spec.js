const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Verify during creating MCQ type content from QUML player Creator should be able to select Bullet list from the User interface', () => {

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
    it('verifyMCQCreatorShouldBeAbleToSelectBulletListFromTheUI ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        resourcePageObj.verifyMCQCreatorShouldBeAbleToSelectBulletListFromTheUI();
        // resourcePageObj.createQuestionSetWithDifferentLayouts();
        // resourcePageObj.verifTypeOfLayoutCreated();
        // resourcePageObj.verifyCreatorIsAbleToPreviewTheQuestionSet();
        
    })  
});