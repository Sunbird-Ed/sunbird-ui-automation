const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('Verify skip review enabled project with digital textbook  ', () => {

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
    it('verifySendbackCorrectionsAndRejectBtnsNotDisplayedForSkipReviewEnabledProject',function(){
         utility.userLogin('Admin');
         let projectName = VDNfun.createProjectWithDigitalTextBookSkipReviewEnabled();
         console.log(projectName);
         utility.userLogout();
         utility.userLoginContributer('Admin');
         VDNfun.assignContributorAndReviewerRoleToTheProject(projectName);
         utility.userLogout();
         utility.userLoginContributer('Contributor');
         VDNfun.uploadContentFromAssignedContributor(projectName);
         utility.userLogout();
         utility.userLoginContributer('ConReviewer');
        VDNfun.verifyAcceptRequestChangesNotAvailableInReviewerSide(projectName); 
        

        
    })  
});