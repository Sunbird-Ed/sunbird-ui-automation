const { browser } = require("protractor");

const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const usronBoardPage = require(protractor.basePath + '/test/pages/userOnBoarding/UserOnBoardingPage.js');
const wait = require(protractor.basePath + '/helper/waiters.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const signUp = require(protractor.basePath + '/test/pages/signUpPage/signUpPage.po.js');
var content = ccpage.contentCreation();
var signUpPageObj = signUp.signUpPage();

const verifyAdminDashBoard = () => {
    try {
        browser.sleep(3000);
        usronBoardPage.UserOnBoarding().dropdownProfile.click();
        browser.sleep(3000);
        usronBoardPage.UserOnBoarding().clkAdminDashBoard.click();
        console.log("clicked on Admin Dashboard")
        browser.sleep(3000);
    } catch (Err) {
        console.error("Failed to verify admin dashboard, " + Err);
    }
}
const userLogin = (roleName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '1', roleName);
        browser.sleep(4000);
        wait.waitForElementVisibility(content.headerDropdown1, 20000);
        content.headerDropdown1.click();
        wait.waitForElementVisibility(content.loginLink, 20000);
        content.loginLink.click();
        wait.waitForElementVisibility(content.userName, 20000);
        content.userName.sendKeys(cred[0]['Username']);
        browser.sleep(1000);
        content.password.sendKeys(cred[0]['Password']);
        browser.sleep(3000);

        content.login.click();
    } catch (Err) {
        console.error("Failed to user login, " + Err);
    }

}
const userLoginWithInvalidCredential = (roleName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '1', roleName);
        wait.waitForElementVisibility(content.headerDropdown1, 20000);
        content.headerDropdown1.click();
        wait.waitForElementVisibility(content.loginLink, 20000);
        content.loginLink.click();
        wait.waitForElementVisibility(content.userName, 20000);
        content.userName.sendKeys(cred[0]['Username']);
        content.password.sendKeys(cred[0]['Password']);
        content.login.click();
        expect(signUpPageObj.errorSummary.isDisplayed()).toBeTruthy();
    } catch (err) {
        console.error("failed to login with invalid credential, " + err);
    }

}
const handleLocationPopup = () => {
    try {
        // wait.waitForElementVisibility(content.sunbirdOkMsg, 30000);
        // content.sunbirdOkMsg.click();
        // browser.navigate().refresh();

        browser.sleep(2000);
        wait.waitForElementVisibility(content.Teacher, 30000);
        content.Teacher.click();
        wait.waitForElementVisibility(content.Continue, 20000);
        content.Continue.click();
        browser.sleep(5000);

        // wait.waitForElementVisibility(content.state, 20000);
        // content.state.click();
        // wait.waitForElementVisibility(content.selectState, 20000);
        // content.selectState.click();
        // wait.waitForElementVisibility(content.district, 20000);
        // content.district.click();
        // wait.waitForElementVisibility(content.selectDistrict, 20000);
        // content.selectDistrict.click();



        wait.waitForElementVisibility(content.submitForm, 20000);
        content.submitForm.click();
    } catch (err) {
        console.error("Failed to handle location pop up, " + err);
    }
}
const userLogout = () => {
    try {

        browser.sleep(1000);
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.sleep(3000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.logout, 20000);
        content.logout.click();
        browser.sleep(3000);
        browser.get(Url + AppendExplore, 40000);
        browser.sleep(2000);
    } catch (err) {
        console.error("failed to log out, " + err);
    }
}
const validateWorkspace = () => {
    try {
        // wait.waitForElementVisibility(content.headerDropdown, 20000);
        // content.headerDropdown.click();
        expect(content.headerDropdown.isDisplayed()).toBeTruthy();
    } catch (Exception) {
        console.error("Failed to validate workspace, " + Exception);
    }
}
const mergeAccount = (roleName) => {
    try {
        console.log("User is trying to merge account");
        browser.sleep(1000);
        // wait.waitForElementVisibility(content.headerDropdown, 20000);
        // content.headerDropdown.click();
        // browser.sleep(1000);
        // wait.waitForElementVisibility(content.headerDropdown, 20000);
        // content.mergeAccount.click();
        // wait.waitForElementVisibility(content.headerDropdown, 20000);
        // content.mergebutton.click();

        // wait.waitForElementVisibility(content.userName, 20000);
        // content.userName.sendKeys(username);
        // content.password.sendKeys(password);
        // content.login.click();

        // wait.waitForElementVisibility(content.mergeMessage, 20000);
        // content.mergeMessageOkButton.click();
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '1', roleName);
        browser.sleep(3000);
        // wait.waitForElementVisibility(content.headerDropdown, 20000);
        // content.headerDropdown.click();
        // wait.waitForElementVisibility(content.loginLink, 20000);
        // content.loginLink.click();
        wait.waitForElementVisibility(content.userName, 20000);
        content.userName.sendKeys(cred[0]['Username']);
        content.password.sendKeys(cred[0]['Password']);
        content.login.click();
        console.log("User successfully merged account");
    } catch (Exception) {
        console.error("failed to merge account, " + Exception);
    }
}
const validateDifferentStateUrl =(state)=>{
    try{
        console.log("User is trying to validate different state");
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore="/"+state+"/";
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
        browser.sleep(1000);
        console.log("User successfully validated different state");
    }catch(err){
        console.error("User failed to validate different state");
    }      
}

const handleLocationPopupForOtherExplorer = () => {
    try {
        wait.waitForElementVisibility(content.sunbirdOkMsg, 20000);
        content.sunbirdOkMsg.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.Teacher, 20000);
        content.Teacher.click();
        wait.waitForElementVisibility(content.Continue, 20000);
        content.Continue.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.state, 20000);
        content.state.click();
        wait.waitForElementVisibility(content.selectState, 20000);
        content.selectState.click();
        wait.waitForElementVisibility(content.district, 20000);
        content.district.click();
        wait.waitForElementVisibility(content.selectDistrict, 20000);
        content.selectDistrict.click();
        wait.waitForElementVisibility(content.btnSubmit, 20000);
        content.btnSubmit.click();
       
    } catch (err) {
        console.error("Failed to handle location pop up, " + err);
    }
}
const userLogoutForGoogle = () => {
    try {
        browser.sleep(1000);
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.logout, 20000);
        content.logout.click();
        browser.sleep(1000);
        browser.get(Url + AppendExplore, 40000);
        browser.sleep(1000);
    } catch (err) {
        console.error("failed to log out, " + err);
    }
}
const validateSecondTimeLocationPopup=()=>{
    try
    {
        console.log("User is trying to validateSecondTimeLocationPopup");
        wait.waitForElementVisibility(content.headerDropdown, 30000);
        content.headerDropdown.isDisplayed().then(function(input){
            expect(input.toBeTruthy);
            console.log("location popup didn't came second time");
        });
        console.log("User successfully validatedSecondTimeLocationPopup");
    }
    catch(err)
    {
    console.error("failed to validate second time location popup");
    }
}
const handleLocationPopupAsStudent = () => {
    try {
        wait.waitForElementVisibility(content.sunbirdOkMsg, 30000);
        content.sunbirdOkMsg.click();
        // browser.navigate().refresh();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.Student, 30000);
        content.Student.click();
        wait.waitForElementVisibility(content.Continue, 20000);
        content.Continue.click();
        wait.waitForElementVisibility(content.state, 20000);
        content.state.click();
        wait.waitForElementVisibility(content.selectState, 20000);
        content.selectState.click();
        wait.waitForElementVisibility(content.district, 20000);
        content.district.click();
        wait.waitForElementVisibility(content.selectDistrict, 20000);
        content.selectDistrict.click();
        wait.waitForElementVisibility(content.submitForm, 20000);
        content.submitForm.click();
    } catch (err) {
        console.error("Failed to handle location pop up, " + err);
    }
}
const handleLocationPopupAsOther = () => {
    try {
        wait.waitForElementVisibility(content.sunbirdOkMsg, 30000);
        content.sunbirdOkMsg.click();
        // browser.navigate().refresh();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.Other, 30000);
        content.Other.click();
        wait.waitForElementVisibility(content.Continue, 20000);
        content.Continue.click();
        wait.waitForElementVisibility(content.state, 20000);
        content.state.click();
        wait.waitForElementVisibility(content.selectState, 20000);
        content.selectState.click();
        wait.waitForElementVisibility(content.district, 20000);
        content.district.click();
        wait.waitForElementVisibility(content.selectDistrict, 20000);
        content.selectDistrict.click();
        wait.waitForElementVisibility(content.submitForm, 20000);
        content.submitForm.click();
    } catch (err) {
        console.error("Failed to handle location pop up, " + err);
    }
}
const handleDropDown=()=>{
    try{
        browser.sleep(4000);
        wait.waitForElementVisibility(content.boardDropdown, 30000);
        content.boardDropdown.click();
        browser.sleep(1000); 
        wait.waitForElementVisibility(content.selectBoardValue, 30000);
        content.selectBoardValue.click();
        browser.sleep(1000); 
        wait.waitForElementVisibility(content.mediumDropdown, 30000);
        content.mediumDropdown.click();
        browser.sleep(1000); 
        wait.waitForElementVisibility(content.selectMediumValue, 30000);
        content.selectMediumValue.click();
        browser.sleep(1000); 
        wait.waitForElementVisibility(content.gradeLevelDropDown, 30000);
        content.gradeLevelDropDown.click();
        browser.sleep(1000); 
        wait.waitForElementVisibility(content.selectGradeLevelValue, 30000);
        content.selectGradeLevelValue.click();
        browser.sleep(1000); 
        // wait.waitForElementVisibility(content.subjectDropdown, 30000);
        // content.subjectDropdown.click();
        // browser.sleep(1000); 
        // wait.waitForElementVisibility(content.selectSubjectValue, 30000);
        // content.selectSubjectValue.click();
        // browser.sleep(1000); 
        wait.waitForElementVisibility(content.submitButtonForDropdowns, 30000);
        content.submitButtonForDropdowns.click();
        browser.sleep(1000); 
    }catch(err){
        console.log(err);
    }
}


module.exports = {
    verifyAdminDashBoard,
    handleDropDown,
    userLogin,
    handleLocationPopup,
    userLogout,
    userLoginWithInvalidCredential,
    validateWorkspace,
    mergeAccount,
    validateDifferentStateUrl,
    handleLocationPopupForOtherExplorer,
    userLogoutForGoogle,
    validateSecondTimeLocationPopup,
    handleLocationPopupAsStudent,
    handleLocationPopupAsOther,

}

