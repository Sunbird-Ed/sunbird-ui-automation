const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('downloadSampleCSVaddSomeInformationwithBlankRowsColumnAndValidateErrorMsg', () => {
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

    it('downloadSampleCSVaddSomeInformationwithBlankRowsColumnAndValidateErrorMsg',function(){
        // utility.handleDropDown();
        // utility.handleLocationPopup();
        // //browser.sleep(20000);
        // utility.userLogin('Creator');
        // sanityFun.createBookWithUploadCsv();
        // sanityFun.writeToCsvFile("qualitrix");
        // browser.sleep(8000);
        // var filename = getAppURL.ConfigurePath().downloadLocalPath + "createfoldersamplecsvfile.csv";
        // sanityFun.uploadFile(filename);
        // sanityFun.validateInvalidUploadMessage();




        utility.handleDropDown();
        //utility.handleLocationPopup();
        browser.sleep(20000);
        utility.userLogin('Creator');
        sanityFun.createBookWithUploadCsv();
        sanityFun.writetofile();
        // sanityFun.writeToCsvFile("qualitrix");
        // browser.sleep(8000);
        // var filename = getAppURL.ConfigurePath().downloadLocalPath + "createfoldersamplecsvfile.csv";
        // sanityFun.uploadFile(filename);
        // sanityFun.validateInvalidUploadMessage();
    })
});