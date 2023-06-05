const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('Verify sourcing org admin is able to assign reviewer to the below mentioned Project from assign users tab', () => {

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
    it('verifySourcingOrgAdminIsAbleToModifyProjectDatesOnContribution',function(){
      
         utility.userLogin('Admin');
         let projectName = VDNfun.createProjectWithCourse();
         console.log(projectName);
         utility.userLogout();
         utility.userLoginContributer('Cont OrgAdmin');
         VDNfun.NominateContributer(projectName);
         utility.userLogout();
         utility.userLogin('Admin');
         VDNfun.verifySourcingOrgAdminIsAbleToAcceptNomination(projectName);
         VDNfun.verifySourcingOrgAdminIsAbleToModifyProjectDates(projectName);
         utility.userLogout();
         utility.userLoginContributer('Cont OrgAdmin');
         VDNfun.assignOrgContributorAndOrgReviewerToCreatedProject(projectName);
         utility.userLogout();
         utility.userLoginContributer('Both Role');
         VDNfun.verifyModifiedProjectDatesOnProjectDetails(projectName);
         utility.userLogout();
         utility.userLoginContributer('Public User1');
         VDNfun.verifyModifiedProjectDatesOnProjectDetails(projectName);
         

    })  
});