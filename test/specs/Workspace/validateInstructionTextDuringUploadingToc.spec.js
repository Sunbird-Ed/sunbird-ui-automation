const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
let readWrite = require(protractor.basePath + '/test/genericFunctions/readWriteUploadCsv.js');

describe('validateInstructionText', () => {
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
        let filename =readWrite.openRecentDownloadedTocAndValidateAndWrite("Collection");
        readWrite.uploadRecentDownloadedFile()
        browser.manage().deleteAllCookies();
    });
    
    it('validateInstructionText',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        sanityFun.downloadTocInCSVFormatEditandUpload();
    });
});