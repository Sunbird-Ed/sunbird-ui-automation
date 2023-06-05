const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('Verify Content counts in Project without target collection ', () => {

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
    it('verifyUpdatedCountsInContentsForProjectWithoutTargetCollection',function(){
         utility.userLogin('Admin');
         let projectName = VDNfun.createProjectWithoutTargetCollection();
         console.log(projectName);
         utility.userLogout();
         utility.userLoginContributer('Admin');
         VDNfun.assignContributorAndReviewerRoleToTheProject(projectName);
         utility.userLogout();
         utility.userLoginContributer('Contributor');
         VDNfun.uploadContentFromContributorSide(projectName);
         VDNfun.uploadSecondContent(projectName);
         VDNfun.uploadThirdContent(projectName);
         VDNfun.uploadFourthContent(projectName);
         utility.userLogout();
         utility.userLoginContributer('ConReviewer');
         VDNfun.contentSentForApprovalFromReviewerSide(projectName);
         VDNfun.approveContent2(projectName);
         VDNfun.approveContent3(projectName);
         VDNfun.approveContent4(projectName);
         utility.userLogout();
         utility.userLoginSourcing('Admin');
         VDNfun.openCreatedProjectWithoutTargetCollection(projectName);
         VDNfun.contentsPublishRejectAndSendForCorrection(projectName);
         VDNfun.verifyUpdatedCountsUnderCourseContentPlaylistAndDigitalTextbooktab();

        
    })  
});