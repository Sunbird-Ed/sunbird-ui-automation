const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('Verify assigned Project contributor is able to upload content to the textbooks for the skip review disabled Project', () => {

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
    it('verifyContributorOrgAdminAlsoShouldBeAbleToReviewTheContent',function(){
         utility.userLogin('Admin');
         let projectName = VDNfun.createProjectWithAllContentTypes();
         console.log(projectName);
         utility.userLogout();
         utility.userLoginContributer('Cont OrgAdmin');
         VDNfun.verifyProjectAvailableInAllProjectsTabForContributor(projectName);
         VDNfun.NominateContributerWithUploadSample(projectName);
         utility.userLogout();
         utility.userLogin('Admin');
         VDNfun.verifySourcingOrgAdminIsAbleToAcceptNomination(projectName);
         utility.userLogout();
         utility.userLoginContributer('Cont OrgAdmin');
         //VDNfun.assignContributorOrgAdminToReviewerAndContributer(projectName);
         VDNfun.assignContributorOrgAdminToContributerRole(projectName);
         utility.userLogout();
         utility.userLoginContributer('Cont Only');
         VDNfun.verifyUploadContentStatusForAssignedContributer(projectName);
         VDNfun.uploadMoreContentForAction(projectName);
         utility.userLogout();
         utility.userLoginContributer('Cont OrgAdmin');
         //VDNfun.verifyCountAndStatusOnContributerOrgAdmin(projectName);
    })  
});
