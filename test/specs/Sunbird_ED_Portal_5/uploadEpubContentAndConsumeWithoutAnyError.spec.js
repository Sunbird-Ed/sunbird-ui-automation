const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj=require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj=require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const lspPageObj=require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
describe('uploadEpubContentAndConsumeWithoutAnyError', () =>{
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
    
    it('uploadEpubContentAndConsumeWithoutAnyError  ',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let uploadContent=uploadPageObj.uploadEpub();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(uploadContent);
        utility.userLogout();
        //let content = "Resourcever";
        utility.userLogin('Public User1');
        resourcePageObj.consumePDFepubContent(uploadContent);
        // utility.userLogout();
        // utility.userLogin('Creator');
        // utility.validateWorkspace();
        // lspPageObj.deleteCreatedItems();
    });

});
