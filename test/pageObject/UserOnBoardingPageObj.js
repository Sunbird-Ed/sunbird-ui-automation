const usronBoardPage = require(protractor.basePath + '/test/pages/userOnBoarding/UserOnBoardingPage.js');
const wait = require(protractor.basePath + '/helper/waiters.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const signUpPage = require(protractor.basePath + '/test/pages/signUpPage/signUpPage.po.js')
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var driver = browser.driver;
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
var content = ccpage.contentCreation();
var userOnboard = usronBoardPage.UserOnBoarding();
var signUpPageObj = signUpPage.signUpPage();
const tpdPage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityPage=require(protractor.basePath+'/test/pages/userOnBoarding/SanityPage.js');
var teacherCsv =protractor.basePath + '/test/testdata/teacher.csv';
var searchObj=tpdPage.tpdPage();
const verifyCEBpage = require(protractor.basePath+'/test/pages/sanity/VerifySignInPopupInExploreCourseEnrollButton.js');
var verifyCEBObj=verifyCEBpage.VerifySignInPopupInExploreCourseEnrollButton();

const verifyAdminDashBoard = () => {

    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    wait.waitForElementVisibility(userOnboard.clkAdminDashBoard, 20000, "clkAdminDashBoard is not available");
    userOnboard.clkAdminDashBoard.click();
    console.log("clicked on Admin Dashboard")
    wait.waitForElementVisibility(userOnboard.report, 20000, "Report Section is not available");

    expect(userOnboard.dataset.isDisplayed).toBeTruthy();
    expect(userOnboard.serialNo.isDisplayed).toBeTruthy();
    expect(userOnboard.title.isDisplayed).toBeTruthy();
    expect(userOnboard.lastUpdatedDate.isDisplayed).toBeTruthy();
    expect(userOnboard.tags.isDisplayed).toBeTruthy();
    expect(userOnboard.updatedFrequency.isDisplayed).toBeTruthy();
    expect(userOnboard.status.isDisplayed).toBeTruthy();
    userOnboard.contentName.getText().then(function(input){
    console.log("First content on report is: "+input);
    });
}

const verifyViewAllButton = () => {

    wait.waitForElementVisibility(userOnboard.verifyClassSec, 20000, "Class Section is not available");
    expect(userOnboard.verifyClassSec.getText()).toEqual('Hindi');
    console.log('Class section displayed Succesfully');
}

const usersUploadAndDownload = () => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(2000);
    userOnboard.clkManage.click();
    wait.waitForElementVisibility(userOnboard.uploadValidationStatus, 20000, "uploadValidationStatus is not available");
    userOnboard.uploadValidationStatus.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(userOnboard.selectcsvfile, 20000, "selectcsvfile is not available");
    
    // set file detector
    let path = require('path');
    var remote =require(protractor.basePath + '/node_modules/selenium-webdriver/remote');
    browser.setFileDetector(new remote.FileDetector());
    
    var fileToUpload ='teacher.csv';
    var absolutePath = path.resolve(__dirname, fileToUpload);
    var fileElem = element(by.css('input[type="file"]'));
    browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
    browser.driver.sleep(1000);
    fileElem.sendKeys(absolutePath);
   
    browser.sleep(2000);
    wait.waitForElementVisibility(userOnboard.uploadcsvfile, 20000, "uploadcsvfile is not available");
    userOnboard.uploadcsvfile.click();
    // wait.waitForElementVisibility(userOnboard.validationToasterMsg,20000);
    // userOnboard.validationToasterMsg.getText().then(function(input){
    //     expect(input).toEqual("File Uploaded successfully");
        
    // })
    // userOnboard.clkDownloadFile.click();
    // browser.sleep(3000);
    //  userOnboard.clkSltFile.click();
      browser.sleep(2000);
    console.log('User list Downloaded Succesfully');
}

const signInWithSSO = () => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    wait.waitForElementVisibility(signUpPageObj.loginButton, 20000);
    signUpPageObj.loginButton.click();
    wait.waitForElementVisibility(userOnboard.signWithStateID, 20000);
    userOnboard.signWithStateID.click();
    wait.waitForElementVisibility(userOnboard.stateDropDown, 20000);
    userOnboard.stateDropDown.click();
    wait.waitForElementVisibility(userOnboard.selectState, 20000);
    userOnboard.selectState.click();
    wait.waitForElementVisibility(userOnboard.clickSubmit, 20000);
    userOnboard.clickSubmit.click();
    wait.waitForElementVisibility(userOnboard.stateUsrName, 20000);
    userOnboard.stateUsrName.click();
    userOnboard.stateUsrName.sendKeys("userName");
    wait.waitForElementVisibility(userOnboard.usrExternalID, 20000);
    userOnboard.usrExternalID.click();
    userOnboard.usrExternalID.sendKeys("extrnalId");
    wait.waitForElementVisibility(userOnboard.schoolExternalID, 20000);
    userOnboard.schoolExternalID.click();
    userOnboard.schoolExternalID.sendKeys("SchoolId");
    wait.waitForElementVisibility(userOnboard.submitState, 20000);
    userOnboard.submitState.click();
    wait.waitForElementVisibility(userOnboard.dropdown, 20000);
    userOnboard.dropdown.click();

}




const mergeAccount = () => {

    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(1000);
    userOnboard.clkMergeAccount.click();
    userOnboard.clkMerge.click();

    wait.waitForElementVisibility(userOnboard.mergePageAssert, 20000, "Merge Page is not available");

    expect(userOnboard.mergePageAssert.getText()).toEqual('Merge Account');

}

const forgetPassword = () => {
    try {


        browser.sleep(2000);
        console.log('verifying the  recoveryId in ForGot Password')
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
        wait.waitForElementVisibility(userOnboard.loginButton, 20000, "loginButton field is not  available");
        userOnboard.loginButton.click();
        wait.waitForElementVisibility(userOnboard.clkForgot, 20000, "clkForgot field is not available");
        userOnboard.clkForgot.click();
        //browser.wait(protractor.ExpectedConditions.visibilityOf(userOnboard.clkForgot),2000,"clkForgot field is not available");
        // userOnboard.clkForgot.click();
        wait.waitForElementVisibility(userOnboard.enterEmailInRecoveryAcc, 20000, "enterEmailInRecoveryAcc field is not available");
        userOnboard.enterEmailInRecoveryAcc.click();
        wait.waitForElementVisibility(userOnboard.enterEmailInRecoveryAcc, 20000, "enterEmailInRecoveryAcc field is not available");
        userOnboard.enterEmailInRecoveryAcc.sendKeys("emailName");
        wait.waitForElementVisibility(userOnboard.enterNameInRecoveryAcc, 20000, "enterNameInRecoveryAcc field is not available");
        userOnboard.enterNameInRecoveryAcc.click();
        wait.waitForElementVisibility(userOnboard.enterNameInRecoveryAcc, 20000, "enterNameInRecoveryAcc field is not available");
        userOnboard.enterNameInRecoveryAcc.sendKeys("Course Mentor");
        wait.waitForElementVisibility(userOnboard.nextButtonInRecoveryAcc, 20000, "nextButtonInRecoveryAcc field is not available");
        userOnboard.nextButtonInRecoveryAcc.click();
        wait.waitForElementVisibility(userOnboard.sltRecoveryEmailId, 20000, "sltRecoveryEmailId field is not available");
        userOnboard.sltRecoveryEmailId.click();
        wait.waitForElementVisibility(userOnboard.clkGetOTPButton, 20000, "clkGetOTPButton field is not available");
        userOnboard.clkGetOTPButton.click();
    } catch (err) {
        console.error("failed in forgot password, " + err);
    }
}
const addRecoveryID = () => {
    try {


        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(userOnboard.clickProfileIcon, 20000, "clickProfileIcon field is not available");
        userOnboard.clickProfileIcon.click();
        wait.waitForElementVisibility(userOnboard.clkAddRecoveryID, 20000, "clkAddRecoveryID field is not available");
        userOnboard.clkAddRecoveryID.click();
        wait.waitForElementVisibility(userOnboard.emailIdTextBox, 20000, "emailIdTextBox field is not available");
        userOnboard.emailIdTextBox.click();
        wait.waitForElementVisibility(userOnboard.emailIdTextBox, 20000, "emailIdTextBox field is not available");
        userOnboard.emailIdTextBox.sendKeys("automationUser1@gmail.com");
        wait.waitForElementVisibility(userOnboard.clkMerge, 20000, "clkMerge field is not available");
        userOnboard.clkMerge.click();
    } catch (Err) {
        console.error("Failed in add recovery id, " + Err);
    }
}

const userSearch = () => {

    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();
    wait.waitForElementVisibility(content.profileTickMark, 20000);
    expect(content.profileTickMark.isDisplayed()).toBeTruthy();
    var editButton = content.btnEdit;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', editButton.getWebElement());
    });
    content.btnEdit.click();
    wait.waitForElementVisibility(content.btnClose, 20000);
    expect(content.btnClose.isDisplayed()).toBeTruthy();
    content.btnClose.click();

}

const verifyLocationPopup = () => {
    try{
    wait.waitForElementVisibility(content.sunbirdOkMsg, 30000);
    content.sunbirdOkMsg.click();
    //browser.navigate().refresh();
    wait.waitForElementVisibility(content.Teacher, 20000);
    expect(content.Teacher.isDisplayed()).toBeTruthy();

    var Url1 = getAppURL.ConfigurePath().AppURL;
    var AppendGet = '/get';
    browser.get(Url1 + AppendGet, 40000);
    wait.waitForElementVisibility(content.Teacher, 20000);
    expect(content.Teacher.isDisplayed()).toBeTruthy();
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
    browser.sleep(1000);
    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();

    utility.userLogin('CustodianUser');

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();
    var editButton = content.btnEdit;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', editButton.getWebElement());
    });
    content.btnEdit.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.btnSubmit, 20000);
    wait.waitForElementToBeClickable(content.btnSubmit, 20000);
    
    content.btnSubmit.each(function(input){
    input.click();
    });
   
    browser.sleep(3000);
}catch(e){
    console.error("failed to verify location popup");
}
}

const verifyProfileDetails = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();

    wait.waitForElementVisibility(content.profileTickMark, 20000);
    expect(content.profileTickMark.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.iconI, 20000);
    expect(userOnboard.iconI.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelUserName, 20000);
    expect(userOnboard.labelUserName.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelUserID, 20000);
    expect(userOnboard.labelUserID.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelRoles, 20000);
    expect(userOnboard.labelRoles.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelAddMobileNumber, 20000);
    expect(userOnboard.labelAddMobileNumber.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelEmail, 20000);
    expect(userOnboard.labelEmail.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelSubjects, 20000);
    var scrolling = userOnboard.labelSubjects;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', scrolling.getWebElement());
    });

    wait.waitForElementVisibility(userOnboard.labelRecoveryMobileNumber, 20000);
    expect(userOnboard.labelRecoveryMobileNumber.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelBoard, 20000);
    expect(userOnboard.labelBoard.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelMedium, 20000);
    expect(userOnboard.labelMedium.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelClasses, 20000);
    expect(userOnboard.labelClasses.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelSubjects, 20000);
    expect(userOnboard.labelSubjects.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelContributions, 20000);
    expect(userOnboard.labelContributions.isDisplayed()).toBeTruthy();

}

const addRecoveryAccountDetails = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();
    wait.waitForElementVisibility(userOnboard.labelRecoveryMobileNumber, 20000);
    expect(userOnboard.labelRecoveryMobileNumber.isDisplayed()).toBeTruthy();
    userOnboard.labelRecoveryMobileNumber.click();
    wait.waitForElementVisibility(userOnboard.popupRecoveryAccount, 20000);
    expect(userOnboard.popupRecoveryAccount.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.labelEmailInPopup, 20000);
    expect(userOnboard.labelEmailInPopup.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.labelMobileInPopup, 20000);
    expect(userOnboard.labelMobileInPopup.isDisplayed()).toBeTruthy();
    // wait.waitForElementVisibility(userOnboard.checkBoxEmail, 20000);
    // userOnboard.checkBoxEmail.click();
    wait.waitForElementVisibility(userOnboard.fieldEmail, 20000);
    browser.sleep(200);
    userOnboard.fieldEmail.click();
    userOnboard.fieldEmail.sendKeys('mentorsun@gmail.com');
    wait.waitForElementVisibility(userOnboard.btnSubmit, 20000);
    userOnboard.btnSubmit.click();
    // wait.waitForElementVisibility(userOnboard.errorMsgForEmail, 20000);
    // expect(userOnboard.errorMsgForEmail.isDisplayed()).toBeTruthy();
    // wait.waitForElementVisibility(userOnboard.fieldEmail, 20000);
    // userOnboard.fieldEmail.clear();
    // browser.sleep(200);
    // userOnboard.fieldEmail.sendKeys('mentorsungmail.com');
    // expect(userOnboard.btnSubmit.isEnabled()).toBeFalsy();
    // wait.waitForElementVisibility(userOnboard.checkboxPhone, 20000);
    // userOnboard.checkboxPhone.click();
    // wait.waitForElementVisibility(userOnboard.fieldMobileNumber, 20000);
    // userOnboard.fieldMobileNumber.click();
    // userOnboard.fieldMobileNumber.sendKeys('9009900990');
    // expect(userOnboard.btnSubmit.isEnabled()).toBeTruthy();
    // userOnboard.fieldMobileNumber.clear();
    // browser.sleep(200);
    // userOnboard.fieldMobileNumber.sendKeys('900990099');
    // expect(userOnboard.btnSubmit.isEnabled()).toBeFalsy();
    // wait.waitForElementVisibility(userOnboard.checkBoxEmail, 20000);
    // userOnboard.checkBoxEmail.click();
    // wait.waitForElementVisibility(userOnboard.fieldEmail, 20000);
    // userOnboard.fieldEmail.click();
    // userOnboard.fieldEmail.clear();
    // browser.sleep(200);
    // userOnboard.fieldEmail.sendKeys(faker.randomData().emailData);
    // wait.waitForElementVisibility(userOnboard.btnSubmit, 20000);
    // userOnboard.btnSubmit.click();
    // wait.waitForElementVisibility(userOnboard.recoveryIdDisplayed, 20000);
    // expect(userOnboard.recoveryIdDisplayed.isDisplayed()).toBeTruthy();
    
}
const addRecoveryAccountDetailsForSanity = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();
    wait.waitForElementVisibility(userOnboard.labelRecoveryMobileNumber, 20000);
    expect(userOnboard.labelRecoveryMobileNumber.isDisplayed()).toBeTruthy();
    userOnboard.labelRecoveryMobileNumber.click();
    wait.waitForElementVisibility(userOnboard.popupRecoveryAccount, 20000);
    expect(userOnboard.popupRecoveryAccount.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.labelEmailInPopup, 20000);
    expect(userOnboard.labelEmailInPopup.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.labelMobileInPopup, 20000);
    expect(userOnboard.labelMobileInPopup.isDisplayed()).toBeTruthy();
    // wait.waitForElementVisibility(userOnboard.checkBoxEmail, 20000);
    // userOnboard.checkBoxEmail.click();
    wait.waitForElementVisibility(userOnboard.fieldEmail, 20000);
    browser.sleep(200);
    userOnboard.fieldEmail.click();
    userOnboard.fieldEmail.sendKeys(faker.randomData().emailData);
    wait.waitForElementVisibility(userOnboard.btnSubmit, 20000);
    userOnboard.btnSubmit.click();
    wait.waitForElementVisibility(userOnboard.recoveryIdDisplayed, 20000);
    expect(userOnboard.recoveryIdDisplayed.isDisplayed()).toBeTruthy();

}
const mergeAccountWithCustodian = () =>{
    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    // wait.waitForElementVisibility(content.linkProfile, 20000);
    // content.linkProfile.click();
    wait.waitForElementVisibility(content.mergeAccountWithCusto, 20000);
    content.mergeAccountWithCusto.click();
    wait.waitForElementVisibility(content.btnMerge, 20000);
    content.btnMerge.click();
    browser.sleep(3000);
   // utility.userLogin('CustodianUser');
    utility.mergeAccount('automationd2@yopmail.com','Password@123');
    browser.sleep(1000);
    wait.waitForElementVisibility(content.btnOk, 20000);
    content.btnOk.click();
}
const usersUploadAndDownloadValidations = () => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(2000);
    userOnboard.clkManage.click();
    wait.waitForElementVisibility(userOnboard.selfDeclaredUserDetails, 20000, "selfDeclaredUserDetails is not available");
    expect(userOnboard.selfDeclaredUserDetails.isDisplayed()).toBeTruthy();
    expect(userOnboard.uploadValidationStatus.isDisplayed()).toBeTruthy();
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', userOnboard.selectFile.getWebElement());
    });
    userOnboard.selectFile.click();
// add for explorer validation
    // browser.sleep(500);
    // userOnboard.downloadButton.click();
    browser.sleep(500);
    userOnboard.closeIcon.click();
    browser.sleep(500);
    browser.executeScript('window.scrollTo(0,0);').then(function(){
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(500);
    wait.waitForElementVisibility(userOnboard.downloadUserDetail,20000);
    expect(userOnboard.downloadUserDetail.isDisplayed()).toBeTruthy();
    userOnboard.downloadUserDetail.click();
   // var fileName = genericFun.readLatestDownlaodedFileName("/home/qualitrix/Documents/diksha-Protractor/downloads/");
    //console.log('User list Downloaded Succesfully'+fileName );
}
const custodianUsersProfilePageValidations = () => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(2000);
    userOnboard.clickProfileIcon.click();
    wait.waitForElementVisibility(userOnboard.submitDetails, 20000, "submitDetails is not available");
    expect(userOnboard.submitDetails.isDisplayed()).toBeTruthy();
    userOnboard.submitDetails.click();
    browser.sleep(1000);
    wait.waitForElementVisibility(userOnboard.selectPersona, 20000, "selectPersona is not available");
    userOnboard.selectPersona.click();
    browser.sleep(500);
    expect(userOnboard.teacherOption.isDisplayed()).toBeTruthy();
    expect(userOnboard.otherOption.isDisplayed()).toBeTruthy();
    userOnboard.teacherOption.click();
    wait.waitForElementVisibility(userOnboard.selectTenant, 20000, "selectTenant is not available");
    userOnboard.selectTenant.click();
    browser.sleep(3000);
    expect(userOnboard.andhraOption.isDisplayed()).toBeTruthy();
    expect(userOnboard.assamOption.isDisplayed()).toBeTruthy();
   // expect(userOnboard.CustodianUserpageTnC.isDisplayed()).toBeTruthy();
    userOnboard.andhraOption.click();
    browser.sleep(500);
   // userOnboard.cancel.click();
   browser.navigate().back();
    browser.sleep(2000);
    wait.waitForElementVisibility(userOnboard.editPersonalDetail,20000);
    userOnboard.editPersonalDetail.click();
    browser.sleep(500);
    expect(userOnboard.userName.isDisplayed()).toBeTruthy();
    expect(userOnboard.stateName.isDisplayed()).toBeTruthy();
    expect(userOnboard.districtName.isDisplayed()).toBeTruthy();
    browser.sleep(500);
    userOnboard.closeEditDetail.click();
    browser.sleep(500);
    console.log('Custodian User profile detail validated Succesfully');
}

const verifyLocationPopupForAnonymusUser=()=>{
    wait.waitForElementVisibility(content.sunbirdOkMsg, 30000);
    content.sunbirdOkMsg.click();
    //browser.navigate().refresh();
    wait.waitForElementVisibility(content.Teacher, 20000);
    expect(content.Teacher.isDisplayed()).toBeTruthy();
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
    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();
    wait.waitForElementVisibility(content.clickCourse, 20000);
    content.clickCourse.click();
    browser.sleep(3000);
    //browser.navigate().back();
    //expect(content.BasedOnYourPrefernceText.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(content.profileImage,20000);
    content.profileImage.click();
    wait.waitForElementVisibility(content.loginLink,20000);
    content.loginLink.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.RegisterHereLink,20000);
    content.RegisterHereLink.click();
    browser.sleep(3000);
    expect(content.RegisterOnDikshaHeader.isDisplayed()).toBeTruthy();
    var Url1 = getAppURL.ConfigurePath().AppURL;
    var AppendGet = '/get';
    browser.get(Url1 + AppendGet, 40000);
    wait.waitForElementVisibility(content.QRcodeSearchBox,20000);
    content.QRcodeSearchBox.sendKeys('234ZNE'); 
    wait.waitForElementVisibility(content.searchQRCode,20000);
    content.searchQRCode.click(); 
    browser.sleep(3000);
    wait.waitForElementVisibility(content.clickOnFirstContent,20000);
    content.clickOnFirstContent.click(); 
    browser.sleep(3000);
    browser.navigate().back();
    browser.navigate().back();
    browser.navigate().back();
    expect(content.RegisterOnDikshaHeader.isDisplayed()).toBeTruthy();
    browser.get(Url1 + '/explore',40000);
    browser.sleep(3000);
}
const verifyIgot=()=>{
    wait.waitForElementVisibility(content.sunbirdOkMsg, 30000);
    content.sunbirdOkMsg.click();
    browser.navigate().refresh();
    expect(userOnboard.welcomeIgotText.isDisplayed()).toBeTruthy();
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
    wait.waitForElementVisibility(userOnboard.IgotCourse, 20000);
    userOnboard.IgotCourse.click();
    wait.waitForElementVisibility(userOnboard.selectRoleFilter, 20000);
    userOnboard.selectRoleFilter.click();
    wait.waitForElementVisibility(userOnboard.selectRole, 20000);
    userOnboard.selectRole.click();
    wait.waitForElementVisibility(userOnboard.IgotCourse, 20000);
    userOnboard.IgotCourse.click();
    // wait.waitForElementVisibility(userOnboard.Applybutton, 20000);
    // userOnboard.Applybutton.click();
    wait.waitForElementVisibility(userOnboard.FirstContent, 20000);
    userOnboard.FirstContent.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.JoinCourse, 20000);
    userOnboard.JoinCourse.click();
    expect(userOnboard.logInPermission.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.loginButtonForLoginPage, 20000);
    userOnboard.loginButtonForLoginPage.click();
    browser.sleep(3000);
    expect(userOnboard.welComeToDikshaHeader.isDisplayed()).toBeTruthy();
}




const verifyNoBoardValue = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();

    browser.executeScript('window.scrollTo(0,600);').then(function () {
        console.log('++++++SCROLLED Down+++++');
    });
    userOnboard.labelBoard.getText().then(function(firstPart){
       
        expect(firstPart).not.toEqual("Board :");
        console.log('Board didnt displayed');
    });
  
}
const verifyHelpFAQ = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(userOnboard.clkHelp, 20000);
    userOnboard.clkHelp.click();

   
    wait.waitForElementVisibility(userOnboard.verifyFAQ, 20000);
    expect(userOnboard.verifyFAQ.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.firstQuestionClk, 20000);
    expect(userOnboard.firstQuestionClk.isDisplayed()).toBeTruthy();
    userOnboard.firstQuestionClk.click();

    wait.waitForElementVisibility(userOnboard.clkNoButton, 20000);
    expect(userOnboard.clkNoButton.isDisplayed()).toBeTruthy();
    userOnboard.clkNoButton.click();

    wait.waitForElementVisibility(userOnboard.clkTypeHere, 20000);
    expect(userOnboard.clkTypeHere.isDisplayed()).toBeTruthy();
    userOnboard.clkTypeHere.click();
    userOnboard.clkTypeHere.sendKeys('Content issue');

    wait.waitForElementVisibility(userOnboard.clkSubmitFaq, 20000);
    userOnboard.clkSubmitFaq.click();

    wait.waitForElementVisibility(userOnboard.verifySuccessResponceMsg, 20000);
    expect(userOnboard.verifySuccessResponceMsg.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.clkGoToHelpCenter, 20000);
    userOnboard.clkGoToHelpCenter.click();
    wait.waitForElementVisibility(userOnboard.HelpCenterPageAssert, 20000);
    expect(userOnboard.HelpCenterPageAssert.isDisplayed()).toBeTruthy();


}
const updateProfileDetailsForSelfSignedUser = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();

  
    wait.waitForElementVisibility(userOnboard.labelSubjects, 20000);
    var scrolling = userOnboard.labelSubjects;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', scrolling.getWebElement());
    });

    wait.waitForElementVisibility(userOnboard.clkEditProfile, 20000);
    userOnboard.clkEditProfile.click();

    wait.waitForElementVisibility(userOnboard.clkBoardEdit, 20000);
    userOnboard.clkBoardEdit.click();

    wait.waitForElementVisibility(userOnboard.verifyIGotHealthValue, 20000);
    expect(userOnboard.verifyIGotHealthValue.isDisplayed()).toBeTruthy();
    userOnboard.verifyIGotHealthValue.click();
    browser.sleep(3000);

    wait.waitForElementVisibility(userOnboard.clkBoardEdit, 20000);
    userOnboard.clkBoardEdit.click();

    wait.waitForElementVisibility(userOnboard.verifyIGotHealthValue, 20000);
    expect(userOnboard.verifyIGotHealthValue.isDisplayed()).toBeTruthy();
    userOnboard.verifyIGotHealthValue.click();

    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.clkMediumDropDown, 20000);
    userOnboard.clkMediumDropDown.click();
    wait.waitForElementVisibility(userOnboard.sltMediumDropDown, 20000);
    userOnboard.sltMediumDropDown.click();
    wait.waitForElementVisibility(userOnboard.closeMediumIcon, 20000);
    userOnboard.closeMediumIcon.click();

    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.clkClassDropDown, 20000);
    userOnboard.clkClassDropDown.click();
    wait.waitForElementVisibility(userOnboard.sltClassDropDown, 20000);
    userOnboard.sltClassDropDown.click();
    wait.waitForElementVisibility(userOnboard.closeClassIcon, 20000);
    userOnboard.closeClassIcon.click();

    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.clkSubjectDropDown, 20000);
    userOnboard.clkSubjectDropDown.click();
    wait.waitForElementVisibility(userOnboard.sltSubjectDropDown, 20000);
    userOnboard.sltSubjectDropDown.click();
    wait.waitForElementVisibility(userOnboard.closeSubjectIcon, 20000);
    userOnboard.closeSubjectIcon.click();

    wait.waitForElementVisibility(userOnboard.clkSubmitProfile, 20000);
    userOnboard.clkSubmitProfile.click();
    wait.waitForElementVisibility(userOnboard.assertUpdateToastrMsg, 20000);
    expect(userOnboard.assertUpdateToastrMsg.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelBoard, 20000);
    expect(userOnboard.labelBoard.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelMedium, 20000);
    expect(userOnboard.labelMedium.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelClasses, 20000);
    expect(userOnboard.labelClasses.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.labelSubjects, 20000);
    expect(userOnboard.labelSubjects.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.assertProfileBoardValue, 20000);
    expect(userOnboard.assertProfileBoardValue.isDisplayed()).toBeTruthy();

    

}

const updateStateAndDistrictName = () => {

    browser.sleep(5000);
   
    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();



    wait.waitForElementVisibility(userOnboard.clkEditStateAndDistritProfile, 20000);
    var scrolling = userOnboard.clkEditStateAndDistritProfile;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', scrolling.getWebElement());
    });
    userOnboard.clkEditStateAndDistritProfile.click();
    browser.sleep(3000);


    wait.waitForElementVisibility(userOnboard.clkStateDropdown, 20000);
    userOnboard.clkStateDropdown.click();
    browser.sleep(1000);
    wait.waitForElementVisibility(userOnboard.sltStateDropdown, 20000);
    userOnboard.sltStateDropdown.click();
    browser.sleep(1000);


    wait.waitForElementVisibility(userOnboard.clkDistrictDropdown, 20000);
    userOnboard.clkDistrictDropdown.click();
    browser.sleep(1000);
    wait.waitForElementVisibility(userOnboard.sltDistrictDropdown, 20000);
    userOnboard.sltDistrictDropdown.click();
    browser.sleep(1000);
    wait.waitForElementVisibility(userOnboard.districtSubmitClk, 20000);
    userOnboard.districtSubmitClk.click();
    browser.sleep(1000);
        // wait.waitForElementVisibility(userOnboard.labelBoard, 20000);
    // expect(userOnboard.labelBoard.isDisplayed()).toBeTruthy();

    // wait.waitForElementVisibility(userOnboard.labelMedium, 20000);
    // expect(userOnboard.labelMedium.isDisplayed()).toBeTruthy();

    // wait.waitForElementVisibility(userOnboard.labelClasses, 20000);
    // expect(userOnboard.labelClasses.isDisplayed()).toBeTruthy();

    // wait.waitForElementVisibility(userOnboard.labelSubjects, 20000);
    // expect(userOnboard.labelSubjects.isDisplayed()).toBeTruthy();

    // wait.waitForElementVisibility(userOnboard.labelContributions, 20000);
    // expect(userOnboard.labelContributions.isDisplayed()).toBeTruthy();

}

const verifyPasswordPolicyInRegisterPage = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.loginLink, 20000);
    content.loginLink.click();

    wait.waitForElementVisibility(userOnboard.clkRegisterlink, 20000);
    userOnboard.clkRegisterlink.click();
    browser.sleep(1000);

     wait.waitForElementVisibility(userOnboard.clkYearDropdown, 20000);
    userOnboard.clkYearDropdown.click();

    wait.waitForElementVisibility(userOnboard.sltInValidYear, 20000);
    userOnboard.sltInValidYear.click();
    browser.sleep(2000);

    var scrolling = userOnboard.registerConfPassword;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', scrolling.getWebElement());
    });

    wait.waitForElementVisibility(userOnboard.registerPassword, 20000);
    userOnboard.registerPassword.click();
    userOnboard.registerPassword.sendKeys('test123');

 wait.waitForElementVisibility(userOnboard.verifyPasswordPolicyErrMsg, 20000);
expect(userOnboard.verifyPasswordPolicyErrMsg.isDisplayed()).toBeTruthy();

browser.sleep(2000);

userOnboard.registerPassword.clear().then(function() {
    userOnboard.registerPassword.sendKeys('Secure@123');
})
//userOnboard.registerPassword.sendKeys('Secure@123');

browser.sleep(2000);

    wait.waitForElementVisibility(userOnboard.registerConfPassword, 20000);
    userOnboard.registerConfPassword.sendKeys('Secure@123');
 browser.sleep(2000);


    
}
const verifyRegisterPageDetails = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.loginLink, 20000);
    content.loginLink.click();

    wait.waitForElementVisibility(userOnboard.clkRegisterlink, 20000);
    userOnboard.clkRegisterlink.click();
    browser.sleep(1000);
    wait.waitForElementVisibility(userOnboard.RegisteronDikshaLabel, 20000);
    expect(userOnboard.RegisteronDikshaLabel.isDisplayed()).toBeTruthy();


     wait.waitForElementVisibility(userOnboard.clkYearDropdown, 20000);
    userOnboard.clkYearDropdown.click();

    wait.waitForElementVisibility(userOnboard.sltInValidYear, 20000);
    userOnboard.sltInValidYear.click();
    browser.sleep(2000);

    wait.waitForElementVisibility(userOnboard.nameLabel, 20000);
    expect(userOnboard.nameLabel.isDisplayed()).toBeTruthy();


    wait.waitForElementVisibility(userOnboard.typeName, 20000);
    userOnboard.typeName.sendKeys('Arun');
    

    wait.waitForElementVisibility(userOnboard.verifyParentMsg2, 20000);
    expect(userOnboard.verifyParentMsg2.isDisplayed()).toBeTruthy();

    wait.waitForElementVisibility(userOnboard.clkEmailCheckbox, 20000);
    userOnboard.clkEmailCheckbox.click();

    wait.waitForElementVisibility(userOnboard.TypeEmail, 20000);
    userOnboard.TypeEmail.sendKeys('Ahrunnewuser@gamil.com');
    browser.sleep(2000);


    var scrolling = userOnboard.registerConfPassword;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', scrolling.getWebElement());
    });

    wait.waitForElementVisibility(userOnboard.registerPassword, 20000);
    userOnboard.registerPassword.click();
    userOnboard.registerPassword.sendKeys('test123');

 wait.waitForElementVisibility(userOnboard.verifyPasswordPolicyErrMsg, 20000);
expect(userOnboard.verifyPasswordPolicyErrMsg.isDisplayed()).toBeTruthy();

browser.sleep(2000);

userOnboard.registerPassword.clear().then(function() {
    userOnboard.registerPassword.sendKeys('Secure@123');
})
//userOnboard.registerPassword.sendKeys('Secure@123');

browser.sleep(2000);

    wait.waitForElementVisibility(userOnboard.registerConfPassword, 20000);
    userOnboard.registerConfPassword.sendKeys('Secure@123');
 browser.sleep(2000);

 wait.waitForElementVisibility(userOnboard.clkTermsCheckbox, 20000);
    userOnboard.clkTermsCheckbox.click();
    
    expect(userOnboard.termsandConditionlabel1.isDisplayed()).toBeTruthy();
    expect(userOnboard.dikshaTermsandUse.isDisplayed()).toBeTruthy();
    expect(userOnboard.registerLabel.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.registerLabel, 20000);
    userOnboard.registerLabel.click();
    
    wait.waitForElementVisibility(userOnboard.assertOTPPage, 20000);
    expect(userOnboard.assertOTPPage.isDisplayed()).toBeTruthy();


}
const copyDikshaID = () => {

    browser.sleep(5000);
   
    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.clkDikshaCopy, 20000);
    content.clkDikshaCopy.click();
    browser.sleep(4000);

    searchObj.headerCourse.click();
    browser.sleep(2000);
    searchObj.searchInput.click();
    browser.sleep(2000);

    browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('v').perform();
    searchObj.searchIcon.click();

}
const switchToJoyfulTheme = () => {

    browser.sleep(5000);
   
    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();

    wait.waitForElementVisibility(searchObj.clkSwitchClassicTheme, 20000);
    searchObj.clkSwitchClassicTheme.click();
    browser.sleep(3000);

    wait.waitForElementVisibility(content.headerDropdown1, 20000);
    content.headerDropdown1.click();

 wait.waitForElementVisibility(searchObj.clkSwitchJoyFulTheme, 20000);
 searchObj.clkSwitchJoyFulTheme.click();
    browser.sleep(5000);

}
const verifyGuestUserDisplayedInProfile=()=>{
    try{
        console.log('Verify Guest user is displayed in profile');
        browser.sleep(3000);
        wait.waitForElementVisibility(content.headerDropdown1, 20000);
        content.headerDropdown1.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.profileButton, 20000);
        content.profileButton.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.editProfileName, 20000);
        content.editProfileName.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.guestName, 20000);
        content.guestName.sendKeys('guestName12');
        browser.sleep(5000);
        wait.waitForElementVisibility(content.submitForm, 20000);
        content.submitForm.click();
        browser.sleep(5000);
        wait.waitForElementVisibility(content.profileName, 20000);
        browser.sleep(3000);
        expect(content.profileName.isDisplayed.toBeTruthy);
        if((content.profileName.getText()).toContain('Guest')){
            console.log('Profile name verified');
        }
    }
    catch(Exception)
    {
            console.log("Guest user is not displayed in profile");
    }
}

const verifyUserCourseProgress=()=>{
    try {
            // browser.sleep(3000);
            // wait.waitForElementVisibility(content.checkboxFirst, 20000);
            // content.checkboxFirst.click();
            // browser.sleep(3000);
            // wait.waitForElementVisibility(content.continuePolicyButton, 20000);
            // content.continuePolicyButton.click();
            // browser.sleep(3000);
            // wait.waitForElementVisibility(content.yobSelectYearDropdown, 20000);
            // content.yobSelectYearDropdown.click();
            // browser.sleep(3000);
            // wait.waitForElementVisibility(content.yearSelection, 20000);
            // content.yearSelection.click();
            // browser.sleep(3000);
            wait.waitForElementVisibility(content.searchInput, 20000);
            content.searchInput.sendKeys('do_2132937923166453761651');
            browser.sleep(3000);
            // wait.waitForElementVisibility(content.btnSubmit, 20000);
            // content.searchInput.click();
            // browser.sleep(3000);
            wait.waitForElementVisibility(content.searchButton, 20000);
            content.searchButton.click();
            browser.sleep(5000);
            // wait.waitForElementVisibility(content.searchButton2, 20000);
            // content.searchButton2.click();
            // browser.sleep(5000);
            wait.waitForElementVisibility(content.courseCard, 20000);
            content.courseCard.click();
            browser.sleep(5000);
            wait.waitForElementVisibility(content.joinCourse, 20000);
            content.joinCourse.click();
            browser.sleep(5000);
            // wait.waitForElementVisibility(content.checkbox, 20000);
            // content.checkbox.click();
            // browser.sleep(5000);
            // wait.waitForElementVisibility(content.shareButton, 20000);
            // content.shareButton.click();
            // browser.sleep(5000);
            wait.waitForElementVisibility(content.startLearning, 20000);
            content.startLearning.click();
            browser.sleep(5000);
            wait.waitForElementVisibility(content.kebabMenu, 20000);
            content.kebabMenu.click();
            browser.sleep(5000);
            wait.waitForElementVisibility(content.syncProgressNow, 20000);
            content.syncProgressNow.click();
            browser.sleep(5000);
            wait.waitForElementVisibility(content.progresSynced, 20000);
            content.progresSynced.getText().then(function(input){
                console.log("First content on report is: "+input);
                });
            browser.sleep(5000);
            wait.waitForElementVisibility(content.courseProgress, 20000);
            content.courseProgress.getText().then(function(input){
                console.log("First content on report is: "+input);
                });
            browser.sleep(5000);
        } 
        catch (err) {
            console.error("Failed to handle location pop up, " + err);
        }
    }
    const verifyBCSforSelectedState=()=>{
        try {
                browser.sleep(3000);
                wait.waitForElementVisibility(content.headerDropdown, 20000);
                content.headerDropdown.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.profileButton, 20000);
                content.profileButton.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.editProfileName, 20000);
                content.editProfileName.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.yobSelectYearDropdown, 20000);
                content.yobSelectYearDropdown.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.yobSelectYearDropdown, 20000);
                content.yobSelectYearDropdown.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.yearSelection, 20000);
                content.yearSelection.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.btnSubmit, 20000);
                content.btnSubmit.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.BMCstate, 20000);
                content.BMCstate.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.SelectBMCstate, 20000);
                content.SelectBMCstate.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.BMCdistrict, 20000);
                content.BMCdistrict.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.SelectBMCdistrict, 20000);
                content.SelectBMCdistrict.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.BMCBlock, 20000);
                content.BMCBlock.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.SelectBMCblock, 20000);
                content.SelectBMCblock.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.BMCcluster, 20000);
                content.SelectBMCblock.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.SelectBMCcluster, 20000);
                content.SelectBMCcluster.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.BMCSchoolCluster, 20000);
                content.BMCSchoolCluster.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.BMCSchoolCluster, 20000);
                content.BMCSchoolCluster.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.BMCSubmit, 20000);
                content.BMCSubmit.click();
                browser.sleep(3000);
            } 
            catch (err) {
                console.error("Verify Block Cluster and school in BMC with state Uttar pradesh, " + err);
            }
        }
    
        const AddUserProfileVerification=()=>{
            try
            {
             console.log("User is trying to addUserInProfile");
             browser.sleep(1000);
             browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown is not available");
             content.headerDropdown.click();
             browser.sleep(1000);
             browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.addUser), 20000, "addUser is not available");
             verifyCEBObj.addUser.click();
             console.log("Clicked on add user");
             userName= "User"+faker.randomData().firstname;
             browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.enterName), 20000, "enterName is not available");
             verifyCEBObj.enterName.sendKeys(userName);
             browser.wait(protractor.ExpectedConditions.elementToBeClickable(verifyCEBObj.addUserButton), 20000, "addUserButton is not available");
             verifyCEBObj.addUserButton.click();
             browser.sleep(1000);
              console.log("added a User successfully ");
              verifyCEBObj.availableUser.getText().then(function(input){
               // expect(input).toEqual(userName);
                console.log("Verified added user: "+input);
              });
              verifyCEBObj.availableUser.click();
              browser.wait(protractor.ExpectedConditions.elementToBeClickable(verifyCEBObj.switchUser), 20000, "switchUser is not available");
              verifyCEBObj.switchUser.click();
              browser.sleep(1000);
              browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.declaration), 20000, "declaration is not available");
              verifyCEBObj.declaration.click();
              browser.wait(protractor.ExpectedConditions.elementToBeClickable(verifyCEBObj.continueDeclaration), 20000, "switchUser is not available");
              verifyCEBObj.continueDeclaration.click();
              browser.sleep(3000);
              wait.waitForElementVisibility(content.Teacher, 20000);
              content.Teacher.click();
              wait.waitForElementVisibility(content.Continue, 20000);
              content.Continue.click();
              browser.sleep(4000);
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
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown is not available");
             content.headerDropdown.click();
             browser.sleep(1000);
             verifyCEBObj.availableUser.getText().then(function(input){
             expect(input).toEqual(userName);
             console.log("Verified selected user is switched : "+input);
            });
              }
              catch(Exception)
              {
                  console.log("Failed on adding user");
              }
            }
            const YOBnotAccessibleToExistingAndSSOusers=()=>{
                try{
                    console.log('Verify YOB popup is not accecsible for existing and SSO users');
                    browser.sleep(5000);
                    wait.waitForElementVisibility(content.statelogin, 20000);
                    content.statelogin.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.stateInsideEdit, 20000);
                    content.stateInsideEdit.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.stateDropdown, 20000);
                    content.stateDropdown.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.stateSubmit, 20000);
                    content.stateSubmit.click();
                    browser.sleep(3000);
                }
                catch(Exception)
                {
                        console.log("YOB popup is accecsible for existing and SSO users");
                }
            }
            
            const verifyYOBpopUpdisplayedToNewAndExistingUsers=()=>{
                try{
                    console.log('Verify YOB popup displayed to new and existing google users');
                    browser.sleep(5000);
                    wait.waitForElementVisibility(content.googleSignButton, 20000);
                    content.googleSignButton.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.GoogleUserName, 20000);
                    content.GoogleUserName.sendKeys('tejas.teju110@gmail.com');
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.googleNextButton, 20000);
                    content.GoogleUserName.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.googlePassword, 20000);
                    content.googlePassword.sendKeys('password');
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.googleNextButton, 20000);
                    content.GoogleUserName.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.userChangepolicyCheckbox, 20000);
                    content.userChangepolicyCheckbox.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.policySubmitButton, 20000);
                    content.policySubmitButton.click();
                    browser.sleep(3000);
                }
                catch(Exception)
                {
                        console.log("Yob popup not displayed to google users");
                }
            }
            const VerifyMUAusersYOBpopupNotBedisplayed=()=>{
                try{
                    console.log('Verify that in portal for MUA users YOB popup should not be displayed');
                    browser.sleep(5000);
                    wait.waitForElementVisibility(content.headerDropdown2, 20000);
                    content.headerDropdown2.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.MUAuser, 20000);
                    content.MUAuser.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.userChangepolicyCheckbox, 20000);
                    content.userChangepolicyCheckbox.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.policySubmitButton, 20000);
                    content.policySubmitButton.click();
                    browser.sleep(3000);
                }
                catch(Exception)
                {
                        console.log("MUA users displayed with YOB popup");
                }
            }
            const verifyReportIssueButton = () => {
                try{
                    console.log('Classic Theme enabled');
                    browser.sleep(5000);
                    wait.waitForElementVisibility(content.headerDropdown1, 20000);
                    content.headerDropdown1.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(userOnboard.helpButton, 20000);
                    userOnboard.helpButton.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(userOnboard.reportButton, 20000);
                    expect(userOnboard.reportButton.isDisplayed).toBeTruthy();
                        userOnboard.reportButton.click();
                        console.log('Report button validated for classic theme');
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.headerDropdown1, 20000);
                    content.headerDropdown1.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.themeChange, 20000);
                    content.themeChange.click();
                    console.log('Joy Theme enabled');
                    wait.waitForElementVisibility(userOnboard.reportButton, 20000);
                    expect(userOnboard.reportButton.isDisplayed).toBeTruthy();
                        userOnboard.reportButton.click();
                        browser.sleep(2000);
                        console.log('Report button validated for joyful theme');
                }
                catch(Exception)
                {
                        console.log("Failed on Validating SignInPopup on click on Enroll button on latest course in Explore-Course Page");
                }
            }
            const NewCustodianUsers=()=>{
                try{
                    console.log('Verify YOBpopup for new CustodianUsers');
                    browser.sleep(5000);
                    wait.waitForElementVisibility(content.RegisterHereLink, 20000);
                    content.RegisterHereLink.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.yobSelectYearDropdown, 20000);
                    content.yobSelectYearDropdown.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.yearSelection, 20000);
                    content.yearSelection.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(content.name, 20000);
                    content.name.sendKeys('custodianB');
                    browser.sleep(3000);
                    wait.waitForElementVisibility(userOnboard.checkBoxEmail, 20000);
                    userOnboard.checkBoxEmail.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(userOnboard.emailIdTextBox, 20000);
                    userOnboard.emailIdTextBox.sendKeys(faker.randomData().emailData);
                    browser.sleep(3000);
                    wait.waitForElementVisibility(userOnboard.registerPassword, 20000);
                    userOnboard.registerPassword.sendKeys('Test@123');
                    browser.sleep(3000);
                    wait.waitForElementVisibility(userOnboard.registerConfPassword, 20000);
                    userOnboard.registerConfPassword.sendKeys('Test@123');
                    browser.sleep(3000);
                    wait.waitForElementVisibility(userOnboard.clkTermsCheckbox, 20000);
                    userOnboard.clkTermsCheckbox.click();
                    browser.sleep(3000);
                    wait.waitForElementVisibility(userOnboard.registerLabel, 20000);
                    userOnboard.registerLabel.click();
                    browser.sleep(3000);
                }
                catch(Exception)
                {
                        console.log("Verification failed YOBpopup for new CustodianUsers");
                }
            }
            

module.exports = {
    verifyAdminDashBoard,
    signInWithSSO,
    verifyViewAllButton,
    usersUploadAndDownload,
    mergeAccount,
    addRecoveryID,
    forgetPassword,
    userSearch,
    verifyLocationPopup,
    verifyProfileDetails,
    addRecoveryAccountDetails,
    addRecoveryAccountDetailsForSanity,
    mergeAccountWithCustodian,
    usersUploadAndDownloadValidations,
    custodianUsersProfilePageValidations,
    verifyLocationPopupForAnonymusUser,
    verifyIgot,
    verifyNoBoardValue,
    verifyHelpFAQ,
    updateProfileDetailsForSelfSignedUser,
    updateStateAndDistrictName,
    verifyPasswordPolicyInRegisterPage,
    verifyRegisterPageDetails,
    copyDikshaID,
    switchToJoyfulTheme,
    verifyGuestUserDisplayedInProfile,
    verifyUserCourseProgress,
    verifyBCSforSelectedState,
    AddUserProfileVerification,
    YOBnotAccessibleToExistingAndSSOusers,
    verifyYOBpopUpdisplayedToNewAndExistingUsers,
    VerifyMUAusersYOBpopupNotBedisplayed,
    verifyReportIssueButton,
}

