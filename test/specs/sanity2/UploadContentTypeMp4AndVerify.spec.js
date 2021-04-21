const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj = require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('upload Mp4, save and send for review and publish.', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(40000);
        browser.driver.manage().window().maximize(); 
       
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    it('UploadContentTypeMp4AndVerify ',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let uploadContent=uploadPageObj.uploadMp4();
        utility.userLogout();
        utility.userLogin('Reviewer');
       resourcePageObj.publishTheResourceFromUpForReview(uploadContent);
           utility.userLogout();

        utility.userLogin('Public User1');
        resourcePageObj.ConsumeUploadContent(uploadContent,'MP4');
        utility.userLogout();

       utility.userLogin('Creator');
       utility.validateWorkspace();
       lspPageObj.deleteCreatedItems();
       
    })

   
});
   
