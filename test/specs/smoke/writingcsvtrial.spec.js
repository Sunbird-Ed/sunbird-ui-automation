const { collaboratorNotAbleToDeleteCourse } = require("../../pageObject/tpdPageObj");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
let readWrite = require(protractor.basePath + '/test/genericFunctions/readWriteUploadCsv.js');
let genric =  require(protractor.basePath+ '/test/genericFunctions/GenericFunction.js')

describe('writingcsvtrial', () => {

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
    it('writingcsvtrial',function(){
        //(FilePath, rowno,rowno1, columnHeaderName,columnHeaderName1)
        // readWrite.writedattocsv("createfoldersamplecsvfile.csv");
        let csvfile = genric.validateParticularDataCSVFile("C:\\Users\\Qualitrix\\Downloads\\createfoldersamplecsvfile.csv",1,"Description");

    });
});