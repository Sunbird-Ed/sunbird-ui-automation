const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const sanityPage=require(protractor.basePath+'/test/pageObject/SanityPageObj.js');
describe('Verify if user click of Tag menu, when there are no tags available, user is shown with “No tags available” message on portal', () => {

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
    it('verifyThatUserIsAbleToParticipateInDiscussionsInTheDFForGroups ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.verifyThatUserIsAbleToParticipateInDiscussionsInTheDFForGroups();
    })
});