const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');



describe('VerifyNewCertificateTemplateCreation' , () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    });
    afterEach(() => {
        browser.waitForAngularEnabled(false);
        utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    it('VerifyNewCertificateTemplateCreation',function(){
        utility.handleLocationPopup();
        browser.sleep(15000);
        utility.userLogin('Creator');
       
        utility.validateWorkspace();
        tpdPageObj.createCourse();
        let coursename=tpdPageObj.sendForReviewCourseWithName();
        utility.userLogout();

        utility.userLogin('Reviewer');
        utility.validateWorkspace();
        tpdPageObj.publishTheCourseFromUpForReview(coursename);
        utility.userLogout();

        
        utility.userLogin('Creator');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(coursename);
        tpdPageObj.createOpenBatch();
        utility.userLogout();

        utility.userLogin('Public User1');
        tpdPageObj.ExpiredBatchVisible(coursename);
        utility.userLogout();

        utility.userLogin('Creator');
        lspPageObj.deleteCreatedItems();
        
         

      
    })

   
   
});
   
