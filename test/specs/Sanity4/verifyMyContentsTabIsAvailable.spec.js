const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');

describe('Verify My Contents tab is available', () => {

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
    it('verifyMyContentsTabIsAvailable',function(){
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
         VDNfun.OpenAprovedProjectAndAssignContributeRole();
         VDNfun.verifyMyContentsTabIsAvailable();
         utility.userLogoutContribute(); 
         utility.userLoginContributer('Contribution OrgContributor');
         VDNfun.verifyMyContentsTabIsAvailable();
         utility.userLogoutContribute(); 
         utility.userLoginContributer('Public User1');
         VDNfun.verifyMyContentsTabIsAvailable();
       
    })  
});
   
