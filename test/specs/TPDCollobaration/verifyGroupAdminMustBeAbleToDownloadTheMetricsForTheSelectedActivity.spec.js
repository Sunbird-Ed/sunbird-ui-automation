const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
describe('Verify Group Admin must be able to download the Metrics for the selected activity', () => {

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
    
    it('verifyGroupAdminMustBeAbleToDownloadTheMetricsForTheSelectedActivity ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('OrgAdmin');
        EnrollTBFCPageObj.verifyDownlaodAsCSVMustBeDisplayedOnTheDashboard();
        EnrollTBFCPageObj.verifyDownlaodedCSVFileINDF();
    })
});