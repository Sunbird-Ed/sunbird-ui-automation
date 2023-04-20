const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js')
const sanityfun =require(protractor.basePath+'/test/pageObject/SanityPageObj.js');

describe('verifyUIisWorkingFineAfterSelectingAllOptionInEditor', () => {

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
    it('verifyUIisWorkingFineAfterSelectingAllOptionInEditor',function(){
        utility.handleDropDown();
                utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let courseName = sanityfun.TargetFrameworkWithMultipleCategoricalValues("CPD");
        utility.userLogout();
        console.log(courseName);
        utility.userLogin('ContentReviewer');
        tpdPageObj.publishContentFromUpForReviewBucket2(courseName);
        utility.userLogout();
        utility.userLogin('ContentCreator');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        tpdPageObj.createOpenBatch();
        utility.userLogout();
        utility.userLogin('Public User2');
        tpdPageObj.consumeContentToCheckUIisNotCrashing(courseName);
    })
});