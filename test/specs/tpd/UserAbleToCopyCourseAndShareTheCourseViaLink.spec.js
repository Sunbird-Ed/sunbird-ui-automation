const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const shareTCPageObj = require(protractor.basePath+'/test/pageObject/collectionPageObj.js');

describe('Creator is able to copy course of same or different tenant and can share the course ', () => {

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
        browser.manage().deleteAllCookies();
        
    });
    
    it('UserAbleToCopyCourseAndShareTheCourseViaLink',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        var courseName = sanityFun.copyContentFromTraining('Course');
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview2(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        var courseName = sanityFun.copyContentFromTraining('Course');
        utility.userLogout();
        utility.userLogin('Public User1');
        shareTCPageObj.clickTrainingPage();
        shareTCPageObj.shareTheConentUsingLink(courseName);
        utility.userLogout();
    });
});
   

