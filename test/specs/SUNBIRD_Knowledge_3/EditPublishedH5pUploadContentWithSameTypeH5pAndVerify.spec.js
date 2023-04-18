const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const resourcePageObj=require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj=require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

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

    it('EditPublishedH5pUploadContentWithSameTypeH5pAndVerify ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, "5");
        var h5p = cred[5]["CourseDescription"];

        sanityFun.validateContentInPublishedSectionAfterPublishmentOfContent(h5p);
        uploadPageObj.ReuploadSameTypeForLiveUploadContent('H5P');
        utility.userLogout();
         utility.userLogin('Reviewer');
            resourcePageObj.publishTheResourceFromUpForReview(h5p);


    });
});