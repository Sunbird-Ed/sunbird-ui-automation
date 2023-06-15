const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdobj = require(protractor.basePath+'/test/pageObject/contentCreationPageObj.js');
const resource = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');


describe('aApplyAdvancedFilterAndToggleQuestion', () => {

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
    it('SearchQuestionInEnglishLanguageByAdvanceFilter', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        tpdobj.applyFilterAndToggleQuestion();
        resource.SearchQuestionInQuestionSetPage('English');
    });




});

