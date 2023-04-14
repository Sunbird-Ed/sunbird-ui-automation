const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj=require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj=require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const lspPageObj=require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
describe('upload Mp4, save and send for review and publish.', () =>{
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
        browser.close();

    });

    it('UploadContentTypeMp4AndVerify ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let uploadContent=uploadPageObj.uploadMp4();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(uploadContent);
        utility.userLogout();
        // utility.userLogin('Public User2');
        // resourcePageObj.ConsumeUploadContent(uploadContent,'EPUB');
        // utility.userLogout();
        // utility.userLogin('Creator');
        
        // lspPageObj.deleteCreatedItems();
    });
});