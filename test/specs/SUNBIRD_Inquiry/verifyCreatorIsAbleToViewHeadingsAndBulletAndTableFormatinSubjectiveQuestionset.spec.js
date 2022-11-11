const { resource } = require("selenium-webdriver/http");
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');


describe('Verify Creator Is Able To View Headings And Bullet And Table Format in Subjective Question set', () => {

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
    it('verifyCreatorIsAbleToViewHeadingsAndBulletAndTableFormatinSubjectiveQuestionset',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        resourcePageObj.verifyCreatorIsAbleToViewHeadingsAndBulletAndTableFormatinSubjectiveQuestionset();
       
    })
})
