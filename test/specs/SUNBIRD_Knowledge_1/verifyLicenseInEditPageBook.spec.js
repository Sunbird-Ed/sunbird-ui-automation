const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');



describe('verifyLicenseInEditPageBook Verify' , () => {

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
    it('verifyLicenseInEditPageBook',function(){
        utility.handleDropDown();
       
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let bookName= sanityFun.createBook();
        console.log(bookName);
        etbFun.verifyLicenceLabelEditPage();

       // etbFun.clickFirstBookAndCopyInLibrary();
        //etbPageObj.sendForReviewTheBook();
    })

   
   
});
   
