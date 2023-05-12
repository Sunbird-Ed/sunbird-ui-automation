const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');


describe('verify That The User Is Able To See With Endless Topics Just By scrolling Through The Page', () => {

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

    it('verifyThatTheUserIsAbleToSeeWithEndlessTopicsJustByscrollingThroughThePage',function(){
        utility.handleDropDown();
        //browser.sleep(30000);
        utility.handleLocationPopup();
        utility.userLogin('grouptestdemo');
        EnrollTBFCPageObj.visibleEndlessTopicsByScrollingThroughThePage();
    })
});