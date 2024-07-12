const { date } = require("faker/lib/locales/az");
//const { truncate } = require('fs/promises');
const { browser } = require("protractor");
const fs = require("fs");
var XLSX = require("xlsx");
const csvjson = require("csvjson");
const readFile = require("fs").readFile;
const { Parser } = require("json2csv");

const ObjectsToCsv = require("objects-to-csv");
var { resolve, join } = require("path");
const path = require('path');


const ccpage = require(protractor.basePath + "/test/pages/contentCreation/contentCreation.po.js");
const etbpage = require(protractor.basePath + "/test/pages/ETB/etb.po.js");
const data = require(protractor.basePath + "/test/testdata/login/login.td.json");
const wait = require(protractor.basePath + "/helper/waiters.js");
const tpdPage = require(protractor.basePath + "/test/pages/tpdPage/tpdpage.po.js");
const faker = require(protractor.basePath + "/test/pathFolder/faker.js");
const resourcePag = require(protractor.basePath + "/test/pages/resource/resource.po.js");
const genericFun = require(protractor.basePath + "/test/genericFunctions/GenericFunction.js");
let getExcelPath = require(protractor.basePath + "/test/pathFolder/changePath.js");
const verifyCEBpage = require(protractor.basePath + "/test/pages/sanity/VerifySignInPopupInExploreCourseEnrollButton.js");
var verifyCEBObj = verifyCEBpage.VerifySignInPopupInExploreCourseEnrollButton();
const sanityPage = require(protractor.basePath + "/test/pages/userOnBoarding/SanityPage.js");
const sanityFun = require(protractor.basePath + "/test/pageObject/SanityPageObj.js");
const utility = require(protractor.basePath + "/test/utility/utilityFunctions.js");
const todaysDate = utility.recentDate();
const endDate = utility.nextDate();
const futureDate = utility.futureDate();
const previousDate = utility.backDate();
const extendedStartDate = utility.nextDateExtended();
const extendedFutureDate = utility.futureDateExtended();
var searchObj = tpdPage.tpdPage();
var content = ccpage.contentCreation();
var etbv = etbpage.etb();
var resov = resourcePag.resource();
var sanity = sanityPage.SanityElement();
const sinup = require(protractor.basePath + "/test/pages/signUpPage/signUpPage.po.js");

const writedattocsv = (filelatest,courseName,doid) => {
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    var file = "C:\\Users\\Qualitrix\\Downloads\\"+filelatest;
    var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
    var cred = genericFun.readParticularDataFromExcelFile(sheetPath,'5');
    console.log(cred)
    
    var collectionname = cred[0]['coloumnName'];
    var FolderIdentifier = cred[1]['coloumnName'];
    var Level1Folder = cred[2]['coloumnName'];
    var Level2Folder = cred[3]['coloumnName'];
    var Level3Folder = cred[4]['coloumnName'];
    var Level4Folder = cred[5]['coloumnName'];
    var Description = cred[6]['coloumnName'];
    var MappedTopics = cred[7]['coloumnName'];
    var QRCodeRequired = cred[9]['coloumnName'];
    var QRCode = cred[10]['coloumnName'];
    var linkedContent1 = cred[10]['coloumnName'];
    var linkedContent1 = cred[11]['coloumnName'];
    var linkedContent2 = cred[12]['coloumnName'];
    var linkedContent3 = cred[13]['coloumnName'];
    var linkedContent4 = cred[14]['coloumnName'];
    var linkedContent5 = cred[15]['coloumnName'];
    var linkedContent6 = cred[16]['coloumnName'];
    var linkedContent7 = cred[17]['coloumnName'];
    var linkedContent8 = cred[18]['coloumnName'];
    var linkedContent9 = cred[19]['coloumnName'];
    var linkedContent10 = cred[20]['coloumnName'];
    var linkedContent11 = cred[21]['coloumnName'];
    var linkedContent12 = cred[22]['coloumnName'];
    var linkedContent13 = cred[23]['coloumnName'];
    var linkedContent14 = cred[24]['coloumnName'];
    var linkedContent15 = cred[25]['coloumnName'];
    var linkedContent16 = cred[26]['coloumnName'];
    var linkedContent17 = cred[27]['coloumnName'];
    var linkedContent18 = cred[28]['coloumnName'];
    var linkedContent19 = cred[29]['coloumnName'];
    var linkedContent20 = cred[30]['coloumnName'];
    var linkedContent21 = cred[31]['coloumnName'];
    var linkedContent22 = cred[32]['coloumnName'];
    var linkedContent23 = cred[33]['coloumnName'];
    var linkedContent24 = cred[34]['coloumnName'];
    var linkedContent25 = cred[35]['coloumnName'];
    var linkedContent26 = cred[36]['coloumnName'];
    var linkedContent27 = cred[37]['coloumnName'];
    var linkedContent28 = cred[38]['coloumnName'];
    var linkedContent29 = cred[39]['coloumnName'];
    var linkedContent30 = cred[40]['coloumnName'];
    var Level1FolderValue = cred[2]['cellData'];

    console.log(Level1FolderValue);

    const csvWriter = createCsvWriter({
    path: file,
    header: [
        {id: 'collectionname', title: collectionname},
        {id: 'FolderIdentifier', title: FolderIdentifier},
        {id: 'Level1Folder', title: Level1Folder},
        {id: 'Level2Folder', title: Level2Folder},
        {id: 'Level3Folder', title: Level3Folder},
        {id: 'Level4Folder', title: Level4Folder},
        {id: 'Description', title: Description},
        {id: 'MappedTopics', title: MappedTopics},
        {id: 'QRCodeRequired', title: QRCodeRequired},
        {id: 'QRCode', title: QRCode},
        {id: 'linkedContent1', title:linkedContent1},
        {id: 'linkedContent2', title:linkedContent2},
        {id: 'linkedContent3', title:linkedContent3},
        {id: 'linkedContent4', title:linkedContent4},
        {id: 'linkedContent5', title:linkedContent5},
        {id: 'linkedContent6', title:linkedContent6},
        {id: 'linkedContent7', title:linkedContent7},
        {id: 'linkedContent8', title:linkedContent8},
        {id: 'linkedContent9', title:linkedContent9},
        {id: 'linkedContent10', title:linkedContent10},
        {id: 'linkedContent11', title:linkedContent11},
        {id: 'linkedContent12', title:linkedContent12},
        {id: 'linkedContent13', title:linkedContent13},
        {id: 'linkedContent14', title:linkedContent14},
        {id: 'linkedContent15', title:linkedContent15},
        {id: 'linkedContent16', title:linkedContent16},
        {id: 'linkedContent17', title:linkedContent17},
        {id: 'linkedContent18', title:linkedContent18},
        {id: 'linkedContent19', title:linkedContent19},
       // {id: 'linkedContent20', title:linkedContent20},
        {id: 'linkedContent21', title:linkedContent21},
        {id: 'linkedContent22', title:linkedContent22},
        {id: 'linkedContent23', title:linkedContent23},
        {id: 'linkedContent24', title:linkedContent24},
        {id: 'linkedContent25', title:linkedContent25},
        {id: 'linkedContent26', title:linkedContent26},
        {id: 'linkedContent27', title:linkedContent27},
        {id: 'linkedContent28', title:linkedContent28},
        {id: 'linkedContent29', title:linkedContent29},
        {id: 'linkedContent30', title:linkedContent30},

    ]
    });

    const data = [
    {
        collectionname: courseName,
        FolderIdentifier: doid,
        Level1Folder: Level1FolderValue,
        Level2Folder: '',
        Level3Folder: '',
        Level4Folder: '',
        Description: '',
        MappedTopics: '',
        QRCodeRequired: '',
        QRCode: '',
        linkedContent1:'',
        linkedContent2:'',
        linkedContent3:'',
        linkedContent4:'',
        linkedContent5:'',
        linkedContent6:'',
        linkedContent7:'',
        linkedContent8:'',
        linkedContent9:'',
        linkedContent10:'',
        linkedContent11:'',
        linkedContent12:'',
        linkedContent13:'',
        linkedContent14:'',
        linkedContent15:'',
        linkedContent16:'',
        linkedContent17:'',
        linkedContent18:'',
        linkedContent19:'',
        //linkedContent20:'',
        linkedContent21:'',
        linkedContent22:'',
        linkedContent23:'',
        linkedContent24:'',
        linkedContent25:'',
        linkedContent26:'',
        linkedContent27:'',
        linkedContent28:'',
        linkedContent29:'',
        linkedContent30:'',
    }
    ];
    
    csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
}

const writeIncorrectMappedDataAndValidateError = (filelatest,courseName) => {
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    var file = "C:\\Users\\Qualitrix\\Downloads\\"+filelatest;
    var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
    var cred = genericFun.readParticularDataFromExcelFile(sheetPath,'5');
    console.log(cred)
    
    var collectionname = cred[0]['coloumnName'];
    var FolderIdentifier = cred[1]['coloumnName'];
    var Level1Folder = cred[2]['coloumnName'];
    var Level2Folder = cred[3]['coloumnName'];
    var Level3Folder = cred[4]['coloumnName'];
    var Level4Folder = cred[5]['coloumnName'];
    var Description = cred[6]['coloumnName'];
    var MappedTopics = cred[7]['coloumnName'];
    var QRCodeRequired = cred[9]['coloumnName'];
    var QRCode = cred[10]['coloumnName'];
    var linkedContent1 = cred[10]['coloumnName'];
    var linkedContent1 = cred[11]['coloumnName'];
    var linkedContent2 = cred[12]['coloumnName'];
    var linkedContent3 = cred[13]['coloumnName'];
    var linkedContent4 = cred[14]['coloumnName'];
    var linkedContent5 = cred[15]['coloumnName'];
    var linkedContent6 = cred[16]['coloumnName'];
    var linkedContent7 = cred[17]['coloumnName'];
    var linkedContent8 = cred[18]['coloumnName'];
    var linkedContent9 = cred[19]['coloumnName'];
    var linkedContent10 = cred[20]['coloumnName'];
    var linkedContent11 = cred[21]['coloumnName'];
    var linkedContent12 = cred[22]['coloumnName'];
    var linkedContent13 = cred[23]['coloumnName'];
    var linkedContent14 = cred[24]['coloumnName'];
    var linkedContent15 = cred[25]['coloumnName'];
    var linkedContent16 = cred[26]['coloumnName'];
    var linkedContent17 = cred[27]['coloumnName'];
    var linkedContent18 = cred[28]['coloumnName'];
    var linkedContent19 = cred[29]['coloumnName'];
    var linkedContent20 = cred[30]['coloumnName'];
    var linkedContent21 = cred[31]['coloumnName'];
    var linkedContent22 = cred[32]['coloumnName'];
    var linkedContent23 = cred[33]['coloumnName'];
    var linkedContent24 = cred[34]['coloumnName'];
    var linkedContent25 = cred[35]['coloumnName'];
    var linkedContent26 = cred[36]['coloumnName'];
    var linkedContent27 = cred[37]['coloumnName'];
    var linkedContent28 = cred[38]['coloumnName'];
    var linkedContent29 = cred[39]['coloumnName'];
    var linkedContent30 = cred[40]['coloumnName'];
    var Level1FolderValue = cred[2]['cellData'];

    console.log(Level1FolderValue);

    const csvWriter = createCsvWriter({
    path: file,
    header: [
        {id: 'collectionname', title: collectionname},
        {id: 'FolderIdentifier', title: FolderIdentifier},
        {id: 'Level1Folder', title: Level1Folder},
        {id: 'Level2Folder', title: Level2Folder},
        {id: 'Level3Folder', title: Level3Folder},
        {id: 'Level4Folder', title: Level4Folder},
        {id: 'Description', title: Description},
        {id: 'MappedTopics', title: MappedTopics},
        {id: 'QRCodeRequired', title: QRCodeRequired},
        {id: 'QRCode', title: QRCode},
        {id: 'linkedContent1', title:linkedContent1},
        {id: 'linkedContent2', title:linkedContent2},
        {id: 'linkedContent3', title:linkedContent3},
        {id: 'linkedContent4', title:linkedContent4},
        {id: 'linkedContent5', title:linkedContent5},
        {id: 'linkedContent6', title:linkedContent6},
        {id: 'linkedContent7', title:linkedContent7},
        {id: 'linkedContent8', title:linkedContent8},
        {id: 'linkedContent9', title:linkedContent9},
        {id: 'linkedContent10', title:linkedContent10},
        {id: 'linkedContent11', title:linkedContent11},
        {id: 'linkedContent12', title:linkedContent12},
        {id: 'linkedContent13', title:linkedContent13},
        {id: 'linkedContent14', title:linkedContent14},
        {id: 'linkedContent15', title:linkedContent15},
        {id: 'linkedContent16', title:linkedContent16},
        {id: 'linkedContent17', title:linkedContent17},
        {id: 'linkedContent18', title:linkedContent18},
        {id: 'linkedContent19', title:linkedContent19},
        {id: 'linkedContent20', title:linkedContent20},
        {id: 'linkedContent21', title:linkedContent21},
        {id: 'linkedContent22', title:linkedContent22},
        {id: 'linkedContent23', title:linkedContent23},
        {id: 'linkedContent24', title:linkedContent24},
        {id: 'linkedContent25', title:linkedContent25},
        {id: 'linkedContent26', title:linkedContent26},
        {id: 'linkedContent27', title:linkedContent27},
        {id: 'linkedContent28', title:linkedContent28},
        {id: 'linkedContent29', title:linkedContent29},
        {id: 'linkedContent30', title:linkedContent30},

    ]
    });

    const data = [
    {
        collectionname: courseName,
        FolderIdentifier: '',
        Level1Folder: Level1FolderValue,
        Level2Folder: '',
        Level3Folder: '',
        Level4Folder: '',
        Description: '',
        MappedTopics: 'general',
        QRCodeRequired: '',
        QRCode: '',
        linkedContent1:'',
        linkedContent2:'',
        linkedContent3:'',
        linkedContent4:'',
        linkedContent5:'',
        linkedContent6:'',
        linkedContent7:'',
        linkedContent8:'',
        linkedContent9:'',
        linkedContent10:'',
        linkedContent11:'',
        linkedContent12:'',
        linkedContent13:'',
        linkedContent14:'',
        linkedContent15:'',
        linkedContent16:'',
        linkedContent17:'',
        linkedContent18:'',
        linkedContent19:'',
        //linkedContent20:'',
        linkedContent21:'',
        linkedContent22:'',
        linkedContent23:'',
        linkedContent24:'',
        linkedContent25:'',
        linkedContent26:'',
        linkedContent27:'',
        linkedContent28:'',
        linkedContent29:'',
        linkedContent30:'',
    }
    ];
    
    csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
}


const writeAndValidateColumnsRemovedError = (filelatest,courseName,doid) => {
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    var file = "C:\\Users\\Qualitrix\\Downloads\\"+filelatest;
    var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
    var cred = genericFun.readParticularDataFromExcelFile(sheetPath,'5');
    console.log(cred)
    
    var collectionname = cred[0]['coloumnName'];
    var FolderIdentifier = cred[1]['coloumnName'];
    var Level1Folder = cred[2]['coloumnName'];
    var Level2Folder = cred[3]['coloumnName'];
    var Level3Folder = cred[4]['coloumnName'];
    var Level4Folder = cred[5]['coloumnName'];
    var Description = cred[6]['coloumnName'];
    var MappedTopics = cred[7]['coloumnName'];
    var QRCodeRequired = cred[9]['coloumnName'];
    var QRCode = cred[10]['coloumnName'];
    var linkedContent1 = cred[10]['coloumnName'];
    var linkedContent1 = cred[11]['coloumnName'];
    var linkedContent2 = cred[12]['coloumnName'];
    var linkedContent3 = cred[13]['coloumnName'];
    var linkedContent4 = cred[14]['coloumnName'];
    var linkedContent5 = cred[15]['coloumnName'];
    var linkedContent6 = cred[16]['coloumnName'];
    var linkedContent7 = cred[17]['coloumnName'];
    var linkedContent8 = cred[18]['coloumnName'];
    var linkedContent9 = cred[19]['coloumnName'];
    var linkedContent10 = cred[20]['coloumnName'];
    var linkedContent11 = cred[21]['coloumnName'];
    var linkedContent12 = cred[22]['coloumnName'];
    var linkedContent13 = cred[23]['coloumnName'];
    var linkedContent14 = cred[24]['coloumnName'];
    var linkedContent15 = cred[25]['coloumnName'];
    var linkedContent16 = cred[26]['coloumnName'];
    var linkedContent17 = cred[27]['coloumnName'];
    var linkedContent18 = cred[28]['coloumnName'];
    var linkedContent19 = cred[29]['coloumnName'];
    //var linkedContent20 = cred[30]['coloumnName'];
    var linkedContent21 = cred[31]['coloumnName'];
    var linkedContent22 = cred[32]['coloumnName'];
    var linkedContent23 = cred[33]['coloumnName'];
    var linkedContent24 = cred[34]['coloumnName'];
    var linkedContent25 = cred[35]['coloumnName'];
    var linkedContent26 = cred[36]['coloumnName'];
    var linkedContent27 = cred[37]['coloumnName'];
    var linkedContent28 = cred[38]['coloumnName'];
    var linkedContent29 = cred[39]['coloumnName'];
    var linkedContent30 = cred[40]['coloumnName'];
    var Level1FolderValue = cred[2]['cellData'];

    console.log(Level1FolderValue);

    const csvWriter = createCsvWriter({
    path: file,
    header: [
        {id: 'collectionname', title: collectionname},
        {id: 'FolderIdentifier', title: FolderIdentifier},
        {id: 'Level1Folder', title: Level1Folder},
        {id: 'Level2Folder', title: Level2Folder},
        {id: 'Level3Folder', title: Level3Folder},
        {id: 'Level4Folder', title: Level4Folder},
        {id: 'Description', title: Description},
        {id: 'MappedTopics', title: MappedTopics},
        {id: 'QRCodeRequired', title: QRCodeRequired},
        {id: 'QRCode', title: QRCode},
        {id: 'linkedContent1', title:linkedContent1},
        {id: 'linkedContent2', title:linkedContent2},
        {id: 'linkedContent3', title:linkedContent3},
        {id: 'linkedContent4', title:linkedContent4},
        {id: 'linkedContent5', title:linkedContent5},
        {id: 'linkedContent6', title:linkedContent6},
        {id: 'linkedContent7', title:linkedContent7},
        {id: 'linkedContent8', title:linkedContent8},
        {id: 'linkedContent9', title:linkedContent9},
        {id: 'linkedContent10', title:linkedContent10},
        {id: 'linkedContent11', title:linkedContent11},
        {id: 'linkedContent12', title:linkedContent12},
        {id: 'linkedContent13', title:linkedContent13},
        {id: 'linkedContent14', title:linkedContent14},
        {id: 'linkedContent15', title:linkedContent15},
        {id: 'linkedContent16', title:linkedContent16},
        {id: 'linkedContent17', title:linkedContent17},
        {id: 'linkedContent18', title:linkedContent18},
        {id: 'linkedContent19', title:linkedContent19},
       // {id: 'linkedContent20', title:linkedContent20},
        {id: 'linkedContent21', title:linkedContent21},
        {id: 'linkedContent22', title:linkedContent22},
        {id: 'linkedContent23', title:linkedContent23},
        {id: 'linkedContent24', title:linkedContent24},
        {id: 'linkedContent25', title:linkedContent25},
        {id: 'linkedContent26', title:linkedContent26},
        {id: 'linkedContent27', title:linkedContent27},
        {id: 'linkedContent28', title:linkedContent28},
        {id: 'linkedContent29', title:linkedContent29},
        {id: 'linkedContent30', title:linkedContent30},
    ]
    });
    const data = [
    {
        collectionname: courseName,
        FolderIdentifier: doid,
        Level1Folder: Level1FolderValue,
        Level2Folder: '',
        Level3Folder: '',
        Level4Folder: '',
        Description: '',
        MappedTopics: 'general',
        QRCodeRequired: '',
        QRCode: '',
        linkedContent1:'',
        linkedContent2:'',
        linkedContent3:'',
        linkedContent4:'',
        linkedContent5:'',
        linkedContent6:'',
        linkedContent7:'',
        linkedContent8:'',
        linkedContent9:'',
        linkedContent10:'',
        linkedContent11:'',
        linkedContent12:'',
        linkedContent13:'',
        linkedContent14:'',
        linkedContent15:'',
        linkedContent16:'',
        linkedContent17:'',
        linkedContent18:'',
        linkedContent19:'',
        //linkedContent20:'',
        linkedContent21:'',
        linkedContent22:'',
        linkedContent23:'',
        linkedContent24:'',
        linkedContent25:'',
        linkedContent26:'',
        linkedContent27:'',
        linkedContent28:'',
        linkedContent29:'',
        linkedContent30:'',
    }
    ];
    csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
}

const dataForSampleCSvFile = (filelatest) => {
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    var file = "C:\\Users\\Qualitrix\\Downloads\\"+filelatest;
    var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
    var cred = genericFun.readParticularDataFromExcelFile(sheetPath,'5');
    console.log(cred);
    var Level1Folder = cred[2]['coloumnName'];
    var Level2Folder = cred[3]['coloumnName'];
    var Level3Folder = cred[4]['coloumnName'];
    var Level4Folder = cred[5]['coloumnName'];
    var Description  = cred[6]['coloumnName'];
    
    const csvWriter = createCsvWriter({
    path: file,
    header: [
        {id: 'Level1Folder', title: Level1Folder},
        {id: 'Level2Folder', title: Level2Folder},
        {id: 'Level3Folder', title: Level3Folder},
        {id: 'Level4Folder', title: Level4Folder},
        {id: 'Description',  title: Description},
    ]
    });
        var Level1Folderdata = faker.randomData().firstname;
        var Level2Folderdata = faker.randomData().firstname;
        var Level3Folderdata = faker.randomData().firstname;
        var Level4Folderdata = faker.randomData().firstname;
        var Descriptiondata  = faker.randomData().firstname;
    const data = [
    {
        Level1Folder: Level1Folderdata,
        Level2Folder: Level2Folderdata,
        Level3Folder: Level3Folderdata,
        Level4Folder: Level4Folderdata,
        Description : Descriptiondata,
    }
    ];
    csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
}


const dataForSampleCSvFileWithMissingFolder = (filelatest) => {
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    var file = "C:\\Users\\Qualitrix\\Downloads\\"+filelatest;
    var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
    var cred = genericFun.readParticularDataFromExcelFile(sheetPath,'5');
    console.log(cred);
    //var Level1Folder = cred[2]['coloumnName'];
    var Level2Folder = cred[3]['coloumnName'];
    var Level3Folder = cred[4]['coloumnName'];
    var Level4Folder = cred[5]['coloumnName'];
    var Description  = cred[6]['coloumnName'];
    
    const csvWriter = createCsvWriter({
    path: file,
    header: [
       // {id: 'Level1Folder', title: Level1Folder},
        {id: 'Level2Folder', title: Level2Folder},
        {id: 'Level3Folder', title: Level3Folder},
        {id: 'Level4Folder', title: Level4Folder},
        {id: 'Description',  title: Description},
    ]
    });
       // var Level1Folderdata = faker.randomData().firstname;
        var Level2Folderdata = faker.randomData().firstname;
        var Level3Folderdata = faker.randomData().firstname;
        var Level4Folderdata = faker.randomData().firstname;
        var Descriptiondata  = faker.randomData().firstname;
    const data = [
    {
       // Level1Folder: '',
        Level2Folder: Level2Folderdata,
        Level3Folder: Level3Folderdata,
        Level4Folder: Level4Folderdata,
        Description : Descriptiondata,
    }
    ];
    csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
}


const uploadDownloadedSampleCSVfile = (filelatest) => {
    let path = require('path');
    var remote = require(protractor.basePath + '/node_modules/selenium-webdriver/remote');
    browser.setFileDetector(new remote.FileDetector());
    console.log('trting to upload updated CSV')
    var fileToUpload = filelatest;
    var file = "C:\\Users\\Qualitrix\\Downloads\\"+fileToUpload;
    var fileElem = element(by.css('input[type="file"]'));
    browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
    browser.driver.sleep(1000);
    fileElem.sendKeys(file);
    browser.sleep(8000);
    expect(searchObj.uploadInstructionText.isPresent()).toBe(true);
    browser.sleep(2000);
    sanity.nextButtonOnUploadpopUp.click();
    browser.sleep(4000);
    expect(searchObj.validateMissingColumnError.isPresent()).toBe(true);
    sanity.closeButtonPopUp.click();
    browser.sleep(4000);
}

const uploadDownloadedfileAfterWriting = (filelatest) => {
    let path = require('path');
    var remote = require(protractor.basePath + '/node_modules/selenium-webdriver/remote');
    browser.setFileDetector(new remote.FileDetector());
    console.log('trting to upload updated CSV')
    var fileToUpload = filelatest;
    var file = "C:\\Users\\Qualitrix\\Downloads\\"+fileToUpload;
    var fileElem = element(by.css('input[type="file"]'));
    browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
    browser.driver.sleep(1000);
    fileElem.sendKeys(file);
    browser.sleep(8000);
}


const openRecentDownloadedTocAndValidateAndWrite = async (collectionName) => {
    try {
        let filename2 = "C:\\Users\\Qualitrix\\Downloads\\";
        console.log(filename2);
        browser.sleep(6000);
       data = fs.readdir(filename2,(err,Downloads)=>{
            browser.sleep(4000);
            console.log(Downloads[1]);
            browser.sleep(4000);
            var recentDownloadedfile = Downloads[1];
            var pathfile = filename2+recentDownloadedfile;
            browser.driver.wait(function () { return fs.existsSync(pathfile); }, 1000).then(function () {
                console.log('Admin Is Able To Download CSV File');
            })
            browser.sleep(3000);
            writedattocsv(recentDownloadedfile,collectionName);
            browser.sleep(4000);
            return pathfile;
        })
        return data;
    }
    catch (Exception) {
        console.log('Failed');
    }   
}

const openRecentDownloadedTocWriteAndValidateInvalidMappedTopics = async (collectionName) => {
    try {
        let filename2 = "C:\\Users\\Qualitrix\\Downloads\\";
        console.log(filename2);
        browser.sleep(6000);
       data = fs.readdir(filename2,(err,Downloads)=>{
            browser.sleep(4000);
            console.log(Downloads[1]);
            browser.sleep(4000);
            var recentDownloadedfile = Downloads[1];
            var pathfile = filename2+recentDownloadedfile;
            browser.driver.wait(function () { return fs.existsSync(pathfile); }, 1000).then(function () {
                console.log('Admin Is Able To Download CSV File');
            })
            browser.sleep(3000);
            writeIncorrectMappedDataAndValidateError(recentDownloadedfile,collectionName);
            browser.sleep(4000);
            return pathfile;
        })
        return data;
    }
    catch (Exception) {
        console.log('Failed');
    }   
}


const openRecentDownloadedTocWriteWithoutColumns = async (collectionName) => {
    try {
        let filename2 = "C:\\Users\\Qualitrix\\Downloads\\";
        console.log(filename2);
        browser.sleep(6000);
       data = fs.readdir(filename2,(err,Downloads)=>{
            browser.sleep(4000);
            console.log(Downloads[1]);
            browser.sleep(4000);
            var recentDownloadedfile = Downloads[1];
            var pathfile = filename2+recentDownloadedfile;
            browser.driver.wait(function () { return fs.existsSync(pathfile); }, 1000).then(function () {
                console.log('Admin Is Able To Download CSV File');
            })
            browser.sleep(3000);
            writeAndValidateColumnsRemovedError(recentDownloadedfile,collectionName);
            browser.sleep(4000);
            return pathfile;
        })
        return data;
    }
    catch (Exception) {
        console.log('Failed');
    }   
}



const uploadRecentDownloadedFile = async () => {
    try {
        let filename2 = "C:\\Users\\Qualitrix\\Downloads\\";
        console.log(filename2);
        browser.sleep(6000);
        let data = fs.readdir(filename2,(err,Downloads)=>{
            browser.sleep(4000);
            console.log(Downloads[1]);
            browser.sleep(4000);
            var recentDownloadedfile = Downloads[1];
            var pathfile = filename2+recentDownloadedfile;
            console.log("milan"+pathfile);
            browser.driver.wait(function () { return fs.existsSync(pathfile); }, 1000).then(function () {
                console.log('Admin Is Able To Download CSV File');
            })

            browser.sleep(4000);
        })
    }
    catch (Exception) {
        console.log('Failed');
    }
}


const readRecentDownloadedFile = async () => {
    try {
        let filename2 = "C:\\Users\\Qualitrix\\Downloads\\";
        console.log(filename2);
        browser.sleep(6000);
       let data = fs.readdir(filename2,(err,Downloads)=>{
            browser.sleep(4000);
            console.log(Downloads[1]);
            browser.sleep(4000);
            var recentDownloadedfile = Downloads[1];
            var pathfile = filename2+recentDownloadedfile;
            console.log("milan"+pathfile);
            browser.driver.wait(function () { return fs.existsSync(pathfile); }, 1000).then(function () {
                console.log('Admin Is Able To Download CSV File');
            })
            readRecentDownloadedFileAndExtractDoid(pathfile,2,"Folder Identifier")
            browser.sleep(4000);
        })
    }
    catch (Exception) {
        console.log('Failed');
    }   
}
const readRecentDownloadedFileAndExtractDoid = async (FilePath, rowno, columnHeaderName) => {
    const csvFilePath = FilePath;
    const csv = require("csvtojson");
    csv()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        data = jsonObj.filter((item) => {
          
          return item;
          });
    //    var finaldata1 = data[rowno][columnHeaderName];
    // var finaldata2 = data[rowno1][columnHeaderName1];
         console.log("milan"+data);
        console.log(data[rowno][columnHeaderName]);
       return finaldata;
    });
  }

  

  const downloadSampleCsvUpdateAndReuploadValidatePleaseWaitMessage = async (collectionName) => {
    try {
        let filename2 = "C:\\Users\\Qualitrix\\Downloads\\";
        console.log(filename2);
        browser.sleep(6000);
        data = fs.readdir(filename2,(err,Downloads)=>{
            browser.sleep(4000);
            console.log(Downloads);
            var recentDownloadedfile = Downloads[0];
            console.log(recentDownloadedfile);
            var pathfile = filename2+recentDownloadedfile;
            browser.driver.wait(function () { return fs.existsSync(pathfile); }, 1000).then(function () {
                console.log('Admin Is Able To Download CSV File');
            })
            browser.sleep(3000);
            dataForSampleCSvFile(recentDownloadedfile);
            uploadDownloadedfileAfterWriting(recentDownloadedfile);
            browser.sleep(2000);
            sanity.nextButtonOnUploadpopUp.click();
            expect(searchObj.assertPleaseWaitMessage.isPresent()).toBe(true);
            browser.sleep(4000);
            expect(searchObj.assertUpdatedSuccessfully.isPresent()).toBe(true);
            browser.sleep(2000);
            sanity.closeButtonPopUp.click();
            browser.sleep(8000);
            return pathfile;
        })
        return data;
    }
    catch (Exception) {
        console.log('Failed');
    }   
}

const downloadSampleCsvUpdateAndReuploadValidateMissingFolderError = async (collectionName) => {
    try {
        let filename2 = "C:\\Users\\Qualitrix\\Downloads\\";
        console.log(filename2);
        browser.sleep(6000);
        data = fs.readdir(filename2,(err,Downloads)=>{
            browser.sleep(4000);
            console.log(Downloads);
            var recentDownloadedfile = Downloads[0];
            console.log(recentDownloadedfile);
            var pathfile = filename2+recentDownloadedfile;
            browser.driver.wait(function () { return fs.existsSync(pathfile); }, 1000).then(function () {
                console.log('Admin Is Able To Download CSV File');
            })
            browser.sleep(3000);
            dataForSampleCSvFileWithMissingFolder(recentDownloadedfile);
            uploadDownloadedfileAfterWriting(recentDownloadedfile);
            browser.sleep(2000);
            sanity.nextButtonOnUploadpopUp.click();
            expect(searchObj.assertPleaseWaitMessage.isPresent()).toBe(true);
            browser.sleep(4000);
            expect(searchObj.assertUpdatedSuccessfully.isPresent()).toBe(true);
            browser.sleep(2000);
            sanity.closeButtonPopUp.click();
            browser.sleep(8000);
            return pathfile;
        })
        return data;
    }
    catch (Exception) {
        console.log('Failed');
    }   
}


module.exports = {
    writedattocsv,
    readRecentDownloadedFile,
    openRecentDownloadedTocAndValidateAndWrite,
    uploadDownloadedSampleCSVfile,
    uploadRecentDownloadedFile,
    readRecentDownloadedFileAndExtractDoid,
    writeIncorrectMappedDataAndValidateError,
    openRecentDownloadedTocWriteAndValidateInvalidMappedTopics,
    writeAndValidateColumnsRemovedError,
    openRecentDownloadedTocWriteWithoutColumns,
    downloadSampleCsvUpdateAndReuploadValidatePleaseWaitMessage,
    uploadDownloadedfileAfterWriting,
    downloadSampleCsvUpdateAndReuploadValidateMissingFolderError,
}