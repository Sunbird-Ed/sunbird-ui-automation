const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const VDNReg = require(protractor.basePath + '/test/pageObject/VDNSourcingwithTargetObj.js');
//const VDNfun = require(protractor.basePath + '/test/pages/VDNPage/VDNPageObj.js');


describe('Verify sourcing org admin is able to assign reviewer to the below mentioned Project from assign users tab', () => {

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
    it('verifySourcingOrgAdminIsAbleToModifyProjectDates',function(){    
        utility.userLogin('Admin');
        
          let projectName = VDNReg.verifySourcingOrgAdminIsAbleToModifyProjectDates();
        //  console.log(projectName);
        //  utility.userLogout();    
    })  
});
   
