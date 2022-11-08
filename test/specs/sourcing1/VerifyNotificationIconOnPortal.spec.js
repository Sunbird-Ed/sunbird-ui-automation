const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');



describe('verifyNotificationIconOnPortal' , () => {

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
    it('verifyNotificationIconOnPortal',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        browser.sleep(1000);
        //tpdPageObj.NotificationBellIconOnPortalBeforeLogin();
        browser.sleep(5000);
        utility.userLogin('Public User1');
        tpdPageObj.NotificationBellIconOnPortalAfterLogin();
       
      
        
         

      
    })

   
   
});
   
