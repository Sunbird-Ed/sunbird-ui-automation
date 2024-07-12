const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getExcelPath = require(protractor.basePath + "/test/pathFolder/changePath.js");
const genericFun = require(protractor.basePath + "/test/genericFunctions/GenericFunction.js");
describe('validateBMSvaluesInGuestProfile', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
                var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, "3");
        var generatedURL = cred[56]["CourseName"];

        browser.get(generatedURL, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
        


    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
        
    });

    it('ValidatePropertiesAreMentionedInURLforTheContnet',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        sanityfun.validateContentProperties();
    })
});