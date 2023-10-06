const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('Default contribution org contributor should be able to upload the content for skip review enabled project', () => {

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
    it('verifyDefaultContributionOrgAdminIsAbleAssignRolesWithOpenNomination',function(){
         utility.userLogin('Admin');
         let projectName = VDNfun.createCourseProjectWithSkipReviewEnabled();
         //let projectName = VDNfun.createProjectWithAllContentTypes();
         console.log(projectName);
         utility.userLogout();
         utility.userLoginContributer('Admin');
         VDNfun.verifydefaultContributorOrgAdminIsAbleToSearchAndAssignRoles(projectName);
        //  utility.userLogout();
        //  utility.userLoginContributer('Default Cont');
        //  VDNfun.DefaultContributionOrgContributorIsAbleToUploadContentForSkipReviewEnabled(projectName);
        //  utility.userLogout();
    })  
});