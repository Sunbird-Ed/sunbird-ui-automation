//const { browser } = require("protractor");

const { browser } = require("protractor");

const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var content = ccpage.contentCreation();
var etbv = etbpage.etb();
const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
const resourcePag = require(protractor.basePath + '/test/pages/resource/resource.po.js');
var resov = resourcePag.resource();
const tpdPage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
var searchObj = tpdPage.tpdPage();


const createLessonPlan = () => {
    var lessonName;
    try {
        console.log("User is trying to create lesson plan")
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.lessonPlan), 20000, "content page not loaded");
        content.lessonPlan.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        lessonName = "LessonA" + faker.randomData().firstname;
        content.name.sendKeys(lessonName);
        browser.sleep(2000);

        //browser.executeScript("arguments[0].scrollIntoView();", etbv.collectionType);
        // wait.waitForElementVisibility(etbv.collectionType, 30000, "collectionType button not available");
        // etbv.collectionType.click();
        // browser.sleep(1000);
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.contentResource);
        // etbv.contentResource.click();

        content.startCreating.click();
        browser.sleep(9000);
        browser.sleep(9000);
        browser.sleep(9000);
        browser.sleep(9000);
        browser.sleep(8000);

        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        content.newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.untitledUnitName), 20000, "title not available");
        content.untitledUnitName.click();
        content.untitledUnitName.clear();
        content.untitledUnitName.sendKeys(lessonName);
        wait.waitForElementVisibility(content.fieldLessonPlanDesc, 20000);
        content.fieldLessonPlanDesc.click();
        browser.sleep(4000);
        content.fieldLessonPlanDesc.sendKeys(faker.randomData().words);
        wait.waitForElementVisibility(content.fieldAddNotes, 20000);
        browser.sleep(500);
        content.fieldAddNotes.sendKeys(faker.randomData().words);
        browser.sleep(4000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("pdf");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();

        // browser.sleep(5000);
        // content.checkboxFirst.click();
        // browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();
        // browser.switchTo().defaultContent(); 
        browser.sleep(1000);
        console.log("User successfully created lesson plan")
        return lessonName;
    }
    catch (Exception) {
        console.log("User failed to create lesson plan")
    }
}



const sendForReviewTheLessonPlan = () => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.sendForReview), 20000, "send for review not available");
    content.sendForReview.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
    etbv.clickAppIcon.click();

    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
    etbv.allImage.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
    etbv.myImage.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "cocheckAppIconntuinew button not available");
    etbv.checkAppIcon.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
    browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickBoard), 30000, "board button not available");
    etbv.clickBoard.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectBoard), 30000, "contuinew button not available");
    etbv.selectBoard.click();
    etbv.clickMedium.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "selectMedium button not available");
    etbv.selectMedium.click();
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
    etbv.clickclass.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectClass), 30000, "SelectClass button not available");
    etbv.SelectClass.click();
    etbv.clicksubject.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectSubject), 30000, "selectSubject button not available");
    etbv.selectSubject.click();
    browser.sleep(500);
    // browser.executeScript("arguments[0].scrollIntoView();", content.author);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "author not available");
    // content.author.click();
    // content.author.sendKeys("Ekstep");
    browser.sleep(500);
    content.selectYear.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.year2020), 20000, "year2020 not available");
    content.year2020.click();
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
    etbv.yearOfCreation.click();
    etbv.yearOfCreation.clear();
    etbv.yearOfCreation.sendKeys("2020");
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
    content.saveform.click();
    browser.sleep(3000);
}
const publishTheLessonPlanFromUpForReview = (lessonname) => {
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000, "Creation page not loaded");
    content.upForReview.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
    content.searchForReview.click();
    content.searchForReview.sendKeys(lessonname);
    //content.searchIconUpForReview.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
    content.searchedContentForPublish.click();
    browser.sleep(2000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(3000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.publishCourseButton), 20000,"Creation page not loaded");
    content.publishCourseButton.click();
    browser.sleep(1000);
    content.checkBox.each(function (input) {
        input.click()
    });
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.popupPublishButton1), 20000, "Creation page not loaded");
    content.popupPublishButton1.click();
    browser.switchTo().defaultContent();
    browser.sleep(1000);
}
const navigateToLibraryAndSearchForResource = (content) => {
    try {
        console.log("User is trying to navigate To Library And Search For Resource");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerLibrary), 20000, " headerLibrary is not available");
        content.headerLibrary.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.filterSearch), 20000, " filterSearch is not available");
        content.filterSearch.sendkeys(content);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchIcon), 20000, " searchIcon is not available");
        content.searchIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.courseCard), 20000, "  courseCard is not available");
        content.courseCard.click();
        console.log("User successfully navigated To Library And Search For Resource");
    }
    catch (Exception) {
        console.log("Failed to navigate To Library And Search For Resource");
    }
}
const deleteCreatedItems = () => {
    // var name;
    try {
        console.log("User is trying to delete Items which are created");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.published), 20000, "published page not loaded");
        content.published.click();
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteButton), 20000, "  deleteButton is not available");
        // content.firstCourseCardName.getText().then(function(input){
        //     name=input;
        //     console.log(name);
        // });
        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteButton), 20000, "  deleteButton is not available");
        content.deleteButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.yesButtonPopup), 20000, "yesButtonPopup is not available");
        content.yesButtonPopup.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.toastMsg), 20000, "toastmsg is not available");
        // content.toastMsg.getText().then(function(input){
        //     console.log(input);
        //     expect(input).toEqual("Content deleted successfully...");
        //     });

        // browser.sleep(2000);
        // content.firstCourseCardName.getText().then(function(input){
        //     console.log(input);
        // expect(input).not.toEqual(name);

        // });

        console.log("Created content is successfully deleted from Published");
    }
    catch (exception) {
        console.log("Failed to delete Items ");
    }
}
const previewTheResource = () => {
    try {
        console.log("User is trying to preview the selected resource");
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", content.previewClick);
        content.previewClick.click();
        console.log("User successfully previewed the selected resource");
    } catch (Exception) {
        console.log("Failed to preview the selected resource");
    }
}






const deleteDraftItems = () => {
    var name;
    try {
        console.log("User is trying to delete draft Items which are created");
        //  browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        //  content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.drafts), 20000, "drafts page not loaded");
        content.drafts.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.firstCourseCardName), 20000, "  deleteButton is not available");
        content.firstCourseCardName.getText().then(function (input) {
            name = input;
            console.log(name);
        });
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteButton), 20000, "  deleteButton is not available");
        content.deleteButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.yesButtonPopup), 20000, "yesButtonPopup is not available");
        content.yesButtonPopup.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.toastMsg), 20000, "toastmsg is not available");
        content.toastMsg.getText().then(function (input) {
            console.log(input);
            expect(input).toEqual("Content deleted successfully...");
        });
        browser.sleep(2000);
        content.firstCourseCardName.getText().then(function (input) {
            console.log(input);
            //expect(input).not.toEqual(name);
            browser.sleep(2000);
        });

        console.log("draft content is successfully deleted from Published");
    }
    catch (exception) {
        console.log("Failed to delete draft Items ");
    }
}
const deleteAllMyContentItems = () => {
    var name;
    try {
        console.log("User is trying to delete allmy content Items which are created");
        browser.sleep(1000);
        //  browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        //  content.headerDropdown.click();
        //  browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        //  content.workSpace.click();
        //  browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.allMyContent), 20000, "allMyContent page not loaded");
        content.allMyContent.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteAllMyContent), 20000, "  deleteButton is not available");
        content.searchCoursesUpForReview.getText().then(function (input) {
            name = input;
            console.log(name);
        });
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteAllMyContent), 20000, "  deleteButton is not available");
        content.deleteAllMyContent.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.yesButtonPopup), 20000, "yesButtonPopup is not available");
        content.yesButtonPopup.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.toastMsg), 20000, "toastmsg is not available");
        content.toastMsg.getText().then(function (input) {
            console.log(input);
            //expect(input).toEqual("Content deleted successfully...");
        });
        browser.sleep(2000);
        content.searchCoursesUpForReview.getText().then(function (input) {
            console.log(input);
            //expect(input).not.toEqual(name);

        });

        console.log("All my content content is successfully deleted from Published");
    }
    catch (exception) {
        console.log("Failed to delete all my content Items ");
    }
}
const deleteCreatedItem = (contentData) => {
    var name;
    try {
        console.log("User is trying to delete Items which are created");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.published), 20000, "published page not loaded");
        content.published.click();
        browser.sleep(2000);

        content.SearchInPublished.click();
        content.SearchInPublished.sendKeys(contentData);
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteButton), 20000, "  deleteButton is not available");
        content.firstCourseCardName.getText().then(function (input) {
            name = input;
            console.log(name);
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteButton), 20000, "  deleteButton is not available");
        content.deleteButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.yesButtonPopup), 20000, "yesButtonPopup is not available");
        content.yesButtonPopup.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.toastMsg), 20000, "toastmsg is not available");
        // content.toastMsg.getText().then(function (input) {
        //     console.log(input);
        //     expect(input).toEqual("Content deleted successfully...");
        // });
        browser.sleep(2000);
        content.firstCourseCardName.getText().then(function (input) {
            console.log(input);
            expect(input).not.toEqual(name);

        });

        console.log("Created content is successfully deleted from Published");
    }
    catch (exception) {
        console.log("Failed to delete Items ");
    }
}
const deleteAllMyContentItem = (content) => {
    var name;
    try {
        console.log("User is trying to delete allmy content Items which are created");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.allMyContent), 20000, "allMyContent page not loaded");
        content.allMyContent.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteButton), 20000, "  deleteButton is not available");
        content.searchCoursesUpForReview.getText().then(function (input) {
            name = input;
            expect(name).toEqual(content);
            console.log("Verified content in all my content" + name);
        });
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteButton), 20000, "  deleteButton is not available");
        content.deleteButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.yesButtonPopup), 20000, "yesButtonPopup is not available");
        content.yesButtonPopup.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.toastMsg), 20000, "toastmsg is not available");
        content.toastMsg.getText().then(function (input) {
            console.log(input);
            expect(input).toEqual("Content deleted successfully...");
        });
        browser.sleep(2000);
        content.searchCoursesUpForReview.getText().then(function (input) {
            console.log(input);
            //expect(input).not.toEqual(name);

        });

        console.log("All my content content is successfully deleted from Published");
    }
    catch (exception) {
        console.log("Failed to delete all my content Items ");
    }
}

const searchAnddeleteAllMyContentItems = (content) => {
    var name;
    try {
        console.log("User is trying to delete allmy content Items which are created");

        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        // content.headerDropdown.click();
        // browser.sleep(100);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        // content.workSpace.click();
        // browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        });
        // browser.executeScript("arguments[0].scrollIntoView();", resov.allMyContent);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.allMyContent), 40000, "drafts is not available");
        resov.allMyContent.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.searchForReview), 20000, "allMyContent page not loaded");
        resov.searchForReview.sendKeys(content);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.searchCoursesUpForReview), 20000, "  deleteButton is not available");
        resov.searchCoursesUpForReview.getText().then(function (input) {
            name = input;
            console.log(name);
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.deleteContent), 20000, "  deleteButton is not available");
        resov.deleteContent.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.yesButtonPopup), 20000, "yesButtonPopup is not available");
        resov.yesButtonPopup.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.toastMsg), 20000, "toastmsg is not available");
        resov.toastMsg.getText().then(function (input) {
            console.log(input);

        });
        browser.sleep(2000);
        resov.searchCoursesUpForReview.getText().then(function (input) {
            console.log(input);
        });

        console.log("All my content content is successfully deleted from Published");
    }
    catch (exception) {
        console.log("Failed to delete all my content Items ");
    }
}

const searchAnddeleteDraftItems = (content) => {
    var name;
    try {
        console.log("User is trying to delete draft Items which are created");

        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        // content.headerDropdown.click();
        // browser.sleep(100);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        // content.workSpace.click();
        // browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.searchForReview), 20000, "allMyContent page not loaded");
        resov.searchForReview.sendKeys(content);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.searchCoursesUpForReview), 20000, "  deleteButton is not available");
        resov.searchCoursesUpForReview.getText().then(function (input) {
            name = input;
            console.log(name);
        });
        //browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,50);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.deleteButton), 20000, "  deleteButton is not available");
        resov.deleteButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.yesButtonPopup), 20000, "yesButtonPopup is not available");
        resov.yesButtonPopup.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.toastMsg), 20000, "toastmsg is not available");
        resov.toastMsg.getText().then(function (input) {
            console.log(input);

        });

        console.log("Draft content is successfully deleted from draft section");
    }
    catch (exception) {
        console.log("Failed to delete all draft Items ");
    }
}
const searchAnddeleteDraftItemsWithWorkspace = (content) => {
    var name;
    try {
        console.log("User is trying to delete draft Items which are created");

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(100);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.searchForReview), 20000, "allMyContent page not loaded");
        resov.searchForReview.sendKeys(content);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.searchCoursesUpForReview), 20000, "  deleteButton is not available");
        resov.searchCoursesUpForReview.getText().then(function (input) {
            name = input;
            console.log(name);
        });
        //browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,50);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.deleteButton), 20000, "  deleteButton is not available");
        resov.deleteButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.yesButtonPopup), 20000, "yesButtonPopup is not available");
        resov.yesButtonPopup.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.toastMsg), 20000, "toastmsg is not available");
        resov.toastMsg.getText().then(function (input) {
            console.log(input);

        });

        console.log("Draft content is successfully deleted from draft section");
    }
    catch (exception) {
        console.log("Failed to delete all draft Items ");
    }
}

const deleteUploadContent = () => {
    // var name;
    try {
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(3000);
        console.log("User is trying to delete Items which are created");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clkUploadBucket), 20000, "published page not loaded");
        content.clkUploadBucket.click();
        browser.sleep(2000);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteButton), 20000, "  deleteButton is not available");
        content.deleteButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.yesButtonPopup), 20000, "yesButtonPopup is not available");
        content.yesButtonPopup.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.toastMsg), 20000, "toastmsg is not available");
        content.toastMsg.getText().then(function (input) {
            console.log(input);
            expect(input).toEqual("Content deleted successfully...");
        });

        console.log("Created content is successfully deleted from Published");

    }
    catch (exception) {
        console.log("Failed to delete Items ");
    }
}

const verifyConsentPopup = (content) => {
    try {
        browser.sleep(2000);
        console.log("User is trying to validate consent popup");
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkLibraray), 20000, "clkLibraray  is not available");
        sanityPage.SanityElement().clkLibraray.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.sendKeys(content);
        browser.sleep(2000);
        sanityPage.SanityElement().clkSearchLib.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(2000);
        searchObj.joinCourse.click();
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.doNotShare);
        searchObj.doNotShare.click();

    }
    catch (Exception) {
        console.log("Failed to validate consent popup");
    }
}

const verifyProfileSharingUpdate = (content) => {
    try {
        browser.sleep(2000);
        console.log("User is trying to validate consent popup");
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkLibraray), 20000, "clkLibraray  is not available");
        sanityPage.SanityElement().clkLibraray.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.sendKeys(content);
        browser.sleep(2000);
        sanityPage.SanityElement().clkSearchLib.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(2000);
        searchObj.joinCourse.click();
        browser.sleep(2000);
        searchObj.termsAndConditions.getText().then(function (input) {
            var tnc = "I consent to share my details with the administrators of this course. All course administrators are bound by the Privacy Policy and Course Terms in their use of my data.";
            (input).includes(tnc);
        })
        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);
        
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(5000);
        wait.waitForElementVisibility(searchObj.profileDataSharingDrpdwn, 20000, "profile data sharing drop down");
        searchObj.profileDataSharingDrpdwn.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(1000,2000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(1000);
        wait.waitForElementVisibility(searchObj.updateButton, 20000, "update button is not found");
        searchObj.updateButton.click();
        browser.sleep(2000);

        // wait.waitForElementVisibility(searchObj.sharemyProfileDetails, 20000, "share profile details radio button is not present");
        // searchObj.shareMyProfileDetails.click();
        // browser.sleep(2000);
        // wait.waitForElementVisibility(searchobj.profileDataSharingSaveButton, 20000, "profileDataSharingSaveButton is not enabled");
        // searchObj.profileDataSharingSaveButton.click();
        // browser.sleep(2000);
        // searchObj.termsAndConditions.getText().then(function (input) {
        //     var tnc = "I consent to share my details with the administrators of this course. All course administrators are bound by the Privacy Policy and Course Terms in their use of my data.";
        //     (input).includes(tnc);
        // })
        // browser.sleep(2000);
        // searchObj.doNotShare.click();

    }
    catch (Exception) {
        console.log("Failed to validate consent popup");
    }
}




module.exports = {
    createLessonPlan,
    sendForReviewTheLessonPlan,
    publishTheLessonPlanFromUpForReview,
    navigateToLibraryAndSearchForResource,
    deleteCreatedItems,
    previewTheResource,
    deleteDraftItems,
    deleteAllMyContentItems,
    deleteCreatedItem,
    deleteAllMyContentItem,
    searchAnddeleteAllMyContentItems,
    searchAnddeleteDraftItems,
    searchAnddeleteDraftItemsWithWorkspace,
    deleteUploadContent,
    verifyConsentPopup,
    verifyProfileSharingUpdate,


}