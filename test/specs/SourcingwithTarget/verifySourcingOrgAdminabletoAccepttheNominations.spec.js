const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('Verify sourcing org admin is able to accept nomination ', () => {

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
    it('verifyUploadedSampleFileBySourcingOrgAdmin',function(){
               utility.userLogin('Admin');
         let projectName = VDNfun.createProjectWithAllContentTypes();
         console.log(projectName);
         utility.userLogout();
         utility.userLogin('Cont OrgAdmin');
         VDNfun.verifyProjectAvailableInAllProjectsTabForContributor(projectName);
         VDNfun.addSampleFromContriutionSideAndNominate(projectName);
         utility.userLogout();
         utility.userLogin('Admin');
         VDNfun.verifySourcingOrgAdminIsAbleToViewSamples(projectName);
    })  
});