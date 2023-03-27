const { browser } = require("protractor");

const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const resourcePag = require(protractor.basePath + '/test/pages/resource/resource.po.js');
const etbpage = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
const uploadPage = require(protractor.basePath + '/test/pages/upload/upload.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var content = ccpage.contentCreation();
var etbv = etbpage.etb();
var resov = resourcePag.resource();
var uploadV = uploadPage.upload();
var UPLOAD_YOUTUBE = "https://youtu.be/J5dRMPNkjxs";
var pdf = protractor.basePath + '/test/testdata/samplepdf.pdf';
var samplePdf150mb = protractor.basePath + '/test/testdata/150MBsamplepdf.pdf'
var epub = protractor.basePath + '/test/testdata/faulkner-sound-and-the-fury.epub';
var html = protractor.basePath + '/test/testdata/HTMLContent_test.zip';
var h5p = protractor.basePath + '/test/testdata/fill-in-the-blanks-837.h5p';
var mp4 = protractor.basePath + '/test/testdata/DraftVersion.mp4';
var webm = protractor.basePath + '/test/testdata/big-buck-bunny_trailer.webm';
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');
const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
var sanity = sanityPage.SanityElement();
const tpdPage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
var searchObj = tpdPage.tpdPage();
var webm50Mb = protractor.basePath + '/test/testdata/75mbwebm.webm';
var mp4150Mb = protractor.basePath + '/test/testdata/Upload content-mp4.mp4';


const uploadPdf = () => {
    var resourceName;
    try {
        console.log("user is trying to upload pdf");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.sleep(8000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(pdf);
        browser.sleep(40000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();
        browser.sleep(3000);
        console.log("User successfully uploaded pdf content");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload content pdf")
    }
}


const upload150mbPdf = () => {
    var resourceName;
    try {
        console.log("user is trying to upload pdf");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.sleep(8000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(samplePdf150mb);
        browser.sleep(100000);
        //uploadV.uploadButton.click();
        browser.sleep(80000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(2000);
        etbv.titleName.clear();
        resourceName = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();
        browser.sleep(3000);
        console.log("User successfully uploaded pdf content");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload content pdf");
    }
}



const uploadHtml = () => {

    var resourceName;
    try {

        console.log("User is trying to upload html");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(4000);



        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.browseButton), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(html);
        browser.sleep(40000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();

        console.log("User successfully uploaded html");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload html");
    }
}
const uploadH5p = () => {

    var resourceName;
    try {

        console.log("User is trying to upload H5p content")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.sleep(7000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);

        //browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.browseButton), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(h5p);
        browser.sleep(40000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sndForRevInUpload), 20000, "Failed to click sendForReview");
        uploadV.sndForRevInUpload.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();

        return resourceName;
    } catch (Exception) {
        console.log("Usr failed upload h5p");
    }
}
const uploadEpub = () => {
    var resourceName;
    try {
        console.log("User is trying to upload epub");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(3000);



        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(epub);
        browser.sleep(40000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();

        browser.sleep(1000);
        console.log("User successfully uploaded epub");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload epub");
    }
}
const uploadWebm = () => {
    var resourceName;
    try {
        console.log("User is trying to upload webm");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);



        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(webm);
        browser.sleep(40000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();
        browser.sleep(1000);
        console.log("User successfully uploaded webm");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload webm");
    }
}
const uploadMp4 = () => {
    var resourceName;
    try {
        console.log("User is trying to upload mp4");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(5000);


        //browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.browseButton), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(mp4);
        browser.sleep(19000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();
        browser.sleep(3000);
        console.log("User successfully uploaded mp4");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload mp4");
    }
}
const uploadYoutube = () => {
    var resourceName;
    try {
        console.log("User is trying to upload youtube");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.sendKeys(UPLOAD_YOUTUBE);
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", uploadV.uploadbutton);
        uploadV.uploadButton.click();
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownAndSendForRevAndValidateLiscence();
        browser.sleep(3000);
        console.log("User successfully uploaded youtube");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload youtube");
    }
}
const uploadTemplate = () => {

    var resourceName;
    try {

        console.log("User is trying to check upload content template")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        console.log("User successfully checked upload content template");
        return resourceName;
    }
    catch (Exception) {
        console.log("Failed to check upload content template")
    }
}
const uploadAllContent = () => {

    var resourcename;
    try {

        console.log("user is trying to upload All Content");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(pdf);
        browser.sleep(8000);
        uploadV.savebutton.click();
        browser.sleep(1000);
        uploadV.closebutton.click();
        browser.sleep(2000);
        //   uploadV.uploadcontIcon.click();
        //   browser.sleep(2000);
        //   uploadV.browseButton.sendKeys(mp4);
        //   browser.sleep(8000);
        //   uploadV.savebutton.click();
        //   browser.sleep(1000);
        //   uploadV.closebutton.click();
        //   browser.sleep(2000);
        //   uploadV.uploadcontIcon.click();
        //   browser.sleep(2000);
        //   uploadV.browseButton.sendKeys(h5p);
        //   browser.sleep(8000);
        //   uploadV.savebutton.click();
        //   browser.sleep(1000);
        //   uploadV.closebutton.click();
        //   browser.sleep(2000);
        //   uploadV.uploadcontIcon.click();
        //   browser.sleep(2000);
        //   uploadV.browseButton.sendKeys(epub);
        //   browser.sleep(8000);
        //   uploadV.savebutton.click();
        //   browser.sleep(1000);
        //   uploadV.closebutton.click();
        //   browser.sleep(2000);
        //   uploadV.uploadcontIcon.click();
        //   browser.sleep(2000);
        //   uploadV.browseButton.sendKeys(webm);
        //   browser.sleep(8000);
        //   uploadV.savebutton.click();
        //   browser.sleep(1000);
        //   uploadV.closebutton.click();
        //   browser.sleep(2000);
        //   uploadV.uploadcontIcon.click();
        //   browser.sleep(2000);
        //   uploadV.browseButton.sendKeys(html);
        //   browser.sleep(8000);
        //   uploadV.savebutton.click();
        //   browser.sleep(1000);
        //   uploadV.closebutton.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourcename = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourcename);
        DropDownForSendForReview();
        browser.sleep(1000);
        console.log("User successfully uploaded pdf content");
        return resourcename;
    } catch (err) {
        console.error("User failed to upload content pdf, " + err);
    }

}
const uploadAddCollaborator = () => {
    var resourceName;
    try {
        console.log("User is trying to upload mp4");


        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(pdf);
        browser.sleep(10000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clkEditDetails), 20000, "Failed to click clkEditDetails");
        // uploadV.clkEditDetails.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 30000, "clickAppIcon button not available");
        // etbv.clickAppIcon.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        // etbv.checkAppIcon.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        // etbv.selectAppIcon.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        // etbv.titleName.click();
        // browser.sleep(500);
        // etbv.titleName.clear();
        // resourceName="ResourceA"+faker.randomData().firstname;
        // etbv.titleName.sendKeys(resourceName);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickBoard), 30000, "board button not available");
        // etbv.clickBoard.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectBoard), 30000, "contuinew button not available");
        // etbv.selectBoard.click();
        // browser.sleep(500);
        // etbv.clickMedium.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
        // etbv.selectMedium.click();
        // browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        // etbv.clickclass.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectClass), 30000, "contuinew button not available");
        // etbv.SelectClass.click();
        // browser.sleep(500);
        // etbv.clicksubject.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectSubject), 30000, "contuinew button not available");
        // etbv.selectSubject.click();
        // browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();",  etbv.yearOfCreation);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.yearOfCreation), 30000, "contuinew button not available");
        // etbv.yearOfCreation.click();
        // etbv.yearOfCreation.clear();
        // etbv.yearOfCreation.sendKeys("2020");
        // browser.sleep(1000);

        // etbv.clickContentType.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectContentType), 30000, "selectContentType button not available");
        // etbv.selectContentType.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
        // content.saveform.click();
        browser.sleep(1000);
        console.log("User successfully uploaded add collaborator");
        // return resourceName;
    } catch (Exception) {
        console.log("User failed to upload add collaborator");
    }
}
const saveContent = () => {
    try {
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();
        browser.sleep(1000);
    } catch (err) {

    }
}
const uploadanyPDF = () => {

    try {

        console.log("user is trying to upload pdf");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(pdf);
        browser.sleep(8000);
    } catch (Exception) {
        console.log("User failed to upload content pdf")
    }
}

const DropDownForSendForReview = () => {
    try {
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickBoard), 30000, "board button not available");
        etbv.clickBoard.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectBoard), 30000, "contuinew button not available");
        etbv.selectBoard.click();
        //   wait.waitForElementVisibility(etbv.clickCurriculum, 30000, "clickCurriculum button not available");
        //   etbv.clickCurriculum.click();
        //   wait.waitForElementVisibility(etbv.selectCurriculum, 30000, "selectCurriculum button not available");
        //   etbv.selectCurriculum.click();
        //   browser.sleep(500);
        browser.sleep(500);
        etbv.clickMedium.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
        etbv.selectMedium.click();

        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        etbv.clickclass.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectClass), 30000, "contuinew button not available");
        etbv.SelectClass.click();
        browser.sleep(500);

        etbv.clicksubject.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectSubject), 30000, "contuinew button not available");
        etbv.selectSubject.click();
        browser.sleep(500);

        //   etbv.clickMedium.click();
        //   browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
        //   etbv.selectMedium.click();
        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.yearOfCreation), 30000, "contuinew button not available");
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");
        browser.sleep(3000);
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickContentType);
        // wait.waitForElementVisibility(etbv.clickContentType, 30000, "clickContentType button not available");
        // etbv.clickContentType.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.practiceResource2), 30000, "selectContentType button not available");
        // etbv.practiceResource2.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
        content.saveform.click();
        browser.sleep(2000);

    } catch (err) {

    }
}
const DropDownAndSendForRevAndValidateLiscence = () => {
    try {
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickBoard), 30000, "board button not available");
        etbv.clickBoard.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectBoard), 30000, "contuinew button not available");
        etbv.selectBoard.click();
        //   wait.waitForElementVisibility(etbv.clickCurriculum, 30000, "clickCurriculum button not available");
        //   etbv.clickCurriculum.click();
        //   wait.waitForElementVisibility(etbv.selectCurriculum, 30000, "selectCurriculum button not available");
        //   etbv.selectCurriculum.click();
        //   browser.sleep(500);
        browser.sleep(500);
        etbv.clickMedium.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
        etbv.selectMedium.click();

        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        etbv.clickclass.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectClass), 30000, "contuinew button not available");
        etbv.SelectClass.click();
        browser.sleep(500);

        etbv.clicksubject.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectSubject), 30000, "contuinew button not available");
        etbv.selectSubject.click();
        browser.sleep(500);

        //   etbv.clickMedium.click();
        //   browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
        //   etbv.selectMedium.click();
        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.yearOfCreation), 30000, "contuinew button not available");
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");
        browser.sleep(3000);
        expect(uploadV.assertLiscenceCCBY.isPresent()).toBe(true);
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickContentType);
        // wait.waitForElementVisibility(etbv.clickContentType, 30000, "clickContentType button not available");
        // etbv.clickContentType.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.practiceResource2), 30000, "selectContentType button not available");
        // etbv.practiceResource2.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
        content.saveform.click();
        browser.sleep(2000);

    } catch (err) {

    }
}
const uploadContentAndPreviewInAllMyContent = () => {
    var resourceName;
    try {
        console.log("User is trying to upload mp4");


        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(mp4);
        browser.sleep(40000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clkEditDetails), 20000, "Failed to click sendForReview");
        uploadV.clkEditDetails.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "UploadPreiview" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.closebutton), 20000, "didn't click browse button");
        uploadV.closebutton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.closeEditor), 20000, "didn't click browse button");
        uploadV.closeEditor.click();
        browser.sleep(5000);
        var myAlert = browser.switchTo().alert();
        myAlert.accept();
        browser.sleep(7000);

        console.log("User successfully uploaded mp4");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload mp4");
    }
}


const uploadH5pAndLimitsharing = () => {
    var resourceName;
    try {

        console.log("User is trying to upload H5p content")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.sleep(7000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);

        //browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.browseButton), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(h5p);
        browser.sleep(40000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.editDetails), 20000, "didn't click browse button");
        uploadV.editDetails.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();
        browser.sleep(3000);
        uploadV.closebuton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.sendForReviewDropDown), 40000, "clickLimitedSharing is not available");
        searchObj.sendForReviewDropDown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickLimitedSharing), 40000, "clickLimitedSharing is not available");
        searchObj.clickLimitedSharing.click();
        browser.sleep(3000);

        return resourceName;
    } catch (Exception) {
        console.log("Usr failed upload h5p");
    }
}



const validateuplloadContentInAllMyContentBeforeRejection = (contentName) => {
      try {

        console.log("User validating content in AllMyContent section")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.allMyContent), 20000, "Upload content didn't click");
        sanity.allMyContent.click();
        browser.sleep(4000);
        sanity.clkSearhInAllMyContent.sendKeys(contentName);
        browser.sleep(1000);
        sanity.clkSearchIconAllMyContent.click();
        browser.sleep(5000);
        uploadV.contentCard.getText().then(function(input){
            expect(input).toEqual(contentName);
            console.log(input+ " is validated in AllMyContent session.")
        })
        
    } catch (Exception) {
        console.log("User not able to validate content in AllMyContent section");
    }
}


const validateuplloadContentInAllUploadAfterRejection = (contentName) => {
    try {

      console.log("User is trying to validate content in Alluploads section")
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
      content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
      content.workSpace.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.allUploads), 20000, "Upload content didn't click");
      uploadV.allUploads.click();
      browser.sleep(5000);
      uploadV.allUploadsContentCard.getText().then(function(input){
          expect(input).toEqual(contentName);
          console.log(input+ " is validated in AllUpload session.");
      })
  } catch (Exception) {
      console.log("Usr failed to validaate in AllUpload.");
  }
}

const validateuplloadContentInSharedViaLinkSection = (contentName) => {
    try {

      console.log("User is trying to validate content in SharedViaLink bucket")
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
      content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
      content.workSpace.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sharedViaLinkBucket), 20000, "Upload content didn't click");
      uploadV.sharedViaLinkBucket.click();
      browser.sleep(5000);
      uploadV.allUploadsContentCard.getText().then(function(input){
          expect(input).toEqual(contentName);
          console.log(input+ " is validated in SharedViaLink bucket.");
      })
  } catch (Exception) {
      console.log("Usr failed to validaate in sharedViaLink bucket.");
  }
}

const uploadAllTypeOfContents = () => {
    var resourceName;
    try {
        console.log("user is trying to upload pdf");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(8000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(webm);
        browser.sleep(40000);

        uploadV.clickUploadButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(mp4);
        browser.sleep(40000);

        uploadV.clickUploadButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(epub);
        browser.sleep(40000);

        uploadV.clickUploadButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(h5p);
        browser.sleep(40000);

        uploadV.clickUploadButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(pdf);
        browser.sleep(40000);
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "ResourceA" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();
        browser.sleep(3000);
        console.log("User successfully uploaded pdf content");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload content pdf")
    }
}



const uploadLargeVideo= () => {
    var resourceName;
    try {
        console.log("User is trying to upload webm");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(2000);



        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(webm50Mb);
        browser.sleep(35000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "LargeVideo" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();
        browser.sleep(1000);
        console.log("User successfully uploaded webm");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload webm");
    }
}

const uploadMp4MoreThan150Mb = () => {
    var resourceName;
    try {
        console.log("User is trying to upload mp4");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000, "Upload content didn't click");
        uploadV.clickuploadContent.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
        uploadV.selectOne.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
        uploadV.learningResource.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
        uploadV.enterUrl.click();
        browser.sleep(5000);


        //browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.browseButton), 20000, "didn't click browse button");
        uploadV.browseButton.sendKeys(mp4150Mb);
        browser.sleep(19000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
        uploadV.sendforRev.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
        etbv.titleName.click();
        browser.sleep(500);
        etbv.titleName.clear();
        resourceName = "Mp4150Mb" + faker.randomData().firstname;
        etbv.titleName.sendKeys(resourceName);
        DropDownForSendForReview();
        browser.sleep(3000);
        console.log("User successfully uploaded mp4");
        return resourceName;
    } catch (Exception) {
        console.log("User failed to upload mp4");
    }
}





module.exports = {
    uploadPdf,
    uploadHtml,
    uploadH5p,
    uploadEpub,
    uploadWebm,
    uploadMp4,
    uploadYoutube,
    uploadTemplate,
    uploadAllContent,
    uploadAddCollaborator,
    saveContent,
    uploadanyPDF,
    DropDownForSendForReview,
    uploadContentAndPreviewInAllMyContent,
    validateuplloadContentInAllMyContentBeforeRejection,
    validateuplloadContentInAllUploadAfterRejection,
    validateuplloadContentInSharedViaLinkSection,
    uploadH5pAndLimitsharing,
    upload150mbPdf,
    uploadAllTypeOfContents,
    uploadLargeVideo,
    uploadMp4MoreThan150Mb,
}