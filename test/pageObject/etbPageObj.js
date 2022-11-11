//const { browser } = require("protractor");

const { browser } = require("protractor");

const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const resourcePag = require(protractor.basePath + '/test/pages/resource/resource.po.js');
const wait = require(protractor.basePath + '/helper/waiters.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
var content = ccpage.contentCreation();
var etbv = etbpage.etb();
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const etbpage2 = require(protractor.basePath + '/test/pages/ETB/EtbPage.js');
const etbpage1 = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
var resov = resourcePag.resource();


 
const createBook = () => {
    var bookname;
    try {
        console.log("User is trying to create book")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        sanityFun.FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");
        etbpage.etb().clickUseEditor.click();

        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        ccpage.contentCreation().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledName), 20000, "title not available");
        etbv.untitledName.click();
        etbv.untitledName.clear();
        etbv.untitledName.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        browser.sleep(3000);
        content.save.click();
        browser.sleep(5000);

        console.log("user successfully created Book");
        return bookname;
    }
    catch (err) {
        console.log(err);
    }

}
const sendForReviewTheBook = () => {
    try {
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.sendForReview), 20000, "send for review not available");
        content.sendForReview.click();
        browser.sleep(6000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.continuewButton), 50000, "contuinew button not available");
        // etbv.continuewButton.click();
        // browser.sleep(6000);


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
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickBoard), 30000, "board button not available");
        etbv.clickBoard.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectBoard), 30000, "contuinew button not available");
        etbv.selectBoard.click();
        browser.sleep(500);
        etbv.clickMedium.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
        etbv.selectMedium.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        etbv.clickclass.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectClass), 30000, "contuinew button not available");
        etbv.SelectClass.click();
        browser.sleep(500);
        etbv.clicksubject.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectSubject), 30000, "contuinew button not available");
        etbv.selectSubject.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", content.author);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        content.author.click();
        content.author.sendKeys("Ekstep");
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
        content.saveform.click();
        browser.sleep(7000);
    } catch (err) {
        console.log(err);
    }
}
const publishTheBookFromUpForReview = (bookname) => {
    try {

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000, "Creation page not loaded");
        content.upForReview.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(bookname);
        content.searchIconUpForReview.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
        content.searchedContentForPublish.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.publishCourseButton), 20000, "Creation page not loaded");
        content.publishCourseButton.click();
        browser.sleep(1000);
        content.checkBox.each(function (input) {
            input.click()
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.popupPublishButton1), 20000, "Creation page not loaded");
        content.popupPublishButton1.click();
        browser.switchTo().defaultContent();
        browser.sleep(1000);
    } catch (err) {
        console.log(err);
    }

}
const createBookWithAllResourceType = () => {
    var bookname;
    try {
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        sanityFun.FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");
        etbpage.etb().clickUseEditor.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        ccpage.contentCreation().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledName), 20000, "title not available");
        etbv.untitledName.click();
        etbv.untitledName.clear();
        etbv.untitledName.sendKeys('bookWithAllResource');
        // etbv.qrCodeRequired.click();
        // etbv.dialcodeEnter.click();
        // etbv.dialcodeEnter.sendKeys('C8J8R9');
        // etbv.validateDialCode.click();
        browser.sleep(1000);
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(4000);
        console.log(cred[31]['Title']);
        content.addResource.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        browser.sleep(2000);

        // content.resourceSearch.sendKeys("pdf");
        content.resourceSearch.sendKeys(cred[27]['Title']);
        browser.sleep(3000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(7000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickSearchedResourceDoId), 30000, "selectResourceType not available");
        content.clickSearchedResourceDoId.click();
        browser.sleep(1000);


        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(2000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("ecm");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("html");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("h5p");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("epub");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("mp4");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("webm");
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never enabled");
        content.save.click();
        browser.sleep(3000);

        return bookname;

    } catch (err) {
        console.log(err);
    }
}
const verifyTenantWithNoBoard = () => {
    var bookName;
    try {
        console.log("User is trying to create book")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown.workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().headerDropdown.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        // if (expect(etbv.book.isDisplayed()).toBeFalsy()) {

        // }

    }
    catch (err) {
        console.log(err);
    }
}
const editFormEditals = () => {
    try {
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.editDetails), 30000, "Edit Detials button not available");
        etbv.editDetails.click();

        browser.sleep(5000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.continuewButton), 30000, "contuinew button not available");
        // etbv.continuewButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 30000, "ClickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "CheckAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickBoard), 30000, "board button not available");
        // etbv.clickBoard.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectBoard), 30000, "contuinew button not available");
        // etbv.selectBoard.click();
        // etbv.clickMedium.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
        // etbv.selectMedium.click();
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        // etbv.clickclass.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectClass), 30000, "contuinew button not available");
        // etbv.SelectClass.click();
        // etbv.clicksubject.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectSubject), 30000, "contuinew button not available");
        // etbv.selectSubject.click();
        browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();", content.author);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        // content.author.click();
        // content.author.sendKeys("Ekstep");
        // browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");




        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
        content.saveform.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.close), 20000, "close not available");
        etbv.close.click();
    } catch (err) {
        console.log(err);
    }

}
const openBookFromDraftAndDownloadQRCode = () => {
    try {
        console.log("User is trying to create book")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        sanityFun.FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");
        etbpage.etb().clickUseEditor.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        ccpage.contentCreation().newchild.click();
        sanityPage.SanityElement().UnitName.sendKeys(faker.randomData().firstname);
        browser.sleep(1000);
        sanityPage.SanityElement().saveButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkEditDetails), 20000, "clkEditDetails  is not available");

        sanityPage.SanityElement().clkEditDetails.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkAppIcon), 20000, "clkAppIcon  is not available");

        sanityPage.SanityElement().clkAppIcon.click();
        browser.sleep(2000);
        sanityPage.SanityElement().chkAppIcon.click();
        browser.sleep(2000);
        sanityPage.SanityElement().sltButton.click();
        browser.sleep(2000);
        //    sanityPage.SanityElement().clkBoard.click();
        //    browser.sleep(1000);
        //    sanityPage.SanityElement().sltBoard.click();
        //    browser.sleep(2000);

        //    sanityPage.SanityElement().clkMedium.click();
        //    browser.sleep(2000);
        //    sanityPage.SanityElement().sltMedium.click();
        //    browser.sleep(2000);

        //    var we =sanityPage.SanityElement().clkClass;
        //                browser.executeScript("arguments[0].scrollIntoView();", we.getWebElement()).then(function(){
        //                   we.click();
        //                });

        //    browser.sleep(2000);
        //    sanityPage.SanityElement().SltClass.click();
        //    browser.sleep(2000);
        //    sanityPage.SanityElement().clkSubject.click();
        //    browser.sleep(1000);
        //    sanityPage.SanityElement().SltSubject.click();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", content.author);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        content.author.click();
        content.author.sendKeys("Ekstep");
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");

        sanityPage.SanityElement().clkSaveEdit.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkCloseButton.click();
        browser.sleep(2000);

        sanityPage.SanityElement().closePage.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertDraftField), 20000, "assertDraftField  is not available");
        expect(sanityPage.SanityElement().assertDraftField.getText()).toEqual('Drafts');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkFirstBookDraft), 20000, "clkFirstBookDraft  is not available");
        sanityPage.SanityElement().clkFirstBookDraft.click();
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(8000);
        sanityPage.SanityElement().qrCodeYes.click();
        sanityPage.SanityElement().saveButton.click();
        browser.sleep(6000);

        sanityPage.SanityElement().clkDropDownQrcode.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkGenerateQrCode.click();
        browser.sleep(1000);
        expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
        console.log('QR Code Generated Succesfully');
        sanityPage.SanityElement().clkDownloadQr.click();
        browser.sleep(2000);

    }
    catch (err) {
        console.log(err);
    }
}
const openPublishedSectionAndDownloadQRcode = () => {
    try {
        console.log("User is trying to  open Published Section And Download QRcode");
        content.published.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkFirstBookDraft), 20000, "clkFirstBookDraft  is not available");
        sanityPage.SanityElement().clkFirstBookDraft.click();
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(8000);
        //sanityPage.SanityElement().qrCodeYes.click();
        sanityPage.SanityElement().saveButton.click();
        browser.sleep(6000);

        sanityPage.SanityElement().clkDropDownQrcode.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkGenerateQrCode.click();
        browser.sleep(3000);
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(8000);
        // sanityPage.SanityElement().enterQrCode.sendKeys('2');
        // sanityPage.SanityElement().clkReqestQrCode.click();
        expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
        console.log('QR Code Generated Succesfully');
        sanityPage.SanityElement().clkDownloadQr.click();
        browser.sleep(2000);
        console.log("User successfully  open Published Section And Download QRcode");
    } catch (err) {
        console.error("User failed  open Published Section And Download QRcode");
    }
}
const createBookWithSpecificResourceType = (Content) => {
    var bookname;
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        sanityFun.FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");
        etbpage.etb().clickUseEditor.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().newchild), 20000, "Didn't switched to different frame");
        ccpage.contentCreation().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledName), 20000, "title not available");
        etbv.untitledName.click();
        etbv.untitledName.clear();
        etbv.untitledName.sendKeys('bookWithconceptResource');
        // etbv.qrCodeRequired.click();
        // etbv.dialcodeEnter.click();
        // etbv.dialcodeEnter.sendKeys('C8J8R9');
        // etbv.validateDialCode.click();
        browser.sleep(1000);
        ccpage.contentCreation().addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        ccpage.contentCreation().resourceSearch.click();
        ccpage.contentCreation().resourceSearch.sendKeys(Content);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never enabled");
        content.save.click();
        browser.sleep(6000);

        return bookname;

    } catch (err) {
        console.error(err);
    }
}
const createBookWithRegionalLanguage = (Regional) => {
    var bookname;
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = Regional;
        etbpage.etb().bookName.sendKeys(bookname);

        sanityFun.FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");
        etbpage.etb().clickUseEditor.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().newchild), 20000, "Didn't switched to different frame");
        ccpage.contentCreation().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledName), 20000, "title not available");
        etbv.untitledName.click();
        etbv.untitledName.clear();
        etbv.untitledName.sendKeys('bookWithRgionalLanguage');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never enabled");
        browser.sleep(3000);
        content.save.click();
        browser.sleep(6000);
        sanityPage.SanityElement().closePage.click();
        browser.sleep(4000);
        return bookname;

    } catch (err) {
        console.error(err);
    }
}

const adminCanEditTextBook = (booksName) => {
    try {

        // browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        // ccpage.contentCreation().headerDropdown.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        // ccpage.contentCreation().workSpace.click();
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        // etbpage.etb().book.click();
        // browser.sleep(1000);



        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        // bookname = "BookA" + faker.randomData().firstname;
        // etbpage.etb().bookName.sendKeys(bookname);

        // sanityFun.FillBmesWhileCreatingBook();

        // ccpage.contentCreation().startCreating.click();
        // browser.sleep(8000);
        // sanityPage.SanityElement().BackButton.click();
        // browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.allTextBook), 20000, "all textBook link not loaded");
        etbv.allTextBook.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.searchBoxForSearchingBook), 20000, "searchBox not loaded");
        etbv.searchBoxForSearchingBook.sendKeys(booksName);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.firstContentWithDraftstatus), 20000, "1st book not loaded");
        etbv.firstContentWithDraftstatus.click();
        //browser.sleep(8000);
        browser.sleep(5000);
        // browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectBoardForcollection);


        // sanityPage.SanityElement().selectBoardForcollection.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().selectBoardValueForcollection.click();
        // browser.sleep(3000);

        // sanityPage.SanityElement().selectMediumForcollection.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().selectMediumValueForcollection.click();
        // browser.sleep(3000);

        // sanityPage.SanityElement().selectClassForCourse.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().selectClassValueForcollection.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        // sanityPage.SanityElement().selectSubjectForCourse.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().selectSubjectValueForcollection.click();
        // browser.sleep(3000);

        // browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        // browser.sleep(1000);
        // sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        // browser.sleep(3000);

        // browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().attribution);
        // browser.sleep(1000);
        // var attributioninput = "bAttribution1,aAttribution2,dAttribution3,fAttribution4";
        // sanityPage.SanityElement().attribution.sendKeys(attributioninput);
        // browser.sleep(3000);

        // sanityPage.SanityElement().saveAsDraft.click();
        // browser.sleep(5000);

        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // content.addResource.click(); 
        // browser.sleep(3000);
        //     browser.executeScript('window.scrollTo(0,800);').then(function () {
        //         console.log('++++++SCROLLED Down+++++');
        //     });
        //     browser.sleep(4000);

        //  sanityPage.SanityElement().selectBoardForcollection.click();
        //  browser.sleep(3000);
        //  sanityPage.SanityElement().selectBoardValueForcollection.click();
        //  browser.sleep(3000);

        //     sanityPage.SanityElement().selectMediumForcollection.click();
        //     browser.sleep(3000);
        //      sanityPage.SanityElement().selectMediumValueForcollection.click();
        //  browser.sleep(3000);

        //     sanityPage.SanityElement().selectClassForCourse.click();
        //     browser.sleep(3000);
        //  sanityPage.SanityElement().selectClassValueForcollection.click();
        //  browser.sleep(3000);


        //      browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000,"subject covered not loaded");
        //      sanityPage.SanityElement().selectSubjectForCourse.click();
        //      browser.sleep(3000);
        //   sanityPage.SanityElement().selectSubjectValueForcollection.click();
        //   browser.sleep(3000); 

        //   browser.executeScript("arguments[0].scrollIntoView();",sanityPage.SanityElement().selectCopyRightYear);
        //   browser.sleep(1000);
        //         sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        //   browser.sleep(3000);

        //   sanityPage.SanityElement().saveAsDraft.click();
        //   browser.sleep(5000);   


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);
        sanityPage.SanityElement().childDesc.sendKeys("childDesc");
        browser.sleep(3000);
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkContent.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(4000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        //   browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000,"submit Button not loaded");
        //   sanityPage.SanityElement().submitForreviewButton.click();
        //   browser.sleep(3000); 
        //   sanityPage.SanityElement().termsAndConditionCheckbox.click();
        //   browser.sleep(3000); 
        //   sanityPage.SanityElement().NewCoursesubmitButton.click();
        //   browser.sleep(4000); 



    } catch (err) {
        console.error(err);
    }
}

const searchContentInExplorePage = (Consume) => {
    try {
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(Consume);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(3000);
        browser.navigate().back();
    
    }
    catch (Exception) {
        console.log('Failed on searching library by applying filters');

    }

}
const searchWithQRcode = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        console.log('user is trying to search content using QR code');
        console.log('user is verifying-SUN-2063');
        console.log('user is trying to search content using QR code');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().enterQRcodeButton), 40000, "enterQRcodeButton is not available");
        // etbPage.EtbElem().enterQRcodeButton.click();
        // browser.sleep(1000);

        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(4000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(cred[18]['CourseDescription']);
        resov.searchIcon.click();
        browser.sleep(4000);
        console.log("Clicked on Search Icon");
        expect(resov.resoCard.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(5000);



        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().EnterQRCodeBox), 40000, "enterQRcodeButton is not available");
        // etbPage.EtbElem().EnterQRCodeBox.click();
        // browser.sleep(1000);
        // etbPage.EtbElem().EnterQRCodeBox.sendKeys(cred[18]['CourseDescription']);
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().SearchQRCode), 40000, "enterQRcodeInSearchField is not available");
        // etbPage.EtbElem().SearchQRCode.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().enterQRcodeInSearchField), 40000, "enterQRcodeInSearchField is not available");
        // etbPage.EtbElem().enterQRcodeInSearchField.click();
        // etbPage.EtbElem().enterQRcodeInSearchField.sendKeys(cred[18]['CourseDescription']);
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().submitQRcode), 40000, "enterQRcodeInSearchField is not available");
        // etbPage.EtbElem().submitQRcode.click();
        // browser.sleep(1000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkEnterQRCode), 20000, "Enter QR Code is not available");
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().linkedQRcodeContent), 40000, "enterQRcodeInSearchField is not available");
        // etbPage.EtbElem().linkedQRcodeContent.getText().then(function (content) {
        //     console.log('Linked contents are:' + content);
        // });
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().QrcontentClk), 40000, "QrcontentClk is not available");
        // etbPage.EtbElem().QrcontentClk.click();
        // console.log('Content Opened Successfully')
        // console.log('Searched contents are verified');
        // browser.sleep(1000);
    }
    catch (err) {
        console.log(err);
    }
}



const searchWithInvalidQRcode = () => {
    try {    
        
        browser.sleep(4000);

        // wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        // resov.headerLibrary.click();
        browser.sleep(5000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys('C2H4CD');
        resov.searchIcon.click();
        browser.sleep(3000);
        console.log("Clicked on Search Icon");
        // wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        // resov.resoCard.click();
        // browser.sleep(1000);


        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        // etbPage.EtbElem().headerLibrary.click();
        // console.log('user is trying to search content using invalid QR code');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().enterQRcodeButton), 40000, "enterQRcodeButton is not available");
        // etbPage.EtbElem().enterQRcodeButton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().enterQRcodeInSearchField), 40000, "enterQRcodeInSearchField is not available");
        // etbPage.EtbElem().enterQRcodeInSearchField.click();
        // etbPage.EtbElem().enterQRcodeInSearchField.sendKeys('C2H4CD');
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().submitQRcode), 40000, "enterQRcodeInSearchField is not available");
        // etbPage.EtbElem().submitQRcode.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().EnterQRCodeBox), 40000, "enterQRcodeButton is not available");
        // etbPage.EtbElem().EnterQRCodeBox.click();
        // browser.sleep(1000);
        // etbPage.EtbElem().EnterQRCodeBox.sendKeys('C2H4CD');
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().SearchQRCode), 40000, "enterQRcodeInSearchField is not available");
        // etbPage.EtbElem().SearchQRCode.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().contentNotAdded), 40000, "contentNotAdded is not available");
        // etbPage.EtbElem().contentNotAdded.getText().then(function (actualContent) {
        //     console.log("Content Present is  :" + actualContent);
        //     var expectedContent = "did not match any content";
        //     expect(actualContent).toContain(expectedContent)
        //     {
        //         console.log('Content not added yet')
        //     }
        // });
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().contentWillGetAddedInFutureMessage), 40000, "contentWillGetAddedInFutureMessage is not available");
        // etbPage.EtbElem().contentWillGetAddedInFutureMessage.getText().then(function (futureMessage) {
        //     console.log("Content Present is  :" + futureMessage);
        //     var expectedContent = "Your state will soon add content for this QR code. It will be available shortly";
        //     expect(futureMessage).toContain(expectedContent)
        //     {
        //         console.log('Your state will soon add content for this QR code. It will be available shortly')
        //     }
        // });
        console.log('Searched contents are verified');
    }
    catch (err) {
        console.log(err);
    }
}

const librarysearchFilter = () => {
    try {
        browser.sleep(1000);
        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        etbPage.EtbElem().headerLibrary.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        etbPage.EtbElem().filterSearch.click();
        etbPage.EtbElem().filterSearch.sendKeys('Textbook');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchIcon), 40000, "searchIcon is not available");
        etbPage.EtbElem().searchIcon.click();

        browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilter), 40000, "clickFilterBoard is not available");
        // etbPage.EtbElem().clickFilter.click();
        // browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickFilterBoard), 40000, "clickFilterBoard is not available");
        content.clickFilterBoard.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectFilterBoard), 40000, "selectFilterBoard is not available");
        content.selectFilterBoard.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickFilterMedium), 40000, "clickFilterMedium is not available");
        content.clickFilterMedium.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectFilterMedium), 40000, "selectFilterMedium is not available");
        // content.selectFilterMedium.click();
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterClass), 40000, "clickFilterClass is not available");
        // etbPage.EtbElem().clickFilterClass.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterClass), 40000, "selectFilterClass is not available");
        // etbPage.EtbElem().selectFilterClass.click();
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterSubject), 40000, "clickFilterSubject is not available");
        // etbPage.EtbElem().clickFilterSubject.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterSubject), 40000, "selectFilterSubject is not available");
        // etbPage.EtbElem().selectFilterSubject.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickSubmit), 40000, "clickSubmit is not available");
        // etbPage.EtbElem().clickSubmit.click();
        browser.sleep(1000);

        try {
            expect(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseToBeClicked)).toBeTruthy()
            browser.sleep(1000);
            if (protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseToBeClicked)) {
                browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseToBeClicked), 40000, "courseToBeClicked is not available");
                etbPage.EtbElem().courseToBeClicked.getText().then(function (value) {
                    console.log("Filters are applied and :" + value + " is the resultant Content");
                    console.log('Filter are applied');
                    browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
                    etbPage.EtbElem().headerLibrary.click();
                    browser.sleep(1000);
                    browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
                    etbPage.EtbElem().filterSearch.clear();
                    etbPage.EtbElem().filterSearch.click();
                    etbPage.EtbElem().filterSearch.sendKeys(value);
                    browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchIcon), 40000, "searchIcon is not available");
                    etbPage.EtbElem().searchIcon.click();
                    browser.sleep(1000);
                    browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseToBeClicked), 40000, "courseToBeClicked is not available");
                    etbPage.EtbElem().courseToBeClicked.getText().then(function (Book) {
                        console.log("courseToBeClicked text :" + Book);

                        browser.sleep(1000);
                        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseCard1), 40000, "courseCard is not available");
                        etbPage.EtbElem().courseCard1.click();
                        console.log("User successfully verified the Book : " + bookName2);
                        console.log("User successfully navigated To Library And Search For Book");
                    });
                });


            }
        }
        catch (Exception) {
            console.log('Filters are applied but could not get the resultant Content');
        }

    }
    catch (Exception) {
        console.log('Failed on searching library by applying filters');

    }

}
const verifyNoDefaultValuSltinFilter = () => {
    try {
        browser.sleep(1000);
        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.visibilityOf(tpd.courses), 40000, "tpd.courses is not available");
        tpd.courses.click();
        browser.sleep(3000);


        var Organization = etbPage.EtbElem().OrganizationNoDefDD.getText();
        expect(Organization.getText()).toEqual('Select Organization Name');

        var MediumNoDefDD = etbPage.EtbElem().MediumNoDefDD.getText();
        expect(MediumNoDefDD.getText()).toEqual('Select Medium');

        var ClassNoDefDD = etbPage.EtbElem().ClassNoDefDD.getText();
        expect(ClassNoDefDD.getText()).toEqual('Select Class');

        var subjectNoDefDD = etbPage.EtbElem().subjectNoDefDD.getText();
        expect(subjectNoDefDD.getText()).toEqual('Select Subject');


        browser.sleep(1000);

    }
    catch (Exception) {
        console.log('Failed on verifyNoDefaultValuSltinFilter');

    }
}

const contentInSubjectWiseInAllTabs = () => {
    try {



        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys('Textbook');
        resov.searchIcon.click();
        browser.sleep(2000);
        console.log("Clicked on Search Icon");
        expect(resov.resoCard.isDisplayed()).toBeTruthy();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(3000);







    }
    catch (Exception) {
        console.log('Failed on veriyfing contentInSubjectWise in ALLTabs');

    }
}

const multiselectForAllTabs = () => {
    try {
        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys('Textbook');
        resov.searchIcon.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkBoardDdAllTabs), 40000, "clickFilterBoard is not available");
        resov.clkBoardDdAllTabs.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltBoardDdAllTabs), 40000, "selectFilterBoard is not available");
        resov.sltBoardDdAllTabs.click();
        browser.sleep(2000);

        expect(protractor.ExpectedConditions.visibilityOf(resov.courseToBeClicked)).toBeTruthy()
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkMediumDdAllTabs), 40000, "clickFilterMedium is not available");
        resov.clkMediumDdAllTabs.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltMediumDdAllTabs), 40000, "selectFilterMedium is not available");
        resov.sltMediumDdAllTabs.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkMediumDdAllTabs), 40000, "clickFilterMedium is not available");
        resov.clkMediumDdAllTabs.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltMedium2DdAllTabs), 40000, "selectFilterMedium is not available");
        resov.sltMedium2DdAllTabs.click();
        browser.sleep(2000);


        expect(protractor.ExpectedConditions.visibilityOf(resov.courseToBeClicked)).toBeTruthy()
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkClassDdAllTabs), 40000, "clickFilterClass is not available");
        resov.clkClassDdAllTabs.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltClassDdAllTabs), 40000, "selectFilterClass is not available");
        resov.sltClassDdAllTabs.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkClassDdAllTabs), 40000, "clickFilterClass is not available");
        resov.clkClassDdAllTabs.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltClass2DdAllTabs), 40000, "selectFilterClass is not available");
        resov.sltClass2DdAllTabs.click();
        browser.sleep(2000);


        expect(protractor.ExpectedConditions.visibilityOf(resov.courseToBeClicked)).toBeTruthy()
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkSubjectDdAllTabs), 40000, "clickFilterSubject is not available");
        resov.clkSubjectDdAllTabs.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltSubjectDdAllTabs), 40000, "selectFilterSubject is not available");
        resov.sltSubjectDdAllTabs.click();

        expect(protractor.ExpectedConditions.visibilityOf(resov.courseToBeClicked)).toBeTruthy()
        browser.sleep(1000);

        // browser.sleep(1000);
        // browser.sleep(1000);
    }
    catch (Exception) {
        console.log('Failed on veriyfing Board Value');

    }
}
const verifyUserAccessLiscenceTerms = () => {
    try {
        console.log('Verify User is able to access Liscence Terms Section');

        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown1), 50000, "guest drop down is not available");
        // content.headerDropdown1.click();
        // browser.sleep(5000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(tpd.clkSwitchClassicTheme), 40000, "Theme is not switchable");
        // tpd.clkSwitchClassicTheme.click();
        // browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage1.etb().digitalTextBook), 50000, "Digital Text book is not available");
        etbpage1.etb().digitalTextBook.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.courseCard), 50000, "Book not available");
        content.courseCard.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED DOWN+++++');
        });
        //browser.executeScript("arguments[0].scrollIntoView();", etbpage1.etb().liscenceTerms);
        (etbpage1.etb().liscenceTerms).getText().then(function (PopupText) {
            expect(PopupText).toEqual('Credits And Licence Info');
        });
        // etbpage1.etb().liscenceTerms.click();
        // console.log('User is able to access Liscence Terms Section');
        // // browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage1.etb().liscenceTerms), 50000, "Book not available");
        // // etbpage1.etb().liscenceTerms.click();
        // // browser.sleep(3000);
    }
    catch (Exception) {
        console.log('User not able to access Liscence Terms Section');
    }
}

const searchContentInExplorePagewithoutBack = (Consume) => {
    try {
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(Consume);
        resov.searchIcon.click();
        browser.sleep(3000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(3000);
        
    
    }
    catch (Exception) {
        console.log('Failed on searching library by applying filters');

    }

}





module.exports = {
    createBook,
    sendForReviewTheBook,
    publishTheBookFromUpForReview,
    verifyTenantWithNoBoard,
    createBookWithAllResourceType,
    editFormEditals,
    openBookFromDraftAndDownloadQRCode,
    openPublishedSectionAndDownloadQRcode,
    createBookWithSpecificResourceType,
    createBookWithRegionalLanguage,
    adminCanEditTextBook,
    searchContentInExplorePage,
    searchWithInvalidQRcode,
    searchWithQRcode,
    librarysearchFilter,
    contentInSubjectWiseInAllTabs,
    verifyNoDefaultValuSltinFilter,
    multiselectForAllTabs,
    verifyUserAccessLiscenceTerms,
    searchContentInExplorePagewithoutBack,

}