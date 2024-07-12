const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('Verify by default individual questions mark is made as one and the marks displayed at the end summary screen is the selected sum of correct answer provided by the user in nominator and sum of total question marks in denominator when creating it on workspace', () => {

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
    it('verifyTotalScoreDisplayedAtTheEndScreenIsSumOfTotalScoreOfSection1AndSection2ProvidedByUserWhenCreatingForShuffleEnable',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator1');
        resourcePageObj.createQuestionSetWithShuffleEnableOn2Sections();
        resourcePageObj.verifyTotalScoreDisplayedAtTheEndScreenIsSumOf2SectionsWithShuffleEnabeOnBothTheSec();
    }) 
});