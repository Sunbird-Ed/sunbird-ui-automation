const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('validateAndDownloadCertificateFromLearnerPassBook', () => {

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

    it('validateAndDownloadCertificateFromLearnerPassBook',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        let courseName = "do_21340093974761472016";
        let fileName = "4.4 Ashok Course 1";
        utility.userLogin('TCTestUser');
        tpdPageObj.consumeCourseForCertificate(courseName);
        tpdPageObj.verifyConsumesCourseInTrainingSec();
        tpdPageObj.verifyDownloadedPdfFile(fileName);
    });
});