const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePage = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');

describe('createCourseAssessWithSomeEditorValidation', () => {

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

    it('createCourseAssessWithSomeEditorValidationWithDisplayScoreYes',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        //browser.sleep(20000);
        utility.userLogin('Mentor2');
        resourcePage.createCourseAssessmentFordefaultDisplayScore();
    })
});