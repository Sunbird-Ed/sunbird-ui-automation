const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCMATAOMIBAVCDPageObj = require(protractor.basePath+'/test/pageObject/contentCreationPageObj.js');

describe('validateUserNameDistrictBatchProgressAndCertificateMet', () => {

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

    it('validateUserNameDistrictBatchProgressAndCertificateMet',function(){
        utility.handleDropDown();
        browser.sleep(20000);
        //utility.handleLocationPopup();
        utility.userLogin('Creator2');
        verifyCMATAOMIBAVCDPageObj.viewCourseDashBoardDetailsInCertificatesTab(); 
    })
});