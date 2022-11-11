const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');


describe('verifyAddCollaboratorToBook', () => {

    
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

    it('verifyAddCollaboratorToBook',function(){

       utility.handleDropDown();
       //browser.sleep(20000);
       utility.handleLocationPopup();
        utility.userLogin('Creator');
        let bookName = sanityfun.createBookSaveAsDraft();
        utility.userLogout();
        utility.userLogin('Creator');
        sanityfun.addCollboratortoAllMyContentAndSaveBook(bookName);
        
    })
});
