const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyUOpage = require(protractor.basePath+'/test/pageObject/UserOnBoardingPageObj.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');


describe('verifyTheAdminCanSearchResultsForDiskhaIdWhichShouldBeAnExactMatch', () => {
    
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
    
    it('verifyTheAdminCanSearchResultsForDiskhaIdWhichShouldBeAnExactMatch',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin("Admin3");
       // let data1 = EnrollTBFCPageObj.copyUserIdFromProfile();
        //let data2 = EnrollTBFCPageObj.returnProfileroleAndValidate();
        // console.log(data1,data2);
        let data = EnrollTBFCPageObj.validateRoleInManageSection();
    
        // EnrollTBFCPageObj.deleteGroup();
        // utility.userLogout();
        // utility.userLogin("Admin3");
        // verifyUOpage.validateTncPopInManage();
    });
});
