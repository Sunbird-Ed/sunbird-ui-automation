const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');


describe('validateCreateBatchInExpiredBatch', () => {

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

    it('validateCreateBatchInExpiredBatch',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Public User1');
        let do_id = tpdPageObj.navigateToCourseAndSearchExpiredBatches();
        utility.userLogout();
        utility.userLogin('ContentCreator');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(do_id);
        tpdPageObj.validateCreateBatchOption();
    })
});
   
