//const { protractor } = require("protractor/built/ptor");

const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const sanityPage=require(protractor.basePath+'/test/pageObject/SanityPageObj.js');
describe('verifyTheCourseCreatorAbleToCreateNewAnnouncement', () => {

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
        browser.close();

    });

    it('verifyTheCourseCreatorAbleToCreateNewAnnouncement ',function(){
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('submitDetails');
        sanityPage.verifyDiscussionForum();
    });
});