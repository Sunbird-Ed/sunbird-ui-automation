const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('Verify creator is able to enter the marks in the Marks field', () => {

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
    it('verifyTotalScoreIsCorrectAndItShouldBeTheSumOfScoreOfSection1And2WithShuffleDisable',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator1');
        resourcePageObj.createQuestionSetWithShuffleEnableOn2Sections();
        resourcePageObj.verifySumOf2SectionsWithShuffleEnabeOnBothTheSec();
    }) 
});