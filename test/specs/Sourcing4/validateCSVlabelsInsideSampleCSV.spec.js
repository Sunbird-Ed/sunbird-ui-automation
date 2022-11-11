const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('validateCSVlabelsInsideSampleCSV', () => {

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

    it('validateCSVlabelsInsideSampleCSV',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        //browser.sleep(20000);
        utility.userLogin('Creator');
        sanityFun.createBookWithUploadCsv();
        sanityFun.verifyDownlaodedCSVFile();
        //sanityFun.writeToExcel();
        //sanityFun.readCSVfile();
        let  customfilepath = "C:\\Users\\Qualitrix\\Downloads\\createfoldersamplecsvfile.csv";
        sanityFun.uploadFile(customfilepath);
        sanityFun.verifyDownlaodedCSVFile();
        sanityFun.verifyDownlaodFolderAsCsvFile();

    })
});