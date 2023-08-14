const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj=require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj=require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
describe('upload pdf, save and send for review and publish.', () =>{
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

    it('EditPublishedPdfUploadContentWithSameTypePdfAndVerify ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, "5");
        var PDF = cred[1]["CourseDescription"];

        sanityFun.validateContentInPublishedSectionAfterPublishmentOfContent(PDF);

       uploadPageObj.ReuploadSameTypeForLiveUploadContent('PDF');
         utility.userLogout();
         utility.userLogin('Reviewer');
            resourcePageObj.publishTheResourceFromUpForReview(PDF);


    });
});