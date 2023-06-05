const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('Verify project with approved status in My projects tab  for Individual Contributor', () => {

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

    it('verifyApprovedNominationStatusForIndividualContributor',function(){
               utility.userLogin('Admin');
                let projectName = VDNfun.createProjectWithIndividualContributor();
                 utility.userLogout();
                 utility.userLoginContributer('IndContUser');
                 VDNfun.verifyApprovedStatusForProjectWithIndividualContributor(projectName);

                })  
   
});