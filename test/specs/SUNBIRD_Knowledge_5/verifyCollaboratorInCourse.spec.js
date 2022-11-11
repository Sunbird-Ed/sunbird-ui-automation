const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('verifyCollaboratorInCourse', () => {

    
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

    it('verifyCollaboratorInCourse',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        browser.sleep(3000);
        utility.userLogin('Book Creator');
        let BookName = sanityfun.CreateCourseAndSaveAsDraft1("cpd");
        sanityfun.addCollboratortoDraftAndSaveBook(BookName);
        sanityfun.removeCollboratortoDraftAndSaveBookForCourse(BookName);
        
    })
});
   







