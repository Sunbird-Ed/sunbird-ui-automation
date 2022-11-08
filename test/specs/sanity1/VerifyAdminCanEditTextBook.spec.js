const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityPage = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const etpPage=require(protractor.basePath + '/test/pageObject/etbPageObj.js')
describe('VerifyAdminCanEditTextBook', () => {

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
    it('VerifyAdminCanEditTextBook',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Admin3');
        etpPage.adminCanEditTextBook()
     
       
        
    })

   
   
});
