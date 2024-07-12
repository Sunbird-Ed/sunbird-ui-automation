const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
describe('User is redirected to the conversation flow screen with no logic added and a button to Add logic', () => {

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
    it('userClicksOnBackInConversationFlowScreen',function(){
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('OrgAdmin');
        EnrollTBFCPageObj.verifyCommunicationConsole();
        EnrollTBFCPageObj.userClicksOnAddNewToAddDetailsOfANewConversation();
        EnrollTBFCPageObj.userProvidesMandatoryAndOptionalOnTheConversationListingScreen();
        EnrollTBFCPageObj.userProvidesMandatoryAndOptionalOnTheConversationListingAndClickNext();
        EnrollTBFCPageObj.userClicksOnBackInConversationFlowScreen();
    })
});