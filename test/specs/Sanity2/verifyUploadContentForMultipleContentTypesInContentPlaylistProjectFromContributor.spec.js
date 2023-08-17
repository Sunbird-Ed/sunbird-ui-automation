const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('Verify upload content with multiple content types for Content Playlist project', () => {

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
    it('verifyUploadContentForMultipleContentTypesInContentPlaylistProjectFromContributor',function(){
        utility.userLogin('Admin');
        let projectName = VDNfun.createContentPlaylistProjectWithMultilpleContentTypes();
        console.log(projectName);
        utility.userLogout();
        utility.userLoginContributer('IndContUser');
        VDNfun.NominateContributerWithMultipleContentTypes(projectName);
        utility.userLogout();
        utility.userLogin('Admin');
        VDNfun.verifySourcingAdminIsAbleToAcceptNomination(projectName);
        utility.userLogout();
        utility.userLoginContributer('IndContUser');
        VDNfun.uploadThePdfContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent(projectName);
        VDNfun.uploadTheh5pContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent(projectName);
        VDNfun.uploadThehtmlContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent(projectName);
        VDNfun.createCourseAssessmentContentFromIndividualContributorSide(projectName);
        //VDNfun.createPracticeQuestionSetFromIndContributorSide(projectName);

    })  
});