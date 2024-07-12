const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPage = require(protractor.basePath + '/test/pageObject/etbPageObj.js');

describe('AU_030,CreateBookInRegionalLanguageUsingTOCUploadAndDownload', () => {

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
    it('CreateBookInRegionalLanguageUsingTOCUploadAndDownload',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        sanityFun.createBookWithRegionalLanguage("ಕನ್ನಡ");
        sanityFun.createBookWithRegionalLanguage("தமிழ்");
        sanityFun.createBookWithRegionalLanguage("తెలుగు");
        sanityFun.createBookWithRegionalLanguage("हिन्दी");
        sanityFun.createBookWithRegionalLanguage("मराठी");
        sanityFun.createBookWithRegionalLanguage("অসমীয়া");
        sanityFun.dowloadSampleCSV();  
    }) 
});