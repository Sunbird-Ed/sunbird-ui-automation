const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const addSARCATTPRPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');

describe('updateAttributionNamesRepublishValidateNamingOrderAsitIs', () => {
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

    it('updateAttributionNamesRepublishValidateNamingOrderAsitIs ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let courseName = sanityfun.createCourseAndSendForReviewWithAttribution();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        tpdPageObj.publishCourseFromUpForReview2(courseName);
        utility.userLogout();
        utility.userLogin('ContentCreator');
        tpdPageObj.searchDraftedContentInAllmyContentAndEditWithAttributionValidation(courseName);
        utility.userLogout();
        utility.userLogin('ContentCreator');
        addSARCATTPRPageObj.navigateToLibraryAndSearchContent(courseName);
        tpdPageObj.createOpenBatch();
        utility.userLogout();
        utility.userLogin('Public User2');
        addSARCATTPRPageObj.navigateToLibraryAndSearchContent(courseName);
        sanityfun.verifyAttributionOrder();
    });
});