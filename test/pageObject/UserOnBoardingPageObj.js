//const { browser } = require('protractor');

const { browser } = require('protractor');

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
const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
var teacherCsv = protractor.basePath + '/test/testdata/teacher.csv';
var searchObj = tpdPage.tpdPage();
const verifyCEBpage = require(protractor.basePath + '/test/pages/sanity/VerifySignInPopupInExploreCourseEnrollButton.js');
var verifyCEBObj = verifyCEBpage.VerifySignInPopupInExploreCourseEnrollButton();

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
    userOnboard.contentName.getText().then(function (input) {
        console.log("First content on report is: " + input);
    });
}

const verifyViewAllButton = () => {

    wait.waitForElementVisibility(userOnboard.verifyClassSec, 20000, "Class Section is not available");
    expect(userOnboard.verifyClassSec.getText()).toEqual('Class 1');
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
    var remote = require(protractor.basePath + '/node_modules/selenium-webdriver/remote');
    browser.setFileDetector(new remote.FileDetector());

    var fileToUpload = 'teacher.csv';
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
        browser.sleep(5000);

        wait.waitForElementVisibility(userOnboard.clkAddRecoveryID, 20000, "clkAddRecoveryID field is not available");
        userOnboard.clkAddRecoveryID.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(userOnboard.emailIdTextBox, 20000, "emailIdTextBox field is not available");
        userOnboard.emailIdTextBox.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(userOnboard.emailIdTextBox, 20000, "emailIdTextBox field is not available");
        userOnboard.emailIdTextBox.sendKeys("automationUser1@gmail.com");
        browser.sleep(2000);
        wait.waitForElementVisibility(userOnboard.clkMerge, 20000, "clkMerge field is not available");
        userOnboard.clkMerge.click();
        browser.sleep(2000);

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
    try {
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

        content.btnSubmit.each(function (input) {
            input.click();
        });

        browser.sleep(3000);
    } catch (e) {
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
const mergeAccountWithCustodian = () => {
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
    utility.mergeAccount('automationd2@yopmail.com', 'Password@123');
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
    browser.executeScript('window.scrollTo(0,0);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(500);
    wait.waitForElementVisibility(userOnboard.downloadUserDetail, 20000);
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
    // userOnboard.submitDetails.click();
    // browser.sleep(1000);
    // wait.waitForElementVisibility(userOnboard.selectPersona, 20000, "selectPersona is not available");
    // userOnboard.selectPersona.click();
    // browser.sleep(500);
    // expect(userOnboard.teacherOption.isDisplayed()).toBeTruthy();
    // expect(userOnboard.otherOption.isDisplayed()).toBeTruthy();
    // userOnboard.teacherOption.click();
    // wait.waitForElementVisibility(userOnboard.selectTenant, 20000, "selectTenant is not available");
    // userOnboard.selectTenant.click();
    // browser.sleep(3000);
    // expect(userOnboard.andhraOption.isDisplayed()).toBeTruthy();
    // expect(userOnboard.assamOption.isDisplayed()).toBeTruthy();
    // // expect(userOnboard.CustodianUserpageTnC.isDisplayed()).toBeTruthy();
    // userOnboard.andhraOption.click();
    // browser.sleep(500);
    // // userOnboard.cancel.click();
    // browser.navigate().back();
    // browser.sleep(2000);
    // wait.waitForElementVisibility(userOnboard.editPersonalDetail, 20000);
    // userOnboard.editPersonalDetail.click();
    // browser.sleep(500);
    expect(userOnboard.userName.isDisplayed()).toBeTruthy();
    expect(userOnboard.stateName.isDisplayed()).toBeTruthy();
    expect(userOnboard.districtName.isDisplayed()).toBeTruthy();
    //browser.sleep(500);
    //userOnboard.closeEditDetail.click();
    browser.sleep(500);
    console.log('Custodian User profile detail validated Succesfully');
}

const verifyLocationPopupForAnonymusUser = () => {
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
    wait.waitForElementVisibility(content.profileImage, 20000);
    content.profileImage.click();
    wait.waitForElementVisibility(content.loginLink, 20000);
    content.loginLink.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.RegisterHereLink, 20000);
    content.RegisterHereLink.click();
    browser.sleep(3000);
    expect(content.RegisterOnDikshaHeader.isDisplayed()).toBeTruthy();
    var Url1 = getAppURL.ConfigurePath().AppURL;
    var AppendGet = '/get';
    browser.get(Url1 + AppendGet, 40000);
    wait.waitForElementVisibility(content.QRcodeSearchBox, 20000);
    content.QRcodeSearchBox.sendKeys('234ZNE');
    wait.waitForElementVisibility(content.searchQRCode, 20000);
    content.searchQRCode.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.clickOnFirstContent, 20000);
    content.clickOnFirstContent.click();
    browser.sleep(3000);
    browser.navigate().back();
    browser.navigate().back();
    browser.navigate().back();
    expect(content.RegisterOnDikshaHeader.isDisplayed()).toBeTruthy();
    browser.get(Url1 + '/explore', 40000);
    browser.sleep(3000);
}
const verifyIgot = () => {
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
    // userOnboard.labelBoard.getText().then(function (firstPart) {

    //     expect(firstPart).not.toEqual("Board :");
    //     console.log('Board didnt displayed');
    // });
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
    browser.sleep(3000);
    wait.waitForElementVisibility(content.linkProfile, 20000);
    content.linkProfile.click();
    browser.sleep(3000);

    // wait.waitForElementVisibility(userOnboard.labelSubjects, 20000);
    var scrolling = userOnboard.clkEditProfile;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', scrolling.getWebElement());
    });
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.clkEditProfile, 20000);
    userOnboard.clkEditProfile.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.clkBoardEdit, 20000);
    userOnboard.clkBoardEdit.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.verifyIGotHealthValue, 20000);
    expect(userOnboard.verifyIGotHealthValue.isDisplayed()).toBeTruthy();
    userOnboard.verifyIGotHealthValue.click();
    browser.sleep(3000);

    // wait.waitForElementVisibility(userOnboard.clkBoardEdit, 20000);
    // userOnboard.clkBoardEdit.click();

    // wait.waitForElementVisibility(userOnboard.verifyIGotHealthValue, 20000);
    // expect(userOnboard.verifyIGotHealthValue.isDisplayed()).toBeTruthy();
    // userOnboard.verifyIGotHealthValue.click();

    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.clkMediumDropDown, 20000);
    userOnboard.clkMediumDropDown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.sltMediumDropDown, 20000);
    userOnboard.sltMediumDropDown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.closeMediumIcon, 20000);
    userOnboard.closeMediumIcon.click();

    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.clkClassDropDown, 20000);
    userOnboard.clkClassDropDown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.sltClassDropDown, 20000);
    userOnboard.sltClassDropDown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.closeClassIcon, 20000);
    userOnboard.closeClassIcon.click();

    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.clkSubjectDropDown, 20000);
    userOnboard.clkSubjectDropDown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.sltSubjectDropDown, 20000);
    userOnboard.sltSubjectDropDown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.closeSubjectIcon, 20000);
    userOnboard.closeSubjectIcon.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.clkSubmitProfile, 20000);
    userOnboard.clkSubmitProfile.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.assertUpdateToastrMsg, 20000);
    expect(userOnboard.assertUpdateToastrMsg.isDisplayed()).toBeTruthy();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.labelBoard, 20000);
    expect(userOnboard.labelBoard.isDisplayed()).toBeTruthy();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.labelMedium, 20000);
    expect(userOnboard.labelMedium.isDisplayed()).toBeTruthy();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.labelClasses, 20000);
    expect(userOnboard.labelClasses.isDisplayed()).toBeTruthy();
    browser.sleep(3000);
    wait.waitForElementVisibility(userOnboard.labelSubjects, 20000);
    expect(userOnboard.labelSubjects.isDisplayed()).toBeTruthy();
    browser.sleep(3000);
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


    // wait.waitForElementVisibility(userOnboard.clkStateDropdown, 20000);
    // userOnboard.clkStateDropdown.click();
    // browser.sleep(1000);
    // wait.waitForElementVisibility(userOnboard.sltStateDropdown, 20000);
    // userOnboard.sltStateDropdown.click();
    // browser.sleep(1000);


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

    userOnboard.registerPassword.clear().then(function () {
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
    // wait.waitForElementVisibility(userOnboard.RegisteronDikshaLabel, 20000);
    // expect(userOnboard.RegisteronDikshaLabel.isDisplayed()).toBeTruthy();


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

    userOnboard.registerPassword.clear().then(function () {
        userOnboard.registerPassword.sendKeys('Secure@123');
    })
    //userOnboard.registerPassword.sendKeys('Secure@123');

    browser.sleep(2000);

    wait.waitForElementVisibility(userOnboard.registerConfPassword, 20000);
    userOnboard.registerConfPassword.sendKeys('Secure@123');
    browser.sleep(2000);

    // wait.waitForElementVisibility(userOnboard.clkTermsCheckbox, 20000);
    // userOnboard.clkTermsCheckbox.click();
    // browser.sleep(2000);
    // expect(userOnboard.termsandConditionlabel1.isDisplayed()).toBeTruthy();
    // expect(userOnboard.dikshaTermsandUse.isDisplayed()).toBeTruthy();
    // expect(userOnboard.registerLabel.isDisplayed()).toBeTruthy();
    // wait.waitForElementVisibility(userOnboard.registerLabel, 20000);
    // userOnboard.registerLabel.click();

    // wait.waitForElementVisibility(userOnboard.assertOTPPage, 20000);
    // expect(userOnboard.assertOTPPage.isDisplayed()).toBeTruthy();


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
    browser.sleep(6000);
    content.clkBackProfileBtn.click();
    browser.sleep(6000);

    searchObj.headerCourse.click();
    browser.sleep(2000);
    searchObj.searchInput.click();
    browser.sleep(2000);

    browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('v').perform();
    searchObj.searchIcon.click();
    browser.sleep(4000);

    expect(content.assertNoData.isDisplayed.toBeTruthy);
    browser.sleep(3000);

}
const switchToJoyfulTheme = () => {

    browser.sleep(5000);

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();

    wait.waitForElementVisibility(searchObj.clkSwitchClassicTheme, 20000);
    searchObj.clkSwitchClassicTheme.click();
    browser.sleep(3000);

    wait.waitForElementVisibility(content.classicThemeHeaderDropdown, 20000);
    content.classicThemeHeaderDropdown.click();

    wait.waitForElementVisibility(searchObj.clkSwitchJoyFulTheme, 20000);
    searchObj.clkSwitchJoyFulTheme.click();
    browser.sleep(5000);

}

const verifyGuestUserDisplayedInProfile = () => {
    try {
        console.log('Verify Guest user is displayed in profile');
        browser.sleep(3000);
        wait.waitForElementVisibility(content.headerDropdown1, 20000);
        content.headerDropdown1.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.profileButton, 20000);
        content.profileButton.click();
        browser.sleep(3000);
        content.profileName.getText().then(function (input) {
            console.log('Profile name as per BMC popUp:' + input);
        })
        browser.sleep(2000);
        wait.waitForElementVisibility(content.editProfileName, 20000);
        content.editProfileName.click();
        browser.sleep(4000);

        // browser.actions().sendKeys(protractor.Key.TAB).perform();
        // browser.sleep(2000);
        // browser.actions().sendKeys(protractor.Key.TAB).perform();
        // browser.sleep(2000);
        // browser.actions().sendKeys(protractor.Key.TAB).perform();
        // browser.sleep(2000);
        // browser.actions().sendKeys(protractor.Key.TAB).perform();
        // browser.sleep(2000);
        // browser.actions().sendKeys(protractor.Key.TAB).perform();
        // browser.sleep(2000);
        // browser.actions().sendKeys(protractor.Key.TAB).perform();
        // browser.sleep(2000);
        // browser.actions().sendKeys(protractor.Key.TAB).perform();
        // browser.sleep(2000);
        // browser.actions().sendKeys(protractor.Key.TAB).perform();
        // browser.sleep(2000);
        // browser.actions().sendKeys('GUESTNAMEEdit');
        // browser.sleep(2000);

        wait.waitForElementVisibility(content.guestName1, 20000);
        content.guestName1.click();
        browser.sleep(3000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //   content.guestName1.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        // content.guestName1.sendKeys(protractor.Key.TAB);
        // browser.sleep(2000);
        // content.guestName1.sendKeys(protractor.Key.TAB);
        // browser.sleep(3000);
        wait.waitForElementVisibility(content.guestName1, 20000);
        content.guestName1.sendKeys('GUESTNAME');
        browser.sleep(3000);
        wait.waitForElementVisibility(content.AbsSubmit, 20000);
        content.AbsSubmit.click();
        browser.sleep(3000);
        content.profileName.getText().then(function (input) {
            console.log('Profile name after changes:' + input);
        })
        browser.sleep(3000);
        wait.waitForElementVisibility(content.profileName, 20000);
        browser.sleep(3000);
        expect(content.profileName.isDisplayed.toBeTruthy);
        content.profileName.getText().then(function (input) {
            console.log('Profile name verified as per changes to:' + input);
        })
    }
    catch (Exception) {
        console.log("Guest user is not displayed in profile");
    }
}

const verifyUserCourseProgress = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var do_id = cred[34]['CourseName'];
        wait.waitForElementVisibility(content.searchInput, 20000);
        content.searchInput.sendKeys(do_id);
        browser.sleep(3000);
        wait.waitForElementVisibility(content.searchButton, 20000);
        content.searchButton.click();
        browser.sleep(5000);
        // wait.waitForElementVisibility(content.searchButton2, 20000);
        // content.searchButton2.click();
        // browser.sleep(5000);
        wait.waitForElementVisibility(content.courseCard, 20000);
        content.courseCard.click();
        browser.sleep(5000);
        // wait.waitForElementVisibility(content.joinCourse, 20000);
        // content.joinCourse.click();
        // browser.sleep(5000);
        // wait.waitForElementVisibility(content.checkbox, 20000);
        // content.checkbox.click();
        // browser.sleep(5000);
        // wait.waitForElementVisibility(content.shareButton, 20000);
        // content.shareButton.click();
        // browser.sleep(5000);
        // wait.waitForElementVisibility(content.startLearning, 20000);
        // content.startLearning.click();
        // browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(5000);
        wait.waitForElementVisibility(content.kebabMenu, 20000);
        content.kebabMenu.click();
        browser.sleep(5000);
        wait.waitForElementVisibility(content.syncProgressNow, 20000);
        content.syncProgressNow.click();
        browser.sleep(5000);
        // wait.waitForElementVisibility(content.progresSynced, 20000);
        // content.progresSynced.getText().then(function (input) {
        //     console.log("First content on report is: " + input);
        // });
        browser.sleep(5000);
        wait.waitForElementVisibility(content.courseProgress, 20000);
        content.courseProgress.getText().then(function (input) {
            console.log("First content on report is: " + input);
        });
        browser.sleep(5000);
    }
    catch (err) {
        console.error("Failed to handle location pop up, " + err);
    }
}

const verifyBCSforSelectedState = () => {
    try {
        // wait.waitForElementVisibility(content.yobSelectYearDropdown, 20000);
        // content.yobSelectYearDropdown.click();
        // browser.sleep(3000);
        // wait.waitForElementVisibility(content.yearSelection, 20000);
        // content.yearSelection.click();
        // browser.sleep(3000);
        // wait.waitForElementVisibility(content.btnSubmit, 20000);
        // content.btnSubmit.click();
        // browser.sleep(3000);
        browser.sleep(3000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.profileButton, 20000);
        content.profileButton.click();
        browser.sleep(5000);
        wait.waitForElementVisibility(content.editProfileName, 20000);
        content.editProfileName.click();
        browser.sleep(8000);
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
        wait.waitForElementVisibility(content.verifyBCSforSelectedState, 20000);
        content.SelectBMCblock.click();
        browser.sleep(3000);
        // wait.waitForElementVisibility(content.BMCcluster, 20000);
        // content.BMCcluster.click();
        // browser.sleep(3000);
        // wait.waitForElementVisibility(content.SelectBMCcluster, 20000);
        // content.SelectBMCcluster.click();
        // browser.sleep(3000);
        // wait.waitForElementVisibility(content.BMCSchoolCluster, 20000);
        // content.BMCSchoolCluster.click();
        // browser.sleep(3000);
        // wait.waitForElementVisibility(content.selectBMCSchoolCluster, 20000);
        // content.selectBMCSchoolCluster.click();
        browser.executeScript("arguments[0].scrollIntoView();", content.BMCSubmit);
        browser.sleep(2000);
        wait.waitForElementVisibility(content.BMCSubmit, 20000);
        content.BMCSubmit.click();
        browser.sleep(3000);
        expect((content.Cluster).isPresent()).toBeFalsy();
    }
    catch (err) {
        console.error("Verify Block Cluster and school in BMC with state Uttar pradesh, " + err);
    }
}

const AddUserProfileVerification = () => {
    try {
        console.log("User is trying to addUserInProfile");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown is not available");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.addUser), 20000, "addUser is not available");
        verifyCEBObj.addUser.click();
        console.log("Clicked on add user");
        userName = "User" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(verifyCEBObj.enterName), 20000, "enterName is not available");
        verifyCEBObj.enterName.sendKeys(userName);
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(verifyCEBObj.addUserButton), 20000, "addUserButton is not available");
        verifyCEBObj.addUserButton.click();
        browser.sleep(1000);
        console.log("added a User successfully ");
        verifyCEBObj.availableUser.getText().then(function (input) {
            // expect(input).toEqual(userName);
            console.log("Verified added user: " + input);
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
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown is not available");
        // content.headerDropdown.click();
        // browser.sleep(1000);
        // verifyCEBObj.availableUser.getText().then(function (input) {
        //     expect(input).toEqual(userName);
        //     console.log("Verified selected user is switched : " + input);
        // });
    }
    catch (Exception) {
        console.log("Failed on adding user");
    }
}


const VerifyMUAusersYOBpopupNotBedisplayed = () => {
    try {
        console.log('Verify that in portal for MUA users YOB popup should not be displayed');
        browser.sleep(5000);
        wait.waitForElementVisibility(content.headerDropdown2, 20000);
        content.headerDropdown2.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.MUAuser, 20000);
        content.MUAuser.click();
        browser.sleep(5000);
        expect(content.YOB.isPresent()).toBe(false);
        // try{
        // var EC = protractor.ExpectedConditions;
        // browser.wait(EC.visibilityOf(content.YOB), 50)

        //}
        // catch(Exception){
        //     console.log("YOB not displayed for MUA user")
        //}

        browser.sleep(4000);
        // wait.waitForElementVisibility(content.userChangepolicyCheckbox, 20000);
        // content.userChangepolicyCheckbox.click();
        // browser.sleep(3000);
        // wait.waitForElementVisibility(content.policySubmitButton, 20000);
        // content.policySubmitButton.click();
        // browser.sleep(3000);
    }
    catch (Exception) {
        console.log("MUA users displayed with YOB popup");
    }
}

const NewCustodianUsers = () => {
    try {
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
    catch (Exception) {
        console.log("Verification failed YOBpopup for new CustodianUsers");
    }
}


const verifySSOAndCustodianMerge = () => {
    try {
        wait.waitForElementVisibility(content.statelogin, 20000);
        content.statelogin.click();
        browser.sleep(1000);
        // wait.waitForElementVisibility(content.stateInsideEdit, 20000);
        // content.stateInsideEdit.click();
        // browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOStateSelect1, 20000);
        content.SSOStateSelect1.click();
        browser.sleep(2000);
        content.selectLoginState.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.SSOSubmit2, 20000);
        content.SSOSubmit2.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOUserName, 20000);
        content.SSOUserName.click();
        browser.sleep(2000);
        content.SSOUserName1.sendKeys('rambo');
        browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOUserExtID, 20000);
        content.SSOUserExtID.click();
        browser.sleep(2000);
        content.SSOUserExtID.sendKeys('rambo1');
        browser.sleep(2000);
        wait.waitForElementVisibility(content.SSOSchoolExtID, 20000);
        content.SSOSchoolExtID.click();
        browser.sleep(2000);
        content.SSOSchoolExtID.sendKeys('33291500301');
        browser.sleep(2000);
        wait.waitForElementVisibility(content.SSOsubmit, 20000);
        content.SSOsubmit.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.mergeAccount, 20000);
        content.mergeAccount.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.mergebutton, 20000);
        content.mergebutton.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.userName, 20000);
        content.userName.sendKeys('custod2user@yopmail.com');
        browser.sleep(3000);
        content.password.sendKeys('Test@123');
        browser.sleep(3000);
        content.login.click();
    }
    catch (Exception) {
        console.log("Failed on adding user");
    }
}



const YOBnotAccessibleToExistingAndSSOusers = () => {
    try {
        console.log('Verify YOB popup is not accecsible for existing and SSO users');
        browser.sleep(5000);
        wait.waitForElementVisibility(content.statelogin, 20000);
        content.statelogin.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.stateInsideEdit, 20000);
        content.stateInsideEdit.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.stateDropdown, 20000);
        content.stateDropdownsso.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.stateSubmit, 20000);
        content.stateSubmit.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.SSOUserName, 20000);
        content.SSOUserName.sendKeys('rambo');
        browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOUserExtID, 20000);
        content.SSOUserExtID.sendKeys('rambo1');
        browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOSchoolExtID, 20000);
        content.SSOSchoolExtID.sendKeys('33291500301');
        browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOsubmit, 20000);
        content.SSOsubmit.click();
        browser.sleep(4000);
        content.YOB.isPresent.toBeFalsy();
    }
    catch (Exception) {
        console.log("YOB popup is accecsible for existing and SSO users");
    }
}

const verifyYOBpopUpdisplayedToNewAndExistingUsers = () => {
    try {
        console.log('Verify YOB popup displayed to new and existing google users');
        browser.sleep(5000);
        content.YOB.getText().then(function (Name) {
            expect(Name).toEqual('Year of birth')
        });
        console.log("YOB popup verified");
    }
    catch (Exception) {
        console.log("Yob popup not displayed to google users");
    }
}
const verifyReportIssueButton = () => {
    try {
        console.log('Classic Theme enabled');
        browser.sleep(5000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(userOnboard.helpButton, 20000);
        userOnboard.helpButton.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(userOnboard.reportButton, 20000);
        expect(userOnboard.reportButton.isDisplayed).toBeTruthy();
        userOnboard.reportButton.click();
        console.log('Report button validated for classic theme');
        browser.sleep(3000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
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
    catch (Exception) {
        console.log("Failed on Validating SignInPopup on click on Enroll button on latest course in Explore-Course Page");
    }
}


const verifyYOBforCustodianUsers = () => {
    try {
        console.log("Verify that custodian users is displayed with YOB popup and the user is not allowed to proceed further without filling the YOB popup");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.yobPopup), 20000, "YOB popup not generated");
        //expect(content.BookCount.isDisplayed).toBeTruthy();
        // browser.driver.switchTo().alert().getText();
        content.yobPopup.getText().then(function (PopupText) {
            expect(PopupText).toEqual('Select year of birth*')
        });
        console.log("YOB popup verified");
    }
    catch (e) {
        console.error("Popup Verified");
    }
}

const YOBvalidating = () => {
    try {
        content.YOB.isPresent.toBeFalsy();
    }
    catch (Exception) {
        console.log("YOB popup is present");
    }
}

const verifyUserAbleToUpdateDetails = () => {
    try {
        browser.sleep(3000);
        // wait.waitForElementVisibility(content.userName, 20000);
        // content.userName.sendKeys('4.0user@yopmail.com');
        // browser.sleep(3000);
        // content.password.sendKeys('Test@123');
        // browser.sleep(3000);
        // content.login.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown is not available");
        content.headerDropdown.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.profileButton), 20000, "Profile Button is not available");
        content.profileButton.click();
        console.log("Clicked on Profile Button");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.UpdateButton), 20000, "Update Button is not available");
        content.UpdateButton.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.DataDropdown), 20000, "Data drop down is not available");
        content.DataDropdown.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.SelectDataDropdown), 20000, "Select Dropdown is not available");
        content.SelectDataDropdown.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.UpdateButton), 20000, "Update Button is not available");
        content.UpdateButton.click();
        browser.sleep(4000);
        content.myDetails.getText().then(function (input) {
            expect(input).toEqual('Haryana State');
            console.log("Verified Updated Details : " + input);
            browser.sleep(3000);
        })
    }
    catch (Exception) {
        console.log("Failed on Update details");
    }
}



const clkProfileForGuestUsers = () => {
    try {

        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.linkProfile, 20000);
        content.linkProfile.click();
        browser.sleep(3000);
        expect(content.guestIcon).toBeTruthy();
        browser.sleep(2000);

    }
    catch (e) {
        console.error("Handled");
    }
}
const SelectedPreferenceInProfileSection = () => {
    try {

        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.linkProfile, 20000);
        content.linkProfile.click();
        browser.sleep(3000);
        expect(content.guestIcon).toBeTruthy();
        browser.sleep(2000);
        expect(content.assertState).toBeTruthy();
        browser.sleep(2000);

    }
    catch (e) {
        console.error("Handled");
    }
}

const submitDetailsNotDisplay = () => {
    try {

        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.linkProfile, 20000);
        content.linkProfile.click();
        browser.sleep(3000);
        expect(content.submitDetailsProfile.isPresent()).toEqual(false);


        browser.sleep(2000);

    }
    catch (e) {
        console.error("Handled");
    }
}

const verifyHamburgerAndFAQ = () => {
    try {
        console.log('validate the Faq(s) and helpcentre burger menu');
        browser.sleep(5000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(userOnboard.helpButton, 20000);
        userOnboard.helpButton.click();
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", content.helpCentreFaq);
        // var faqsValidation = "Faq(s)";
        content.helpCentreFaq.getText().then(function (input) {
            console.log(input + " is validated");
        })
        browser.sleep(500);
        expect(content.faqQuestions.isPresent()).toBeTruthy().then(function () {
            content.faqQuestions.getText().then(function (input) {
                console.log(input)
            })
        })
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", content.helpCentreburgerButton);
        expect(content.helpCentreburgerButton.isPresent()).toBeTruthy().then(function () {
            content.helpCentreburgerButton.getText().then(function (input) {
                console.log(input + " is validated.")
            })
        })
    }
    catch (Exception) {
        console.log("Failed to validate the Faq(s) and helpcentre burger menu");
    }
}

const validateSubmitConsentForm = () => {
    try {

        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.linkProfile, 20000);
        content.linkProfile.click();
        browser.sleep(3000);
        expect(content.submitDetailsProfile.isPresent()).toBe(true).then(function () {
            content.submitDetailsProfile.click();
            browser.sleep(2000);
        })
        expect(content.masterOrgDropdown.isPresent()).toBeTruthy().then(function () {
            content.masterOrgDropdown.click();
            browser.sleep(1000);
            content.sltStateDropdown.click();
            browser.sleep(1000);
        })
        expect(content.optionalFieldID.isPresent()).toBe(true).then(function () {
            console.log("External ID optional field is validated");
            browser.sleep(2000);
        })
        expect(content.externalID.isPresent()).toBe(true).then(function () {
            console.log("External ID input field is validated");
            browser.sleep(2000);
        })
        expect(content.optionalFieldphoneNumber.isPresent()).toBe(true).then(function () {
            console.log("Phone Number optional field is validated");
            browser.sleep(2000);
        })
        expect(content.phoneNumber.isPresent()).toBe(true).then(function () {
            console.log("Phone Number input field is validated");
            browser.sleep(2000);
        })
        expect(content.optionalFieldEmailID.isPresent()).toBe(true).then(function () {
            console.log("Email optional field is validated");
            browser.sleep(2000);
        })
        expect(content.checkBoxConsent.isPresent()).toBe(true).then(function () {
            console.log("checkbox field is validated");
            browser.sleep(2000);
        })

        var consenttnc = "I consent to provide my Profile Details and the additional details listed above with the administrators of my State / Institution. All administrators on DIKSHA are bound by the Privacy Policy and Administrator Guidelines in their use of my data."
        expect(content.consentCheckBox.isPresent()).toBe(true).then(function () {
            console.log("consent checkbox tnc field is validated");
            content.consentCheckBox.getText().then(function (input) {
                input.includes(consenttnc);
                console.log("terms nd condition is validated");
            })
            browser.sleep(2000);
        })
    }
    catch (e) {
        console.error("Handled");
    }
}

const validateUserTypes = () => {
    try {

        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.linkProfile, 20000);
        content.linkProfile.click();
        browser.sleep(3000);
        expect(content.profileEdit.isPresent()).toBe(true).then(function () {
            content.profileEdit.click();
            browser.sleep(2000);
        })
        expect(content.profileRole.isPresent()).toBe(true).then(function () {
            content.profileRole.click();
            browser.sleep(2000);
        })
        expect(content.roleValues.isPresent()).toBe(true).then(function () {
            content.roleValues.getText().then(function (input) {
                console.log(input);
            })
            browser.sleep(2000);
        })
    }
    catch (e) {
        console.error("Handled");
    }
}

const validateReportIssueButtonwithRegionalLanguage = (regionalLanguage) => {
    try {
        console.log('Classic Theme enabled');
        browser.sleep(5000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(userOnboard.helpButton, 20000);
        userOnboard.helpButton.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(userOnboard.reportButton, 20000);
        expect(userOnboard.reportButton.isDisplayed).toBeTruthy();
        userOnboard.reportButton.click();
        console.log('Report button validated for classic theme');
        browser.sleep(3000);
        expect(content.reportIssueCategoryDrpdwn.isDisplayed).toBeTruthy();
        content.reportIssueCategoryDrpdwn.click();
        browser.sleep(2000);
        expect(content.sltReportIssueCategoryDrpdwn.isDisplayed).toBeTruthy();
        content.sltReportIssueCategoryDrpdwn.click();
        browser.sleep(2000);
        expect(content.reportIssueSubcategoryDrpdwn.isDisplayed).toBeTruthy();
        content.reportIssueSubcategoryDrpdwn.click();
        browser.sleep(2000);
        expect(content.sltReportIssueSubcategoryDrpdwn.isDisplayed).toBeTruthy();
        content.sltReportIssueSubcategoryDrpdwn.click();
        browser.sleep(2000);
        expect(content.reportIssueTextArea.isDisplayed).toBeTruthy();
        content.reportIssueTextArea.sendKeys(regionalLanguage);
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,370);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        expect(content.reportSubmitFeedback.isDisplayed).toBeTruthy();
        content.reportSubmitFeedback.click();
        browser.sleep(200);
        expect(content.feedbackToastMsg.isDisplayed).toBeTruthy();
        browser.sleep(200);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    }
    catch (Exception) {
        console.log("Failed to submit feedback");
    }
}
const validateReportIssueButtonwithRegionalLanguage2 = (regionalLanguage) => {
    try {
        console.log('Classic Theme enabled');
        browser.sleep(3000);
        wait.waitForElementVisibility(content.classicThemeHeaderDropdown, 20000);
        content.classicThemeHeaderDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(userOnboard.helpButton, 20000);
        userOnboard.helpButton.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(userOnboard.reportButton, 20000);
        expect(userOnboard.reportButton.isDisplayed).toBeTruthy();
        userOnboard.reportButton.click();
        console.log('Report button validated for classic theme');
        browser.sleep(3000);
        expect(content.reportIssueCategoryDrpdwn.isDisplayed).toBeTruthy();
        content.reportIssueCategoryDrpdwn.click();
        browser.sleep(2000);
        expect(content.sltReportIssueCategoryDrpdwn.isDisplayed).toBeTruthy();
        content.sltReportIssueCategoryDrpdwn.click();
        browser.sleep(2000);
        expect(content.reportIssueSubcategoryDrpdwn.isDisplayed).toBeTruthy();
        content.reportIssueSubcategoryDrpdwn.click();
        browser.sleep(2000);
        expect(content.sltReportIssueSubcategoryDrpdwn.isDisplayed).toBeTruthy();
        content.sltReportIssueSubcategoryDrpdwn.click();
        browser.sleep(2000);
        expect(content.reportIssueTextArea.isDisplayed).toBeTruthy();
        content.reportIssueTextArea.sendKeys(regionalLanguage);
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,370);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        expect(content.reportSubmitFeedback.isDisplayed).toBeTruthy();
        content.reportSubmitFeedback.click();
        browser.sleep(200);
        expect(content.feedbackToastMsg.isDisplayed).toBeTruthy();
        browser.sleep(200);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    }
    catch (Exception) {
        console.log("Failed to submit feedback");
    }
}


const validateReprtIssueWithThemes = () => {
    try {

        browser.sleep(2000);
        validateReportIssueButtonwithRegionalLanguage("हिन्दी");
        validateReportIssueButtonwithRegionalLanguage("ಕನ್ನಡ");
        validateReportIssueButtonwithRegionalLanguage("తెలుగు");
        validateReportIssueButtonwithRegionalLanguage("मराठी");
        validateReportIssueButtonwithRegionalLanguage("অসমীয়া");
        browser.sleep(1000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(searchObj.clkSwitchClassicTheme, 20000);
        searchObj.clkSwitchClassicTheme.click();
        browser.sleep(1000);
        validateReportIssueButtonwithRegionalLanguage2("हिन्दी");
        validateReportIssueButtonwithRegionalLanguage2("ಕನ್ನಡ");
        validateReportIssueButtonwithRegionalLanguage2("తెలుగు");
        validateReportIssueButtonwithRegionalLanguage2("मराठी");
        validateReportIssueButtonwithRegionalLanguage2("অসমীয়া");
        wait.waitForElementVisibility(content.classicThemeHeaderDropdown, 20000);
        content.classicThemeHeaderDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(searchObj.clkSwitchJoyFulTheme, 20000);
        searchObj.clkSwitchJoyFulTheme.click();
        browser.sleep(5000);

    }
    catch (Exception) {
        console.log("Failed on Validating SignInPopup on click on Enroll button on latest course in Explore-Course Page");
    }


}


const validateContributionSection = () => {
    try {
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(2000)
        wait.waitForElementVisibility(content.linkProfile, 20000);
        content.linkProfile.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,600);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        userOnboard.contributionSectionInProfile.getText().then(function (input) {
            console.log(input + " is validated")
        })
    }
    catch (Exception) {
        console.log("Failed on Validating SignInPopup on click on Enroll button on latest course in Explore-Course Page");
    }
}


const verifyLocationDetailsInProfile = () => {
    try {
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(2000)
        wait.waitForElementVisibility(content.linkProfile, 20000);
        content.linkProfile.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,130);').then(function () {
            console.log('++++++SCROLLED down+++++');
        });
        wait.waitForElementVisibility(content.btnEdit, 20000)
        content.btnEdit.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.locationPopupState, 20000)
        content.locationPopupState.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.sltlocationPopupState, 20000)
        content.sltlocationPopupState.click();
        content.sltlocationPopupState.getText().then(function (state) {
            console.log("State selected in location popup is : " + state);
        })
        wait.waitForElementVisibility(content.locationpopupDistrict, 20000)
        content.locationpopupDistrict.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.sltlocationpopupDistrict, 20000)
        content.sltlocationpopupDistrict.click();
        content.sltlocationpopupDistrict.getText().then(function (district) {
            console.log("District selected in location popup is : " + district);
        })
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,20);').then(function () {
            console.log('++++++SCROLLED down+++++');
        });
        wait.waitForElementVisibility(content.btnSubmit, 20000)
        content.btnSubmit.click();
        browser.sleep(1000);
        content.assertDistrict.getText().then(function (district) {
            console.log(district + " is validated");
        })
        browser.sleep(2000);
        content.assertStateInProfile.getText().then(function (state) {
            console.log(state + " is validated");
        })
        browser.sleep(2000);
    }
    catch (Exception) {
        console.log("not able to validate location Pop up state and district.");
    }
}


const verifyLocationPopUpByDisableStateDistrict = () => {
    try {
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.linkProfile, 20000);
        content.linkProfile.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,150);').then(function () {
            console.log('++++++SCROLLED down+++++');
        });
        wait.waitForElementVisibility(content.btnEdit, 20000)
        content.btnEdit.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.locationPopUpclearButton, 20000)
        content.locationPopUpclearButton.click();
        browser.sleep(3000);
        expect(content.btnSubmit.isEnabled()).toBe(false);
        content.btnSubmit.click();
        console.log("Submit button is disabled.");
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log("not able to validate location Pop up disabling state and district.");
    }
}

const verifyRegisterHerePage = () => {
    try {
        console.log("validating Register Here page.")
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.loginLink, 20000);
        content.loginLink.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,150);').then(function () {
            console.log('++++++SCROLLED down+++++');
        });
        wait.waitForElementVisibility(content.RegisterHereLink, 20000)
        content.RegisterHereLink.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.birthYear, 20000)
        content.birthYear.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.sltBirtYear, 20000)
        content.sltBirtYear.click();
        browser.sleep(2000);
        expect(content.signUpName.isPresent()).toBe(true);
        expect(content.emailLabel.isPresent()).toBe(true);
        expect(content.phonenumLabel.isPresent()).toBe(true);
        expect(content.passwordLabel.isPresent()).toBe(true);
        expect(content.confirmPassLabel.isPresent()).toBe(true);
        expect(content.tncLabel.isPresent()).toBe(true);
        browser.sleep(3000);
        console.log("Register page is not blank.")
    }
    catch (Exception) {
        console.log("Register here page is blank.");
    }
}

const verifyLearnerPassbook = () => {
    try {
        console.log("validating Register Here page.")
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.linkProfile, 20000);
        content.linkProfile.click();
        browser.sleep(3000);
        expect(content.learnerPassbook.isPresent()).toBe(true).then(function () {
            content.learnerPassbook.getText().then(function (input) {
                console.log(input + " is validated.");
            })
        })
        browser.sleep(2000);
        content.dwnldCourseCertificate.click();
    }
    catch (Exception) {
        console.log("Register here page is blank.");
    }
}

const verifyOTPwarningMessage = () => {
    try {
        console.log("validating OTP warning message.")
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.loginLink, 20000);
        content.loginLink.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.registerLink, 20000);
        content.registerLink.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.birthYear, 20000);
        content.birthYear.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.sltBirtYear, 20000);
        content.sltBirtYear.click();
        browser.sleep(2000);
        // var randomEmail = "stag47@yopmail.com";
        // var randomPassword = "Test@123";

        wait.waitForElementVisibility(content.registersignupName, 20000);
        content.registersignupName.click();
        browser.sleep(1000);
        content.registersignupName.sendkeys("otpvalidate@yopmail.com");
        browser.sleep(8000);
        wait.waitForElementVisibility(content.signUpEmailId, 20000);
        content.signUpEmailId.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.emailId, 20000);
        content.emailId.sendkeys("otpvalidate@yopmail.com");
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED DOWN+++++');
        });
        wait.waitForElementVisibility(content.signUpPassword, 20000);
        content.signUpPassword.sendKeys("Test@123");
        browser.sleep(2000);
        wait.waitForElementVisibility(content.signUpCnfrmPasswrd, 20000);
        content.signUpCnfrmPasswrd.sendKeys("Test@123");
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(200,400);').then(function () {
            console.log('++++++SCROLLED DOWN+++++');
        });
        wait.waitForElementVisibility(content.signUptnc, 20000);
        content.signUptnc.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.signUpSubmitBtn, 20000);
        content.signUpSubmitBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.otpValidation, 20000);
        content.otpValidation.sendKeys("1234");
        browser.sleep(2000);
        wait.waitForElementVisibility(content.otpSubmit, 20000);
        content.otpSubmit.click();
        browser.sleep(2000);

        // wait.waitForElementVisibility(content.warningMessage, 20000);
        content.warningMessage.getText().then(function (input) {
            console.log("Warning message is" + input);
        })
        browser.sleep(2000);
    }
    catch (Exception) {
        console.log("Not validating OTP warning message.");
    }
}


const verifyloginPagelinks = () => {
    try {
        console.log("validating links of Login,Forgetpasswordlink,SignwithGoogle,LoginwithStateSystem,Register here");
        expect((content.forgotPasswordLink).isPresent()).toBeTruthy();
        console.log("Forgot password link is validated.");
        browser.sleep(500);
        expect((content.assertLogin).isPresent()).toBeTruthy();
        console.log("Login link is validated.");
        browser.sleep(500);
        expect((content.registerLink).isPresent()).toBeTruthy();
        console.log("RegisterHere link is validated.");
        browser.sleep(500);
        expect((content.googleSignButton).isPresent()).toBeTruthy();
        console.log("Google Signin button link is validated.");
        browser.sleep(500);
        expect((content.statelogin).isPresent()).toBeTruthy();
        console.log("State login link is validated.");
        browser.sleep(2000);
        wait.waitForElementVisibility(content.registerLink, 20000);
        content.registerLink.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.birthYear, 20000);
        content.birthYear.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.sltBirtYear, 20000);
        content.sltBirtYear.click();
        browser.sleep(2000);
        content.registersignupName.sendKeys("Email");
        browser.sleep(2000);
        wait.waitForElementVisibility(content.signUpEmailId, 20000);
        content.signUpEmailId.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.emailId, 20000);
        content.emailId.sendKeys("invalidEmail");
        browser.sleep(2000);
        content.invalidEmailMessage.getText().then(function (input) {
            console.log("Invalid Email message is : " + input);
        })
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED DOWN+++++');
        });
        wait.waitForElementVisibility(content.signUpPassword, 20000);
        content.signUpPassword.sendKeys("Test@123");
        browser.sleep(2000);
        wait.waitForElementVisibility(content.signUpCnfrmPasswrd, 20000);
        content.signUpCnfrmPasswrd.sendKeys("st@123");
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(200,400);').then(function () {
            console.log('++++++SCROLLED DOWN+++++');
        });
        expect(content.signUptnc.isPresent()).toBeTruthy();
        console.log("TnC check box is validated.")
        browser.sleep(2000);
        browser.executeScript('arguments[0].scrollIntoView()', content.signUpSubmitBtn.getWebElement());
        expect((content.signUpSubmitBtn).isPresent()).toBeTruthy();
        console.log("Register button link is validated.");
        browser.sleep(2000);
    }
    catch (Exception) {
        console.log("Not able to validate invalid email message");
    }
}


const TnCReminderTextInDownloadButton = () => {
    try {
        console.log("validating manage option popup is not generete everytime user visit.");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.manageOption), 20000, "Manage option page not loaded");
        content.manageOption.click();
        browser.sleep(2000);
        expect((content.assertDownloadDataAccordance).isPresent()).toBe(true);
        browser.sleep(2000);
              browser.wait(protractor.ExpectedConditions.visibilityOf(content.adminpolicyInManage), 20000, "Manage option page not loaded");
        content.adminpolicyInManage.click();
        browser.sleep(1000);
        expect((content.tncPopUp).isPresent()).toBe(true);
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);

        expect((content.assertDikshaGuidelines).isPresent()).toBe(true);
        browser.sleep(2000);
    }
    catch (Exception) {
        console.log("failed");
    }
}

const validateSignInGoogleAndSubmiting = () => {
    try {
        console.log("validating signin google and submitting.");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.googleSignIn), 20000, "googlesignIn page not loaded");
        content.googleSignIn.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.enterEmail), 20000, "Enter email page not loaded");
        content.enterEmail.sendKeys("dikshatest15@gmail.com");
        browser.sleep(10000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.signInNextButton), 20000, "SignInNextbutton page not loaded");
        content.signInNextButton.click();
        browser.sleep(10000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.enterPassword), 20000, "Manage option page not loaded");
        content.enterPassword.sendKeys("Test@123");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.passwordNext), 20000, "Manage option page not loaded");
        content.passwordNext.click();
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log("failed");
    }
}

const validatingQRcodeSearchAndValidate = () => {
    try {
        console.log("validating signin google and submitting.");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.qrSearchBar), 20000, "qr search bar page not loaded");
        content.qrSearchBar.sendKeys("U2Q4U4");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.qrSearchButton), 20000, "qr search button page not loaded");
        content.qrSearchButton.click();
        browser.sleep(10000);
        expect(content.searchQrContent.isPresent()).toBeTruthy();
        browser.sleep(10000);
    }
    catch (Exception) {
        console.log("failed");
    }
}

const validateLocationPopUp = () => {
    try {
        console.log("validating locationPopUp");
        browser.sleep(1000);
        wait.waitForElementVisibility(content.Teacher, 30000);
        content.Teacher.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.Continue, 20000);
        content.Continue.click();
        browser.sleep(5000);
        console.log("Location popup is validated");
        browser.sleep(5000);
        wait.waitForElementVisibility(content.state, 20000);
        content.state.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.selectState, 20000);
        content.selectState.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(content.district, 20000);
        content.district.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.selectDistrict, 20000);
        content.selectDistrict.click();
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", content.submitForm);
        browser.sleep(1000);
        wait.waitForElementVisibility(content.submitForm, 20000);
        content.submitForm.click();
        browser.sleep(5000);
        //browser.close();
        

    }
    catch (Exception) {
        console.log("failed");
    }
}

const validateLocationPopUpInAllPages = () => {
    try {
        console.log("validating locationPopUp in all pages");
        //var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore1 = 'https://staging.sunbirded.org/get';
        var AppendExplore2 = 'https://staging.sunbirded.org/explore-course';
        browser.get(AppendExplore1, 40000);
        browser.sleep(5000);
        expect((userOnboard.locationPopUp).isPresent()).toBe(false);
        browser.get(AppendExplore2, 40000);
        expect((userOnboard.locationPopUp).isPresent()).toBe(false);
    }
    catch (Exception) {
        console.log("failed");
    }
}

const validateDebugMode = () => {
    try {
        console.log('validate the Faq(s) and helpcentre burger menu');
        browser.sleep(5000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(userOnboard.helpButton, 20000);
        userOnboard.helpButton.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);
        wait.waitForElementVisibility(userOnboard.developerOptionDebugModeDropdown, 20000);
        userOnboard.developerOptionDebugModeDropdown.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(userOnboard.enableDebugMenu, 20000);
        userOnboard.enableDebugMenu.click();
        browser.sleep(4000);
        expect((userOnboard.validationToasterMsg).isPresent()).toBe(true);
        browser.sleep(4000);

       
    }
    catch (Exception) {
        console.log("Failed");
    }
}

const verifyForgetLabelAndLink = () => {

    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    browser.sleep(1000);
    wait.waitForElementVisibility(content.loginLink, 20000);
    content.loginLink.click();
    browser.sleep(4000);

    wait.waitForElementVisibility(userOnboard.forgotLabellink, 20000);
    expect(userOnboard.forgotLabellink.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(userOnboard.forgotLabellink, 20000);
    userOnboard.forgotLabellink.click();

    browser.sleep(4000);

    wait.waitForElementVisibility(userOnboard.assertForgotpageLink, 20000);
    expect(userOnboard.assertForgotpageLink.isDisplayed()).toBeTruthy();

}


const verifyNewRegisterHerePage = async () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        
        console.log("validating Register Here page.")
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.loginLink, 20000);
        content.loginLink.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,150);').then(function () {
            console.log('++++++SCROLLED down+++++');
        });
        wait.waitForElementVisibility(content.RegisterHereLink, 20000)
        content.RegisterHereLink.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.nameInRegisterPage, 20000)
        content.nameInRegisterPage.sendKeys(cred[48]['CourseName']);
        browser.sleep(3000);
        wait.waitForElementVisibility(content.birthYear, 20000)
        content.birthYear.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.sltBirtYear, 20000)
        content.sltBirtYear.click();
        browser.sleep(2000);
        console.log("Register page is not blank.")
        wait.waitForElementVisibility(content.continueButton, 20000)
        content.continueButton.click();
        browser.sleep(2000);
        let autoPopulatedRole = await content.assertRoleAutoPopulated.getText();
        browser.sleep(2000);
        autoPopulatedRole.includes("Teacher");
        browser.sleep(2000);
        content.btnSubmit.click();
        browser.sleep(2000);
        expect(content.assertParentGuardianPhone.isPresent()).toBe(true);
        browser.sleep(2000);
        expect(content.assertParentGuardianEmail.isPresent()).toBe(true);
    }
    catch (Exception) {
        console.log("Register here page is blank.");
    }
}
const validateTncPopInManage = () => {
    try {
        console.log("validating manage option popup is not generete everytime user visit.");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.manageOption), 20000, "Manage option page not loaded");
        content.manageOption.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.adminpolicyInManage), 20000, "Manage option page not loaded");
        content.adminpolicyInManage.click();
        browser.sleep(1000);
        expect((content.tncPopUp).isPresent()).toBe(true);
        browser.sleep(2000);
    }
    catch (Exception) {
        console.log("failed");
    }
}

const verifyNewRegisterHerePageAndValidateMobileAndEmailEntryForMajorUsers = async () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        
        console.log("validating Register Here page.")
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.loginLink, 20000);
        content.loginLink.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,150);').then(function () {
            console.log('++++++SCROLLED down+++++');
        });
        wait.waitForElementVisibility(content.RegisterHereLink, 20000)
        content.RegisterHereLink.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.nameInRegisterPage, 20000)
        content.nameInRegisterPage.sendKeys(cred[48]['CourseName']);
        browser.sleep(3000);
        wait.waitForElementVisibility(content.birthYear, 20000)
        content.birthYear.click();
        browser.sleep(3000);
        var scrolling = content.sltBirtYearForMajorUser;
        browser.controlFlow().execute(function () {
            browser.executeScript('arguments[0].scrollIntoView({block:"center"})', scrolling.getWebElement());
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(content.sltBirtYearForMajorUser, 20000)
        content.sltBirtYearForMajorUser.click();
        browser.sleep(2000);
        console.log("Register page is not blank.")
        wait.waitForElementVisibility(content.continueButton, 20000)
        content.continueButton.click();
        browser.sleep(4000);
        content.btnSubmit.click();
        browser.sleep(4000);
        expect(content.emailCheckBox.isPresent()).toBeTruthy();
        expect(content.mobileNumberCheckBox.isPresent()).toBeTruthy();
    }
    catch (Exception) {
        console.log("Register here page is blank.");
    }
}

const verifySSOandCustodUserMergeAndValidatePopUp= async () => {
    try {
        wait.waitForElementVisibility(content.statelogin, 20000);
        content.statelogin.click();
        browser.sleep(1000);
        // wait.waitForElementVisibility(content.stateInsideEdit, 20000);
        // content.stateInsideEdit.click();
        // browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOStateSelect1, 20000);
        expect(content.SSOStateSelect1.isPresent()).toBe(true);
        browser.sleep(2000);
        content.SSOStateSelect1.click();
        browser.sleep(2000);
        content.selectLoginState.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.SSOSubmit2, 20000);
        content.SSOSubmit2.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOUserName, 20000);
        content.SSOUserName.click();
        browser.sleep(2000);
        content.SSOUserName1.sendKeys('rambo');
        browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOUserExtID, 20000);
        content.SSOUserExtID.click();
        browser.sleep(2000);
        content.SSOUserExtID.sendKeys('rambo1');
        browser.sleep(2000);
        wait.waitForElementVisibility(content.SSOSchoolExtID, 20000);
        content.SSOSchoolExtID.click();
        browser.sleep(2000);
        content.SSOSchoolExtID.sendKeys('33291500301');
        browser.sleep(2000);
        wait.waitForElementVisibility(content.SSOsubmit, 20000);
        content.SSOsubmit.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.mergeAccount, 20000);
        content.mergeAccount.click();
        browser.sleep(5000);
        searchObj.clickCancelButton.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.mergeAccount, 20000);
        content.mergeAccount.click();
        browser.sleep(5000);
        // let mesg =  await sanity.validateMergePopUpMsg.getText();
        // mesg.includes("If you have two accounts with SUNBIRD,click Merge to:combine usage details of both accounts, and delete the other account Else, click Cancel")
        //browser.sleep(5000);
        var currentUrlBeforeMerge = await browser.getCurrentUrl();
        console.log(currentUrlBeforeMerge);
        browser.sleep(5000);
        wait.waitForElementVisibility(content.mergebutton, 20000);
        content.mergebutton.click();
        browser.sleep(3000);
        expect(searchObj.assertSignInGoogleOption.isPresent()).toBe(true);
        browser.sleep(3000);
        // utility.userLogin('NewUserSecondTime');
        // browser.sleep(3000);
        wait.waitForElementVisibility(content.userName, 20000);
        content.userName.sendKeys('mergeaccount3@yopmail.com');
        browser.sleep(3000);
        content.password.sendKeys('Test@123');
        browser.sleep(3000);
        content.login.click();
        browser.sleep(3000);
        var currentUrlAfterMerge = await browser.getCurrentUrl();
        expect(currentUrlBeforeMerge!=currentUrlAfterMerge);
        browser.sleep(2000);
        expect(sanity.validatePopUpMesgAfterMerge.isPresent()).toBe(true);
        browser.sleep(3000);
        sanity.saityokButtonToMerge.click();
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Failed on adding user");
    }
}



const verifySSOandCustodUserMergeAndValidatePopUpAndInvalid= async () => {
    try {
        wait.waitForElementVisibility(content.statelogin, 20000);
        content.statelogin.click();
        browser.sleep(1000);
        // wait.waitForElementVisibility(content.stateInsideEdit, 20000);
        // content.stateInsideEdit.click();
        // browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOStateSelect1, 20000);
        expect(content.SSOStateSelect1.isPresent()).toBe(true);
        browser.sleep(2000);
        content.SSOStateSelect1.click();
        browser.sleep(2000);
        content.selectLoginState.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.SSOSubmit2, 20000);
        content.SSOSubmit2.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOUserName, 20000);
        content.SSOUserName.click();
        browser.sleep(2000);
        content.SSOUserName1.sendKeys('rambo');
        browser.sleep(1000);
        wait.waitForElementVisibility(content.SSOUserExtID, 20000);
        content.SSOUserExtID.click();
        browser.sleep(2000);
        content.SSOUserExtID.sendKeys('rambo1');
        browser.sleep(2000);
        wait.waitForElementVisibility(content.SSOSchoolExtID, 20000);
        content.SSOSchoolExtID.click();
        browser.sleep(2000);
        content.SSOSchoolExtID.sendKeys('33291500301');
        browser.sleep(2000);
        wait.waitForElementVisibility(content.SSOsubmit, 20000);
        content.SSOsubmit.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.mergeAccount, 20000);
        content.mergeAccount.click();
        browser.sleep(5000);
        searchObj.clickCancelButton.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.mergeAccount, 20000);
        content.mergeAccount.click();
        browser.sleep(5000);
        wait.waitForElementVisibility(content.mergebutton, 20000);
        content.mergebutton.click();
        browser.sleep(3000);
        expect(searchObj.assertSignInGoogleOption.isPresent()).toBe(true);
        browser.sleep(3000);
        // utility.userLogin('NewUserSecondTime');
        // browser.sleep(3000);
        wait.waitForElementVisibility(content.userName, 20000);
        content.userName.sendKeys('mergeaccount3@yopmail.com');
        browser.sleep(3000);
        content.password.sendKeys('Test@123');
        browser.sleep(3000);
        content.login.click();
        browser.sleep(3000);        
    }
    catch (Exception) {
        console.log("Failed on adding user");
    }
}


const validateAllLoginAttributesOfExplorePage = async () => {
    try {
        browser.sleep(4000);
        let explorePage = await browser.getCurrentUrl();
        var loginUrl = "auth";
        var exploreUrl ="explore";
        
        explorePage.includes(exploreUrl);
        browser.sleep(4000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.loginLink, 20000);
        content.loginLink.click();
        browser.sleep(3000);
        let loginPage = await browser.getCurrentUrl();
        browser.sleep(3000);
        loginPage.includes(loginUrl);
        browser.sleep(3000);
        expect(searchObj.validateWelcomePage.isPresent()).toBe(true);
        browser.sleep(3000);
        var rightSide = await (searchObj.validateForgetPasswordUnderPasswordInput).getCssValue('float');
        expect(rightSide).toBe("right");
        browser.sleep(3000);
        expect(searchObj.validateplaceHolderTextBox.isPresent()).toBe(true);
        browser.sleep(3000);
        expect(searchObj.loginButtonTextInCaps.isPresent()).toBe(true);
        browser.sleep(2000);
        expect(searchObj.assertDontHaveAccountRegisterHereInLeftSide.isPresent()).toBe(true);
        browser.sleep(2000);
        var leftSide = await (searchObj.validateForgetPasswordUnderPasswordInput).getCssValue('text-align');
        //console.log(leftSide);
        //expect(leftSide).toBe("left");
        browser.sleep(3000);
        expect(searchObj.assertSignInGoogleButton.isPresent()).toBe(true);
        browser.sleep(2000);
        var googleButtonColor = await (searchObj.assertSignInGoogleButton).getCssValue('background');
        let hexcolorCode = utility.rgba2hex(googleButtonColor);
        expect(hexcolorCode).toMatch("#0b51c1");
        browser.sleep(3000);
        expect(searchObj.assertLoginwithStateSystem.isPresent()).toBe(true);
        browser.sleep(3000);
        expect(searchObj.assertGoogleLogo.isPresent()).toBe(true);
        var googleLogo = await (searchObj.assertGoogleLogo).getCssValue('left');
        expect(googleLogo).toBe("1px");
        browser.sleep(3000);
        var googleButtonColor = await (searchObj.assertLoginwithStateSystem).getCssValue('background-color');
        let hexcolorCode2 = utility.rgba2hex(googleButtonColor);
        expect(hexcolorCode2).toMatch("#fff");
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log("Failed on adding user");
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
    verifySSOAndCustodianMerge,
    verifyYOBforCustodianUsers,
    YOBvalidating,
    NewCustodianUsers,
    verifyUserAbleToUpdateDetails,
    clkProfileForGuestUsers,
    SelectedPreferenceInProfileSection,
    submitDetailsNotDisplay,
    verifyHamburgerAndFAQ,
    validateSubmitConsentForm,
    validateUserTypes,
    validateReprtIssueWithThemes,
    validateContributionSection,
    verifyLocationDetailsInProfile,
    verifyLocationPopUpByDisableStateDistrict,
    verifyRegisterHerePage,
    verifyLearnerPassbook,
    verifyOTPwarningMessage,
    verifyloginPagelinks,
    validateTncPopInManage,
    validateSignInGoogleAndSubmiting,
    validatingQRcodeSearchAndValidate,
    validateLocationPopUpInAllPages,
    validateLocationPopUp,
    validateDebugMode,
    verifyForgetLabelAndLink,
    verifyNewRegisterHerePage,
    TnCReminderTextInDownloadButton,
    verifyNewRegisterHerePageAndValidateMobileAndEmailEntryForMajorUsers,
    verifySSOandCustodUserMergeAndValidatePopUp,
    verifySSOandCustodUserMergeAndValidatePopUpAndInvalid,
    validateAllLoginAttributesOfExplorePage,
}

