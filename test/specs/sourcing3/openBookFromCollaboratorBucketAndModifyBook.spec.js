const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('openBookFromCollaboratorBucketAndModifyBook', () => {

    
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
        //utility.userLogout();
        browser.manage().deleteAllCookies();
    });

    it('openBookFromCollaboratorBucketAndModifyBook',function(){
        
        utility.handleDropDown();
        utility.handleLocationPopup();
        browser.sleep(3000);
        utility.userLogin('Book Creator');
        let BookName = sanityfun.createBookSaveAsDraft();
        sanityfun.addCollboratortoDraftAndSaveBook(BookName);
        utility.userLogout();
        utility.userLogin('Creator');
        etbFun.navigateToWorkspace1();
        etbFun.editTextBookInCollaboratorBucketAndVerify(BookName);
        
       
    })
});
   
