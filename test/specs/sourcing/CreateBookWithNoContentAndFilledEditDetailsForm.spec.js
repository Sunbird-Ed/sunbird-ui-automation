const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('CreateBookWithNoContentAndFilledEditDetailsForm', () => {
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
        utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    it('CreateBookWithNoContentAndFilledEditDetailsForm',function(){
        utility.handleLocationPopup();
        browser.sleep(3000);
        utility.userLogin('Creator');
        etbFun.navigateToWorkspace();
        let bookName =etbFun.createBookWithEditDetailsFilled();
        etbFun.saveAndSendEdittedBookForReview();
        etbFun.reviewInSubmissions();
        utility.userLogout();

        browser.sleep(3000);
        utility.userLogin('Reviewer');
        etbFun.searchInUpForReview(bookName);
        etbFun.validateViewDetailPublishAndSearch(bookName);
        utility.userLogout();

        browser.sleep(3000);
        utility.userLogin('Public User1');
        etbFun.navigateToLibraryAndSearchForBook(bookName);
      
    })
    
});
   
