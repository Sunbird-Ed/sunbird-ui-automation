const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');



describe('verifyLicenseInEditPageCourse' , () => {

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
    it('verifyLicenseInEditPageCourse',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        browser.sleep(3000);
        utility.userLogin('Creator');
        tpdPageObj.createCourse();
        etbFun.verifyLicenceLabelInCourseEditPage();
        // let courseName=tpdPageObj.sendForReviewCourseWithName();
        // utility.userLogout();
        // utility.userLogin('Reviewer');
        //  

      
    })

   
   
});
   
