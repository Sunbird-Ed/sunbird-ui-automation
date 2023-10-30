const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');
const VDNReg = require(protractor.basePath + '/test/pageObject/VDNSourcingwithTargetObj.js');

describe('Verify sourcing org admin is able to create the Project with 100 textbooks ', () => {

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
    it('verifySourcingOrgAdminisabletoCreateProjectwithDigitalTextBook',function(){
      
         utility.userCBSELogin('Admin');
         let projectName = VDNReg.createProjectWithNominationOpenSkipEnable();
         VDNReg.createProjectWith100DigitalTextBook(projectName);
         console.log(projectName);
         
        
    })  
});