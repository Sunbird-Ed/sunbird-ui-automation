const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');

describe('Verify contributor org admin is able to search and assign Roles', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/sourcing';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    it('verifyContributorOrgAdminIsAbleToSearchAndAssignRoles',function(){
        utility.userLogin('Admin');
         let projectName = VDNfun.createProjectWithCourse();
         console.log(projectName);
         utility.userLogout();
         utility.userLoginContributer('Cont OrgAdmin');
         VDNfun.NominateContributer(projectName);
         utility.userLogout();
         utility.userLogin('Admin');
         VDNfun.verifySourcingOrgAdminIsAbleToAcceptNomination(projectName);
         utility.userLogout();
         utility.userLoginContributer('Cont OrgAdmin');
         VDNfun.verifyContributorOrgAdminIsAbleToSearchAndAssignRoles(projectName);
         
    })  
});
   