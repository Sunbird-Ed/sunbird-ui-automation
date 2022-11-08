const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var content = ccpage.contentCreation();
var etbv = etbpage.etb();
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
var san = sanityPage.SanityElement();
var sanity = sanityPage.SanityElement();

const createCollection = () => {
    var collectionName;
    try {
        console.log("User is trying to create a collection")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.collection), 20000, "collection page not loaded");
        content.collection.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        collectionName = "CollectionA" + faker.randomData().firstname;
        content.name.sendKeys(collectionName);
        browser.sleep(200);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.collectionType);
        wait.waitForElementVisibility(etbv.collectionType, 30000, "collectionType button not available");
        etbv.collectionType.click();
        browser.sleep(200);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentResource);
        etbv.contentResource.click();

        content.startCreating.click();
        browser.sleep(4000);
        browser.sleep(8000);

        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //  browser.sleep(4000);
        // sanityPage.SanityElement().clkKeyworkCollection.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('Keyword');
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkKeyworkCollection), 20000, "tag not available");
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('test');
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        // browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);

        // sanityPage.SanityElement().courseadditionalCategory.click();
        // browser.sleep(200);
        // sanityPage.SanityElement().selectAdditionalForcollection.click();
        // browser.sleep(200);


        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(4000);
        sanityPage.SanityElement().selectBoardForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectBoardValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectMediumForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectMediumValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectClassValueForcollection.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(8000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");


        console.log("User successfully created a collection");
        return collectionName;
    } catch (Exception) {
        console.log("User failed to create a collection");
    }
}
const sendForReviewTheCollection = () => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.sendForReview), 20000, "send for review not available");
    content.sendForReview.click();
    browser.sleep(5000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
    etbv.clickAppIcon.click();

    browser.sleep(3000);
    wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
    etbv.allImage.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
    etbv.myImage.click();

    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 50000, "checkAppIcon button not available");
    etbv.checkAppIcon.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 50000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(1000);
    //  browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
    // browser.sleep(1000);
    //  browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickBoard), 30000, "board button not available");
    // etbv.clickBoard.click();
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectBoard), 30000, "contuinew button not available");
    // etbv.selectBoard.click();
    // browser.sleep(1000);
    // etbv.clickMedium.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
    // etbv.selectMedium.click();
    // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
    // etbv.clickclass.click();
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectClass), 30000, "contuinew button not available");
    // etbv.SelectClass.click();
    // etbv.clicksubject.click();
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectSubject), 30000, "contuinew button not available");
    // etbv.selectSubject.click();
    // browser.sleep(500);
    // browser.executeScript("arguments[0].scrollIntoView();", content.author);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
    // content.author.click();
    // content.author.sendKeys("Ekstep");
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
    etbv.yearOfCreation.click();
    etbv.yearOfCreation.clear();
    etbv.yearOfCreation.sendKeys("2020");
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
    content.saveform.click();
    browser.sleep(6000);
}
const publishTheCollectionFromUpForReview = (collectionname) => {
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000, "Creation page not loaded");
    content.upForReview.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
    content.searchForReview.click();
    content.searchForReview.sendKeys(collectionname);
    //content.searchIconUpForReview.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
    content.searchedContentForPublish.click();
    browser.sleep(2000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(4000);
    //browser.wait(protractor.ExpectedConditions.visibilityOf(content.publishCourseButton), 20000,"Creation page not loaded");
    content.publishCourseButton.click();
    browser.sleep(1000);
    // content.checkBox.each(function (input) {
    // input.click()});
    browser.sleep(6000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(content.popupPublishButton1), 20000, "Creation page not loaded");
    content.popupPublishButton1.click();
    console.log("published the collection");
    browser.switchTo().defaultContent();
    browser.sleep(1000);
}
const clickLibraryPage = () => {
    try {
        console.log("User is trying to click library page");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickLibray), 20000, "clickLibray is not available");
        content.clickLibray.click();
        browser.sleep(1000);
    }
    catch (Exception) {
        console.log("Failed on Clicking Library Page");
    }
}

const shareTheConentUsingLink = (contentName) => {
    var contentNameFetch;
    var link;

    try {
        console.log("User is trying to verify Course can be shared via link  " + contentName);
        content.searchInput.sendKeys(contentName);
        console.log("course name Entered   " + contentName);

        content.searchIcon.click();
        browser.sleep(1000);
        console.log("Click on Search icon");

        content.collecclick.click();
        browser.sleep(2000);
        console.log("Clicked on First Content");

        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.fetchContentName), 20000, "fetchContentName is not available");
        //  contentNameFetch = content.fetchContentName.getText();
        //  console.log("Content " + contentNameFetch);


        content.clickShare.click();
        console.log("Click on Search icon");
        browser.sleep(1000);
        content.clickCopy.click();
        console.log("Clicked on CopyLink");
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.closeIconInShare), 20000, "closeIconInShare is not available");
        browser.sleep(1000);
        content.closeIconInShare.click();
        // console.log("Click on copyClose icon");
        // browser.sleep(1000);
        // content.closeicon.click();
        // browser.sleep(1000);

        console.log("Click on main Close icon");
        // navigator.clipboard.readText()
        // .then(Link => {
        //   console.log('Pasted content: ', Link);
        // })
        // .catch(err => {
        //   console.error('Failed to read clipboard contents: ', err);
        // });    

        return link,
            contentNameFetch;
    }
    catch (exception) {
        console.error("Failed to verify Share Content");
    }
}

const verifyCollection = () => {
    var collectionname;
    var toContent;
    try {

        //         browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'v')).perform();
        //   browser.actions().sendKeys(protractor.Key.chord(protractor.Key.ENTER)).perform();
        //   browser.sleep(9000);


        // browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'v')).perform();



        console.log("Verify through CopyLink and able to get resource Name");
        browser.get(ss);
        browser.sleep(2000);
        console.log("Add Copied link in URL");
        collectionname = content.fetchContentName.getText()
        expect(collectionname).toEqual(contentNameFetch);
        console.log("Content Shared Succesfully  " + contentNameFetch);

        // try
        // {
        //     content.playSharedContent.click();
        //     browser.sleep(1000);
        //     console.log("Content is playing");
        //      toContent= content.fetchContentName.getText();
        //     console.log("TOC Content Played Succesfully  " + tocContent);

        // }
        // catch(exception)
        // {
        //     console.log("Exception Handled");
        // }
        return {
            collectionname,
            toContent
        }
    }
    catch (Exception) {
        console.log("failed to verify");
    }
}

const verifyResource = () => {
    var Resourcename;
    var cont;
    try {
        browser.get("https://preprod.ntp.net.in/play/content/do_31257982245632409629620", 40000);
        browser.sleep(2000);
        console.log("Add Copied link in URL");
        Resourcename = content.fetchContentName.getText();
        expect(Resourcename).toEqual(contentNameFetch);
        console.log("Content Shared Succesfully  " + contentNameFetch);
        // try
        // {
        //     content.playSharedContent.click();
        //     browser.sleep(1000);
        //     console.log("Content is playing");
        //      cont= content.fetchContentName.getText();
        //     console.log("TOC Content Played Succesfully  " + cont);
        // }
        // catch(exception)
        // {
        //     console.log("Exception Handled");
        // }
        return {
            cont,
            Resourcename,
        }
    }
    catch (Exception) {
        console.log("failed to verify");
    }
}
const clickTrainingPage = () => {
    try {
        console.log("User is trying to click Training page");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 20000, "headerCourse is not available");
        content.headerCourse.click();
        browser.sleep(1000);
    }
    catch (Exception) {
        console.log("Failed on Clicking Training Page");
    }
}

const ZoomInZoomout = () => {
    try {
        console.log("User is trying to ZoomInZoomout");
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.zoomIn), 20000, "zoomIn is not available");
        content.zoomIn.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.zoomOut), 20000, "zoomOut is not available");
        content.zoomOut.click();
        console.log("User is trying to ZoomInZoomout");
    }
    catch (Exception) {
        console.log("Failed on ZoomInZoomout");
    }
}
const SearchAddContentInCollection = () => {

    var collectionName;
    try {
        console.log("User is trying to create a collection")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.collection), 20000, "collection page not loaded");
        content.collection.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        collectionName = "CollectionA" + faker.randomData().firstname;
        content.name.sendKeys(collectionName);
        browser.sleep(200);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.collectionType);
        wait.waitForElementVisibility(etbv.collectionType, 30000, "collectionType button not available");
        etbv.collectionType.click();
        browser.sleep(200);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentResource);
        etbv.contentResource.click();

        content.startCreating.click();
        browser.sleep(4000);
        browser.sleep(8000);

        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //  browser.sleep(4000);
        // sanityPage.SanityElement().clkKeyworkCollection.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('Keyword');
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkKeyworkCollection), 20000, "tag not available");
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('test');
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        // browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);

        // sanityPage.SanityElement().courseadditionalCategory.click();
        // browser.sleep(200);
        // sanityPage.SanityElement().selectAdditionalForcollection.click();
        // browser.sleep(200);


        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(4000);

        sanityPage.SanityElement().selectBoardForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectBoardValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectMediumForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectMediumValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectClassValueForcollection.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchContentFromLibrary), 20000, "searchContentFromLibrary not loaded");
        expect(sanityPage.SanityElement().searchContentFromLibrary.isPresent()).toBeTruthy().then(function () {
            console.log("Search input is validated and able to search")
        })
        //sanityPage.SanityElement().searchContentFromLibrary.click();
        sanityPage.SanityElement().searchContentFromLibrary.sendKeys("mp4");
        browser.sleep(3000);
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
        //browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");


        console.log("User successfully created a collection");
        return collectionName;
    } catch (Exception) {
        console.log("User failed to create a collection");
    }
}

const createCollectionAddCollaborator = () => {

    try {

        console.log("Creating a course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.collection), 20000, "collection page not loaded");
        content.collection.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        collectionName = "CollectionA" + faker.randomData().firstname;
        content.name.sendKeys(collectionName);
        browser.sleep(200);
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "newChild not available");
        searchObj.newChild.click();
        browser.sleep(2000);
        if (searchObj.collaboratorIcon.isDisplayed()) {
            console.log("Collaborator icon is present");
        }
        browser.sleep(1000);
        searchObj.collaboratorIcon.click();
        console.log("User should be able to click on collaborator icon");
        browser.sleep(5000);
        searchObj.collaboratorSearch.click();
        searchObj.collaboratorSearch.sendKeys("Creator");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestedCollaborator), 20000, "suggestedCollaborator not available");
        searchObj.suggestedCollaborator.click();
        browser.sleep(1500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.donebutton1), 20000, "donebutton1 not available");
        searchObj.donebutton1.click();
        browser.sleep(2000);
        searchObj.save.click();
        browser.sleep(2000);
        searchObj.closeEditor1.click();
        browser.sleep(4000);
        console.log("User successfully added multiple collaborator");

    }
    catch (Exception) {
        console.log("Failed to edit course by collaborator");
    }
}

const createCollectionAndSave = () => {

    var collectionName;
    try {
        console.log("User is trying to create a collection")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.collection), 20000, "collection page not loaded");
        content.collection.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        collectionName = "CollectionA" + faker.randomData().firstname;
        content.name.sendKeys(collectionName);
        browser.sleep(200);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.collectionType);
        wait.waitForElementVisibility(etbv.collectionType, 30000, "collectionType button not available");
        etbv.collectionType.click();
        browser.sleep(200);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentResource);
        etbv.contentResource.click();

        content.startCreating.click();
        browser.sleep(4000);
        browser.sleep(8000);

        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //  browser.sleep(4000);
        // sanityPage.SanityElement().clkKeyworkCollection.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('Keyword');
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkKeyworkCollection), 20000, "tag not available");
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('test');
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        // browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);

        // sanityPage.SanityElement().courseadditionalCategory.click();
        // browser.sleep(200);
        // sanityPage.SanityElement().selectAdditionalForcollection.click();
        // browser.sleep(200);


        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(4000);

        sanityPage.SanityElement().selectBoardForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectBoardValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectMediumForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectMediumValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectClassValueForcollection.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkContent.click();
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);
        sendForReviewTheCollectionWithimageIcon();

        console.log("User successfully created a collection");
        return collectionName;
    } catch (Exception) {
        console.log("User failed to create a collection");
    }
}


const createCollectionWithGenerateQRCodes = () => {
    try {


        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.collection), 20000, "collection page not loaded");
        content.collection.click();
        browser.sleep(200);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        collectionName = "CollectionA" + faker.randomData().firstname;
        content.name.sendKeys(collectionName);
        browser.sleep(200);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.collectionType);
        wait.waitForElementVisibility(etbv.collectionType, 30000, "collectionType button not available");
        etbv.collectionType.click();
        browser.sleep(200);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentResource);
        etbv.contentResource.click();

        content.startCreating.click();
        browser.sleep(4000);
        browser.sleep(8000);
        browser.executeScript("arguments[0].scrollIntoView();", ccpage.contentCreation().qrCodeRequred);
        ccpage.contentCreation().qrCodeRequred.click();
        browser.executeScript('window.scrollTo(0,920);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);

        sanityPage.SanityElement().selectBoardForcollection.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectBoardValueForcollection.click();
        browser.sleep(3000);

        sanityPage.SanityElement().selectMediumForcollection.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectMediumValueForcollection.click();
        browser.sleep(3000);

        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectClassValueForcollection.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);
        ccpage.contentCreation().qrCodeRequred.click();

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(9000);




        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkDropDownQrcode), 20000, "clkDropDownQrcode not available");
        sanityPage.SanityElement().clkDropDownQrcode.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkGenerateQrCode2.click();
        browser.sleep(4000);
        // sanityPage.SanityElement().QrCodeValueEnter.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().QrCodeValueEnter.sendKeys('2');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkReqestQrCode), 20000, "clkReqestQrCode not available");
        // sanityPage.SanityElement().clkReqestQrCode.click();
        // browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().QRcodeTostrMsg), 20000, "QRcodeTostrMsg not available");
        expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
        console.log('QR Code Generated Succesfully');
        browser.sleep(3000);


    }
    catch (err) {
        console.log(err);
    }
}


const createCollectionWithDiffCollectionTypes = (collectionType) => {

    var collectionName;
    try {
        console.log("User is trying to create a collection")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.collection), 20000, "collection page not loaded");
        content.collection.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        collectionName = "CollectionA" + faker.randomData().firstname;
        content.name.sendKeys(collectionName);
        browser.sleep(200);

        //browser.executeScript("arguments[0].scrollIntoView();", etbv.collectionType);
        wait.waitForElementVisibility(etbv.collectionType, 30000, "collectionType button not available");
        etbv.collectionType.click();
        browser.sleep(200);
        if (collectionType === "digitalTxtbook") {
            (etbv.contentResource.getText()).then(function (input) {
                expect(input).toEqual("Digital Textbook");
                console.log("Digital Textbook is validated")
            })
            wait.waitForElementVisibility(etbv.contentResource, 30000, "collectionType button not available");
            etbv.contentResource.click();
            browser.sleep(200);
        } else if (collectionType === "contentPlaylist") {
            (etbv.contentCollType.getText()).then(function (input) {
                expect(input).toEqual("Content Playlist");
                console.log("Content playlist is validated")
            })
            wait.waitForElementVisibility(etbv.questionCollType, 30000, "collectionType button not available");
            etbv.contentCollType.click();
            browser.sleep(200);
        } else if (collectionType === "questionPaper") {
            (etbv.questionCollType.getText()).then(function (input) {
                expect(input).toEqual("Question paper");
                console.log("Question paper is validated")
            })
            wait.waitForElementVisibility(etbv.contentCollType, 30000, "collectionType button not available");
            etbv.questionCollType.click();
            browser.sleep(200);
        }
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.contentResource);
        // etbv.contentResource.click();

        content.startCreating.click();
        browser.sleep(4000);
        browser.sleep(8000);

        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //  browser.sleep(4000);
        // sanityPage.SanityElement().clkKeyworkCollection.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('Keyword');
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkKeyworkCollection), 20000, "tag not available");
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('test');
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        // browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);

        // sanityPage.SanityElement().courseadditionalCategory.click();
        // browser.sleep(200);
        // sanityPage.SanityElement().selectAdditionalForcollection.click();
        // browser.sleep(200);


        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(4000);

        sanityPage.SanityElement().selectBoardForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectBoardValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectMediumForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectMediumValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectClassValueForcollection.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(10000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        //sanityPage.SanityElement().searchContentFromLibrary.sendKeys("pdf");
        // sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);
        //browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");
        browser.sleep(3000);

        console.log("User successfully created a collection");
        return collectionName;
    } catch (Exception) {
        console.log("User failed to create a collection");
    }
}

const validatecollectionAttributes = () => {

    try {
        console.log("User is validating Name,Description and Collection type attributes after clicking on collection button");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.collection), 20000, "collection page not loaded");
        content.collection.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");

        expect(content.name.isDisplayed()).toBeTruthy().then(function () {
            collectionName = "CollectionA" + faker.randomData().firstname;
            content.name.sendKeys(collectionName);
            console.log("Name entry box is validated after clicking collection button")
            browser.sleep(3000);
        })
        expect(content.collectionDescription.isDisplayed()).toBeTruthy().then(function () {
            console.log("Description Entry box is validated after clicking collection button");
            browser.sleep(3000);
        })
        expect(etbv.collectionType.isDisplayed()).toBeTruthy().then(function () {
            etbv.collectionType.click();
            browser.sleep(3000);
            console.log("CollectionType is validated after clicking collection button");

            (etbv.contentResource.getText()).then(function (input1) {
                expect(input1).toEqual("Digital Textbook");
                console.log("Digital Textbook is validated")
            })
            browser.sleep(2000);
            (etbv.contentCollType.getText()).then(function (input2) {
                expect(input2).toEqual("Content Playlist");
                console.log("Content playlist is validated")
            })
            browser.sleep(2000);
            (etbv.questionCollType.getText()).then(function (input3) {
                expect(input3).toEqual("Question paper");
                console.log("Question paper is validated");
            })
            browser.sleep(2000);
        })

    } catch (Exception) {
        console.log("User is failed to validate Name,Description and Collection type attributes after clicking on collection button");
    }
}





const updateCollectionAndSendForReviewFromDraft = (courseNames) => {
    try {
        console.log("User able to search and edit draft")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(6000);
        expect(resov.drafts.isPresent()).toBeTruthy();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.sleep(3000);
        expect(resov.drafts.isPresent()).toBeTruthy();
        browser.sleep(300);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(courseNames);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);
        // sanityPage.SanityElement().courseadditionalCategory.click();
        // browser.sleep(200);
        // sanityPage.SanityElement().selectAdditionalForcollection.click();
        // browser.sleep(200);
        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);
        sanityPage.SanityElement().selectBoardForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectBoardValueForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectMediumForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectMediumValueForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectClassValueForcollection.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(3000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);
        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");
        console.log("User successfully created a collection");
        return collectionName;
    } catch (Exception) {
        console.log("User failed to create a collection");
    }
}


const createCollectionAndSaveAsDraft = () => {
    var collectionName;
    try {
        console.log("User is trying to create a collection")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.collection), 20000, "collection page not loaded");
        content.collection.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        collectionName = "CollectionB" + faker.randomData().firstname;
        content.name.sendKeys(collectionName);
        browser.sleep(200);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.collectionType);
        wait.waitForElementVisibility(etbv.collectionType, 30000, "collectionType button not available");
        etbv.collectionType.click();
        browser.sleep(200);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.contentResource);
        etbv.contentResource.click();

        content.startCreating.click();
        browser.sleep(4000);
        browser.sleep(8000);

        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //  browser.sleep(4000);
        // sanityPage.SanityElement().clkKeyworkCollection.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('Keyword');
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkKeyworkCollection), 20000, "tag not available");
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('test');
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        // browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);

        // sanityPage.SanityElement().courseadditionalCategory.click();
        // browser.sleep(200);
        // sanityPage.SanityElement().selectAdditionalForcollection.click();
        // browser.sleep(200);


        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(4000);

        sanityPage.SanityElement().selectBoardForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectBoardValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectMediumForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectMediumValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectClassValueForcollection.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkContent.click();
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().baackButton.click();
        browser.sleep(3000);
        console.log("User successfully created a collection");
        return collectionName;
    } catch (Exception) {
        console.log("User failed to create a collection");
    }
}

const sendForReviewTheCollectionWithimageIcon = () => {
    browser.sleep(2000);
    try {
        //browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.collectionAppIcon), 50000, "clickAppIcon button not available");
        etbv.collectionAppIcon.click();
    } catch (Exception) {
        console.log("Image icon is clicked and validated.");
    }
    browser.sleep(3000);
    wait.waitForElementVisibility(etbv.collAllImage, 30000, "allImage button not available");
    etbv.collAllImage.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.collMyImage, 30000, "myImage button not available");
    etbv.collMyImage.click();

    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.collAppIcon), 50000, "checkAppIcon button not available");
    etbv.collAppIcon.click();
    browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 50000, "selectAppIcon button not available");
    // etbv.selectAppIcon.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
    // content.saveform.click();
    // browser.sleep(6000);
    browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().submitForreviewButton);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
    sanityPage.SanityElement().submitForreviewButton.click();
    browser.sleep(3000);
    sanityPage.SanityElement().termsAndConditionCheckbox.click();
    browser.sleep(3000);
    //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
    sanityPage.SanityElement().NewCoursesubmitButton.click();
    browser.sleep(3000);
}


const createCollectionWithDiffCollectionTypesAndSaveAsDraft = (collectionType) => {

    var collectionName;
    try {
        console.log("User is trying to create a collection")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.collection), 20000, "collection page not loaded");
        content.collection.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        collectionName = "CollectionA" + faker.randomData().firstname;
        content.name.sendKeys(collectionName);
        browser.sleep(200);

        //browser.executeScript("arguments[0].scrollIntoView();", etbv.collectionType);
        wait.waitForElementVisibility(etbv.collectionType, 30000, "collectionType button not available");
        etbv.collectionType.click();
        browser.sleep(200);
        if (collectionType === "digitalTxtbook") {
            (etbv.contentResource.getText()).then(function (input) {
                expect(input).toEqual("Digital Textbook");
                console.log("Digital Textbook is validated")
            })
            wait.waitForElementVisibility(etbv.contentResource, 30000, "collectionType button not available");
            etbv.contentResource.click();
            browser.sleep(200);
        } else if (collectionType === "contentPlaylist") {
            (etbv.contentCollType.getText()).then(function (input) {
                expect(input).toEqual("Content Playlist");
                console.log("Content playlist is validated")
            })
            wait.waitForElementVisibility(etbv.questionCollType, 30000, "collectionType button not available");
            etbv.contentCollType.click();
            browser.sleep(200);
        } else if (collectionType === "questionPaper") {
            (etbv.questionCollType.getText()).then(function (input) {
                expect(input).toEqual("Question paper");
                console.log("Question paper is validated")
            })
            wait.waitForElementVisibility(etbv.contentCollType, 30000, "collectionType button not available");
            etbv.questionCollType.click();
            browser.sleep(200);
        }
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.contentResource);
        // etbv.contentResource.click();

        content.startCreating.click();
        browser.sleep(4000);
        browser.sleep(8000);

        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //  browser.sleep(4000);
        // sanityPage.SanityElement().clkKeyworkCollection.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('Keyword');
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkKeyworkCollection), 20000, "tag not available");
        // sanityPage.SanityElement().clkKeyworkCollection.sendKeys('test');
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        // browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);

        // sanityPage.SanityElement().courseadditionalCategory.click();
        // browser.sleep(200);
        // sanityPage.SanityElement().selectAdditionalForcollection.click();
        // browser.sleep(200);


        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(4000);

        sanityPage.SanityElement().selectBoardForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectBoardValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectMediumForcollection.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectMediumValueForcollection.click();
        browser.sleep(200);

        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectClassValueForcollection.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(10000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        //sanityPage.SanityElement().searchContentFromLibrary.sendKeys("pdf");
        // sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);
        //browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(10000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);
        console.log("User successfully created a collection");
        return collectionName;
    } catch (Exception) {
        console.log("User failed to create a collection");
    }
}


const submitForReview = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);

    } catch (Exception) {
        console.log("User failed to create a collection");
    }
}





module.exports = {
    createCollection,
    sendForReviewTheCollection,
    publishTheCollectionFromUpForReview,
    clickLibraryPage,
    shareTheConentUsingLink,
    verifyCollection,
    verifyResource,
    clickTrainingPage,
    ZoomInZoomout,
    SearchAddContentInCollection,
    createCollectionAddCollaborator,
    createCollectionAndSave,
    createCollectionWithGenerateQRCodes,
    createCollectionWithDiffCollectionTypes,
    validatecollectionAttributes,
    sendForReviewTheCollectionWithimageIcon,
    updateCollectionAndSendForReviewFromDraft,
    createCollectionAndSaveAsDraft,
    createCollectionWithDiffCollectionTypesAndSaveAsDraft,
    submitForReview,


}