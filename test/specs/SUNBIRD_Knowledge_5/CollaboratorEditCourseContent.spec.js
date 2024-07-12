const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const collaECCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('colobartor not able to delete the course', () => {

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
    it('CollaboratorEditCourseContent',function(){
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let courseName = sanityFun.CreateCourseAndSaveAsDraft1();
        collaECCPageObj.searchCollaboratorBySearchField(courseName);
        
    })
});
