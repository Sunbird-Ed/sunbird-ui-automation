const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
describe('Verify Downlaod as CSV must be displayed on the dashboard', () => {

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
    it('verifyDownlaodAsCSVMustBeDisplayedOnTheDashboard ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('OrgAdmin');
        EnrollTBFCPageObj.verifyDownlaodAsCSVMustBeDisplayedOnTheDashboard();
     
    })
});