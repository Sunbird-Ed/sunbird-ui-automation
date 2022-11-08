const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('AddCollectionUsingDifferentApproachAndResource Verify', () => {

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
    
    it('verifyMCSbookDisplayedPostSearching',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let bookName = sanityfun.createBook();
        utility.userLogout();
        utility.userLogin('Reviewer');
        EnrollTBFCPageObj.publishCourseFromUpForReview(bookName)
        utility.userLogout();
        utility.userLogin('Creator');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(bookName);
        // etbFun.verifyMCSBookPostSearch();  
    })
});