const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('Explicity registered contribution org admin should be able to assign the below mentioned users for the project ', () => {

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
    it('verifySourcingOrgAdminIsAbleToViewSampleAndAcceptNomination',function(){
      
         utility.userLogin('Admin');
         let projectName = VDNfun.createProjectWithoutTargetCollection();
         console.log(projectName);
         utility.userLogout();
         utility.userLogin('Cont OrgAdmin');
         VDNfun.verifyIndividualContributorIsAbleToNominateWithoutTargetCollectionWithSample(projectName);
         utility.userLogout();
         utility.userLogin('Admin');
         VDNfun.verifySourcingOrgAdminIsAbleToAcceptNominationWithoutTargetColl(projectName);
         utility.userLogout();
      
    })  
});
   
