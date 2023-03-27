const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const tpdpageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');



describe('openDraftAndDownloadQRCodeForBook', () => {

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
        browser.close();

        
    });
    it('openDraftAndDownloadQRCodeForBook',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let bookName= sanityFun.createBookSaveAsDraft();
        sanityFun.generateQRCodeswithYesButtonFromDraft(bookName);
        sanityFun.downloadQRCode2();
    })
});