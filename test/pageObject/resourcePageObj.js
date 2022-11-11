//const { browser } = require("protractor");

const { browser } = require("protractor");


const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
const resourcePag = require(protractor.basePath + '/test/pages/resource/resource.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
const question = require(protractor.basePath + '/test/testdata/questionData/questions.td.json');
const tpdPage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
var sanity = sanityPage.SanityElement();
var searchObj = tpdPage.tpdPage();
var content = ccpage.contentCreation();
var etbv = etbpage.etb();
var resov = resourcePag.resource();
var driver = browser.driver;


const createResource = () => {
    var resourcename;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourcename = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourcename);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();
        browser.sleep(3000);

        resov.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        wait.waitForElementVisibility(resov.addText, 20000, "addShape is not available");
        resov.addText.click();
        wait.waitForElementVisibility(resov.addShapes, 20000, "addShape is not available");
        resov.addShapes.click();
        wait.waitForElementVisibility(resov.addTriangle, 20000, "addTriangle is not available");
        resov.addTriangle.click();

        // wait.waitForElementVisibility(resov.addImage, 20000, "Book page not loaded");
        // resov.addImage.click();
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.selectImg, 20000, "Book page not loaded");
        // resov.selectImg.click();
        // browser.sleep(500);
        // wait.waitForElementToBeClickable(resov.selectButton, 20000, "Book page not loaded");
        // resov.selectButton.click();
        browser.sleep(500);
        resov.addHotSpot.click();
        browser.sleep(200);
        resov.addscribblepad.click();
        // resov.addActivity.click();
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.searchActivity,20000, "Book page not loaded");
        // wait.waitForElementVisibility(resov.addbuttonActivity,20000, "Book page not loaded");
        // resov.addbuttonActivity.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
        resov.clicksave.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(1000);
        console.log("User successfully created resource")
        browser.sleep(4000);
        return resourcename;
    } catch (Exception) {
        console.log("User failed to create a resource");
    }
}


const sendForReviewTheResource = () => {
    browser.sleep(1000);
    wait.waitForElementToBeClickable(content.sendForReview, 20000, "send for review not available");
    content.sendForReview.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
    etbv.clickAppIcon.click();

    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
    etbv.allImage.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
    etbv.myImage.click();

    wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
    etbv.checkAppIcon.click();
    wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
    browser.sleep(500);
    wait.waitForElementVisibility(etbv.clickBoard, 30000, "board button not available");
    etbv.clickBoard.click();
    wait.waitForElementVisibility(etbv.selectBoard, 30000, "contuinew button not available");
    etbv.selectBoard.click();
    // wait.waitForElementVisibility(etbv.clickCurriculum, 30000, "clickCurriculum button not available");
    // etbv.clickCurriculum.click();
    // wait.waitForElementVisibility(etbv.selectCurriculum, 30000, "selectCurriculum button not available");
    // etbv.selectCurriculum.click();
    browser.sleep(500);
    etbv.clickMedium.click();
    wait.waitForElementVisibility(etbv.selectMedium, 30000, "contuinew button not available");
    etbv.selectMedium.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
    etbv.clickclass.click();
    wait.waitForElementVisibility(etbv.SelectClass, 30000, "contuinew button not available");
    etbv.SelectClass.click();
    browser.sleep(500);

    etbv.clicksubject.click();
    wait.waitForElementVisibility(etbv.selectSubject, 30000, "contuinew button not available");
    etbv.selectSubject.click();
    browser.sleep(500);


    browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
    wait.waitForElementVisibility(etbv.yearOfCreation, 30000, "yearOfCreation button not available");
    etbv.yearOfCreation.click();
    etbv.yearOfCreation.clear();
    etbv.yearOfCreation.sendKeys("2020");


    // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickContentType);
    // wait.waitForElementVisibility(etbv.clickContentType, 30000, "clickContentType button not available");
    // etbv.clickContentType.click();
    // browser.sleep(1000);
    // browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource2);
    // etbv.practiceResource2.click();


    browser.sleep(3000);
    wait.waitForElementVisibility(content.saveButoonReview, 20000, "submitForm not available");
    // content.saveform.click();

    content.saveButoonReview.click();

    browser.sleep(5000);
}

const sendForReviewTheResourceAfterEditing = () => {
    browser.sleep(1000);
    wait.waitForElementToBeClickable(content.sendForReview, 20000, "send for review not available");
    content.sendForReview.click();
    browser.sleep(2000);
    browser.sleep(2000);
    // wait.waitForElementVisibility(content.saveform, 20000, "submitForm not available");
    // content.saveform.click();
    wait.waitForElementVisibility(content.saveButoonReview, 20000, "submitForm not available");
    content.saveButoonReview.click();

    browser.sleep(2000);
    browser.switchTo().defaultContent();

}
const publishTheResourceFromUpForReview = (nameOfResource) => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.workSpace, 20000, "workspace page not loaded");
        content.workSpace.click();
        wait.waitForElementVisibility(content.upForReview, 20000, "Creation page not loaded");
        content.upForReview.click();
        wait.waitForElementVisibility(content.searchForReview, 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(nameOfResource);
        // content.searchIconUpForReview.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.searchedContentForPublish, 20000, "workspace page not loaded");
        content.searchedContentForPublish.click();
        browser.sleep(6000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        // browser.executeScript("arguments[0].scrollIntoView();", content.publishResource);
        // browser.sleep(4000);

        wait.waitForElementVisibility(content.publishResource, 20000, "publishResource page not loaded");
        content.publishResource.click();
        browser.sleep(1000);
        content.checkBox.each(function (input) {
            input.click()
        });
        browser.sleep(3000);
        wait.waitForElementVisibility(content.popupPublishButtons, 20000, "Creation page not loaded");
        content.popupPublishButtons.click();
        browser.sleep(4000);
        //expect(sanityPage.SanityElement().assertContentPublishedMsg).isPresent().toBe(true);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertContentPublishedMsg), 20000, "assertContentPublishedMsg not available");
        // expect(sanityPage.SanityElement().assertContentPublishedMsg.getText()).toEqual('Content published successfully...');
        // console.log('Content published successfully...');
        browser.sleep(5000);

    }

    catch (Exception) {
        console.log("Failed to Publise Resource");
    }
}

const publishTheLessonFromUpForReview = (nameOfResource) => {
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.workSpace, 20000, "workspace page not loaded");
    content.workSpace.click();
    wait.waitForElementVisibility(content.upForReview, 20000, "Creation page not loaded");
    content.upForReview.click();
    wait.waitForElementVisibility(content.searchForReview, 20000, "workspace page not loaded");
    content.searchForReview.click();
    content.searchForReview.sendKeys(nameOfResource);
    // content.searchIconUpForReview.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(content.searchedContentForPublish, 20000, "workspace page not loaded");
    content.searchedContentForPublish.click();
    browser.sleep(2000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.executeScript("arguments[0].scrollIntoView();", content.publishLesson);
    wait.waitForElementVisibility(content.publishLesson, 20000, "Creation page not loaded");
    content.publishLesson.click();
    browser.sleep(1000);

    wait.waitForElementVisibility(content.btnPublish, 20000, "Creation page not loaded");
    content.btnPublish.click();
    browser.sleep(1000);
    browser.switchTo().defaultContent();
}

const previewResource = () => {

    browser.sleep(3000);
    wait.waitForElementVisibility(resov.submittedForReview, 20000);
    resov.submittedForReview.click();
    wait.waitForElementVisibility(resov.resourceInFirstColumn, 20000);
    resov.resourceInFirstColumn.click();
    browser.sleep(4000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(3000);
    expect(resov.nextIconInPreviewBox.isDisplayed()).toBeTruthy();
    browser.switchTo().defaultContent();
    // wait.waitForElementVisibility(resov.btnCloseInPreview, 20000);
    // resov.btnCloseInPreview.click();


}

const sendForLimitedSharing = (resourcename) => {
    browser.sleep(2000);
    // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    wait.waitForElementVisibility(resov.ddSendforreview, 20000);
    resov.ddSendforreview.click();
    browser.sleep(1000);
    wait.waitForElementVisibility(resov.linkLimitedSharing, 20000);
    resov.linkLimitedSharing.click();
    // browser.switchTo().defaultContent();
    browser.sleep(2000);
    browser.navigate().refresh();
    browser.sleep(4000);
    // wait.waitForElementVisibility(resov.linkShareViaLink, 20000);
    // resov.linkShareViaLink.click();
    // browser.sleep(3000);
    //wait.waitForElementVisibility(resov.resourceInFirstColumn, 20000);
    // resov.resourceInFirstColumn.getText().then(function (resoValue) {
    //     console.log("Resource in ShareViaLink :" + resoValue);
    //     console.log("Resource Name :" + resourcename)
    //     // expect(resoValue).toBe(resourcename);
    // })
    // expect(resov.resourceInFirstColumn.isDisplayed()).toBeTruthy();

}


const VerifyDefaultLicense = () => {

    var resourceName;
    try {
        console.log("User is trying to create Resource");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 20000);
        resov.workSpace.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.clickresource, 20000);
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000);
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.btnEditDetails, 20000);
        resov.btnEditDetails.click();
        var lice = resov.labelLicense;
        browser.controlFlow().execute(function () {
            browser.executeScript('arguments[0].scrollIntoView({block:"center"})', lice.getWebElement());
        });
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.labelLicense, 20000);
        resov.labelLicense.getText().then(function (licence) {
            console.log("Default Licence value :" + licence);
            expect(licence).toBe('CC BY 4.0');
        })

    }

    catch (Exception) {

        console.log("Unable to verify Default License");

    }


}


const copyrightAndAttributes = () => {

    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', resov.linkCredit.getWebElement());
    });
    wait.waitForElementVisibility(resov.linkCredit, 20000);
    resov.linkCredit.click();
    wait.waitForElementVisibility(resov.labelLicenceTerms, 20000);
    resov.labelLicenceTerms.getText().then(function (licence) {
        console.log("Licence : " + licence);

        wait.waitForElementVisibility(resov.labelMoreDetails, 20000);
        resov.labelMoreDetails.getText().then(function (moreDetails) {
            console.log("More Details :" + moreDetails)
            expect((moreDetails).includes(licence + "CC BY 4.0https://creativecommons.org/licenses/by/4.0/legalcode"));
        })
    })
    wait.waitForElementVisibility(resov.labelCopyRight, 20000);
    resov.labelCopyRight.getText().then(function (copyright) {
        console.log("Copyright :" + copyright)
        expect((copyright).includes("Ekstep, 2019"));
    })
}

const clickingTheResourceFromShareViaLinkBucket = () => {

    wait.waitForElementVisibility(resov.resourceInFirstColumn, 20000);
    resov.resourceInFirstColumn.click();
    browser.sleep(3000);

}

const clickingTheResourceFromPublishedBucket = () => {
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.workSpace, 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(resov.Published, 20000);
    resov.Published.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(resov.resourceInFirstColumn, 20000);
    resov.resourceInFirstColumn.click();
    browser.sleep(3000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(2000);
    resov.addscribblepad.click();
    browser.sleep(1000);
    wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
    resov.clicksave.click();
    browser.sleep(2000);
    wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
    resov.closebutton.click();
    browser.sleep(1000);


}

const deleteButton = () => {

    wait.waitForElementVisibility(resov.deleteButton, 20000);
    resov.deleteButton.click();
    wait.waitForElementVisibility(resov.yesButtonPopup, 20000);
    resov.yesButtonPopup.click();
    console.log("Resource Deleted Successfully")

}

const linkShareViaLink = () => {

    wait.waitForElementVisibility(resov.linkShareViaLink, 20000);
    resov.linkShareViaLink.click();
    browser.sleep(3000);
}

const createQuestion = () => {
    var resourcename;
    try {

        console.log("User is trying to create the question")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourcename = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourcename);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();

        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(content.addQuestionSet, 20000, "addQuestionSet is not available");
        content.addQuestionSet.click();
        browser.sleep(4000);
        //wait.waitForElementVisibility(content.questionCheckbox,20000,"questionCheckbox is not available");
        content.questionCheckbox.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.nextButton, 20000, "nextButton is not available");
        content.nextButton.click();
        wait.waitForElementVisibility(content.questionSetTitle, 20000, "questionSetTitle is not available");
        content.questionSetTitle.sendKeys("Question-1");
        wait.waitForElementVisibility(content.addbutton, 20000, "addbutton is not available");
        content.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
        resov.clicksave.click();
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(1000);
        console.log("User successfully created the question")
        return resourcename;

    } catch (Exception) {
        console.log("User is failed to create the question")
    }
}

const addQuestionsAfterSearching = () => {
    var resourcename;
    try {

        console.log("User is trying to add question after searching");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourcename = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourcename);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(content.addQuestionSet, 20000, "addQuestionSet is not available");
        content.addQuestionSet.click();
        browser.sleep(4000);
        content.searchTextInQuestion.click();
        content.searchTextInQuestion.sendKeys("FTB");
        content.searchTextInQuestion.click();
        browser.sleep(2000);
        //wait.waitForElementVisibility(content.questionCheckbox,20000,"questionCheckbox is not available");
        content.questionCheckbox.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.nextButton, 20000, "nextButton is not available");
        content.nextButton.click();
        wait.waitForElementVisibility(content.questionSetTitle, 20000, "questionSetTitle is not available");
        content.questionSetTitle.sendKeys("Question-1");
        wait.waitForElementVisibility(content.addbutton, 20000, "addbutton is not available");
        content.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
        resov.clicksave.click();
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(1000);
        console.log("User successfully added question");
        return resourcename;
    } catch (Exception) {
        console.log("User failed to add question")
    }

}
const copyQuestion = () => {
    var resourcename;
    try {
        console.log("user is trying to copy question")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourcename = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourcename);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(content.addQuestionSet, 20000, "addQuestionSet is not available");
        content.addQuestionSet.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.advancedFilter, 40000, "advancedFilter is not available");
        content.advancedFilter.click();
        content.myQuestionToggle.click();
        console.log('Toggle is selected')
        browser.sleep(3000);

        wait.waitForElementVisibility(content.copyQuestion, 20000, "copyQuestion is not available");
        content.copyQuestion.click();

        wait.waitForElementVisibility(content.previewRefreshIcon, 20000, "previewRefreshIcon is not available");
        content.previewRefreshIcon.click();
        browser.sleep(10000);
        wait.waitForElementVisibility(content.nextButtonInQuestion, 20000, "nextButtonInQuestion is not available");
        content.nextButtonInQuestion.click();
        wait.waitForElementVisibility(content.enterTheTitleQues, 20000, "enterTheTitleQues is not available");
        content.enterTheTitleQues.click();
        content.enterTheTitleQues.clear();
        content.enterTheTitleQues.sendKeys('copy question');

        // wait.waitForElementVisibility(resov.boardInQuestion,20000, "   boardInQuestion is not available");
        // resov.boardInQuestion.click();
        // wait.waitForElementVisibility(resov.selectCBSEQue,20000, "  selectCBSEQue is not available");
        // resov.selectCBSEQue.click();
        // wait.waitForElementVisibility(resov.mediumInQuestion ,20000, "   mediumInQuestion  is not available");
        // resov.mediumInQuestion .click();
        // wait.waitForElementVisibility(resov.selectEnglishFITB,20000, " selectEnglishFITB is not available");
        // resov.selectEnglishFITB.click();
        // wait.waitForElementVisibility(resov.gradeLevelInQuestion,20000, "   gradeLevelInQuestionis not available");
        // resov. gradeLevelInQuestion.click();
        // wait.waitForElementVisibility(resov.selectClass4,20000, "  selectClass4 is not available");
        // resov.selectClass4.click();
        // wait.waitForElementVisibility(resov.subjectInQuestion,20000, "  subjectInQuestion is not available");
        // resov.subjectInQuestion.click();
        // wait.waitForElementVisibility(resov.selectMathematics,20000, "  selectMathematics is not available");
        // resov.selectMathematics.click();
        // wait.waitForElementVisibility(resov.maxScore,20000, "   maxScore is not available");
        // resov.maxScore.click();
        //  wait.waitForElementVisibility(resov.levelInQuestion ,20000, "  levelInQuestion  is not available");
        //  resov.levelInQuestion .click();
        //  wait.waitForElementVisibility(resov.selectEasy ,20000, "  selectEasy  is not available");
        //  resov.selectEasy .click();



        //  wait.waitForElementVisibility(resov.learningOutcome ,20000, " learningOutcome is not available");
        //  resov.learningOutcome .click();
        //  wait.waitForElementVisibility(resov.selectLearningOutcome  ,20000, " selectLearningOutcome  is not available");
        //  resov.selectLearningOutcome  .click();

        wait.waitForElementVisibility(content.submitButtonInQuestion, 20000, "nextButton is not available");
        content.submitButtonInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.nextButton, 20000, "nextButton is not available");
        content.nextButton.click();
        wait.waitForElementVisibility(content.questionSetTitle, 20000, "questionSetTitle is not available");
        content.questionSetTitle.sendKeys("Question-1");
        wait.waitForElementVisibility(content.addbutton, 20000, "addbutton is not available");
        content.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
        resov.clicksave.click();
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(1000);
        console.log("user successfully copied question")
        return resourcename
    } catch (Exception) {
        console.log("Failed to copy question")
    }

}

const CreateQuestionAndSubmit = () => {
    var resourceName;
    try {
        console.log("User is trying to create Resource");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 20000);
        resov.workSpace.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.clickresource, 20000);
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000);
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.addQuestionSet, 20000);
        browser.sleep(1000);
        resov.addQuestionSet.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.createQuestion, 20000);
        resov.createQuestion.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectFITBTemplate, 20000);
        resov.selectFITBTemplate.click();
        browser.sleep(4000);

        browser.switchTo().defaultContent();
        browser.sleep(1000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1500);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(1500);


        wait.waitForElementVisibility(resov.enterTheQuestion, 20000);
        browser.sleep(1000);
        resov.enterTheQuestion.click();
        browser.sleep(1000);
        resov.enterTheQuestion.sendKeys('2+7=[[9]]');
        // resov.enterTheQuestion.sendKeys("text was",
        // protractor.Key.CONTROL, "a", protractor.Key.NULL,
        // "2+7=[[9]]");


        browser.sleep(500);
        browser.switchTo().defaultContent();
        browser.sleep(1000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        console.log("User is Trying to Add Image in Question Set");
        wait.waitForElementVisibility(resov.clickLargeImageIcon, 20000, "clickLargeImageIcon is not available");
        resov.clickLargeImageIcon.click();
        console.log("Click on Large Image Icon");
        wait.waitForElementVisibility(resov.checkAppIcon, 20000, "checkAppIcon is not available");
        resov.checkAppIcon.click();
        console.log("Check First Image");
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectAppIcon, 20000, "selectAppIcon is not available");
        resov.selectAppIcon.click();
        console.log("Clicked on Select button");
        browser.sleep(1000);
        expect(resov.verifyLargeImageAdded.isPresent()).toBe(true);
        if (resov.verifyLargeImageAdded.isDisplayed()) {
            console.log("Images Added Succesfully In Question Set")
        }


        // await browser.switchTo().defaultContent();
        // addLargeAudioInQuestionSet
        // console.log("User is Trying to Add Audio in Question Set");
        // wait.waitForElementVisibility(resov.clickAudioIcon,20000, "clickAudioIcon is not available");
        // resov.clickAudioIcon.click();
        // console.log("Click Add Audio Icon");
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.clickAllAudioTab,20000, "clickAllAudioTab is not available");
        // resov.clickAllAudioTab.click();
        // console.log("Click on AllAudioTab");
        // wait.waitForElementVisibility(resov.selectAudio,20000, "selectAudio is not available");
        // resov.selectAudio.click();
        // console.log("Select Audio");
        // resov.select.click();
        // browser.sleep(1000);
        // expect(resov.verifyAudioAdded.isPresent()).toBe(true);
        // if (resov.verifyAudioAdded.isDisplayed()) {
        //     console.log("Audio Added Succesfully In Question Set")
        // }

        // // addFormulaInQuestionSet
        // console.log("User is Trying to Add Formual in Question Set");
        // wait.waitForElementVisibility(resov.clickMathTextIcon,20000, "clickMathTextIcon is not available");
        // resov.clickMathTextIcon.click();
        // console.log("click on Add Formual Icon");
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.selectMathText,20000, "selectMathText is not available");
        // resov.selectMathText.click();
        // browser.sleep(1000);
        // console.log("Select Formula");
        // wait.waitForElementVisibility(resov.selectedMathTextAdd,20000, "selectedMathTextAdd is not available");
        // resov.selectedMathTextAdd.click();
        // console.log("Click on Add");
        // browser.sleep(1000);
        // expect(resov.verifyFormualaAdded.isPresent()).toBe(true);
        // if (resov.verifyFormualaAdded.isDisplayed()) {
        //     console.log("Formula Succesfully added in Question Set")
        // }

        // browser.switchTo().frame(browser.driver.findElement(by.xpath(" //iframe[@class='iziModal-iframe']")));
        //    browser.switchToParentFrame();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.previewRefreshIcon, 20000, "previewRefreshIcon  is not available");
        resov.previewRefreshIcon.click();
        console.log("Preview refresh icon MTF is passed");
        browser.sleep(5000);
        wait.waitForElementVisibility(resov.createQueNext, 20000, " createQueNext  is not available");
        resov.createQueNext.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.enterTheTitleQues, 20000, "  enterTheTitleQues is not available");
        resov.enterTheTitleQues.click();
        resov.enterTheTitleQues.clear();
        resov.enterTheTitleQues.sendKeys('Question');
        wait.waitForElementVisibility(resov.boardInQuestion, 20000, "   boardInQuestion is not available");
        resov.boardInQuestion.click();
        wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        resov.selectCBSEQue.click();
        wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        resov.mediumInQuestion.click();
        wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        resov.selectEnglishFITB.click();
        wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        resov.gradeLevelInQuestion.click();
        wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        resov.selectClass4.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "  subjectInQuestion is not available");
        resov.subjectInQuestion.click();
        wait.waitForElementVisibility(resov.selectMathematics, 20000, "  selectMathematics is not available");
        resov.selectMathematics.click();
        wait.waitForElementVisibility(resov.maxScore, 20000, "   maxScore is not available");
        resov.maxScore.click();
        resov.maxScore.clear();
        resov.maxScore.sendKeys('1');
        wait.waitForElementVisibility(resov.levelInQuestion, 20000, "  levelInQuestion  is not available");
        resov.levelInQuestion.click();
        wait.waitForElementVisibility(resov.selectEasy, 20000, "  selectEasy  is not available");
        resov.selectEasy.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
        resov.learningOutcome.click();
        wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
        resov.selectLearningOutcome.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.btnSaveAndCreate, 20000);
        resov.btnSaveAndCreate.click();
        browser.sleep(1500);
        wait.waitForElementVisibility(content.btnCancelInquestion, 20000);
        content.btnCancelInquestion.click();
        browser.switchTo().defaultContent();

        return resourcename;
    } catch (Exception) {

        console.log("Failed to copy question")
    }
}

const copyQuestioninQnSet = () => {

    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')))
    browser.sleep(2000);
    // wait.waitForElementVisibility(content.checkbxQn, 20000);
    // wait.waitForElementToBeClickable(content.checkbxQn, 20000);
    // content.checkbxQn.click();
    wait.waitForElementVisibility(content.copyQuestion, 20000);
    wait.waitForElementToBeClickable(content.copyQuestion, 20000);
    content.copyQuestion.click();
    browser.sleep(5000);
    wait.waitForElementVisibility(content.previewRefreshIcon, 20000, "previewRefreshIcon is not available");
    content.previewRefreshIcon.click();
    browser.sleep(5000);
    wait.waitForElementVisibility(content.nextButtonInQuestion, 20000, "nextButtonInQuestion is not available");
    content.nextButtonInQuestion.click();
    wait.waitForElementVisibility(content.enterTheTitleQues, 20000, "enterTheTitleQues is not available");
    content.enterTheTitleQues.click();
    content.enterTheTitleQues.clear();
    content.enterTheTitleQues.sendKeys('copied old question');
    var descrip = "நான் பழைய கேள்வியை நகலெடுத்துள்ளேன்";
    content.descriptionN.sendKeys(descrip);
    content.descriptionN.getText().then(function (descValue) {
        console.log(descValue);
        wait.waitForElementVisibility(content.btnBack, 20000);
        content.btnBack.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.nextButtonInQuestion, 20000, "nextButtonInQuestion is not available");
        content.nextButtonInQuestion.click();
        content.descriptionN.getText().then(function (descValue1) {
            expect(descValue).toEqual(descValue1);
        });
    });
    content.boardPostSelect.getAttribute('value').then(function (board) {
        console.log("Selected board :" + board);
    });

    content.subjectPostSelect.getText().then(function (subject) {
        console.log("Selected subject :" + subject)
    });
    content.gradePostSelect.getText().then(function (grade) {
        console.log("Selected grade :" + grade)
    });
    content.levelPostSelect.getText().then(function (level) {
        console.log("Selected level :" + level)
    });
    content.mediumPostSelect.getText().then(function (medium) {
        console.log("Selected medium :" + medium)
    });

    wait.waitForElementVisibility(content.submitButtonInQuestion, 20000, "nextButton is not available");
    content.submitButtonInQuestion.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(content.nextButton, 20000, "nextButton is not available");
    content.nextButton.click();
    wait.waitForElementVisibility(content.questionSetTitle, 20000, "questionSetTitle is not available");
    content.questionSetTitle.sendKeys(descrip);
    wait.waitForElementVisibility(content.addbutton, 20000, "addbutton is not available");
    content.addbutton.click();
    browser.sleep(1000);
    wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
    resov.clicksave.click();
    wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
    resov.closebutton.click();
    browser.sleep(1000);
    console.log("user successfully copied question")


}
const createQuestionMTF = async () => {
    var resourceName;
    try {
        console.log("User is trying to create QuestionMTF type");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 20000, "workspace page not loaded");
        resov.workSpace.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.addQuestionSet, 20000, "addQuestionSet is not available");
        resov.addQuestionSet.click();
        wait.waitForElementVisibility(resov.createQuestion, 20000, "createQuestion is not available");
        resov.createQuestion.click();
        wait.waitForElementVisibility(resov.selectMTFTemplate, 20000, "addQuestionSet is not available");
        resov.selectMTFTemplate.click();
        await browser.sleep(1000);
        await browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        await browser.sleep(1000);
        await resov.enterTheQuestion.click();
        await console.log("Before====== Clicked");
        await browser.sleep(1000);
        await resov.enterTheQuestion.sendKeys("Question");
        await console.log("Before====== default content");
        await browser.switchTo().defaultContent();
        await console.log("switched========= to default content");
        await browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        await browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        await browser.sleep(2000);
        await console.log("switched to parent frame");

        //    await  browser.switchTo().parentframe();
        //    await  browser.sleep(2000);
        //  await   browser.executeScript("arguments[0].scrollIntoView();", resov.enterAnswer1);
        //     wait.waitForElementVisibility(resov.enterAnswer1,20000,"enterAnswer1 is not available");
        await resov.enterAnswer1.sendKeys("animal");
        await resov.enterAnswer2.sendKeys("dog");
        await resov.enterAnswer3.sendKeys("bird");
        await resov.enterAnswer4.sendKeys("peacock");
        await resov.enterAnswer5.sendKeys("mammal");
        await resov.enterAnswer6.sendKeys("human");
        await browser.sleep(1000);
        await console.log("Before====== default content");
        await browser.switchTo().defaultContent();
        await console.log("switched========= to default content");
        await browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        await browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        await browser.sleep(2000);
        await console.log("switched to parent frame");
        //await console.log(await browser.driver.getPageSource());
        await resov.previewRefreshIcon.click();
        await console.log("Clicked on Refresh");
        await browser.sleep(5000);
        await resov.createQueNext.click();
        await browser.sleep(2000);
        //  wait.waitForElementVisibility(resov.previewRefreshIcon,20000, "previewRefreshIcon  is not available");
        //  resov.previewRefreshIcon .click();
        //  console.log("Preview refresh icon MTF is passed");
        //  wait.waitForElementVisibility(resov.createQueNext,20000, " createQueNext  is not available");
        //  resov.createQueNext.click();
        wait.waitForElementVisibility(resov.enterTheTitleQues, 20000, "  enterTheTitleQues is not available");
        resov.enterTheTitleQues.click();
        resov.enterTheTitleQues.clear();
        resov.enterTheTitleQues.sendKeys('Question');
        wait.waitForElementVisibility(resov.boardInQuestion, 20000, "   boardInQuestion is not available");
        resov.boardInQuestion.click();
        wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        resov.selectCBSEQue.click();
        wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        resov.mediumInQuestion.click();
        wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        resov.selectEnglishFITB.click();
        wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        resov.gradeLevelInQuestion.click();
        wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        resov.selectClass4.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "  subjectInQuestion is not available");
        resov.subjectInQuestion.click();
        wait.waitForElementVisibility(resov.selectMathematics, 20000, "  selectMathematics is not available");
        resov.selectMathematics.click();
        wait.waitForElementVisibility(resov.maxScore, 20000, "   maxScore is not available");
        resov.maxScore.click();
        resov.maxScore.clear();
        resov.maxScore.sendKeys('1');
        wait.waitForElementVisibility(resov.levelInQuestion, 20000, "  levelInQuestion  is not available");
        resov.levelInQuestion.click();
        wait.waitForElementVisibility(resov.selectEasy, 20000, "  selectEasy  is not available");
        resov.selectEasy.click();
        browser.sleep(1000);

        console.log("Search for Learning outcome is present or not ");
        // wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
        // resov.learningOutcome.click();
        // wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
        // resov.selectLearningOutcome.click();
        // browser.sleep(1000);
        wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000, "nextButton is not available");
        resov.submitButtonInQuestion.click();
        wait.waitForElementToBeClickable(resov.nextButton, 20000, "nextButton is not available");
        resov.nextButton.click();
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("Quantitative aptitude");
        wait.waitForElementVisibility(resov.addbutton, 20000, "addbutton is not available");
        resov.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.saveIcon, 20000, "saveIcon never loaded");
        resov.saveIcon.click();
        wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, "Dashboard never loaded");
        resov.closeButtonMsg.click();
        browser.sleep(2000);
        return {
            resourceName,
        }
    }
    catch (Exception) {
        console.log("Failed to create QuestionMTF ");
    }
}
const bundleQuestion = () => {
    var resourcename;
    try {

        console.log("User is trying to bundle the question")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourcename = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourcename);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(content.addQuestionSet, 20000, "addQuestionSet is not available");
        content.addQuestionSet.click();
        browser.sleep(4000);
        //wait.waitForElementVisibility(content.questionCheckbox,20000,"questionCheckbox is not available");

        content.questionCheckbox0.click();
        browser.sleep(2000);
        content.questionCheckbox1.click();
        browser.sleep(2000);
        content.questionCheckbox2.click();
        browser.sleep(3000);
        // var questCount = content.selectedQuestionName.getText().then(function(){});
        // console.log(questCount)
        wait.waitForElementVisibility(content.nextButton, 20000, "nextButton is not available");
        content.nextButton.click();
        wait.waitForElementVisibility(content.questionSetTitle, 20000, "questionSetTitle is not available");
        content.questionSetTitle.sendKeys("Question-1" + faker.randomData().firstname);
        wait.waitForElementVisibility(content.addbutton, 20000, "addbutton is not available");
        content.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
        resov.clicksave.click();
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(1000);
        console.log("User successfully bundled the question");
        return resourcename;
    } catch (Exception) {
        console.log("User is failed to bundle the question")
    }

}
const createResourceWithHideAction = () => {

    try {
        console.log("User is trying to create Resource with hide action");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresoruce is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");

        var resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();

        resov.startCreating.click();
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        wait.waitForElementVisibility(resov.addText, 20000, "addText is not available");
        resov.addText.click();
        wait.waitForElementVisibility(resov.addTextTextArea, 20000, "addTextTextArea is not available");
        resov.addTextTextArea.click();
        resov.addTextTextArea.sendKeys('Testing');
        wait.waitForElementVisibility(resov.addTextDoneButton, 20000, " addTextDoneButton is not available");
        resov.addTextDoneButton.click();
        // wait.waitForElementVisibility(resov.addImage,20000, "addImage is not available");
        // resov.addImage.click();
        // wait.waitForElementVisibility(resov.imageCard,20000, " imageCard is not available");
        // resov.imageCard.click();
        // wait.waitForElementToBeClickable(resov.selectImage ,20000, "selectImage is not available");
        // resov.selectImage.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.addHotspot, 20000, " addHotspot is not available");
        resov.addHotspot.click();
        wait.waitForElementToBeClickable(resov.saveIcon, 20000, " saveIcon is not available");
        resov.saveIcon.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, " closeButtonMsg is not available");
        resov.closeButtonMsg.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.clickActionTabInResourceCreation, 20000, "  clickActionTabInResourceCreation is not available");
        resov.clickActionTabInResourceCreation.click();
        browser.sleep(500);
        wait.waitForElementVisibility(resov.clickPlusIconInActionTab, 20000, " clickPlusIconInActionTab is not available");
        resov.clickPlusIconInActionTab.click();
        wait.waitForElementVisibility(resov.clickActionType, 20000, " clickActionType is not available");
        resov.clickActionType.click();
        wait.waitForElementVisibility(resov.selectActionTypeHide, 20000, "selectActionTypeHide is not available");
        resov.selectActionTypeHide.click();
        browser.sleep(1000);
        // wait.waitForElementVisibility(verifyHAOEObj.clickActionTarget,20000, "clickActionTarget is not available");
        resov.clickActionTarget.click();
        browser.sleep(1000);
        // wait.waitForElementVisibility(verifyHAOEObj.selectActionTypeHide,20000, "selectActionTypeHide is not available");
        resov.selectActionTarget.click();
        browser.sleep(2000);
        // wait.waitForElementVisibility(verifyHAOEObj.selectActionAddButton,20000, "selectActionAddButton is not available");
        resov.selectActionAddButton.click();
        wait.waitForElementVisibility(resov.preview, 20000, "preview is not available");
        resov.preview.click();
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        wait.waitForElementVisibility(resov.nextIcon, 20000, "nextIcon is not available");
        console.log("User successfully created Resource with hide action");

    }
    catch (Exception) {
        console.log("Failed to create Resource with hide action");
    }

}
const resourceName = () => {
    try {
        console.log("User is trying create new resource by giving an Unique Resource name ");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresoruce is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resov.resourceName.sendKeys("resourceName" + faker.randomData().firstname);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();

        resov.startCreating.click();

        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
    }
    catch (exception) {
        console.log("Failed on entering unique resource name");
    }
}


const addSlidesImageText = () => {
    try {
        console.log("User is trying to add slides to the Resource");
        wait.waitForElementVisibility(resov.addSlide, 20000, "addSlide is not available");
        for (var i = 1; i <= 2; i++) {
            resov.addSlide.click();
            if (i <= 1) {
                wait.waitForElementVisibility(resov.addText, 20000, "addText is not available");
                resov.addText.click();
                wait.waitForElementVisibility(resov.addTextTextArea, 20000, "addTextTextArea is not available");
                resov.addTextTextArea.sendKeys('coursename');
                browser.sleep(2000);
                wait.waitForElementVisibility(resov.addTextDoneButton, 20000, "addTextDoneButton is not available");
                resov.addTextDoneButton.click();
                browser.sleep(2000);
                console.log("Added text successfully");

            }
            else if (i == 2) {
                console.log("Adding Image ");
                wait.waitForElementVisibility(resov.addImage, 20000, "addImage is not available");
                resov.addImage.click();
                wait.waitForElementVisibility(resov.searchUploadImage, 20000, " searchUploadImage is not available");
                resov.clickImageSearch.click();
                wait.waitForElementToBeClickable(resov.checkContentIcon, 20000, "  checkContentIcon is not available");
                resov.checkContentIcon.click();
                browser.sleep(1000);
                resov.selectAppIcon.click();
                browser.sleep(1000);
                console.log("Added Image successfully");

                console.log("Adding shapes ");
                wait.waitForElementVisibility(resov.addShapes, 20000, " addShapes is not available");
                resov.addShapes.click();
                browser.sleep(1000);
                resov.addTriangleShape.click();
                browser.sleep(3000);
                console.log("Added shapes successsfully ");

                try {
                    console.log("User has tried to  showHide Action Feature ");
                    resov.actionsOptionSideBar.click();
                    browser.sleep(1000);
                    resov.showActionFormBtn.click();
                    browser.sleep(1000);
                    resov.actionTypeDropdown.click();
                    browser.sleep(1000);
                    resov.showHide.click();
                    browser.sleep(1000);
                    resov.actionTargetDropdown.click();
                    browser.sleep(1000);
                    resov.actionTargetDropdownFirstItem.click();
                    browser.sleep(1000);
                    resov.addActionbtn.click();
                    browser.sleep(1000);
                    console.log("User has successfully showHide Action Feature");

                }
                catch (Exception) {
                    console.log("Failed to showHide Action Feature");
                }

            }

        }
        browser.sleep(1000);
        resov.propertiesSection.click();
        console.log("User is able to view property section-completed Test case ");
        browser.sleep(1000);
        resov.clickNextSlide.click();

    }
    catch (Exception) {
        console.log("Failed to add slides to resource");
    }

}
const previewSlidesOfQuestionFromBegining = () => {
    try {
        console.log("User is trying to preview the slides added to the content");
        try {
            console.log("User is trying to add " + "5" + "slides to the Resource");
            wait.waitForElementVisibility(resov.addSlide, 20000, " addSlide is not available");
            for (var j = 1; j <= 5; j++) {
                resov.addSlide.click();
                if (j <= 1) {
                    wait.waitForElementVisibility(resov.addText, 20000, "  addText is not available");
                    resov.addText.click();
                    resov.addTextTextArea.sendKeys('coursename');
                    browser.sleep(1000);
                    resov.addTextDoneButton.click();
                    browser.sleep(1000);
                    console.log("Added text successfully");

                }
                else if (j == 2 && j <= 5) {
                    console.log("Adding Image ");
                    wait.waitForElementVisibility(resov.addImage, 20000, "addImage is not available");
                    resov.addImage.click();
                    wait.waitForElementVisibility(resov.searchUploadImage, 20000, " searchUploadImage is not available");
                    resov.clickImageSearch.click();
                    wait.waitForElementToBeClickable(resov.checkContentIcon, 20000, "  checkContentIcon is not available");
                    resov.checkContentIcon.click();
                    browser.sleep(2000);
                    resov.selectAppIcon.click();
                    browser.sleep(1000);
                    console.log("Added Image successfully");

                    console.log("Adding shapes ");
                    wait.waitForElementVisibility(resov.addShapes, 20000, " addShapes is not available");
                    resov.addShapes.click();
                    browser.sleep(1000);
                    resov.addTriangleShape.click();
                    browser.sleep(3000);
                    console.log("Added shapes successsfully ");

                    try {
                        console.log("User has tried to  link Action Feature");
                        resov.actionsOptionSideBar.click();
                        browser.sleep(1000);
                        resov.showActionFormBtn.click();
                        browser.sleep(1000);
                        resov.actionTypeDropdown.click();
                        browser.sleep(1000);
                        resov.linkTo.click();
                        browser.sleep(1000);
                        resov.actionTargetDropdown.click();
                        browser.sleep(1000);
                        resov.actionTargetDropdownFirstItem.click();
                        browser.sleep(1000);
                        resov.addActionbtn.click();
                        browser.sleep(1000);
                        console.log("User has successfully link Action Feature ");
                    }
                    catch (Exception) {
                        console.log("Failed to link Action Feature");
                    }

                }
                else if (j == 3 && j <= 5) {
                    // try
                    // {  
                    //     console.log("Adding Audio");
                    //     wait.waitForElementVisibility(resov.addAudio,20000, " addAudio is not available");
                    //     resov.addAudio.click();
                    //     browser.sleep(3000);
                    //     wait.waitForElementVisibility(resov.clickAllAudio,20000, "  clickAllAudio is not available");
                    //     browser.sleep(3000);
                    //     browser.sleep(1000);
                    //     resov.clickAllAudio.click();
                    //     wait.waitForElementToBeClickable(resov.selectAudio_AllAudio,20000, "  selectAudio_AllAudio is not available");
                    //     browser.sleep(1000);
                    //     browser.sleep(3000);
                    //     resov.audio.get(1).click();
                    //     browser.sleep(3000);
                    //     resov. selectAppIcon.click();
                    //     browser.sleep(1000);

                    // }
                    // catch(Exception)
                    // {
                    //     console.log("Failed to adding Audio");
                    // }

                    console.log("Adding shapes ");
                    wait.waitForElementVisibility(resov.addShapes, 20000, " addShapes is not available");
                    resov.addShapes.click();
                    browser.sleep(1000);
                    resov.addTriangleShape.click();
                    browser.sleep(3000);
                    console.log("Added shapes successsfully ");

                    // try
                    // {
                    //     console.log("User has tried to playpause Action Feature");
                    //     resov.actionsOptionSideBar.click();
                    //     browser.sleep(1000);
                    //     resov.showActionFormBtn.click();
                    //     browser.sleep(1000);
                    //     resov.actionTypeDropdown.click();
                    //     browser.sleep(1000);
                    //     resov.playPause.click();
                    //     browser.sleep(2000);
                    //     resov.actionTargetDropdown.click();
                    //     browser.sleep(2000);
                    //     resov.actionTargetDropdownFirstItem.click();
                    //     browser.sleep(2000);
                    //     resov.addActionbtn.click();
                    //     browser.sleep(1000);
                    //     console.log("User has successfully playpause Action Feature ");
                    // }
                    // catch(Exception)
                    // {
                    //     console.log("Failed to playpause Action Feature ");
                    // }

                }
                else if (j == 4 && j <= 5) {
                    // addVideo();
                }
                else if (j > 4) {
                    console.log("Adding shapes ");
                    wait.waitForElementVisibility(resov.addShapes, 20000, " addShapes is not available");
                    resov.addShapes.click();
                    browser.sleep(1000);
                    resov.addTriangleShape.click();
                    browser.sleep(3000);
                    console.log("Added shapes successsfully ");

                    console.log("Adding Image ");
                    wait.waitForElementVisibility(resov.addImage, 20000, "addImage is not available");
                    resov.addImage.click();
                    wait.waitForElementVisibility(resov.searchUploadImage, 20000, " searchUploadImage is not available");
                    resov.clickImageSearch.click();
                    wait.waitForElementToBeClickable(resov.checkContentIcon, 20000, "  checkContentIcon is not available");
                    resov.checkContentIcon.click();
                    browser.sleep(2000);
                    resov.selectAppIcon.click();
                    browser.sleep(1000);
                    console.log("Added Image successfully");


                    try {
                        console.log("User has tried to  hide Action Feature");
                        resov.actionsOptionSideBar.click();
                        browser.sleep(1000);
                        resov.showActionFormBtn.click();
                        browser.sleep(1000);
                        resov.actionTypeDropdown.click();
                        browser.sleep(1000);
                        resov.hide.click();
                        browser.sleep(1000);
                        resov.actionTargetDropdown.click();
                        browser.sleep(1000);
                        resov.actionTargetDropdownFirstItem.click();
                        browser.sleep(1000);
                        resov.addActionbtn.click();
                        browser.sleep(1000);
                        console.log("User has successfully hide Action Feature ");

                    }
                    catch (Exception) {
                        console.log("Failed to hide Action Feature");
                    }
                }
                browser.sleep(1000);
            }
            wait.waitForElementVisibility(resov.clickNextSlide, 20000, " clickNextSlide is not available");
            resov.clickNextSlide.click();
            console.log("Added slide successfully");

        }
        catch (Exception) {
            console.log("Failed to add slides to resource");
        }

        wait.waitForElementVisibility(resov.previewIcon, 20000, "previewIcon is not available");
        resov.previewIcon.click();

        wait.waitForElementVisibility(resov.previewPopup, 20000, "previewPopup is not available");

        if (resov.previewPopup.isDisplayed()) {

            browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
            // browser.sleep(5000);
            // wait.waitForElementVisibility(resov.previewPopupFrame,20000, "previewPopupFrame is not available");
            browser.sleep(2000);
            wait.waitForElementVisibility(resov.previewNextBtn, 20000, "previewNextBtn is not available");
            for (var k = 1; k <= 8; k++) {
                resov.previewNextBtn.click();
                browser.sleep(1000);
            }
            browser.sleep(5000);
        }
        browser.sleep(3000);
        if (resov.contentPreiviewCompleteScreen.isDisplayed() && resov.previewPopupReplayBtn.isDisplayed()) {
            // Assert.assertTrue(true);
            console.log("User completed previewing of all the slides(8) from Beginning");
        }
        browser.sleep(3000);
        console.log("User Previewed all slides successfully and captures a screenshot on validation")
    }
    catch (exception) {
        console.log("Failed to preview the slides of the content");
    }
}
const verifySettingFeatures = () => {
    try {
        console.log("User is trying to preview the slides added to the content");
        wait.waitForElementVisibility(resov.addSlide, 20000, " startCreating is not available");

        try {
            console.log("User is trying to validate show player control");
            browser.sleep(2000);
            resov.showPlayerControl.click();
            wait.waitForElementVisibility(resov.teacherInstruction, 20000, " teacherInstruction is not available");
            resov.teacherInstruction.click();
            resov.teacherInstruction.sendKeys("Read the question carefully");
            resov.backgroundColor.click();
            browser.sleep(1000);
            resov.redColor.click();
            console.log("User successsfully validated show player control");
        }
        catch (Exception) {
            console.log("Failed to  validate show Player Control");
        }



        try {
            console.log("User is trying to add question");
            wait.waitForElementVisibility(resov.addQuestionSet, 20000, " addQuestionSet is not available");
            resov.addQuestionSet.click();
            browser.sleep(2000);
            wait.waitForElementVisibility(resov.pickQuestion, 20000, " pickQuestion is not available");
            browser.sleep(2000);
            resov.pickQuestionCheckBox.click();
            browser.sleep(2000);
            wait.waitForElementToBeClickable(resov.pickQueNextButton, 20000, " pickQueNextButton is not available");
            resov.pickQueNextButton.click();
            browser.sleep(2500);
            wait.waitForElementToBeClickable(resov.questionSetTitle, 20000, " questionSetTitle is not available");
            resov.questionSetTitle.click();
            resov.questionSetTitle.sendKeys('courseDescription');
            browser.sleep(2000);
            resov.questionSetAddButton.click();
            browser.sleep(1500);
            console.log("User successfully added question set");
        }
        catch (Exception) {
            console.log("Failed to  add question set");
        }


        resov.addSlide.click();
        wait.waitForElementVisibility(resov.clickNextSlide, 20000, " clickNextSlide is not available");
        resov.clickNextSlide.click();

        wait.waitForElementVisibility(resov.previewIcon, 20000, "previewIcon is not available");
        resov.previewIcon.click();
        wait.waitForElementVisibility(resov.previewPopup, 20000, "previewPopup is not available");

        if (resov.previewPopup.isDisplayed()) {

            browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
            // browser.sleep(2000);
            // wait.waitForElementVisibility(resov.previewPopupFrame,20000, "previewPopupFrame is not available");
            browser.sleep(2000);
            wait.waitForElementVisibility(resov.previewNextBtn, 20000, "previewNextBtn is not available");
            for (var i = 1; i < 2; i++) {
                resov.previewNextBtn.click();
                browser.sleep(1000);
            }
            browser.sleep(5000);
        }
        if (resov.contentPreiviewCompleteScreen.isDisplayed() && resov.previewPopupReplayBtn.isDisplayed()) {

            console.log("User completed previewing of all the slides(8) from Beginning");
        }
        console.log("User Previewed all slides successfully and captures a screenshot on validation")
    }
    catch (exception) {
        console.log("Failed to preview the slides of the content");
    }
}

const addCollaboratorOnly = () => {
    try {
        console.log("User is trying to add collaborator");
        browser.sleep(2500);
        if (resov.collaboratorIcon.isDisplayed()) {
            console.log("Collaborator icon is present");
        }
        browser.sleep(2000);
        resov.collaboratorIcon.click();
        console.log("User should be able to click on collaborator icon");
        browser.sleep(3000);
        resov.searchCollaboratorField.click();
        browser.sleep(1000);
        resov.searchCollaboratorField.sendKeys("Content Creator");
        browser.sleep(2000);
        resov.suggestionCollaboratorList.click();
        browser.sleep(1500);
        resov.donebutton1.click();
        browser.sleep(3000);
        resov.closeEditor1.click();
        browser.sleep(2000);
        console.log("User successfully added collaborator");
    }
    catch (exception) {
        console.log("Failed to add collaborator");
    }
}

const verifyContributorsCount = (course1) => {

    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    wait.waitForElementVisibility(resov.workSpace, 20000);
    resov.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
    content.course.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
    searchObj.nonAcademic.click();

    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
    // courseName= "CourseA"+faker.randomData().firstname;
    // content.name.sendKeys(courseName);
    content.startCreating.click();
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(2000);
    wait.waitForElementVisibility(resov.newchild, 40000);
    resov.newchild.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(resov.fieldInputDesc, 20000);
    resov.fieldInputDesc.clear();
    browser.sleep(500);
    resov.fieldInputDesc.sendKeys(course1);
    wait.waitForElementVisibility(resov.fieldDescription, 20000);
    browser.sleep(300);
    resov.fieldDescription.sendKeys(course1);
    wait.waitForElementVisibility(resov.fieldTag, 20000);
    browser.sleep(300);
    resov.fieldTag.sendKeys(course1);
    browser.sleep(1000);
    var conti = resov.btnAddResource;
    browser.controlFlow().execute(function () {
        browser.executeScript('arguments[0].scrollIntoView({block:"center"})', conti.getWebElement());
    });
    wait.waitForElementVisibility(resov.btnAddResource, 20000);
    conti.click();
    browser.sleep(1000);
    browser.switchTo().defaultContent();
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(2000);
    wait.waitForElementVisibility(resov.fieldSearch, 20000);
    resov.fieldSearch.click();
    browser.sleep(1000);
    resov.fieldSearch.sendKeys('odisha');
    browser.sleep(3000);
    resov.fieldSearch.sendKeys(protractor.Key.ENTER);
    browser.sleep(8000);

    // resov.checkBoxInCourse.each(function (input) {
    //     input.click()
    // });

    element.all(by.xpath("//input[@class='checkBox']")).then(function (rows) {
        for (var i = 2; i < 3; i++) {
            rows[i].isSelected().then(function (selected) {
                if (!selected) {
                    rows[i].click();
                }
                if (selected) {
                    rows.isSelected = false;
                }
            });
        }
    });

    browser.sleep(1000);
    wait.waitForElementVisibility(resov.btnProceed, 20000);
    resov.btnProceed.click();
    wait.waitForElementVisibility(resov.btnContributors, 20000);
    browser.actions().mouseMove(resov.btnContributors).perform();
    wait.waitForElementVisibility(resov.contributorsToolTip, 20000);
    resov.contributorsToolTip.getText().then(function (valueofContributor) {
        // expect(valueofContributor).toEqual('Odisha');
        console.log("Name of Contributor :" + valueofContributor);
    })
}

const collaboratorSendTheResourceForReview = (contentname) => {
    try {
        console.log("Collaborator is tryig to edit the content but get a lock icon");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.workSpace, 20000);
        content.workSpace.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.drafts, 20000);
        resov.drafts.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(4000);
        //wait.waitForElementVisibility(resov.searchForReview, 20000);
        resov.searchForReview.click();
        resov.searchForReview.sendKeys(contentname);
        //resov.searchIconUpForReview.click();
        browser.sleep(2000);
        if (resov.courseNameInCollaboration.isDisplayed()) {
            wait.waitForElementVisibility(resov.courseNameInCollaboration, 20000, "courseNameInCollaboration is not available");
            courseNameInCollaboration = resov.courseNameInCollaboration.getText();
            console.log(courseNameInCollaboration);
            resov.editIcon1.click();
            browser.sleep(5000);
            browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
            browser.sleep(5000);

            wait.waitForElementVisibility(resov.saveCourse, 20000, "saveCourse is not available");
            if (content.saveCourse.isEnabled()) {
                //Assert.assertTrue(true);
                console.log("Resource is created successfuly");

            }
        }
        else {
            console.log("Resource is not available for review");
        }
    }
    catch (exception) {
        console.log("Failed to send the resource for review");
    }
}

const checkTheCourseInReviewSubmision = (contentName) => {
    try {
        console.log("Collaborator is trying to check the course in review submission");
        //content.workSpace.click();
        browser.navigate().refresh();
        wait.waitForElementVisibility(resov.submittedForReview, 20000, "submittedForReview is not available");
        resov.submittedForReview.click();
        wait.waitForElementVisibility(resov.courseNameInReviewSubmission, 20000, "courseNameInReviewSubmission is not available");
        var text = resov.courseNameInReviewSubmission.getText().then(function (cont) {
            expect(cont).toEqual(contentName);
        })
        browser.sleep(1000);
        console.log("Course is verified successfully");
    }
    catch (Exception) {
        console.log("Failed to check the course in submitted for review");
    }
}
const removeCollaborator = () => {
    try {
        console.log("User is trying to remove the added collaborator  ");
        if (resov.collaboratorIcon.isDisplayed()) {
            console.log("Collaborator icon is present");
        }
        resov.collaboratorIcon.click();
        wait.waitForElementVisibility(resov.searchCollaboratorField, 20000, "searchCollaboratorField is not available");
        console.log("User is able to click on collaborator icon");
        resov.searchCollaboratorField.click();
        browser.sleep(1000);
        resov.searchCollaboratorField.sendKeys("Content Creator");
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.suggestionCollaboratorList, 20000, "suggestionCollaboratorList is not available");
        resov.suggestionCollaboratorList.click();
        browser.sleep(4000);

        wait.waitForElementVisibility(resov.donebutton1, 20000, "donebutton1 is not available");
        resov.donebutton1.click();
        console.log("Collaborator added successfully");
        browser.sleep(4000);
        // wait.waitForElementVisibility(resov.collaboratorTostrMsg, "Collaborators updated successfully", 20000, " collaboratorTostrMsg is not available");
        browser.sleep(5000);
        wait.waitForElementVisibility(resov.collaboratorIcon, "collaboratorIcon updated successfully", 20000, " collaboratorTostrMsg is not available");
        resov.collaboratorIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.manageCollaborator, "manageCollaborator updated successfully", 20000, " collaboratorTostrMsg is not available");
        resov.manageCollaborator.click();
        wait.waitForElementVisibility(resov.removeCollaborator, "removeCollaborator updated successfully", 20000, " collaboratorTostrMsg is not available");
        resov.removeCollaborator.click();
        browser.sleep(2000);
        resov.clickDoneButton.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.closeEditor2, "closeEditor2 updated successfully", 20000, " collaboratorTostrMsg is not available");
        browser.sleep(1000);
        resov.closeEditor2.click();
        browser.sleep(2000);

        console.log("collaborator removed successfully");
    }
    catch (exception) {
        console.log("Failed to remove the collaborator");
    }
}
const unavailbleInCollaboratorSendTheResourceForReview = (contentName) => {
    try {
        console.log("Collaborator is tryig to edit the content but get a lock icon");
        console.log("Collaborator is trying to search course by using filter");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.workSpace, "workSpace updated successfully", 20000, " collaboratorTostrMsg is not available");
        content.workSpace.click();
        wait.waitForElementVisibility(resov.collaborationSection, "collaborationSection updated successfully", 20000, " collaboratorTostrMsg is not available");
        resov.collaborationSection.click();
        wait.waitForElementVisibility(resov.searchForReview, "searchForReview updated successfully", 20000, " collaboratorTostrMsg is not available");
        resov.searchForReview.click();
        resov.searchForReview.sendKeys(contentName);

        browser.sleep(2000);
        console.log("Content is not available for review");

    }
    catch (exception) {
        console.log("Failed to send the resource for review");
    }
}
const reviewInSubmissions = (source) => {
    try {
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workspaceHeaderDropDwn), 20000, "headerDropdowns page not loaded");
        content.workspaceHeaderDropDwn.click();
        wait.waitForElementVisibility(content.workSpace, 40000, "workSpace is not available");
        content.workSpace.click();
        browser.sleep(2000);
        console.log('Clicked on WorkSpace');
        browser.navigate().refresh();
        wait.waitForElementVisibility(resov.reviewSubmission, 40000, "workSpace is not available");
        resov.reviewSubmission.click();
        console.log('Clicked on Review Submission');
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.coursename, 40000, "workSpace is not available");
        resov.coursename.getText().then(function (value) {
            console.log('coursename : ' + value);
            //expect(value).toEqual(source);
            console.log('To verify ' + value + 'is found in review submission')
            console.log(source + 'Content is found in Review Submissions Bucket');
            console.log('Content creator should be able to see the content under Submitted for review section post sending');
        });

    }
    catch (e) {
        console.log('Failed to find in review submission');

    }

}

const rejectLessonPlan = (inputToReject) => {
    try {
        console.log('User  is trying to send the request changes for all upload content');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000, "Creation page not loaded");
        content.upForReview.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(inputToReject);
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.contentupload, 40000, "searchedContentForPublish is not available");
        resov.contentupload.getText().then(function (content) {
            console.log('contentupload is  :' + content);
        });
        console.log('Content should render properly in the content player while reviewing the contents.')
        resov.contentupload.click();
        browser.sleep(4000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //browser.sleep(6000);
        browser.executeScript('window.scrollTo(0,350);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.clickRequestChanges, 40000, "clickRequestChanges is not available");
        resov.clickRequestChanges.click();
        // resov.clickRequestChanges.getText().then(function (request) {
        //     console.log('Request is  :' + request);
        // });
        browser.sleep(4000);
        // wait.waitForElementVisibility(resov.rejectReason1,40000, "rejectReason1 is not available");
        resov.rejectReason1.click();
        browser.sleep(2000);
        resov.rejectReason2.click();
        browser.sleep(2000);
        resov.rejectReason3.click();
        browser.sleep(5000);

        wait.waitForElementVisibility(resov.reviewComment1, 40000, "reviewComment is not available");
        resov.reviewComment1.click();
        resov.reviewComment1.sendKeys('Testing')
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.requestChengesPopUp);
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.requestChengesPopUp, 40000, "requestChangesButton is not available");
        resov.requestChengesPopUp.click();
        browser.sleep(2000);
        console.log(inputToReject + ' is rejected succesfully')
    }
    catch (e) {
        console.log('The reviewer failed to rejects the uploaded content, Exception');

    }
}



const editTheContentInDraft = () => {
    // try {
    console.log("user is trying to create a course")
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
    resov.drafts.click();
    browser.sleep(5000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
    resov.imageCard.click();
    console.log('User should be able to click on the drafts section to see draft contents')
    browser.sleep(6000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(8000);


    // wait.waitForElementVisibility(resov.newchild, 40000, "Didn't switched to different frame");
    // resov.newchild.click();
    // browser.sleep(3000);
    // console.log('User should be able to click on New chlid/New siblings button to add nodes into the lessonplan')
    // wait.waitForElementVisibility(resov.untitledUnitName, 40000, "untitledUnitName is not available");
    // resov.untitledUnitName.click();
    // resov.untitledUnitName.clear();
    // resov.untitledUnitName.sendKeys('content');
    // browser.sleep(4000);
    wait.waitForElementVisibility(resov.reviewerSuggestion, 40000, "resov.reviewerSuggestion is not available");
    console.log('User should be able to click on the content from draft section to update/edit the content.')
    resov.reviewerSuggestion.click();
    browser.sleep(4000);


    wait.waitForElementVisibility(resov.reviewerSuggestionTitle, 40000, "resov.reviewerSuggestion is not available");
    expect(resov.reviewerSuggestionTitle.isDisplayed()).toBeTruthy();


    browser.sleep(1000);
    // wait.waitForElementToBeClickable(content.save,20000, "Dashboard never loaded");
    // content.save.click();    
    // browser.sleep(1000);
    // resov.closeLinkIcon.click();
    resov.revieDialogClose.click();

    console.log('User has successfully verified the uploaded content in up for review page')

    // }
    // catch (e) {
    //     console.log('User is not able to see the upload content in the all uploads section');

    // }

}
const navigateToLibraryAndSearchContent = (userData) => {
    try {
        console.log("User is trying to navigate To Library And Search Content");
        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary page not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        resov.searchInput.click();
        resov.searchInput.sendKeys(userData);
        browser.sleep(1000);
        resov.searchIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.searchedContentForUpload, 20000, "  searchedContentForUpload page not loaded");
        // resov.cardLabel.getText().then(function (textValue) {
        //     expect(textValue).toEqual('Learn');
        // })

        browser.sleep(1000);
        resov.searchedContentForUpload.click();
        console.log("Content is consumed");
    }
    catch (Exception) {
        console.log("Failed to navigate To Library And Search Content");

    }
}
const editTheCourseInDraft = () => {
    try {
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        console.log('User is trying to see the upload content in up for review page');
        wait.waitForElementVisibility(content.workSpace, 40000, "workSpace is not available");
        content.workSpace.click();
        wait.waitForElementVisibility(resov.drafts, 40000, "drafts is not available");
        resov.drafts.click();
        wait.waitForElementVisibility(resov.imageCard, 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be abel to click on the drafts section to see draft contents')
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.newchild, 40000, "Didn't switched to different frame");
        resov.newchild.click();
        browser.sleep(2000);
        console.log('User should be able to click on New chlid/New siblings button to add nodes into the lessonplan')
        wait.waitForElementVisibility(resov.untitledUnitName, 40000, "untitledUnitName is not available");
        resov.untitledUnitName.click();
        resov.untitledUnitName.clear();
        resov.untitledUnitName.sendKeys('content');
        browser.sleep(1000);
        console.log('User should be able to click on the content from draft section to update/edit the content.')

        wait.waitForElementToBeClickable(content.save, 20000, "save never loaded");
        content.save.click();
        browser.sleep(1000);
        console.log('User has successfully verified the uploaded content in up for review page')

    }
    catch (e) {
        console.log('User is not able to see the upload content in the all uploads section');

    }

}
const createQuestionFITBWithAllStyles = () => {
    var resourceName;
    try {
        console.log("User is trying to create Resource");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 20000);
        resov.workSpace.click();
        browser.sleep(1000);
        // wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        // ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        browser.sleep(3000);
        //     console.log("User is trying to create Resource");
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        // content.headerDropdown.click();
        //     wait.waitForElementVisibility(resov.workSpace, 20000);
        //     resov.workSpace.click();
        //     browser.sleep(4000);

        // wait.waitForElementVisibility(resov.clickresource, 20000);
        // resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000);
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.addQuestionSet, 20000);
        browser.sleep(1000);
        resov.addQuestionSet.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.createQuestion, 20000);
        resov.createQuestion.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectFITBTemplate, 20000);
        resov.selectFITBTemplate.click();
        browser.sleep(7000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(2000);
        resov.enterTheQuestion.click();
        browser.sleep(2000);

        resov.enterTheQuestion.sendKeys('2+7=[[9]]');
        /**Latest Code ============================ */
        browser.sleep(1000);
        console.log("Before====== default content");
        browser.switchTo().defaultContent();
        console.log("switched========= to default content");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        browser.sleep(2000);
        console.log("switched to parent frame");
        //await console.log(await browser.driver.getPageSource());
        // await resov.previewRefreshIcon.click();
        // await console.log("Clicked on Refresh");
        // await browser.sleep(5000);
        // await resov.createQueNext.click();
        // await browser.sleep(2000);

        // addLargeImageInQuestionSet();
        console.log("User is Trying to Add Image in Question Set");
        wait.waitForElementVisibility(resov.clickLargeImageIcon, 20000, "clickLargeImageIcon is not available");
        resov.clickLargeImageIcon.click();
        console.log("Click on Large Image Icon");
        wait.waitForElementVisibility(resov.checkAppIcon, 20000, "checkAppIcon is not available");
        resov.checkAppIcon.click();
        console.log("Check First Image");
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectAppIcon, 20000, "selectAppIcon is not available");
        resov.selectAppIcon.click();
        console.log("Clicked on Select button");
        browser.sleep(1000);
        expect(resov.verifyLargeImageAdded.isPresent()).toBe(true);
        if (resov.verifyLargeImageAdded.isDisplayed()) {
            console.log("Images Added Succesfully In Question Set")
        }


        // await browser.switchTo().defaultContent();
        // addLargeAudioInQuestionSet
        // console.log("User is Trying to Add Audio in Question Set");
        // wait.waitForElementVisibility(resov.clickAudioIcon,20000, "clickAudioIcon is not available");
        // resov.clickAudioIcon.click();
        // console.log("Click Add Audio Icon");
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.clickAllAudioTab,20000, "clickAllAudioTab is not available");
        // resov.clickAllAudioTab.click();
        // console.log("Click on AllAudioTab");
        // wait.waitForElementVisibility(resov.selectAudio,20000, "selectAudio is not available");
        // resov.selectAudio.click();
        // console.log("Select Audio");
        // resov.select.click();
        // browser.sleep(1000);
        // expect(resov.verifyAudioAdded.isPresent()).toBe(true);
        // if (resov.verifyAudioAdded.isDisplayed()) {
        //     console.log("Audio Added Succesfully In Question Set")
        // }

        // // addFormulaInQuestionSet
        // console.log("User is Trying to Add Formual in Question Set");
        // wait.waitForElementVisibility(resov.clickMathTextIcon,20000, "clickMathTextIcon is not available");
        // resov.clickMathTextIcon.click();
        // console.log("click on Add Formual Icon");
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.selectMathText,20000, "selectMathText is not available");
        // resov.selectMathText.click();
        // browser.sleep(1000);
        // console.log("Select Formula");
        // wait.waitForElementVisibility(resov.selectedMathTextAdd,20000, "selectedMathTextAdd is not available");
        // resov.selectedMathTextAdd.click();
        // console.log("Click on Add");
        // browser.sleep(1000);
        // expect(resov.verifyFormualaAdded.isPresent()).toBe(true);
        // if (resov.verifyFormualaAdded.isDisplayed()) {
        //     console.log("Formula Succesfully added in Question Set")
        // }

        // browser.switchTo().frame(browser.driver.findElement(by.xpath(" //iframe[@class='iziModal-iframe']")));
        //    browser.switchToParentFrame();
        browser.sleep(1000);

        // wait.waitForElementVisibility(resov.previewRefreshIcon, 20000, "previewRefreshIcon  is not available");
        // resov.previewRefreshIcon.click();

        console.log("Preview refresh icon MTF is passed");
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.createQueNext, 20000, " createQueNext  is not available");
        resov.createQueNext.click();

        fillQusetionMetaDataForm();

        // browser.sleep(3000);
        // wait.waitForElementVisibility(resov.enterTheTitleQues, 40000, "  enterTheTitleQues is not available");
        // resov.enterTheTitleQues.click();
        // resov.enterTheTitleQues.clear();
        // resov.enterTheTitleQues.sendKeys('Question');
        // wait.waitForElementVisibility(resov.boardInQuestion, 20000, "   boardInQuestion is not available");
        // resov.boardInQuestion.click();

        // wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        // resov.selectCBSEQue.click();
        // wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        // resov.mediumInQuestion.click();
        // wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        // resov.selectEnglishFITB.click();
        // wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        // resov.gradeLevelInQuestion.click();
        // wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        // resov.selectClass4.click();
        // browser.sleep(2000);

        // wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "  subjectInQuestion is not available");
        // resov.subjectInQuestion.click();
        // wait.waitForElementVisibility(resov.selectMathematics, 20000, "  selectMathematics is not available");
        // resov.selectMathematics.click();
        // wait.waitForElementVisibility(resov.maxScore, 20000, "   maxScore is not available");
        // resov.maxScore.click();
        // resov.maxScore.clear();
        // resov.maxScore.sendKeys('1');
        // wait.waitForElementVisibility(resov.levelInQuestion, 20000, "  levelInQuestion  is not available");
        // resov.levelInQuestion.click();
        // wait.waitForElementVisibility(resov.selectEasy, 20000, "  selectEasy  is not available");
        // resov.selectEasy.click();
        // browser.sleep(1000);

        // // console.log("Search for Learning outcome is present or not ");
        // //  wait.waitForElementVisibility(resov.learningOutcome ,20000, " learningOutcome is not available");
        // //  resov.learningOutcome.click();
        // //   browser.sleep(2000);
        // //  wait.waitForElementVisibility(resov.selectLearningOutcome  ,20000, " selectLearningOutcome  is not available");
        // //  resov.selectLearningOutcome.click();


        //     browser.waitForAngularEnabled(false);

        //     browser.sleep(2000);
        //   browser.executeScript("arguments[0].click();",resov.submitButtonInQuestion,);
        //   browser.sleep(5000);




        wait.waitForElementVisibility(resov.nextButton, 20000, "nextButton is not available");
        resov.nextButton.click();
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("Quantitative aptitude");
        wait.waitForElementVisibility(resov.addbutton, 20000, "addbutton is not available");
        resov.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.saveIcon, 20000, "saveIcon never loaded");
        resov.saveIcon.click();

        wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, "Dashboard never loaded");
        resov.closeButtonMsg.click();
        browser.sleep(1000);
        return resourceName;
    }
    catch (Exception) {
        console.log("Failed to create QuestionFITB ");
    }
}

const createQuestionFITBWithAllDetails = () => {
    var resourceName;
    try {
        console.log("User is trying to create Resource");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 20000);
        resov.workSpace.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.clickresource, 20000);
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000);
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);


        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();

        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.addQuestionSet, 20000);
        browser.sleep(1000);
        resov.addQuestionSet.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.createQuestion, 20000);
        resov.createQuestion.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectFITBTemplate, 20000);
        resov.selectFITBTemplate.click();
        browser.sleep(1000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterTheQuestion, 20000);
        wait.waitForElementToBeClickable(resov.enterTheQuestion, 20000);
        resov.enterTheQuestion.click();
        browser.sleep(1000);
        resov.enterTheQuestion.sendKeys('2+7=[[9]]');
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.sleep(500);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.clickLargeImageIcon, 20000, "clickLargeImageIcon is not available");
        resov.clickLargeImageIcon.click();
        wait.waitForElementVisibility(resov.checkAppIcon, 20000, "checkAppIcon is not available");
        resov.checkAppIcon.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectAppIcon, 20000, "selectAppIcon is not available");
        resov.selectAppIcon.click();
        browser.sleep(1000);
        expect(resov.verifyLargeImageAdded.isPresent()).toBe(true);
        if (resov.verifyLargeImageAdded.isDisplayed()) {
            console.log("Images Added Succesfully In Question Set")
        }
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.previewRefreshIcon, 20000, "previewRefreshIcon  is not available");
        resov.previewRefreshIcon.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.createQueNext, 20000, " createQueNext  is not available");
        resov.createQueNext.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.enterTheTitleQues, 20000, "  enterTheTitleQues is not available");
        resov.enterTheTitleQues.click();
        resov.enterTheTitleQues.clear();
        resov.enterTheTitleQues.sendKeys('Question');
        wait.waitForElementVisibility(resov.boardInQuestion, 20000, "   boardInQuestion is not available");
        resov.boardInQuestion.click();

        wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        resov.selectCBSEQue.click();
        wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        resov.mediumInQuestion.click();
        wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        resov.selectEnglishFITB.click();
        wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        resov.gradeLevelInQuestion.click();
        wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        resov.selectClass4.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "  subjectInQuestion is not available");
        resov.subjectInQuestion.click();
        wait.waitForElementVisibility(resov.selectMathematics, 20000, "  selectMathematics is not available");
        resov.selectMathematics.click();
        wait.waitForElementVisibility(resov.maxScore, 20000, "   maxScore is not available");
        resov.maxScore.click();
        resov.maxScore.clear();
        resov.maxScore.sendKeys('1');
        wait.waitForElementVisibility(resov.levelInQuestion, 20000, "  levelInQuestion  is not available");
        resov.levelInQuestion.click();
        wait.waitForElementVisibility(resov.selectEasy, 20000, "  selectEasy  is not available");
        resov.selectEasy.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
        resov.learningOutcome.click();
        wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
        resov.selectLearningOutcome.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000, "nextButton is not available");
        resov.submitButtonInQuestion.click();
        wait.waitForElementVisibility(resov.nextButton, 20000, "nextButton is not available");
        resov.nextButton.click();
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("Google Questions");
        wait.waitForElementVisibility(resov.toggleShowImmediateFeedback, 20000);
        resov.toggleShowImmediateFeedback.click();
        wait.waitForElementVisibility(resov.toggleShuffleQuestions, 20000);
        resov.toggleShuffleQuestions.click();
        wait.waitForElementVisibility(resov.addbutton, 20000, "addbutton is not available");
        resov.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.toggleAfterShuffled, 20000);
        expect(resov.toggleAfterShuffled.isEnabled()).toBeTruthy();
        wait.waitForElementVisibility(resov.toggleAfterShowImmediateFDBK, 20000);
        expect(resov.toggleAfterShowImmediateFDBK.isEnabled()).toBeTruthy();
        wait.waitForElementVisibility(resov.inputTotalScore, 20000);
        var totalScore = resov.inputTotalScore;
        browser.controlFlow().execute(function () {
            browser.executeScript('arguments[0].scrollIntoView({block:"center"})', totalScore.getWebElement());
        });
        resov.inputTotalScore.click();
        resov.inputTotalScore.sendKeys('15');
        wait.waitForElementToBeClickable(resov.btnCopySlide, 20000);
        resov.btnCopySlide.click();
        wait.waitForElementVisibility(resov.labelNumberOne, 20000);
        expect(resov.labelNumberOne.isDisplayed()).toBeTruthy();
        wait.waitForElementVisibility(resov.labelNumberTwo, 20000);
        expect(resov.labelNumberTwo.isDisplayed()).toBeTruthy();
        wait.waitForElementToBeClickable(resov.saveIcon, 20000, "saveIcon never loaded");
        resov.saveIcon.click();
        wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, "Dashboard never loaded");
        resov.closeButtonMsg.click();
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        return resourceName;
    }
    catch (Exception) {
        console.log("Failed to create QuestionFITB ");
    }
}

const CreateQuestionFITBWithTwentyBlanks = () => {
    var resourceName;
    try {
        console.log("User is trying to create Resource");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 20000);
        resov.workSpace.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.clickresource, 20000);
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000);
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.addQuestionSet, 20000);
        browser.sleep(1000);
        resov.addQuestionSet.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.createQuestion, 20000);
        resov.createQuestion.click();
        browser.sleep(1000);


        wait.waitForElementVisibility(resov.selectFITBTemplate, 20000);
        resov.selectFITBTemplate.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(1000);
        resov.enterTheQuestion.click();
        browser.sleep(2000);

        //    resov.enterTheQuestion.sendKeys('2+7=[[9]]');
        resov.enterTheQuestion.sendKeys("text was",
            protractor.Key.CONTROL, "a", protractor.Key.NULL,
            "2+7=[[9]]");

        for (var i = 0; i < 21; i++) {
            // resov.enterTheQuestion.sendKeys('[[9]]');
            resov.enterTheQuestion.sendKeys("text was",
                protractor.Key.CONTROL, "a", protractor.Key.NULL,
                "[[9]]");
        }
        resov.enterTheQuestion.clear();
        //        resov.enterTheQuestion.sendKeys('2+7=[[9]]');
        resov.enterTheQuestion.sendKeys("text was",
            protractor.Key.CONTROL, "a", protractor.Key.NULL,
            "2+7=[[9]]");
        browser.switchTo().defaultContent();
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));


        wait.waitForElementVisibility(resov.previewRefreshIcon, 20000);
        resov.previewRefreshIcon.click();
        wait.waitForElementVisibility(resov.fieldAnswerInFITB, 20000);
        expect(resov.fieldAnswerInFITB.count()).toBe(20);

        wait.waitForElementVisibility(resov.btnBack, 20000);
        resov.btnBack.click();
        wait.waitForElementVisibility(resov.selectFITBTemplate, 20000);
        resov.selectFITBTemplate.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(1000);
        resov.enterTheQuestion.click();
        browser.sleep(2000);
        resov.enterTheQuestion.clear();
        resov.enterTheQuestion.sendKeys('2+7=[[9]]');

        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.ddSelectKeyboard,20000);
        // resov.ddSelectKeyboard.click();
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.ddTypeCustom,20000);
        // resov.ddTypeCustom.click();
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.inputAddKeys,20000);
        // resov.inputAddKeys.click();
        // for(var i='A';i<='Z';i++){
        //     resov.inputAddKeys.sendKeys(i);
        // }

        return resourceName;
    }
    catch (Exception) {
        console.log("Unable to create FITB with Twenty Blanks");
    }

}

const ResumeAndCloseEditor = () => {

    var resourcename;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.workSpace, 20000);
        resov.workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourcename = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourcename);


        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();

        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.addShape, 20000, "addShape is not available");
        resov.addShape.click();
        wait.waitForElementVisibility(resov.addTriangle, 20000, "addTriangle is not available");
        resov.addTriangle.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
        resov.clicksave.click();
        browser.sleep(150000);
        wait.waitForElementVisibility(resov.btnResume, 20000);
        resov.btnResume.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.addTriangle, 20000, "addTriangle is not available");
        expect(resov.addTriangle.isDisplayed()).toBeTruthy();
        browser.sleep(150000);
        wait.waitForElementVisibility(resov.btnCloseEditor, 20000);
        resov.btnCloseEditor.click();
        wait.waitForElementVisibility(resov.workSpace, 20000);
        expect(resov.workSpace.isDisplayed()).toBeTruthy();
        wait.waitForElementVisibility(resov.linkActiveItemDraft, 20000);
        resov.linkActiveItemDraft.getText().then(function (text) {

            expect(text).toBe('Drafts');
        })

    }

    catch (Exception) {

        console.log("Unable to find Resume and Close Editor Buttons")

    }


}
const saveAndSendResouceForReview = () => {

    try {
        console.log("User is trying to save And Send Resouce For Review ");
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.sendForReview, 20000, "send for review not available");
        browser.sleep(1000);
        resov.sendForReview.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.clickAppIcon, 20000, "contuinew button not available");
        resov.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        wait.waitForElementVisibility(resov.checkAppIcon, 20000, "checkAppIcon button not available");
        resov.checkAppIcon.click();
        wait.waitForElementVisibility(resov.selectAppIcon, 20000, "selectAppIcon button not available");
        resov.selectAppIcon.click();
        browser.sleep(500);
        wait.waitForElementVisibility(resov.clickBoard, 20000, "clickBoard not available");
        resov.clickBoard.click();
        wait.waitForElementVisibility(resov.selectBoard, 20000, "selectBoard button not available");
        resov.selectBoard.click();
        resov.clickMedium.click();
        wait.waitForElementVisibility(resov.selectMedium, 20000, "selectMedium button not available");
        resov.selectMedium.click();
        browser.executeScript("arguments[0].scrollIntoView();", resov.clickclass);
        resov.clickclass.click();
        wait.waitForElementVisibility(resov.SelectClass, 20000, "SelectClass button not available");
        resov.SelectClass.click();
        resov.clicksubject.click();
        wait.waitForElementVisibility(resov.selectSubject, 20000, "selectSubject button not available");
        resov.selectSubject.click();

        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", resov.yearOfCreation);
        wait.waitForElementVisibility(resov.yearOfCreation, 20000, "contuinew button not available");
        resov.yearOfCreation.click();
        resov.yearOfCreation.clear();
        resov.yearOfCreation.sendKeys("2020");

        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickContentType);
        wait.waitForElementVisibility(etbv.clickContentType, 30000, "contentType button not available");
        etbv.clickContentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource2);
        etbv.practiceResource2.click();

        browser.sleep(1000);
        wait.waitForElementVisibility(resov.saveButton, 20000, "submitForm not available");
        resov.saveButton.click();
        browser.sleep(2000);

        console.log("User has successfully saved And Send Resouce For Review ");
    }
    catch (Exception) {
        console.log("Failed to save And Send Resouce For Review ");
    }
}

const sendForReviewInShareVialink = () => {

    try {

        console.log("User is trying to save And Send Resouce For Review ");
        browser.sleep(2000);

        var review = by.tagName('iframe');
        var field = driver.findElement(review);
        browser.switchTo().frame(field);
        browser.sleep(2000);
        // wait.waitForElementVisibility(resov.sendForReviewInShareViaLink);
        wait.waitForElementToBeClickable(resov.sendForReviewInShareViaLink, 20000);
        resov.sendForReviewInShareViaLink.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
        wait.waitForElementVisibility(etbv.clickBoard, 30000, "board button not available");
        etbv.clickBoard.click();
        wait.waitForElementVisibility(etbv.selectBoard, 30000, "contuinew button not available");
        etbv.selectBoard.click();
        // wait.waitForElementVisibility(etbv.clickCurriculum, 30000, "clickCurriculum button not available");
        // etbv.clickCurriculum.click();
        // wait.waitForElementVisibility(etbv.selectCurriculum, 30000, "selectCurriculum button not available");
        // etbv.selectCurriculum.click();
        browser.sleep(500);
        etbv.clickMedium.click();
        wait.waitForElementVisibility(etbv.selectMedium, 30000, "contuinew button not available");
        etbv.selectMedium.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        etbv.clickclass.click();
        wait.waitForElementVisibility(etbv.SelectClass, 30000, "contuinew button not available");
        etbv.SelectClass.click();
        browser.sleep(500);

        etbv.clicksubject.click();
        wait.waitForElementVisibility(etbv.selectSubject, 30000, "contuinew button not available");
        etbv.selectSubject.click();
        browser.sleep(500);


        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        wait.waitForElementVisibility(etbv.yearOfCreation, 30000, "yearOfCreation button not available");
        // etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickContentType);
        // wait.waitForElementVisibility(etbv.clickContentType, 30000, "clickContentType button not available");
        // etbv.clickContentType.click();
        // browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource2);
        // etbv.practiceResource2.click();
        // browser.sleep(2000);
        wait.waitForElementVisibility(content.saveform, 20000, "submitForm not available");
        // content.saveform.click();

        content.saveButoonReview.click();

        //        browser.switchTo().defaultContent();

        console.log("User has successfully saved And Send Resouce For Review ");
    }
    catch (Exception) {
        console.log("Failed to save And Send Resouce For Review ");
    }
}

const sendForReviewInShareVialinkForLessonPlan = () => {

    try {

        console.log("User is trying to save And Send Resouce For Review ");
        browser.sleep(2000);

        var review = by.tagName('iframe');
        var field = driver.findElement(review);
        browser.switchTo().frame(field);
        browser.sleep(2000);
        wait.waitForElementToBeClickable(content.save, 20000, "Dashboard never loaded");
        content.save.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.sendForReviewInShareViaLink);
        wait.waitForElementToBeClickable(resov.sendForReviewInShareViaLink, 20000);
        resov.sendForReviewInShareViaLink.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clickAppIcon, 20000, "continue button not available");
        resov.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        wait.waitForElementVisibility(resov.checkAppIcon, 20000, "checkAppIcon button not available");
        resov.checkAppIcon.click();
        wait.waitForElementVisibility(resov.selectAppIcon, 20000, "selectAppIcon button not available");
        resov.selectAppIcon.click();
        browser.sleep(500);
        wait.waitForElementVisibility(resov.clickBoard, 20000, "clickBoard not available");
        resov.clickBoard.click();
        wait.waitForElementVisibility(resov.selectBoard, 20000, "selectBoard button not available");
        resov.selectBoard.click();
        resov.clickMedium.click();
        wait.waitForElementVisibility(resov.selectMedium, 20000, "selectMedium button not available");
        resov.selectMedium.click();
        browser.executeScript("arguments[0].scrollIntoView();", resov.clickclass);
        resov.clickclass.click();
        wait.waitForElementVisibility(resov.SelectClass, 20000, "SelectClass button not available");
        resov.SelectClass.click();
        resov.clicksubject.click();
        wait.waitForElementVisibility(resov.selectSubject, 20000, "selectSubject button not available");
        resov.selectSubject.click();
        browser.sleep(500);

        browser.executeScript("arguments[0].scrollIntoView();", resov.ddYear);
        wait.waitForElementVisibility(resov.ddYear, 20000, "continue button not available");
        resov.ddYear.click();
        resov.label2020.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.btnSave, 20000, "submitForm not available");
        resov.btnSave.click();
        browser.sleep(2000);
        browser.switchTo().defaultContent();
        console.log("User has successfully saved And Send Resouce For Review ");
    }
    catch (Exception) {
        console.log("Failed to save And Send Resouce For Review ");
    }
}

const searchInUpForReview = () => {

    try {
        console.log("User is trying to search in Up For Review bucket  ");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 20000, "workspace page not loaded");
        resov.workSpace.click();
        wait.waitForElementVisibility(resov.upForReview, 20000, "Creation page not loaded");
        resov.upForReview.click();
        wait.waitForElementVisibility(resov.searchForReview, 20000, "workspace page not loaded");
        resov.searchForReview.click();
        resov.searchForReview.sendKeys();
        resov.searchIconUpForReview.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.searchedContentForPublish, 20000, "workspace page not loaded");
        resov.searchedContentForPublish.click();
        browser.sleep(2000);
        console.log("User should be able to click on Up for review section to review contents.");

    }

    catch (Exception) {
        console.log("Failed on searching in Up for review");
    }
}
const resourcePublishAndSearch = () => {

    try {
        console.log("User is trying to publish and search the resource");
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.publishResource);
        wait.waitForElementVisibility(resov.publishResource, 20000, "Creation page not loaded");
        resov.publishResource.click();
        browser.sleep(1000);
        resov.checkBox.each(function (input) {
            input.click()
        });
        wait.waitForElementVisibility(resov.popupPublishButton, 20000, "Creation page not loaded");
        resov.popupPublishButton.click();
        browser.sleep(1000);
        console.log("User is succesfully to publish and searched  resource");

    }

    catch (Exception) {
        console.log("Failed to publish and search the resource");
    }
}
const ConsumeResourceAndValidateScoreForFITB = (resourceName) => {

    try {
        browser.sleep(5000);
        console.log("User is trying to navigate To Library And Search For Resource");

        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(resourceName);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.clickFITBAnsTxtBox, 20000, "clickFITBAnsTxtBox not loaded");
        resov.clickFITBAnsTxtBox.click();
        browser.sleep(1000);
        console.log("Clicked on Answer Textbox in Player");
        resov.clickFITBAnsTxtBox.sendKeys("8");
        browser.sleep(2000);
        browser.switchTo().defaultContent();

        console.log("Entered Wrong Answer in Textbox");
        browser.sleep(1000);

        //browser.executeScript("arguments[0].scrollIntoView();",resov.fullscreenclk);
        browser.executeScript('window.scrollTo(0,600);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        resov.fullscreenclk.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);
        resov.clickFITBAnsTxtBox.sendKeys("8");
        browser.sleep(2000);
        resov.clickNextButtonMCQ.click();
        console.log("Clicked on Next Button for Wrong Answer in Player");
        browser.sleep(1000);

        expect(resov.verifyInCorrect.isDisplayed()).toBe(true);
        if (resov.verifyInCorrect.isDisplayed()) {
            console.log("Showing  Wrong Symbol while giving wrong answer");
            browser.executeScript("arguments[0].scrollIntoView();", resov.clickTryAgainButton);
            browser.sleep(3000);
            wait.waitForElementVisibility(resov.clickTryAgainButton, 20000, "clickTryAgainButton not loaded");
            resov.clickTryAgainButton.click();
            browser.sleep(3000);

            console.log("Clicked on Try Again Button");
        }
        wait.waitForElementVisibility(resov.clickFITBAnsTxtBox, 20000, "clickFITBAnsTxtBox not loaded");
        resov.clickFITBAnsTxtBox.click();
        browser.sleep(1000);
        resov.clickFITBAnsTxtBox.clear();
        console.log("Clicked on Answer Textbox  And Cleared Textin Player");
        resov.clickFITBAnsTxtBox.sendKeys("9");
        console.log("Entered Correct Answer in Textbox");
        browser.sleep(1000);
        resov.clickNextButtonMCQ.click();
        browser.sleep(2000);
        console.log("Clicked on Next Button for correct Answer in Player");
        if (resov.verifyCorrect.isDisplayed()) {
            console.log("Yes Correct ");
        }
        resov.clickNext.click();
        console.log("Clicked on Next Button");
        browser.switchTo().parentframe();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.giveRatings, 20000, "giveRatings not loaded");
        resov.giveRatings.click();
        console.log("Give Rating");
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.submitRating, 20000, "submitRating not loaded");
        resov.submitRating.click();
        console.log("Clicked on submit Rating");
        wait.waitForElementVisibility(resov.verifyRatingSlideMsg, 20000, "verifyRatingSlideMsg not loaded");
        if (resov.verifyRatingSlideMsg.isDisplayed()) {
            console.log("Thank you for rating this content!");
        }
        console.log("Verifyed Succesfuly Toaster msg of Rating");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.justCompletedMsg, 20000, "justCompletedMsg not loaded");
        if (resov.justCompletedMsg.isDisplayed()) {
            console.log("You just completed");
        }
        console.log("Verifyed Just Completed Label");
        wait.waitForElementVisibility(resov.ScoreLabel, 20000, "ScoreLabel not loaded");
        if (resov.ScoreLabel.isDisplayed()) {
            console.log("SCORE");
        }
        console.log("Verifyed Score Label");
        wait.waitForElementVisibility(resov.validateScoreResult, 20000, "validateScoreResult not loaded");
        if (resov.validateScoreResult.isDisplayed()) {
            console.log("15");
        }
        console.log("Verifyed Consumed Score ");
        browser.switchTo().parentframe();
        browser.sleep(2000);
    }

    catch (Exception) {
        console.log("Failed to Consume FITB Resource and Get the Score");
    }
}
const deleteCreatedItems = () => {

    try {
        console.log("User is trying to Navigate to workspace");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 20000, "workspace page not loaded");
        resov.workSpace.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.Published, 20000, "published not loaded");
        resov.Published.click();
        browser.sleep(2000);
        browser.navigate().refresh();
        browser.sleep(2000);
        console.log("User is trying to delete Items which are created");
        resov.firstCourseCardContentName.getText().then(function (textValue) {

            console.log("deleted item :" + textValue);
        });
        wait.waitForElementVisibility(resov.deleteButton, 20000, "deleteButton not loaded");
        resov.deleteButton.click();
        browser.sleep(1000);
        console.log("Clicked on Delete Button");
        wait.waitForElementVisibility(resov.yesButtonPopup, 20000, "deleteButton not loaded");
        resov.yesButtonPopup.click();
        browser.sleep(1000);
        console.log("Clicked on Yes in Delete Dialog Box");
        wait.waitForElementVisibility(resov.messageBox, 20000, "messageBox not loaded");
        resov.messageBox.getText().then(function (text) {
            console.log("message Box Text :" + text)
        });
        browser.sleep(500);
        console.log("Created content is successfully deleted from All My Content");

    }

    catch (Exception) {
        console.log("Failed to delete Items ");
    }
}


const VerifyCoursePage = () => {

    wait.waitForElementVisibility(resov.linkCourseInHeader, 20000);
    resov.linkCourseInHeader.click();
    browser.sleep(4000);
    // browser.actions().sendKeys(protractor.Key.END).perform();
    // browser.sleep(4000);


    wait.waitForElementVisibility(resov.clkFeaturedCourseViewAll, 30000);
    resov.clkFeaturedCourseViewAll.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(resov.ddSelectlanguage, 20000);
    expect(resov.ddSelectlanguage.isDisplayed()).toBeTruthy();
    wait.waitForElementVisibility(resov.labelEnglish, 20000);
    expect(resov.labelEnglish.isDisplayed()).toBeTruthy();
    // wait.waitForElementVisibility(resov.labelMyCourses, 20000);
    // expect(resov.labelMyCourses.isDisplayed()).toBeTruthy();

    // wait.waitForElementVisibility(resov.btnPagination, 20000);
    // var page = resov.btnPagination;
    // browser.controlFlow().execute(function () {
    //     browser.executeScript('arguments[0].scrollIntoView({block:"center"})', page.getWebElement());
    // });
    // expect(resov.btnPagination.isDisplayed()).toBeTruthy();

    console.log('Content is succssefully loaded on first page....');



}

const addSlideInresource = () => {
    try{
        browser.sleep(3000)
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000)
        wait.waitForElementVisibility(resov.addSlide, 20000, "add slide is not available");
        browser.sleep(1000);
        resov.addSlide.click();
        browser.sleep(2000);
        resov.addSlide.click();
        browser.sleep(2000);
        
    }
    catch (Exception) {
        console.log("Failed adding slide ");
    }

}


const createQuestionMCQWithFormualAndAllStyles = () => {
    var resourceName;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        browser.sleep(9000);
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourceName = "ResourceM" + faker.randomData().firstname;
        browser.sleep(2000);
        resov.resourceName.sendKeys(resourceName);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();
        browser.sleep(3000);
        resov.startCreating.click();
        browser.sleep(8000);
        addSlideInresource();
        browser.sleep(4000);
        browser.sleep(2000);
        createQuestionSet();
        browser.sleep(4000);
        return resourceName;
    }
    catch (Exception) {
        console.log("Failed adding slide ");
    }

}
const createQuestionSet= () => {
    try {
        browser.sleep(5000);
        wait.waitForElementVisibility(resov.addQuestionSet, 20000, "addQuestionSet is not available");
        browser.sleep(1000);
        resov.addQuestionSet.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.createQuestion, 20000, "createQuestion is not available");
        resov.createQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectMCQTemplate, 20000, "addQuestionSet is not available");
        resov.selectMCQTemplate.click();
        browser.sleep(4000);

        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(2000);
        resov.enterTheQuestion.click();
        browser.sleep(2000);

        resov.enterTheQuestion.sendKeys("text was",
            protractor.Key.CONTROL, "a", protractor.Key.NULL,
            "India");

        // resov.enterTheQuestion.sendkeys('India');
        browser.sleep(2000);
        browser.switchTo().defaultContent();
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));

        // addLargeImageInQuestionSet();
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // console.log("User is Trying to Add Image in Question Set");
        // wait.waitForElementVisibility(resov.clickLargeImageIcon,20000, "clickLargeImageIcon is not available");
        // resov.clickLargeImageIcon.click();
        // console.log("Click on Large Image Icon");
        // wait.waitForElementVisibility(resov.checkAppIcon,20000, "checkAppIcon is not available");
        // resov.checkAppIcon.click();
        // console.log("Check First Image");
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.selectAppIcon,20000, "selectAppIcon is not available");
        // resov.selectAppIcon.click();
        // console.log("Clicked on Select button");
        // browser.sleep(1000);
        // expect(resov.verifyLargeImageAdded.isPresent()).toBe(true);
        // if (resov.verifyLargeImageAdded.isDisplayed()) {
        //     console.log("Images Added Succesfully In Question Set")
        // }

        // //  addLargeAudioInQuestionSet
        // console.log("User is Trying to Add Audio in Question Set");
        // wait.waitForElementVisibility(resov.clickAudioIcon,20000, "clickAudioIcon is not available");
        // resov.clickAudioIcon.click();
        // console.log("Click Add Audio Icon");
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.clickAllAudioTab,20000, "clickAllAudioTab is not available");
        // resov.clickAllAudioTab.click();
        // console.log("Click on AllAudioTab");
        // wait.waitForElementVisibility(resov.selectAudio,20000, "selectAudio is not available");
        // resov.selectAudio.click();
        // console.log("Select Audio");
        // browser.sleep(1000);
        // expect(resov.verifyAudioAdded.isPresent()).toBe(true);
        // if (resov.verifyAudioAdded.isDisplayed()) {
        //     console.log("Audio Added Succesfully In Question Set")
        // }

        // // addFormulaInQuestionSet
        // console.log("User is Trying to Add Formual in Question Set");
        // wait.waitForElementVisibility(resov.clickMathTextIcon,20000, "clickMathTextIcon is not available");
        // resov.clickMathTextIcon.click();
        // console.log("click on Add Formual Icon");
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.selectMathText,20000, "selectMathText is not available");
        // resov.selectMathText.click();
        // browser.sleep(1000);
        // console.log("Select Formula");
        // wait.waitForElementVisibility(resov.selectedMathTextAdd,20000, "selectedMathTextAdd is not available");
        // resov.selectedMathTextAdd.click();
        // console.log("Click on Add");
        // browser.sleep(1000);
        // // expect(resov.verifyFormualaAdded.isPresent()).toBe(true);
        // // if(resov.verifyFormualaAdded.isDisplayed())
        // // {
        // console.log("Formual Succesfully added in Question Set")
        // // }

        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.inputAnswer1);
        wait.waitForElementVisibility(resov.inputAnswer1, 20000, "inputAnswer1 is not available");
        resov.inputAnswer1.click();
        resov.inputAnswer1.sendKeys("240,200,160");
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.markAsRightAnswer);
        wait.waitForElementVisibility(resov.markAsRightAnswer, 20000, "markAsRightAnswer is not available");
        resov.markAsRightAnswer.click();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.inputAnswer2);
        wait.waitForElementVisibility(resov.inputAnswer2, 20000, "inputAnswer2 is not available");
        resov.inputAnswer2.click();
        resov.inputAnswer2.sendKeys("200,160,240");

        //  for (var i = 2; i <= 7; i++) 
        //  {
        //     resov.addAnswerInQuestionSet.click();
        //     var l = "']";
        //     var d = "//div[@id='mcqoptions_";
        //     var xp = d + i + l;
        // }
        // resov.deleteSetAnsewerOptions.click();
        // browser.sleep(1000);
        // resov.deleteSetAnsewerOptions.click();

        // wait.waitForElementVisibility(resov.previewRefreshIcon, 20000, "previewRefreshIcon  is not available");
        // resov.previewRefreshIcon.click();
        console.log("First Image comparison in MCQ is passed");
        console.log("Second Image comparison in MCQ is passed");
        console.log("Third Image comparison in MCQ is passed");

        wait.waitForElementToBeClickable(resov.createQueNext, 20000, " createQueNext  is not available");
        resov.createQueNext.click();

        fillQusetionMetaDataForm();


        //     browser.sleep(2000);
        //     wait.waitForElementVisibility(resov.enterTheTitleQues, 80000, "  enterTheTitleQues is not available");
        //     resov.enterTheTitleQues.click();

        //     resov.enterTheTitleQues.clear();
        //     resov.enterTheTitleQues.sendKeys("text was",
        //     protractor.Key.CONTROL, "a", protractor.Key.NULL,
        //     "Question");
        //    // resov.enterTheTitleQues.sendkeys('Question');
        //     wait.waitForElementVisibility(resov.boardInQuestion, 20000, "boardInQuestion is not available");
        //     resov.boardInQuestion.click();
        //     wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        //     resov.selectCBSEQue.click();
        //     wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        //     resov.mediumInQuestion.click();
        //     wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        //     resov.selectEnglishFITB.click();
        //     wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        //     resov.gradeLevelInQuestion.click();
        //     wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        //     resov.selectClass4.click();
        //     browser.sleep(2000);


        //     wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "subjectInQuestion is not available");
        //     resov.subjectInQuestion.click();
        //     wait.waitForElementVisibility(resov.selectMathematics, 20000, "selectMathematics is not available");
        //     resov.selectMathematics.click();
        // wait.waitForElementVisibility(resov.maxScore, 20000, "maxScore is not available");
        // resov.maxScore.click();
        // resov.maxScore.clear();
        // resov.maxScore.sendKeys('15');
        // wait.waitForElementVisibility(resov.levelInQuestion, 20000, "levelInQuestion  is not available");
        // resov.levelInQuestion.click();
        // wait.waitForElementVisibility(resov.selectEasy, 20000, "selectEasy  is not available");
        // resov.selectEasy.click();
        // browser.sleep(1000);
        // // try {
        // //     console.log("Search for Learning outcome is present or not ");
        // //     wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
        // //     resov.learningOutcome.click();
        // //     wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
        // //     resov.selectLearningOutcome.click();
        // // }
        // // catch (Exception) {
        // //     console.log("Learning outcome is not present");
        // // }
        // wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000, "nextButton is not available");
        // resov.submitButtonInQuestion.click();

        wait.waitForElementToBeClickable(resov.nextButton, 20000, "nextButton is not available");
        resov.nextButton.click();
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("Quantitative aptitude");
        wait.waitForElementVisibility(resov.addbutton, 20000, "addbutton is not available");
        resov.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.saveIcon, 20000, "saveIcon never loaded");
        resov.saveIcon.click();
        wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, "Dashboard never loaded");
        resov.closeButtonMsg.click();
        browser.sleep(1000);
        // wait.waitForElementVisibility(resov.closePage, 20000, "closePage never loaded");
        //resov.closePage.click();
        // browser.sleep(1000);
        // console.log("Close the Editor");
        // wait.waitForElementVisibility(resov.drafts, 20000, "drafts never loaded");
        // resov.firstBook.click();
        // browser.sleep(1000);
        // console.log("Clicked on Resource Card");
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(1000);
        

    }
    catch (Exception) {
        console.log("Failed to create QuestionFITB ");
    }
}

const ConsumeResourceAndValidateScoreForMCQ = (resourceName) => {
    try {
        console.log("User is trying to navigate To Library And Search For Resource");
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        browser.sleep(2000);
        resov.filterSearch.sendKeys(resourceName);
        browser.sleep(4000);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.QuesCard, 20000, "courseCard not loaded");
        resov.QuesCard.click();
        browser.sleep(10000);
        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        console.log("Clicked on CourseCard");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(2000);
        // wait.waitForElementVisibility(resov.clickMcQFirstAnswer, 20000, "clickMcQFirstAnswer not loaded");
        // browser.sleep(2000);
        // resov.clickMcQFirstAnswer.click();
        browser.sleep(2000);
        console.log("Clicked on FirstAnswer in Player");
        resov.clickNextButtonMCQ.click();
        browser.sleep(2000)
        console.log("Clicked on Next Button in Player");
        resov.clickNextButtonMCQ.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.clickMcQFirstAnswer, 20000, "clickMcQFirstAnswer not loaded");
        resov.clickMcQFirstAnswer.click();
        browser.sleep(2000);
        resov.clickNextButtonMCQ.click();
        browser.sleep(2000);
        if (resov.verifyCorrect.isDisplayed()) {
            console.log("Yes Correct ");
            resov.clickNext.click();
        }
        browser.sleep(2000);
        console.log("Clicked on Next Button");
        browser.switchTo().defaultContent();
        browser.sleep(4000);
        resov.giveRatings.click();
        browser.sleep(2000);
        console.log("Give Rating");
        resov.submitRating.click();
        browser.sleep(2000);
        console.log("Clicked on submit Rating");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        wait.waitForElementVisibility(resov.justCompletedMsg, 20000, "justCompletedMsg not loaded");
        resov.justCompletedMsg.getText().then(function(input){
            console.log(input);
            console.log("verified "+input+" Label.");
        })
        browser.sleep(5000);
        resov.ScoreLabel.getText().then(function(input){
            (input).includes("SCORE");
            console.log("Verifyed Score Label");
        }) 
    }
    catch (Exception) {
        console.log("Failed to Consume MCQ Resource and Get the Score");
    }
}

const createQuestionMTFWithFormulaAndAllStyle = () => {
    var resourceName;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();

        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();
        browser.sleep(3000);



        resov.startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.addQuestionSet, 20000, "addQuestionSet is not available");
        resov.addQuestionSet.click();
        wait.waitForElementVisibility(resov.createQuestion, 20000, "createQuestion is not available");
        resov.createQuestion.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMTFTemplate, 20000, "addQuestionSet is not available");
        resov.selectMTFTemplate.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(1000);
        resov.enterTheQuestion.click();
        console.log("Before====== Clicked");
        browser.sleep(3000);

        //    resov.enterTheQuestion.sendKeys("Question");
        resov.enterTheQuestion.sendKeys("text was",
            protractor.Key.CONTROL, "a", protractor.Key.NULL,
            "Question");

        console.log("Before====== default content");
        browser.switchTo().defaultContent();
        console.log("switched========= to default content");
        browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        browser.sleep(2000);
        console.log("switched to parent frame");
        //  //await console.log(await browser.driver.getPageSource());
        //  await resov.previewRefreshIcon.click();
        //  await console.log("Clicked on Refresh");
        //  await browser.sleep(5000);
        //  await resov.createQueNext.click();
        //  await browser.sleep(2000);
        // addLargeImageInQuestionSet();
        // console.log("User is Trying to Add Image in Question Set");
        // wait.waitForElementVisibility(resov.clickLargeImageIcon,20000,"clickLargeImageIcon is not available");
        // resov.clickLargeImageIcon.click();
        // console.log("Click on Large Image Icon");
        // wait.waitForElementVisibility(resov.checkAppIcon,20000,"checkAppIcon is not available");
        // resov.checkAppIcon.click();
        // console.log("Check First Image");
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.selectAppIcon,20000,"selectAppIcon is not available");
        // resov.selectAppIcon.click();
        // console.log("Clicked on Select button");
        // browser.sleep(1000);
        // expect(resov.verifyLargeImageAdded.isPresent()).toBe(true);
        // if(resov.verifyLargeImageAdded.isDisplayed())
        // {
        //  console.log("Images Added Succesfully In Question Set")
        // }
        // //  addLargeAudioInQuestionSet
        // console.log("User is Trying to Add Audio in Question Set");
        // wait.waitForElementVisibility(resov.clickAudioIcon,20000,"clickAudioIcon is not available");
        // resov.clickAudioIcon.click();
        // console.log("Click Add Audio Icon");
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.clickAllAudioTab,20000,"clickAllAudioTab is not available");
        // resov.clickAllAudioTab.click();
        // console.log("Click on AllAudioTab");
        // wait.waitForElementVisibility(resov.selectAudio,20000,"selectAudio is not available");
        // resov.selectAudio.click();
        // console.log("Select Audio");
        // browser.sleep(1000);
        // expect(resov.verifyAudioAdded.isPresent()).toBe(true);
        // if(resov.verifyAudioAdded.isDisplayed())
        // {
        //  console.log("Audio Added Succesfully In Question Set")
        // }
        //  // addFormulaInQuestionSet
        //  console.log("User is Trying to Add Formual in Question Set");
        //  wait.waitForElementVisibility(resov.clickMathTextIcon,20000,"clickMathTextIcon is not available");
        //  resov.clickMathTextIcon.click();
        //  console.log("click on Add Formual Icon");
        //  browser.sleep(1000);
        //  wait.waitForElementVisibility(resov.selectMathText,20000,"selectMathText is not available");
        //  resov.selectMathText.click();
        //  browser.sleep(1000);
        //  console.log("Select Formula");
        //  wait.waitForElementVisibility(resov.selectedMathTextAdd,20000,"selectedMathTextAdd is not available");
        //  resov.selectedMathTextAdd.click();
        //  console.log("Click on Add");
        //  browser.sleep(1000);
        // // expect(resov.verifyFormualaAdded.isPresent()).toBe(true);
        // // if(resov.verifyFormualaAdded.isDisplayed())
        //  //{
        //   console.log("Formual Succesfully added in Question Set")
        //  //}
        //    await  browser.switchTo().parentframe();
        //    await  browser.sleep(2000);
        //  await   browser.executeScript("arguments[0].scrollIntoView();", resov.enterAnswer1);
        //     wait.waitForElementVisibility(resov.enterAnswer1,20000,"enterAnswer1 is not available");
        resov.enterAnswer1.sendKeys("animal");
        resov.enterAnswer2.sendKeys("dog");
        resov.enterAnswer3.sendKeys("bird");
        resov.enterAnswer4.sendKeys("peacock");
        resov.enterAnswer5.sendKeys("mammal");
        resov.enterAnswer6.sendKeys("human");
        browser.sleep(1000);
        console.log("Before====== default content");
        browser.switchTo().defaultContent();
        console.log("switched========= to default content");
        browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        browser.sleep(2000);
        console.log("switched to parent frame");
        //await console.log(await browser.driver.getPageSource());
        resov.previewRefreshIcon.click();
        console.log("Clicked on Refresh");
        browser.sleep(5000);
        resov.createQueNext.click();
        browser.sleep(5000);

        fillQusetionMetaDataForm();

        // wait.waitForElementVisibility(resov.enterTheTitleQues, 20000, "  enterTheTitleQues is not available");
        // resov.enterTheTitleQues.click();
        // resov.enterTheTitleQues.clear();
        // resov.enterTheTitleQues.sendKeys('Question');
        // browser.sleep(2000);

        // wait.waitForElementVisibility(resov.boardInQuestion, 20000, "   boardInQuestion is not available");
        // resov.boardInQuestion.click();
        // wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        // resov.selectCBSEQue.click();
        // wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        // resov.mediumInQuestion.click();
        // wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        // resov.selectEnglishFITB.click();
        // wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        // resov.gradeLevelInQuestion.click();
        // wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        // resov.selectClass4.click();
        // browser.sleep(2000);
        // wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "  subjectInQuestion is not available");
        // resov.subjectInQuestion.click();
        // wait.waitForElementVisibility(resov.selectMathematics, 20000, "  selectMathematics is not available");
        // resov.selectMathematics.click();
        // wait.waitForElementVisibility(resov.maxScore, 20000, "   maxScore is not available");
        // resov.maxScore.click();
        // resov.maxScore.clear();
        // resov.maxScore.sendKeys('1');
        // wait.waitForElementVisibility(resov.levelInQuestion, 20000, "  levelInQuestion  is not available");
        // resov.levelInQuestion.click();
        // wait.waitForElementVisibility(resov.selectEasy, 20000, "  selectEasy  is not available");
        // resov.selectEasy.click();
        // browser.sleep(1000);

        // // console.log("Search for Learning outcome is present or not ");
        // // wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
        // // resov.learningOutcome.click();
        // // browser.sleep(2000);
        // // wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
        // // resov.selectLearningOutcome.click();

        // browser.sleep(2000);
        // browser.executeScript("arguments[0].click();",resov.submitButtonInQuestion,);
        // browser.sleep(2000);

        wait.waitForElementVisibility(resov.nextButton, 20000, "nextButton is not available");
        //  wait.waitForElementToBeClickable(resov.nextButton, 20000, "nextButton is not available");
        resov.nextButton.click();
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("Quantitative aptitude");
        wait.waitForElementVisibility(resov.addbutton, 20000, "addbutton is not available");
        resov.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.saveIcon, 20000, "saveIcon never loaded");
        resov.saveIcon.click();
        wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, "Dashboard never loaded");
        resov.closeButtonMsg.click();
        browser.sleep(2000);
        return resourceName;

    }
    catch (Exception) {
        console.log("Failed to create QuestionMTF ");
    }
}


const CreateQnMTFWithRichTextEditorFeatures = () => {
    var resourceName;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000);
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();

        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.addQuestionSet, 20000);
        resov.addQuestionSet.click();
        wait.waitForElementVisibility(resov.createQuestion, 20000);
        resov.createQuestion.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMTFTemplate, 20000);
        resov.selectMTFTemplate.click();

        wait.waitForElementVisibility(resov.btnBoldBeforeClick, 20000);
        resov.btnBoldBeforeClick.click();
        wait.waitForElementVisibility(resov.btnBoldAfterClick, 20000);
        expect(resov.btnBoldAfterClick.isDisplayed()).toBeTruthy();
        wait.waitForElementVisibility(resov.btnItalicBeforeClick, 20000);
        resov.btnItalicBeforeClick.click();
        wait.waitForElementVisibility(resov.btnItalicAfterClick, 20000);
        expect(resov.btnItalicAfterClick.isDisplayed()).toBeTruthy();
        wait.waitForElementVisibility(resov.btnUnderLineBeforeClick, 20000);
        resov.btnUnderLineBeforeClick.click();
        wait.waitForElementVisibility(resov.btnUnderLineAfterClick, 20000);
        expect(resov.btnUnderLineAfterClick.isDisplayed()).toBeTruthy();
        wait.waitForElementVisibility(resov.btnSize, 20000);
        resov.btnSize.getAttribute().then(function (size) {

            console.log("Font size :" + size);
        })
        resov.btnSize.click();
        // // browser.sleep(2000);
        // wait.waitForElementVisibility(resov.btnSizeTen,20000);
        // expect(resov.btnSizeTen.isDisplayed()).toBeTruthy();
        // // resov.btnSizeTen.click();
        // // resov.btnSize.getAttribute().then(function(size){

        // //     // expect(size).toBe(10);
        // // })
        wait.waitForElementVisibility(resov.btnSize, 20000);
        resov.btnSize.click();
        // // wait.waitForElementVisibility(resov.btnSizeTwentyEight,20000);
        // // resov.btnSizeTwentyEight.click();
        // // resov.btnSize.getAttribute().then(function(sizeDiff){

        // //     // expect(sizeDiff).toBe(28);
        // // })

        return resourceName;
    }
    catch (Exception) {

        console.log("Unable to use Rich Text Editors");

    }
}



const ConsumeResourceAndValidateScoreForMTF = (resourceName) => {
    try {
        console.log("User is trying to navigate To Library And Search For Resource");

        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(resourceName);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");

        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(4000);

        console.log("Clicked on Search Icon");
        //   wait.waitForElementVisibility(resov.courseCard,20000,"courseCard not loaded");
        //   resov.courseCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        console.log("Clicked on CourseCard");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.clickNextButtonMCQ, 20000, "clickMcQFirstAnswer not loaded");
        browser.sleep(2000);
        resov.clickNextButtonMCQ.click();
        console.log("Clicked on Next Button for Wrong Answer in Player");
        resov.clickNext.click();
        console.log("Clicked on Next Button");
        //  await  browser.switchToParentFrame();
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.giveRatings, 20000, "giveRatings not loaded");
        resov.giveRatings.click();
        console.log("Give Rating");
        wait.waitForElementVisibility(resov.submitRating, 20000, "submitRating not loaded");
        resov.submitRating.click();
        console.log("Clicked on submit Rating");
        wait.waitForElementVisibility(resov.verifyRatingSlideMsg, 20000, "verifyRatingSlideMsg not loaded");
        if (resov.verifyRatingSlideMsg.isDisplayed()) {
            console.log("Thank you for rating this content!");
        }
        console.log("Verifyed Succesfuly Toaster msg of Rating");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.justCompletedMsg, 20000, "justCompletedMsg not loaded");
        if (resov.justCompletedMsg.isDisplayed()) {
            console.log("You just completed");
        }
        console.log("Verifyed Just Completed Label");
        wait.waitForElementVisibility(resov.ScoreLabel, 20000, "ScoreLabel not loaded");
        if (resov.ScoreLabel.isDisplayed()) {
            console.log("SCORE");
        }
        console.log("Verifyed Score Label");
        wait.waitForElementVisibility(resov.validateScoreResult, 20000, "validateScoreResult not loaded");
        if (resov.validateScoreResult.isDisplayed()) {
            console.log("15");
        }
        console.log("Verifyed Consumed Score ");
        console.log("Verifyed Consumed Score ");
    }
    catch (Exception) {
        console.log("Failed to Consume MTF Resource and Get the Score");
    }
}

const createQuestionsWith4MCQ4FTB4MTF = () => {
    var resourcename;
    try {

        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourcename = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourcename);
        // resov.boardInResource.click();
        // browser.sleep(1000);
        // resov.firstItemInBoardInResource.click();
        // browser.sleep(1000);
        // resov.mediumInResource.click();
        // browser.sleep(1000);
        // resov.firstItemInMediumInResource.click();
        // browser.sleep(1000);
        // resov.gradeLevelInResource.click();
        // browser.sleep(1000);
        // resov.firstItemInGradeLevelInResource.click();
        // browser.sleep(1000);
        // resov.subjectInResource.click();
        // browser.sleep(1000);
        // resov.firstItemInSubjectInResource.click();
        // browser.sleep(1000);
        // resov.gradeLevelInResource.click();
        // browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();
        browser.sleep(500);

        resov.startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);

        wait.waitForElementVisibility(resov.addQuestionSet, 20000, "addQuestionSet is not available");
        resov.addQuestionSet.click();

        browser.sleep(3000);
        wait.waitForElementVisibility(resov.searchTextInQuestion, 20000, "searchTextInQuestion is not available");
        browser.sleep(2000);
        resov.searchTextInQuestion.click();
        resov.searchTextInQuestion.sendKeys("FTB");
        resov.searchIconInQuestion.click();
        browser.sleep(3500);

        resov.checkBox1InSelectQuestion.click();
        browser.sleep(2000);
        resov.checkBox2InSelectQuestion.click();
        browser.sleep(2000);
        resov.checkBox3InSelectQuestion.click();
        browser.sleep(2000);
        resov.checkBox4InSelectQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.searchTextInQuestion, 20000, "searchTextInQuestion is not available");
        browser.sleep(1000);
        resov.searchTextInQuestion.clear();
        browser.sleep(500);
        resov.searchTextInQuestion.click();
        resov.searchTextInQuestion.sendKeys("mcq");
        browser.sleep(500);
        resov.searchIconInQuestion.click();
        browser.sleep(4000);

        resov.checkBox1InSelectQuestion.click();
        browser.sleep(2000);
        resov.checkBox2InSelectQuestion.click();
        browser.sleep(2000);
        resov.checkBox3InSelectQuestion.click();
        browser.sleep(2000);
        resov.checkBox4InSelectQuestion.click();
        browser.sleep(4000);

        wait.waitForElementVisibility(resov.searchTextInQuestion, 20000, "searchTextInQuestion is not available");
        resov.searchTextInQuestion.clear();
        browser.sleep(500);
        resov.searchTextInQuestion.click();
        resov.searchTextInQuestion.sendKeys("MTF");
        browser.sleep(500);
        resov.searchIconInQuestion.click();
        browser.sleep(4000);

        resov.checkBox1InSelectQuestion.click();
        browser.sleep(2000);
        resov.checkBox2InSelectQuestion.click();
        browser.sleep(2000);
        resov.checkBox3InSelectQuestion.click();
        browser.sleep(2000);
        resov.checkBox4InSelectQuestion.click();
        browser.sleep(5000);


        wait.waitForElementVisibility(resov.nextButton, 20000, "nextButton is not available");
        resov.nextButton.click();
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        // resov.questionSetTitle.click();
        resov.questionSetTitle.sendKeys("Math test");
        browser.sleep(1000);

        browser.sleep(2000);
        // browser.executeScript("arguments[0].click();", resov.addbutton,);
        // browser.sleep(2000);
       
        // browser.sleep(5000);
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(5000);
        wait.waitForElementVisibility(resov.questionSetAddButton, 20000, "addbutton is not available");
        resov.questionSetAddButton.click();
        browser.sleep(1000);
        


        // resov.addbutton.then(function (input) {
        //     input.click();
        // });
        // browser.sleep(2000);
        // wait.waitForElementToBeClickable(resov.saveIcon, 20000, "saveIcon never loaded");
        // resov.saveIcon.click();
        // browser.sleep(1000);
        // wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, "closeButtonMsg never loaded");
        // resov.closeButtonMsg.click();
        // browser.sleep(1000);
        browser.switchTo().defaultContent();

        browser.sleep(2000);
        return resourcename;


    }
    catch (Exception) {
        console.log("Failed to create QuestionMTF ");
    }
}
const saveAndSendResouceForReview4MFM = () => {

    try {
        console.log("User is trying to save And Send Resouce For Review ");
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.sendForReview, 20000, "send for review not available");
        browser.sleep(1000);
        resov.sendForReview.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.clickAppIcon, 20000, "contuinew button not available");
        resov.clickAppIcon.click();
        wait.waitForElementVisibility(resov.checkAppIcon, 20000, "checkAppIcon button not available");
        resov.checkAppIcon.click();
        wait.waitForElementVisibility(resov.selectAppIcon, 20000, "selectAppIcon button not available");
        resov.selectAppIcon.click();
        browser.sleep(500);


        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", resov.yearOfCreation);
        wait.waitForElementVisibility(resov.yearOfCreation, 20000, "contuinew button not available");
        resov.yearOfCreation.click();
        resov.yearOfCreation.clear();
        resov.yearOfCreation.sendKeys("2020");
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.saveButton, 20000, "submitForm not available");
        resov.saveButton.click();
        browser.sleep(1000);

        console.log("User has successfully saved And Send Resouce For Review ");
    }
    catch (Exception) {
        console.log("Failed to save And Send Resouce For Review ");
    }
}
const navigateToLibraryAndSearchForResource = (resourcename) => {
    try {
        console.log("User is trying to navigate To Library And Search For Book");
        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary page not loaded");
        resov.headerLibrary.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch is not available");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(resourcename);
        resov.searchIcon.click();

        wait.waitForElementVisibility(resov.courseCard1, 20000, "courseCard1 is not available");
        resov.courseCard1.click();
        browser.sleep(2000);
    }
    catch (Exception) {
        console.log("Failed to navigate To Library And Search For Book");
    }
}
const createQuestionArrangeSequenceTemplateWithAllStyles = () => {
    var courseName;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 40000, "resourceName is not available");
        resov.resourceName.click();
        browser.sleep(2000);
        courseName = "Auto Resource" + faker.randomData().firstname;
        resov.resourceName.sendKeys(courseName);


        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        browser.sleep(2000);
        wait.waitForElementVisibility(resov.startCreating, 40000, "startCreating is not available");
        resov.startCreating.click();
        browser.sleep(2000);
        console.log('User is clicked on start creating button')
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.untitledCollection, 40000, "workSpace is not available");
        resov.untitledCollection.getText().then(function (value) {
            console.log('Created Course Name is :' + value);
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(content.addQuestionSet, 20000, "addQuestionSet is not available");
        content.addQuestionSet.click();
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.createQuestion);
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.createQuestion, 20000, "createQuestion is not available");
        resov.createQuestion.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.arrangeTemplate, 20000, "arrangeTemplate is not available");
        resov.arrangeTemplate.click();
        browser.sleep(4000);

        //  browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@frameborder='0']")));
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(2000);
        console.log('Successflly Switched into the Child Frame')
        //wait.waitForElementVisibility(resov.enterTheQuestion ,20000, "createQuestion is not available");
        resov.enterTheQuestion.click();
        //  resov.enterTheQuestion.clear();

        //        resov.enterTheQuestion.sendKeys('India Bangalore');
        resov.enterTheQuestion.sendKeys("text was",
            protractor.Key.CONTROL, "a", protractor.Key.NULL,
            "India Bangalore");
        console.log('Fail to add values')

        browser.sleep(2000);
        //     await browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        //     browser.sleep(2000);
        //     await resov.enterTheQuestion.click();
        //     await console.log("Before====== Clicked");
        //     await browser.sleep(1000);
        //    await resov.enterTheQuestion.clear();
        //     await resov.enterTheQuestion.sendKeys('India Bangalore');
        /**Latest Code ============================ */
        // await browser.sleep(2000);
        // await console.log("Before====== default content");
        // await browser.switchTo().defaultContent();
        // await console.log("switched========= to default content");
        // await browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        // await browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        // await browser.sleep(2000);
        // await console.log("switched to parent frame");
        browser.sleep(2000);
        console.log("Before====== default content");
        browser.switchTo().defaultContent();
        console.log("switched========= to default content");
        browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        browser.sleep(2000);
        console.log("switched to parent frame");
        browser.executeScript("arguments[0].scrollIntoView();", resov.enterSeq1ArrangeTemp);
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.enterSeq1ArrangeTemp, 20000, "createQuestion is not available");
        resov.enterSeq1ArrangeTemp.click();
        browser.sleep(2000);
        resov.enterSeq1ArrangeTemp.sendKeys('India');
        console.log('Entered Sequence 1');
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.enterSeq2ArrangeTemp);
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.enterSeq2ArrangeTemp, 20000, "createQuestion is not available");
        resov.enterSeq2ArrangeTemp.click();
        resov.enterSeq2ArrangeTemp.sendKeys('Bangalore');
        console.log('Entered Sequence 2');
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.addSequenceButton);
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.addSequenceButton, 20000, "createQuestion is not available");
        resov.addSequenceButton.click();
        console.log('Clicked on AddSequence Button');
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.enterSeq3ArrangeTemp);
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.enterSeq3ArrangeTemp, 20000, "createQuestion is not available");
        resov.enterSeq3ArrangeTemp.click();
        resov.enterSeq3ArrangeTemp.sendKeys('England');
        console.log('Entered Sequence 3');
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.addSequenceButton);
        wait.waitForElementToBeClickable(resov.addSequenceButton, 20000, "createQuestion is not available");
        resov.addSequenceButton.click();
        console.log('Clicked on AddSequence Button');
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.enterSeq4ArrangeTemp);
        wait.waitForElementToBeClickable(resov.enterSeq4ArrangeTemp, 20000, "createQuestion is not available");
        resov.enterSeq4ArrangeTemp.click();
        resov.enterSeq4ArrangeTemp.sendKeys('France');
        console.log('Entered Sequence 4');
        browser.sleep(2000);
        //browser.executeScript("arguments[0].scrollIntoView();", resov.deleteSetAnsewerOptions1);
        wait.waitForElementToBeClickable(resov.deleteSetAnsewerOptions2, 20000, "createQuestion is not available");
        resov.deleteSetAnsewerOptions2.click();
        console.log('Deleted Sequence 3')
        browser.sleep(2000);
        //browser.executeScript("arguments[0].scrollIntoView();", resov.deleteSetAnsewerOptions2);
        wait.waitForElementToBeClickable(resov.deleteSetAnsewerOptions1, 20000, "createQuestion is not available");
        resov.deleteSetAnsewerOptions1.click();
        console.log('Deleted Sequence 4')
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.previewRefreshIcon, 20000, "  previewRefreshIcon is not available");
        resov.previewRefreshIcon.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.createQueNext, 20000, "createQuestion is not available");
        resov.createQueNext.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterTheTitleQues, 20000, "  enterTheTitleQues is not available");
        resov.enterTheTitleQues.click();
        resov.enterTheTitleQues.clear();
        resov.enterTheTitleQues.sendKeys('Question');
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.boardInQuestion, 20000, "   boardInQuestion is not available");
        resov.boardInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        resov.selectCBSEQue.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        resov.mediumInQuestion.click();
        wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        resov.selectEnglishFITB.click();
        browser.executeScript("arguments[0].scrollIntoView();", resov.maxScore);
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        resov.gradeLevelInQuestion.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        resov.selectClass4.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "  subjectInQuestion is not available");
        resov.subjectInQuestion.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectMathematics, 20000, "  selectMathematics is not available");
        resov.selectMathematics.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.maxScore, 20000, "   maxScore is not available");
        resov.maxScore.click();
        resov.maxScore.clear();
        resov.maxScore.sendKeys('1');
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.levelInQuestion, 20000, "  levelInQuestion  is not available");
        resov.levelInQuestion.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectEasy, 20000, "  selectEasy  is not available");
        resov.selectEasy.click();

        try {
            console.log("Search for Learning outcome is present  ");
            wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
            resov.learningOutcome.click();
            wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
            resov.selectLearningOutcome.click();
        }
        catch (Exception) {
            console.log("Learning outcome is not present");
        }
        wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000, "nextButton is not available");
        resov.submitButtonInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.pickQueNextButton, 20000, "pickQueNextButton is not available");
        resov.pickQueNextButton.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("Quantitative aptitude");
        //driver.findElement(By.xpath("//input[@id='show-feedback']")).click();
        wait.waitForElementVisibility(resov.addbutton, 20000, "addbutton is not available");
        resov.addbutton.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
        resov.clicksave.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(3000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')))
        // await browser.switchTo().defaultContent();
        browser.sleep(2000);
        //   browser.sleep(4000);
        //wait.waitForElementToBeClickable(content.sendForReview,20000, "send for review not available");
        // browser.actions().mouseMove(content.sendForReview).perform();
        // content.sendForReview.click();

        browser.sleep(1000);
        return courseName;
    }



    catch (e) {
        console.log('Failed to create MCQQuestion With Immediate FeedBack');

    }


}
const ConsumeResourceAndValidateScoreForArrangeSequenceTemplate = (resourceName) => {
    try {

        browser.sleep(2000);
        console.log("To verify navigate to Course section and search course");
        wait.waitForElementVisibility(resov.headerCourse1, 20000, "headerCourse is not available");
        resov.headerCourse1.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.searchInput, 20000, "searchInput  is not available");
        resov.searchInput.click();
        resov.searchInput.sendKeys(resourceName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.searchIcon, 20000, " searchIcon is not available");
        resov.searchIcon.click();
        browser.sleep(2000);
        //expect(wait.waitForElementVisibility(resov.courseCard1))).toBeTruthy()
        console.log('Course is displayed as the result')

        resov.QuesCard.click();
        browser.sleep(4000);
        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);
        // browser.executeScript('window.scrollTo(0,2000)');
        // browser.executeScript("arguments[0].scrollIntoView();", resov.reOrderingCheck1);
        const drag = element(by.xpath("//span[contains(text(),'Bangalore')]"));
        const drop = element(by.xpath("//span[contains(text(),'India')]"));
        browser.sleep(2000);

        // browser.executeScript("arguments[0].scrollIntoView();", resov.reOrderingCheck2);
        // browser.controlFlow().execute(function () {
        //     browser.executeScript('arguments[0].scrollIntoView({block:"center"})', resov.reOrderingCheck2);

        // });
        browser.sleep(2000);
        //browser.actions().mouseMove(drop).perform();
        browser.actions().dragAndDrop(drag, drop).perform();
        browser.sleep(2000);

        // browser.actions().dragAndDrop(drop, drag).perform();
        //     wait.waitForElementVisibility(resov.reOrderingCheck2,20000, " reOrderingCheck2 is not available");
        //     browser.sleep(2000);
        console.log('Clicked on CheckOption1 in Player')
        // wait.waitForElementVisibility(resov.clickNextButtonMCQ,20000, " clickNextButtonMCQ is not available");
        resov.clickNextButtonMCQ.click();
        console.log('Clicked on Next Button for Wrong Answer in Player')

        browser.sleep(2000);


        if (resov.verifyInCorrect.isDisplayed()) {
            // Assert.assertTrue(true);
            console.log("Showing  Wrong Symbol while giving wrong answer");
            browser.sleep(2000);
            wait.waitForElementVisibility(resov.clickTryAgainButton, 20000, " clickTryAgainButton is not available");
            resov.clickTryAgainButton.click();
            console.log('Clicked on Try Again Button')
            browser.sleep(2000);
            //drag & Drop want to write hare(2&1)
            //browser.executeScript("arguments[0].scrollIntoView();", resov.reOrderingCheck1);
            browser.actions().dragAndDrop(drop, drag).perform();
            browser.sleep(2000);
            resov.clickNextButtonMCQ.click();
            console.log('Clicked on Next Button for Correct Answer in Player')
            browser.sleep(2000);

        }
        // browser.sleep(2000);
        // //drag & Drop want to write hare(2&1)
        // //browser.executeScript("arguments[0].scrollIntoView();", resov.reOrderingCheck1);
        // browser.actions().dragAndDrop(drop, drag).perform();
        // browser.sleep(2000);
        // resov.clickNextButtonMCQ.click();
        // console.log('Clicked on Next Button for Correct Answer in Player')
        // browser.sleep(2000);

        if (resov.verifyCorrect.isDisplayed()) {
            // Assert.assertTrue(true);
            console.log("Correct Answer Verified Succesfully");
        }
        browser.sleep(2000);
        // wait.waitForElementVisibility(resov.nextButton,20000, " clickNextButtonMCQ is not available");
        resov.QuesAnswernextButton.click();
        browser.sleep(3000);
        console.log('Clicked on Next Button')
        // browser.executeScript("arguments[0].scrollIntoView();", resov.rating);
        // wait.waitForElementVisibility(resov.rating,20000, " rating is not available");
        // resov.rating.click();
        browser.switchTo().defaultContent();
        // wait.waitForElementVisibility(resov.giveRatings,20000, " giveRatings is not available");
        resov.giveRatings.click();
        browser.sleep(2000);

        console.log('Give Rating');
        // wait.waitForElementVisibility(resov.submitRating,20000, " submitRating is not available");
        resov.submitRating.click();
        console.log('Click Submit in Rating Box');
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.verifyRatingSlideMsg, 40000, "attributionsInDetailPage is not available");
        resov.verifyRatingSlideMsg.getText().then(function (verifyRatingSlideMsg) {
            console.log("verify Rating Slide Msg is  :" + verifyRatingSlideMsg);
            var expectedAttributionName = "Thank you for rating this content!";
            expect(verifyRatingSlideMsg).toContain(expectedAttributionName)
            {
                console.log('Verifyed Succesfuly Toaster msg of Rating')
            }
            console.log('Verifyed Succesfuly Toaster msg of Rating : ' + verifyRatingSlideMsg);

        });
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));

        wait.waitForElementVisibility(resov.justCompletedMsg, 40000, "attributionsInDetailPage is not available");
        resov.justCompletedMsg.getText().then(function (justCompletedMsg) {
            console.log("just Completed Msg is  :" + justCompletedMsg);
            var expectedAttributionName = "You just completed";
            expect(justCompletedMsg).toContain(expectedAttributionName)
            {
                console.log('Verifyed Just Completed Label')
            }


        });
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.ScoreLabel, 40000, "attributionsInDetailPage is not available");
        resov.ScoreLabel.getText().then(function (ScoreLabel) {
            console.log("Score Label Msg is  :" + ScoreLabel);
            var expectedAttributionName = "SCORE";
            expect(ScoreLabel).toContain(expectedAttributionName)
            {
                console.log('Verifyed Score Label')
            }


        });
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.validateScoreResult, 40000, "attributionsInDetailPage is not available");
        resov.validateScoreResult.getText().then(function (validateScoreResult) {
            console.log("Verifyed Consumed Score is  :" + validateScoreResult);

        });
        browser.sleep(3000);
        console.log('MCQ Question Immediate Feedback Consumed Succesfully and Validated Score Result')
        browser.switchTo().parentFrame();
    }
    catch (Exception) {
        console.log('Failed to Consume Arranging Words Template Resource and Get the Score');
    }
}
const createQuestionReOrderingWithAllStyles = () => {
    var courseName;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();

        wait.waitForElementVisibility(resov.resourceName, 40000);
        resov.resourceName.click();
        browser.sleep(2000);
        courseName = "Auto Resource" + faker.randomData().firstname;
        resov.resourceName.sendKeys(courseName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        browser.sleep(2000);
        wait.waitForElementVisibility(resov.startCreating, 40000);
        resov.startCreating.click();
        browser.sleep(2000);
        console.log('User is clicked on start creating button')
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.untitledCollection, 40000);
        resov.untitledCollection.getText().then(function (value) {
            console.log('Created Course Name is :' + value);
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.addQuestionSet, 20000);
        resov.addQuestionSet.click();
        browser.sleep(2000);
        // wait.waitForElementVisibility(resov.searchquestions, 20000);
        // resov.searchquestions.click();
        // browser.sleep(2000);
        // wait.waitForElementVisibility(resov.clickSearchIconInQuesion, 20000);
        // resov.clickSearchIconInQuesion.click();
        // browser.sleep(2000);
        // console.log('Question is displayed from Other Tenant which already published');
        // expect(wait.waitForElementVisibility(resov.verifyCopyIconInQuestion))).toBeTruthy()
        // if (wait.waitForElementVisibility(resov.verifyCopyIconInQuestion))) {
        //     console.log('Copy Icon displayed Succesfully for Other Tenant')
        // }
        // // expect(wait.waitForElementVisibility(resov.verifyCheckboxInQuestion))).toBeTruthy()
        // if (wait.waitForElementVisibility(resov.verifyCheckboxInQuestion))) {
        //     console.log('Check Box Icon displayed Succesfully for Other Tenant')
        // }

        wait.waitForElementVisibility(resov.createQuestion, 20000);
        resov.createQuestion.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.selectReOrderingTemplate, 20000);
        resov.selectReOrderingTemplate.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.enterTheQuestion, 20000);
        resov.enterTheQuestion.click();
        browser.sleep(500);
        resov.enterTheQuestion.clear();
        browser.sleep(500);
        resov.enterTheQuestion.sendKeys("text was",
            protractor.Key.CONTROL, "a", protractor.Key.NULL,
            "India Bangalore");

        // resov.enterTheQuestion.sendKeys('India Bangalore');
        browser.sleep(2000);
        browser.switchTo().defaultContent();
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        var sentence = resov.enterSentences;
        browser.controlFlow().execute(function () {
            browser.executeScript('arguments[0].scrollIntoView({block:"center"})', sentence.getWebElement());
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterSentences, 20000);
        resov.enterSentences.click();
        resov.enterSentences.sendKeys('India Bangalore');
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.previewRefreshIcon, 20000);
        resov.previewRefreshIcon.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.createQueNext, 20000);
        resov.createQueNext.click();
        browser.sleep(3000);
        browser.switchTo().defaultContent();
        browser.sleep(500);
        browser.sleep(500);

        browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterTheTitleQues, 20000);
        resov.enterTheTitleQues.click();
        browser.sleep(2000);
        resov.enterTheTitleQues.clear();
        resov.enterTheTitleQues.sendKeys('Question');
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.boardInQuestion, 20000);
        resov.boardInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectCBSEQue, 20000);
        resov.selectCBSEQue.click();
        wait.waitForElementVisibility(resov.mediumInQuestion, 20000);
        resov.mediumInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectEnglishFITB, 20000);
        resov.selectEnglishFITB.click();
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.maxScore);
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000);
        resov.gradeLevelInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectClass4, 20000);
        resov.selectClass4.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.subjectInQuestion, 20000);
        resov.subjectInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectMathematics, 20000);
        resov.selectMathematics.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.maxScore, 20000);
        resov.maxScore.click();
        resov.maxScore.clear();
        resov.maxScore.sendKeys('1');
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.levelInQuestion, 20000);
        resov.levelInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectEasy, 20000);
        resov.selectEasy.click();
        browser.sleep(2000);
        try {
            console.log("Search for Learning outcome is present  ");
            wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
            resov.learningOutcome.click();
            wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
            resov.selectLearningOutcome.click();
        }
        catch (Exception) {
            console.log("Learning outcome is not present");
        }
        wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000);
        resov.submitButtonInQuestion.click();
        browser.sleep(2000);
        //wait.waitForElementVisibility(resov.pickQueNextButton,20000, "nextButton is not available");
        resov.pickQueNextButton.click();
        browser.sleep(2000);
        //wait.waitForElementVisibility(resov.questionSetTitle,20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("ಕನ್ನಡ");
        browser.sleep(2000);
        console.log('Question Set Title Entered in Regional Language');
        //driver.findElement(By.xpath("//input[@id='show-feedback']")).click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.addbutton, 20000);
        resov.addbutton.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000);
        resov.clicksave.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.closebutton, 20000);
        resov.closebutton.click();
        browser.sleep(2000);
        // wait.waitForElementToBeClickable(resov.sendForReview,20000, "sendForReview never loaded");
        // resov.sendForReview.click();
        return courseName;
    }

    catch (e) {
        console.log('Failed to create MCQQuestion With Immediate FeedBack');

    }
}

const reOrderingWordsWithRegionalLanguage = () => {

    var courseName;
    try {
        browser.sleep(2000);
        console.log('User is navigating to workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 40000);
        resov.workSpace.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.clickresource, 40000);
        resov.clickresource.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.resourceName, 40000);
        resov.resourceName.click();
        browser.sleep(2000);
        courseName = "Resource" + faker.randomData().firstname;
        resov.resourceName.sendKeys(courseName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        browser.sleep(2000);
        wait.waitForElementVisibility(resov.startCreating, 40000);
        resov.startCreating.click();
        browser.sleep(2000);
        console.log('User is clicked on start creating button')
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.untitledCollection, 40000);
        resov.untitledCollection.getText().then(function (value) {
            console.log('Created Course Name is :' + value);
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.addQuestionSet, 20000);
        resov.addQuestionSet.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.createQuestion, 20000);
        resov.createQuestion.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.selectReOrderingTemplate, 20000);
        resov.selectReOrderingTemplate.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.enterTheQuestion, 20000);
        browser.sleep(1000);

        resov.enterTheQuestion.click();
        browser.sleep(500);
        resov.enterTheQuestion.clear();
        browser.sleep(500);

        resov.enterTheQuestion.sendKeys("text was",
            protractor.Key.CONTROL, "a", protractor.Key.NULL,
            "India");

        //resov.enterTheQuestion.sendKeys(question.tamilQn);
        browser.sleep(2000);
        browser.switchTo().defaultContent();
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        var sentence = resov.enterSentences;
        browser.controlFlow().execute(function () {
            browser.executeScript('arguments[0].scrollIntoView({block:"center"})', sentence.getWebElement());
        });
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.enterSentences, 20000);
        resov.enterSentences.click();
        browser.sleep(2000);
        resov.enterSentences.sendKeys(question.tamilQn);
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.previewRefreshIcon, 20000);
        resov.previewRefreshIcon.click();
        browser.sleep(5000);
        wait.waitForElementVisibility(resov.createQueNext, 20000);
        browser.sleep(2000);
        resov.createQueNext.click();
        browser.sleep(2000);
        browser.switchTo().defaultContent();
        browser.sleep(500);
        browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterTheTitleQues, 20000);
        resov.enterTheTitleQues.click();
        browser.sleep(2000);
        resov.enterTheTitleQues.clear();
        resov.enterTheTitleQues.sendKeys('Question');
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.boardInQuestion, 20000);
        resov.boardInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectCBSEQue, 20000);
        resov.selectCBSEQue.click();
        wait.waitForElementVisibility(resov.mediumInQuestion, 20000);
        resov.mediumInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectEnglishFITB, 20000);
        resov.selectEnglishFITB.click();
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.maxScore);
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000);
        resov.gradeLevelInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectClass4, 20000);
        resov.selectClass4.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.subjectInQuestion, 20000);
        resov.subjectInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectMathematics, 20000);
        resov.selectMathematics.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.maxScore, 20000);
        resov.maxScore.click();
        resov.maxScore.clear();
        resov.maxScore.sendKeys('1');
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.levelInQuestion, 20000);
        resov.levelInQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectEasy, 20000);
        resov.selectEasy.click();
        browser.sleep(2000);
        try {
            console.log("Search for Learning outcome is present  ");
            wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
            resov.learningOutcome.click();
            wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
            resov.selectLearningOutcome.click();
        }
        catch (Exception) {
            console.log("Learning outcome is not present");
        }
        wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000);
        resov.submitButtonInQuestion.click();
        browser.sleep(2000);
        //wait.waitForElementVisibility(resov.pickQueNextButton,20000, "nextButton is not available");
        resov.pickQueNextButton.click();
        browser.sleep(2000);
        //wait.waitForElementVisibility(resov.questionSetTitle,20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("தமிழ்");
        browser.sleep(2000);
        console.log('Question Set Title Entered in Regional Language');
        //driver.findElement(By.xpath("//input[@id='show-feedback']")).click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.addbutton, 20000);
        resov.addbutton.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000);
        resov.clicksave.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.closebutton, 20000);
        resov.closebutton.click();
        browser.sleep(2000);
        return courseName;
    }

    catch (e) {
        console.log('Failed to create MCQQuestion With Immediate FeedBack');

    }

}

const NoDeleteOptionInSubmittedForReview = () => {
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    wait.waitForElementVisibility(content.workSpace, 20000, "workspace page not loaded");
    content.workSpace.click();


    //  browser.navigate().refresh();
    wait.waitForElementToBeClickable(resov.submittedForReview, 20000);
    resov.submittedForReview.click();
    browser.sleep(2000);
    expect(resov.deleteButton.isPresent()).toEqual(false);
    browser.sleep(1000);
}


const ConsumeResourceAndValidateScoreForReOrderingTemplate = (resourceName) => {
    try {
        browser.sleep(2000);
        console.log("To verify navigate to Course section and search course");
        wait.waitForElementVisibility(resov.headerCourse1, 20000, "headerCourse is not available");
        resov.headerCourse1.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.searchInput, 20000, "searchInput  is not available");
        resov.searchInput.click();
        resov.searchInput.sendKeys(resourceName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.searchIcon, 20000, " searchIcon is not available");
        resov.searchIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.QuesCard, 20000);
        // expect(resov.courseCard1.isDisplayed()).toBeTruthy();
        console.log('Course is displayed as the result')
        resov.QuesCard.click();


        browser.sleep(4000);
        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@id='contentPlayer']")));
        browser.sleep(2000);

        // browser.controlFlow().execute(function () {
        //     browser.executeScript('arguments[0].scrollIntoView({block:"center"})', resov.reOrderingCheck1);

        // });
        // browser.sleep(2000);
        //     browser.executeScript('window.scrollTo(0,300);').then(function () {
        //         console.log('++++++SCROLLED Down+++++');
        //     });
        //     browser.sleep(2000);
        //browser.executeScript("arguments[0].scrollIntoView();", resov.reOrderingCheck1);
        wait.waitForElementVisibility(resov.reOrderingCheck1, 20000, " reOrderingCheck1 is not available");
        browser.sleep(2000);
        resov.reOrderingCheck1.click();
        browser.sleep(2000);
        console.log('Verifying Negative scenario by giving Wrong Answer')
        console.log('Clicked on CheckOption2 in Player')
        wait.waitForElementVisibility(resov.reOrderingCheck2, 20000, " reOrderingCheck2 is not available");
        resov.reOrderingCheck2.click();
        browser.sleep(2000);
        console.log('Clicked on CheckOption1 in Player')
        wait.waitForElementVisibility(resov.clickNextButtonMCQ, 20000, " clickNextButtonMCQ is not available");
        resov.clickNextButtonMCQ.click();
        browser.sleep(2000);
        console.log('Clicked on Next Button for Wrong Answer in Player')

        if (resov.verifyInCorrect.isDisplayed()) {
            // Assert.assertTrue(true);
            console.log("Showing  Wrong Symbol while giving wrong answer");
            wait.waitForElementVisibility(resov.clickTryAgainButton, 20000, " clickTryAgainButton is not available");
            resov.clickTryAgainButton.click();
            // browser.sleep(2000);
            // browser.executeScript('window.scrollTo(0,200);').then(function () {
            //     console.log('++++++SCROLLED Down+++++');
            // });
            // browser.sleep(2000);
            console.log('Clicked on Try Again Button')
            wait.waitForElementVisibility(resov.reOrderingBackSpace, 20000, " clickTryAgainButton is not available");
            resov.reOrderingBackSpace.click();
            resov.reOrderingBackSpace.click();
            browser.sleep(2000);
            console.log('Clicked on BackSpace Button for deleting Answer')
            resov.reOrderingCheck2.click();
            browser.sleep(2000);
            console.log('Clicked on CheckOption1 Correct Answer in Player');
            resov.reOrderingCheck1.click();
            browser.sleep(2000);
            console.log('Clicked on CheckOption2 Correct Answer in Player');
            resov.clickNextButtonMCQ.click();
            browser.sleep(2000);
            console.log('Clicked on Next Button for Correct Answer in Player')
            browser.sleep(2000);
        }
        // wait.waitForElementVisibility(resov.clickTryAgainButton, 20000, " clickTryAgainButton is not available");
        // resov.clickTryAgainButton.click();
        // browser.sleep(2000);
        // console.log('Clicked on Try Again Button')
        // wait.waitForElementVisibility(resov.reOrderingBackSpace, 20000, " clickTryAgainButton is not available");
        // resov.reOrderingBackSpace.click();
        // resov.reOrderingBackSpace.click();
        // browser.sleep(2000);
        // console.log('Clicked on BackSpace Button for deleting Answer')
        // resov.reOrderingCheck2.click();
        // browser.sleep(2000);
        // console.log('Clicked on CheckOption1 Correct Answer in Player');
        // resov.reOrderingCheck1.click();
        // browser.sleep(2000);
        // console.log('Clicked on CheckOption2 Correct Answer in Player');
        // resov.clickNextButtonMCQ.click();
        // browser.sleep(2000);
        // console.log('Clicked on Next Button for Correct Answer in Player')
        // browser.sleep(2000);
        if (resov.verifyCorrect.isDisplayed()) {
            // Assert.assertTrue(true);
            console.log("Correct Answer Verified Succesfully");
            //wait.waitForElementVisibility(resov.clickNext,20000, " clickNext is not available");
            resov.clickNext.click();
            browser.sleep(2000);
            console.log('Clicked on Next Button')
        }
        // //wait.waitForElementVisibility(resov.clickNext,20000, " clickNext is not available");
        // resov.clickNext.click();
        browser.sleep(2000);
        console.log('Clicked on Next Button')
        //browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@id='htmlFrame']")));
        //browser.sleep(2000);
        console.log('Entered in to rating frame')
        browser.switchTo().defaultContent();
        browser.sleep(2000);
        // wait.waitForElementVisibility(resov.giveRatings,20000, " giveRatings is not available");
        resov.giveRatings.click();
        console.log('Give Rating');
        browser.sleep(2000);
        // wait.waitForElementVisibility(resov.submitRating,20000, " submitRating is not available");
        resov.submitRating.click();
        console.log('Click Submit in Rating Box');
        browser.sleep(4000);
        console.log('Click Submit in Rating Box');

        wait.waitForElementVisibility(resov.verifyRatingSlideMsg, 40000, "attributionsInDetailPage is not available");
        resov.verifyRatingSlideMsg.getText().then(function (verifyRatingSlideMsg) {
            console.log("verify Rating Slide Msg is  :" + verifyRatingSlideMsg);
            var expectedAttributionName = "Thank you for rating this content!";
            expect(verifyRatingSlideMsg).toContain(expectedAttributionName)
            {
                console.log('Verifyed Succesfuly Toaster msg of Rating')
            }
            console.log('Verifyed Succesfuly Toaster msg of Rating : ' + verifyRatingSlideMsg);

        });
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.executeScript("arguments[0].scrollIntoView();", resov.justCompletedMsg);
        wait.waitForElementVisibility(resov.justCompletedMsg, 40000, "attributionsInDetailPage is not available");
        resov.justCompletedMsg.getText().then(function (justCompletedMsg) {
            console.log("just Completed Msg is  :" + justCompletedMsg);
            var expectedAttributionName = "You just completed";
            expect(justCompletedMsg).toContain(expectedAttributionName)
            {
                console.log('Verifyed Just Completed Label')
            }


        });
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.ScoreLabel, 40000, "attributionsInDetailPage is not available");
        resov.ScoreLabel.getText().then(function (ScoreLabel) {
            console.log("Score Label Msg is  :" + ScoreLabel);
            var expectedAttributionName = "SCORE";
            expect(ScoreLabel).toContain(expectedAttributionName)
            {
                console.log('Verifyed Score Label')
            }


        });
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.validateScoreResult, 40000, "attributionsInDetailPage is not available");
        resov.validateScoreResult.getText().then(function (validateScoreResult) {
            console.log("Verifyed Consumed Score is  :" + validateScoreResult);

        });
        browser.sleep(2000);
        console.log('MCQ Question Immediate Feedback Consumed Succesfully and Validated Score Result')
        browser.switchTo().parentFrame();
    }
    catch (Exception) {
        console.log('Failed to Consume ReOrdering Words Template Resource and Get the Score');
    }
}

const rejectUploadedContent = (inputToReject) => {
    try {
        console.log('User  is trying to send the request changes for all upload content');
        browser.sleep(2000);
        // var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        // var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        //  browser.sleep(2000);
        console.log('User is trying to reject the content ' + inputToReject);
        console.log('User is trying to reject the content');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.workSpace, 40000, "workSpace is not available");
        content.workSpace.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.upForReview, 40000, "upForReview is not available");
        resov.upForReview.click();
        browser.sleep(3000);
        // wait.waitForElementVisibility(resov.searchForReview,40000, "searchForReview is not available");
        resov.searchForReview.click();
        resov.searchForReview.sendKeys(inputToReject);
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.contentupload, 40000, "searchedContentForPublish is not available");
        resov.contentupload.getText().then(function (content) {
            console.log('contentupload is  :' + content);

        });
        console.log('Content should render properly in the content player while reviewing the contents.')
        resov.contentupload.click();
        browser.sleep(2000);
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(9000);



        // browser.executeScript("arguments[0].scrollIntoView();", resov.clickRequestChanges);
        //wait.waitForElementVisibility(resov.clickRequestChanges, 40000, "clickRequestChanges is not available");


        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(3000);
        resov.clickRequestChanges.click();
        // resov.clickRequestChanges.getText().then(function (request) {
        //     console.log('Request is  :' + request);

        // });
        browser.sleep(4000);
        // wait.waitForElementVisibility(resov.rejectReason1,40000, "rejectReason1 is not available");
        resov.rejectReason1.click();
        // browser.sleep(2000);
        resov.rejectReason2.click();
        //browser.sleep(2000);
        resov.rejectReason3.click();
        browser.sleep(3000);
        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });

        //  browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.scrollLabelOther);
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.reviewComment, 40000, "reviewComment is not available");
        resov.reviewComment.click();
        resov.reviewComment.sendKeys('Testing')
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkRejectUploadsc, 40000, "requestChangesButton is not available");
        resov.clkRejectUploadsc.click();
        browser.sleep(2000);
        console.log(inputToReject + ' is rejected succesfully')
    }
    catch (e) {
        console.log('The reviewer failed to rejects the uploaded content, Exception');

    }

}
const createQuestionFITB = () => {
    var resourceName;
    try {
        console.log("User is trying to create Resource");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 20000, "workspace page not loaded");
        resov.workSpace.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.addQuestionSet, 20000, "addQuestionSet is not available");
        browser.sleep(1000);
        resov.addQuestionSet.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.createQuestion, 20000, "createQuestion is not available");
        resov.createQuestion.click();
        browser.sleep(1000);


        wait.waitForElementVisibility(resov.selectFITBTemplate, 20000, "selectMTFTemplate  is not available");
        resov.selectFITBTemplate.click();
        browser.sleep(8000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@title='Rich Text Editor, ftbQuestion']")));
        browser.sleep(8000);
        resov.enterTheQuestion.click();
        console.log("Before====== Clicked");
        browser.sleep(1000);
        resov.enterTheQuestion.sendKeys('2+7=[[9]]');

        browser.sleep(2000);
        console.log("Before====== default content");
        browser.switchTo().defaultContent();
        console.log("switched========= to default content");
        browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        browser.sleep(2000);
        console.log("switched to parent frame");
        browser.sleep(1000);

        // wait.waitForElementVisibility(resov.previewRefreshIcon, 20000, "previewRefreshIcon  is not available");
        //  resov.previewRefreshIcon.click();
        // console.log("Preview refresh icon MTF is passed");
        //  browser.sleep(8000);
        wait.waitForElementVisibility(resov.createQueNext, 20000, " createQueNext  is not available");
        resov.createQueNext.click();
        // browser.switchTo().defaultContent();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterTheTitleQues, 20000, "  enterTheTitleQues is not available");
        resov.enterTheTitleQues.click();
        resov.enterTheTitleQues.clear();
        resov.enterTheTitleQues.sendKeys('Question');
        wait.waitForElementVisibility(resov.boardInQuestion, 20000, "   boardInQuestion is not available");
        resov.boardInQuestion.click();

        wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        resov.selectCBSEQue.click();
        wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        resov.mediumInQuestion.click();
        wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        resov.selectEnglishFITB.click();
        wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        resov.gradeLevelInQuestion.click();
        wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        resov.selectClass4.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "  subjectInQuestion is not available");
        resov.subjectInQuestion.click();
        wait.waitForElementVisibility(resov.selectMathematics, 20000, "  selectMathematics is not available");
        resov.selectMathematics.click();
        wait.waitForElementVisibility(resov.maxScore, 20000, "   maxScore is not available");
        resov.maxScore.click();
        resov.maxScore.clear();
        resov.maxScore.sendKeys('1');
        wait.waitForElementVisibility(resov.levelInQuestion, 20000, "  levelInQuestion  is not available");
        resov.levelInQuestion.click();
        wait.waitForElementVisibility(resov.selectEasy, 20000, "  selectEasy  is not available");
        resov.selectEasy.click();
        browser.sleep(4000);

        // console.log("Search for Learning outcome is present or not ");
        // wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
        // resov.learningOutcome.click();
        // wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
        // resov.selectLearningOutcome.click();


        // wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000, "nextButton is not available");
        // resov.submitButtonInQuestion.click();
        // browser.waitForAngularEnabled(false);
        // browser.sleep(2000);
        // await browser.switchTo().defaultContent();
        // await browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));

        // browser.sleep(4000);


        browser.executeScript('arguments[0].click()', resov.saveAndCreateButton).then(async () => {
            console.log('Element has been clicked.');
        });

        browser.sleep(4000);

        // wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000, "nextButton is not available");
        //  resov.saveAndCreateButton.click();


        wait.waitForElementVisibility(resov.nextButton, 20000, "nextButton is not available");
        resov.nextButton.click();
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("Quantitative aptitude");
        wait.waitForElementVisibility(resov.addbutton, 20000, "addbutton is not available");
        resov.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.saveIcon, 20000, "saveIcon never loaded");
        resov.saveIcon.click();
        wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, "Dashboard never loaded");
        resov.closeButtonMsg.click();
        browser.sleep(1000);
        return resourceName;
    }
    catch (Exception) {
        console.log("Failed to create QuestionFITB ");
    }
}

const createQuestionMCQ = async () => {
    var resourceName;
    try {
        console.log("User is trying to create QuestionMCQ");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(resov.workSpace, 20000, "workspace page not loaded");
        resov.workSpace.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.addQuestionSet, 20000, "addQuestionSet is not available");
        browser.sleep(1000);
        resov.addQuestionSet.click();
        wait.waitForElementVisibility(resov.createQuestion, 20000, "createQuestion is not available");
        resov.createQuestion.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.selectMCQTemplate, 20000, "addQuestionSet is not available");
        resov.selectMCQTemplate.click();
        await browser.sleep(1000);
        await browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        await browser.sleep(1000);
        await wait.waitForElementVisibility(resov.enterTheQuestion, 20000, "enterTheQuestion is not available");
        await resov.enterTheQuestion.click();
        await browser.sleep(1000);
        await resov.enterTheQuestion.sendkeys("India");
        await browser.switchTo().defaultContent();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));



        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.inputAnswer1);
        wait.waitForElementVisibility(resov.inputAnswer1, 20000, "inputAnswer1 is not available");
        resov.inputAnswer1.click();
        resov.inputAnswer1.sendKeys("240,200,160");
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.markAsRightAnswer);
        wait.waitForElementVisibility(resov.markAsRightAnswer, 20000, "markAsRightAnswer is not available");
        resov.markAsRightAnswer.click();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.inputAnswer2);
        wait.waitForElementVisibility(resov.inputAnswer2, 20000, "inputAnswer2 is not available");
        resov.inputAnswer2.click();
        resov.inputAnswer2.sendKeys("200,160,240");

        //  for (var i = 2; i <= 7; i++) 
        //  {
        //     resov.addAnswerInQuestionSet.click();
        //     var l = "']";
        //     var d = "//div[@id='mcqoptions_";
        //     var xp = d + i + l;
        // }
        // resov.deleteSetAnsewerOptions.click();
        // browser.sleep(1000);
        // resov.deleteSetAnsewerOptions.click();

        wait.waitForElementVisibility(resov.previewRefreshIcon, 20000, "previewRefreshIcon  is not available");
        resov.previewRefreshIcon.click();


        wait.waitForElementToBeClickable(resov.createQueNext, 20000, " createQueNext  is not available");
        resov.createQueNext.click();
        await browser.switchTo().defaultContent();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterTheTitleQues, 20000, "  enterTheTitleQues is not available");
        resov.enterTheTitleQues.click();
        resov.enterTheTitleQues.clear();
        resov.enterTheTitleQues.sendkeys('Question');
        wait.waitForElementVisibility(resov.boardInQuestion, 20000, "   boardInQuestion is not available");
        resov.boardInQuestion.click();
        wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        resov.selectCBSEQue.click();
        wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        resov.mediumInQuestion.click();
        wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        resov.selectEnglishFITB.click();
        wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        resov.gradeLevelInQuestion.click();
        wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        resov.selectClass4.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "  subjectInQuestion is not available");
        resov.subjectInQuestion.click();
        wait.waitForElementVisibility(resov.selectMathematics, 20000, "  selectMathematics is not available");
        resov.selectMathematics.click();
        // wait.waitForElementVisibility(resov.maxScore, 20000, "   maxScore is not available");
        // resov.maxScore.click();
        // resov.maxScore.clear();
        // resov.maxScore.sendKeys('15');
        wait.waitForElementVisibility(resov.levelInQuestion, 20000, "  levelInQuestion  is not available");
        resov.levelInQuestion.click();
        wait.waitForElementVisibility(resov.selectEasy, 20000, "  selectEasy  is not available");
        resov.selectEasy.click();
        browser.sleep(1000);
        // try {
        //     console.log("Search for Learning outcome is present or not ");
        //     wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
        //     resov.learningOutcome.click();
        //     wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
        //     resov.selectLearningOutcome.click();
        // }
        // catch (Exception) {
        //     console.log("Learning outcome is not present");
        // }
        wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000, "nextButton is not available");
        resov.submitButtonInQuestion.click();

        wait.waitForElementToBeClickable(resov.nextButton, 20000, "nextButton is not available");
        resov.nextButton.click();
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("Quantitative aptitude");
        wait.waitForElementVisibility(resov.addbutton, 20000, "addbutton is not available");
        resov.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.saveIcon, 20000, "saveIcon never loaded");
        resov.saveIcon.click();
        wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, "Dashboard never loaded");
        resov.closeButtonMsg.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.closePage, 20000, "closePage never loaded");
        resov.closePage.click();
        browser.sleep(1000);
        console.log("Close the Editor");
        wait.waitForElementVisibility(resov.drafts, 20000, "drafts never loaded");
        resov.firstBook.click();
        browser.sleep(1000);
        console.log("Clicked on Resource Card");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        return resourceName;

    }
    catch (Exception) {
        console.log("Failed to create QuestionMCQ ");
    }
}

const editTheContentInDraftForCollections = () => {
    console.log("user is trying to create a course")
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
    resov.drafts.click();
    browser.sleep(5000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
    resov.imageCard.click();
    console.log('User should be able to click on the drafts section to see draft contents')
    browser.sleep(6000);
    browser.sleep(8000);


    console.log('User should be able to click on New chlid/New siblings button to add nodes into the lessonplan')

    wait.waitForElementVisibility(resov.reviewerSuggestionColl, 40000, "resov.reviewerSuggestion is not available");
    console.log('User should be able to click on the content from draft section to update/edit the content.')
    resov.reviewerSuggestionColl.click();
    browser.sleep(3000);


    wait.waitForElementVisibility(resov.reviewerSuggestionTitleColl, 40000, "resov.reviewerSuggestion is not available");
    expect(resov.reviewerSuggestionTitleColl.isDisplayed()).toBeTruthy();


    browser.sleep(1000);

    resov.revieDialogCloseColl.click();
    browser.sleep(3000);

    console.log('User has successfully verified the uploaded content in up for review page')


}
const createQuestionFITBAbhi = () => {
    var resourceName;
    try {
        // console.log("User is trying to create Resource");
        // wait.waitForElementVisibility(resov.workSpace, 20000, "workspace page not loaded");
        // resov.workSpace.click();
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        // resov.clickresource.click();

        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourceName = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourceName);


        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();


        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);


        wait.waitForElementVisibility(resov.addQuestionSet, 20000, "addQuestionSet is not available");
        browser.sleep(1000);
        resov.addQuestionSet.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.createQuestion, 20000, "createQuestion is not available");
        resov.createQuestion.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectFITBTemplate, 20000, "selectMTFTemplate  is not available");
        resov.selectFITBTemplate.click();
        browser.sleep(8000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@title='Rich Text Editor, ftbQuestion']")));
        browser.sleep(8000);
        resov.enterTheQuestion.click();
        console.log("Before====== Clicked");
        browser.sleep(1000);
        resov.enterTheQuestion.sendKeys('2+7=[[9]]');
        browser.sleep(2000);


        console.log("Before====== default content");
        //   browser.switchToParentFrame();
        browser.switchTo().defaultContent();

        //  console.log("switched========= to default content");
        //  browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        //  browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        //  browser.sleep(2000);
        //  console.log("switched to parent frame");
        browser.sleep(1000);
        // wait.waitForElementVisibility(resov.previewRefreshIcon, 20000, "previewRefreshIcon  is not available");
        //  resov.previewRefreshIcon.click();
        // console.log("Preview refresh icon MTF is passed");
        //  browser.sleep(8000);

        //   browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));

        //    browser.switchTo().defaultContent();
        browser.sleep(1000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.createQueNext, 20000, " createQueNext  is not available");
        resov.createQueNext.click();
        browser.sleep(1000);
        // browser.switchToParentFrame();

        browser.switchTo().defaultContent();
        //     //  browser.sleep(1000);
        //  browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //       browser.sleep(1000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        //     browser.sleep(1000);



        //browser.switchTo().defaultContent();
        //browser.switchToParentFrame();

        // browser.switchTo().defaultContent();
        browser.sleep(5000);


        wait.waitForElementVisibility(resov.enterTheTitleQues, 20000, "  enterTheTitleQues is not available");
        resov.enterTheTitleQues.click();
        resov.enterTheTitleQues.clear();
        resov.enterTheTitleQues.sendKeys('Question');

        wait.waitForElementVisibility(resov.boardInQuestion, 20000, "   boardInQuestion is not available");
        resov.boardInQuestion.click();
        wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        resov.selectCBSEQue.click();
        wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        resov.mediumInQuestion.click();
        wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        resov.selectEnglishFITB.click();
        wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        resov.gradeLevelInQuestion.click();
        wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        resov.selectClass4.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "  subjectInQuestion is not available");
        resov.subjectInQuestion.click();
        wait.waitForElementVisibility(resov.selectMathematics, 20000, "  selectMathematics is not available");
        resov.selectMathematics.click();
        // wait.waitForElementVisibility(resov.maxScore, 20000, "   maxScore is not available");
        // resov.maxScore.click();
        // resov.maxScore.clear();
        // resov.maxScore.sendKeys('15');
        wait.waitForElementVisibility(resov.levelInQuestion, 20000, "  levelInQuestion  is not available");
        resov.levelInQuestion.click();
        wait.waitForElementVisibility(resov.selectEasy, 20000, "  selectEasy  is not available");
        resov.selectEasy.click();
        browser.sleep(4000);
        //   browser.switchToParentFrame();
        // browser.switchTo().defaultContent();
        //  browser.switchToParentFrame();
        // console.log("Search for Learning outcome is present or not ");
        // wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
        // resov.learningOutcome.click();
        // wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
        // resov.selectLearningOutcome.click();
        // // wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000, "nextButton is not available");
        // resov.submitButtonInQuestion.click();
        // browser.waitForAngularEnabled(false);
        // browser.sleep(2000);
        // await browser.switchTo().defaultContent();
        // await browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']"));
        // browser.sleep(4000);

        //  browser.switchTo().defaultContent();
        //  browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));

        // browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@id='itemIframe']")));
        // browser.switchToParentFrame();
        //   browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.waitForAngularEnabled(false);
        browser.sleep(2000);
        // browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@id='itemIframe']")));

        // browser.switchToParentFrame();

        // browser.switchTo().frame(element(by.id("iziModal-iframe")).getWebElement());
        // browser.sleep(2000);
        // element(by.xpath("//button[@id='save-question-button']")).click();
        // browser.sleep(5000);
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(2000);
        //   browser.switchTo().defaultContent();
        //  browser.sleep(1000);
        //  browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        //    browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@class='iziModal-iframe']")));
        browser.sleep(1000);
        //   resov.saveAndCreateButton.click();
        //  browser.sleep(4000);
        //   browser.switchTo().defaultContent();
        // wait.waitForElementVisibility(resov.saveAndCreateButton, 20000, "nextButton is not available");
        //  resov.saveAndCreateButton.click();

        //  browser.executeScript('arguments[0].click()',resov.saveAndCreateButton).then(async() => {
        //     console.log('Element has been clicked.');
        // });
        //  browser.sleep(4000);
        resov.submitButtonInQuestion.click();
        browser.sleep(3000);



        // wait.waitForElementVisibility(resov.submitButtonInQuestion, 20000, "nextButton is not available");
        //  resov.saveAndCreateButton.click();
        wait.waitForElementVisibility(resov.nextButton, 20000, "nextButton is not available");
        resov.nextButton.click();
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("Quantitative aptitude");
        wait.waitForElementVisibility(resov.addbutton, 20000, "addbutton is not available");
        resov.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.saveIcon, 20000, "saveIcon never loaded");
        resov.saveIcon.click();
        wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, "Dashboard never loaded");
        resov.closeButtonMsg.click();
        browser.sleep(1000);
        return resourceName;
    }
    catch (Exception) {
        console.log("Failed to create QuestionFITB ");
    }
}
const sendForReviewTheResourceWithTVLesson = () => {
    browser.sleep(1000);
    wait.waitForElementToBeClickable(content.sendForReview, 20000, "send for review not available");
    content.sendForReview.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
    etbv.clickAppIcon.click();

    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
    etbv.allImage.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
    etbv.myImage.click();

    wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
    etbv.checkAppIcon.click();
    wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);
    wait.waitForElementVisibility(etbv.clickBoard, 30000, "board button not available");
    etbv.clickBoard.click();
    wait.waitForElementVisibility(etbv.selectBoard, 30000, "contuinew button not available");
    etbv.selectBoard.click();
    // wait.waitForElementVisibility(etbv.clickCurriculum, 30000, "clickCurriculum button not available");
    // etbv.clickCurriculum.click();
    // wait.waitForElementVisibility(etbv.selectCurriculum, 30000, "selectCurriculum button not available");
    // etbv.selectCurriculum.click();
    browser.sleep(500);
    etbv.clickMedium.click();
    wait.waitForElementVisibility(etbv.selectMedium, 30000, "contuinew button not available");
    etbv.selectMedium.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
    etbv.clickclass.click();
    wait.waitForElementVisibility(etbv.SelectClass, 30000, "contuinew button not available");
    etbv.SelectClass.click();
    browser.sleep(500);

    etbv.clicksubject.click();
    wait.waitForElementVisibility(etbv.selectSubject, 30000, "contuinew button not available");
    etbv.selectSubject.click();
    browser.sleep(500);

    browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
    wait.waitForElementVisibility(etbv.yearOfCreation, 30000, "yearOfCreation button not available");
    // etbv.yearOfCreation.click();
    etbv.yearOfCreation.clear();
    etbv.yearOfCreation.sendKeys("2020");
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickContentType);
    wait.waitForElementVisibility(etbv.clickContentType, 30000, "clickContentType button not available");
    etbv.clickContentType.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.selectTVLesson);
    etbv.selectTVLesson.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(content.saveform, 20000, "submitForm not available");
    // content.saveform.click();

    content.saveButoonReview.click();

    browser.sleep(5000);
}
const ConsumeResourceAndValidateScoreForRegionalLangReOrderingTemplate = (resourceName) => {
    try {
        browser.sleep(2000);
        console.log("To verify navigate to Course section and search course");
        wait.waitForElementVisibility(resov.headerCourse1, 20000, "headerCourse is not available");
        resov.headerCourse1.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.searchInput, 20000, "searchInput  is not available");
        resov.searchInput.click();
        resov.searchInput.sendKeys(resourceName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.searchIcon, 20000, " searchIcon is not available");
        resov.searchIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.QuesCard, 20000);
        // expect(resov.courseCard1.isDisplayed()).toBeTruthy();
        console.log('Course is displayed as the result')
        resov.QuesCard.click();
        browser.sleep(4000);
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@id='contentPlayer']")));
        browser.sleep(2000);

        browser.sleep(2000);
        //browser.executeScript("arguments[0].scrollIntoView();", resov.reOrderingCheck1);
        wait.waitForElementVisibility(resov.reOrderingLngCheck1, 20000, " reOrderingCheck1 is not available");
        browser.sleep(2000);

        resov.reOrderingLngCheck1.click();
        browser.sleep(2000);
        console.log('Verifying Negative scenario by giving Wrong Answer')
        console.log('Clicked on CheckOption2 in Player')
        wait.waitForElementVisibility(resov.reOrderingLngCheck2, 20000, " reOrderingCheck2 is not available");
        resov.reOrderingLngCheck2.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.reOrderingLngCheck3, 20000, " reOrderingCheck2 is not available");
        resov.reOrderingLngCheck3.click();
        browser.sleep(2000);
        console.log('Clicked on CheckOption1 in Player')
        wait.waitForElementVisibility(resov.clickNextButtonMCQ, 20000, " clickNextButtonMCQ is not available");
        resov.clickNextButtonMCQ.click();
        browser.sleep(2000);
        console.log('Clicked on Next Button for Wrong Answer in Player')

        if (resov.verifyInCorrect.isDisplayed()) {
            console.log("Showing  Wrong Symbol while giving wrong answer");
            wait.waitForElementVisibility(resov.clickTryAgainButton, 20000, " clickTryAgainButton is not available");
            browser.sleep(2000);
            resov.clickTryAgainButton.click();

            console.log('Clicked on Try Again Button')
            wait.waitForElementVisibility(resov.reOrderingBackSpace, 20000, " clickTryAgainButton is not available");
            browser.sleep(2000);
            resov.reOrderingBackSpace.click();
            resov.reOrderingBackSpace.click();
            resov.reOrderingBackSpace.click();
            browser.sleep(2000);
            console.log('Clicked on BackSpace Button for deleting Answer')
            resov.reOrderingLngCheck3.click();
            browser.sleep(2000);
            console.log('Clicked on CheckOption1 Correct Answer in Player');
            resov.reOrderingLngCheck2.click();
            browser.sleep(2000);
            console.log('Clicked on CheckOption1 Correct Answer in Player');
            resov.reOrderingLngCheck1.click();
            browser.sleep(2000);
            console.log('Clicked on CheckOption2 Correct Answer in Player');
            resov.clickNextButtonMCQ.click();
            browser.sleep(2000);
            console.log('Clicked on Next Button for Correct Answer in Player')
            browser.sleep(2000);
        }
        wait.waitForElementVisibility(resov.clickNext, 20000, " clickNext is not available");
        resov.clickNext.click();
        browser.sleep(2000);
        browser.sleep(2000);
        console.log('Clicked on Next Button')

        console.log('Entered in to rating frame')
        browser.switchTo().defaultContent();
        browser.sleep(2000);
        // wait.waitForElementVisibility(resov.giveRatings,20000, " giveRatings is not available");
        resov.giveRatings.click();
        console.log('Give Rating');
        browser.sleep(2000);
        // wait.waitForElementVisibility(resov.submitRating,20000, " submitRating is not available");
        resov.submitRating.click();
        console.log('Click Submit in Rating Box');
        browser.sleep(4000);
        console.log('Click Submit in Rating Box');

        wait.waitForElementVisibility(resov.verifyRatingSlideMsg, 40000, "attributionsInDetailPage is not available");
        resov.verifyRatingSlideMsg.getText().then(function (verifyRatingSlideMsg) {
            console.log("verify Rating Slide Msg is  :" + verifyRatingSlideMsg);
            var expectedAttributionName = "Thank you for rating this content!";
            expect(verifyRatingSlideMsg).toContain(expectedAttributionName)
            {
                console.log('Verifyed Succesfuly Toaster msg of Rating')
            }
            console.log('Verifyed Succesfuly Toaster msg of Rating : ' + verifyRatingSlideMsg);

        });
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.executeScript("arguments[0].scrollIntoView();", resov.justCompletedMsg);
        wait.waitForElementVisibility(resov.justCompletedMsg, 40000, "attributionsInDetailPage is not available");
        resov.justCompletedMsg.getText().then(function (justCompletedMsg) {
            console.log("just Completed Msg is  :" + justCompletedMsg);
            var expectedAttributionName = "You just completed";
            expect(justCompletedMsg).toContain(expectedAttributionName)
            {
                console.log('Verifyed Just Completed Label')
            }


        });
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.ScoreLabel, 40000, "attributionsInDetailPage is not available");
        resov.ScoreLabel.getText().then(function (ScoreLabel) {
            console.log("Score Label Msg is  :" + ScoreLabel);
            var expectedAttributionName = "SCORE";
            expect(ScoreLabel).toContain(expectedAttributionName)
            {
                console.log('Verifyed Score Label')
            }


        });
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.validateScoreResult, 40000, "attributionsInDetailPage is not available");
        resov.validateScoreResult.getText().then(function (validateScoreResult) {
            console.log("Verifyed Consumed Score is  :" + validateScoreResult);

        });
        browser.sleep(2000);
        console.log('MCQ Question Immediate Feedback Consumed Succesfully and Validated Score Result')
        browser.switchTo().parentFrame();
    }
    catch (Exception) {
        console.log('Failed to Consume ReOrdering Words Template Resource and Get the Score');
    }
}
const createResourceWithTVLesson = () => {
    var resourcename;
    try {
        console.log("User is trying to create a resource with TV lesson")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourcename = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourcename);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.selectTVLesson);
        etbv.selectTVLesson.click();
        browser.sleep(2000);

        resov.startCreating.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.addShape, 20000, "addShape is not available");
        resov.addShape.click();
        wait.waitForElementVisibility(resov.addTriangle, 20000, "addTriangle is not available");
        resov.addTriangle.click();

        // wait.waitForElementVisibility(resov.addImage, 20000, "Book page not loaded");
        // resov.addImage.click();
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.selectImg, 20000, "Book page not loaded");
        // resov.selectImg.click();
        // browser.sleep(500);
        // wait.waitForElementToBeClickable(resov.selectButton, 20000, "Book page not loaded");
        // resov.selectButton.click();
        browser.sleep(500);
        resov.addHotSpot.click();
        browser.sleep(200);
        resov.addscribblepad.click();
        // resov.addActivity.click();
        // browser.sleep(1000);
        // wait.waitForElementVisibility(resov.searchActivity,20000, "Book page not loaded");
        // wait.waitForElementVisibility(resov.addbuttonActivity,20000, "Book page not loaded");
        // resov.addbuttonActivity.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
        resov.clicksave.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(1000);
        console.log("User successfully created resource with TV lesson")
        return resourcename;
    } catch (Exception) {
        console.log("User failed to create a resource with Tv lesson");
    }
}
const fillQusetionMetaDataForm = () => {
    try {
        console.log("User is trying to fillQusetionMetaDataForm");
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.enterTheTitleQues, 40000, "  enterTheTitleQues is not available");
        resov.enterTheTitleQues.click();
        resov.enterTheTitleQues.clear();
        resov.enterTheTitleQues.sendKeys('Question');
        wait.waitForElementVisibility(resov.boardInQuestion, 20000, "   boardInQuestion is not available");
        resov.boardInQuestion.click();
        wait.waitForElementVisibility(resov.selectCBSEQue, 20000, "  selectCBSEQue is not available");
        resov.selectCBSEQue.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.mediumInQuestion, 20000, "   mediumInQuestion  is not available");
        resov.mediumInQuestion.click();
        wait.waitForElementVisibility(resov.selectEnglishFITB, 20000, " selectEnglishFITB is not available");
        resov.selectEnglishFITB.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.gradeLevelInQuestion, 20000, "   gradeLevelInQuestionis not available");
        resov.gradeLevelInQuestion.click();
        wait.waitForElementVisibility(resov.selectClass4, 20000, "  selectClass4 is not available");
        resov.selectClass4.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.subjectInQuestion, 20000, "  subjectInQuestion is not available");
        resov.subjectInQuestion.click();
        wait.waitForElementVisibility(resov.selectMathematics, 20000, "  selectMathematics is not available");
        resov.selectMathematics.click();
        wait.waitForElementVisibility(resov.maxScore, 20000, "   maxScore is not available");
        resov.maxScore.click();
        resov.maxScore.clear();
        resov.maxScore.sendKeys('1');
        wait.waitForElementVisibility(resov.levelInQuestion, 20000, "  levelInQuestion  is not available");
        resov.levelInQuestion.click();
        wait.waitForElementVisibility(resov.selectEasy, 20000, "  selectEasy  is not available");
        resov.selectEasy.click();
        browser.sleep(1000);

        //console.log("Search for Learning outcome is present or not ");
        // wait.waitForElementVisibility(resov.learningOutcome, 20000, " learningOutcome is not available");
        // resov.learningOutcome.click();
        // browser.sleep(2000);
        // wait.waitForElementVisibility(resov.selectLearningOutcome, 20000, " selectLearningOutcome  is not available");
        // resov.selectLearningOutcome.click();

        browser.waitForAngularEnabled(false);
        browser.sleep(2000);
        browser.executeScript("arguments[0].click();", resov.submitButtonInQuestion,);
        browser.sleep(5000);

        console.log("User successfully fillQusetionMetaDataForm");
    } catch (e) {
        console.log("Failed to fillQusetionMetaDataForm")
    }
}
const addPluginActivtyInResourceEditor = (ActivityName) => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.addActivity, 40000, "  addActivity is not available");
        resov.addActivity.click();
        browser.sleep(3000);


        resov.clkSearchActivity.click();
        resov.clkSearchActivity.sendKeys(ActivityName);
        browser.sleep(3000);
        resov.clkSearchButton.click();
        wait.waitForElementVisibility(resov.clkAddButtonActivty, 20000, "clkAddButtonActivty  not available");
        resov.clkAddButtonActivty.click();

    } catch (e) {
        console.log("Failed to Activity")
    }
}
const addTimerInResourceEditor = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkAddTimer, 40000, "  clkAddTimer is not available");
        resov.clkAddTimer.click();
        browser.sleep(3000);


    } catch (e) {
        console.log("Failed to addTimerInResourceEditor")
    }
}
const addProgressBarInResourceEditor = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkAddProgressBar, 40000, "  clkAddTimer is not available");
        resov.clkAddProgressBar.click();
        browser.sleep(3000);


    } catch (e) {
        console.log("Failed to addProgressBarInResourceEditor")
    }
}
const ConsumeResourceAndValidateRatingContent = (resourceName) => {

    try {
        console.log("User is trying to navigate To Library And Search For Resource");
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(resourceName);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.QuesCard, 20000, "courseCard not loaded");
        resov.QuesCard.click();

        browser.sleep(8000);



        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        console.log("Clicked on CourseCard");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.clickMcQFirstAnswer, 20000, "clickMcQFirstAnswer not loaded");
        browser.sleep(4000);
        resov.clickMcQFirstAnswer.click();
        browser.sleep(2000);
        console.log("Clicked on FirstAnswer in Player");

        resov.clickNextButtonMCQ.click();
        console.log("Clicked on Next Button in Player");
        browser.sleep(2000);

        if (resov.verifyCorrect.isDisplayed()) {
            console.log("Yes Correct ");
            resov.clickNext.click();
        }

        browser.sleep(2000);
        console.log("Clicked on Next Button");
        //    browser.switchTo().parentframe();
        browser.switchTo().defaultContent();
        browser.sleep(4000);
        //wait.waitForElementVisibility(resov.giveRatings, 20000, "giveRatings not loaded");
        resov.giveRatings.click();
        console.log("Give Rating");
        wait.waitForElementVisibility(resov.labelVeryBad, 20000);
        expect(resov.labelVeryBad.isDisplayed()).toBeTruthy();

        browser.sleep(2000);
        resov.giveRatings2.click();
        console.log("Give Rating2");
        wait.waitForElementVisibility(resov.labelBad, 20000);
        expect(resov.labelBad.isDisplayed()).toBeTruthy();

        browser.sleep(2000);
        resov.giveRatings3.click();
        console.log("Give Rating3");
        wait.waitForElementVisibility(resov.labelAverage, 20000);
        expect(resov.labelAverage.isDisplayed()).toBeTruthy();

        browser.sleep(2000);
        resov.giveRatings4.click();
        console.log("Give Rating4");
        wait.waitForElementVisibility(resov.labelGood, 20000);
        expect(resov.labelGood.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
        expect(resov.fourRatingContentLabel1.isDisplayed()).toBeTruthy();
        expect(resov.fourRatingContentLabel2.isDisplayed()).toBeTruthy();
        expect(resov.fourRatingContentLabel3.isDisplayed()).toBeTruthy();
        expect(resov.fourRatingContentLabel4.isDisplayed()).toBeTruthy();
        expect(resov.fourRatingContentLabel5.isDisplayed()).toBeTruthy();
        expect(resov.fourRatingContentLabel6.isDisplayed()).toBeTruthy();

        browser.sleep(2000);
        resov.giveRatings5.click();
        console.log("Give Rating5");
        wait.waitForElementVisibility(resov.labelExcellent, 20000);
        expect(resov.labelExcellent.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
        expect(resov.fiveRatingContentLabel1.isDisplayed()).toBeTruthy();
        expect(resov.fiveRatingContentLabel2.isDisplayed()).toBeTruthy();
        expect(resov.fiveRatingContentLabel3.isDisplayed()).toBeTruthy();
        expect(resov.fiveRatingContentLabel4.isDisplayed()).toBeTruthy();
        expect(resov.fiveRatingContentLabel5.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.clkOtherLabel);
        wait.waitForElementVisibility(resov.clkOtherLabel, 20000);
        resov.clkOtherLabel.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.othercommentSection, 20000);
        resov.othercommentSection.sendKeys('GoodPlay');
        browser.sleep(2000);



        //  wait.waitForElementVisibility(resov.submitRating, 20000, "submitRating not loaded");
        resov.submitRating.click();
        browser.sleep(2000);

        console.log("Clicked on submit Rating");
        wait.waitForElementVisibility(resov.verifyRatingSlideMsg, 20000, "verifyRatingSlideMsg not loaded");
        if (resov.verifyRatingSlideMsg.isDisplayed()) {
            console.log("Thank you for rating this content!");
        }
        console.log("Verifyed Succesfuly Toaster msg of Rating");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.justCompletedMsg, 20000, "justCompletedMsg not loaded");
        if (resov.justCompletedMsg.isDisplayed()) {
            console.log("You just completed");
        }
        console.log("Verifyed Just Completed Label");
        wait.waitForElementVisibility(resov.ScoreLabel, 20000, "ScoreLabel not loaded");
        if (resov.ScoreLabel.isDisplayed()) {
            console.log("SCORE");
        }
        console.log("Verifyed Score Label");
        wait.waitForElementVisibility(resov.validateScoreResult, 20000, "validateScoreResult not loaded");
        if (resov.validateScoreResult.isDisplayed()) {
            console.log("15");
        }
        console.log("Verifyed Consumed Score ");
        browser.switchTo().parentframe();
        browser.sleep(2000);
    }

    catch (Exception) {
        console.log("Failed to Consume MCQ Resource and Get the Score");
    }
}

const ValidateRatingContentInRegionalLang = (resourceName) => {

    try {
        console.log("User is trying to navigate To Library And Search For Resource");
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(resourceName);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.QuesCard, 20000, "courseCard not loaded");
        resov.QuesCard.click();

        browser.sleep(8000);

        resov.dropDownLang.click();
        browser.sleep(2000);

        resov.sltKannadLang.click();
        browser.sleep(2000);



        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        console.log("Clicked on CourseCard");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.clickMcQFirstAnswer, 20000, "clickMcQFirstAnswer not loaded");
        browser.sleep(4000);
        resov.clickMcQFirstAnswer.click();
        browser.sleep(2000);
        console.log("Clicked on FirstAnswer in Player");

        resov.clickNextButtonMCQ.click();
        console.log("Clicked on Next Button in Player");
        browser.sleep(2000);

        if (resov.verifyCorrect.isDisplayed()) {
            console.log("Yes Correct ");
            resov.clickNext.click();
        }

        browser.sleep(2000);
        console.log("Clicked on Next Button");
        //    browser.switchTo().parentframe();
        browser.switchTo().defaultContent();
        browser.sleep(4000);
        //wait.waitForElementVisibility(resov.giveRatings, 20000, "giveRatings not loaded");
        resov.kandRating1.click();
        console.log("Give Rating");
        wait.waitForElementVisibility(resov.KannadaLabel1, 20000);
        expect(resov.KannadaLabel1.isDisplayed()).toBeTruthy();

        browser.sleep(2000);
        resov.kandRating2.click();
        console.log("Give Rating2");
        wait.waitForElementVisibility(resov.KannadaLabel2, 20000);
        expect(resov.KannadaLabel2.isDisplayed()).toBeTruthy();

        browser.sleep(2000);
        resov.kandRating3.click();
        console.log("Give Rating3");
        wait.waitForElementVisibility(resov.KannadaLabel3, 20000);
        expect(resov.KannadaLabel3.isDisplayed()).toBeTruthy();

        browser.sleep(2000);
        resov.kandRating4.click();
        console.log("Give Rating4");
        wait.waitForElementVisibility(resov.KannadaLabel4, 20000);
        expect(resov.KannadaLabel4.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        resov.kandRating5.click();
        console.log("Give Rating5");
        wait.waitForElementVisibility(resov.KannadaLabel5, 20000);
        expect(resov.KannadaLabel5.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.KannadaSubmitBtn, 20000);
        resov.KannadaSubmitBtn.click();
        browser.sleep(2000);
        expect(resov.KannadaRatingSuccsMsg.isDisplayed()).toBeTruthy();


        console.log("Clicked on submit Rating");
        wait.waitForElementVisibility(resov.KannadaRatingSuccsMsg, 20000, "verifyRatingSlideMsg not loaded");
        if (resov.KannadaRatingSuccsMsg.isDisplayed()) {
            console.log("Thank you for rating this content!");
        }
        console.log("Verifyed Succesfuly Toaster msg of Rating");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.justCompletedMsg, 20000, "justCompletedMsg not loaded");
        if (resov.justCompletedMsg.isDisplayed()) {
            console.log("You just completed");
        }
        console.log("Verifyed Just Completed Label");
        wait.waitForElementVisibility(resov.ScoreLabel, 20000, "ScoreLabel not loaded");
        if (resov.ScoreLabel.isDisplayed()) {
            console.log("SCORE");
        }
        console.log("Verifyed Score Label");
        wait.waitForElementVisibility(resov.validateScoreResult, 20000, "validateScoreResult not loaded");
        if (resov.validateScoreResult.isDisplayed()) {
            console.log("15");
        }
        console.log("Verifyed Consumed Score ");
        browser.switchTo().parentframe();
        browser.sleep(2000);
    }

    catch (Exception) {
        console.log("Failed to Consume MCQ Resource and Get the Score");
    }
}


const ConsumeUploadContent = (resourceName, UploadType) => {

    try {
        console.log("User is trying to navigate To Library And Search For Resource");
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(resourceName);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.QuesCard, 20000, "courseCard not loaded");
        resov.QuesCard.click();

        browser.sleep(6000);
        // console.log("Clicked on CourseCard");
        // browser.executeScript('window.scrollTo(0,300);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        browser.executeScript('window.scrollTo(0,600);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        //  resov.fullscreenclk.click();

        console.log("Clicked on CourseCard");
        //    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);


        switch (UploadType) {

            case 'PDF':
                console.log('pdf')
                //  wait.waitForElementVisibility(resov.CloseButtonVideo, 20000, "CloseButtonVideo not clicked");
                //  resov.CloseButtonVideo.click();
                browser.sleep(2000);
                browser.navigate().back();
                break;

            case 'WEBM':
                console.log('WEBM')
                // wait.waitForElementVisibility(resov.CloseButtonVideo, 20000, "CloseButtonVideo not clicked");
                // resov.CloseButtonVideo.click();
                browser.navigate().back();
                browser.sleep(2000);

                break;

            case 'H5P':
                console.log('H5P')
                // wait.waitForElementVisibility(resov.CloseButtonVideo, 20000, "CloseButtonVideo not clicked");
                // resov.CloseButtonVideo.click();

                // browser.sleep(2000);
                // browser.switchTo().defaultContent();
                // browser.sleep(2000);
                // resov.giveRatings5.click();
                // console.log("Give Rating5");
                // wait.waitForElementVisibility(resov.labelExcellent, 20000);
                // expect(resov.labelExcellent.isDisplayed()).toBeTruthy();
                // browser.sleep(2000);

                // resov.submitRating.click();
                browser.navigate().back();
                browser.sleep(2000);
                break;



            case 'MP4':
                console.log('MP4')
                // wait.waitForElementVisibility(resov.htmlCloseButton, 20000, "htmlCloseButton not clicked");
                // resov.htmlCloseButton.click();
                //   wait.waitForElementVisibility(resov.CloseButtonVideo, 20000, "CloseButtonVideo not clicked");
                //    resov.CloseButtonVideo.click();
                browser.navigate().back();
                browser.sleep(2000);
                break;
            case 'HTML':
                console.log('HTML')
                // wait.waitForElementVisibility(resov.htmlCloseButton, 20000, "htmlCloseButton not clicked");
                // resov.htmlCloseButton.click();
                // wait.waitForElementVisibility(resov.CloseButtonVideo, 20000, "CloseButtonVideo not clicked");
                // resov.CloseButtonVideo.click();
                // browser.sleep(2000);
                // browser.switchTo().defaultContent();
                // browser.sleep(2000);
                // resov.giveRatings5.click();
                // console.log("Give Rating5");
                // wait.waitForElementVisibility(resov.labelExcellent, 20000);
                // expect(resov.labelExcellent.isDisplayed()).toBeTruthy();
                // browser.sleep(2000);

                // resov.submitRating.click();
                browser.navigate().back();
                browser.sleep(2000);
                break;

            case 'EPUB':
                console.log('EPUB')
                // wait.waitForElementVisibility(resov.htmlCloseButton, 20000, "htmlCloseButton not clicked");
                // resov.htmlCloseButton.click();

                browser.navigate().back();

                //             wait.waitForElementVisibility(resov.CloseButtonVideo, 20000, "CloseButtonVideo not clicked");
                //             resov.CloseButtonVideo.click();
                //             browser.sleep(2000);

                //             browser.executeScript('window.scrollTo(0,250);').then(function () {
                //                 console.log('++++++SCROLLED Down+++++');
                //             });
                //             browser.sleep(2000);
                //    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));

                //    for (i = 0; i < 7; i++) {
                //     wait.waitForElementVisibility(resov.nxtButtonUpload, 20000, "nxtButtonUpload not clicked");
                //     resov.nxtButtonUpload.click();
                //     browser.sleep(1000);

                //   }          browser.switchTo().defaultContent();
                //             browser.sleep(2000);;
                //             resov.giveRatings5.click();
                //             console.log("Give Rating5");
                //             wait.waitForElementVisibility(resov.labelExcellent, 20000);
                //             expect(resov.labelExcellent.isDisplayed()).toBeTruthy();
                //             browser.sleep(2000);

                //             resov.submitRating.click();
                //             browser.sleep(2000);
                break;
        }







    }

    catch (Exception) {
        console.log("Failed to Consume Uploaded Content Type");
    }
}

const sendForReviewTheResourceWithTVLessonInAdditionalCateg = () => {
    browser.sleep(1000);
    wait.waitForElementToBeClickable(content.sendForReview, 20000, "send for review not available");
    content.sendForReview.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
    etbv.clickAppIcon.click();

    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
    etbv.allImage.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
    etbv.myImage.click();

    wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
    etbv.checkAppIcon.click();
    wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);

    wait.waitForElementVisibility(etbv.clkAdditionalCategdropDown, 30000, "clkAdditionalCategdropDown button not available");
    etbv.clkAdditionalCategdropDown.click();
    browser.sleep(600);
    wait.waitForElementVisibility(etbv.sltTVLessonInAddCatogry, 30000, "contuinew button not available");
    etbv.sltTVLessonInAddCatogry.click();
    browser.sleep(600);


    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
    browser.sleep(500);
    wait.waitForElementVisibility(etbv.clickBoard, 30000, "board button not available");
    etbv.clickBoard.click();
    wait.waitForElementVisibility(etbv.selectBoard, 30000, "contuinew button not available");
    etbv.selectBoard.click();
    // wait.waitForElementVisibility(etbv.clickCurriculum, 30000, "clickCurriculum button not available");
    // etbv.clickCurriculum.click();
    // wait.waitForElementVisibility(etbv.selectCurriculum, 30000, "selectCurriculum button not available");
    // etbv.selectCurriculum.click();
    browser.sleep(500);
    etbv.clickMedium.click();
    wait.waitForElementVisibility(etbv.selectMedium, 30000, "contuinew button not available");
    etbv.selectMedium.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
    etbv.clickclass.click();
    wait.waitForElementVisibility(etbv.SelectClass, 30000, "contuinew button not available");
    etbv.SelectClass.click();
    browser.sleep(500);

    etbv.clicksubject.click();
    wait.waitForElementVisibility(etbv.selectSubject, 30000, "contuinew button not available");
    etbv.selectSubject.click();
    browser.sleep(500);


    browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
    wait.waitForElementVisibility(etbv.yearOfCreation, 30000, "yearOfCreation button not available");
    etbv.yearOfCreation.click();
    etbv.yearOfCreation.clear();
    etbv.yearOfCreation.sendKeys("2020");
    // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickContentType);
    // wait.waitForElementVisibility(etbv.clickContentType, 30000, "clickContentType button not available");
    // etbv.clickContentType.click();
    // browser.sleep(1000);
    // browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource2);
    // etbv.practiceResource2.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(content.saveform, 20000, "submitForm not available");
    content.saveform.click();

    //  content.saveButoonReview.click();

    browser.sleep(5000);
}
const rejectCourse = (inputToReject) => {
    try {
        console.log('User  is trying to send the request changes for all content');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000, "Creation page not loaded");
        content.upForReview.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(inputToReject);
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
        content.searchedContentForPublish.click();
        browser.sleep(8000);
        for (i = 1; i > 0; i++) {
            tpdPage.tpdPage().rejectThecourse.isPresent().then(function (result) {
                if (result === true) {
                    searchObj.rejectThecourse.click();
                    browser.sleep(2000);
                    wait.waitForElementVisibility(resov.clkcommentBox, 40000, "reviewComment is not available");
                    resov.clkcommentBox.click();
                    resov.clkcommentBox.sendKeys('Testing')
                    browser.sleep(2000);
                    wait.waitForElementVisibility(resov.clkSubmitReviw, 40000, "requestChangesButton is not available");
                    resov.clkSubmitReviw.click();
                    browser.sleep(2000);
                } else {
                    browser.refresh();
                    browser.sleep(6000);
                }
            });
            break;
        }
    }
    catch (e) {
        console.log('The reviewer failed to rejects the content, Exception');

    }

}

const VolumeMuteUnmute = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.filterSearch, 40000, "  Filter search bar is not available");
        resov.filterSearch.sendKeys("mp4");
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.searchIcon, 40000, "  searchIcon is not available");
        resov.searchIcon.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.courseCard, 40000, "  courseCard is not available");
        content.courseCard.click();
        browser.sleep(3000);
        //browser.actions().dragAndDrop(content.muteButton,content.muteButton).mouseUp().perform();
        wait.waitForElementVisibility(content.muteButton, 40000, "  muteButton is not available");
        content.muteButton.click();
        browser.sleep(3000);
        //browser.actions().dragAndDrop(content.UnmuteButton,content.UnmuteButton).mouseUp().perform();
        wait.waitForElementVisibility(content.UnmuteButton, 40000, "  UnmuteButton is not available");
        content.UnmuteButton.click();
        // browser.sleep(3000);
    } catch (e) {
        console.log("volume mute is not validated")
    }
}


const questionSetCreation = (showfdbk) => {
    var nameOfQuestion;
    try {

        console.log("User is trying to create a QuestionSet")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.clickQuestionSet, 20000, "clickQuestionSet is not available");
        resov.clickQuestionSet.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.questionInstruction, 20000, "questionInstruction is not available");
        instructions = "Please select the correct option.";
        resov.questionInstruction.sendKeys(instructions);
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.questionName, 20000, "question name is not available");
        nameOfQuestion = "General Knowledge" + faker.randomData().firstname;
        resov.questionName.sendkeys(nameOfQuestion);
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.questionDescription, 20000, "questionDescription is not available");
        description = " test Description";
        resov.questionDescription.sendKeys(description);
        browser.sleep(2000);

        wait.waitForElement(resov.questionAudienceType, 20000, "questionAudienceType is not available");
        resov.questionAudienceType.click();
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.sltQuestionAudienceType);
        wait.waitForElement(resov.sltQuestionAudienceType, 20000, "Audience Type option not selected");
        resov.sltQuestionAudienceType.click();
        browser.sleep(2000);
        if (showfdbk === "true") {
            wait.waitForElement(resov.showFeedback, 20000, "Show Feedback not selected");
            resov.showFeedback.click();
            browser.sleep(2000);
        } else if (showfdbk === "false") {
            wait.waitForElement(resov.showFeedback, 20000, "Show Feedback not selected");
            resov.showFeedback.click();
            browser.sleep(2000);
        }
        wait.waitForElement(resov.questionAuthor, 20000, "Author not available");
        author = "Ekstep";
        resov.questionAuthor.sendkeys(author);
        browser.sleep(1000);

        wait.waitForElement(resov.maxTime, 20000, "max time not present");
        maximumTime = "00:00:06";
        resov.maxTime.sendKeys(maximumTime);
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.maxTime);
        wait.waitForElement(resov.maxTime, 20000, "max time not present");
        warningTime = "00:00:03";
        resov.warningTime.sendKeys(warningTime);
        browser.sleep(1000);

        wait.waitForElement(resov.questionAuthor, 20000, "Author not edited");
        author = "Ekstep";
        resov.questionAuthor.sendKeys(author);
        browser.sleep(1000);

        wait.waitForElement(sanity.addChild, 20000, "Add Child not clicked");
        sanity.addChild.click();
        browser.sleep(2000);

        wait.waitForElement(sanity.questionDetailsTitle, 20000, "Title not found");
        childTitle = "Title 1";
        sanity.questionDetailsTitle.sendKeys(childTitle);
        browser.sleep(2000);

        wait.waitForElement(sanity.childDesc, 20000, "Description not found");
        childDescript = "child Description test";
        sanity.childDesc.sendKeys(childDescript);
        browser.sleep(2000);

        wait.waitForElement(sanity.EnterBookTag, 20000, "Tag not found");
        sanity.EnterBookTag.sendKeys("test");
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(2000);

        wait.waitForElement(sanity.saveAsDraft, 20000, "save as draft button not found");
        sanity.saveAsDraft.click();
        browser.sleep(2000);

        wait.waitForelement(resov.createNew, 20000, "Createnew button not found");
        resov.createNew.click();
        browser.sleep(2000);

        wait.waitForelement(resov.questionMCQ, 20000, "MCQ not selected")
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForelement(resov.questionMCQnextBtn, "next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForelement(resov.mCQquestionInput, "Question entry form not found");
        questioninput = "What is the capital of Srilanka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        wait.waitForElement(resov.McqOptionInput1, "option 1 input not found");
        option1 = "colombo City";
        resov.McqOptionInput1.sendkeys(option1);
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);
        wait.waitForElement(resov.McqOptionInput2, 20000, "option 2 input not found");
        option2 = "Andaman";
        resov.McqOptionInput2.sendKeys(option2);
        browser.sleep(1000);

        wait.waitForElement(resov.sltCorrectAnswer, 20000, "Checkbox not selected for correct option")
        resov.sltCorrectAnswer.click();
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);
        wait.waitForelement(resov.questionDetailsTitle, 20000, "Title not found");
        Title = "GK";
        resov.questionDetailsTitle.sendKeys(Title);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);
        wait.waitForElement(resov.questionSave, 20000, "Save button not clicked")
        resov.questionSave.click();
        browser.sleep(2000);

        wait.waitForElement(resov.sendForReviewQuestionset, 20000, "send for Review button not found");
        resov.sendForReviewQuestionset.click();
        browser.sleep(2000);

        wait.waitForElement(sanity.termsAndConditionCheckbox, 20000, "termsAndConditionCheckbox not selected");
        sanity.termsAndConditionCheckbox.click();
        browser.sleep(1000);

        wait.waitForElement(sanity.NewCoursesubmitButton, 20000, "termsAndConditionCheckbox not selected");
        sanity.NewCoursesubmitButton.click();
        browser.sleep(1000);
        return nameOfQuestion;

    } catch (e) {
        console.log("Not able to create Question Set")
    }

}

const questionSetPublish = (nameOfQuestionSet) => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000, "Creation page not loaded");
        content.upForReview.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(nameOfQuestionSet);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
        content.searchedContentForPublish.click();
        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", content.publishCourseButton);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.publishCourseButton), 20000, "Creation page not loaded");
        content.publishCourseButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.yesButtonPopup), 20000, "yesButtonPopup is not available");
        content.yesButtonPopup.click();

    } catch (e) {
        console.log("Question set not Published")
    }
}

const GuestUserPreferencesForBMCInHomePage = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);
        expect(resov.assertGusetName.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.clkPreferences, 40000, "  Filter search bar is not available");
        resov.clkPreferences.click();
        browser.sleep(5000);
        expect(resov.assertPreferencePopup.isDisplayed()).toBeTruthy()
        browser.sleep(2000);

    } catch (e) {
        console.log("volume mute is not validated")
    }
}
const LoggedUserPreferencesForBMCInHomePage = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkPreferences, 40000, "  Filter search bar is not available");
        resov.clkPreferences.click();
        browser.sleep(5000);
        expect(resov.assertPreferencePopup.isDisplayed()).toBeTruthy()
        browser.sleep(2000);

    } catch (e) {
        console.log("volume mute is not validated")
    }
}


const verifyBoardSubjectAndCategories = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);

        expect(resov.browseBySubj.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertBoardSubContnet.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        // expect(resov.featured.isDisplayed()).toBeTruthy()
        // browser.sleep(2000);
        expect(resov.browseByCategories.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertCategSubContent.isDisplayed()).toBeTruthy()
        browser.sleep(2000);

    } catch (e) {
        console.log("volume mute is not validated")
    }
}
const browseSeactionInExplorePage = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkExploreTab, 40000, "  Filter search bar is not available");
        resov.clkExploreTab.click();
        browser.sleep(4000);

        expect(resov.browseByCategories.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertCategSubContent.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.browseByBoard.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertCbseBoard.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertIgotBoard.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.browseByAudience.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertAudeinceType.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertAudeinceType2.isDisplayed()).toBeTruthy()
        browser.sleep(2000);

    } catch (e) {
        console.log("volume mute is not validated")
    }
}
const browseBoardSubSeactionInExplorePage = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkExploreTab, 40000, "  Filter search bar is not available");
        resov.clkExploreTab.click();
        browser.sleep(4000);

        expect(resov.browseByCategories.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertCategSubContent.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.browseByBoard.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertCbseBoard.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertIgotBoard.isDisplayed()).toBeTruthy()
        browser.sleep(2000);


    } catch (e) {
        console.log("volume mute is not validated")
    }
}

const VerifyHomePageWhenUserClicksBackBtnFromBrowseBySubject = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);

        expect(resov.browseBySubj.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertBoardSubContnet.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        resov.assertBoardSubContnet.click();
        browser.sleep(4000);

        expect(resov.resoCard.isDisplayed()).toBeTruthy()
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkBackInbrowseBySubjectContentCard, 40000, "  Filter search bar is not available");
        resov.clkBackInbrowseBySubjectContentCard.click();
        browser.sleep(4000);
        expect(resov.clkHome.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.browseBySubj.isDisplayed()).toBeTruthy()
        browser.sleep(2000);


    } catch (e) {
        console.log("volume mute is not validated")
    }
}
const VerifyBackBtbAfterClickingOnBrowseByAudience = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkExploreTab, 40000, "  Filter search bar is not available");
        resov.clkExploreTab.click();
        browser.sleep(4000);

        expect(resov.browseByBoard.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertCbseBoard.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertIgotBoard.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        resov.assertCbseBoard.click();
        browser.sleep(6000);

        expect(resov.resoCard.isDisplayed()).toBeTruthy()
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkBackInbrowseByBoardInExplore, 40000, "  Filter search bar is not available");
        resov.clkBackInbrowseByBoardInExplore.click();
        browser.sleep(4000);

        expect(resov.clkExploreTab.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        expect(resov.browseByBoard.isDisplayed()).toBeTruthy()
        browser.sleep(2000);

    } catch (e) {
        console.log("volume mute is not validated")
    }
}
const HomePageDisplayedOnClickCloseBtnFromBrowseBtCategory = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);

        expect(resov.browseBySubj.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertBoardSubContnet.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        resov.assertBoardSubContnet.click();
        browser.sleep(4000);

        expect(resov.resoCard.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.clkViewAllBtn, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkViewAllBtn.click();
        browser.sleep(4000);
        expect(resov.resoCard.isDisplayed()).toBeTruthy()
        browser.sleep(4000);
        expect(resov.clkCloseBtn.isDisplayed()).toBeTruthy()
        resov.clkCloseBtn.click();
        browser.sleep(4000);

        expect(resov.clkViewAllBtn.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.clkBackInbrowseBySubjectContentCard, 40000, "  Filter search bar is not available");
        resov.clkBackInbrowseBySubjectContentCard.click();

    //     browser.sleep(3000);
    //     wait.waitForElementVisibility(resov.clkExploreTab, 40000, "  Filter search bar is not available");
    //     resov.clkExploreTab.click();
    //     browser.sleep(4000);

    //     expect(resov.browseByBoard.isDisplayed()).toBeTruthy()
    //     browser.sleep(2000);
    //     expect(resov.assertCbseBoard.isDisplayed()).toBeTruthy()
    //     browser.sleep(2000);
    //     expect(resov.assertIgotBoard.isDisplayed()).toBeTruthy()
    //     browser.sleep(2000);
    //     resov.assertCbseBoard.click();
    //     browser.sleep(6000);

    //     expect(resov.resoCard.isDisplayed()).toBeTruthy()
    //     browser.sleep(4000);

    //    browser.executeScript('window.scrollTo(250,450);').then(function () {
    //         console.log('++++++SCROLLED Down+++++');
    //     });
    //     wait.waitForElementVisibility(resov.clkViewAllBtn, 40000, "  clkViewAllBtn search bar is not available");
    //     resov.clkViewAllBtn.click();
    //     browser.sleep(4000);
    //     expect(resov.resoCard.isDisplayed()).toBeTruthy()
    //     expect(resov.clkCloseBtn.isDisplayed()).toBeTruthy()
    //     resov.clkCloseBtn.click();
    //     browser.sleep(4000);
        // browser.sleep(2000);
        // browser.executeScript('window.scrollTo(0,250);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });

        // expect(resov.clkViewAllBtn.isDisplayed()).toBeTruthy()
        // browser.sleep(2000);

    } catch (e) {
        console.log("volume mute is not validated")
    }
}

const changePreferencePopup = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(7000);
        wait.waitForElementVisibility(resov.clkChangePreferenceBtn, 40000, "  Filter search bar is not available");
        resov.clkChangePreferenceBtn.click();
        browser.sleep(7000);
        expect(content.changePreference.isDisplayed()).toBeTruthy()
        browser.sleep(2000);

    } catch (e) {
        console.log("volume mute is not validated")
    }
}
const contentSearchInDraftAndEditAndValidate = (corseNames) => {
    try {

        console.log("User able to search and edit draft")
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(6000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        //resov.imageCard.click();
        resov.imageCard.getText().then(function (input) {
            expect(input).toEqual(corseNames);
            console.log("Resource Successfully saved in Draft");
        })
    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }
}

const createResourceAndValidateIcons = () => {
    var resourcename;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourcename = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourcename);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();
        browser.sleep(3000);

        resov.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(7000);
        wait.waitForElementVisibility(resov.addShapes, 20000, "addShape is not available");
        resov.addShapes.click();
        wait.waitForElementVisibility(resov.addTriangle, 20000, "addTriangle is not available");
        resov.addTriangle.click();
        wait.waitForElementVisibility(resov.addSlide, 20000, "addTriangle is not available");
        expect(resov.addSlide).toBeTruthy();
        wait.waitForElementVisibility(resov.addText, 20000, "addTriangle is not available");
        expect(resov.addText).toBeTruthy();
        // wait.waitForElementVisibility(resov.addShapes, 20000, "addTriangle is not available");
        // expect(resov.addShapes).toBeTruthy();
        wait.waitForElementVisibility(resov.addVedio, 20000, "addTriangle is not available");
        expect(resov.addVedio).toBeTruthy();

        wait.waitForElementVisibility(resov.addImage, 20000, "addImage is not available");
        expect(resov.addImage).toBeTruthy();
        wait.waitForElementVisibility(resov.addAudio, 20000, "addAudio is not available");
        expect(resov.addAudio).toBeTruthy();
        wait.waitForElementVisibility(resov.addHotSpot, 20000, "addHotSpot is not available");
        expect(resov.addHotSpot).toBeTruthy();
        wait.waitForElementVisibility(resov.addscribblepad, 20000, "addscribblepad is not available");
        expect(resov.addscribblepad).toBeTruthy();
        wait.waitForElementVisibility(resov.addActivity, 20000, "addActivity is not available");
        expect(resov.addActivity).toBeTruthy();
        wait.waitForElementVisibility(resov.addMathtext, 20000, "addMathtext is not available");
        expect(resov.addMathtext).toBeTruthy();
        wait.waitForElementVisibility(resov.addQuestionSet, 20000, "addQuestionSet is not available");
        expect(resov.addQuestionSet).toBeTruthy();

        wait.waitForElementVisibility(resov.addImage, 20000, "Book page not loaded");
        resov.addImage.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectImg, 20000, "Book page not loaded");
        resov.selectImg.click();
        browser.sleep(500);
        wait.waitForElementToBeClickable(resov.selectButton, 20000, "Book page not loaded");
        resov.selectButton.click();
        browser.sleep(500);
        resov.addHotSpot.click();
        browser.sleep(200);
        resov.addscribblepad.click();
        resov.addActivity.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.searchActivity, 20000, "Book page not loaded");
        wait.waitForElementVisibility(resov.addbuttonActivity, 20000, "Book page not loaded");
        resov.addbuttonActivity.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
        resov.clicksave.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(1000);
        console.log("User successfully created resource")
        return resourcename;
    } catch (Exception) {
        console.log("User failed to create a resource");
    }
}

const filterRetainedInAllTabs = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkDigitalTxtBooks, 40000, "  Filter search bar is not available");
        resov.clkDigitalTxtBooks.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkMediFilter, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkMediFilter.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.sltMediuFilter1, 40000, "  clkViewAllBtn search bar is not available");
        resov.sltMediuFilter1.click();
        browser.sleep(4000);
        // wait.waitForElementVisibility(resov.clkMediFilter, 40000, "  clkViewAllBtn search bar is not available");
        // resov.clkMediFilter.click();
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.sltMediuFilter2, 40000, "  clkViewAllBtn search bar is not available");
        // resov.sltMediuFilter2.click();
        // browser.sleep(4000);
        expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.ClkClassFilter, 40000, "  clkViewAllBtn search bar is not available");
        resov.ClkClassFilter.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.sltClassFilter1, 40000, "  clkViewAllBtn search bar is not available");
        resov.sltClassFilter1.click();
        browser.sleep(4000);
        // wait.waitForElementVisibility(resov.ClkClassFilter, 40000, "  clkViewAllBtn search bar is not available");
        // resov.ClkClassFilter.click();
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.sltClassFilter2, 40000, "  clkViewAllBtn search bar is not available");
        // resov.sltClassFilter2.click();
        // browser.sleep(4000);
        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);


        wait.waitForElementVisibility(resov.clkCourseHeader, 40000, "  Filter search bar is not available");
        resov.clkCourseHeader.click();
        browser.sleep(4000);
        expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkTVClasses, 40000, "  Filter search bar is not available");
        resov.clkTVClasses.click();
        browser.sleep(4000);
        expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);


    } catch (e) {
        console.log("Failed in Filter")
    }
}


const userSltFiltersInDifferntTabs = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkDigitalTxtBooks, 40000, "  Filter search bar is not available");
        resov.clkDigitalTxtBooks.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkMediFilter, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkMediFilter.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.sltMediuFilter1, 40000, "  clkViewAllBtn search bar is not available");
        resov.sltMediuFilter1.click();
        browser.sleep(4000);

        expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.ClkClassFilter, 40000, "  clkViewAllBtn search bar is not available");
        resov.ClkClassFilter.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.sltClassFilter1, 40000, "  clkViewAllBtn search bar is not available");
        resov.sltClassFilter1.click();
        browser.sleep(4000);

        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.clkResetBtn, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkResetBtn.click();
        browser.sleep(7000);


        wait.waitForElementVisibility(resov.clkCourseHeader, 40000, "  Filter search bar is not available");
        resov.clkCourseHeader.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkMediFilter, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkMediFilter.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.sltMediuFilter1, 40000, "  clkViewAllBtn search bar is not available");
        resov.sltMediuFilter1.click();
        browser.sleep(4000);

        expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.ClkClassFilter, 40000, "  clkViewAllBtn search bar is not available");
        resov.ClkClassFilter.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.sltClassFilter1, 40000, "  clkViewAllBtn search bar is not available");
        resov.sltClassFilter1.click();
        browser.sleep(4000);

        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkResetBtn, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkResetBtn.click();
        browser.sleep(7000);


        wait.waitForElementVisibility(resov.clkTVClasses, 40000, "  Filter search bar is not available");
        resov.clkTVClasses.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkMediFilter, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkMediFilter.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.sltMediuFilter1, 40000, "  clkViewAllBtn search bar is not available");
        resov.sltMediuFilter1.click();
        browser.sleep(4000);

        expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.ClkClassFilter, 40000, "  clkViewAllBtn search bar is not available");
        resov.ClkClassFilter.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.sltClassFilter1, 40000, "  clkViewAllBtn search bar is not available");
        resov.sltClassFilter1.click();
        browser.sleep(4000);
        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkResetBtn, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkResetBtn.click();
        browser.sleep(7000);

    } catch (e) {
        console.log("Failed in Filter")
    }
}

const filterRetainedFromHomeTabToAnother = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkDigitalTxtBooks, 40000, "  Filter search bar is not available");
        resov.clkDigitalTxtBooks.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkMediFilter, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkMediFilter.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.sltMediuFilter1, 40000, "  clkViewAllBtn search bar is not available");
        resov.sltMediuFilter1.click();
        browser.sleep(4000);
        // expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        // browser.sleep(3000);
        wait.waitForElementVisibility(resov.ClkClassFilter, 40000, "  clkViewAllBtn search bar is not available");
        resov.ClkClassFilter.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.sltClassFilter1, 40000, "  clkViewAllBtn search bar is not available");
        resov.sltClassFilter1.click();
        browser.sleep(4000);
        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkDigitalTxtBooks, 40000, "  Filter search bar is not available");
        resov.clkDigitalTxtBooks.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);
        expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkCourseHeader, 40000, "  Filter search bar is not available");
        resov.clkCourseHeader.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);
        expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkTVClasses, 40000, "  Filter search bar is not available");
        resov.clkTVClasses.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);
        expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        browser.refresh();
        browser.refresh();
        browser.refresh();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);
        expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        browser.sleep(3000);


    } catch (e) {
        console.log("Failed in Filter")
    }
}


const viewAllInNCERTab = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,2000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(3000);
       
        browser.sleep(3000);

        expect(resov.clkViewAllNcertSec.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkViewAllNcertSec, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkViewAllNcertSec.click();
        browser.sleep(4000);
        expect(resov.aseertCourseData.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        expect(resov.assertTextBookData.isDisplayed()).toBeTruthy()
        browser.sleep(3000);



    } catch (e) {
        console.log("Failed in NCERT Section")
    }
}


const FourCourseOrTextBookinNCERTSection = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,1500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(3000);

        expect(resov.aseertCourseData.isDisplayed()).toBeTruthy()
        browser.sleep(3000);
        expect(resov.assertTextBookData.isDisplayed()).toBeTruthy()
        browser.sleep(3000);



    } catch (e) {
        console.log("Failed in NCERT Section")
    }
}



const VerifyUserIsAbleToClickHelpAndSeeFAQ = () => {
    try {
        browser.sleep(4000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", content.HelpLink);
        browser.sleep(200);

        wait.waitForElementVisibility(content.HelpLink, 20000);
        browser.sleep(200);
        content.HelpLink.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertFAQPage), 20000, "Help Page is not Opened");
        expect(sanityPage.SanityElement().assertFAQPage.getText()).toEqual('Help');
        console.log('Help Page is Opened ');
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().LoginFAQ), 20000, "Login Category is not available");
        expect(sanityPage.SanityElement().LoginFAQ.getText()).toEqual('Login');
        console.log('Login Category is Displayed On the Page');
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().ProfileFAQ), 20000, "Profile Category is not available");
        expect(sanityPage.SanityElement().ProfileFAQ.getText()).toEqual('Profile');
        console.log('Profile Category is Displayed On the Page');
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().CourseAndCertificateFAQ), 20000, "Course & certificates Category is not available");
        expect(sanityPage.SanityElement().CourseAndCertificateFAQ.getText()).toEqual('Course & certificates');
        console.log('Course & certificates Category is Displayed On the Page');
        browser.sleep(5000);
    }
    catch (e) {
        console.log("Help Page Is Not Validated")
    }
}

const VerifyUserVisitsAndDisplyFAQ = () => {
    try {
        browser.sleep(4000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", content.HelpLink);
        browser.sleep(200);
        wait.waitForElementVisibility(content.HelpLink, 20000);
        browser.sleep(200);
        content.HelpLink.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertFAQPage), 20000, "Help Page is not Opened");
        expect(sanityPage.SanityElement().assertFAQPage.getText()).toEqual('Help');
        console.log('Help Page is Opened ');
        browser.sleep(5000);

        wait.waitForElementVisibility(content.FAQLogin, 20000);
        browser.sleep(200);
        content.FAQLogin.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertLoginQuestion), 20000, "Login FAQ is not available");
        expect(sanityPage.SanityElement().assertLoginQuestion.getText()).toEqual('I want to register on DIKSHA');
        console.log('Login Category FAQ is Displayed On the Page');
        browser.sleep(5000);

        wait.waitForElementVisibility(content.FAQProfile, 20000);
        browser.sleep(200);
        content.FAQProfile.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertProfileQuestion), 20000, "Profile FAQ is not available");
        expect(sanityPage.SanityElement().assertProfileQuestion.getText()).toEqual('I forgot my password');
        console.log('Profile Category FAQ is Displayed On the Page');
        browser.sleep(5000);

        wait.waitForElementVisibility(content.FAQCourseAndCertificate, 20000);
        browser.sleep(200);
        content.FAQCourseAndCertificate.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertCCQuestion1), 20000, "Course and Certificates FAQ 1 is not available");
        expect(sanityPage.SanityElement().assertCCQuestion1.getText()).toEqual('I want to join a course');
        console.log('Course and Certificates Category FAQ is Displayed On the Page');
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertCCQuestion2), 20000, "Course and Certificates FAQ 2 is not available");
        expect(sanityPage.SanityElement().assertCCQuestion2.getText()).toEqual('I want to contribute content to DIKSHA');
        console.log('Course and Certificates Category FAQ is Displayed On the Page');
        browser.sleep(5000);
    }
    catch (e) {
        console.log("Help Page Is Not Validated")
    }
}

const removeCollboratortoDraftAndSaveBook = (BookName) => {
    try {
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        // content.headerDropdown.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        // sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 20000, "draft Icon not available");
        resov.drafts.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().bookSeaarchBox), 20000, "search book  not available");
        sanityPage.SanityElement().bookSeaarchBox.sendKeys(BookName);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.imageCard), 20000, "First search book not available");
        content.imageCard.click();
        browser.sleep(4000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        if (searchObj.collaboratorIcon.isDisplayed()) {
            console.log("Collaborator icon is present");
            searchObj.collaboratorIcon.click();
        }
        browser.sleep(1000);
        resov.manageCollaborator.click();
        resov.removeCollaborator.click();
        console.log("User should be able to click on collaborator icon");
        // searchObj.searchCollaboratorField.sendKeys("Mentor");
        // browser.sleep(3000);
        // searchObj.suggestionCollaboratorList1.click();
        // browser.sleep(3000);
        // searchObj.searchCollaboratorField.clear();
        // searchObj.searchCollaboratorField.click();
        // searchObj.searchCollaboratorField.sendKeys("suborg");
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestionCollaboratorList1), 20000, "suggestionCollaboratorList2 not loaded");
        // searchObj.suggestionCollaboratorList1.click();
        // browser.sleep(2000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.clickDonebutton);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickDonebutton), 20000, "donebutton1 not loaded");
        searchObj.clickDonebutton.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);
        browser.sleep(2000);
    } catch (err) {
        console.log(err);
    }
}

const verifyListOfFAQsDisplayedPostClickingHelp = () => {
    try {
        browser.sleep(4000);
        wait.waitForElementVisibility(content.headerDropdown1, 20000);
        content.headerDropdown1.click();
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", content.HelpList);
        browser.sleep(200);
        wait.waitForElementVisibility(content.HelpList, 20000);
        browser.sleep(200);
        content.HelpList.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertFAQPage), 20000, "Help Page is not Opened");
        expect(sanityPage.SanityElement().assertFAQPage.getText()).toEqual('Help');
        console.log('Help Page is Opened ');
        browser.sleep(5000);

        wait.waitForElementVisibility(content.FAQLogin, 20000);
        browser.sleep(200);
        content.FAQLogin.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertLoginQuestion), 20000, "Login FAQ is not available");
        expect(sanityPage.SanityElement().assertLoginQuestion.getText()).toEqual('I want to register on DIKSHA');
        console.log('Login Category FAQ is Displayed On the Page');
        browser.sleep(5000);

        wait.waitForElementVisibility(content.FAQProfile, 20000);
        browser.sleep(200);
        content.FAQProfile.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertProfileQuestion), 20000, "Profile FAQ is not available");
        expect(sanityPage.SanityElement().assertProfileQuestion.getText()).toEqual('I forgot my password');
        console.log('Profile Category FAQ is Displayed On the Page');
        browser.sleep(5000);

        wait.waitForElementVisibility(content.FAQCourseAndCertificate, 20000);
        browser.sleep(200);
        content.FAQCourseAndCertificate.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertCCQuestion1), 20000, "Course and Certificates FAQ 1 is not available");
        expect(sanityPage.SanityElement().assertCCQuestion1.getText()).toEqual('I want to join a course');
        console.log('Course and Certificates Category FAQ is Displayed On the Page');
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertCCQuestion2), 20000, "Course and Certificates FAQ 2 is not available");
        expect(sanityPage.SanityElement().assertCCQuestion2.getText()).toEqual('I want to contribute content to DIKSHA');
        console.log('Course and Certificates Category FAQ is Displayed On the Page');
        browser.sleep(5000);

        wait.waitForElementVisibility(content.ReportOtherIssue, 20000);
        browser.sleep(200);
        content.ReportOtherIssue.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(content.selectCatagory, 20000);
        browser.sleep(200);
        content.selectCatagory.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertContent), 20000, "Conent is not Opened");
        expect(sanityPage.SanityElement().assertContent.getText()).toEqual('Content');
        console.log('Content is Opened ');
        browser.sleep(5000);

        sanityPage.SanityElement().assertContent.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(content.selectSubCatagory, 20000);
        browser.sleep(200);
        content.selectSubCatagory.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertSubContent), 20000, "Sub Conent1 is not Opened");
        expect(sanityPage.SanityElement().assertSubContent.getText()).toEqual('Content Quality');
        console.log('Sub Content1 is Opened ');
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertSubContent12), 20000, "Sub Conent2 is not Opened");
        expect(sanityPage.SanityElement().assertSubContent12.getText()).toEqual('Content not playing/downloading');
        console.log('Sub Content2 is Opened ');
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertSubContent13), 20000, "Sub Conent3 is not Opened");
        expect(sanityPage.SanityElement().assertSubContent13.getText()).toEqual('Content availability');
        console.log('Sub Content3 is Opened ');
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertSubContent14), 20000, "Sub Conent4 is not Opened");
        expect(sanityPage.SanityElement().assertSubContent14.getText()).toEqual('Other Issues');
        console.log('Sub Content4 is Opened ');
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertSubContent12), 20000, "Sub Conent2 is not Opened");
        expect(sanityPage.SanityElement().assertSubContent12.getText()).toEqual('Content not playing/downloading');
        sanityPage.SanityElement().assertSubContent12.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(content.TextArea, 20000);
        browser.sleep(200);
        content.TextArea.sendKeys("Unable To Download");
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED DOWN+++++');
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitFeedback), 20000, "Submit Feedbak Button Is Not Available");
        wait.waitForElementVisibility(content.submitFeedback, 20000);
        browser.sleep(2000);
        content.submitFeedback.click();
        browser.sleep(3000);

        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        wait.waitForElementVisibility(content.ReportOtherIssue, 20000);
        browser.sleep(200);
        content.ReportOtherIssue.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(content.selectCatagory, 20000);
        browser.sleep(200);
        content.selectCatagory.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertLoginReg), 20000, "Login/Registration Category is not Opened");
        expect(sanityPage.SanityElement().assertLoginReg.getText()).toEqual('Login/Registration');
        console.log('Login/Registration ');
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertLoginReg), 20000, "Login/Registration Category is not Opened");
        sanityPage.SanityElement().assertLoginReg.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(content.selectSubCatagory, 20000);
        browser.sleep(200);
        content.selectSubCatagory.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertSubCert), 20000, "Certificate Related Sub Category is not Opened");
        expect(sanityPage.SanityElement().assertSubCert.getText()).toEqual('Certificate related');
        sanityPage.SanityElement().assertSubCert.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(content.TextArea, 20000);
        browser.sleep(200);
        content.TextArea.sendKeys("Corrections Required");
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED DOWN+++++');
        });

        wait.waitForElementVisibility(content.submitFeedback, 20000);
        browser.sleep(200);
        content.submitFeedback.click();
        browser.sleep(3000);

        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    }
    catch (e) {
        console.log("Help Page Is Not Validated")
    }
}

const createSubjectiveQuestionSet = () => {
    var questionName;
    try {

        console.log("User is trying to add question Set On Content Creator");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickQuestionSet, 20000, "clickresource is not available");
        resov.clickQuestionSet.click();
        wait.waitForElementVisibility(resov.QuestionName, 20000, "resourceName is not available");
        questionName = "QuestionA" + faker.randomData().firstname;
        resov.QuestionName.click();
        resov.QuestionName.clear();
        resov.QuestionName.sendKeys(questionName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterDescription, 20000, "Description Field is not available");
        resov.enterDescription.sendKeys('Desc');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.enterInstruction, 20000, "Instruction Field is not available");
        resov.enterInstruction.sendKeys('Answer All');
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AdditionalCategory, 20000, "Dropdown is not available");
        resov.AdditionalCategory.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selAdditionalCategory, 20000, "Selectable Option is not available");
        resov.selAdditionalCategory.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selBoard, 20000, "Board Dropdown is not available");
        resov.selBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selBoardValue, 20000, "Selectable Board Value is not available");
        resov.selBoardValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.dropdownMedium, 20000, "Selectable Board Value is not available");
        resov.dropdownMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMedium3, 20000, "Selectable Board Value is not available");
        resov.selectMedium3.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.selectClass, 20000, "Selectable Class Value is not available");
        resov.selectClass.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selectSubject1, 20000, "Selectable Subject Value is not available");
        resov.selectSubject1.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,850);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.selectAudience, 20000, "Selectable Audience Value is not available");
        resov.selectAudience.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.maxHour, 20000, "Selectable Max Hour Value is not available");
        resov.maxHour.click();
        resov.maxHour.sendKeys('01');
        browser.sleep(2000);

        resov.maxHour.sendKeys(protractor.Key.TAB, '02');

        resov.maxHour.sendKeys(protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, '01');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        wait.waitForElementVisibility(resov.createNew1, 20000, "Createnew button not found");
        resov.createNew1.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionSubjective, 20000, "MCQ Option not found");
        resov.questionSubjective.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(2000);


        browser.sleep(2000);



        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title = "GK";
        resov.questionDetailsTitle.sendKeys(Title);
        browser.sleep(4000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);
        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(2000);

    }
    catch (e) {
        console.log("Unable To Create Question Set and Add Timer")
    }
}


const addQuestionSetAndTimerWithWarningTime = () => {
    var questionName;
    try {

        console.log("User is trying to add question Set On Content Creator");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickQuestionSet, 20000, "clickresource is not available");
        resov.clickQuestionSet.click();
        wait.waitForElementVisibility(resov.QuestionName, 20000, "resourceName is not available");
        // questionName = "QuestionA" + faker.randomData().firstname;
        questionName = "AutomationSetDec10";
        resov.QuestionName.click();
        resov.QuestionName.clear();
        resov.QuestionName.sendKeys(questionName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterDescription, 20000, "Description Field is not available");
        resov.enterDescription.sendKeys('Desc');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.enterInstruction, 20000, "Instruction Field is not available");
        resov.enterInstruction.sendKeys('Answer All');
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AdditionalCategory, 20000, "Dropdown is not available");
        resov.AdditionalCategory.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selAdditionalCategory, 20000, "Selectable Option is not available");
        resov.selAdditionalCategory.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selBoard, 20000, "Board Dropdown is not available");
        resov.selBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selBoardValue, 20000, "Selectable Board Value is not available");
        resov.selBoardValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.dropdownMedium, 20000, "Selectable Board Value is not available");
        resov.dropdownMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMedium3, 20000, "Selectable Board Value is not available");
        resov.selectMedium3.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.selectClass, 20000, "Selectable Class Value is not available");
        resov.selectClass.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selectSubject1, 20000, "Selectable Subject Value is not available");
        resov.selectSubject1.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,850);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.selectAudience, 20000, "Selectable Audience Value is not available");
        resov.selectAudience.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.maxHour, 20000, "Selectable Max Hour Value is not available");
        resov.maxHour.click();
        resov.maxHour.sendKeys('00');
        browser.sleep(2000);

        resov.maxHour.sendKeys(protractor.Key.TAB, '04');

        resov.maxHour.sendKeys(protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, '01');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc1.sendKeys("CdildDesc");
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        for (var i = 1; i <= 2; i++) {

            wait.waitForElementVisibility(resov.createNew1, 20000, "Createnew button not found");
            resov.createNew1.click();
            browser.sleep(3000);

            wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
            resov.questionMCQ.click();
            browser.sleep(2000);

            wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
            resov.questionMCQnextBtn.click();
            browser.sleep(4000);
            // wait.waitForElementVisibility(resov.addImageQuestionSet, 20000,"Add image utton is not visible");
            // resov.addImageQuestionSet.click();
            // browser.sleep(4000);
            // wait.waitForElementVisibility(resov.selectImageInQuesSet, 20000,"select image is not possible");
            // resov.selectImageInQuesSet.click();
            // browser.sleep(5000);
            // wait.waitForElementVisibility(resov.clickImage, 20000,"image is not clickable");
            // resov.clickImage.click();
            // browser.sleep(5000);
            // wait.waitForElementVisibility(resov.clickZoom, 20000, "zoom button is not clickable");
            // resov.clickZoom.click();
            // browser.sleep(5000);
            wait.waitForElementVisibility(searchObj.boldKeyButton, 2000, "Bold key not found");
            searchObj.boldKeyButton.click();
            browser.sleep(3000);
            wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
            questioninput = "What is the capital of Karnataka?"
            resov.mCQquestionInput.sendKeys(questioninput);
            browser.sleep(4000);//,selectImageInQuesSet,clickImage,clickZoom,
            wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
            option1 = "Bangalore"
            resov.McqOptionInput1.sendKeys(option1);
            browser.sleep(1000);

            browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

            wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
            option2 = "Mangalore"
            resov.McqOptionInput22.sendKeys(option2);
            browser.sleep(2000);

            browser.executeScript('window.scrollTo(0,0);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });

            browser.sleep(2000);

            wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
            resov.sltCorrectAnswer1.click();
            browser.sleep(2000);


            browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

            wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
            Title = "Ques " + i;
            resov.questionDetailsTitle.sendKeys(Title);
            browser.sleep(2000);




            browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);
            wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
            resov.questionSave.click();
            browser.sleep(4000);

            sanityPage.SanityElement().clkSection.click();
            browser.sleep(2000);


        }
    }
    catch (e) {
        console.log("Unable To Create Question Set and Add Timer")
    }
}

const AlertTimeIsDisplayed = () => {
    try {

        browser.sleep(2000);
        expect(resov.previewIcon1.isDisplayed()).toBeTruthy();
        console.log('Preview Icon Is Displayed ');
        browser.sleep(2000);
        resov.previewIcon1.click();
        browser.sleep(5000);

        expect(resov.alertTimeOn.isDisplayed()).toBeTruthy();
        console.log('Alert Time is Displayed On Question Set Preview ');

        browser.sleep(2000);

    }
    catch (e) {
        console.log("Alert Time is Not Displayed On Question Set ")
    }
}

const verifyWarningTimeDisplayed = () => {
    try {

        browser.sleep(2000);
        expect(resov.previewIcon1.isDisplayed()).toBeTruthy();
        console.log('Preview Icon Is Displayed ');
        browser.sleep(2000);
        resov.previewIcon1.click();
        browser.sleep(5000);

        // expect(resov.alertTimeOn1.isDisplayed()).toBeTruthy();
        // console.log('Alert Time is Displayed On Question Set Preview ');

        browser.sleep(2000);

        browser.sleep(2000);
        expect(resov.nextSlideIcon.isDisplayed()).toBeTruthy();
        console.log('Next Slide Icon Is Displayed ');
        browser.sleep(2000);
        resov.nextSlideIcon.click();
        browser.sleep(500);
        resov.nextSlideIcon.click();
        browser.sleep(60000);
        browser.sleep(10000);

        expect(resov.warningTime1.isPresent()).toBe(true);
        console.log('Warning Time is Displayed On Question Set Preview ');
        browser.sleep(2000);

        expect(resov.warningTime3.isPresent()).toBe(true);
        console.log('Warning Time is Displayed On Question Set Preview ');
        browser.sleep(2000);

    }
    catch (e) {
        console.log("Alert Time is Not Displayed On Question Set ")
    }
}


const addQuestionSetAndTimer = () => {
    var questionName;
    try {

        console.log("User is trying to add question Set On Content Creator");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickQuestionSet, 20000, "clickresource is not available");
        resov.clickQuestionSet.click();
        wait.waitForElementVisibility(resov.QuestionName, 20000, "resourceName is not available");
        questionName = "QuestionA" + faker.randomData().firstname;
        resov.QuestionName.click();
        resov.QuestionName.clear();
        resov.QuestionName.sendKeys(questionName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterDescription, 20000, "Description Field is not available");
        resov.enterDescription.sendKeys('Desc');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.enterInstruction, 20000, "Instruction Field is not available");
        resov.enterInstruction.sendKeys('Answer All');
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AdditionalCategory, 20000, "Dropdown is not available");
        resov.AdditionalCategory.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selAdditionalCategory, 20000, "Selectable Option is not available");
        resov.selAdditionalCategory.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selBoard, 20000, "Board Dropdown is not available");
        resov.selBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selBoardValue, 20000, "Selectable Board Value is not available");
        resov.selBoardValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.dropdownMedium, 20000, "Selectable Board Value is not available");
        resov.dropdownMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMedium3, 20000, "Selectable Board Value is not available");
        resov.selectMedium3.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.selectClass, 20000, "Selectable Class Value is not available");
        resov.selectClass.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selectSubject1, 20000, "Selectable Subject Value is not available");
        resov.selectSubject1.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,850);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.selectAudience, 20000, "Selectable Audience Value is not available");
        resov.selectAudience.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.maxHour, 20000, "Selectable Max Hour Value is not available");
        resov.maxHour.click();
        resov.maxHour.sendKeys('01');
        browser.sleep(2000);


        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        wait.waitForElementVisibility(resov.createNew1, 20000, "Createnew button not found");
        resov.createNew1.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

        wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
        option2 = "Mangalore"
        resov.McqOptionInput22.sendKeys(option2);
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(2000);

        wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
        resov.sltCorrectAnswer1.click();
        browser.sleep(2000);


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title = "GK";
        resov.questionDetailsTitle.sendKeys(Title);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);
        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(2000);

    }
    catch (e) {
        console.log("Unable To Create Question Set and Add Timer")
    }
}

const verifyQuestionSet = () => {
    var questionName;
    try {

        console.log("User is trying to add question Set On Content Creator");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clickQuestionSet), 20000, "workspace page not loaded");
        expect(resov.clickQuestionSet.isPresent()).toBe(true).then(function () {
            resov.clickQuestionSet.getText().then(function (input) {
                console.log(input + "is validated.");
            })
        })
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.assertquestionSet), 20000, "workspace page not loaded");
        resov.clickQuestionSet.click();
        browser.sleep(11000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.QuestionName, 20000, "resourceName is not available");
        questionName = "QuestionA" + faker.randomData().firstname;
        resov.QuestionName.click();
        resov.QuestionName.clear();
        resov.QuestionName.sendKeys(questionName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterDescription, 20000, "Description Field is not available");
        resov.enterDescription.sendKeys('Desc');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.enterInstruction, 20000, "Instruction Field is not available");
        resov.enterInstruction.sendKeys('Answer All');
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AdditionalCategory, 20000, "Dropdown is not available");
        resov.AdditionalCategory.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selAdditionalCategory, 20000, "Selectable Option is not available");
        resov.selAdditionalCategory.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selBoard, 20000, "Board Dropdown is not available");
        resov.selBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selBoardValue, 20000, "Selectable Board Value is not available");
        resov.selBoardValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.dropdownMedium, 20000, "Selectable Board Value is not available");
        resov.dropdownMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMedium3, 20000, "Selectable Board Value is not available");
        resov.selectMedium3.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.selectClass, 20000, "Selectable Class Value is not available");
        resov.selectClass.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selectSubject1, 20000, "Selectable Subject Value is not available");
        resov.selectSubject1.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,850);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.selectAudience, 20000, "Selectable Audience Value is not available");
        resov.selectAudience.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.maxHour, 20000, "Selectable Max Hour Value is not available");
        resov.maxHour.click();
        resov.maxHour.sendKeys('00');
        browser.sleep(2000);

        browser.sleep(2000);
        resov.maxHour.sendKeys(protractor.Key.TAB, '02');

        resov.maxHour.sendKeys(protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, '01');
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetsummaryType), 20000, "workspace page not loaded");
        content.questionSetsummaryType.click();
        browser.sleep(11000);
        content.summaryTypeValues.getText().then(function (input) {
            console.log(input);
        })

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        wait.waitForElementVisibility(resov.createNew1, 20000, "Createnew button not found");
        resov.createNew1.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionSubjective, 20000, "MCQ Option not found");
        resov.questionSubjective.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(2000);


        browser.sleep(2000);



        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title = "GK";
        resov.questionDetailsTitle.sendKeys(Title);
        browser.sleep(4000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);
        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(2000);

    }
    catch (e) {
        console.log("Unable To Create Question Set and Add Timer")
    }
}
const createQuestionSetWithDifferentLayouts = () => {
    var questionName;
    try {

        console.log("User is trying to add question Set On Content Creator");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickQuestionSet, 20000, "clickresource is not available");
        resov.clickQuestionSet.click();
        wait.waitForElementVisibility(resov.QuestionName, 20000, "resourceName is not available");
        questionName = "QuestionA" + faker.randomData().firstname;
        resov.QuestionName.click();
        resov.QuestionName.clear();
        resov.QuestionName.sendKeys(questionName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterDescription, 20000, "Description Field is not available");
        resov.enterDescription.sendKeys('Desc');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.enterInstruction, 20000, "Instruction Field is not available");
        resov.enterInstruction.sendKeys('Answer All');
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AdditionalCategory, 20000, "Dropdown is not available");
        resov.AdditionalCategory.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selAdditionalCategory, 20000, "Selectable Option is not available");
        resov.selAdditionalCategory.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selBoard, 20000, "Board Dropdown is not available");
        resov.selBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selBoardValue, 20000, "Selectable Board Value is not available");
        resov.selBoardValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.dropdownMedium, 20000, "Selectable Board Value is not available");
        resov.dropdownMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMedium3, 20000, "Selectable Board Value is not available");
        resov.selectMedium3.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.selectClass, 20000, "Selectable Class Value is not available");
        resov.selectClass.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selectSubject1, 20000, "Selectable Subject Value is not available");
        resov.selectSubject1.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,850);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.selectAudience, 20000, "Selectable Audience Value is not available");
        resov.selectAudience.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.maxHour, 20000, "Selectable Max Hour Value is not available");
        resov.maxHour.click();
        resov.maxHour.sendKeys('01');
        browser.sleep(2000);


        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkShuffle, 20000, "Createnew button not found");
        resov.clkShuffle.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

        wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
        option2 = "Mangalore"
        resov.McqOptionInput22.sendKeys(option2);
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AddOption, 2000, "Question entry form not found");
        resov.AddOption.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.mcQOptionInput3, 2000, "Question entry form not found");
        option3 = "Udupi"
        resov.mcQOptionInput3.sendKeys(option3);
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AddOption, 2000, "Question entry form not found");
        resov.AddOption.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.mcQOptionInput4, 2000, "Question entry form not found");
        option4 = "Madikeri"
        resov.mcQOptionInput4.sendKeys(option4);
        browser.sleep(2000);


        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(2000);

        wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
        resov.sltCorrectAnswer1.click();
        browser.sleep(2000);


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title1 = "GK1";
        resov.questionDetailsTitle.sendKeys(Title1);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);

        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkSection, 20000, "Selection button not found");
        resov.clkSection.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.selectGrid, 2000, "Grid Option Not Found");
        resov.selectGrid.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

        wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
        option2 = "Mangalore"
        resov.McqOptionInput22.sendKeys(option2);
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AddOption, 2000, "Question entry form not found");
        resov.AddOption.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.mcQOptionInput3, 2000, "Question entry form not found");
        option3 = "Udupi"
        resov.mcQOptionInput3.sendKeys(option3);
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AddOption, 2000, "Question entry form not found");
        resov.AddOption.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.mcQOptionInput4, 2000, "Question entry form not found");
        option4 = "Madikeri"
        resov.mcQOptionInput4.sendKeys(option4);
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(2000);

        wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
        resov.sltCorrectAnswer1.click();
        browser.sleep(2000);


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title2 = "GK2";
        resov.questionDetailsTitle.sendKeys(Title2);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);

        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkSection, 20000, "Selection button not found");
        resov.clkSection.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);



        wait.waitForElementVisibility(resov.selectHoriz, 2000, "Question entry form not found");
        resov.selectHoriz.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

        wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
        option2 = "Mangalore"
        resov.McqOptionInput22.sendKeys(option2);
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AddOption, 2000, "Question entry form not found");
        resov.AddOption.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.mcQOptionInput3, 2000, "Question entry form not found");
        option3 = "Udupi"
        resov.mcQOptionInput3.sendKeys(option3);
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AddOption, 2000, "Question entry form not found");
        resov.AddOption.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.mcQOptionInput4, 2000, "Question entry form not found");
        option4 = "Madikeri"
        resov.mcQOptionInput4.sendKeys(option4);
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(2000);

        wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
        resov.sltCorrectAnswer1.click();
        browser.sleep(2000);


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title3 = "GK3";
        resov.questionDetailsTitle.sendKeys(Title3);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);

        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(3000);

    }
    catch (e) {
        console.log("Unable To Create Question Set and Add Image")
    }
}


const verifTypeOfLayoutCreated = () => {

    wait.waitForElementVisibility(resov.clkSection, 20000, "Select button not found");
    resov.clkSection.click();
    browser.sleep(3000);

    wait.waitForElementVisibility(resov.clkVerticalSet, 20000, "Vertical Question Set not found");
    resov.clkVerticalSet.click();
    browser.sleep(3000);


    expect(resov.opt1Vertical.isDisplayed()).toBeTruthy();
    console.log('Options Added Vertically ');
    browser.sleep(2000);

    expect(resov.opt4Vertical.isDisplayed()).toBeTruthy();
    console.log('Options Added Vertically ');
    browser.sleep(2000);

    wait.waitForElementVisibility(resov.clkGridSet, 20000, "Grid Question Set not found");
    resov.clkGridSet.click();
    browser.sleep(3000);

    expect(resov.opt1Grid.isDisplayed()).toBeTruthy();
    console.log('Options are Added In Grid Manner ');
    browser.sleep(2000);

    expect(resov.opt4Grid.isDisplayed()).toBeTruthy();
    console.log('Options are Added In Grid Manner ');
    browser.sleep(2000);

    wait.waitForElementVisibility(resov.clkHorizSet, 20000, "Horizontal Question Set not found");
    resov.clkHorizSet.click();
    browser.sleep(3000);

    expect(resov.opt1Horiz.isDisplayed()).toBeTruthy();
    console.log('Options are Added Horizontally ');
    browser.sleep(2000);

    expect(resov.opt4Horiz.isDisplayed()).toBeTruthy();
    console.log('Options are Added Horizontally ');
    browser.sleep(2000);

}

const previewAndConsumeQuestionSet = () => {
    browser.sleep(2000);
    expect(resov.previewIcon1.isDisplayed()).toBeTruthy();
    console.log('Preview Icon Is Displayed On Preview ');
    browser.sleep(2000);
    resov.previewIcon1.click();
    browser.sleep(5000);

    expect(resov.nextIcon1.isDisplayed()).toBeTruthy();
    console.log('Next Slide Icon Is Displayed On Preview');
    browser.sleep(2000);
    resov.nextIcon1.click();
    browser.sleep(2000);

    resov.nextIcon1.click();
    browser.sleep(2000);

    resov.ansVertical.click();
    browser.sleep(6000);

    expect(resov.nextIcon2.isDisplayed()).toBeTruthy();
    console.log('Next Slide Icon Is Displayed On Preview');
    browser.sleep(2000);
    resov.nextIcon2.click();
    browser.sleep(500);

    resov.nextIcon2.click();
    browser.sleep(500);

    resov.ansGrid.click();
    browser.sleep(6000);

    expect(resov.nextIcon2.isDisplayed()).toBeTruthy();
    console.log('Next Slide Icon Is Displayed On Preview');
    browser.sleep(2000);
    resov.nextIcon2.click();
    browser.sleep(500);
    resov.nextIcon2.click();
    browser.sleep(500);
    resov.ansHoriz.click();
    browser.sleep(6000);

    expect(resov.nextIcon2.isDisplayed()).toBeTruthy();
    console.log('Next Slide Icon Is Displayed On Preview');
    browser.sleep(2000);
    resov.nextIcon2.click();
    browser.sleep(500);
    resov.nextIcon2.click();
    browser.sleep(500);
}

const verifyUserIsAbleToCreateQUMLTypeContent = () => {
    var questionName;
    try {

        console.log("User is trying to add question Set On Content Creator");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickQuestionSet, 20000, "clickresource is not available");
        resov.clickQuestionSet.click();
        wait.waitForElementVisibility(resov.QuestionName, 20000, "resourceName is not available");
        questionName = "QuestionA" + faker.randomData().firstname;
        resov.QuestionName.click();
        resov.QuestionName.clear();
        resov.QuestionName.sendKeys(questionName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterDescription, 20000, "Description Field is not available");
        resov.enterDescription.sendKeys('Desc');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.enterInstruction, 20000, "Instruction Field is not available");
        resov.enterInstruction.sendKeys('Answer All');
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AdditionalCategory, 20000, "Dropdown is not available");
        resov.AdditionalCategory.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selAdditionalCategory, 20000, "Selectable Option is not available");
        resov.selAdditionalCategory.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selBoard, 20000, "Board Dropdown is not available");
        resov.selBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selBoardValue, 20000, "Selectable Board Value is not available");
        resov.selBoardValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.dropdownMedium, 20000, "Selectable Board Value is not available");
        resov.dropdownMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMedium3, 20000, "Selectable Board Value is not available");
        resov.selectMedium3.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.selectClass, 20000, "Selectable Class Value is not available");
        resov.selectClass.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selectSubject1, 20000, "Selectable Subject Value is not available");
        resov.selectSubject1.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,850);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.selectAudience, 20000, "Selectable Audience Value is not available");
        resov.selectAudience.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.maxHour, 20000, "Selectable Max Hour Value is not available");
        resov.maxHour.click();
        resov.maxHour.sendKeys('00');
        browser.sleep(2000);

        resov.maxHour.sendKeys(protractor.Key.TAB, '02');

        resov.maxHour.sendKeys(protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, '01');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(3000);

        resov.clkBold.click();
        browser.sleep(3000);

        expect(resov.BoldSelected.isDisplayed()).toBeTruthy();
        console.log('Bold Option Is Selected ');
        browser.sleep(3000);

        resov.clkItalic.click();
        browser.sleep(3000);

        expect(resov.ItalicSelected.isDisplayed()).toBeTruthy();
        console.log('Italic Option Is Selected ');
        browser.sleep(3000);

        resov.clkUnderLine.click();
        browser.sleep(3000);

        expect(resov.UnderLineSelected.isDisplayed()).toBeTruthy();
        console.log('Under Line Option Is Selected ');
        browser.sleep(3000);

        resov.clkBullet.click();
        browser.sleep(3000);

        expect(resov.BulletSelected.isDisplayed()).toBeTruthy();
        console.log('Bullet Option Is Enabled ');
        browser.sleep(3000);

        resov.clkTextAllignment.click();
        browser.sleep(3000);


        expect(resov.selectTextAllignment.isDisplayed()).toBeTruthy();
        console.log('Text Allignment Options Avalailable ');
        browser.sleep(3000);
        resov.selectTextAllignment.click();
        browser.sleep(1000);



        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        expect(resov.selectLayout.isDisplayed()).toBeTruthy();
        console.log('Select Layout Option is Available On QUML ');
        browser.sleep(3000);

        expect(resov.selectGrid.isDisplayed()).toBeTruthy();
        console.log('Grid Layout Option Is  Available On QUML ');
        browser.sleep(3000);

        expect(resov.selectHoriz.isDisplayed()).toBeTruthy();
        console.log('Horizontal Layout Option Is  Available On QUML ');
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

        wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
        option2 = "Mangalore"
        resov.McqOptionInput22.sendKeys(option2);
        browser.sleep(2000);

        expect(resov.AddOption.isDisplayed()).toBeTruthy();
        console.log('Add Option Is  Available On QUML ');
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(2000);

        wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
        resov.sltCorrectAnswer1.click();
        browser.sleep(2000);


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title = "GK1";
        resov.questionDetailsTitle.sendKeys(Title);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);
        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(2000);

    }
    catch (e) {
        console.log("Unable To Create Question Set and Add Timer")
    }
}


const VerifyUserShouldBeAbleToCreateMQCTypeContent = () => {
    var questionName;
    try {

        console.log("User is trying to add question Set On Content Creator");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickQuestionSet, 20000, "clickresource is not available");
        resov.clickQuestionSet.click();
        wait.waitForElementVisibility(resov.QuestionName, 20000, "resourceName is not available");
        questionName = "QuestionA" + faker.randomData().firstname;
        resov.QuestionName.click();
        resov.QuestionName.clear();
        resov.QuestionName.sendKeys(questionName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterDescription, 20000, "Description Field is not available");
        resov.enterDescription.sendKeys('Desc');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.enterInstruction, 20000, "Instruction Field is not available");
        resov.enterInstruction.sendKeys('Answer All');
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AdditionalCategory, 20000, "Dropdown is not available");
        resov.AdditionalCategory.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selAdditionalCategory, 20000, "Selectable Option is not available");
        resov.selAdditionalCategory.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selBoard, 20000, "Board Dropdown is not available");
        resov.selBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selBoardValue, 20000, "Selectable Board Value is not available");
        resov.selBoardValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.dropdownMedium, 20000, "Selectable Board Value is not available");
        resov.dropdownMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMedium3, 20000, "Selectable Board Value is not available");
        resov.selectMedium3.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.selectClass, 20000, "Selectable Class Value is not available");
        resov.selectClass.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selectSubject1, 20000, "Selectable Subject Value is not available");
        resov.selectSubject1.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,850);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.selectAudience, 20000, "Selectable Audience Value is not available");
        resov.selectAudience.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.maxHour, 20000, "Selectable Max Hour Value is not available");
        resov.maxHour.click();
        resov.maxHour.sendKeys('00');
        browser.sleep(2000);

        resov.maxHour.sendKeys(protractor.Key.TAB, '02');

        resov.maxHour.sendKeys(protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, '01');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(3000);

        resov.clkBold.click();
        browser.sleep(3000);

        expect(resov.BoldSelected.isDisplayed()).toBeTruthy();
        console.log('Bold Option Is Selected ');
        browser.sleep(3000);

        resov.clkItalic.click();
        browser.sleep(3000);

        expect(resov.ItalicSelected.isDisplayed()).toBeTruthy();
        console.log('Italic Option Is Selected ');
        browser.sleep(3000);

        resov.clkUnderLine.click();
        browser.sleep(3000);

        expect(resov.UnderLineSelected.isDisplayed()).toBeTruthy();
        console.log('Under Line Option Is Selected ');
        browser.sleep(3000);

        resov.clkBullet.click();
        browser.sleep(3000);

        expect(resov.BulletSelected.isDisplayed()).toBeTruthy();
        console.log('Bullet Option Is Enabled ');
        browser.sleep(3000);


        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        expect(resov.selectLayout.isDisplayed()).toBeTruthy();
        console.log('Select Layout Option is Available On QUML ');
        browser.sleep(3000);

        expect(resov.selectGrid.isDisplayed()).toBeTruthy();
        console.log('Grid Layout Option Is  Available On QUML ');
        browser.sleep(3000);

        expect(resov.selectHoriz.isDisplayed()).toBeTruthy();
        console.log('Horizontal Layout Option Is  Available On QUML ');
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(3000);



        resov.clkParagraph1.sendKeys(Key.CONTROL, "a");
        browser.sleep(3000);



        resov.clkItalic1.click();
        browser.sleep(3000);

        resov.clkUnderLine1.click();
        browser.sleep(3000);

        resov.clkBullet1.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

        wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
        option2 = "Mangalore"
        resov.McqOptionInput22.sendKeys(option2);
        browser.sleep(2000);

        expect(resov.AddOption.isDisplayed()).toBeTruthy();
        console.log('Add Option Is  Available On QUML ');
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(2000);

        wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
        resov.sltCorrectAnswer1.click();
        browser.sleep(2000);


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title = "GK1";
        resov.questionDetailsTitle.sendKeys(Title);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);
        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(2000);

    }
    catch (e) {
        console.log("Unable To Create Question Set and Add Timer")
    }
}

const verifyContentInAllTabs = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkAllTabs, 40000, "  Filter search bar is not available");
        resov.clkAllTabs.click();
        browser.sleep(4000);

        expect(resov.resoCard.isDisplayed()).toBeTruthy()
        browser.sleep(3000);


    } catch (e) {
        console.log("Failed in Filter")
    }
}

const recentlyPublisedSecInHomePage = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);

        expect(resov.assertRecentlyPublished.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertRecentlyPublishedContent.isDisplayed()).toBeTruthy()
        browser.sleep(5000);


    } catch (e) {
        console.log("volume mute is not validated")
    }
}
const ContinueLearningSecInHomePage = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);

        expect(resov.assertContinueLearning.isDisplayed()).toBeTruthy()
        browser.sleep(2000);
        expect(resov.assertContinueLearningContent.isDisplayed()).toBeTruthy()
        browser.sleep(5000);
    } catch (e) {
        console.log("volume mute is not validated")
    }
}

const sendForRevInLessonPlanContent = () => {
    try {
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.sendForReview, 40000, "  Filter search bar is not available");
        resov.sendForReview.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));



    } catch (e) {
        console.log("failed")
    }
}

const editTheResourceInDraft = (resourceName) => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        console.log('User is trying to see the upload content in up for review page');
        wait.waitForElementVisibility(content.workSpace, 40000, "workSpace is not available");
        content.workSpace.click();
        wait.waitForElementVisibility(resov.drafts, 40000, "drafts is not available");
        resov.drafts.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(resourceName);
        browser.sleep(6000);
        wait.waitForElementVisibility(resov.imageCard, 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be abel to click on the drafts section to see draft contents')
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    }
    catch (e) {
        console.log('failed');

    }

}

const rejectTheLessonPlan = (inputToReject) => {
    try {
        console.log('User  is trying to send the request changes for all upload content');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000, "Creation page not loaded");
        content.upForReview.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(inputToReject);
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.contentupload, 40000, "searchedContentForPublish is not available");
        resov.contentupload.getText().then(function (content) {
            console.log('contentupload is  :' + content);
        });
        console.log('Content should render properly in the content player while reviewing the contents.')
        resov.contentupload.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.lessonPlanRequestChanges, 40000, "clickRequestChanges is not available");
        resov.lessonPlanRequestChanges.click();
        // resov.clickRequestChanges.getText().then(function (request) {
        //     console.log('Request is  :' + request);
        // });
        browser.sleep(4000);
        // wait.waitForElementVisibility(resov.rejectReason1,40000, "rejectReason1 is not available");
        resov.rejectReason1.click();
        browser.sleep(2000);
        resov.rejectReason2.click();
        browser.sleep(2000);
        resov.rejectReason3.click();
        browser.sleep(5000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.commentbox);
        wait.waitForElementVisibility(resov.commentbox, 40000, "reviewComment is not available");
        resov.commentbox.click();
        resov.commentbox.sendKeys('Testing')
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.footerRequestChanges);
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.footerRequestChanges, 40000, "requestChangesButton is not available");
        resov.footerRequestChanges.click();
        browser.sleep(2000);
        console.log(inputToReject + ' is rejected succesfully')
    }
    catch (e) {
        console.log('The reviewer failed to rejects the uploaded content, Exception');

    }
}



const scrollTabs = async () => {
    try {
        expect(resov.clkHome.isPresent()).toBe(true);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,7000);').then(function () {
            console.log('++++++SCROLLED down+++++');
        });
        expect(resov.assertTermsNcond.isPresent()).toBe(true);
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        expect(resov.clkDigitalTxtBooks.isPresent()).toBe(true);
        wait.waitForElementVisibility(resov.clkDigitalTxtBooks, 40000, "  Filter search bar is not available");
        resov.clkDigitalTxtBooks.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        wait.waitForElementVisibility(resov.clkCourseHeader, 40000, "  Filter search bar is not available");
        resov.clkCourseHeader.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        wait.waitForElementVisibility(resov.clkTVClasses, 40000, "  Filter search bar is not available");
        resov.clkTVClasses.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(2000);

    } catch (e) {
        console.log("Failed in Filter")
    }
}

const userSltFiltersInDifferntTabsByKeyboardEvents= () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkAllTabs, 40000, "  Filter search bar is not available");
        resov.clkAllTabs.sendKeys(protractor.Key.ENTER);
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkBoardDdAllTabs, 40000, "  clkViewAllBtn search bar is not available");
        resov.clkBoardDdAllTabs.click();
       // browser.sleep(4000);
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.ENTER);
        browser.sleep(1000);


        // wait.waitForElementVisibility(resov.assertBoard, 40000, "  clkViewAllBtn search bar is not available");
        // resov.assertBoard.sendKeys(protractor.Key.ENTER);
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.clickMedium, 40000, "  clkViewAllBtn search bar is not available");
        // resov.clickMedium.click();
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.selectMedium, 40000, "  clkViewAllBtn search bar is not available");
        // resov.selectMedium.sendKeys(protractor.Key.ENTER);
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.clickclass, 40000, "  clkViewAllBtn search bar is not available");
        // resov.clickclass.click();
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.SelectClass, 40000, "  clkViewAllBtn search bar is not available");
        // resov.SelectClass.sendKeys(protractor.Key.ENTER);
        // browser.sleep(4000);



        
        // wait.waitForElementVisibility(resov.sltClassFilter1, 40000, "  clkViewAllBtn search bar is not available");
        // resov.sltClassFilter1.sendKeys(protractor.key.ENTER);
        // browser.sleep(4000);

        // expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        // browser.sleep(3000);
        // browser.executeScript('window.scrollTo(0,0);').then(function () {
        //     console.log('++++++SCROLLED UP+++++');
        // });
        // browser.sleep(2000);

        // wait.waitForElementVisibility(resov.clkResetBtn, 40000, "  clkViewAllBtn search bar is not available");
        // resov.clkResetBtn.click();
        // browser.sleep(7000);


        // wait.waitForElementVisibility(resov.clkCourseHeader, 40000, "  Filter search bar is not available");
        // resov.clkCourseHeader.click();
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.clkMediFilter, 40000, "  clkViewAllBtn search bar is not available");
        // resov.clkMediFilter.click();
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.sltMediuFilter1, 40000, "  clkViewAllBtn search bar is not available");
        // resov.sltMediuFilter1.click();
        // browser.sleep(4000);

        // expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        // browser.sleep(3000);

        // wait.waitForElementVisibility(resov.ClkClassFilter, 40000, "  clkViewAllBtn search bar is not available");
        // resov.ClkClassFilter.click();
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.sltClassFilter1, 40000, "  clkViewAllBtn search bar is not available");
        // resov.sltClassFilter1.click();
        // browser.sleep(4000);

        // expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        // browser.sleep(3000);
        // browser.executeScript('window.scrollTo(0,0);').then(function () {
        //     console.log('++++++SCROLLED UP+++++');
        // });
        // browser.sleep(3000);

        // wait.waitForElementVisibility(resov.clkResetBtn, 40000, "  clkViewAllBtn search bar is not available");
        // resov.clkResetBtn.click();
        // browser.sleep(7000);


        // wait.waitForElementVisibility(resov.clkTVClasses, 40000, "  Filter search bar is not available");
        // resov.clkTVClasses.click();
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.clkMediFilter, 40000, "  clkViewAllBtn search bar is not available");
        // resov.clkMediFilter.click();
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.sltMediuFilter1, 40000, "  clkViewAllBtn search bar is not available");
        // resov.sltMediuFilter1.click();
        // browser.sleep(4000);

        // expect(resov.MediumsAsertSelectedOption.isDisplayed()).toBeTruthy()
        // browser.sleep(3000);
        // wait.waitForElementVisibility(resov.ClkClassFilter, 40000, "  clkViewAllBtn search bar is not available");
        // resov.ClkClassFilter.click();
        // browser.sleep(4000);
        // wait.waitForElementVisibility(resov.sltClassFilter1, 40000, "  clkViewAllBtn search bar is not available");
        // resov.sltClassFilter1.click();
        // browser.sleep(4000);
        // expect(resov.ClassAsserSelctedOption.isDisplayed()).toBeTruthy()
        // browser.sleep(3000);
        // browser.executeScript('window.scrollTo(0,0);').then(function () {
        //     console.log('++++++SCROLLED UP+++++');
        // });
        // browser.sleep(3000);

        // wait.waitForElementVisibility(resov.clkResetBtn, 40000, "  clkViewAllBtn search bar is not available");
        // resov.clkResetBtn.click();
        // browser.sleep(7000);

    } catch (e) {
        console.log("Failed")
    }
}

const userSltDifferentTabsUsingKeyboardEvents = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkAllTabs, 40000, "  Filter search bar is not available");
        resov.clkAllTabs.sendKeys(protractor.Key.ENTER);
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.sendKeys(protractor.Key.ENTER);
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkExploreTab, 40000, "  Filter search bar is not available");
        resov.clkExploreTab.sendKeys(protractor.Key.ENTER);
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkDigitalTxtBooks, 40000, "  Filter search bar is not available");
        resov.clkDigitalTxtBooks.sendKeys(protractor.Key.ENTER);
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.clkCourseHeader, 40000, "  Filter search bar is not available");
        resov.clkCourseHeader.sendKeys(protractor.Key.ENTER);
        browser.sleep(4000);
        
        
    } catch (e) {
        console.log("Failed")
    }
}

const switchToClassicTheme = () => {
    try {
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.switchToClassicTheme), 20000, "headerDropdown page not loaded");
        resov.switchToClassicTheme.click();
        browser.sleep(3000);

    } catch (e) {
        console.log("Failed")
    }
}



const validateRichTextInQuestionSetCreation = () => {
    var questionName;
    try {

        console.log("User is trying to add question Set On Content Creator");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickQuestionSet, 20000, "clickresource is not available");
        resov.clickQuestionSet.click();
        wait.waitForElementVisibility(resov.QuestionName, 20000, "resourceName is not available");
        // questionName = "QuestionA" + faker.randomData().firstname;
        questionName = "AutomationSetDec10";
        resov.QuestionName.click();
        resov.QuestionName.clear();
        resov.QuestionName.sendKeys(questionName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterDescription, 20000, "Description Field is not available");
        resov.enterDescription.sendKeys('Desc');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.enterInstruction, 20000, "Instruction Field is not available");
        resov.enterInstruction.sendKeys('Answer All');
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AdditionalCategory, 20000, "Dropdown is not available");
        resov.AdditionalCategory.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selAdditionalCategory, 20000, "Selectable Option is not available");
        resov.selAdditionalCategory.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selBoard, 20000, "Board Dropdown is not available");
        resov.selBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selBoardValue, 20000, "Selectable Board Value is not available");
        resov.selBoardValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.dropdownMedium, 20000, "Selectable Board Value is not available");
        resov.dropdownMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMedium3, 20000, "Selectable Board Value is not available");
        resov.selectMedium3.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.selectClass, 20000, "Selectable Class Value is not available");
        resov.selectClass.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selectSubject1, 20000, "Selectable Subject Value is not available");
        resov.selectSubject1.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,850);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.selectAudience, 20000, "Selectable Audience Value is not available");
        resov.selectAudience.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.maxHour, 20000, "Selectable Max Hour Value is not available");
        resov.maxHour.click();
        resov.maxHour.sendKeys('00');
        browser.sleep(2000);

        resov.maxHour.sendKeys(protractor.Key.TAB, '04');

        resov.maxHour.sendKeys(protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, protractor.Key.TAB, '01');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc1.sendKeys("CdildDesc");
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        for (var i = 1; i <= 2; i++) {

            wait.waitForElementVisibility(resov.createNew1, 20000, "Createnew button not found");
            resov.createNew1.click();
            browser.sleep(3000);

            wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
            resov.questionMCQ.click();
            browser.sleep(2000);

            wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
            resov.questionMCQnextBtn.click();
            browser.sleep(4000);
            wait.waitForElementVisibility(searchObj.boldKeyButton, 2000, "Bold key not found");
            searchObj.boldKeyButton.click();
            browser.sleep(3000);
            wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
            questioninput = "What is the capital of Karnataka?"
            resov.mCQquestionInput.sendKeys(questioninput);
            browser.sleep(4000);
            searchObj.italicRichTextButton.click();
            browser.sleep(4000);
            resov.mCQquestionInput.sendKeys(questioninput);
            browser.sleep(2000);
            searchObj.underLineRichTextButton.click();
            browser.sleep(2000);
            resov.mCQquestionInput.sendKeys(questioninput);
            browser.sleep(2000);
            wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
            option1 = "Bangalore"
            resov.McqOptionInput1.sendKeys(option1);
            browser.sleep(1000);

            browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

            wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
            option2 = "Mangalore"
            resov.McqOptionInput22.sendKeys(option2);
            browser.sleep(2000);

            browser.executeScript('window.scrollTo(0,0);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });

            browser.sleep(2000);

            wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
            resov.sltCorrectAnswer1.click();
            browser.sleep(2000);


            browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

            wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
            Title = "Ques " + i;
            resov.questionDetailsTitle.sendKeys(Title);
            browser.sleep(2000);
            browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);
            wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
            resov.questionSave.click();
            browser.sleep(4000);
            sanityPage.SanityElement().clkSection.click();
            browser.sleep(2000);


        }
    }
    catch (e) {
        console.log("Unable To Create Question Set and Add Timer")
    }
}

const VerifyContentDisplayedInRecentlyPublishedSecInHomePage = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkHome, 40000, "  Filter search bar is not available");
        resov.clkHome.click();
        browser.sleep(4000);

        expect(resov.assertRecentlyPublished.isDisplayed()).toBeTruthy()
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.assertRecentlyPublishedContent);
        browser.sleep(1000);

        expect(resov.assertRecentlyPublishedContent.isDisplayed()).toBeTruthy()
        browser.sleep(5000);

        resov.assertRecentlyPublishedContent.click();

        expect(resov.assertBorad.isDisplayed()).toBeTruthy()
        console.log('Valid Board Present In Recently published course');

        expect(resov.asseertMedim.isDisplayed()).toBeTruthy()
        console.log('Valid Medium Present In Recently published course');

        expect(resov.assertClass1.isDisplayed()).toBeTruthy()
        console.log('Valid Class Present In Recently published course');

    } catch (e) {
        console.log("Error")
    }
}


const createQuestionWithRichtextValidation = () => {
    var resourceName;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        browser.sleep(9000);
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourceName = "ResourceM" + faker.randomData().firstname;
        browser.sleep(2000);
        resov.resourceName.sendKeys(resourceName);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource);
        etbv.practiceResource.click();
        browser.sleep(3000);
        resov.startCreating.click();
        browser.sleep(8000);
        addSlideInresource();
        browser.sleep(4000);
        browser.sleep(2000);
        createQuestionSetForrichText();
        browser.sleep(4000);
        return resourceName;
    }
    catch (Exception) {
        console.log("Failed adding slide ");
    }

}
const createQuestionSetForrichText= () => {
    try {
        browser.sleep(5000);
        wait.waitForElementVisibility(resov.addQuestionSet, 20000, "addQuestionSet is not available");
        browser.sleep(1000);
        resov.addQuestionSet.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.createQuestion, 20000, "createQuestion is not available");
        resov.createQuestion.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.selectArrangeSequesnce, 20000, "selectArrangeSequesnce is not available");
        resov.selectArrangeSequesnce.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[contains(@title,'Rich Text Editor')]")));
        browser.sleep(2000);
        resov.enterTheQuestion.click();
        browser.sleep(2000);
        let questionName = "संख्या क्रम?";
        browser.sleep(2000);
        resov.enterTheQuestion.sendKeys(questionName);
        browser.sleep(2000);
        resov.enterTheQuestion.sendKeys(protractor.Key.CONTROL,"a");
        browser.sleep(2000);
        resov.enterTheQuestion.sendKeys(protractor.Key.CONTROL,"b");
        browser.sleep(2000);
        resov.enterTheQuestion.sendKeys(protractor.Key.CONTROL,"i");
        browser.sleep(2000);
        resov.enterTheQuestion.sendKeys(protractor.Key.CONTROL,"u");
        browser.sleep(2000);
        resov.enterTheQuestion.sendKeys(protractor.Key.CONTROL,"b");
        browser.sleep(2000);
        resov.enterTheQuestion.sendKeys(protractor.Key.CONTROL,"i");
        browser.sleep(2000);
        resov.enterTheQuestion.sendKeys(protractor.Key.CONTROL,"u");
        browser.sleep(2000);
        browser.switchTo().defaultContent();
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.enterSeq1ArrangeTemp);
        wait.waitForElementVisibility(resov.enterSeq1ArrangeTemp, 20000, "inputAnswer1 is not available");
        resov.enterSeq1ArrangeTemp.click();
        browser.sleep(2000);
        resov.enterSeq1ArrangeTemp.sendKeys("240,200,160");
        browser.sleep(4000);
        wait.waitForElementVisibility(resov.enterSeq2ArrangeTemp, 20000, "inputAnswer1 is not available");
        resov.enterSeq2ArrangeTemp.click();
        browser.sleep(2000);
        resov.enterSeq2ArrangeTemp.sendKeys("240,200,160");
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.createQueNext, 20000, " createQueNext  is not available");
        resov.createQueNext.click();
        fillQusetionMetaDataForm();
        wait.waitForElementToBeClickable(resov.nextButton, 20000, "nextButton is not available");
        resov.nextButton.click();
        wait.waitForElementVisibility(resov.questionSetTitle, 20000, "questionSetTitle is not available");
        resov.questionSetTitle.sendKeys("Quantitative aptitude");
        wait.waitForElementVisibility(resov.addbutton, 20000, "addbutton is not available");
        resov.addbutton.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.saveIcon, 20000, "saveIcon never loaded");
        resov.saveIcon.click();
        wait.waitForElementToBeClickable(resov.closeButtonMsg, 20000, "Dashboard never loaded");
        resov.closeButtonMsg.click();
        browser.sleep(1000);
    }
    catch (Exception) {
        console.log("Failed to create QuestionFITB ");
    }
}

const createResourceForTextbook = () => {
    var resourcename;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.clickresource, 20000, "clickresource is not available");
        resov.clickresource.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        resourcename = "ResourceA" + faker.randomData().firstname;
        resov.resourceName.sendKeys(resourcename);
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentType);
        wait.waitForElementVisibility(etbv.contentType, 30000, "contentType button not available");
        etbv.contentType.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.eTextBook);
        etbv.eTextBook.click();
        browser.sleep(3000);
        resov.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        wait.waitForElementVisibility(resov.addText, 20000, "addShape is not available");
        resov.addText.click();
        wait.waitForElementVisibility(resov.addShapes, 20000, "addShape is not available");
        resov.addShapes.click();
        wait.waitForElementVisibility(resov.addTriangle, 20000, "addTriangle is not available");
        resov.addTriangle.click();
        browser.sleep(500);
        resov.addHotSpot.click();
        browser.sleep(200);
        resov.addscribblepad.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "Dashboard never loaded");
        resov.clicksave.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(1000);
        console.log("User successfully created resource")
        browser.sleep(4000);
        etbv.closeButtonInEditor.click();
        browser.sleep(10000);
        return resourcename;
    } catch (Exception) {
        console.log("User failed to create a resource");
    }
}


const sendForReviewResource = async () => {
    browser.sleep(1000);
    wait.waitForElementToBeClickable(content.sendForReview, 20000, "send for review not available");
    content.sendForReview.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
    etbv.clickAppIcon.click();
    browser.sleep(2000);

    wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
    etbv.allImage.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
    etbv.myImage.click();

    wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
    etbv.checkAppIcon.click();
    wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.validateBoardSyllabus);
    browser.sleep(500);
    
    let board = await etbv.validateBoardSyllabus.getText();
    board.includes("CBSE");
    browser.sleep(2000);
    browser.sleep(500);
}


const pickContentFromDraftAfterClosingTheEditor = async (nameOfResource) => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        wait.waitForElementToBeClickable(resov.drafts, 20000, "Dashboard never loaded");
        resov.drafts.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(content.searchForReview, 20000, "workspace page not loaded");
        content.searchForReview.click();
        browser.sleep(2000);

        content.searchForReview.sendKeys(nameOfResource);
        browser.sleep(4000);

        wait.waitForElementVisibility(content.clkCardContent, 20000, "workspace page not loaded");
        content.clkCardContent.click();
        browser.sleep(6000);

        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);

        etbv.editDetails.click();
        browser.sleep(6000);

        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();
        browser.sleep(2000);

    wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
    etbv.checkAppIcon.click();
    browser.sleep(2000);

    wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);

    
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
    browser.sleep(500);
    wait.waitForElementVisibility(etbv.clickBoard, 30000, "board button not available");
    etbv.clickBoard.click();
    wait.waitForElementVisibility(etbv.selectBoard, 30000, "contuinew button not available");
    etbv.selectBoard.click();
    browser.sleep(500);
    etbv.clickMedium.click();
    browser.sleep(500);
    wait.waitForElementVisibility(etbv.selectMedium, 30000, "contuinew button not available");
    etbv.selectMedium.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
    etbv.clickclass.click();
    browser.sleep(1000);
    wait.waitForElementVisibility(etbv.SelectClass, 30000, "contuinew button not available");
    etbv.SelectClass.click();
    browser.sleep(500);
    etbv.clicksubject.click();
    browser.sleep(500);
    wait.waitForElementVisibility(etbv.selectSubject, 30000, "contuinew button not available");
    etbv.selectSubject.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
    wait.waitForElementVisibility(etbv.yearOfCreation, 30000, "yearOfCreation button not available");
    etbv.yearOfCreation.click();
    etbv.yearOfCreation.clear();
    etbv.yearOfCreation.sendKeys("2020");
    content.saveButoonReview.click();
    browser.sleep(5000);
    wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
    resov.closebutton.click();
    browser.sleep(5000);

    } catch (Exception) {
        console.log("User failed to create a resource");
    }
}

const previewAndValidateSomeAttributesWhenDisplayScoreIsYes = () => {
    try {
        wait.waitForElementVisibility(sanityPage.SanityElement().clkEditDetails, 50000, "clickAppIcon button not available");
        sanityPage.SanityElement().clkEditDetails.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.sleep(500);
        wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
        browser.sleep(500);
        wait.waitForElementVisibility(etbv.clickBoard, 30000, "board button not available");
        etbv.clickBoard.click();
        wait.waitForElementVisibility(etbv.selectBoard, 30000, "contuinew button not available");
        etbv.selectBoard.click();
        browser.sleep(500);
        etbv.clickMedium.click();
        wait.waitForElementVisibility(etbv.selectMedium, 30000, "contuinew button not available");
        etbv.selectMedium.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        etbv.clickclass.click();
        wait.waitForElementVisibility(etbv.SelectClass, 30000, "contuinew button not available");
        etbv.SelectClass.click();
        browser.sleep(500);
        etbv.clicksubject.click();
        wait.waitForElementVisibility(etbv.selectSubject, 30000, "contuinew button not available");
        etbv.selectSubject.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        wait.waitForElementVisibility(etbv.yearOfCreation, 30000, "yearOfCreation button not available");
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2022");
        browser.sleep(4000);
        let defaultScore = resov.assertDefaultdisplayscore.getText();
        defaultScore.includes("Yes");
        console.log("default score is set to Yes");
        browser.sleep(2000);
        content.saveButoonReview.click();
        browser.sleep(5000);
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.previewButtonInEditor), 20000, "previewButtonInEditor page not loaded");
        resov.previewButtonInEditor.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.id('previewContentIframe')));
        resov.selectFirstOption.click();
        browser.sleep(3000);
        resov.clkNextButtonInPreviewWindow.click();
        browser.sleep(3000);
        resov.clkSubmitButtonInPreviewWindow.click();
        browser.sleep(3000);
        expect((resov.assertScoreMsgeWhenDisplayScoreIsYes).isPresent()).toBe(true||false);
    }
    catch (Exception) {
        console.log("Failed");
    }
}

const previewAndValidateSomeAttributesWhenDisplayScoreIsNo = async () => {
    try {
        wait.waitForElementVisibility(sanityPage.SanityElement().clkEditDetails, 50000, "clickAppIcon button not available");
        sanityPage.SanityElement().clkEditDetails.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.sleep(500);
        wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
        browser.sleep(500);
        wait.waitForElementVisibility(etbv.clickBoard, 30000, "board button not available");
        etbv.clickBoard.click();
        wait.waitForElementVisibility(etbv.selectBoard, 30000, "contuinew button not available");
        etbv.selectBoard.click();
        browser.sleep(500);
        etbv.clickMedium.click();
        wait.waitForElementVisibility(etbv.selectMedium, 30000, "contuinew button not available");
        etbv.selectMedium.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        etbv.clickclass.click();
        wait.waitForElementVisibility(etbv.SelectClass, 30000, "contuinew button not available");
        etbv.SelectClass.click();
        browser.sleep(500);
        etbv.clicksubject.click();
        wait.waitForElementVisibility(etbv.selectSubject, 30000, "contuinew button not available");
        etbv.selectSubject.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        wait.waitForElementVisibility(etbv.yearOfCreation, 30000, "yearOfCreation button not available");
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2022");
        browser.sleep(4000);
        let defaultScore = await resov.assertDefaultdisplayscore.getText();
        defaultScore.includes("Yes");
        browser.sleep(4000);
        browser.executeScript("arguments[0].scrollIntoView();", resov.displayDropDown);
        wait.waitForElementVisibility(resov.displayDropDown, 30000, "displayScore not available");
        resov.displayDropDown.click();
        browser.sleep(1000);
        resov.selectDisplayScoreAsNo.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.saveform, 20000, "submitForm not available");
        content.saveform.click();
        console.log("default score is set to Yes");
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "Dashboard never loaded");
        resov.closebutton.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.previewButtonInEditor), 20000, "previewButtonInEditor page not loaded");
        resov.previewButtonInEditor.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.id('previewContentIframe')));
        resov.selectFirstOption.click();
        browser.sleep(3000);
        resov.clkNextButtonInPreviewWindow.click();
        browser.sleep(3000);
        resov.clkSubmitButtonInPreviewWindow.click();
        browser.sleep(3000);
        expect((resov.assertScoreMsgeWhenDisplayScoreIsYes).isPresent()).toBe(false);
        browser.sleep(3000);
    
    }
    catch (Exception) {
        console.log("Failed");
    }
}

const createCourseAssessmentFordefaultDisplayScore = () => {
    var coursename;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(content.courseAssessment, 20000, "clickresource is not available");
        content.courseAssessment.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        coursename = "CourseAssess" + faker.randomData().firstname;
        resov.resourceName.sendKeys(coursename);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.assessNumberAttempts), 20000, "Course creation editor never loaded");
        content.assessNumberAttempts.sendKeys("2");
        browser.sleep(3000);
        resov.startCreating.click();
        browser.sleep(8000);
        addSlideInresource();
        browser.sleep(4000);
        createQuestionSet();
        browser.sleep(4000);
        previewAndValidateSomeAttributesWhenDisplayScoreIsYes();
        return coursename;
    }
    catch (Exception) {
        console.log("Failed");
    }
}

const createCourseAssessmentForDisplayScoreNo = () => {
    var coursename;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(content.courseAssessment, 20000, "clickresource is not available");
        content.courseAssessment.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        coursename = "CourseAssess" + faker.randomData().firstname;
        resov.resourceName.sendKeys(coursename);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.assessNumberAttempts), 20000, "Course creation editor never loaded");
        content.assessNumberAttempts.sendKeys("2");
        browser.sleep(3000);
        resov.startCreating.click();
        browser.sleep(8000);
        addSlideInresource();
        browser.sleep(4000);
        createQuestionSet();
        browser.sleep(4000);
        previewAndValidateSomeAttributesWhenDisplayScoreIsNo();
        return coursename;
    }
    catch (Exception) {
        console.log("Failed");
    }
}

const verifyCreatorIsAbleToPreviewTheQuestionSet = () => {
    try {
        expect(resov.previewIcon1.isDisplayed()).toBeTruthy();
        console.log('Preview Icon Is Displayed On Preview ');
        browser.sleep(2000);
        resov.previewIcon1.click();
        browser.sleep(5000);

        expect(resov.assertInstruction.isPresent()).toBeTruthy().then(function () {
            console.log("Instructions entered in the question set Is Displayed on the preview while playing");
        })

        resov.clkNxtSlide.click();
        browser.sleep(2000);

        resov.clkNxtSlide.click();
        browser.sleep(2000);

        resov.clkNxtSlide.click();
        browser.sleep(2000);

        resov.clkNxtSlide.click();
        browser.sleep(2000);

        resov.clkNxtSlide.click();
        browser.sleep(2000);

        expect(resov.justCompletedMsg.isPresent()).toBeTruthy().then(function () {
            console.log("Question Set Previewed After Save and Completed");
        })

        
        resov.clkClosePreview.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);
    }
    catch(xception) {
        console.log('Error');
    }
}

const verifyCreatorIsAbleToCreateQuestionAndAnswerInBoldItalicsUnderlinedText = () => {
    var questionName;
    try {

        console.log("User is trying to add question Set On Content Creator");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickQuestionSet, 20000, "clickresource is not available");
        resov.clickQuestionSet.click();
        wait.waitForElementVisibility(resov.QuestionName, 20000, "resourceName is not available");
        questionName = "QuestionA" + faker.randomData().firstname;
        resov.QuestionName.click();
        resov.QuestionName.clear();
        resov.QuestionName.sendKeys(questionName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterDescription, 20000, "Description Field is not available");
        resov.enterDescription.sendKeys('Desc');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.enterInstruction, 20000, "Instruction Field is not available");
        resov.enterInstruction.sendKeys('Answer All');
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AdditionalCategory, 20000, "Dropdown is not available");
        resov.AdditionalCategory.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selAdditionalCategory, 20000, "Selectable Option is not available");
        resov.selAdditionalCategory.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selBoard, 20000, "Board Dropdown is not available");
        resov.selBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selBoardValue, 20000, "Selectable Board Value is not available");
        resov.selBoardValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.dropdownMedium, 20000, "Selectable Board Value is not available");
        resov.dropdownMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMedium3, 20000, "Selectable Board Value is not available");
        resov.selectMedium3.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.selectClass, 20000, "Selectable Class Value is not available");
        resov.selectClass.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selectSubject1, 20000, "Selectable Subject Value is not available");
        resov.selectSubject1.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,850);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.selectAudience, 20000, "Selectable Audience Value is not available");
        resov.selectAudience.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.maxHour, 20000, "Selectable Max Hour Value is not available");
        resov.maxHour.click();
        resov.maxHour.sendKeys('01');
        browser.sleep(2000);


        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkShuffle, 20000, "Createnew button not found");
        resov.clkShuffle.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.clkBoldQstn, 20000, "Click Bold For Question");
        resov.clkBoldQstn.click();
        browser.sleep(2000);



        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        
        expect(resov.assertQstnBold.isPresent()).toBeTruthy().then(function () {
            console.log("Question Displayed Bold For MCQ Question Set");
        })

        resov.clkBoldAns1.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        expect(resov.assertBoldAns1.isPresent()).toBeTruthy().then(function () {
            console.log("Answer1 Displayed Bold For MCQ Question Set");
        })

        
        resov.clkBoldAns2.click();
        browser.sleep(1000);
    
        

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

        wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
        option2 = "Mangalore"
        resov.McqOptionInput22.sendKeys(option2);
        browser.sleep(2000);

        
        expect(resov.assertBoldAns2.isPresent()).toBeTruthy().then(function () {
            console.log("Answer2 Displayed Bold For MCQ Question Set");
        })



        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
        resov.sltCorrectAnswer1.click();
        browser.sleep(2000);


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title1 = "GK1";
        resov.questionDetailsTitle.sendKeys(Title1);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);

        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkSection, 20000, "Selection button not found");
        resov.clkSection.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.clkItalicQstn, 20000, "Click Bold For Question");
        resov.clkItalicQstn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        
        expect(resov.assertQstnItalic.isPresent()).toBeTruthy().then(function () {
            console.log("Question Displayed Italic For MCQ Question Set");
        })

        resov.clkItalicAns1.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        expect(resov.assertItalicAns1.isPresent()).toBeTruthy().then(function () {
            console.log("Answer1 Displayed Italic For MCQ Question Set");
        })

        
        resov.clkItalicAns2.click();
        browser.sleep(1000);
    
        

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

        wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
        option2 = "Mangalore"
        resov.McqOptionInput22.sendKeys(option2);
        browser.sleep(2000);

        
        expect(resov.assertItalicAns2.isPresent()).toBeTruthy().then(function () {
            console.log("Answer2 Displayed Italic For MCQ Question Set");
        })



        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
        resov.sltCorrectAnswer1.click();
        browser.sleep(2000);


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title1 = "GK2";
        resov.questionDetailsTitle.sendKeys(Title1);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);

        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkSection, 20000, "Selection button not found");
        resov.clkSection.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.clkUnderlineQstn, 20000, "Click Underline For Question");
        resov.clkUnderlineQstn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        
        expect(resov.assertQstnUnderline.isPresent()).toBeTruthy().then(function () {
            console.log("Question Displayed Underlined For MCQ Question Set");
        })

        
        resov.clkUnderlineAns1.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        expect(resov.assertUnderlineAns1.isPresent()).toBeTruthy().then(function () {
            console.log("Answer1 Displayed Underlined For MCQ Question Set");
        })
        
        resov.clkUnderlineAns2.click();
        browser.sleep(1000);
    
        

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

        wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
        option2 = "Mangalore"
        resov.McqOptionInput22.sendKeys(option2);
        browser.sleep(2000);

        
        expect(resov.assertUnderlineAns2.isPresent()).toBeTruthy().then(function () {
            console.log("Answer2 Displayed Underlined For MCQ Question Set");
        })
   
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
        resov.sltCorrectAnswer1.click();
        browser.sleep(2000);


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title1 = "GK3";
        resov.questionDetailsTitle.sendKeys(Title1);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);

        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkSection, 20000, "Selection button not found");
        resov.clkSection.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionSubjective, 20000, "Subjective Question Option not found");
        resov.questionSubjective.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);



        wait.waitForElementVisibility(resov.clkBoldQstn, 20000, "Click Bold For Question");
        resov.clkBoldQstn.click();
        browser.sleep(2000);



        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "Describe Bangalore"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        
        expect(resov.assertQstnBoldSub.isPresent()).toBeTruthy().then(function () {
            console.log("Question Displayed Bold For Subjective Question Set");
        })

        resov.clkBoldAns1.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore Is Capital Of KARNATAKA"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        expect(resov.assertBoldAnsSub.isPresent()).toBeTruthy().then(function () {
            console.log("Answer Displayed Bold For Subjective Question Set");
        })


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title1 = "ST1";
        resov.questionDetailsTitle.sendKeys(Title1);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);

        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkSection, 20000, "Selection button not found");
        resov.clkSection.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionSubjective, 20000, "Subjective Question Option not found");
        resov.questionSubjective.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.clkItalicQstn, 20000, "Click Bold For Question");
        resov.clkItalicQstn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "Describe Bangalore"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        
        expect(resov.assertQstnItalicSub.isPresent()).toBeTruthy().then(function () {
            console.log("Question Displayed Italic For Subjective Question Set");
        })

        resov.clkItalicAns1.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore Is Capital Of KARNATAKA"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        expect(resov.assertItalicAnsSub.isPresent()).toBeTruthy().then(function () {
            console.log("Answer Displayed Italic For Subjective Question Set");
        })

        
        
        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title1 = "ST2";
        resov.questionDetailsTitle.sendKeys(Title1);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);

        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkSection, 20000, "Selection button not found");
        resov.clkSection.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionSubjective, 20000, "Subjective Question Option not found");
        resov.questionSubjective.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.clkUnderlineQstn, 20000, "Click Underline For Question");
        resov.clkUnderlineQstn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "Describe Bangalore"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        
        expect(resov.assertQstnUnderlineSub.isPresent()).toBeTruthy().then(function () {
            console.log("Question Displayed Underlined For Subjective Question Set");
        })

        
        resov.clkUnderlineAns1.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore Is Capital Of KARNATAKA"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        expect(resov.assertUnderlineAnsSub.isPresent()).toBeTruthy().then(function () {
            console.log("Answer Displayed Underlined For Subjective Question Set");
        })
        
        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title1 = "ST3";
        resov.questionDetailsTitle.sendKeys(Title1);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);

        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(3000);
    }
    catch (e) {
        console.log("Unable To Create Question Set and Add Image")
    }
}

const verifyCreatorIsAbleToCreateQuestionAndAnswerWithTextHavingDifferentFontSize = () => {
    var questionName;
    try {

        console.log("User is trying to add question Set On Content Creator");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        wait.waitForElementVisibility(resov.clickQuestionSet, 20000, "clickresource is not available");
        resov.clickQuestionSet.click();
        wait.waitForElementVisibility(resov.QuestionName, 20000, "resourceName is not available");
        questionName = "QuestionA" + faker.randomData().firstname;
        resov.QuestionName.click();
        resov.QuestionName.clear();
        resov.QuestionName.sendKeys(questionName);

        browser.sleep(2000);
        wait.waitForElementVisibility(resov.enterDescription, 20000, "Description Field is not available");
        resov.enterDescription.sendKeys('Desc');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.enterInstruction, 20000, "Instruction Field is not available");
        resov.enterInstruction.sendKeys('Answer All');
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.AdditionalCategory, 20000, "Dropdown is not available");
        resov.AdditionalCategory.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selAdditionalCategory, 20000, "Selectable Option is not available");
        resov.selAdditionalCategory.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selBoard, 20000, "Board Dropdown is not available");
        resov.selBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selBoardValue, 20000, "Selectable Board Value is not available");
        resov.selBoardValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.dropdownMedium, 20000, "Selectable Board Value is not available");
        resov.dropdownMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.selectMedium3, 20000, "Selectable Board Value is not available");
        resov.selectMedium3.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        wait.waitForElementVisibility(resov.selectClass, 20000, "Selectable Class Value is not available");
        resov.selectClass.click();
        browser.sleep(2000);


        wait.waitForElementVisibility(resov.selectSubject1, 20000, "Selectable Subject Value is not available");
        resov.selectSubject1.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,850);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        wait.waitForElementVisibility(resov.selectAudience, 20000, "Selectable Audience Value is not available");
        resov.selectAudience.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.maxHour, 20000, "Selectable Max Hour Value is not available");
        resov.maxHour.click();
        resov.maxHour.sendKeys('01');
        browser.sleep(2000);


        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkShuffle, 20000, "Createnew button not found");
        resov.clkShuffle.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionMCQ, 20000, "MCQ Option not found");
        resov.questionMCQ.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

       
        wait.waitForElementVisibility(resov.clkDropDownFontQstn, 20000, "Click Font Dropdown For Question");
        resov.clkDropDownFontQstn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.fontSizeSelectedForQstn, 20000, "Select Dropdown For For Question");
        resov.fontSizeSelectedForQstn.click();
        browser.sleep(2000);



        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "What is the capital of Karnataka?"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        
        expect(resov.assertFontForQstn.isPresent()).toBeTruthy().then(function () {
            console.log("Question Displayed In Selected Font Size For MCQ Question Set");
        })
        
    

        wait.waitForElementVisibility(resov.clkDropDownFontAns1, 20000, "Click Font Dropdown For Answer1 Not Found");
        resov.clkDropDownFontAns1.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.fontSizeSelectedForAns1, 20000, "Select Dropdown For For Answer1 Not Found");
        resov.fontSizeSelectedForAns1.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        expect(resov.assertFontForAns1.isPresent()).toBeTruthy().then(function () {
            console.log("Answer1 Displayed In Selected Font Size For MCQ Question Set");
        })



        wait.waitForElementVisibility(resov.clkDropDownFontAns2, 20000, "Click Font Dropdown For Answer2 Not Found");
        resov.clkDropDownFontAns2.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.fontSizeSelectedForAns2, 20000, "Select Dropdown For For Answer1 Not Found");
        resov.fontSizeSelectedForAns2.click();
        browser.sleep(2000);
        

        browser.executeScript("arguments[0].scrollIntoView();", resov.McqOptionInput2);

        wait.waitForElementVisibility(resov.McqOptionInput22, 2000, "Question entry form not found");
        option2 = "Mangalore"
        resov.McqOptionInput22.sendKeys(option2);
        browser.sleep(2000);

        
        expect(resov.assertFontForAns2.isPresent()).toBeTruthy().then(function () {
            console.log("Answer1 Displayed In Selected Font Size For MCQ Question Set");
        })

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.sltCorrectAnswer1, 20000, "CheckBox not found");
        resov.sltCorrectAnswer1.click();
        browser.sleep(2000);


        browser.executeScript("arguments[0].scrollIntoView();", resov.questionDetailsTitle);

        wait.waitForElementVisibility(resov.questionDetailsTitle, 2000, "Question Details not found");
        Title1 = "GK1";
        resov.questionDetailsTitle.sendKeys(Title1);
        browser.sleep(2000);

        browser.executeScript("arguments[0].scrollIntoView();", resov.questionSave);

        wait.waitForElementVisibility(resov.questionSave, 20000, "Save button not found");
        resov.questionSave.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clkSection, 20000, "Selection button not found");
        resov.clkSection.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(resov.createNewBtn, 20000, "Createnew button not found");
        resov.createNewBtn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.questionSubjective, 20000, "Subjective Question Option not found");
        resov.questionSubjective.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.questionMCQnextBtn, 20000, "Next button not found");
        resov.questionMCQnextBtn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.clkDropDownFontQstn, 20000, "Click Font Dropdown For Question");
        resov.clkDropDownFontQstn.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.fontSizeSelectedForQstn, 20000, "Select Dropdown For For Question");
        resov.fontSizeSelectedForQstn.click();
        browser.sleep(2000);



        wait.waitForElementVisibility(resov.mCQquestionInput, 2000, "Question entry form not found");
        questioninput = "Describe Bangalore"
        resov.mCQquestionInput.sendKeys(questioninput);
        browser.sleep(1000);

        
        expect(resov.assertFontForQstn.isPresent()).toBeTruthy().then(function () {
            console.log("Question Displayed In Selected Font Size For Subjective Question Set");
        })
        
    

        wait.waitForElementVisibility(resov.clkDropDownFontAns1, 20000, "Click Font Dropdown For Answer1 Not Found");
        resov.clkDropDownFontAns1.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.fontSizeSelectedForAns1, 20000, "Select Dropdown For For Answer1 Not Found");
        resov.fontSizeSelectedForAns1.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(resov.McqOptionInput1, 2000, "Question entry form not found");
        option1 = "Bangalore Is Capital Of KARNATAKA"
        resov.McqOptionInput1.sendKeys(option1);
        browser.sleep(1000);

        expect(resov.assertFontForAns1.isPresent()).toBeTruthy().then(function () {
            console.log("Answer Displayed In Selected Font Size For Subjective Question Set");
        })

        
    }
    catch (e) {
        console.log("Unable To Create Question Set and Add Image")
    }
}

module.exports = {
    createResource,
    sendForReviewTheResource,
    publishTheResourceFromUpForReview,
    createQuestion,
    addQuestionsAfterSearching,
    copyQuestion,
    createQuestionMTF,
    bundleQuestion,
    createResourceWithHideAction,
    resourceName,
    addSlidesImageText,
    previewSlidesOfQuestionFromBegining,
    verifySettingFeatures,
    addCollaboratorOnly,
    collaboratorSendTheResourceForReview,
    checkTheCourseInReviewSubmision,
    removeCollaborator,
    unavailbleInCollaboratorSendTheResourceForReview,
    reviewInSubmissions,
    rejectLessonPlan,
    editTheContentInDraft,
    navigateToLibraryAndSearchContent,
    editTheCourseInDraft,
    createQuestionFITBWithAllStyles,
    saveAndSendResouceForReview,
    searchInUpForReview,
    resourcePublishAndSearch,
    ConsumeResourceAndValidateScoreForFITB,
    deleteCreatedItems,
    createQuestionMCQWithFormualAndAllStyles,
    ConsumeResourceAndValidateScoreForMCQ,
    createQuestionMTFWithFormulaAndAllStyle,
    ConsumeResourceAndValidateScoreForMTF,
    createQuestionsWith4MCQ4FTB4MTF,
    saveAndSendResouceForReview4MFM,
    navigateToLibraryAndSearchForResource,
    createQuestionArrangeSequenceTemplateWithAllStyles,
    ConsumeResourceAndValidateScoreForArrangeSequenceTemplate,
    createQuestionReOrderingWithAllStyles,
    ConsumeResourceAndValidateScoreForReOrderingTemplate,
    rejectUploadedContent,
    createQuestionFITB,
    createQuestionMCQ,
    CreateQnMTFWithRichTextEditorFeatures,
    CreateQuestionFITBWithTwentyBlanks,
    ResumeAndCloseEditor,
    sendForLimitedSharing,
    deleteButton,
    clickingTheResourceFromShareViaLinkBucket,
    VerifyDefaultLicense,
    copyrightAndAttributes,
    reOrderingWordsWithRegionalLanguage,
    NoDeleteOptionInSubmittedForReview,
    sendForReviewInShareVialink,
    linkShareViaLink,
    verifyContributorsCount,
    sendForReviewInShareVialinkForLessonPlan,
    publishTheLessonFromUpForReview,
    previewResource,
    VerifyCoursePage,
    clickingTheResourceFromPublishedBucket,
    sendForReviewTheResourceAfterEditing,
    CreateQuestionAndSubmit,
    copyQuestioninQnSet,
    createQuestionFITBWithAllDetails,
    editTheContentInDraftForCollections,
    createQuestionFITBAbhi,
    sendForReviewTheResourceWithTVLesson,
    ConsumeResourceAndValidateScoreForRegionalLangReOrderingTemplate,
    createResourceWithTVLesson,
    fillQusetionMetaDataForm,
    addPluginActivtyInResourceEditor,
    addTimerInResourceEditor,
    addProgressBarInResourceEditor,
    ConsumeResourceAndValidateRatingContent,
    ValidateRatingContentInRegionalLang,
    ConsumeUploadContent,
    sendForReviewTheResourceWithTVLessonInAdditionalCateg,
    rejectCourse,
    VolumeMuteUnmute,
    questionSetCreation,
    questionSetPublish,
    GuestUserPreferencesForBMCInHomePage,
    LoggedUserPreferencesForBMCInHomePage,
    verifyBoardSubjectAndCategories,
    browseSeactionInExplorePage,
    browseBoardSubSeactionInExplorePage,
    VerifyHomePageWhenUserClicksBackBtnFromBrowseBySubject,
    VerifyBackBtbAfterClickingOnBrowseByAudience,
    HomePageDisplayedOnClickCloseBtnFromBrowseBtCategory,
    changePreferencePopup,
    contentSearchInDraftAndEditAndValidate,
    createResourceAndValidateIcons,
    filterRetainedInAllTabs,
    userSltFiltersInDifferntTabs,
    filterRetainedFromHomeTabToAnother,
    viewAllInNCERTab,
    FourCourseOrTextBookinNCERTSection,
    VerifyUserVisitsAndDisplyFAQ,
    removeCollboratortoDraftAndSaveBook,
    VerifyUserIsAbleToClickHelpAndSeeFAQ,
    verifyListOfFAQsDisplayedPostClickingHelp,
    addQuestionSetAndTimerWithWarningTime,
    AlertTimeIsDisplayed,
    verifyWarningTimeDisplayed,
    createSubjectiveQuestionSet,
    addQuestionSetAndTimer,
    verifyQuestionSet,
    createQuestionSetWithDifferentLayouts,
    verifTypeOfLayoutCreated,
    previewAndConsumeQuestionSet,
    verifyUserIsAbleToCreateQUMLTypeContent,
    VerifyUserShouldBeAbleToCreateMQCTypeContent,
    verifyContentInAllTabs,
    recentlyPublisedSecInHomePage,
    ContinueLearningSecInHomePage,
    sendForRevInLessonPlanContent,
    editTheResourceInDraft,
    rejectTheLessonPlan,
    scrollTabs,
    userSltFiltersInDifferntTabsByKeyboardEvents,
    userSltDifferentTabsUsingKeyboardEvents,
    switchToClassicTheme,
    validateRichTextInQuestionSetCreation,
    VerifyContentDisplayedInRecentlyPublishedSecInHomePage,
    createQuestionSet,
    createQuestionWithRichtextValidation,
    createResourceForTextbook,
    sendForReviewResource,
    pickContentFromDraftAfterClosingTheEditor,
    createCourseAssessmentFordefaultDisplayScore,
    createCourseAssessmentForDisplayScoreNo,
    verifyCreatorIsAbleToPreviewTheQuestionSet,
    verifyCreatorIsAbleToCreateQuestionAndAnswerInBoldItalicsUnderlinedText,
    verifyCreatorIsAbleToCreateQuestionAndAnswerWithTextHavingDifferentFontSize,

}