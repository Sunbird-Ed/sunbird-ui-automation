const { browser } = require("protractor");

const { Workbook, Row, Cell, Worksheet } = require("exceljs");
var XLSX = require("xlsx");
const genericFun = require(protractor.basePath +"/test/genericFunctions/GenericFunction.js");
let getExcelPath = require(protractor.basePath +
  "/test/pathFolder/changePath.js");
let getAppURL = require(protractor.basePath + "/test/pathFolder/changePath.js");
const usronBoardPage = require(protractor.basePath +
  "/test/pages/userOnBoarding/UserOnBoardingPage.js");
const wait = require(protractor.basePath + "/helper/waiters.js");
const ccpage = require(protractor.basePath +
  "/test/pages/contentCreation/contentCreation.po.js");
const data = require(protractor.basePath +
  "/test/testdata/login/login.td.json");
const signUp = require(protractor.basePath +
  "/test/pages/signUpPage/signUpPage.po.js");
var content = ccpage.contentCreation();
var signUpPageObj = signUp.signUpPage();

const verifyAdminDashBoard = () => {
  try {
    browser.sleep(3000);
    usronBoardPage.UserOnBoarding().dropdownProfile.click();
    browser.sleep(3000);
    usronBoardPage.UserOnBoarding().clkAdminDashBoard.click();
    console.log("clicked on Admin Dashboard");
    browser.sleep(3000);

  } catch (Err) {
    console.error("Failed to verify admin dashboard, " + Err);
  }
};


const userLogin = (roleName) => {
  try {
    var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
    var cred = genericFun.readLoginDataFromExcelFile(sheetPath, "1", roleName);
    browser.sleep(4000);
    wait.waitForElementVisibility(content.headerDropdown1, 20000);
    content.headerDropdown1.click();
    browser.sleep(300);
    browser.executeScript("arguments[0].scrollIntoView();", content.loginLink);
    browser.sleep(200);
    wait.waitForElementVisibility(content.loginLink, 20000);
    content.loginLink.click();
    browser.sleep(300);
    wait.waitForElementVisibility(content.userName, 20000);
    content.userName.sendKeys(cred[0]["Username"]);
    browser.sleep(100);
    content.password.sendKeys(cred[0]["Password"]);
    browser.sleep(100);
    content.login.click();
    browser.sleep(3000);
  } catch (Err) {
    console.error("Failed to user login, " + Err);
  }
};



const userLoginWithInvalidCredential = (roleName) => {
  try {
    var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
    var cred = genericFun.readLoginDataFromExcelFile(sheetPath, "1", roleName);
    wait.waitForElementVisibility(content.headerDropdown1, 20000);
    content.headerDropdown1.click();
    wait.waitForElementVisibility(content.loginLink, 20000);
    content.loginLink.click();
    wait.waitForElementVisibility(content.userName, 20000);
    content.userName.sendKeys(cred[0]["Username"]);
    content.password.sendKeys(cred[0]["Password"]);
    content.login.click();
    expect(signUpPageObj.errorSummary.isDisplayed()).toBeTruthy();
  } catch (err) {
    console.error("failed to login with invalid credential, " + err);
  }
};



const handleDropDown = () => {
  try {
    browser.sleep(1000);
    wait.waitForElementVisibility(content.Teacher, 30000);
    content.Teacher.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.Continue, 20000);
    content.Continue.click();
    browser.sleep(5000);

    // wait.waitForElementVisibility(content.state, 20000);
    // content.state.click();
    // browser.sleep(2000);
    // wait.waitForElementVisibility(content.selectState, 20000);
    // content.selectState.click();
    // browser.sleep(4000);
    // wait.waitForElementVisibility(content.district, 20000);
    // content.district.click();
    // browser.sleep(2000);
    // wait.waitForElementVisibility(content.selectDistrict, 20000);
    // content.selectDistrict.click();
    // browser.sleep(2000);
    // browser.executeScript("arguments[0].scrollIntoView();", content.submitForm);
    // browser.sleep(1000);
    // wait.waitForElementVisibility(content.submitForm, 20000);
    // content.submitForm.click();
  } catch (err) {
    console.error("Failed to handle location pop up, " + err);
  }
};

const locationPopupSubmitBtn = () => {
  try {
    browser.sleep(6000);
    wait.waitForElementVisibility(content.btnSubmit, 30000);
    content.btnSubmit.click();
    browser.sleep(4000);
  } catch (err) {
    console.error("Failed to handle location pop up, " + err);
  }
};

const userLogout = () => {
  try {
    browser.sleep(1000);
    var Url = getAppURL.ConfigurePath().AppURL;
    var AppendExplore = "/explore";
    browser.get(Url + AppendExplore, 40000);
    browser.sleep(4000);
    wait.waitForElementVisibility(content.headerDropdown, 20000);
    content.headerDropdown.click();
    browser.sleep(300);
    browser.executeScript("arguments[0].scrollIntoView();", content.logout);
    browser.sleep(200);
    wait.waitForElementVisibility(content.logout, 20000);
    content.logout.click();
    browser.sleep(300);
    browser.get(Url + AppendExplore, 40000);
    browser.sleep(2000);
  } catch (err) {
    console.error("failed to log out, " + err);
  }
};
const validateWorkspace = () => {
  try {
    // wait.waitForElementVisibility(content.headerDropdown, 20000);
    // content.headerDropdown.click();
    expect(content.headerDropdown.isDisplayed()).toBeTruthy();
  } catch (Exception) {
    console.error("Failed to validate workspace, " + Exception);
  }
};

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
    var cred = genericFun.readLoginDataFromExcelFile(sheetPath, "1", roleName);
    browser.sleep(3000);
    // wait.waitForElementVisibility(content.headerDropdown, 20000);
    // content.headerDropdown.click();
    // wait.waitForElementVisibility(content.loginLink, 20000);
    // content.loginLink.click();
    wait.waitForElementVisibility(content.userName, 20000);
    content.userName.sendKeys(cred[0]["Username"]);
    content.password.sendKeys(cred[0]["Password"]);
    content.login.click();
    console.log("User successfully merged account");
  } catch (Exception) {
    console.error("failed to merge account, " + Exception);
  }
};


const validateDifferentStateUrl = (state) => {
  try {
    console.log("User is trying to validate different state");
    var Url = getAppURL.ConfigurePath().AppURL;
    var AppendExplore = "/" + state + "/";
    browser.get(Url + AppendExplore, 40000);
    browser.manage().timeouts().implicitlyWait(30000);
    browser.driver.manage().window().maximize();
    browser.sleep(1000);
    console.log("User successfully validated different state");
  } catch (err) {
    console.error("User failed to validate different state");
  }
};

const handleLocationPopupForOtherExplorer = () => {
  try {
    // wait.waitForElementVisibility(content.sunbirdOkMsg, 20000);
    // content.sunbirdOkMsg.click();
    // browser.sleep(3000);
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
};
const userLogoutForGoogle = () => {
  try {
    browser.sleep(1000);
    var Url = getAppURL.ConfigurePath().AppURL;
    var AppendExplore = "/explore";
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
};
const validateSecondTimeLocationPopup = () => {
  try {
    console.log("User is trying to validateSecondTimeLocationPopup");
    wait.waitForElementVisibility(content.headerDropdown, 30000);
    content.headerDropdown.isDisplayed().then(function (input) {
      expect(input.toBeTruthy);
      console.log("location popup didn't came second time");
    });
    console.log("User successfully validatedSecondTimeLocationPopup");
  } catch (err) {
    console.error("failed to validate second time location popup");
  }
};
const handleLocationPopupAsStudent = () => {
  try {
   
    browser.sleep(2000);
    wait.waitForElementVisibility(content.Student, 30000);
    content.Student.click();
    browser.sleep(5000);

    wait.waitForElementVisibility(content.Continue, 20000);
    content.Continue.click();
    
  } catch (err) {
    console.error("Failed to handle location pop up, " + err);
  }
};
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
};

const handleLocationPopup = () => {
  try {
    browser.sleep(4000);

    // content.autocl.isPresent().then(function (result) {
    //     if (result) {
    //         wait.waitForElementVisibility(content.selectBoardValue, 30000);
    //         content.selectBoardValue.click();
    //         browser.sleep(6000);
    //     }
    //     else {
    //         browser.sleep(3000);
    //         wait.waitForElementVisibility(content.boardDropdown, 30000);
    //         content.boardDropdown.click();
    //         browser.sleep(3000);
    //         wait.waitForElementVisibility(content.selectBoardValue, 30000);
    //         content.selectBoardValue.click();
    //         browser.sleep(6000);

    //     }
    // });

    wait.waitForElementVisibility(content.boardDropdown, 30000);
    content.boardDropdown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.selectBoardValue, 30000);
    content.selectBoardValue.click();
    browser.sleep(6000);

    wait.waitForElementVisibility(content.mediumDropdown, 30000);
    content.mediumDropdown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.selectMediumValue, 30000);
    content.selectMediumValue.click();
    browser.sleep(5000);

    browser.actions().sendKeys(protractor.Key.TAB).perform();
    browser.sleep(2000);
    wait.waitForElementVisibility(content.gradeLevelDropDown, 30000);
    content.gradeLevelDropDown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.selectGradeLevelValue, 30000);
    content.selectGradeLevelValue.click();
    browser.sleep(2000);

    browser.actions().sendKeys(protractor.Key.TAB).perform();
    browser.sleep(2000);

    wait.waitForElementVisibility(content.submitButtonForDropdowns, 30000);
    content.submitButtonForDropdowns.click();
    browser.sleep(3000);

    browser.sleep(5000);

    wait.waitForElementVisibility(content.state, 20000);
    content.state.click();
    browser.sleep(2000);

    wait.waitForElementVisibility(content.selectState, 20000);
    content.selectState.click();
    browser.sleep(4000);

    wait.waitForElementVisibility(content.district, 20000);
    content.district.click();
    browser.sleep(5000);

    wait.waitForElementVisibility(content.selectDistrict, 20000);
    content.selectDistrict.click();
    browser.sleep(5000);
    browser.executeScript("arguments[0].scrollIntoView();", content.submitForm);
    browser.sleep(1000);
    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();

  } catch (err) {
    console.log(err);
  }
};

const handleLocationPopupForSchoolHead = () => {
  try {
    // wait.waitForElementVisibility(content.sunbirdOkMsg, 30000);
    // content.sunbirdOkMsg.click();
    // browser.navigate().refresh();
    // browser.executeScript("arguments[0].scrollIntoView();", content.clkSchoolHeader);
    browser.executeScript("window.scrollTo(0,100);").then(function () {
      console.log("++++++SCROLLED Down+++++");
    });
    browser.sleep(3000);
    wait.waitForElementVisibility(content.clkSchoolHeader, 30000);
    content.clkSchoolHeader.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.Continue, 20000);
    content.Continue.click();
    browser.sleep(25000);

    wait.waitForElementVisibility(content.state, 20000);
    content.state.click();
    wait.waitForElementVisibility(content.selectState, 20000);
    content.selectState.click();
    wait.waitForElementVisibility(content.district, 20000);
    content.district.click();
    wait.waitForElementVisibility(content.selectDistrict, 20000);
    content.selectDistrict.click();
    browser.sleep(2000);
    browser.executeScript("arguments[0].scrollIntoView();", content.submitForm);
    browser.sleep(2000);

    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();
  } catch (err) {
    console.error("Failed to handle location pop up, " + err);
  }
};

const userLoginPopup = (roleName) => {
  try {
    var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
    var cred = genericFun.readLoginDataFromExcelFile(sheetPath, "1", roleName);
    browser.sleep(4000);
    // wait.waitForElementVisibility(content.headerDropdown1, 20000);
    // content.headerDropdown1.click();
    // browser.sleep(300);
    // browser.executeScript("arguments[0].scrollIntoView();", content.loginLink);
    browser.sleep(200);
    wait.waitForElementVisibility(content.loginLink, 20000);
    content.loginLink.click();
    browser.sleep(300);
    wait.waitForElementVisibility(content.userName, 20000);
    content.userName.sendKeys(cred[0]["Username"]);
    browser.sleep(100);
    content.password.sendKeys(cred[0]["Password"]);
    browser.sleep(100);

    content.login.click();
    browser.sleep(3000);
  } catch (Err) {
    console.error("Failed to user login, " + Err);
  }
};

const userLoginPopup2 = (roleName) => {
  try {
    var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
    var cred = genericFun.readLoginDataFromExcelFile(sheetPath, "1", roleName);
    // browser.sleep(4000);
    // wait.waitForElementVisibility(content.headerDropdown1, 20000);
    // content.headerDropdown1.click();
    // browser.sleep(300);
    // browser.executeScript("arguments[0].scrollIntoView();", content.loginLink);
    // browser.sleep(200);
    // wait.waitForElementVisibility(content.loginLink, 20000);
    // content.loginLink.click();
    browser.sleep(300);
    wait.waitForElementVisibility(content.usernamePopUp, 20000);
    content.usernamePopUp.sendKeys(cred[0]["Username"]);
    browser.sleep(100);
    content.passwordPopUp.sendKeys(cred[0]["Password"]);
    browser.sleep(100);
    content.login.click();
    browser.sleep(3000);
  } catch (Err) {
    console.error("Failed to user login, " + Err);
  }
};

const recentDate = () => {
  try {
    var date = new Date();
    var day = date.getDate();
    var year = date.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var month = monthNames[date.getMonth()];
    newdate = day + " " + month + " " + year;
    return newdate;
  } catch (Err) {
    console.error("Failed , " + Err);
  }
};

const nextDate = () => {
  try {
    var date = new Date();
    var day = date.getDate();
    var year = date.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var month = monthNames[date.getMonth() + 1];
    newdate = day + " " + month + " " + year;
    return newdate;
  } catch (Err) {
    console.error("Failed , " + Err);
  }
};

const backDate = () => {
  try {
    var date = new Date();
    var day = date.getDate()-1;
    var year = date.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var month = monthNames[date.getMonth()];
    newdate = day + " " + month + " " + year;
    return newdate;
  } catch (Err) {
    console.error("Failed , " + Err);
  }
};

const futureDate = () => {
  try {
    var date = new Date();
    var day = date.getDate();
    var year = date.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var month = monthNames[date.getMonth() + 2];
    newdate = day + " " + month + " " + year;
    return newdate;
  } catch (Err) {
    console.error("Failed , " + Err);
  }
};

const writeToExcel = async () => {
  try {
    var sheetpath = "D:/stag4.8_1Mar/test/testdata/sample.csv";
    var workbook = XLSX.readFile(sheetpath);
    browser.manage().timeouts().implicitlyWait(30000);
    var wb = new Workbook();
    var sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[sheet_name];
    var address_of_cell = "A1";
    var cell_object = worksheet[address_of_cell];
    var cell_value = cell_object.v;
    var worksheet2 = wb.addWorksheet("qualitrix");
    console.log(cell_value);
    worksheet2.getRow(1).getCell(1).value = cell_value + 1;
    wb.xlsx.writeFile(sheetpath);
  } catch (err) {
    console.error("Failed, " + err);
  }
};

const nextDateExtended = () => {
  try {
    var date = new Date();
    var day = date.getDate();
    var year = date.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var month = monthNames[date.getMonth() + 2];
    newdate = day + " " + month + " " + year;
    return newdate;
  } catch (Err) {
    console.error("Failed , " + Err);
  }
};

const futureDateExtended = () => {
  try {
    var date = new Date();
    var day = date.getDate();
    var year = date.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var month = monthNames[date.getMonth() + 3];
    newdate = day + " " + month + " " + year;
    return newdate;
  } catch (Err) {
    console.error("Failed , " + Err);
  }
};

const rgba2hex = (rgba) => {
  rgba = rgba.match(
    /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
  );
  return rgba && rgba.length === 4
    ? "#" +
        ("0" + parseInt(rgba[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgba[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgba[3], 10).toString(16)).slice(-2)
    : "";
};

const checkStringSortedAlphabeticallyOrNot = (unsortedArr, sortedArr) => {
  try {
    for (i = 0; i <= unsortedArr.length; i++) {
      expect(unsortedArr[i] == sortedArr[i]).toBe(true);
      console.log("Alphabetically sorted.\n");
      break;
    }
  } catch (Exception) {
    console.log("Failed");
  }
};

const handleLocationPopupWithMultiSelect = () => {
  try {
    browser.sleep(6000);

    // content.autocl.isPresent().then(function (result) {
    //     if (result) {
    //         wait.waitForElementVisibility(content.selectBoardValue, 30000);
    //         content.selectBoardValue.click();
    //         browser.sleep(6000);
    //     }
    //     else {
    //         browser.sleep(3000);
    //         wait.waitForElementVisibility(content.boardDropdown, 30000);
    //         content.boardDropdown.click();
    //         browser.sleep(3000);
    //         wait.waitForElementVisibility(content.selectBoardValue, 30000);
    //         content.selectBoardValue.click();
    //         browser.sleep(6000);

    //     }
    // });

    wait.waitForElementVisibility(content.boardDropdown, 30000);
    content.boardDropdown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.selectBoardValue, 30000);
    content.selectBoardValue.click();
    browser.sleep(6000);

    wait.waitForElementVisibility(content.mediumDropdown, 30000);
    content.mediumDropdown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.selectMediumValue, 30000);
    content.selectMediumValue.click();
    browser.sleep(3000);

    wait.waitForElementVisibility(content.selectMediumMultipleValue, 30000);
    content.selectMediumMultipleValue.click();
    browser.sleep(3000);


    browser.actions().sendKeys(protractor.Key.TAB).perform();
    browser.sleep(3000);

    

    wait.waitForElementVisibility(content.gradeLevelDropDown, 30000);
    content.gradeLevelDropDown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.selectGradeLevelValue, 30000);
    content.selectGradeLevelValue.click();
    browser.sleep(2000);

    wait.waitForElementVisibility(content.selectGradeLevelMultipleValue, 30000);
    content.selectGradeLevelMultipleValue.click();
    browser.sleep(2000);

    browser.actions().sendKeys(protractor.Key.TAB).perform();
     browser.sleep(2000);

    wait.waitForElementVisibility(content.submitButtonForDropdowns, 30000);
    content.submitButtonForDropdowns.click();
    browser.sleep(3000);

    browser.sleep(8000);

    // wait.waitForElementVisibility(content.state, 20000);
    // content.state.click();
    // browser.sleep(2000);
    // wait.waitForElementVisibility(content.selectState, 20000);
    // content.selectState.click();
    // browser.sleep(4000);
    // wait.waitForElementVisibility(content.district, 20000);
    // content.distrRetainFilterValueFromHomeTabToAnotherict.click();
    // browser.sleep(2000);
    // wait.waitForElementVisibility(content.selectDistrict, 20000);
    // content.selectDistrict.click();
    // browser.sleep(2000);
    browser.executeScript("arguments[0].scrollIntoView();", content.submitForm);
    browser.sleep(1000);
    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();
  } catch (err) {
    console.log(err);
  }
};

const handleLocationPopupWithMultiSelectAndUnSelect = () => {
  try {
    browser.sleep(6000);

    // content.autocl.isPresent().then(function (result) {
    //     if (result) {
    //         wait.waitForElementVisibility(content.selectBoardValue, 30000);
    //         content.selectBoardValue.click();
    //         browser.sleep(6000);
    //     }
    //     else {
    //         browser.sleep(3000);
    //         wait.waitForElementVisibility(content.boardDropdown, 30000);
    //         content.boardDropdown.click();
    //         browser.sleep(3000);
    //         wait.waitForElementVisibility(content.selectBoardValue, 30000);
    //         content.selectBoardValue.click();
    //         browser.sleep(6000);

    //     }
    // });

    wait.waitForElementVisibility(content.boardDropdown, 30000);
    content.boardDropdown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.selectBoardValue, 30000);
    content.selectBoardValue.click();
    browser.sleep(6000);

    wait.waitForElementVisibility(content.mediumDropdown, 30000);
    content.mediumDropdown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.selectMediumValue, 30000);
    content.selectMediumValue.click();
    browser.sleep(3000);

    wait.waitForElementVisibility(content.selectMediumMultipleValue, 30000);
    content.selectMediumMultipleValue.click();
    browser.sleep(3000);

    wait.waitForElementVisibility(content.selectMediumValue, 30000);
    content.selectMediumValue.click();
    browser.sleep(3000);
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    browser.sleep(3000);

    wait.waitForElementVisibility(content.mediumDropdown, 30000);
    content.mediumDropdown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.selectMediumValue, 30000);
    content.selectMediumValue.click();
    browser.sleep(3000);
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    browser.sleep(3000);

    

    wait.waitForElementVisibility(content.gradeLevelDropDown, 30000);
    content.gradeLevelDropDown.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.selectGradeLevelValue, 30000);
    content.selectGradeLevelValue.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(content.selectGradeLevelMultipleValue, 30000);
    content.selectGradeLevelMultipleValue.click();
    browser.sleep(2000);


    wait.waitForElementVisibility(content.selectGradeLevelValue, 30000);
    content.selectGradeLevelValue.click();
    browser.sleep(2000);
    browser.actions().sendKeys(protractor.Key.TAB).perform();
     browser.sleep(2000);

     wait.waitForElementVisibility(content.gradeLevelDropDown, 30000);
     content.gradeLevelDropDown.click();
     browser.sleep(3000);
     wait.waitForElementVisibility(content.selectGradeLevelValue, 30000);
     content.selectGradeLevelValue.click();
     browser.sleep(2000);
 browser.actions().sendKeys(protractor.Key.TAB).perform();
     browser.sleep(2000);

    wait.waitForElementVisibility(content.submitButtonForDropdowns, 30000);
    content.submitButtonForDropdowns.click();
    browser.sleep(3000);

    browser.sleep(8000);

    // wait.waitForElementVisibility(content.state, 20000);
    // content.state.click();
    // browser.sleep(2000);
    // wait.waitForElementVisibility(content.selectState, 20000);
    // content.selectState.click();
    // browser.sleep(4000);
    // wait.waitForElementVisibility(content.district, 20000);
    // content.distrRetainFilterValueFromHomeTabToAnotherict.click();
    // browser.sleep(2000);
    // wait.waitForElementVisibility(content.selectDistrict, 20000);
    // content.selectDistrict.click();
    // browser.sleep(2000);
    browser.executeScript("arguments[0].scrollIntoView();", content.submitForm);
    browser.sleep(1000);
    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();
  } catch (err) {
    console.log(err);
  }
};

const handleLocationPopupAfterAddUser = () => {
  try {
    browser.sleep(4000);
    
    wait.waitForElementVisibility(content.state, 20000);
    content.state.click();
    browser.sleep(2000);

    wait.waitForElementVisibility(content.selectState, 20000);
    content.selectState.click();
    browser.sleep(4000);

    wait.waitForElementVisibility(content.district, 20000);
    content.district.click();
    browser.sleep(5000);

    wait.waitForElementVisibility(content.selectDistrict, 20000);
    content.selectDistrict.click();
    browser.sleep(5000);
    browser.executeScript("arguments[0].scrollIntoView();", content.submitForm);
    browser.sleep(1000);
    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();

  } catch (err) {
    console.log(err);
  }
};


const handleDropDownInAdUser = () => {
  try {
    browser.sleep(1000);
    wait.waitForElementVisibility(content.Teacher, 30000);
    content.Teacher.click();
    browser.sleep(3000);
    wait.waitForElementVisibility(content.Continue, 20000);
    content.Continue.click();
    browser.sleep(5000);
    wait.waitForElementVisibility(content.state, 20000);
    content.state.click();
    browser.sleep(2000);

    wait.waitForElementVisibility(content.selectState, 20000);
    content.selectState.click();
    browser.sleep(4000);

    wait.waitForElementVisibility(content.district, 20000);
    content.district.click();
    browser.sleep(5000);

    wait.waitForElementVisibility(content.selectDistrict, 20000);
    content.selectDistrict.click();
    browser.sleep(5000);
    browser.executeScript("arguments[0].scrollIntoView();", content.submitForm);
    browser.sleep(1000);
    wait.waitForElementVisibility(content.submitForm, 20000);
    content.submitForm.click();

    
  } catch (err) {
    console.error("Failed to handle location pop up, " + err);
  }
};

const startDate = () => {
  try {
      var date = new Date();
      var day = date.getDate();
      var year = date.getFullYear();
      const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"];
      var month = monthNames[date.getMonth()];
      newdate = day + " " + month + " " + year;
      return newdate;
  } catch (Err) {
      console.error("Failed , " + Err);
  }
}

const endDate = () => {
  try {
      var date = new Date();
      var day = date.getDate()+1;
      var year = date.getFullYear();
      const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"];
      var month = monthNames[date.getMonth()];
      newdate = day + " " + month + " " + year;
      return newdate;
  } catch (Err) {
      console.error("Failed , " + Err);
  }
}


const uploadParticularFile = (filelatest) => {
  // set file detector
  let path = require('path');
  var remote = require(protractor.basePath + '/node_modules/selenium-webdriver/remote');
  browser.setFileDetector(new remote.FileDetector());
  //test/pageObject/Untitled Textbook.csv
  console.log(__dirname)
  console.log('trting to upload updated CSV')
  var fileToUpload = filelatest;
  //var fileToUpload ='do_2130111423076270081379_untitled-textbook_1588274237953.csv';
  var absolutePath = path.resolve(__dirname, fileToUpload);
  var fileElem = element(by.css('input[type="file"]'));
  //var fileElem =element(by.xpath("//div[@class='qq-upload-button-selector qq-upload-button custom-qq-upload-button']"));
  // Unhide file input
  browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
  browser.driver.sleep(1000);
  fileElem.sendKeys(absolutePath);
  browser.driver.sleep(5000);

}

const batchNewEndDate = () => {
  try {
    var date = new Date();
    var day = date.getDate()+1;
    var year = date.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var month = monthNames[date.getMonth()];
    newdate = day + " " + month + " " + year;
    return newdate;
  } catch (Err) {
    console.error("Failed , " + Err);
  }
};

const updateBatchEndDate = () => {
  try {
    var date = new Date();
    var day = date.getDate()+2;
    var year = date.getFullYear();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var month = monthNames[date.getMonth()];
    newdate = day + " " + month + " " + year;
    return newdate;
  } catch (Err) {
    console.error("Failed , " + Err);
  }
};



module.exports = {
  verifyAdminDashBoard,
  userLoginPopup,
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
  handleLocationPopupForSchoolHead,
  userLoginPopup2,
  recentDate,
  nextDate,
  futureDate,
  locationPopupSubmitBtn,
  writeToExcel,
  futureDateExtended,
  nextDateExtended,
  rgba2hex,
  checkStringSortedAlphabeticallyOrNot,
  handleLocationPopupWithMultiSelect,
  handleLocationPopupWithMultiSelectAndUnSelect,
  backDate,
  handleLocationPopupAfterAddUser,
  handleDropDownInAdUser,
  startDate,
  endDate,
  uploadParticularFile,
  batchNewEndDate,
  updateBatchEndDate,


};
