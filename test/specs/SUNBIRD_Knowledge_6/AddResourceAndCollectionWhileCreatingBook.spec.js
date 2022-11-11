const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/SanityPageObj.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Create Book with all resource type, save and send for review and publish.', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().deleteAllCookies();
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    
    });


    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
        
    });
    it('AddResourceAndCollectionWhileCreatingBook',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        let bookName=etbPageObj.AddResourceAndCollectionWhileCreatingBook();
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName); 
    })
});
   
