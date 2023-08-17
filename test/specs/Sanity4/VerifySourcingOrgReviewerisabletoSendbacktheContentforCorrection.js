const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('VerifySourcingOrgReviewerisabletoSendbacktheContentforCorrection', () => {

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
    it('verifySendbackforCorrectionCountUnderTextBookAndYourOrganisation',function(){
      
         utility.userLogin('Admin');
         let projectName = VDNfun.createProjectWithDigitalTextBook();
         console.log(projectName);
         utility.userLogout();
         utility.userLoginContributer('IndContUser');
         VDNfun.NominateContributer(projectName);
         utility.userLogout();
         utility.userLogin('Admin');
         VDNfun.verifySourcingAdminIsAbleToAcceptNomination(projectName);
         utility.userLogout();
         utility.userLoginContributer('IndContUser');
         VDNfun.uploadTheContentFromIndividualContributorSide(projectName);
         utility.userLogout();
         utility.userLoginContributer('Admin');
         VDNfun.sourcingAdminAbleToAssignReviewerRole1(projectName);
         utility.userLogout(); 
         utility.userLoginContributer('Reviewer');
         VDNfun.contentsPublishRejectAndSendForCorrection(projectName);
    
    })  
});