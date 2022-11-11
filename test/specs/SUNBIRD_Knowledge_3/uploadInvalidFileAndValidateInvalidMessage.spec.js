const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('uploadInvalidFileAndValidateInvalidMessage', () => {
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

    it('uploadInvalidFileAndValidateInvalidMessage',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        //browser.sleep(20000);
        utility.userLogin('Creator');
        sanityFun.createBookWithUploadCsv();
        //sanityFun.verifyDownlaodedCSVFile();
        let  customfilepath = getAppURL.ConfigurePath().mp4File;
        sanityFun.uploadFile(customfilepath);
        sanityFun.validateInvalidUploadMessage();
    })
});