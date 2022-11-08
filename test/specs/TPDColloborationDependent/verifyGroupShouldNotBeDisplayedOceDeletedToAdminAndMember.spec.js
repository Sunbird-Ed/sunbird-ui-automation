const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
describe('verify Deleted Group Not Available the Admin and Members on the dashboard', () => {

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
    it('verifyDeletedGroupNotAvailableForAdminAndMembers ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('DeleteGroup1');
        EnrollTBFCPageObj.openExistingGroup();
        EnrollTBFCPageObj.deleteExistingGroup();
        utility.userLogout();
        utility.userLogin('DeleteGroup1');
        EnrollTBFCPageObj.verifyDeletedGroupNotAvailable();
        utility.userLogout();
        utility.userLogin('deleteMember1');
        EnrollTBFCPageObj.verifyDeletedGroupNotAvailable();

     
    })
});