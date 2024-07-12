const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('Verifiy user is getting add user option in his profile and able to switch to multiple users ', () => {

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
    it('verifyThatTheActionButtonLabelAttachedToTrackableCollections',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Trackable');
        verifyCEBpageobj.addUserInProfile();
        utility.handleDropDown();  
        EnrollTBFCPageObj.verifyThatTheActionButtonLabelAttachedToTrackableCollections();
    })  
});
   
