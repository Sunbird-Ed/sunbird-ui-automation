const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const useronBoard = require(protractor.basePath+'/test/pageObject/UserOnBoardingPageObj.js');

describe('GuestProfileVerification', () => {

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
    it('GuestProfileVerification',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        useronBoard.clkProfileForGuestUsers();
        
      
    })
    
});