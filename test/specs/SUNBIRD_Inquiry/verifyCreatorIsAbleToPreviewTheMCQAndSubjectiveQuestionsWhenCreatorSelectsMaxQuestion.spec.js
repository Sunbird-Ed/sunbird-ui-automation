const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Verify After selecting questions in Max question, Creator is able to  preview only selected number of questions', () => {

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
    it('verifyCreatorIsAbleToPreviewTheMCQAndSubjectiveQuestionsWhenCreatorSelectsMaxQuestion ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        resourcePageObj.createMultipleMCQAndSubjectiveQuestions();
        resourcePageObj.verifyCreatorIsAbleToSelectCountOfQuestions();
        resourcePageObj.PreviewOnlySelectedNumberOfQuestions();
        
    })  
});