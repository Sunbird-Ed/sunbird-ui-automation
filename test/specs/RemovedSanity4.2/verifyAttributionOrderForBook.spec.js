const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const addSARCATTPRPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');

describe('verifyAttributionOrderForBook', () => {

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

    it('verifyAttributionOrderForBook ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let bookName = sanityfun.createBook();
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName);
        utility.userLogout();
        utility.userLogin('Public User2');
        addSARCATTPRPageObj.navigateToLibraryAndSearchContent(bookName);
        sanityfun.verifyAttributionOrder();
    });
});