const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('verify Pending For Approval Status in Contribute post Nomination for Project with Digital Textbook', () => {

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
    it('verifyPendingForApprovalStatusForCreatedProjectWithTextbook',function(){
      
         utility.userLogin('Admin');
         let projectName = VDNfun.createProjectWithDigitalTextBook();
         console.log(projectName);
         utility.userLogout();
         utility.userLoginContributer('ContOrgAdmin');
         VDNfun.NominateContributer(projectName);
         VDNfun.verifyPendingApprovalStatusForProjectWithDigitalTextBook(projectName);

      })  
});