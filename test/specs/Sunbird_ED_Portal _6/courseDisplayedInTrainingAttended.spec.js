const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const ccPageObj = require(protractor.basePath + '/test/pageObject/contentCreationPageObj.js');


describe('courseDisplayedInTrainingAttended', () => {

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
    it('courseDisplayedInTrainingAttended',function(){
        utility.handleDropDown();
         utility.handleLocationPopup();
         utility.userLogin('Mentor');
         ccPageObj.trainingAttendedIsAvailableInProfilePage();
       
       
    });
    
    

 
});
   
