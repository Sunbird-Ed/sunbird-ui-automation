const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath +'/test/pageObject/resourcePageObj.js');
const uploadPageObj = require(protractor.basePath +'/test/pageObject/uploadPageObj.js');
const lspPageObj = require(protractor.basePath +'/test/pageObject/lessonPlanPageObj.js');
const contentPo = require(protractor.basePath +'/test/pageObject/contentCreationPageObj.js');

describe('verifyContentInformation', () => {
    
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
    
    it('verifyContentInformation',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Public User1');
        utility.validateWorkspace();
        contentPo.validateContentDetails();
        
    })
});
   
