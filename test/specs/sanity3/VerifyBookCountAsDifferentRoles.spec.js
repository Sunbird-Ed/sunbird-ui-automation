const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
var bookCount;
describe('VerifyBookCountAsDifferentRoles', () => {

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

    
    it('VerifyBookCountAsDifferentRoles',function(){
        utility.handleDropDown();
        utility.handleLocationPopup(); 
        bookCount = verifyCEBpageobj.validateTextBookCount();  
    });
    // it('VerifyBookCountAsDifferentRoles',function(){
    //     browser.ignoreSynchronization = true;
    //     utility.handleLocationPopupAsStudent(); 
    //     verifyCEBpageobj.validateTextBookCountInDifferentRole(bookCount);
    // });
    // it('VerifyBookCountAsDifferentRoles',function(){
    //     browser.ignoreSynchronization = true;
    //     utility.handleLocationPopupAsOther(); 
    //     verifyCEBpageobj.validateTextBookCountInDifferentRole(bookCount);
    // });
});
   

