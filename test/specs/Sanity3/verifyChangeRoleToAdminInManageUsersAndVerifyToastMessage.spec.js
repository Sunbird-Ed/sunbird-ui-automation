const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('verify Change of Role to Admin and verify Toast message post change of Role', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/contribute';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    it('verifyChangeRoleToAdminInManageUsersAndVerifyToastMessage',function(){
         utility.userLogin('Cont OrgAdmin');
         VDNfun.changeToAdminRoleInManageUsersTab();
         utility.userLogout();
         utility.userLoginContributer('ConOrgAdmin1');
         VDNfun.verifyManageUsersAndAllProjectsTabPostRoleChangedToAdmin();
         utility.userLogout();
         utility.userLoginContributer('Cont OrgAdmin');
         VDNfun.changeToUserRoleInManageUsersTab();
         utility.userLogout();
         utility.userLoginContributer('ConOrgAdmin1');
         VDNfun.verifyNoManageUsersAndAllProjectsTabPostRoleChangedToUser();
         
    })  
});