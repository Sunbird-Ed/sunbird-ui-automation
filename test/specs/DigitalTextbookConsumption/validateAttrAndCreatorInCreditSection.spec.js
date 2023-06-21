const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const addSARCATTPRPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');

describe('validateAttrAndCreatorInCreditSection', () => {
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

    it('validateAttrAndCreatorInCreditSection',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('APTenantCreator');
        let bookName = sanityfun.createBook();
        utility.userLogout();
        utility.userLogin('APTenantReviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName);
        utility.userLogout();
        utility.userLogin('Public User2');
        addSARCATTPRPageObj.navigateToLibraryAndSearchContent(bookName);
        sanityfun.validateAttrAndCreator();
        utility.userLogout();
        utility.userLogin('APTenantCreator');
        let republishedbookName = sanityfun.republishedContentFromPublishedBucket(bookName);
        utility.userLogout();
        utility.userLogin('APTenantReviewer');
        tpdPageObj.publishCourseFromUpForReview(republishedbookName);
        utility.userLogout();
        utility.userLogin('Public User2');
        addSARCATTPRPageObj.navigateToLibraryAndSearchContent(republishedbookName);
        sanityfun.validateAttrAndCreator();
    });
});