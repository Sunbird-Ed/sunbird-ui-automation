const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');

describe('createCollectionWithTOCAndValidateUploadedCsvInReviewerSide', () => {
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
    
    it('createCollectionWithTOCAndValidateUploadedCsvInReviewerSide',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let collectionName = sanityFun.createCollectionDownloadSampleCsvAndReupload("digitalTxtbook");
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(collectionName);
        utility.userLogout();
    })
});