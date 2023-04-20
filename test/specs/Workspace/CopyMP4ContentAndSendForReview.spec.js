const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');


describe('cpy Question save and send for review and publish.', () => {

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
    it('CopyMP4ContentAndSendForReview',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, "5");
        var Mp4 = cred[2]["CourseDescription"];

        sanityFun.justCopyTheContentBySearching(Mp4);
        var copiedFileName = resourcePageObj.sendForReviewTheResourceAfterCopyAndEditContentName();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        resourcePageObj.publishTheResourceFromUpForReview(copiedFileName);

    })
});