const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('verify Draft status in TOC page post adding question and save edit details', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/contribute';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    it('verifyDraftStatusInApprovedProject',function(){
         utility.userLogin('IndContUser');
         
         VDNfun.openApprovedProjectInMyProjectsForIndividualContributor();

         VDNfun.uploadContentAndVerifyDraftInTOCpage();
        
         
    })  
});