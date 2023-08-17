//const { browser } = require('protractor');

const { browser } = require('protractor');


const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
const wait = require(protractor.basePath + '/helper/waiters.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const etbpage = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
const usrOnBoard = require(protractor.basePath + '/test/pages/userOnBoarding/UserOnBoardingPage.js')
var etbv = etbpage.etb();
var content = ccpage.contentCreation();
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var driver = browser.driver;
var frme = by.tagName('iframe');
var san = sanityPage.SanityElement();
var sanity = sanityPage.SanityElement();
const tpdPage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
var searchObj = tpdPage.tpdPage();
const resourcePag = require(protractor.basePath + '/test/pages/resource/resource.po.js');
var resov = resourcePag.resource();

const verifySearchBookInLibraryPage = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchBoxForBook), 20000, "Serchbox for QR code  is not available");
        sanityPage.SanityElement().searchBoxForBook.sendKeys('V2W2T6');
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickSeaarchButton), 20000, "SerchButton for QR code  is not available");
        sanityPage.SanityElement().clickSeaarchButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchedBook), 20000, "First searched Book is not available");
        expect(sanityPage.SanityElement().searchedBook.isPresent()).toBeTruthy();
        browser.sleep(2000);
        browser.navigate().back();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchBoxForBook), 20000, "Serchbox for Book Name  is not available");
        sanityPage.SanityElement().searchBoxForBook.sendKeys('Test sample UT');
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickSeaarchButton), 20000, "SerchButton for Book Name  is not available");
        sanityPage.SanityElement().clickSeaarchButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchedBook), 20000, "First searched Book is not available");
        expect(sanityPage.SanityElement().searchedBook.isPresent()).toBeTruthy();
        browser.sleep(2000);
        browser.navigate().back();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchBoxForBook), 20000, "Serchbox for Book doId  is not available");
        sanityPage.SanityElement().searchBoxForBook.sendKeys('do_21307864261400985615496');
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickSeaarchButton), 20000, "SerchButton for Book doId  is not available");
        sanityPage.SanityElement().clickSeaarchButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchedBook), 20000, "First searched Book is not available");
        expect(sanityPage.SanityElement().searchedBook.isPresent()).toBeTruthy();
        browser.sleep(2000);
        browser.navigate().back();
        browser.sleep(2000);
    }
    catch (err) {
        console.log(err);
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
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.imageCard), 20000, "First search book not available");
        content.imageCard.click();
        browser.sleep(8000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        if (searchObj.collaboratorIcon.isDisplayed()) {
            console.log("Collaborator icon is present");
            searchObj.collaboratorIcon.click();
        }
        browser.sleep(1000);
        resov.manageCollaborator.click();
        resov.removeCollaborator.click();
        browser.sleep(3000);

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

const addCollborator = (BookName) => {
    try {
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        // content.headerDropdown.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        // sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().draftButton), 20000, "draft Icon not available");
        sanityPage.SanityElement().draftButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().bookSeaarchBox), 20000, "search book  not available");
        sanityPage.SanityElement().bookSeaarchBox.sendKeys(BookName);
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.imageCard), 20000, "First search book not available");
        content.imageCard.click();
        browser.sleep(8000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        if (searchObj.collaboratorIcon.isDisplayed()) {
            console.log("Collaborator icon is present");
        }
        browser.sleep(6000);
        searchObj.collaboratorIcon.click();
        console.log("User should be able to click on collaborator icon");
        searchObj.searchCollaboratorField.sendKeys("Mentor");
        browser.sleep(5000);
        searchObj.suggestionCollaboratorList1.click();
        browser.sleep(3000);
        searchObj.searchCollaboratorField.clear();
        searchObj.searchCollaboratorField.click();
        browser.sleep(3000);
        searchObj.searchCollaboratorField.sendKeys("suborg");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestionCollaboratorList1), 20000, "suggestionCollaboratorList2 not loaded");
        searchObj.suggestionCollaboratorList1.click();
        browser.sleep(2000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.clickDonebutton);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickDonebutton), 20000, "donebutton1 not loaded");
        searchObj.clickDonebutton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);


        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        // sanityPage.SanityElement().submitForreviewButton.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().termsAndConditionCheckbox.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().NewCoursesubmitButton.click();
        // browser.sleep(4000);
        // browser.sleep(2000);
    } catch (err) {
        console.log(err);
    }
}
const addCollboratortoDraftAndSaveBookWithWorkspace = (BookName) => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(10000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().draftButton), 20000, "draft Icon not available");
        sanityPage.SanityElement().draftButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().bookSeaarchBox), 20000, "search book  not available");
        sanityPage.SanityElement().bookSeaarchBox.sendKeys(BookName);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchedFirstBook), 20000, "First search book not available");
        sanityPage.SanityElement().searchedFirstBook.click();
        browser.sleep(4000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        if (searchObj.collaboratorIcon.isDisplayed()) {
            console.log("Collaborator icon is present");
        }
        browser.sleep(1000);
        searchObj.collaboratorIcon.click();
        console.log("User should be able to click on collaborator icon");
        searchObj.searchCollaboratorField.sendKeys("Mentor");
        browser.sleep(3000);
        searchObj.suggestionCollaboratorList1.click();
        browser.sleep(3000);
        searchObj.searchCollaboratorField.clear();
        searchObj.searchCollaboratorField.click();
        searchObj.searchCollaboratorField.sendKeys("suborg");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestionCollaboratorList1), 20000, "suggestionCollaboratorList2 not loaded");
        searchObj.suggestionCollaboratorList1.click();
        browser.sleep(2000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.clickDonebutton);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickDonebutton), 20000, "donebutton1 not loaded");
        searchObj.clickDonebutton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(2000);
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



const addCollboratortoDraftAndSaveBook = (BookName) => {
    try {
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        // content.headerDropdown.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        // sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(10000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.drafts), 20000, "draft Icon not available");
        content.drafts.click();
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
        }
        browser.sleep(1000);
        searchObj.collaboratorIcon.click();
        console.log("User should be able to click on collaborator icon");
        searchObj.searchCollaboratorField.sendKeys("Mentor");
        browser.sleep(3000);
        searchObj.suggestionCollaboratorList1.click();
        browser.sleep(3000);
        searchObj.searchCollaboratorField.clear();
        searchObj.searchCollaboratorField.click();
        searchObj.searchCollaboratorField.sendKeys("suborg");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestionCollaboratorList1), 20000, "suggestionCollaboratorList2 not loaded");
        searchObj.suggestionCollaboratorList1.click();
        browser.sleep(2000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.clickDonebutton);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickDonebutton), 20000, "donebutton1 not loaded");
        searchObj.clickDonebutton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().coursePagebackButton), 20000, "Save Draft");
        sanityPage.SanityElement().coursePagebackButton.click();
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        // sanityPage.SanityElement().submitForreviewButton.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().termsAndConditionCheckbox.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().NewCoursesubmitButton.click();
        // browser.sleep(4000);
        // browser.sleep(2000);
    } catch (err) {
        console.log(err);
    }
}
const addCollboratortoLiveAndSaveBook = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().profileIcon), 20000, "Profile Icon not available");
        sanityPage.SanityElement().profileIcon.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().publishedBookIcon), 20000, "published Icon not available");
        sanityPage.SanityElement().draftButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().bookSeaarchBox), 20000, "search book  not available");
        sanityPage.SanityElement().bookSeaarchBox.sendKeys('BookA');
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchedFirstBook), 20000, "First search book not available");
        sanityPage.SanityElement().searchedFirstBook.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        if (searchObj.collaboratorIcon.isDisplayed()) {
            console.log("Collaborator icon is present");
        }
        browser.sleep(1000);
        searchObj.collaboratorIcon.click();
        console.log("User should be able to click on collaborator icon");
        browser.sleep(5000);
        searchObj.searchCollaboratorField.click();
        searchObj.searchCollaboratorField.sendKeys("Mentor");
        browser.sleep(2000);
        searchObj.suggestionCollaboratorList1.click();
        browser.sleep(1500);
        searchObj.searchCollaboratorField.clear();
        searchObj.searchCollaboratorField.click();
        searchObj.searchCollaboratorField.sendKeys("suborg_mentor_sun 2");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestionCollaboratorList2), 20000, "suggestionCollaboratorList2 not loaded");
        searchObj.suggestionCollaboratorList2.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.donebutton1), 20000, "donebutton1 not loaded");
        searchObj.donebutton1.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.save), 20000, "save not loaded");
        searchObj.save.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().closeIcon), 20000, "Close Icon is not available");
        sanityPage.SanityElement().closeIcon.click();
        browser.sleep(4000);



    } catch (err) {
        console.log(err);
    }
}
const verifyBestScore = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchBoxForBook), 20000, "searchBox for book not available");
        sanityPage.SanityElement().searchBoxForBook.sendKeys('do_21307518403423436813962');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchButton), 20000, "searchbutton for best score not available");
        sanityPage.SanityElement().searchButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchedBookForBestScore), 20000, "searchedbook for best score not available");
        sanityPage.SanityElement().searchedBookForBestScore.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickOnUnit), 20000, "unit 3 not available");
        sanityPage.SanityElement().clickOnUnit.click();
        browser.sleep(3000)
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickOnassesment), 20000, "assessment not available");
        sanityPage.SanityElement().clickOnassesment.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firstBlanks), 20000, "first option not available");
        sanityPage.SanityElement().firstBlanks.sendKeys('one');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().secondBlanks), 20000, "first option not available");
        sanityPage.SanityElement().secondBlanks.sendKeys('only');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButtonAfterAssessment), 20000, "submit button not available");
        sanityPage.SanityElement().submitButtonAfterAssessment.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firsstStar), 20000, "first star button not available");
        sanityPage.SanityElement().firsstStar.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButtonAfterRating), 20000, "submit button not available");
        sanityPage.SanityElement().submitButtonAfterRating.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().baackButton), 20000, "back button not available");
        sanityPage.SanityElement().baackButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickOnUnit), 20000, "unit 3 not available");
        sanityPage.SanityElement().clickOnUnit.click();
        browser.sleep(3000)
        expect(sanityPage.SanityElement().bestScore.isPresent()).toBeTruthy();

    } catch (err) {
        console.log(err);
    }
}
const veriyMaximumAttempts = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchBoxForBook), 20000, "searchBox for book not available");
        sanityPage.SanityElement().searchBoxForBook.sendKeys('do_21307518403423436813962');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchButton), 20000, "searchbutton for best score not available");
        sanityPage.SanityElement().searchButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchedBookForBestScore), 20000, "searchedbook for best score not available");
        sanityPage.SanityElement().searchedBookForBestScore.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickOnUnit), 20000, "unit 3 not available");
        sanityPage.SanityElement().clickOnUnit.click();
        browser.sleep(3000)
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickOnassesment), 20000, "assessment not available");
        sanityPage.SanityElement().clickOnassesment.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
        sanityPage.SanityElement().firststquestion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firstBlanks), 20000, "first option not available");
        sanityPage.SanityElement().firstBlanks.sendKeys('one');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().secondBlanks), 20000, "first option not available");
        sanityPage.SanityElement().secondBlanks.sendKeys('only');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
        sanityPage.SanityElement().nextButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButtonAfterAssessment), 20000, "submit button not available");
        sanityPage.SanityElement().submitButtonAfterAssessment.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firsstStar), 20000, "first star button not available");
        sanityPage.SanityElement().firsstStar.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButtonAfterRating), 20000, "submit button not available");
        sanityPage.SanityElement().submitButtonAfterRating.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().baackButton), 20000, "back button not available");
        sanityPage.SanityElement().baackButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickOnUnit), 20000, "unit 3 not available");
        sanityPage.SanityElement().clickOnUnit.click();
        browser.sleep(3000)
        expect(sanityPage.SanityElement().bestScore.isPresent()).toBeTruthy();

    } catch (err) {
        console.log(err)
    }
}

const verifyDiscussionForum = () => {
    try {
        browser.sleep(2000);
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var do_id = cred[37]['CourseName'];//do_213441224225660928138
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchBoxForBook), 20000, "Serchbox for QR code  is not available");
        sanityPage.SanityElement().searchBoxForBook.sendKeys(do_id);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickSeaarchButton), 20000, "SerchButton for QR code  is not available");
        sanityPage.SanityElement().clickSeaarchButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().discussionForumFirstBook), 20000, "1st book not available");
        sanityPage.SanityElement().discussionForumFirstBook.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
        expect(sanityPage.SanityElement().categories.isDisplayed()).toBeTruthy();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categoryCard), 20000, "categories card is not available");
        // sanityPage.SanityElement().categoryCard.click();
        // browser.sleep(3000);
        //expect(sanityPage.SanityElement().announcement.isDisplayed()).toBeTruthy();
        //expect(sanityPage.SanityElement().generalDiscussion.isDisplayed()).toBeTruthy();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().announcement), 20000, "announcement is not available");
        // sanityPage.SanityElement().announcement.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().announcementLink), 20000, "announcementLinkis not available");
        // sanityPage.SanityElement().announcementLink.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().textareaForComment), 20000, "textareaForComment is not available");
        // sanityPage.SanityElement().textareaForComment.sendKeys("This is for adding comment");
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().postReply), 20000, "postReply is not available");
        // sanityPage.SanityElement().postReply.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
        // sanityPage.SanityElement().categories.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categoryCard), 20000, "categories card is not available");
        // sanityPage.SanityElement().categoryCard.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().generalDiscussion), 20000, "generalDiscussion is not available");
        // sanityPage.SanityElement().generalDiscussion.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().startDiscussion), 20000, "startDiscussion is not available");
        // sanityPage.SanityElement().startDiscussion.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().askQuestion), 20000, "askQuestion is not available");
        // sanityPage.SanityElement().askQuestion.sendKeys("This is my 1st idea to be shared");
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().description), 20000, "description is not available");
        // sanityPage.SanityElement().description.sendKeys("This is my 1st idea to be shared description");
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButton), 20000, "submitButton is not available");
        // sanityPage.SanityElement().submitButton.click();
        // browser.sleep(3000);

        expect(sanityPage.SanityElement().tagsInDF.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().myDiscussions.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().myDiscussions), 20000, "my discussion is not available");
        sanityPage.SanityElement().myDiscussions.click();
        browser.sleep(2000);
        expect(sanityPage.SanityElement().recentPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().bestPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().savedPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().upvoted.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().downVoted.isDisplayed()).toBeTruthy();
    } catch (err) {
        console.log(err)
    }
}



const verifyViewAllButton = () => {

    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().verifyClassSec), 20000, "Class Section is not available");
    expect(sanityPage.SanityElement().verifyClassSec.getText()).toEqual('Class 2');
    console.log('Class section displayed Succesfully');
}


const verifyTOC = (contentType) => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkLibraray), 20000, "clkLibraray  is not available");
        sanityPage.SanityElement().clkLibraray.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.sendKeys(contentType);
        browser.sleep(2000);
        sanityPage.SanityElement().clkSearchLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkFirConLib.click();
        browser.sleep(2000);

        // expect(sanityPage.SanityElement().assertTOC.getAttribute('class')).toEqual('sb-collectionTree-title');

        console.log('Verified TOC Succesfully In Explore Page');
    }
    catch (err) {
        console.log(err);
    }
}

const verifyTenantLogo = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertTenantLogo), 20000, "Specific Logo is not available");

        expect(sanityPage.SanityElement().assertTenantLogo.getAttribute('alt')).toEqual('APeKX');

        console.log('Verified Tenant Specified Logo Succesfully ');
    }
    catch (err) {
        console.log(err);
    }
}

const searchQRCode = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkEnterQRCode), 20000, "Enter QR Code is not available");
        sanityPage.SanityElement().clkEnterQRCode.click();
        sanityPage.SanityElement().enterQrcode.sendKeys(cred[18]['Title']);
        sanityPage.SanityElement().submitQrcode.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkLinkedContent.click();

        console.log('Verified Linked Content Succsfully');
    }
    catch (err) {
        console.log(err);
    }
}
const exploreDifferentTenantName = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkExploreContentAP), 20000, "Explore Content  is not available");
        sanityPage.SanityElement().clkExploreContentAP.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().verifyClassSec), 20000, "Class Section is not available");
        sanityPage.SanityElement().verifyClassSec.getText().then(function (input) {
            var status = input.includes("Class")
            expect(status).toEqual(true);
            console.log("expected page is verified");
        });
        console.log('Different Tenant Explored Succesfully ');
    }
    catch (err) {
        console.error(err);
    }
}
const bookOptionValdidation = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "Workspace  is not available");
        content.workSpace.click();

        expect(sanityPage.SanityElement().verifyBookOption.isDisplayed()).toBeTruthy();

        console.log('Book Option displayed for Book Creator Role');
    }
    catch (err) {
        console.log(err);
    }
}
const addmoreUnitInBook = () => {
    try {


        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();

        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
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

        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc3");
        browser.sleep(3000);

        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(4000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);



        console.log("User successfully created a collection");
        return bookname;

    } catch (err) {
        console.log(err);
    }
}


const generateQRCodes = () => {
    try {


        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(100);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(100);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();

        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,920);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);

        sanityPage.SanityElement().selectBoardForcollection.click();
        browser.sleep(300);
        sanityPage.SanityElement().selectBoardValueForcollection.click();
        browser.sleep(300);

        sanityPage.SanityElement().selectMediumForcollection.click();
        browser.sleep(300);
        sanityPage.SanityElement().selectMediumValueForcollection.click();
        browser.sleep(300);

        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(300);
        sanityPage.SanityElement().selectClassValueForcollection.click();
        browser.sleep(300);


        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(300);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(300);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(300);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(300);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(300);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(9000);




        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkDropDownQrcode), 20000, "clkDropDownQrcode not available");
        sanityPage.SanityElement().clkDropDownQrcode.click();
        browser.sleep(300);
        sanityPage.SanityElement().clkGenerateQrCode.click();
        browser.sleep(300);
        sanityPage.SanityElement().QrCodeValueEnter.click();
        browser.sleep(100);
        sanityPage.SanityElement().QrCodeValueEnter.sendKeys('2');
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkReqestQrCode), 20000, "clkReqestQrCode not available");
        sanityPage.SanityElement().clkReqestQrCode.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().QRcodeTostrMsg), 20000, "QRcodeTostrMsg not available");
        expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
        console.log('QR Code Generated Succesfully');
        browser.sleep(3000);


    }
    catch (err) {
        console.log(err);
    }
}


const generateQRCodeswithYesButton = () => {
    try {


        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();

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



const previeAllMyContent = (UploadContentName) => {
    try {


        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);


        browser.sleep(4000);
        sanityPage.SanityElement().clkAllMyContent.click();
        browser.sleep(4000);
        sanityPage.SanityElement().clkSearhInAllMyContent.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkSearhInAllMyContent.sendKeys(UploadContentName);
        browser.sleep(5000);
        sanityPage.SanityElement().clkSearchIconAllMyContent.click();
        browser.sleep(4000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkFirstCntAllMyCon), 20000, "FirstContent is not available");
        sanityPage.SanityElement().clkFirstCntAllMyCon.click();
        browser.sleep(8000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);

        expect(sanityPage.SanityElement().assertUploadContentMenuBar.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().coursePagebackButton), 20000, "FirstContent is not available");
        // sanityPage.SanityElement().coursePagebackButton.click();
        // browser.sleep(3000);
        // var editor = driver.findElement(frme);
        // browser.switchTo().frame(editor);
        // browser.sleep(6000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().closeEditor), 20000, "closeEditor is not available");

        //sanityPage.SanityElement().closeEditor.click();
        //browser.sleep(2000);

    } catch (err) {
        console.log(err);
    }
}

const downloadQRCode = () => {
    try {


        // sanityPage.SanityElement().qrCodeYes.click();

        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkDropDownQrcode), 20000, "clkDropDownQrcode not available");
        sanityPage.SanityElement().clkDropDownQrcode.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkDownloadQr.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contenttoasterMsg), 20000, "assertDownloadQrCodeToastrMsg not available");
        expect(sanityPage.SanityElement().contenttoasterMsg.getText()).then(function(input){
            console.log(input);
        })
        console.log('QR Code Downloaded Succesfully');
        browser.sleep(3000);
    }
    catch (err) {
        console.log(err);
    }
}


const tocDownload = () => {
    try {
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");

        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();


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

        browser.sleep(2000);
        sanityPage.SanityElement().saveButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().tocDropDown), 20000, "tocDropDown  is not available");
        sanityPage.SanityElement().tocDropDown.click();
        browser.sleep(2000);
        sanityPage.SanityElement().downloadTOCMetaData.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().tocTostrMsg), 20000, "tocDropDown  is not available");
        expect(sanityPage.SanityElement().tocTostrMsg.getText()).toEqual('Table of Content downloaded!');
    }
    catch (err) {
        console.log(err);
    }
}
const openBookFromDraftAndDownloadQRCode = () => {
    try {
        console.log("User is trying to create book")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();
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


        //browser.switchTo().frame(editor);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkEditDetails), 20000, "clkEditDetails  is not available");

        sanityPage.SanityElement().clkEditDetails.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkAppIcon), 50000, "clkAppIcon  is not available");

        sanityPage.SanityElement().clkAppIcon.click();
        browser.sleep(2000);

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        sanityPage.SanityElement().chkAppIcon.click();
        browser.sleep(2000);
        sanityPage.SanityElement().sltButton.click();
        browser.sleep(2000);
        //     sanityPage.SanityElement().clkBoard.click();
        //     browser.sleep(1000);
        //     sanityPage.SanityElement().sltBoard.click();
        //     browser.sleep(2000);

        //     sanityPage.SanityElement().clkMedium.click();
        //     browser.sleep(2000);
        //     sanityPage.SanityElement().sltMedium.click();
        //     browser.sleep(2000);

        //     var we =sanityPage.SanityElement().clkClass;
        //                 browser.executeScript("arguments[0].scrollIntoView();", we.getWebElement()).then(function(){
        //                 we.click();
        //                 });

        // browser.sleep(2000);
        // sanityPage.SanityElement().SltClass.click();
        // browser.sleep(2000);
        // sanityPage.SanityElement().clkSubject.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().SltSubject.click();
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

        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(8000);



        sanityPage.SanityElement().qrCodeYes.click();
        sanityPage.SanityElement().saveButton.click();
        browser.sleep(4000);

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
const copyContentFromLib = (contentType) => {
    try {
        console.log("User is trying to copy content");

        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.sendKeys(contentType);
        browser.sleep(2000);
        sanityPage.SanityElement().clkSearchLib.click();
        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(san.clkFirConLib), 20000, "clkFirConLib  is not available");
        san.clkFirConLib.click();
        console.log("clicked on first content")
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(8000);
        //browser.actions().dragAndDrop(drop, drag).perform();
        //browser.actions().dragAndDrop(sanityPage.SanityElement().clkCopyButton, sanityPage.SanityElement().clkCopyButton).mouseUp().perform();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCopyButton), 20000, "clkCopyButton  is not available");
        sanityPage.SanityElement().clkCopyButton.click();
        browser.sleep(3000);
        // sanityPage.SanityElement().clkCopyButton.click();
        // browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,800);').then(function () {
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

        // browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        // browser.sleep(1000);
        // sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        // browser.sleep(3000);

        // var editor = driver.findElement(by.tagName('iframe'));
        // browser.switchTo().frame(editor);
        // browser.sleep(8000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(9000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveButton), 20000, "saveButton  is not available");
        // sanityPage.SanityElement().saveButton.click();
        // browser.sleep(3000);

        //sanityPage.SanityElement().closeEditor1.click();
        //expect(sanityPage.SanityElement().vefifyContentCopied.getText()).toEqual('TOC');

        console.log("User successfully copied content");

    }
    catch (err) {
        console.log("failed to copy content" + err);
    }
}
const searchQRCodeInGetPage = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().enterQrCodeInGet), 20000, "Enter QR Code is not available");
        sanityPage.SanityElement().enterQrCodeInGet.sendKeys(cred[18]['Title']);
        browser.sleep(2000);
        sanityPage.SanityElement().searchCode.click();
        browser.sleep(4000);
        expect(sanityPage.SanityElement().clkLinkedContent.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
        sanityPage.SanityElement().clkLinkedContent.click();
        browser.sleep(2000);

        console.log('Verified Linked Content Succsfully');
    }
    catch (err) {
        console.log(err);
    }
}
const VerifyTocWitSubUnits = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkTraining), 20000, "clkTraining is not available");
        sanityPage.SanityElement().clkTraining.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkTrainSearInp.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkLinkedContents.getText().then(function (input) {
            sanityPage.SanityElement().clkTrainSearInp.sendKeys(input);
        });
        browser.sleep(2000);
        sanityPage.SanityElement().clkTrainingSrchbutton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkCoursFirst.click();
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkTocFold), 20000, "clkTocFold  is not available");
        // sanityPage.SanityElement().clkTocFold.click();
        // browser.sleep(2000);
        // sanityPage.SanityElement().clkTocSubUnits.click();
    }
    catch (err) {
        console.log(err);
    }
}
const uploadCSVFile = () => {
    try {
        console.log("User is trying to create book")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys("Untitled Textbook");

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");





        // set file detector
        let path = require('path');
        var remote = require(protractor.basePath + '/node_modules/selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());
        //test/pageObject/Untitled Textbook.csv


        var fileToUpload = 'Untitled Textbook.csv';
        var absolutePath = path.resolve(__dirname, fileToUpload);
        var fileElem = element(by.css('input[type="file"]'));

        //var fileElem =element(by.xpath("//div[@class='qq-upload-button-selector qq-upload-button custom-qq-upload-button']"));

        // Unhide file input
        browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
        browser.driver.sleep(1000);

        fileElem.sendKeys(absolutePath);
        browser.driver.sleep(8000);
        sanityPage.SanityElement().clkUplodBtn.click();
        browser.driver.sleep(6000);
        expect(sanityPage.SanityElement().assertCsvContent.getText()).toEqual('unit1');
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never enabled");
        browser.sleep(3000);
        content.save.click();
        browser.sleep(6000);
        sanityPage.SanityElement().closePage.click();
        browser.sleep(4000);
        console.log('CSV File Uploaded Succsfully')
    }
    catch (err) {
        console.log(err);
    }
}


const copyContentFromTraining = (contentType) => {
    var contentName;
    try {
        console.log("User is trying to copy content");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse  is not available");
        searchObj.headerCourse.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.sendKeys(contentType);
        browser.sleep(2000);
        sanityPage.SanityElement().clkSearchLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkFirConLib.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCopyButton), 20000, "clkCopyButton  is not available");
        sanityPage.SanityElement().clkCopyButton.click();
        browser.sleep(8000);
        // var editor = driver.findElement(frme);
        // browser.switchTo().frame(editor);
        // browser.sleep(8000);
        contentName = sanityPage.SanityElement().vefifyContentCopied.getText();

        browser.executeScript('window.scrollTo(0,550);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(100);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(100);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(100);

        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(100);
        sanityPage.SanityElement().selectcourseType.click();
        browser.sleep(100);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(100);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(500);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().selectBoardForcourse.click();
        browser.sleep(2000);

        sanityPage.SanityElement().selectBoard.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
            sanityPage.SanityElement().selectMediumForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectMedium.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
            sanityPage.SanityElement().selectClassForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectclass.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
            sanityPage.SanityElement().selectSubjectForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectSubject2.click();
        browser.sleep(2000);
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(300);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(300);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(2000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkContent.click();
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(2000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(300);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(9000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");
        //expect(sanityPage.SanityElement().vefifyContentCopied.getText()).toEqual('TOC');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().sndForRev), 20000, "sendForReview  is not available");
        // sanityPage.SanityElement().sndForRev.click();

        console.log("User successfully copied content");
        return contentName;
    }
    catch (err) {
        console.log(err);
    }

}

const generateAndDownlaodQrCode = () => {
    try {
        browser.sleep(2000);
        sanityPage.SanityElement().qrCodeYes.click();
        browser.sleep(2000);
        sanityPage.SanityElement().saveButton.click();
        browser.sleep(6000);
        sanityPage.SanityElement().clkDropDownQrcode.click();
        browser.sleep(1000);
        sanityPage.SanityElement().GeneratQr.click();
        browser.sleep(3000);
        //expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
        console.log('QR Code Generated Succesfully');
        //sanityPage.SanityElement().enterQrCode.sendKeys('2');
        sanityPage.SanityElement().clkDownloadQr.click();

        browser.sleep(2000);
        sanityPage.SanityElement().closeEditor.click();



    }
    catch (err) {
        console.log(err);
    }
}
const UpdateTocAndUpload = (filePath) => {
    browser.sleep(2000);
    try {
        //         const fs = require('fs');
        //  const {resolve, join} = require('path');
        console.log('user is trying to update toc')
        //  module.exports = {  readLatestDownlaodedFileName : function(filePath) {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var qrcode = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var qrcodevalue = qrcode[18]['Title'];
        console.log(qrcodevalue)
        browser.sleep(4000);
        // browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().tocDropDown), 20000, "tocDropDown  is not available");
        sanityPage.SanityElement().tocDropDown.click();
        browser.sleep(2000);
        sanityPage.SanityElement().uploadTocButton.click();
        browser.sleep(2000);
        console.log('Clicked on UploadTocButton');
        browser.sleep(2000);
        fs.readdir(resolve(filePath), function (err, list) {
            list.forEach(function (file) {
                browser.sleep(3000);

                totalSize = list.length;

                stats = fs.statSync(resolve(join(filePath, file)));
                // console.log(list[totalSize-1])
                //console.log(list)
                //    console.log(stats.mtime);
                //    console.log(stats.ctime);
                // console.log(list)
                // var latestfile=list[totalSize-1];
            })
            var lastfile = list[list.length - 1];
            console.log(lastfile)
            // console.log(latestfile);
            var downpath = filePath;
            var FilePaths = downpath + lastfile;
            console.log(FilePaths);
            var updatQrCode = genericFun.writeDataInToCSVlFile(FilePaths, 0, 'QR Code', qrcodevalue);
            //var qr=genericFun.writeDataInToCSVlFile(FilePaths,0,'QR Code Required?','Yes');
            // var qr=genericFun.writeDataInToCSVlFile(FilePaths,0,'QR Code Required?','No');
            // console.log('QRCode added Succesfully in Downloaded CSV')
            // browser.sleep(3000);
            //     browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().tocDropDown), 20000, "tocDropDown  is not available");
            //     sanityPage.SanityElement().tocDropDown.click();
            //     browser.sleep(2000);
            //     sanityPage.SanityElement().uploadTocButton.click();
            //     browser.sleep(2000);
            //     console.log('Clicked on UploadTocButton');
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkBorwse), 20000, "clkBorwse  is not available");
            // sanityPage.SanityElement().clkBorwse.click();
            browser.sleep(4000);
            uploadParticularFile(lastfile);
            //     let path = require('path');
            // var remote =require(protractor.basePath + '/node_modules/selenium-webdriver/remote');
            // browser.setFileDetector(new remote.FileDetector());
            //  var fileToUpload ='do_2130111423076270081379_untitled-textbook_1588274237953';
            //  var absolutePath = path.resolve(__dirname, fileToUpload);
            // var fileElem = element(by.css('input[type="file"]'));
            // browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
            // browser.driver.sleep(1000);
            // fileElem.sendKeys(absolutePath);
            // browser.driver.sleep(8000);
            // sanityPage.SanityElement().clkUplodBtn.click();
            // browser.driver.sleep(4000);
            // });
        })
    }
    catch (err) {
        console.log(err);
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
    browser.driver.sleep(8000);
    sanityPage.SanityElement().clkUplodBtn.click();
    browser.driver.sleep(4000);
}

const verifyTNTenantLogo = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '1', 'Public User1');
        browser.sleep(4000);
        browser.driver.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().verfiyTNlogo), 20000, "TN Specific Logo is not available");
        expect(sanityPage.SanityElement().verfiyTNlogo.getAttribute('src')).toEqual('logo.png');
        expect(sanityPage.SanityElement().verfiyTNlogo.isDisplayed()).toBeTruthy();
        console.log(' Verified TN Logo Tenant Specified Logo Succesfully ');
        sanityPage.SanityElement().clickTNLogin.click();
        browser.driver.sleep(4000);
        expect(sanityPage.SanityElement().verifyTNlogoInLoginPage.getAttribute('alt')).toEqual('tnlogo');
        browser.driver.sleep(1000);
        wait.waitForElementVisibility(content.userName, 20000);
        content.userName.sendKeys(cred[0]['Username']);
        content.password.sendKeys(cred[0]['Password']);
        content.login.click();
        browser.driver.sleep(4000);
        sanityPage.SanityElement().clickExploreCourse.click();
        browser.driver.sleep(4000);

    }
    catch (err) {
        console.log(err);
    }
}
const clkViewAllInCourseTab = () => {
    try {
        wait.waitForElementVisibility(sanityPage.SanityElement().clickExploreCourse, 20000);
        sanityPage.SanityElement().clickExploreCourse.click();
        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        wait.waitForElementVisibility(san.MyCourseOption, 20000);
        expect(san.MyCourseOption.isDisplayed()).toBeTruthy();
        wait.waitForElementVisibility(san.viewAllButton, 20000);
        expect(san.viewAllButton.isDisplayed()).toBeTruthy();
        san.viewAllButton.click();
        wait.waitForElementVisibility(san.closeButton, 20000);
        expect(san.closeButton.isDisplayed()).toBeTruthy();
        san.closeButton.click();
        // browser.executeScript('window.scrollTo(0,0);').then(function(){
        //     console.log('++++++SCROLLED UP+++++');
        // });
        // browser.sleep(1000);
        // wait.waitForElementVisibility(san.clkCloseButton, 20000);
        // san.clkCloseButton.click();
        // browser.sleep(4000);
        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });


        // wait.waitForElementVisibility(san.clkLatestViewAll, 20000);
        // san.clkLatestViewAll.click();
        // browser.executeScript('window.scrollTo(0,0);').then(function(){
        //     console.log('++++++SCROLLED UP+++++');
        // });
        // wait.waitForElementVisibility(san.clkCloseButton, 20000);
        // san.clkCloseButton.click();
        // browser.driver.sleep(2000);

        console.log('Verifyed Count of Featured and Latest Course Section')
    }
    catch (err) {
        console.log(err);
    }
}
const courseSearchInExploreCourse = () => {
    try {
        wait.waitForElementVisibility(sanityPage.SanityElement().clickExploreCourse, 20000);
        sanityPage.SanityElement().clickExploreCourse.click();
        wait.waitForElementVisibility(san.searchConLib, 20000);
        san.searchConLib.click();
        san.searchConLib.sendKeys('Course');
        san.clkSearchLib.click();
        browser.driver.sleep(4000);
        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        wait.waitForElementVisibility(san.clkLinkedContents, 20000);
        expect(san.clkLinkedContents.isDisplayed()).toBeTruthy();
        san.clkLinkedContents.click();
        browser.driver.sleep(1000);
        console.log('Course Searched Succesfully in ExploreCourse Search')
    }
    catch (err) {
        console.log(err);
    }
}
const signWithGoogle = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.loginLink, 20000);
        content.loginLink.click();
        wait.waitForElementVisibility(san.clkSignInWithGoogle, 20000);
        san.clkSignInWithGoogle.click();
        browser.driver.sleep(2000);
        wait.waitForElementVisibility(san.enterGooUsrName, 40000);
        san.enterGooUsrName.click();
        san.enterGooUsrName.sendKeys('automationwebportal@gmail.com');
        browser.driver.sleep(2000);
        wait.waitForElementVisibility(san.clkGooNext, 40000);
        san.clkGooNext.click();
        browser.driver.sleep(2000);
        wait.waitForElementVisibility(san.enterGooPassword, 40000);
        san.enterGooPassword.click();
        san.enterGooPassword.sendKeys('Test@123');
        browser.driver.sleep(2000);
        wait.waitForElementVisibility(san.clkGooPassNext, 40000);
        san.clkGooPassNext.click();
        browser.driver.sleep(2000);
        wait.waitForElementVisibility(san.clkLibraray, 80000);
        san.clkLibraray.getText().then(function (futureMessage) {
            console.log("Library Content Present is  :" + futureMessage);
            var expectedContent = "textbooks";
            expect(futureMessage).toContain(expectedContent)
            {
                console.log('Library Displayed After Google Login');
            }
        });
        console.log('Login With GoogleAcc Done Succesfully')
    }
    catch (err) {
        console.log(err);
    }
}
const GoogleAfterLogin = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        wait.waitForElementVisibility(content.loginLink, 20000);
        content.loginLink.click();
        browser.driver.sleep(2000);
        wait.waitForElementVisibility(san.clkSignInWithGoogle, 20000);
        san.clkSignInWithGoogle.click();
        browser.driver.sleep(2000);
        wait.waitForElementVisibility(san.clkGoogelAccAfterlogout, 20000);
        san.clkGoogelAccAfterlogout.click();
        browser.driver.sleep(2000);
        wait.waitForElementVisibility(san.clkLibraray, 80000);
        san.clkLibraray.getText().then(function (futureMessage) {
            console.log("Library Content Present is  :" + futureMessage);
            var expectedContent = "textbook";
            expect(futureMessage).toContain(expectedContent)
            {
                console.log('Library Displayed After Google Login');
            }
        });
        console.log('Login With GoogleAcc Done Succesfully')
    }
    catch (err) {
        console.log(err);
    }
}

const verifydefaultValues = () => {
    wait.waitForElementVisibility(sanity.labelLibrary, 20000);
    sanity.labelLibrary.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(sanity.labelDefaultBoard, 20000);
    sanity.labelDefaultBoard.getText().then(function (defBoard) {
        console.log("labelDefaultBoard :" + defBoard);
        expect(defBoard).toContain("CBSE");
    });
    wait.waitForElementVisibility(sanity.labelDefaultMedium, 20000);
    sanity.labelDefaultMedium.getText().then(function (defMedium) {
        console.log("labelDefaultMedium :" + defMedium);
        expect(defMedium).toContain("English");
    });
    browser.executeScript("arguments[0].scrollIntoView();", sanity.labelDefaultClass);
    wait.waitForElementVisibility(sanity.labelDefaultClass, 20000);
    sanity.labelDefaultClass.getText().then(function (defClass) {
        console.log("labelDefaultClass :" + defClass);
        expect(defClass).toContain("Class 10");
    });
    wait.waitForElementVisibility(sanity.DefaultTextbook, 20000, "TextBook is error in book");
    //browser.executeScript("arguments[0].scrollIntoView();",  sanity.DefaultTextbook);
    sanity.DefaultTextbook.click();
    browser.sleep(2000);
    //sanity.DefaultTextbook.getText().then(function(DefaultTextbook){
    //console.log("TextBook should be displayed");
    // expect(DefaultTextbook).toContain("TextBook");
    wait.waitForElementVisibility(sanity.ConsumeCourse, 20000, "ConsumeCourse is error in textbook");
    sanity.ConsumeCourse.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(sanity.CourseArrow1, 20000, "CourseArrow1 is error in button");
    sanity.CourseArrow1.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(sanity.RatingClose, 20000, "TextBook is error in book");
    sanity.RatingClose.click();
    browser.driver.sleep(4000);
    wait.waitForElementVisibility(sanity.BackButton, 40000, "BackButton is error in button");
    browser.executeScript('window.scrollTo(0, -200);');
    browser.driver.sleep(4000);
    sanity.BackButton.click();
    browser.sleep(4000);
    wait.waitForElementVisibility(sanity.labelslctBoard, 20000);
    sanity.labelslctBoard.click();
    browser.driver.sleep(4000);
    wait.waitForElementVisibility(sanity.SelectAPboard, 20000);
    sanity.SelectAPboard.click();
    browser.driver.sleep(4000);
    wait.waitForElementVisibility(sanity.SelectTelguMedium, 20000);
    sanity.SelectTelguMedium.click();
    browser.driver.sleep(4000);
    wait.waitForElementVisibility(sanity.Select8Class, 20000);
    sanity.Select8Class.click();
    browser.driver.sleep(4000);
    wait.waitForElementVisibility(sanity.SelectBiologybook, 20000);
    sanity.SelectBiologybook.click();
    browser.sleep(4000);
    wait.waitForElementVisibility(sanity.SelectVonBook, 20000, "TextBook is error in book");
    sanity.SelectVonBook.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(sanity.SelectCourseArrow1, 20000, "TextBook is error in book");
    sanity.SelectCourseArrow1.click();
    browser.sleep(2000);
    sanity.SelectCourseArrow1.click();
    browser.sleep(2000);
    sanity.SelectCourseArrow1.click();
    browser.sleep(2000);
    sanity.SelectCourseArrow1.click();
    browser.sleep(2000);
    sanity.SelectCourseArrow1.click();
    browser.sleep(2000);
    sanity.SelectCourseArrow1.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(sanity.SelectRCButton, 20000, "TextBook is error in book");
    sanity.SelectRCButton.click();
    browser.driver.sleep(4000);
    wait.waitForElementVisibility(sanity.SelectBkButton, 40000, "BackButton is error in button");
    browser.executeScript('window.scrollTo(0, -200);');
    browser.driver.sleep(4000);
    sanity.SelectBkButton.click();
    browser.sleep(4000);
    //browser.sleep(2000);
    //browser.executeScript("arguments[0].scrollIntoView();", sanity.labelClassOne);
    //wait.waitForElementVisibility(sanity.labelClassOne, 20000);
    //sanity.labelClassOne.click();
    //browser.sleep(2000);
    //wait.waitForElementVisibility(sanity.firstContent, 20000);
    //sanity.firstContent.click();
    // browser.sleep(5000);
}
const searchQRCodeInGet = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        // wait.waitForElementVisibility(sanity.clkEnterQRCode, 20000, "Enter QR Code is not available");
        // sanity.clkEnterQRCode.click();
        wait.waitForElementVisibility(sanity.enterQrCodeInGet, 20000, "Enter QR Code is not available");
        sanity.enterQrCodeInGet.sendKeys(cred[18]['Title']);
        sanity.submitQrcode.click();
        browser.sleep(2000);
        sanity.clkLinkedContent.click();
        browser.sleep(2000);

        console.log('Verified Linked Content Succsfully');
    }
    catch (err) {
        console.log(err);
    }
}

const verifyCreateMyGroupAddMember = () => {
    try {


        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var memberId = cred[31]['TitleDescription'];

        console.log('user is able to create myGroup,add member ');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton), 40000, "Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName), 40000, "Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription), 40000, "Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox), 40000, "Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton1), 40000, "CreateGroup submit button not available");
        searchObj.createGroupSubmitButton1.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully), 40000, "addedSuccessfully Icon not available");
        var adminText = searchObj.addedSuccessfully.getText();
        expect((adminText).isDisplayed()).toBe(true);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addMember), 40000, "Add member button not available");
        searchObj.addMember.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.EnterUserId), 40000, "Enter User Id not available");
        searchObj.EnterUserId.sendKeys("usersun");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.verifyUserId), 40000, "Verify User Id button not available");
        searchObj.verifyUserId.click();
        browser.sleep(8000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addingMembertoGroup), 40000, "Adding Member to group button not available");
        // searchObj.addingMembertoGroup.click();
        // browser.sleep(6000);

        // searchObj.UserAddedSuccessfully.getText().then(function(input){
        //     console.log(input);
        // })
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.UserAddedSuccessfully),40000,"Successful Text not available");
        // var userAddedsuccessfulText=searchObj.UserAddedSuccessfully.getText();
        // expect((userAddedsuccessfulText).isDisplayed()).toBe(true);
    } catch (Exception) {
        console.log('User is unable to create my Group,member ');
    }
}


const copyBookAsCourse = (contentType) => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var doid = cred[33]['Title'];

        console.log("User is trying to copy content");
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.sendKeys(doid);
        browser.sleep(2000);
        sanityPage.SanityElement().clkSearchLib.click();
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(san.clkFirConLib), 20000, "clkFirConLib  is not available");
        san.clkFirConLib.click();
        console.log("clicked on first content");
        // browser.executeScript('window.scrollTo(0,0);').then(function () {
        //     console.log('++++++SCROLLED UP+++++');
        // });

        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.copyAsCourse), 20000, "copyAsCourse  is not available");
        searchObj.copyAsCourse.click();
        browser.sleep(200);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.copyAsCourseCheckBox), 20000, "copyAsCourseCheckBox  is not available");
        searchObj.copyAsCourseCheckBox.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createCertificate), 20000, "copyAsCourseConfirm  is not available");
        searchObj.createCertificate.click();
        browser.sleep(6000);
    }
    catch (err) {
        console.log("failed to copy as course content" + err);
    }
}

const FillBmesWhileCreatingBook = () => {
    try {
        browser.sleep(5000);
        wait.waitForElementVisibility(etbv.clkBoardInBook, 20000, "clkBoardInBook is not available");
        etbv.clkBoardInBook.click();
        browser.sleep(200);
        wait.waitForElementVisibility(etbv.SltBoardInBook, 20000, "clkBoardInBook is not available");
        etbv.SltBoardInBook.click();
        browser.sleep(200);
        wait.waitForElementVisibility(etbv.clkMediumInBook, 20000, "clkBoardInBook is not available");
        etbv.clkMediumInBook.click();
        browser.sleep(200);
        wait.waitForElementVisibility(etbv.sltMediumInBook, 20000, "clkBoardInBook is not available");
        etbv.sltMediumInBook.click();
        browser.sleep(200);
        wait.waitForElementVisibility(etbv.clkClassInBook, 20000, "clkBoardInBook is not available");
        etbv.clkClassInBook.click();
        browser.sleep(200);
        wait.waitForElementVisibility(etbv.sltClassInBook, 20000, "clkBoardInBook is not available");
        etbv.sltClassInBook.click();
        browser.sleep(200);
        wait.waitForElementVisibility(etbv.clkSubjectInBook, 20000, "clkBoardInBook is not available");
        etbv.clkSubjectInBook.click();
        browser.sleep(200);
        wait.waitForElementVisibility(etbv.sltSubjectInBook, 20000, "clkBoardInBook is not available");
        etbv.sltSubjectInBook.click();
        browser.sleep(100);
        wait.waitForElementVisibility(sanity.publisher, 20000, "publisher is not available");
        sanity.publisher.sendKeys("TestPublisher");
        browser.sleep(100);
        wait.waitForElementVisibility(sanity.year, 20000, "publisher is not available");
        sanity.year.click();
        browser.sleep(100);
        wait.waitForElementVisibility(sanity.sltYear, 20000, "publisher is not available");
        sanity.sltYear.click();
    }
    catch (err) {
        console.log(err);
    }
}

const declaredUsersCsvFileDownload = () => {
    try {
        console.log("User is trying to click on Avatar-Content button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.profileDropdown), 20000, "Avatar Content Button is not available");
        sanity.profileDropdown.click();
        console.log("User is trying to click on Manage button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.manageLink), 20000, "Manage Button is not available");
        sanity.manageLink.click();
        console.log("User is trying to click on Download button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.downloadBtn), 20000, "Download Button is not available");
        //sanity.downloadBtn.click();
        expect(sanityPage.SanityElement().downloadBtn.isPresent()).toBeTruthy();
    }
    catch (err) {
        console.log(err);
    }
}
const creatorIsAbleToCopyTheBook = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        console.log("User is trying to click on Digital Text Book Link")
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.digitalTextBooksLink), 20000, "Avatar Content Button is not available");
        sanity.digitalTextBooksLink.click();
        console.log("User is trying to send data to search box")
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.searchConLib), 20000, "Manage Button is not available");
        sanity.searchConLib.click();
        sanity.searchConLib.sendKeys(cred[32]['CourseName']);
        console.log("User is trying to click on search button")
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.searchBtn), 20000, "Download Button is not available");
        sanity.searchBtn.click();
        console.log("User is trying to click on book Image")
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.bookImg), 20000, "Download Button is not available");
        sanity.bookImg.click();
        console.log("User is trying to click on copy icon")
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.copyBtn), 20000, "Download Button is not available");
        browser.sleep(2000);
        sanity.copyBtn.click();
        browser.sleep(6000);
        // sanity.copyBtn.click();
        // browser.sleep(8000);

        expect(sanity.assertCopyContent.isPresent()).toBeTruthy();
        expect(sanity.assertCopyContentSendForReview.isPresent()).toBeTruthy();



        // expect(sanity.copyPopup.getText().toEqual('Content successfully copied'));
        // console.log("Book is successfully copied")
    }
    catch (err) {
        console.log(err);
    }
}
const verifyEnableAndDisableDiscussionForGroup = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkCloseIconPopup), 40000, "myGroup icon not available");
        searchObj.clkCloseIconPopup.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup), 40000, "First group is not available");
        sanity.firstGroup.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
        sanity.enableDiscussionIcon.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enablediscussionSuccessful), 40000, "Enable discussion successful message is not available");
        browser.sleep(2000);
        //  expect(sanity.enablediscussionSuccessful.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categoryCard), 20000, "categories card is not available");
        sanityPage.SanityElement().categoryCard.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().startDiscussion), 20000, "startDiscussion is not available");
        sanityPage.SanityElement().startDiscussion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().askQuestion), 20000, "askQuestion is not available");
        sanityPage.SanityElement().askQuestion.sendKeys("This is my 1st idea to be shared");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().description), 20000, "description is not available");
        sanityPage.SanityElement().description.sendKeys("This is my 1st idea to be shared description");
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().submitButton);
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButton), 20000, "submitButton is not available");
        sanityPage.SanityElement().submitButton.click();
        browser.sleep(3000);
        expect(sanityPage.SanityElement().tags.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().myDiscussions.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().myDiscussions), 20000, "my discussion is not available");
        sanityPage.SanityElement().myDiscussions.click();
        browser.sleep(2000);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCloseIconDF), 20000, "clkCloseIconDF is not available");
        expect(sanityPage.SanityElement().clkCloseIconDF.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        expect(sanityPage.SanityElement().recentPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().bestPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().savedPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().upvoted.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().downVoted.isDisplayed()).toBeTruthy();



        browser.sleep(2000);
        sanityPage.SanityElement().clkCloseIconDF.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
        sanity.disableDiscussionIcon.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
        sanity.disablediscussionButton.click();
        browser.sleep(2000);

    } catch (err) {
        console.log(err)
    }
}
const createCourseAndSendForReview = () => {
    var courseName;
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(100);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();

        courseName = "CourseC" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);

        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(2000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(2000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(2000);

        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(2000);
        sanityPage.SanityElement().selectcourseType.click();
        browser.sleep(2000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(2000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().selectBoardForcourse.click();
        browser.sleep(2000);

        sanityPage.SanityElement().selectBoard.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
            sanityPage.SanityElement().selectMediumForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectMedium.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
            sanityPage.SanityElement().selectClassForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectclass.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
            sanityPage.SanityElement().selectSubjectForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectSubject2.click();
        browser.sleep(2000);
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(300);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(300);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc1.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(5000);
        // sanityPage.SanityElement().clkContent.click();
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(4000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(300);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(10000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");

    } catch (err) {
        console.log(err);
    }
    return courseName;
}


const createCourseForFramework = (FrameworkName) => {
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
        // sanity.addcourseTag.sendKeys('test');
        // browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(1000);
        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(1000);
        if (FrameworkName === "k12") {
            sanityPage.SanityElement().k12.click();
            // browser.sleep(1000);
            // k12.click();
        } else if (FrameworkName === "CPD") {
            sanityPage.SanityElement().SelectCPD.click();
        }
        browser.sleep(1000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().selectBoardForcourse.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().selectBoardForcourse.click();
            browser.sleep(1000);
            sanityPage.SanityElement().selectBoardCPD.click();
            browser.sleep(1000);
            console.log("Board is Selected")
        })

        expect(sanityPage.SanityElement().selectMediumForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
            })

            console.log("Medium is selected")
        })
        expect(sanityPage.SanityElement().selectClassForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().selectclass.click();
            })

            console.log("Class is selected")
        })
        expect(sanityPage.SanityElement().selectSubjectForCourse.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().SubjectMultipleSelect.click();
            })
            browser.sleep(1000);
            console.log("Subject is selected")
        })
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(1000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addChild.click();
        browser.sleep(2000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(1000);
        sanityPage.SanityElement().clkContent.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(1000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(1000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        // var disclaimerText = ("I confirm that this Content complies with prescribed guidelines, including the Terms of Use and Content Policy and that I consent to publish it under the Creative Commons Framework in accordance with the Content Policy. I have made sure that I do not violate others’ copyright or privacy rights.");
        // expect(sanityPage.SanityElement().tncSubmit.getText()).toEqual(disclaimerText);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");
    } catch (err) {
        console.log(err);
    }
}


const createCourseForFrameworkWithTopicAndSubject = (FrameworkName) => {
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
        // sanity.addcourseTag.sendKeys('test');
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(1000);
        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(1000);
        if (FrameworkName === "k12") {
            sanityPage.SanityElement().k12.click();
            browser.sleep(2000);
            sanityPage.SanityElement().subjectCovered.click();
            browser.sleep(1000);
            sanityPage.SanityElement().SelectSubject4.click();
            console.log("Subject Covered is selected");
            // browser.sleep(1000);
            // k12.click();
        } else if (FrameworkName === "CPD") {
            sanityPage.SanityElement().SelectCPD.click();
            browser.sleep(1000);
            sanityPage.SanityElement().subjectCovered.click();
            browser.sleep(1000);
            sanityPage.SanityElement().SelectSubject5.click();
        }
        browser.sleep(1000);
        // sanityPage.SanityElement().subjectCovered.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().SelectSubject4.click();
        // console.log("Subject Covered is selected");

        sanityPage.SanityElement().Coursetopic.click();
        browser.sleep(4000);
        sanityPage.SanityElement().SelectCourseTopic.click();
        browser.sleep(4000);
        sanityPage.SanityElement().TopicSubmit.click();
        browser.sleep(1000);
        console.log("Topic is selected");
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().selectBoardForcourse.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().selectBoardForcourse.click();
            browser.sleep(1000);
            sanityPage.SanityElement().selectBoardCPD.click();
            browser.sleep(1000);
            console.log("Board is Selected")
        })

        expect(sanityPage.SanityElement().selectMediumForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
            })

            console.log("Medium is selected")
        })
        expect(sanityPage.SanityElement().selectClassForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().selectclass.click();
            })

            console.log("Class is selected")
        })
        expect(sanityPage.SanityElement().selectSubjectForCourse.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().SubjectMultipleSelect.click();
            })
            browser.sleep(1000);
            console.log("Subject is selected")
        })
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(1000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addChild.click();
        browser.sleep(2000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkContent.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();

        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //var disclaimerText= ("I confirm that this Content complies with prescribed guidelines, including the Terms of Use and Content Policy and that I consent to publish it under the Creative Commons Framework in accordance with the Content Policy. I have made sure that I do not violate others’ copyright or privacy rights.");
        //expect(sanityPage.SanityElement().tncSubmit.getText()).toEqual(disclaimerText);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(5000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");
    } catch (err) {
        console.log(err);
    }
}




const TargetFrameworkWithMultipleCategoricalValues = (FrameworkName) => {
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
        sanity.addcourseTag.sendKeys('test');
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(1000);
        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(1000);
        if (FrameworkName === "k12") {
            sanityPage.SanityElement().k12.click();
        } else if (FrameworkName === "CPD") {
            sanityPage.SanityElement().SelectCPD.click();
        } else {
            sanityPage.SanityElement().SelectCPD.click();
        }
        browser.sleep(1000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().selectBoardForcourse.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().selectBoardForcourse.click();
            browser.sleep(1000);
            sanityPage.SanityElement().selectBoardCPD.click();
            browser.sleep(1000);
            console.log("Board is Selected")
        })

        expect(sanityPage.SanityElement().selectMediumForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
            })
            console.log("Multiple medium is selected")
        })
        expect(sanityPage.SanityElement().selectClassForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Class is selected")
        })
        expect(sanityPage.SanityElement().selectSubjectForCourse.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Subject is selected")
        })
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(1000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(4000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(5000);

    } catch (err) {
        console.log(err);
    }
}

const TargetFrameworkIsMandatory = (FrameworkName) => {
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
        // sanity.addcourseTag.sendKeys('test');
        // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(1000);
        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(1000);
        if (FrameworkName === "k12") {
            sanityPage.SanityElement().k12.click();
        } else if (FrameworkName === "CPD") {
            sanityPage.SanityElement().SelectCPD.click();
        } else {
            sanityPage.SanityElement().SelectCPD.click();
        }
        browser.sleep(1000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectBoardForcourse.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectBoardCPD.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(1000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);
        console.log(" medium, class and Subject is mandatory to be selected")
        expect((sanityPage.SanityElement().errorPopUp).isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.sleep(4000);
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
                sanityPage.SanityElement().saveAsDraft.click();
                console.log(" medium is selected")
            })
            console.log("class and Subject is mandatory to be selected")
        })
        browser.sleep(3000);
        expect((sanityPage.SanityElement().errorPopUp).isPresent()).toBeTruthy().then(function () {
            browser.sleep(4000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {

                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().selectclass.click();
                browser.sleep(1000);
                sanityPage.SanityElement().saveAsDraft.click();
                console.log("class is selected")
            })
            console.log("Subject is mandatory to be selected")
        })
        browser.sleep(3000);
        expect((sanityPage.SanityElement().selectSubjectForCourse).isPresent()).toBeTruthy().then(function () {
            browser.sleep(4000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().SubjectMultipleSelect.click();
                browser.sleep(4000);
                sanityPage.SanityElement().saveAsDraft.click();
                console.log("Subject is selected")
            })
        })
        expect(sanityPage.SanityElement().contenttoasterMsg.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().contenttoasterMsg.getText().then(function (input) {
                console.log(input);
            })
            console.log("Mandatory fileds are selected");
        });
        browser.sleep(3000);

    } catch (err) {
        console.log(err);
    }
}

const verifyCloseIconInEnableAndDisableDiscussionForGroup = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkCloseIconPopup), 40000, "clkCloseIconPopup icon not available");
        searchObj.clkCloseIconPopup.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup), 40000, "First group is not available");
        sanity.firstGroup.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
        sanity.enableDiscussionIcon.click();
        browser.sleep(2000);
        expect(sanity.enablediscussionSuccessful.isDisplayed()).toBeTruthy();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
        expect(sanityPage.SanityElement().categories.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCloseIconDF), 20000, "clkCloseIconDF is not available");
        expect(sanityPage.SanityElement().clkCloseIconDF.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkTags), 20000, "clkTags is not available");
        expect(sanityPage.SanityElement().clkTags.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCloseIconDF), 20000, "clkCloseIconDF is not available");
        expect(sanityPage.SanityElement().clkCloseIconDF.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkMyDiscussion), 20000, "clkMyDiscussion is not available");
        expect(sanityPage.SanityElement().clkMyDiscussion.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCloseIconDF), 20000, "clkCloseIconDF is not available");
        expect(sanityPage.SanityElement().clkCloseIconDF.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
        sanityPage.SanityElement().clkCloseIconDF.click();
        browser.sleep(2000);

    } catch (err) {
        console.log(err)
    }
}

const editAndDelteTopic = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkCloseIconPopup), 40000, "clkCloseIconPopup icon not available");
        searchObj.clkCloseIconPopup.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup), 40000, "First group is not available");
        sanity.firstGroup.click();
        browser.sleep(5000);


        sanityPage.SanityElement().forum.isPresent().then(function (result) {
            if (result) {
                browser.sleep(2000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
                sanity.disableDiscussionIcon.click();
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
                sanity.disablediscussionButton.click();
                browser.sleep(4000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();
                browser.sleep(6000);
                browser.refresh();
                // browser.actions().sendKeys(protractor.Key.ENTER).perform();
                // browser.sleep(4000);

            } else {
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();
                browser.sleep(6000);
                browser.refresh();
                // browser.actions().sendKeys(protractor.Key.ENTER).perform();
                // browser.sleep(5000);

            }
        });




        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enablediscussionSuccessful), 40000, "Enable discussion successful message is not available");
        browser.sleep(2000);
        //  expect(sanity.enablediscussionSuccessful.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkGeneDiscDF), 20000, "generalDiscussion is not available");
        sanityPage.SanityElement().clkGeneDiscDF.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().startDiscussion), 20000, "startDiscussion is not available");
        sanityPage.SanityElement().startDiscussion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().askQuestion), 20000, "askQuestion is not available");
        sanityPage.SanityElement().askQuestion.sendKeys("This is my 1st idea to be shared");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().description), 20000, "description is not available");
        sanityPage.SanityElement().description.sendKeys("DescriptionIdeaShared");
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().submitButton);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButton), 20000, "submitButton is not available");
        sanityPage.SanityElement().submitButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkGenericCreatedTopics.click();
        browser.sleep(3000);
        expect(sanityPage.SanityElement().assertAddedTopicName.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().assertaddedDesName.isDisplayed()).toBeTruthy();

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkHamburgerMenuTopic), 20000, "clkHamburgerMenuTopic is not available");
        sanityPage.SanityElement().clkHamburgerMenuTopic.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkHamburgerMenuTopicEdit), 20000, "clkHamburgerMenuTopicEdit is not available");
        sanityPage.SanityElement().clkHamburgerMenuTopicEdit.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().askQuestion), 20000, "askQuestion is not available");
        sanityPage.SanityElement().askQuestion.clear();
        sanityPage.SanityElement().askQuestion.sendKeys("UpdateTopic");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().description), 20000, "description is not available");
        sanityPage.SanityElement().description.clear();
        sanityPage.SanityElement().description.sendKeys("UpdatedDescription");
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().clkUpdateBtnTopcis);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkUpdateBtnTopcis), 20000, "submitButton is not available");
        sanityPage.SanityElement().clkUpdateBtnTopcis.click();
        browser.sleep(3000);

        browser.sleep(3000);
        expect(sanityPage.SanityElement().assertUpdatedTopicName.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().assertUpdateDesName.isDisplayed()).toBeTruthy();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkHamburgerMenuTopic), 20000, "clkHamburgerMenuTopic is not available");
        sanityPage.SanityElement().clkHamburgerMenuTopic.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkHamburgerMenuTopicDelete), 20000, "clkHamburgerMenuTopic is not available");
        sanityPage.SanityElement().clkHamburgerMenuTopicDelete.click();
        browser.sleep(4000);
        var myAlert = browser.switchTo().alert();
        myAlert.accept();
        browser.sleep(4000);
        expect(sanityPage.SanityElement().assertNoData.isDisplayed()).toBeTruthy();
        browser.sleep(4000);


    } catch (err) {
        console.log(err)
    }
}
const verifyEnableAndDisableDiscussionForGroup2 = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton2), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkCloseIconPopup), 40000, "myGroup icon not available");
        searchObj.clkCloseIconPopup.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup), 40000, "First group is not available");
        sanity.firstGroup.click();
        browser.sleep(4000);

        sanityPage.SanityElement().forum.isPresent().then(function (result) {
            if (result) {
                browser.sleep(2000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
                sanity.disableDiscussionIcon.click();
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
                sanity.disablediscussionButton.click();
                browser.sleep(4000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();
                browser.sleep(6000);
                browser.refresh();
                //browser.actions().sendKeys(protractor.Key.ENTER).perform();

            } else {
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();
                browser.sleep(6000);
                browser.refresh();
                //browser.actions().sendKeys(protractor.Key.ENTER).perform();
            }
        });

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
        expect(sanityPage.SanityElement().categories.isDisplayed()).toBeTruthy();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCloseIconDF), 20000, "clkCloseIconDF is not available");
        expect(sanityPage.SanityElement().clkCloseIconDF.isDisplayed()).toBeTruthy();
        browser.sleep(2000);


        browser.sleep(3000);

        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkGeneDiscDF), 20000, "generalDiscussion is not available");
        sanityPage.SanityElement().clkGeneDiscDF.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().startDiscussion), 20000, "startDiscussion is not available");
        sanityPage.SanityElement().startDiscussion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().askQuestion), 20000, "askQuestion is not available");
        sanityPage.SanityElement().askQuestion.sendKeys("This is my 1st idea to be shared");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().description), 20000, "description is not available");
        sanityPage.SanityElement().description.sendKeys("This is my 1st idea to be shared description");
        browser.sleep(3000);

        // browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().tags);
        //browser.sleep(3000);
        expect(sanityPage.SanityElement().tags.isDisplayed()).toBeTruthy();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().startDiscussionSubmitButoon), 20000, "submitButton is not available");
        sanityPage.SanityElement().startDiscussionSubmitButoon.click();
        browser.sleep(5000);
        expect(sanityPage.SanityElement().myDiscussions.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().myDiscussions), 20000, "my discussion is not available");
        sanityPage.SanityElement().myDiscussions.click();
        browser.sleep(2000);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCloseIconDF), 20000, "clkCloseIconDF is not available");
        expect(sanityPage.SanityElement().clkCloseIconDF.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        expect(sanityPage.SanityElement().recentPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().bestPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().savedPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().upvoted.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().downVoted.isDisplayed()).toBeTruthy();

        browser.sleep(2000);
        sanityPage.SanityElement().clkCloseIconDF.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
        sanity.disableDiscussionIcon.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
        sanity.disablediscussionButton.click();
        browser.sleep(2000);

        browser.sleep(5000);



        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        // sanity.groupActions.click();
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
        // sanity.enableDiscussionIcon.click();
        // browser.sleep(6000);
        // browser.refresh();

        // // browser.actions().sendKeys(protractor.Key.ENTER).perform();
        // // browser.sleep(4000);


        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        // sanityPage.SanityElement().forum.click();
        // browser.sleep(4000);
        // expect(sanity.assert0Disccsuion.isDisplayed()).toBeTruthy();
        // expect(sanity.asserr0Post.isDisplayed()).toBeTruthy();
        // browser.sleep(2000);

        // browser.sleep(2000);
        // sanityPage.SanityElement().clkCloseIconDF.click();
        // browser.sleep(4000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        // sanity.groupActions.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
        // sanity.disableDiscussionIcon.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
        // sanity.disablediscussionButton.click();
        // browser.sleep(5000);

    } catch (err) {
        console.log(err)
    }
}
const updateDiscussionForumPost = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchBoxForBook), 20000, "Serchbox for QR code  is not available");
        sanityPage.SanityElement().searchBoxForBook.sendKeys('do_213291936590995456125');
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickSeaarchButton), 20000, "SerchButton for QR code  is not available");
        sanityPage.SanityElement().clickSeaarchButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().discussionForumFirstBook), 20000, "1st book not available");
        sanityPage.SanityElement().discussionForumFirstBook.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
        expect(sanityPage.SanityElement().categories.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categoryCard), 20000, "categories card is not available");
        sanityPage.SanityElement().categoryCard.click();
        browser.sleep(3000);
        //    expect(sanityPage.SanityElement().announcement.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().generalDiscussion.isDisplayed()).toBeTruthy();
        //    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().announcement), 20000, "announcement is not available");
        //    sanityPage.SanityElement().announcement.click();
        //    browser.sleep(3000);
        //    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().announcementLink), 20000, "announcementLinkis not available");
        //    sanityPage.SanityElement().announcementLink.click();
        //    browser.sleep(3000);
        //    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().textareaForComment), 20000, "textareaForComment is not available");
        //    sanityPage.SanityElement().textareaForComment.sendKeys("This is for adding comment");
        //    browser.sleep(3000);
        //    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().postReply), 20000, "postReply is not available");
        //    sanityPage.SanityElement().postReply.click();
        //    browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
        sanityPage.SanityElement().categories.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categoryCard), 20000, "categories card is not available");
        sanityPage.SanityElement().categoryCard.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().generalDiscussion), 20000, "generalDiscussion is not available");
        sanityPage.SanityElement().generalDiscussion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().startDiscussion), 20000, "startDiscussion is not available");
        sanityPage.SanityElement().startDiscussion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().askQuestion), 20000, "askQuestion is not available");
        sanityPage.SanityElement().askQuestion.sendKeys("This is my 1st idea to be shared");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().description), 20000, "description is not available");
        sanityPage.SanityElement().description.sendKeys("This is my 1st idea to be shared description");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButton), 20000, "submitButton is not available");
        sanityPage.SanityElement().submitButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().editPostIcon), 20000, "edit PostIcon is not available");
        sanityPage.SanityElement().editPostIcon.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().postYourContent), 20000, "post your content is not available");
        sanityPage.SanityElement().postYourContent.sendKeys("Updating Post");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().updateComment), 20000, "update post button is not available");
        sanityPage.SanityElement().updateComment.click();
        browser.sleep(3000);
    } catch (err) {
        console.log(err);
    }
}
const verifyIGOTpage = () => {
    try {
        var AppURL = 'https://ione.ntp.net.in/igot/explore';
        browser.get(AppURL, 40000);
        wait.waitForElementVisibility(content.boardDropdown, 30000);
        content.boardDropdown.click();
        browser.sleep(7000);
        wait.waitForElementVisibility(content.selectIGOTboardValue, 30000);
        content.selectIGOTboardValue.click();
        browser.sleep(2000);
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
        wait.waitForElementVisibility(content.submitButtonForDropdowns, 30000);
        content.submitButtonForDropdowns.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.Teacher, 30000);
        content.Teacher.click();
        wait.waitForElementVisibility(content.Continue, 20000);
        content.Continue.click();
        browser.sleep(3000);
        // wait.waitForElementVisibility(content.district1, 20000);
        // content.district1.click();
        // browser.sleep(3000);
        // wait.waitForElementVisibility(content.SelectDistrict, 20000);
        // content.SelectDistrict.click();
        // browser.sleep(3000);
        wait.waitForElementVisibility(content.BMCSubmit, 30000);
        content.BMCSubmit.click();
        browser.sleep(3000);
        // wait.waitForElementVisibility(sanity.ClassOnLandingPage, 20000);
        // sanity.ClassOnLandingPage.getText().then(function (input) {
        expect((sanity.coursevalidateWithBMC).getText()).toEqual("Doctors");
        console.log("Course selected according to BMC pop up");
        // })
    } catch (err) {
        console.log(err);
    }
}


const verifyFilterscreatingBook = () => {
    try {
        browser.sleep(3000);
        console.log("User is trying to create book")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);
        FillBmesWhileCreatingBook();
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
        sanityPage.SanityElement().closePage.click();
        browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectTextBook), 20000, "allTextBook  is not available");
        // //expect(etbv.SelectTextBook.getText()).toEqual('All Textbooks');
        // etbv.SelectTextBook.click();
        // browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkEditDetails), 20000, "clkEditDetails  is not available");
        sanityPage.SanityElement().clkEditDetails.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkAppIcon), 50000, "clkAppIcon  is not available");
        sanityPage.SanityElement().clkAppIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();
        browser.sleep(3000);
        sanityPage.SanityElement().chkAppIcon.click();
        browser.sleep(3000);
        sanityPage.SanityElement().sltButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkBoard.click();
        browser.sleep(3000);
        sanityPage.SanityElement().sltBoard.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkMedium.click();
        browser.sleep(3000);
        sanityPage.SanityElement().sltMedium.click();
        browser.sleep(3000);
        var we = sanityPage.SanityElement().clkClass;
        browser.executeScript("arguments[0].scrollIntoView();", we.getWebElement()).then(function () {
            we.click();
        });
        browser.sleep(3000);
        sanityPage.SanityElement().SltClass.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkSubject.click();
        browser.sleep(3000);
        sanityPage.SanityElement().SltSubject.click();
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", content.author);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        content.author.click();
        browser.sleep(2000);
        content.author.sendKeys("Ekstep");
        etbv.yearOfCreation.click();
        browser.sleep(2000);
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");
        sanityPage.SanityElement().clkSaveEdit.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkCloseButton.click();
    }
    catch (err) {
        console.log(err);
    }
}

const verifyEnableAndDisableDiscussionForGroup3 = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton2), 40000, "myGroup icon not available");
        searchObj.myGroupButton3.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkCloseIconPopup), 40000, "myGroup icon not available");
        searchObj.clkCloseIconPopup.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup), 40000, "First group is not available");
        sanity.firstGroup.click();
        browser.sleep(3000);


        sanityPage.SanityElement().forum.isPresent().then(function (result) {
            if (result) {
                browser.sleep(2000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
                sanity.disableDiscussionIcon.click();
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
                sanity.disablediscussionButton.click();
                browser.sleep(4000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();
                browser.sleep(6000);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                browser.sleep(4000);

            } else {
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();
                browser.sleep(6000);
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                browser.sleep(5000);

            }
        });

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
        expect(sanityPage.SanityElement().categories.isDisplayed()).toBeTruthy();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCloseIconDF), 20000, "clkCloseIconDF is not available");
        expect(sanityPage.SanityElement().clkCloseIconDF.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        browser.sleep(3000);


        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkGeneDiscDF), 20000, "generalDiscussion is not available");
        sanityPage.SanityElement().clkGeneDiscDF.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().startDiscussion), 20000, "startDiscussion is not available");
        sanityPage.SanityElement().startDiscussion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().askQuestion), 20000, "askQuestion is not available");
        sanityPage.SanityElement().askQuestion.sendKeys("This is my 1st idea to be shared");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().description), 20000, "description is not available");
        sanityPage.SanityElement().description.sendKeys("This is my 1st idea to be shared description");
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().submitButton);
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButton), 20000, "submitButton is not available");
        sanityPage.SanityElement().submitButton.click();
        browser.sleep(3000);
        expect(sanityPage.SanityElement().myDiscussions.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().myDiscussions), 20000, "my discussion is not available");
        sanityPage.SanityElement().myDiscussions.click();
        browser.sleep(2000);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCloseIconDF), 20000, "clkCloseIconDF is not available");
        expect(sanityPage.SanityElement().clkCloseIconDF.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        expect(sanityPage.SanityElement().recentPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().bestPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().savedPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().upvoted.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().downVoted.isDisplayed()).toBeTruthy();


        browser.sleep(2000);
        sanityPage.SanityElement().clkCloseIconDF.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
        sanity.disableDiscussionIcon.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
        sanity.disablediscussionButton.click();
        browser.sleep(2000);

        browser.sleep(5000);



        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
        sanity.enableDiscussionIcon.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(4000);
        expect(sanity.assert0Disccsuion.isDisplayed()).toBeTruthy();
        expect(sanity.asserr0Post.isDisplayed()).toBeTruthy();
        browser.sleep(2000);

        browser.sleep(2000);
        sanityPage.SanityElement().clkCloseIconDF.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
        sanity.disableDiscussionIcon.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
        sanity.disablediscussionButton.click();
        browser.sleep(6000);

    } catch (err) {
        console.log(err)
    }
}

const createBook = () => {
    try {

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookB" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);

        sanityPage.SanityElement().selectBoardForcollection.click();
        browser.sleep(4000);
        sanityPage.SanityElement().selectBoardValueForcollection.click();
        browser.sleep(4000);

        sanityPage.SanityElement().selectMediumForcollection.click();
        browser.sleep(4000);
        sanityPage.SanityElement().selectMediumValueForcollection.click();
        browser.sleep(4000);

        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(4000);
        sanityPage.SanityElement().selectClassValueForcollection.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(4000);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(4000);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(4000);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().attribution);
        browser.sleep(1000);
        var attributioninput = "bAttribution1,aAttribution2,dAttribution3,fAttribution4";
        sanityPage.SanityElement().attribution.sendKeys(attributioninput);
        browser.sleep(4000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(4000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(4000);

        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(4000);
        // sanityPage.SanityElement().clkContent.click();
        // browser.sleep(4000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(6000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(8000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        });
        browser.sleep(6000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(8000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(4000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(4000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);
        console.log("User successfully created a collection");
        return bookname;

    } catch (err) {
        console.log(err);
    }
}


const sendCopiedBookForReview = () => {
    try {
        browser.sleep(10000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();

        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        browser.sleep(2000);


        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);

        // sanityPage.SanityElement().courseadditionalCategory.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().selectAdditionalCategory.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().courseType.click();
        // browser.sleep(3000);

        // expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        // browser.sleep(3000);
        // sanityPage.SanityElement().selectcourseType.click();
        // browser.sleep(3000);


        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(3000);
        // browser.executeScript('window.scrollTo(0,1000);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        sanityPage.SanityElement().selectBoardForcourse.click();
        browser.sleep(500);
        sanityPage.SanityElement().selectBoard.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
            sanityPage.SanityElement().selectMediumForCourse.click();
            browser.sleep(3000);
        })
        sanityPage.SanityElement().selectMedium.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
            sanityPage.SanityElement().selectClassForCourse.click();
            browser.sleep(3000);
        })
        sanityPage.SanityElement().selectclass.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
            sanityPage.SanityElement().selectSubjectForCourse.click();
            browser.sleep(3000);
        })
        sanityPage.SanityElement().selectSubject2.click();
        browser.sleep(3000);
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(3000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(6000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(5000);
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
        browser.sleep(7000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");

    }
    catch (err) {
        console.log(err);
    }
}

const TVClassSearch = (TvClassName) => {
    try {
        browser.sleep(1000);
        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkTvClassHeader), 40000, "headerLibrary is not available");
        etbPage.EtbElem().clkTvClassHeader.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        etbPage.EtbElem().filterSearch.click();
        etbPage.EtbElem().filterSearch.sendKeys(TvClassName);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchIcon), 40000, "searchIcon is not available");
        etbPage.EtbElem().searchIcon.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().firstTvLessonContent), 40000, "firstTvLessonContent is not available");
        etbPage.EtbElem().firstTvLessonContent.click();
        browser.sleep(5000);

    }
    catch (Exception) {
        console.log('Failed on searching library by applying filters');

    }

}

const CreateCourseAndSaveAsDraft1 = (FrameworkName) => {
    var courseName;
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
        // sanity.addcourseTag.sendKeys('test');
        // browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(1000);
        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(1000);
        if (FrameworkName === "k12") {
            sanityPage.SanityElement().k12.click();
        } else if (FrameworkName === "CPD") {
            sanityPage.SanityElement().SelectCPD.click();
        } else {
            sanityPage.SanityElement().SelectCPD.click();
        }
        browser.sleep(1000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().selectBoardForcourse.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().selectBoardForcourse.click();
            browser.sleep(1000);
            sanityPage.SanityElement().selectBoard.click();
            browser.sleep(1000);
            console.log("Board is Selected")
        })

        expect(sanityPage.SanityElement().selectMediumForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
            })
            console.log("Multiple medium is selected")
        })
        expect(sanityPage.SanityElement().selectClassForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Class is selected")
        })
        expect(sanityPage.SanityElement().selectSubjectForCourse.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Subject is selected")
        })
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(1000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().baackButton.click();
        browser.sleep(3000);
    } catch (err) {
        console.log(err)
    }
    return courseName;
}
const CreateCourseAndSaveAsDraft = (FrameworkName) => {
    var courseName;
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
        // sanity.addcourseTag.sendKeys('test');
        // browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(1000);
        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(1000);
        if (FrameworkName === "k12") {
            sanityPage.SanityElement().k12.click();
        } else if (FrameworkName === "CPD") {
            sanityPage.SanityElement().SelectCPD.click();
        } else {
            sanityPage.SanityElement().SelectCPD.click();
        }
        browser.sleep(1000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().selectBoardForcourse.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().selectBoardForcourse.click();
            browser.sleep(1000);
            sanityPage.SanityElement().selectBoardCPD.click();
            browser.sleep(1000);
            console.log("Board is Selected")
        })

        expect(sanityPage.SanityElement().selectMediumForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
            })
            console.log("Multiple medium is selected")
        })
        expect(sanityPage.SanityElement().selectClassForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Class is selected")
        })
        expect(sanityPage.SanityElement().selectSubjectForCourse.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Subject is selected")
        })
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(1000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().baackButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkFirstBookDraft.click();
        OrgFramework("k12");
        TargetFramework();


    } catch (err) {
        console.log(err)
    }
    return courseName;
}

const TargetFramework = () => {
    try {

        browser.sleep(5000);
        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().SelectTargetBoard).then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().SelectTargetBoard), 20000, "Medium covered not loaded");
            sanityPage.SanityElement().SelectTargetBoard.click();
            browser.sleep(1000);
            sanityPage.SanityElement().UnSelectTamil.click();
            browser.sleep(1000);

        })
        console.log("Multiple medium is selected")

        //browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectClassForCourse)
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(1000);
        sanityPage.SanityElement().SubjectMultipleSelect.click();

        console.log("Multiple Class is selected")


        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
            sanityPage.SanityElement().selectSubjectForCourse.click();
            browser.sleep(1000);
            sanityPage.SanityElement().SubjectMultipleSelect.click();
        })
        console.log("Multiple Subject is selected")


        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().saveAsDraft), 20000, "class covered not loaded");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(8000);
    } catch (err) {
        console.log(err)
    }
}

const OrgFramework = (FrameworkName) => {
    try {
        browser.sleep(5000);
        expect(sanityPage.SanityElement().courseType.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,380);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().courseType), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().courseType.click();
                browser.sleep(1000);
                if (FrameworkName === "k12") {
                    sanityPage.SanityElement().k12.click();
                    browser.sleep(4000);
                    sanityPage.SanityElement().subjectCovered.click();
                    browser.sleep(1000);
                    sanityPage.SanityElement().SelectSubject4.click();
                    console.log("Subject Covered is selected");
                    // browser.sleep(1000);
                    // k12.click();
                } else if (FrameworkName === "CPD") {
                    sanityPage.SanityElement().SelectCPD.click();
                    browser.sleep(1000);
                    sanityPage.SanityElement().subjectCovered.click();
                    browser.sleep(1000);
                    sanityPage.SanityElement().SelectSubject5.click();
                }

            })

        })

        sanityPage.SanityElement().Coursetopic.click();
        browser.sleep(4000);
        sanityPage.SanityElement().SelectCourseTopic.click();
        browser.sleep(4000);
        sanityPage.SanityElement().TopicSubmit.click();
        browser.sleep(1000);
        console.log("Topic is selected");
        browser.sleep(3000);

    } catch (err) {
        console.log(err)
    }
}


const createCourseWithRegionalLanguage = () => {
    var courseName;
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();

        courseName = "ಕನ್ನಡ";
        sanity.addCourseTitle.sendKeys(courseName);



        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(3000);

        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(3000);
        sanityPage.SanityElement().selectcourseType.click();
        browser.sleep(3000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().selectBoardForcourse.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectBoard.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
            sanityPage.SanityElement().selectMediumForCourse.click();
            browser.sleep(3000);
        })
        sanityPage.SanityElement().selectMedium.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
            sanityPage.SanityElement().selectClassForCourse.click();
            browser.sleep(3000);
        })
        sanityPage.SanityElement().selectclass.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
            sanityPage.SanityElement().selectSubjectForCourse.click();
            browser.sleep(3000);
        })
        sanityPage.SanityElement().selectSubject2.click();
        browser.sleep(3000);
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(3000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(6000);

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
        browser.sleep(7000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");

    } catch (err) {
        console.log(err);
    }
    return courseName;
}

const addMoreThan4UnitsToCheckTheErrorMessage = () => {
    try {
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();

        browser.sleep(8000);



        browser.executeScript('window.scrollTo(0,800);').then(function () {
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
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc1");
        browser.sleep(3000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc2");
        browser.sleep(3000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc3");
        browser.sleep(3000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc4");
        browser.sleep(3000);

        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);



        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);



        console.log("User successfully created a collection");
        return bookname;


    } catch (err) {
        console.log(err);
    }
}

const verifyAttributionOrder = () => {
    try {
        browser.sleep(3000);
        console.log('verifying the order of attributions');
        browser.executeScript('window.scrollTo(0,350);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(3000);
        console.log('verifying the order of attributions');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.liscenceTerms), 40000, "liscenceTerms is not available");
        etbv.liscenceTerms.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.attributionInbook), 40000, "attributionInbook is not available");
        (sanity.attributionInbook).getText().then(function (attributionorder) {
            console.log("Order of Attributions output are" + attributionorder);
        })
    }
    catch (Exception) {
        console.log('Attributions are unordered');
    }
}

const observationTabVerify = () => {
    try {


        sanityPage.SanityElement().clkObservations.click();
        browser.sleep(7000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().filterSearch), 40000, "filterSearch is not available");
        sanityPage.SanityElement().filterSearch.click();
        sanityPage.SanityElement().filterSearch.sendKeys('Enrollment');
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchIcon), 40000, "searchIcon is not available");
        sanityPage.SanityElement().searchIcon.click();
        browser.sleep(4000);
        sanityPage.SanityElement().clkObservations.click();
        browser.sleep(8000);


        expect(sanityPage.SanityElement().firstTvLessonContent.isPresent()).toBeTruthy();
        browser.sleep(2000);



    } catch (err) {
        console.log(err);
    }
}
const changeToDarkTheme = () => {
    try {


        sanityPage.SanityElement().clkObservations.click();
        browser.sleep(7000);
        sanityPage.SanityElement().clkDarkMode.click();
        browser.sleep(4000);


        expect(sanityPage.SanityElement().clkDarkMode.isPresent()).toBeTruthy();
        browser.sleep(3000);
        sanityPage.SanityElement().clkDarkMode.click();
        browser.sleep(4000);


    } catch (err) {
        console.log(err);
    }
}


const downloadQRCode2 = () => {
    try {


        // sanityPage.SanityElement().qrCodeYes.click();

        browser.sleep(6000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkDropDownQrcode), 20000, "clkDropDownQrcode not available");
        // sanityPage.SanityElement().clkDropDownQrcode.click();
        // browser.sleep(3000);
        sanityPage.SanityElement().clkDownloadQrcode4.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contenttoasterMsg), 20000, "assertDownloadQrCodeToastrMsg not available");
        (sanityPage.SanityElement().contenttoasterMsg.getText()).then(function(input){
            console.log(input);
        })
        console.log('QR Code Downloaded Succesfully');
        browser.sleep(3000);



    }
    catch (err) {
        console.log(err);
    }
}

const dowloadSampleCSV = () => {
    try {


        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();

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

        sanityPage.SanityElement().kebabMenuInCourse.click();
        browser.sleep(9000);

        sanityPage.SanityElement().createFolders.click();
        browser.sleep(2000);

        sanityPage.SanityElement().downloadCSVfile.click();
        browser.sleep(2000);



    }
    catch (err) {
        console.log(err);
    }
}





const createBookWithAllResourceType = () => {
    try {


        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
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

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().attribution);
        browser.sleep(1000);
        var attributioninput = "bAttribution1,aAttribution2,dAttribution3,fAttribution4";
        sanityPage.SanityElement().attribution.sendKeys(attributioninput);
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
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
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);
        console.log("User successfully created a collection");
        return bookname;

    } catch (err) {
        console.log(err);
    }
}

const createBookSaveAsDraft = () => {
    try {
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(500);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(500);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookB" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(1000);

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
        browser.sleep(200);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        sanityPage.SanityElement().selectSubjectForCourse.click();
        browser.sleep(200);
        sanityPage.SanityElement().selectSubjectValueForcollection.click();
        browser.sleep(200);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().selectCopyRightYear);
        browser.sleep(200);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(200);

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().attribution);
        browser.sleep(200);
        var attributioninput = "bAttribution1,aAttribution2,dAttribution3,fAttribution4";
        sanityPage.SanityElement().attribution.sendKeys(attributioninput);
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(5000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(5000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(5000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(1000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(1000);
        sanityPage.SanityElement().BackButton.click();
        browser.sleep(7000);
        console.log("User successfully created a collection");
        return bookname;

    } catch (err) {
        console.log(err);
    }
}



const generateQRCodeswithYesButtonFromDraft = (corseNames) => {
    try {
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        // content.headerDropdown.click();
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        // content.workSpace.click();
        // browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        // browser.sleep(9000);
        //  browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(2000);
        browser.sleep(8000);
        browser.executeScript("arguments[0].scrollIntoView();", ccpage.contentCreation().qrCodeRequred);
        ccpage.contentCreation().qrCodeRequred.click();
        // browser.executeScript('window.scrollTo(0,920);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        // browser.sleep(4000);

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
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().QRcodeTostrMsg), 20000, "QRcodeTostrMsg not available");
        expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
        console.log('QR Code Generated Succesfully');
        browser.sleep(3000);
    }
    catch (err) {
        console.log(err);
    }
}

const createCourseAndSavetoDraft = () => {
    var courseName;
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(100);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();

        courseName = "courseC" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);

        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(100);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(100);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(300);

        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(300);
        sanityPage.SanityElement().selectcourseType.click();
        browser.sleep(300);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(300);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(300);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().selectBoardForcourse.click();
        browser.sleep(300);

        sanityPage.SanityElement().selectBoard.click();
        browser.sleep(300);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
            sanityPage.SanityElement().selectMediumForCourse.click();
            browser.sleep(300);
        })
        sanityPage.SanityElement().selectMedium.click();
        browser.sleep(300);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
            sanityPage.SanityElement().selectClassForCourse.click();
            browser.sleep(300);
        })
        sanityPage.SanityElement().selectclass.click();
        browser.sleep(300);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
            sanityPage.SanityElement().selectSubjectForCourse.click();
            browser.sleep(300);
        })
        sanityPage.SanityElement().selectSubject2.click();
        browser.sleep(300);
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(300);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(300);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(300);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(300);
        sanityPage.SanityElement().clkContent.click();
        browser.sleep(300);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(300);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(300);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(300);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft.click()), 20000, "Draft Button not loaded");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(300);

    } catch (err) {
        console.log(err);
    }
    return courseName;
}

const createCourseAndSaveAsDraftWithChild = (FrameworkName) => {
    var courseName;
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
        // sanity.addcourseTag.sendKeys('test');
        // browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(1000);
        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(1000);
        if (FrameworkName === "k12") {
            sanityPage.SanityElement().k12.click();
            browser.sleep(2000);
            sanityPage.SanityElement().subjectCovered.click();
            browser.sleep(1000);
            sanityPage.SanityElement().SelectSubject4.click();
            console.log("Subject Covered is selected");
            // browser.sleep(1000);
            // k12.click();
        } else if (FrameworkName === "CPD") {
            sanityPage.SanityElement().SelectCPD.click();
            browser.sleep(1000);
            sanityPage.SanityElement().subjectCovered.click();
            browser.sleep(1000);
            sanityPage.SanityElement().SelectSubject5.click();
        }
        browser.sleep(1000);

        // sanityPage.SanityElement().subjectCovered.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().selectSubject.click();
        // browser.sleep(1000);
        sanityPage.SanityElement().Coursetopic.click();
        browser.sleep(4000);
        sanityPage.SanityElement().SelectCourseTopic.click();
        browser.sleep(4000);
        sanityPage.SanityElement().TopicSubmit.click();
        browser.sleep(1000);
        console.log("Topic is selected");
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().selectBoardForcourse.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().selectBoardForcourse.click();
            browser.sleep(1000);
            sanityPage.SanityElement().selectBoard.click();
            browser.sleep(1000);
            console.log("Board is Selected")
        })

        expect(sanityPage.SanityElement().selectMediumForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
            })
            console.log("Multiple medium is selected")
        })
        expect(sanityPage.SanityElement().selectClassForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Class is selected")
        })
        expect(sanityPage.SanityElement().selectSubjectForCourse.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Subject is selected")
        })
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(1000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addChild.click();
        browser.sleep(300);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().baackButton.click();
        browser.sleep(3000);
    } catch (err) {
        console.log(err)
    }
    return courseName;
}

const verifyDisclaimerTextInCourse = (FrameworkName) => {
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
        // sanity.addcourseTag.sendKeys('test');
        // browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(1000);
        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(1000);
        if (FrameworkName === "k12") {
            sanityPage.SanityElement().k12.click();
            browser.sleep(2000);
            sanityPage.SanityElement().subjectCovered.click();
            browser.sleep(1000);
            sanityPage.SanityElement().SelectSubject4.click();
            console.log("Subject Covered is selected");
            // browser.sleep(1000);
            // k12.click();
        } else if (FrameworkName === "CPD") {
            sanityPage.SanityElement().SelectCPD.click();
            browser.sleep(1000);
            sanityPage.SanityElement().subjectCovered.click();
            browser.sleep(1000);
            sanityPage.SanityElement().SelectSubject5.click();
        }
        browser.sleep(1000);
        // sanityPage.SanityElement().subjectCovered.click();
        // browser.sleep(1000);
        // sanityPage.SanityElement().SelectSubject4.click();
        // console.log("Subject Covered is selected");

        sanityPage.SanityElement().Coursetopic.click();
        browser.sleep(4000);
        sanityPage.SanityElement().SelectCourseTopic.click();
        browser.sleep(4000);
        sanityPage.SanityElement().TopicSubmit.click();
        browser.sleep(1000);
        console.log("Topic is selected");
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().selectBoardForcourse.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().selectBoardForcourse.click();
            browser.sleep(1000);
            sanityPage.SanityElement().selectBoardCPD.click();
            browser.sleep(1000);
            console.log("Board is Selected")
        })

        expect(sanityPage.SanityElement().selectMediumForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
            })

            console.log("Medium is selected")
        })
        expect(sanityPage.SanityElement().selectClassForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().selectclass.click();
            })

            console.log("Class is selected")
        })
        expect(sanityPage.SanityElement().selectSubjectForCourse.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().SubjectMultipleSelect.click();
            })
            browser.sleep(1000);
            console.log("Subject is selected")
        })
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(1000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addChild.click();
        browser.sleep(2000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(1000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(1000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        var disclaimerText = ("I confirm that this Content complies with prescribed guidelines, including the Terms of Use and Content Policy and that I consent to publish it under the Creative Commons Framework in accordance with the Content Policy. I have made sure that I do not violate others’ copyright or privacy rights.");
        sanityPage.SanityElement().tncSubmit.getText().then(function (input) {
            var status = input.includes(disclaimerText);
            expect(status).toEqual(true);
            console.log("Disclaimer validated")
        })
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000, "submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");
    } catch (err) {
        console.log(err);
    }
}

const validateMetadataValues = (FrameworkName) => {
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.courseAppIcon), 20000, "Creation page not loaded");
        // sanity.courseAppIcon.click();
        // expect(sanity.courseAppIcon.isPresent()).toBeTruthy().then(function () {
        //     console.log("AppIcon Validated");
        // })
        // browser.sleep(1000);
        // expect(sanity.allImages.isPresent()).toBeTruthy().then(function () {
        //     sanity.allImages.click();
        //     console.log("All images tab is selected");
        // });

        // expect(sanity.firststIconImage.isPresent()).toBeTruthy().then(function () {
        //     sanity.firststIconImage.click();
        //     console.log("Icon Image is selected");
        // })
        courseName = "courseD" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        expect(sanity.childTitle.isPresent()).toBeTruthy().then(function () {
            sanity.addCourseTitle.click();
            sanity.addCourseTitle.clear();
            sanity.addCourseTitle.sendKeys(courseName);
        })

        expect(sanityPage.SanityElement().assertDescription.isPresent()).toBeTruthy().then(function () {
            console.log("Description is validated");
        })

        expect(sanity.assertKeywords.isPresent()).toBeTruthy().then(function () {
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
            // sanity.addcourseTag.sendKeys('test');
            console.log("Keywords is validated");
            browser.sleep(1000);
        })

        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().assertcategory.isPresent()).toBeTruthy().then(function () {
            console.log("Category is validated");
        })

        expect(sanityPage.SanityElement().assertAddCategory.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().courseadditionalCategory.click();
            browser.sleep(1000);
            sanityPage.SanityElement().selectAdditionalCategory.click();
            browser.sleep(1000);
            console.log("Additional Category is validated");
        })

        expect(sanityPage.SanityElement().assretCourseType.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().courseType.click();
            browser.sleep(1000);
            console.log("Course Type is validated");
        })

        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(1000);
        if (FrameworkName === "k12") {
            sanityPage.SanityElement().k12.click();
            browser.sleep(2000);
            sanityPage.SanityElement().subjectCovered.click();
            browser.sleep(1000);
            sanityPage.SanityElement().SelectSubject4.click();
            console.log("Subject Covered is selected");
            // browser.sleep(1000);
            // k12.click();
        } else if (FrameworkName === "CPD") {
            sanityPage.SanityElement().SelectCPD.click();
            browser.sleep(1000);
            expect(sanityPage.SanityElement().assertSubjectsCovered.isPresent()).toBeTruthy().then(function () {
                sanityPage.SanityElement().subjectCovered.click();
                browser.sleep(1000);
                sanityPage.SanityElement().SelectSubject5.click();
            })
        }
        browser.sleep(1000);
        expect(sanityPage.SanityElement().assertTopics.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().Coursetopic.click();
            browser.sleep(4000);
            sanityPage.SanityElement().SelectCourseTopic.click();
            browser.sleep(4000);
            sanityPage.SanityElement().TopicSubmit.click();
            browser.sleep(1000);
            console.log("Topic is selected");
        })

        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().selectBoardForcourse.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().selectBoardForcourse.click();
            browser.sleep(1000);
            sanityPage.SanityElement().selectBoardCPD.click();
            browser.sleep(1000);
            console.log("Board is Selected")
        })

        expect(sanityPage.SanityElement().selectMediumForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
            })

            console.log("Medium is selected")
        })
        expect(sanityPage.SanityElement().selectClassForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().selectclass.click();
            })

            console.log("Class is selected")
        })
        expect(sanityPage.SanityElement().selectSubjectForCourse.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().SubjectMultipleSelect.click();
            })
            browser.sleep(1000);
            console.log("Subject is selected")
        })
        expect(sanityPage.SanityElement().assertAttribution.isPresent()).toBeTruthy().then(function () {
            console.log("Attribution is validated")
        })
        expect(sanityPage.SanityElement().assertCopyright.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().Author.sendKeys("EKSTEP");
            browser.sleep(1000);
            console.log("Copyright is validated")
        })
        expect(sanityPage.SanityElement().assertyear.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
            browser.sleep(1000);
            console.log("year is validated")
        })

        expect(sanityPage.SanityElement().assertlicense.isPresent()).toBeTruthy().then(function () {
            console.log("Liscece is validated")
        })

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addChild.click();
        browser.sleep(2000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(1000);
        sanityPage.SanityElement().clkContent.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(1000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(1000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");
        return courseName;
    } catch (err) {
        console.log(err);
    }
}


const validateMetadataInReviewerSection = (corseNames) => {
    try {

        console.log("User able to search and edit draft")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        // resov.drafts.click();
        // browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.publishedContent), 40000, "published is not available");
        resov.publishedContent.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);
        //  browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(2000);
        // expect(sanity.courseAppIcon.isPresent()).toBeTruthy().then(function () {
        //     console.log("AppIcon Validated");
        // })
        expect(sanity.childTitle.isPresent()).toBeTruthy().then(function () {
            console.log("Title is validated")
        })
        expect(sanityPage.SanityElement().assertDescription.isPresent()).toBeTruthy().then(function () {
            console.log("Description is validated");
        })

        expect(sanity.assertKeywords.isPresent()).toBeTruthy().then(function () {
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
            // sanity.addcourseTag.sendKeys('test');
            console.log("Keywords is validated");
            browser.sleep(1000);
        })

        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().assertcategory.isPresent()).toBeTruthy().then(function () {
            console.log("Category is validated");
        })

        expect(sanityPage.SanityElement().assertAddCategory.isPresent()).toBeTruthy().then(function () {
            // sanityPage.SanityElement().courseadditionalCategory.click();
            // browser.sleep(1000);
            // sanityPage.SanityElement().selectAdditionalCategory.click();
            // browser.sleep(1000);
            console.log("Additional Category is validated");
        })

        expect(sanityPage.SanityElement().assretCourseType.isPresent()).toBeTruthy().then(function () {
            //browser.sleep(1000);
            console.log("Course Type is validated");
        })
        // expect(sanityPage.SanityElement().assertSubjectsCovered.isPresent()).toBeTruthy().then(function(){
        //         console.log("SubjectsCovered is validated");
        //     })
        expect(sanityPage.SanityElement().assertSubjectsCovered.isPresent()).toBeTruthy().then(function () {
            console.log("SubjectsCovered is validated");
        })

        expect(sanityPage.SanityElement().assertTopics.isPresent()).toBeTruthy().then(function () {
            console.log("Topic is selected");
        })
        expect(sanityPage.SanityElement().assertAttribution.isPresent()).toBeTruthy().then(function () {
            console.log("Attribution is validated")
        })
        expect(sanityPage.SanityElement().assertCopyright.isPresent()).toBeTruthy().then(function () {
            console.log("Copyright is validated")
        })
        expect(sanityPage.SanityElement().assertyear.isPresent()).toBeTruthy().then(function () {
            console.log("year is validated")
        })
        expect(sanityPage.SanityElement().assertlicense.isPresent()).toBeTruthy().then(function () {
            console.log("Liscece is validated")
        })


        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addChild), 40000, "addChild is not available");

        // sanityPage.SanityElement().addChild.click();
        // //browser.sleep(3000); 

        // sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        // browser.sleep(3000);

        // // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        // sanityPage.SanityElement().addFromLibraryButton.click();
        // browser.sleep(3000);
        // // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        // sanityPage.SanityElement().selectButton.click();
        // browser.sleep(3000);
        // //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        // sanityPage.SanityElement().addContent.click();
        // browser.sleep(3000);
        // // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        // sanityPage.SanityElement().contentFromLibrayBackButton.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        // sanityPage.SanityElement().submitForreviewButton.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().termsAndConditionCheckbox.click();
        // browser.sleep(3000);
        // //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        // sanityPage.SanityElement().NewCoursesubmitButton.click();
        // browser.sleep(3000);
        // //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");



    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}

const searchContentInTabs = (Contents) => {
    try {
        browser.sleep(2000);
        console.log("When User is search for some word and then click on back button then user should  go to search results page not the Digital textbook page.")

        // resov.headerLibrary.click();
        // browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.exploreTab), 20000, "explore tab for review Button not loaded");
        sanity.exploreTab.click();
        browser.sleep(2000);
        console.log("Clicked on Explore Tab");
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.filterSearch), 20000, "explore tab for review Button not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(Contents);
        browser.sleep(1000)
        resov.searchIcon.click();
        browser.sleep(2000);
        console.log("Clicked on Search Icon");
        browser.sleep(2000);
        sanity.assertTabs.getText().then(function (input) {
            console.log("Content searched under " + input + " tab.");
        })
        browser.sleep(2000)
        browser.navigate().back();
        browser.sleep(2000)
        sanity.assertTabs.getText().then(function (input) {
            console.log("User back to " + input + " tab.");
        })
    }
    catch (Exception) {
        console.log("error");

    }

}


const publishCourseFromUpForReviewAndValidateMetadata = (coursename) => {
    try {
        browser.sleep(1000);
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
        content.searchForReview.sendKeys(coursename);
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
        content.searchedContentForPublish.click();
        browser.sleep(8000);
        for (i = 1; i > 0; i++) {
            tpdPage.tpdPage().publishTheCourse.isPresent().then(function (result) {
                if (result === true) {
                    courseMetadataValidation();
                    tpdPage.tpdPage().publishTheCourse.click();
                    browser.sleep(4000);
                    content.clkcheckBoxPublising.isPresent().then(function (result) {
                        if (result === true) {
                            content.clickFirstChekcBox.click();
                            browser.sleep(5000);
                            content.clkcheckBoxPublising.each(function (input) {
                                browser.sleep(200);
                                input.click()
                            });
                            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
                            tpdPage.tpdPage().confirmForPublishBook.click();
                            browser.sleep(6000);
                        } else {
                            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
                            tpdPage.tpdPage().confirmForPublishBook.click();
                            browser.sleep(6000);
                        }
                    })

                } else {

                    browser.refresh();
                    browser.sleep(6000);
                }
            });
            break;
        }
    }
    catch (Exception) {
        console.log('failed');
    }
}

const courseMetadataValidation = () => {
    try {

        console.log("User able to search and edit draft")

        expect(sanity.childTitle.isPresent()).toBeTruthy().then(function () {
            console.log("Title is validated")
        })
        expect(sanityPage.SanityElement().assertDescription.isPresent()).toBeTruthy().then(function () {
            console.log("Description is validated");
        })

        expect(sanity.assertKeywords.isPresent()).toBeTruthy().then(function () {
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
            // sanity.addcourseTag.sendKeys('test');
            console.log("Keywords is validated");
            browser.sleep(1000);
        })

        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().assertcategory.isPresent()).toBeTruthy().then(function () {
            console.log("Category is validated");
        })
        browser.sleep(1000)
        expect(sanityPage.SanityElement().assertAddCategory.isPresent()).toBeTruthy().then(function () {
            // sanityPage.SanityElement().courseadditionalCategory.click();
            // browser.sleep(1000);
            // sanityPage.SanityElement().selectAdditionalCategory.click();
            // browser.sleep(1000);
            console.log("Additional Category is validated");
        })
        browser.sleep(1000);
        expect(sanityPage.SanityElement().assretCourseType.isPresent()).toBeTruthy().then(function () {
            //browser.sleep(1000);
            console.log("Course Type is validated");
        })

        expect(sanityPage.SanityElement().assertSubjectsCovered.isPresent()).toBeTruthy().then(function () {
            console.log("SubjectsCovered is validated");
        })
        browser.sleep(1000);
        expect(sanityPage.SanityElement().assertTopics.isPresent()).toBeTruthy().then(function () {
            console.log("Topic is selected");
        })
        browser.executeScript('window.scrollTo(500,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(1000);
        expect(sanityPage.SanityElement().assertAttribution.isPresent()).toBeTruthy().then(function () {
            console.log("Attribution is validated")
        })
        browser.sleep(1000);
        expect(sanityPage.SanityElement().assertCopyright.isPresent()).toBeTruthy().then(function () {
            console.log("Copyright is validated")
        })
        browser.sleep(1000);
        expect(sanityPage.SanityElement().assertyear.isPresent()).toBeTruthy().then(function () {
            console.log("year is validated")
        })
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().assertlicense);
        browser.sleep(1000);
        expect(sanityPage.SanityElement().assertlicense.isPresent()).toBeTruthy().then(function () {
            console.log("Liscece is validated")
        })
        expect(sanityPage.SanityElement().liscenceFilter.isPresent()).toBeTruthy().then(function () {
            console.log("Liscece filter is validated.");
            sanityPage.SanityElement().liscenceFilter.getText().then(function (liscence) {
                console.log("Selected liscece in reviewer side is " + liscence);

            })
        })
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        });
        browser.sleep(2000);
    }
    catch (Exception) {
        console.log('User not able to search and edit draft');
    }
}

const validateProfileDetails = () => {
    try {

        console.log("User able validate profile details")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.profileButton), 20000, "profile page not loaded");
        content.profileButton.click();
        expect(content.usrName).isPresent().toBeTruthy();
        expect(content.userId).isPresent().toBeTruthy();
        expect(content.userRole).isPresent().toBeTruthy();
        expect(content.submitDetailsProfile).isPresent().toBeTruthy();
        expect(content.userDistrict).isPresent().toBeTruthy();
        expect(content.userState).isPresent().toBeTruthy();
        expect(content.userboard).isPresent().toBeTruthy();
        expect(content.userMedium).isPresent().toBeTruthy();
        expect(content.userClass).isPresent().toBeTruthy();
        expect(content.userSubject).isPresent().toBeTruthy();
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        content.maskednumber.getText().then(function (phonenumber) {
            expect(phonenumber).includes("***");
            console.log(phonenumber + " is masked.");
        })
        content.maskedEmail.getText().then(function (emailID) {
            expect(emailID).includes("****");
            console.log(emailID + " is masked.");
        })
    }
    catch (Exception) {
        console.log('User not able to validate profile details');

    }
}

const recoveryOptionInProfileDetails = () => {
    try {

        console.log("User able validate profile details")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.profileButton), 20000, "profile page not loaded");
        content.profileButton.click();
        expect(content.usrName).isPresent().toBeTruthy();
        expect(content.userId).isPresent().toBeTruthy();
        expect(content.userRole).isPresent().toBeTruthy();
        expect(content.submitDetailsProfile).isPresent().toBeTruthy();
        expect(content.userDistrict).isPresent().toBeTruthy();
        expect(content.userState).isPresent().toBeTruthy();
        expect(content.userboard).isPresent().toBeTruthy();
        expect(content.userMedium).isPresent().toBeTruthy();
        expect(content.userClass).isPresent().toBeTruthy();
        expect(content.userSubject).isPresent().toBeTruthy();
        content.maskednumber.getText().then(function (phonenumber) {
            expect(phonenumber).includes("***");
            console.log(phonenumber + " is masked.");
        })
        content.maskedEmail.getText().then(function (emailID) {
            expect(emailID).includes("****");
            console.log(emailID + " is masked.");
        })
        browser.executeScript("arguments[0].scrollIntoView();", usrOnBoard.clkAddRecoveryID);
        expect(usrOnBoard.clkAddRecoveryID.isPresent()).toBeTruthy().then(function () {
            browser.wait(protractor.ExpectedConditions.visibilityOf(usrOnBoard.clkAddRecoveryID), 20000, "headerDropdown page not loaded");
            usrOnBoard.clkAddRecoveryID.click();
            console.log("Add Recovery option is clickable");
        })
        expect(content.recoveryEmail.isPresent()).toBeTruthy().then(function () {
            console.log("Recovery Email option is validated");
        })

        expect(content.recoveryMobile.isPresent()).toBeTruthy().then(function () {
            console.log("Recovery mobile option is validated");
        })
        expect(content.assertsubmitButton.isPresent()).toBeTruthy().then(function () {
            console.log("Submit button is validated");
        })
    }
    catch (Exception) {
        console.log('User not able to validate profile details');
    }
}

const createBookWithRegionalLanguage = (Regional) => {
    try {


        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = Regional;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
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

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().attribution);
        browser.sleep(1000);
        var attributioninput = "bAttribution1,aAttribution2,dAttribution3,fAttribution4";
        sanityPage.SanityElement().attribution.sendKeys(attributioninput);
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
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
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);
        console.log("User successfully created a collection");
        return bookname;

    } catch (err) {
        console.log(err);
    }
}

const verifyLocationDetails = () => {
    try {
        console.log('Verify Guest user able to edit location details');
        browser.sleep(3000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.profileButton, 20000);
        content.profileButton.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.editProfile, 20000);
        content.editProfile.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(content.boardDropdown, 20000);
        content.boardDropdown.click();
        wait.waitForElementVisibility(content.SelectBoardValue2, 20000);
        content.SelectBoardValue2.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.mediumDropdown, 20000);
        content.mediumDropdown.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.selectMediumValue, 20000);
        content.selectMediumValue.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.classDropdown, 20000);
        content.classDropdown.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.selectClassValue, 20000);
        content.selectClassValue.click();
        browser.sleep(5000);
        browser.executeScript("arguments[0].scrollIntoView();", content.btnSubmit);
        wait.waitForElementVisibility(content.btnSubmit, 20000);
        content.btnSubmit.click();
        browser.sleep(500);
    }
    catch (Exception) {
        console.log("Edit failed");
    }
}

const verifyHomeTab = () => {
    try {

        // browser.sleep(3000);
        // wait.waitForElementVisibility(content.clkHomeTab, 20000);
        // content.clkHomeTab.click();
        // browser.sleep(3000);
        //browser.executeScript("arguments[0].scrollIntoView();", content.assertFromNcert);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        expect(content.assertFromNcert.isDisplayed()).toBeTruthy();
        content.assertFromNcert.getText().then(function (input) {
            console.log(input + " is validated");
        })
        browser.sleep(3000);


    }
    catch (Exception) {
        console.log("hometab not found");
    }
}

const recoveryDetailsVerification = () => {
    try {

        console.log("User able validate profile details")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.profileButton), 20000, "profile page not loaded");
        content.profileButton.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //browser.executeScript("arguments[0].scrollIntoView();", usrOnBoard.clkAddRecoveryID);
        //expect(usrOnBoard.clkAddRecoveryID.isPresent()).toBeTruthy().then(function(){
        browser.wait(protractor.ExpectedConditions.visibilityOf(usrOnBoard.clkAddRecoveryID), 20000, "headerDropdown page not loaded");
        usrOnBoard.clkAddRecoveryID.click();
        console.log("Add Recovery option is clickable");
        //})
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.recoveryEmail), 20000, "recovery email page not loaded");
        content.recoveryEmail.click();
        browser.sleep(2000);
        var correctEmail = "custodianusr19@yopmail.com";
        var incorrectEmail = "custodianusr19yopmail.com";
        var correctphnNum = "9438011583";
        var incorrectphnNum = "943801158";

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.inputField), 20000, "recovery email page not loaded");
        content.inputField.sendKeys(incorrectEmail);
        browser.sleep(2000);
        expect(content.recoverySubmit.isDisplayed()).toBeFalsy().then(function () {
            console.log("The Submit button is disabled for a incorrect email id/Mobile is entered.")

        })
        browser.sleep(2000);
        expect(content.invalidMessage.isDisplayed()).toBeTruthy().then(function () {
            content.invalidMessage.getText().then(function (input) {
                console.log(input);
            })
        })
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.inputField), 20000, "recovery email page not loaded");
        content.inputField.sendKeys(correctEmail);
        browser.sleep(2000);
        expect(content.recoverySubmit.isDisplayed()).toBeTruthy().then(function () {
            console.log("The Submit button is enabled for a correct email id/Mobile is entered.");
        })
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.recoveryMobile), 20000, "recovery email page not loaded");
        content.recoveryMobile.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.inputField), 20000, "recovery email page not loaded");
        content.inputField.sendKeys(incorrectphnNum);
        browser.sleep(2000);
        expect(content.recoverySubmit.isDisplayed()).toBeFalsy().then(function () {
            console.log("The Submit button is disabled for a incorrect email id/Mobile is entered.");
        })
        browser.sleep(2000);
        expect(content.invalidMessage.isDisplayed()).toBeTruthy().then(function () {
            content.invalidMessage.getText().then(function (input) {
                console.log(input);
            })
        })
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.inputField), 20000, "recovery email page not loaded");
        content.inputField.sendKeys(correctphnNum);
        browser.sleep(2000);
        expect(content.recoverySubmit.isDisplayed()).toBeTruthy().then(function () {
            console.log("The Submit button is enabled for a correct email id/Mobile is entered.")
        })
        content.maskednumber.getText().then(function (phonenumber) {
            expect(phonenumber).includes("***");
            console.log(phonenumber + " is masked.");
        })
        content.maskedEmail.getText().then(function (emailID) {
            expect(emailID).includes("****");
            console.log(emailID + " is masked.");
        })


    }
    catch (Exception) {
        console.log('User not able to validate profile details');
    }
}

const validateGroupCreation = () => {
    try {
        console.log('user is able to create myGroup,add member ');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton), 40000, "Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName), 40000, "Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription), 40000, "Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox), 40000, "Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton1), 40000, "CreateGroup submit button not available");
        searchObj.createGroupSubmitButton1.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully), 40000, "addedSuccessfully Icon not available");
        var adminText = searchObj.addedSuccessfully.getText();
        expect((adminText).isDisplayed()).toBe(true);
    } catch (Exception) {
        console.log('failed');
    }
}


const creatorReviewComments = (content) => {

    try {
        console.log("creator is trying to review reviewer comments for reject contents");

        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.searchForReview), 20000, "allMyContent page not loaded");
        resov.searchForReview.sendKeys(content);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 20000, "  deleteButton is not available");
        resov.imageCard.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.reviewComments), 20000, "  deleteButton is not available");
        resov.reviewComments.click();
        browser.sleep(1000);
        expect(resov.commentsInput).isDisplayed().toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.commentBoxClose), 20000, "yesButtonPopup is not available");
        resov.commentBoxClose.click();

        console.log("Creator reviewed the comments successfully");
    }
    catch (exception) {
        console.log("Failed to review comments ");
    }
}


const createBookwithRegionalLanguage = () => {
    try {

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        rootNodeBookname = "हिन्दी" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(rootNodeBookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
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

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().attribution);
        browser.sleep(1000);
        var attributioninput = "bAttribution1,aAttribution2,dAttribution3,fAttribution4";
        sanityPage.SanityElement().attribution.sendKeys(attributioninput);
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        childNodeBookname = "हिन्दी" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(childNodeBookname);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
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
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);
        console.log("User successfully created a book");
        return rootNodeBookname;

    } catch (err) {
        console.log(err);
    }
}


const groupValidation = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkCloseIconPopup), 40000, "clkCloseIconPopup icon not available");
        searchObj.clkCloseIconPopup.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton), 40000, "Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName), 40000, "Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription), 40000, "Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox), 40000, "Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton1), 40000, "CreateGroup submit button not available");
        searchObj.createGroupSubmitButton1.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully), 40000, "addedSuccessfully Icon not available");
        var adminText = searchObj.addedSuccessfully.getText();
        expect((adminText).isDisplayed()).toBe(true);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup), 40000, "First group is not available");
        sanity.firstGroup.click();
        browser.sleep(5000);


        sanityPage.SanityElement().forum.isPresent().then(function (result) {
            if (result) {
                browser.sleep(2000);
                console.log("the group admin is able to enable and disable the discussion forum multiple times to the selected group successfully.");
                console.log("the group admin is able to enable the discussion forum to the selected group successfully.");
                console.log("the Enbale discussion forum option is showing in the group details page when the group admin opens the group if the discussion forum is not enabled.");
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
                sanity.disableDiscussionIcon.click();
                browser.sleep(1000);
                //(sanity.disableDiscussionIcon).isDisplayed().toBeTruthy();
                console.log("disable discussion is validated")
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
                sanity.disablediscussionButton.click();
                browser.sleep(4000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();
                browser.sleep(6000);
                browser.refresh();
                console.log(" the group admin is able to enable the discussion forum to the selected group successfully.");
                // browser.actions().sendKeys(protractor.Key.ENTER).perform();
                // browser.sleep(4000);

            } else {
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                //(sanity.enableDiscussionIcon).isDisplayed().toBeTruthy();
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();
                browser.sleep(6000);
                browser.refresh();
                // browser.actions().sendKeys(protractor.Key.ENTER).perform();
                // browser.sleep(5000);

            }
        });




        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enablediscussionSuccessful), 40000, "Enable discussion successful message is not available");
        // browser.sleep(2000);
        // expect(sanity.enablediscussionSuccessful.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkGeneDiscDF), 20000, "generalDiscussion is not available");
        sanityPage.SanityElement().clkGeneDiscDF.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().startDiscussion), 20000, "startDiscussion is not available");
        sanityPage.SanityElement().startDiscussion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().askQuestion), 20000, "askQuestion is not available");
        sanityPage.SanityElement().askQuestion.sendKeys("This is my 1st idea to be shared");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().description), 20000, "description is not available");
        sanityPage.SanityElement().description.sendKeys("DescriptionIdeaShared");
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().submitButton);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButton), 20000, "submitButton is not available");
        sanityPage.SanityElement().submitButton.click();
        browser.sleep(3000);
        console.log("The group member is able to join the discussions.")
        sanityPage.SanityElement().clkGenericCreatedTopics.click();
        browser.sleep(3000);
        expect(sanityPage.SanityElement().assertAddedTopicName.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().assertaddedDesName.isDisplayed()).toBeTruthy();

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkHamburgerMenuTopic), 20000, "clkHamburgerMenuTopic is not available");
        sanityPage.SanityElement().clkHamburgerMenuTopic.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkHamburgerMenuTopicEdit), 20000, "clkHamburgerMenuTopicEdit is not available");
        sanityPage.SanityElement().clkHamburgerMenuTopicEdit.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().askQuestion), 20000, "askQuestion is not available");
        sanityPage.SanityElement().askQuestion.clear();
        sanityPage.SanityElement().askQuestion.sendKeys("UpdateTopic");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().description), 20000, "description is not available");
        sanityPage.SanityElement().description.clear();
        sanityPage.SanityElement().description.sendKeys("UpdatedDescription");
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().clkUpdateBtnTopcis);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkUpdateBtnTopcis), 20000, "submitButton is not available");
        sanityPage.SanityElement().clkUpdateBtnTopcis.click();
        browser.sleep(3000);

        browser.sleep(3000);
        expect(sanityPage.SanityElement().assertUpdatedTopicName.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().assertUpdateDesName.isDisplayed()).toBeTruthy();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkHamburgerMenuTopic), 20000, "clkHamburgerMenuTopic is not available");
        sanityPage.SanityElement().clkHamburgerMenuTopic.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkHamburgerMenuTopicDelete), 20000, "clkHamburgerMenuTopic is not available");
        sanityPage.SanityElement().clkHamburgerMenuTopicDelete.click();
        browser.sleep(4000);
        var myAlert = browser.switchTo().alert();
        myAlert.accept();
        browser.sleep(4000);
        expect(sanityPage.SanityElement().assertNoData.isDisplayed()).toBeTruthy();
        browser.sleep(4000);


    } catch (err) {
        console.log(err)
    }
}

const removeCollboratortoDraftAndSaveBookForCourse = (BookName) => {
    try {
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        // content.headerDropdown.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        // sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(10000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.drafts), 20000, "draft Icon not available");
        content.drafts.click();
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
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().baackButton), 20000, "back button not available");
        sanityPage.SanityElement().baackButton.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        // sanityPage.SanityElement().submitForreviewButton.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().termsAndConditionCheckbox.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().NewCoursesubmitButton.click();
        // browser.sleep(4000);
        // browser.sleep(2000);
    } catch (err) {
        console.log(err);
    }
}


const activateDeactivateGroup = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkCloseIconPopup), 40000, "clkCloseIconPopup icon not available");
        // searchObj.clkCloseIconPopup.click();
        // browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton), 40000, "Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName), 40000, "Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription), 40000, "Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox), 40000, "Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton), 40000, "CreateGroup submit button not available");
        searchObj.createGroupSubmitButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully), 40000, "addedSuccessfully Icon not available");
        var adminText = searchObj.addedSuccessfully.getText();
        expect((adminText).isDisplayed()).toBe(true);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup), 40000, "First group is not available");
        sanity.firstGroup.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.deactivateGroup), 40000, "Disablediscussion Icon is not available");
        sanity.deactivateGroup.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.deactivateGroupPopUp), 40000, "Disablediscussion Icon is not available");
        sanity.deactivateGroupPopUp.click();
        browser.sleep(3000);
        console.log("Group deactivated successfully")
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.activateGroup), 40000, "Disablediscussion Icon is not available");
        sanity.activateGroup.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.activateGroupPopUp), 40000, "Disablediscussion Icon is not available");
        sanity.activateGroupPopUp.click();
        browser.sleep(1000);
        console.log("Group Activated successfully")

    } catch (err) {
        console.log(err)
    }
}


const addCollboratortoAllMyContentAndSaveBook = (BookName) => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(10000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.allMyContent), 20000, "allMyContent Icon not available");
        content.allMyContent.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().bookSeaarchBox), 20000, "search book  not available");
        sanityPage.SanityElement().bookSeaarchBox.sendKeys(BookName);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard4), 20000, "First search book not available");
        resov.imageCard4.click();
        browser.sleep(4000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        if (searchObj.collaboratorIcon.isDisplayed()) {
            console.log("Collaborator icon is present");
        }
        browser.sleep(1000);
        searchObj.collaboratorIcon.click();
        console.log("User should be able to click on collaborator icon");
        searchObj.searchCollaboratorField.sendKeys("Mentor");
        browser.sleep(3000);
        searchObj.suggestionCollaboratorList1.click();
        browser.sleep(3000);
        searchObj.searchCollaboratorField.clear();
        searchObj.searchCollaboratorField.click();
        searchObj.searchCollaboratorField.sendKeys("suborg");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestionCollaboratorList1), 20000, "suggestionCollaboratorList2 not loaded");
        searchObj.suggestionCollaboratorList1.click();
        browser.sleep(2000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.clickDonebutton);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickDonebutton), 20000, "donebutton1 not loaded");
        searchObj.clickDonebutton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveAsDraft), 20000, "Save Draft");
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().coursePagebackButton), 20000, "Save Draft");
        sanityPage.SanityElement().coursePagebackButton.click();
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        // sanityPage.SanityElement().submitForreviewButton.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().termsAndConditionCheckbox.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().NewCoursesubmitButton.click();
        // browser.sleep(4000);
        // browser.sleep(2000);
    } catch (err) {
        console.log(err);
    }
}

const FillBmesWhileCreatingBook3 = () => {
    try {
        browser.sleep(5000);
        // wait.waitForElementVisibility(etbv.clkBoardInBook, 20000, "clkBoardInBook is not available");
        // etbv.clkBoardInBook.click();
        // browser.sleep(200);
        // wait.waitForElementVisibility(etbv.SltBoardInBook, 20000, "clkBoardInBook is not available");
        // etbv.SltBoardInBook.click();
        // browser.sleep(200);
        // wait.waitForElementVisibility(etbv.clkMediumInBook, 20000, "clkBoardInBook is not available");
        // etbv.clkMediumInBook.click();
        // browser.sleep(200);
        // wait.waitForElementVisibility(etbv.sltMediumInBook, 20000, "clkBoardInBook is not available");
        // etbv.sltMediumInBook.click();
        // browser.sleep(200);
        // wait.waitForElementVisibility(etbv.clkClassInBook, 20000, "clkBoardInBook is not available");
        // etbv.clkClassInBook.click();
        // browser.sleep(200);
        // wait.waitForElementVisibility(etbv.sltClassInBook, 20000, "clkBoardInBook is not available");
        // etbv.sltClassInBook.click();
        // browser.sleep(200);
        // wait.waitForElementVisibility(etbv.clkSubjectInBook, 20000, "clkBoardInBook is not available");
        // etbv.clkSubjectInBook.click();
        // browser.sleep(200);
        // wait.waitForElementVisibility(etbv.sltSubjectInBook, 20000, "clkBoardInBook is not available");
        // etbv.sltSubjectInBook.click();
        // browser.sleep(100);
        wait.waitForElementVisibility(sanity.publisher, 20000, "publisher is not available");
        sanity.publisher.sendKeys("TestPublisher");
        browser.sleep(100);
        wait.waitForElementVisibility(sanity.year, 20000, "publisher is not available");
        sanity.year.click();
        browser.sleep(100);
        wait.waitForElementVisibility(sanity.sltYear, 20000, "publisher is not available");
        sanity.sltYear.click();
    }
    catch (err) {
        console.log(err);
    }
}

const validatedViewCollaborator = (collectionContent) => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000, "Creation page not loaded");
        content.upForReview.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().bookSeaarchBox), 20000, "search book  not available");
        sanityPage.SanityElement().bookSeaarchBox.sendKeys(collectionContent);
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
        content.searchedContentForPublish.click();
        browser.sleep(8000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.imageCard), 20000, "First search book not available");
        // content.imageCard.click();
        browser.sleep(8000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        if (searchObj.viewCollaborator.isDisplayed()) {
            console.log("Collaborator icon is present");
            searchObj.viewCollaborator.click();
        }
        browser.sleep(1000);
        resov.manageCollaborator.click();
        browser.sleep(1000);
        expect(sanity.viewCollab.isDisplayed()).toBe(true).then(function () {
            console.log("collaborator is viewed");
        })
        browser.sleep(3000);

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

const checkForCourseFramework = () => {
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
        // sanity.addcourseTag.sendKeys('test');
        // browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(1000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(1000);
        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(3000);
        if (FrameworkName === "k12") {
            sanityPage.SanityElement().k12.getText().then(function (validateK12) {
                console.log("Framework Type is" + validateK12);
            })
            sanityPage.SanityElement().k12.click();
        } else if (FrameworkName === "CPD") {
            sanityPage.SanityElement().SelectCPD.getText().then(function (validateCPD) {
                console.log("Framework Type is" + validateCPD);
            })
            sanityPage.SanityElement().SelectCPD.click();
        } else {
            sanityPage.SanityElement().SelectCPD.click();
        }
        browser.sleep(1000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(1000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(sanityPage.SanityElement().selectBoardForcourse.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().selectBoardForcourse.click();
            browser.sleep(1000);
            sanityPage.SanityElement().selectBoard.click();
            browser.sleep(1000);
            console.log("Board is Selected")
        })

        expect(sanityPage.SanityElement().selectMediumForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
            })
            console.log("Multiple medium is selected")
        })
        expect(sanityPage.SanityElement().selectClassForCourse.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Class is selected")
        })
        expect(sanityPage.SanityElement().selectSubjectForCourse.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Subject is selected")
        })
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(1000);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(1000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);
        sanityPage.SanityElement().baackButton.click();
        browser.sleep(3000);
        console.log("User successfully checkForGenericCourseFramework");
    } catch (e) {
        console.error("User failed to checkForGenericCourseFramework");
    }
}

const verifyQRCodeAtBookLevelAndUnitLevel = () => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        //FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();

        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(4000);


        sanityPage.SanityElement().ClickQRYes.click();
        browser.sleep(3000);

        sanityPage.SanityElement().EnterQRCode.sendKeys(cred[40]['Title']);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectQRCode), 20000, "QR Code Is not Added");
        sanityPage.SanityElement().selectQRCode.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().QRInvalid), 20000, "Valid QR Code Is not Added");
        expect(sanityPage.SanityElement().QRInvalid.isDisplayed()).toBeTruthy();
        console.log("QR Code Added is Valid");


        sanityPage.SanityElement().editQR.click();
        browser.sleep(3000);

        sanityPage.SanityElement().EnterQRCode.clear();
        sanityPage.SanityElement().EnterQRCode.sendKeys(cred[40]['CourseName']);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectQRCode), 20000, "QR Code Is not Added");
        sanityPage.SanityElement().selectQRCode.click();
        browser.sleep(4000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().QRValid), 20000, "Valid QR Code Is not Added");
        expect(sanityPage.SanityElement().QRValid.isDisplayed()).toBeTruthy();
        console.log("QR Code Added is Valid");



        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

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

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().attribution);
        browser.sleep(1000);
        var attributioninput = "bAttribution1,aAttribution2,dAttribution3,fAttribution4";
        sanityPage.SanityElement().attribution.sendKeys(attributioninput);
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        sanityPage.SanityElement().ClickQRYes.click();
        browser.sleep(3000);

        sanityPage.SanityElement().EnterQRCode.sendKeys(cred[40]['CourseDescription']);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectQRCode), 20000, "QR Code Is not Added");
        sanityPage.SanityElement().selectQRCode.click();
        browser.sleep(4000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().QRValid), 20000, "Valid QR Code Is not Added");
        expect(sanityPage.SanityElement().QRValid.isDisplayed()).toBeTruthy();
        console.log("QR Code Added is Valid");

        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        // sanityPage.SanityElement().clkContent.click();
        // browser.sleep(3000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);
        console.log("User successfully created a collection");
        return bookname;

    }

    catch (err) {
        console.log(err);
    }
}


const UpdatePublished = (BookName) => {
    try {

        console.log("User able to search and edit draft")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.publishedContent), 40000, "published is not available");
        resov.publishedContent.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(BookName);
        browser.sleep(6000);

        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);

        sanityPage.SanityElement().unitClick2.click();

        browser.sleep(2000);
        sanityPage.SanityElement().childDesc.clear();
        sanityPage.SanityElement().childDesc.sendKeys("Up.dateDescription");

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);

        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);
    }
    catch (err) {
        console.log(err);
    }
}

const AddResourceAndCollectionWhileCreatingBook = () => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookA" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
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

        sanityPage.SanityElement().addSibling.click();
        browser.sleep(3000);

        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);

        sanityPage.SanityElement().searchContentFromLibrary.sendKeys(cred[41]['CourseName']);
        browser.sleep(3000);

        sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);
        browser.sleep(3000);

        browser.sleep(3000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);

        sanityPage.SanityElement().searchContentFromLibrary.clear();
        sanityPage.SanityElement().searchContentFromLibrary.sendKeys(cred[42]['CourseName']);
        browser.sleep(3000);

        sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);
        browser.sleep(3000);

        browser.sleep(3000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);


        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);
        console.log("User successfully created a collection");
        return bookname;

    } catch (err) {
        console.log(err);
    }
}






const SearchWithDoIdForSummeryTypeAsComplete = () => {
    var searchedMenu;
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '4');
        browser.sleep(2000);
        console.log("User is trying to navigate To Library And Search content");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerLibrary), 20000, "headerLibrary is not available");
        content.headerLibrary.click();
        browser.sleep(1000);
        console.log(" User/Content creator clicked on Library page.");
        content.searchInput.click();
        browser.sleep(1000);
        content.searchInput.sendKeys(cred[3]['Do_Id']);
        browser.sleep(1000);
        content.searchIcon.click();
        browser.sleep(8000);
        searchedMenu = content.allTab.getText().then(function (value) {
            console.log("Content searched under " + value + " tab.");
        })
        console.log("User is able to get the name of searched content in default ALL tab menu");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.QuestionSetImage1), 20000, "First search book not available");
        content.QuestionSetImage1.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });




        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetTitleComplete), 20000, "Valid Question Set Title Is not Added");
        expect(content.questionSetTitleComplete.isDisplayed()).toBeTruthy();
        console.log("Question Set Title Valid");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.totalNoOfQuestions1), 20000, "Total No Of Question are Invalid");
        expect(content.totalNoOfQuestions1.isDisplayed()).toBeTruthy();
        console.log("Total No Of Question are Valid");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.durationQuestionSet1), 20000, "Durations Of Question Sets are Invalid");
        expect(content.durationQuestionSet1.isDisplayed()).toBeTruthy();
        console.log("Durations Of Question Sets are Valid");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetInstComplete), 20000, "Instructions On Question Set Is Invalid");
        expect(content.questionSetInstComplete.isDisplayed()).toBeTruthy();
        console.log("Instructions On Question Set Is Valid");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);
        content.selectAnswer1.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(1000);

        expect(content.assertFeedback.isPresent()).toEqual(false);
        console.log("No Feedback For Selected Question");
        browser.sleep(4000);

        content.selectAnswer2.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(1000);

        expect(content.assertFeedback.isPresent()).toEqual(false);
        console.log("No Feedback For Selected Question");
        browser.sleep(4000);

        content.selSubjectiveAnswer3.click();

        expect(content.subjectiveAnswer3.isPresent()).toBeTruthy();
        console.log("Answer Is Visible For Subjective Type Question1");
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(3000);

        content.selSubjectiveAnswer3.click();

        expect(content.subjectiveAnswer4.isPresent()).toBeTruthy();
        console.log("Answer Is Visible For Subjective Type Question1");
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);


        expect(content.assertNoSubmitOption.isDisplayed()).toBeTruthy();
        console.log("No Submit Confirmation For Selected Question Set");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.contentFeedback), 20000, "Content Feedback Button Is Not Available");
        expect(content.contentFeedback.isDisplayed()).toBeTruthy();
        console.log("Content Feedback Button Is Available");
        content.contentFeedback.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitcontentFeedback), 20000, "Content Submit Button Is Not Available");
        expect(content.submitcontentFeedback.isDisplayed()).toBeTruthy();
        console.log("Content Submit Button Available");
        content.submitcontentFeedback.click();

        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(3000);
        expect(content.completeQuestionSet.isDisplayed()).toBeTruthy();
        console.log("Question Set Consumed and Completed Sucessfully ");



    }
    catch (Exception) {
        console.log("Failed Consume and Complete Question Set ");
    }
    return searchedMenu;
}


const SearchWithDoIdForSummeryTypeAsScore = () => {
    var searchedMenu;
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '4');
        browser.sleep(2000);
        console.log("User is trying to navigate To Library And Search content");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerLibrary), 20000, "headerLibrary is not available");
        content.headerLibrary.click();
        browser.sleep(1000);
        console.log(" User/Content creator clicked on Library page.");
        content.searchInput.click();
        browser.sleep(1000);
        content.searchInput.sendKeys(cred[4]['Do_Id']);
        browser.sleep(1000);
        content.searchIcon.click();
        browser.sleep(8000);
        searchedMenu = content.allTab.getText().then(function (value) {
            console.log("Content searched under " + value + " tab.");
        })
        console.log("User is able to get the name of searched content in default ALL tab menu");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.QuestionSetImage1), 20000, "First search book not available");
        content.QuestionSetImage1.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetTitleScore), 20000, "Valid Question Set Title Is not Added");
        expect(content.questionSetTitleScore.isDisplayed()).toBeTruthy();
        console.log("Question Set Title Valid");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.totalNoOfQuestions1), 20000, "Total No Of Question are Invalid");
        expect(content.totalNoOfQuestions1.isDisplayed()).toBeTruthy();
        console.log("Total No Of Question are Valid");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetdurationScore), 20000, "Durations Of Question Sets are Invalid");
        expect(content.questionSetdurationScore.isDisplayed()).toBeTruthy();
        console.log("Durations Of Question Sets are Valid");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetInstScore), 20000, "Instructions On Question Set Is Invalid");
        expect(content.questionSetInstScore.isDisplayed()).toBeTruthy();
        console.log("Instructions On Question Set Is Valid");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);

        content.selectAnswer1.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(1000);

        expect(content.assertFeedback.isPresent()).toEqual(false);
        console.log("No Feedback For Selected Question");
        browser.sleep(4000);

        content.selectAnswer2.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(1000);

        expect(content.assertFeedback.isPresent()).toEqual(false);
        console.log("No Feedback For Selected Question");
        browser.sleep(4000);

        content.selSubjectiveAnswer3.click();

        expect(content.subjectiveAnswer3.isPresent()).toBeTruthy();
        console.log("Answer Is Visible For Subjective Type Question1");
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(3000);


        content.selectAnswer3.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(1000);

        expect(content.assertFeedback.isPresent()).toEqual(false);
        console.log("No Feedback For Selected Question");
        browser.sleep(4000);

        expect(content.assertNoSubmitOption.isDisplayed()).toBeTruthy();
        console.log("No Submit Confirmation For Selected Question Set");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.contentFeedback), 20000, "Next Slide Option Is Not Available");
        expect(content.contentFeedback.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.contentFeedback.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitcontentFeedback), 20000, "Submit Button Is Not Available");
        expect(content.submitcontentFeedback.isDisplayed()).toBeTruthy();
        console.log("Submit Feedback Content Successfully");
        content.submitcontentFeedback.click();

        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(3000);
        expect(content.userConsumedQuestionSet.isDisplayed()).toBeTruthy();
        console.log("Question Set Consumed Successfully");

        expect(content.scoreQuestionSet.isDisplayed()).toBeTruthy();
        console.log("Question Set Consumed and Completed only with Score");


    }
    catch (Exception) {
        console.log("Failed to Consume Question Set with Score");
    }
    return searchedMenu;
}


const SearchWithDoIdForSummeryTypeAsDuration = () => {
    var searchedMenu;
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '4');
        browser.sleep(2000);
        console.log("User is trying to navigate To Library And Search content");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerLibrary), 20000, "headerLibrary is not available");
        content.headerLibrary.click();
        browser.sleep(1000);
        console.log(" User/Content creator clicked on Library page.");
        content.searchInput.click();
        browser.sleep(1000);
        content.searchInput.sendKeys(cred[5]['Do_Id']);
        browser.sleep(1000);
        content.searchIcon.click();
        browser.sleep(8000);
        searchedMenu = content.allTab.getText().then(function (value) {
            console.log("Content searched under " + value + " tab.");
        })
        console.log("User is able to get the name of searched content in default ALL tab menu");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.QuestionSetImage1), 20000, "First search book not available");
        content.QuestionSetImage1.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });



        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetTitleDuration), 20000, "Valid Question Set Title Is not Added");
        expect(content.questionSetTitleDuration.isDisplayed()).toBeTruthy();
        console.log("Question Set Title Valid");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.totalNoOfQuestions2), 20000, "Total No Of Question are Invalid");
        expect(content.totalNoOfQuestions2.isDisplayed()).toBeTruthy();
        console.log("Total No Of Question are Valid");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.durationQuestionSet1), 20000, "Durations Of Question Sets are Invalid");
        expect(content.durationQuestionSet1.isDisplayed()).toBeTruthy();
        console.log("Durations Of Question Sets are Valid");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetInstDuration), 20000, "Instructions On Question Set Is Invalid");
        expect(content.questionSetInstDuration.isDisplayed()).toBeTruthy();
        console.log("Instructions On Question Set Is Valid");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);

        content.selectAnswer1.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(1000);


        expect(content.assertFeedback.isPresent()).toEqual(false);
        console.log("No Feedback For Selected Question");
        browser.sleep(4000);

        content.selectAnswer2.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(1000);

        expect(content.assertFeedback.isPresent()).toEqual(false);
        console.log("No Feedback For Selected Question");
        browser.sleep(4000);

        content.selSubjectiveAnswer3.click();

        expect(content.subjectiveAnswer.isPresent()).toBeTruthy();
        console.log("Answer Is Visible For Subjective Type Question1");
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);

        expect(content.assertNoSubmitOption.isDisplayed()).toBeTruthy();
        console.log("No Submit Confirmation For Selected Question Set");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.contentFeedback), 20000, "Next Slide Option Is Not Available");
        expect(content.contentFeedback.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.contentFeedback.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitcontentFeedback), 20000, "Submit Button Is Not Available");
        expect(content.submitcontentFeedback.isDisplayed()).toBeTruthy();
        console.log("Submit Feedback Content Successfully");
        content.submitcontentFeedback.click();

        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(3000);
        expect(content.assertDuration.isDisplayed()).toBeTruthy();
        console.log("Question Set Consumed With Durtion");

        browser.sleep(3000);
        expect(content.durationQuestionSet.isDisplayed()).toBeTruthy();
        console.log("Question Set Consumed and Completed only with Durtion");


    }
    catch (Exception) {
        console.log("Failed to Consume Question Set with Duration");
    }
    return searchedMenu;
}


const verifyFeedbackYesShowSolutionYesSubmitYes = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '4');
        browser.sleep(2000);
        console.log("User is trying to navigate To Library And Search content");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerLibrary), 20000, "headerLibrary is not available");
        content.headerLibrary.click();
        browser.sleep(1000);
        console.log(" User/Content creator clicked on Library page.");
        content.searchInput.click();
        browser.sleep(1000);
        content.searchInput.sendKeys(cred[13]['Do_Id']);
        browser.sleep(1000);
        content.searchIcon.click();
        browser.sleep(8000);
        searchedMenu = content.allTab.getText().then(function (value) {
            console.log("Content searched under " + value + " tab.");
        })
        console.log("User is able to get the name of searched content in default ALL tab menu");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.QuestionSetImage1), 20000, "First search book not available");
        content.QuestionSetImage1.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });



        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questioSetTtitlewithSolution), 20000, "Valid Question Set Title Is not Added");
        expect(content.questioSetTtitlewithSolution.isDisplayed()).toBeTruthy();
        console.log("Question Set Title Is  Valid");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.totalNoOfQuestions1), 20000, "Total No Of Question are Invalid");
        expect(content.totalNoOfQuestions1.isDisplayed()).toBeTruthy();
        console.log("Total No Of Question are Valid");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.durationQuestionSet1), 20000, "Durations Of Question Sets are Invalid");
        expect(content.durationQuestionSet1.isDisplayed()).toBeTruthy();
        console.log("Durations Of Question Sets are Valid");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetInstwithSoln), 20000, "Instructions On Question Set Is Invalid");
        expect(content.questionSetInstwithSoln.isDisplayed()).toBeTruthy();
        console.log("Instructions On Question Set Is Valid");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);

        content.selectAnswer1.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();


        expect(content.assertFeedback.isDisplayed()).toBeTruthy();
        console.log("Feedback Is Selected For Question1");

        content.viewSolution.click();
        browser.sleep(5000);

        expect(content.Solution1.isDisplayed()).toBeTruthy();
        console.log("Solution Is Displayed For Question1");
        content.buttonDone.click();

        content.nextSlideIconStep1.click();
        browser.sleep(5000);
        content.selectAnswer22.click();


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();


        expect(content.assertFeedback.isDisplayed()).toBeTruthy();
        console.log("Feedback Is Selected For Question2");
        content.viewSolution.click();
        browser.sleep(5000);

        expect(content.Solution1.isDisplayed()).toBeTruthy();
        console.log("Solution Is Displayed For Question2");

        content.buttonDone.click();
        browser.sleep(3000);

        content.nextSlideIconStep1.click();
        browser.sleep(5000);

        expect(content.selSubjectiveAnswer3.isDisplayed()).toBeTruthy();
        console.log("Question3 Is Displayed As Subjective Type Question ");
        content.selSubjectiveAnswer3.click();


        expect(content.SubjectiveAns3.isDisplayed()).toBeTruthy();
        console.log("Answer For Question3 Is Displayed ");

        expect(content.SubjectiveSol3.isDisplayed()).toBeTruthy();
        console.log("Solution For Question3 Is Displayed On Question Set");

        content.nextSlideIconStep1.click();
        browser.sleep(5000);
        content.selectAnswer3.click();


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();


        expect(content.assertFeedback.isDisplayed()).toBeTruthy();
        console.log("Feedback Is Selected For Question4");

        content.viewSolution.click();
        browser.sleep(5000);

        expect(content.Solution1.isDisplayed()).toBeTruthy();
        console.log("Solution Is Displayed For Question4");

        content.buttonDone.click();
        browser.sleep(3000);

        content.nextSlideIconStep1.click();
        browser.sleep(5000);


        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(content.submitQuestionSet.isDisplayed()).toBeTruthy();
        console.log("Submit Confirmation Question Set Is Displayed successfully ");


        browser.sleep(3000);
        content.submitQuestionSet.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.contentFeedback), 20000, "Next Slide Option Is Not Available");
        expect(content.contentFeedback.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.contentFeedback.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitcontentFeedback), 20000, "Submit Button Is Not Available");
        expect(content.submitcontentFeedback.isDisplayed()).toBeTruthy();
        console.log("Submit Feedback Content Successfully");
        content.submitcontentFeedback.click();

        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        expect(content.userConsumedQuestionSet.isDisplayed()).toBeTruthy();
        console.log("Question Set Consumed and Completed With Score");



    }
    catch (Exception) {
        console.log("Failed to Consume Question Set with Duration");
    }

}


const verifyTestModewithMaximumNoOfAttempts = () => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '4');

        content.clkProfile1.click();
        browser.sleep(2000);
        console.log("User is trying to navigate To Library And Search content");
        //   browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerLibrary), 20000, "headerLibrary is not available");
        //   content.headerLibrary.click();
        browser.sleep(1000);
        console.log(" User/Content creator clicked on Library page.");
        content.searchInput.click();
        browser.sleep(1000);
        content.searchInput.sendKeys(cred[11]['Do_Id']);
        browser.sleep(1000);
        content.searchIcon.click();
        browser.sleep(8000);
        searchedMenu = content.allTab.getText().then(function (value) {
            console.log("Content searched under " + value + " tab.");
        })
        console.log("User is able to get the name of searched content in default ALL tab menu");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.QuestionSetImage1), 20000, "First search book not available");
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '4');

        content.clkProfile1.click();
        browser.sleep(2000);
        console.log("User is trying to navigate To Library And Search content");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerLibrary), 20000, "headerLibrary is not available");
        content.headerLibrary.click();
        browser.sleep(1000);
        console.log(" User/Content creator clicked on Library page.");
        content.searchInput.click();
        browser.sleep(1000);
        content.searchInput.sendKeys(cred[11]['Do_Id']);
        browser.sleep(1000);
        content.searchIcon.click();
        browser.sleep(8000);
        searchedMenu = content.allTab.getText().then(function (value) {
            console.log("Content searched under " + value + " tab.");
        })
        console.log("User is able to get the name of searched content in default ALL tab menu");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.QuestionSetImage1), 20000, "First search book not available");

        content.QuestionSetImage1.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(2000);
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(7000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.checkBoxConsent);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");

        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        browser.sleep(4000);



        expect(content.selQuestionSet.isDisplayed()).toBeTruthy();
        console.log("Question Set Is Availabel Under Selected Course");
        content.selQuestionSet.click();

        /*browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);
        content.selectAnswer1.click();


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);
        content.selectAnswer2.click();


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);

        expect(content.selSubjectiveAnswer3.isDisplayed()).toBeTruthy();
        console.log("Question3 Is Displayed As Subjective Type Question ");
        content.selSubjectiveAnswer3.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);
        content.selectAnswer3.click();

        browser.sleep(5000);
        expect(content.assertNoSubmitOption.isDisplayed()).toBeTruthy();
        console.log("No Submit Confirmation For Selected Question Set");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.contentFeedback), 20000, "Content Feedback Button Is Not Available");
        expect(content.contentFeedback.isDisplayed()).toBeTruthy();
        console.log("Content Feedback Button Is Available");
        content.contentFeedback.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitcontentFeedback), 20000, "Content Submit Button Is Not Available");
        expect(content.submitcontentFeedback.isDisplayed()).toBeTruthy();
        console.log("Content Submit Button Available");
        content.submitcontentFeedback.click();

        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.OneAttemptRemaining), 20000, "Last Attemmpt Indication Is Not Available");
        expect(content.OneAttemptRemaining.isDisplayed()).toBeTruthy();
        console.log("Last One Attempt Is Pending ");
        content.Replay.click();
        browser.sleep(5000);

        browser.sleep(5000);
        content.selectAnswer1.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);
        content.selectAnswer2.click();


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);

        expect(content.selSubjectiveAnswer3.isDisplayed()).toBeTruthy();
        console.log("Question3 Is Displayed As Subjective Type Question ");
        content.selSubjectiveAnswer3.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);
        content.selectAnswer3.click();
        browser.sleep(5000);

        expect(content.exceedMaximumNoOfAttempts.isDisplayed()).toBeTruthy();
        console.log("Reached Maximum No Of Attempts ");
        browser.sleep(5000);
        content.closeWarning.click();
        browser.sleep(5000);


        expect(content.courseCompleted.isDisplayed()).toBeTruthy();
        console.log("Course Completed 100% ");
        browser.sleep(5000);*/

    }
    catch (Exception) {
        console.log("Failed to Consume Question Set With Max Attempts");
    }
}


const verifyWarningTimeOnQuestionSet = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '4');
        browser.sleep(2000);
        console.log("User is trying to navigate To Library And Search content");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerLibrary), 20000, "headerLibrary is not available");
        content.headerLibrary.click();
        browser.sleep(1000);
        console.log(" User/Content creator clicked on Library page.");
        content.searchInput.click();
        browser.sleep(1000);
        content.searchInput.sendKeys(cred[10]['Do_Id']);
        browser.sleep(1000);
        content.searchIcon.click();
        browser.sleep(8000);
        searchedMenu = content.allTab.getText().then(function (value) {
            console.log("Content searched under " + value + " tab.");
        })
        console.log("User is able to get the name of searched content in default ALL tab menu");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.QuestionSetImage1), 20000, "First search book not available");
        content.QuestionSetImage1.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });



        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetTitl1), 20000, "Valid Question Set Title Is not Added");
        expect(content.questionSetTitl1.isDisplayed()).toBeTruthy();
        console.log("Question Set Title Is  Valid");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.totalNoOfQuestions1), 20000, "Total No Of Question are Invalid");
        expect(content.totalNoOfQuestions1.isDisplayed()).toBeTruthy();
        console.log("Total No Of Question are Valid");


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.durationQuestionSet11), 20000, "Durations Of Question Sets are Invalid");
        expect(content.durationQuestionSet11.isDisplayed()).toBeTruthy();
        console.log("Durations Of Question Sets are Valid");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetInstruction1), 20000, "Instructions On Question Set Is Invalid");
        expect(content.questionSetInstruction1.isDisplayed()).toBeTruthy();
        console.log("Instructions On Question Set Is Valid");

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();
        browser.sleep(5000);

        content.selectAnswer1.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();

        expect(content.assertFeedback.isPresent()).toEqual(false);
        console.log("No Feedback For Selected Question");
        browser.sleep(4000);

        browser.sleep(10000);
        content.selectAnswer22.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();

        expect(content.assertFeedback.isPresent()).toEqual(false);
        console.log("No Feedback For Selected Question");
        browser.sleep(4000);

        expect(content.selSubjectiveAnswer3.isDisplayed()).toBeTruthy();
        console.log("Question3 Is Displayed As Subjective Type Question ");
        content.selSubjectiveAnswer3.click();

        expect(content.SubjectiveAns3.isDisplayed()).toBeTruthy();
        console.log("Answer For Question3 Is Displayed ");

        content.nextSlideIconStep1.click();
        browser.sleep(5000);
        browser.sleep(30000);
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetWarningTime), 20000, "Next Slide Option Is Not Available");
        expect(content.questionSetWarningTime.isDisplayed()).toBeTruthy();
        console.log("Warning Time Is Displayed On Question Set");
        content.selectAnswer3.click();


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.nextSlideIconStep1), 20000, "Next Slide Option Is Not Available");
        expect(content.nextSlideIconStep1.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.nextSlideIconStep1.click();

        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.contentFeedback), 20000, "Next Slide Option Is Not Available");
        expect(content.contentFeedback.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.contentFeedback.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitcontentFeedback), 20000, "Submit Button Is Not Available");
        expect(content.submitcontentFeedback.isDisplayed()).toBeTruthy();
        console.log("Submit Feedback Content Successfully");
        content.submitcontentFeedback.click();

        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        expect(content.userConsumedQuestionSet.isDisplayed()).toBeTruthy();
        console.log("Question Set Consumed and Completed With Score");



    }
    catch (Exception) {
        console.log("Failed to Consume Question Set with Warning Time");
    }

}


const ValidateAdditionalCategory = () => {
    try {

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookB" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);
        expect(sanityPage.SanityElement().assertAdditionalCategory.isPresent()).toBeTruthy();
        browser.sleep(3000);
        sanityPage.SanityElement().addCategoryInBook.click();
        browser.sleep(3000);
        sanityPage.SanityElement().sltLessonPlan.click();
        browser.sleep(3000);

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

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().attribution);
        browser.sleep(1000);
        var attributioninput = "bAttribution1,aAttribution2,dAttribution3,fAttribution4";
        sanityPage.SanityElement().attribution.sendKeys(attributioninput);
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
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
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);
        console.log("User successfully created a book with additional category");
        return bookname;

    } catch (err) {
        console.log(err);
    }
}

const navigateToQuestionSet = () => {

    try {
        console.log("search particular question set by Do_id ");
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '4');
        var do_id = cred[0]['Do_Id'];//"do_213347822834556928166";
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys(do_id);
        browser.sleep(2000);
        searchObj.searchIcon.click();
        console.log("Clicked on the searchIcon");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available");
        searchObj.courseCard.click();
        browser.sleep(4000);
        //browser.executeScript("arguments[0].scrollIntoView();", sanity.questionNextSlide);
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        content.zoomIn.click();

        //browser.wait(protractor.ExpectedCondition.visibilityof(sanity.questionNextSlide), 20000,"Slide is not visible");
        sanity.questionNextSlide.click();
        browser.sleep(2000);
        sanity.questionOption1.click();
        browser.sleep(200);
        sanity.questionNextSlide.click();
        browser.sleep(2000);
        expect(sanity.assertFeedbackAllert.isPresent()).toBeTruthy().then(function () {
            console.log("Show Feedback is ON");
        })
        sanity.questionNextSlide.click();
        browser.sleep(3000);
        sanity.questionOption4.click();
        browser.sleep(200);
        sanity.questionNextSlide.click();
        browser.sleep(5000);

        sanity.questionNextSlide.click();
        browser.sleep(2000);
        sanity.questionOption5.click();
        browser.sleep(2000);
        sanity.questionNextSlide.click();
        browser.sleep(5000);


        // expect(sanity.assertSubmitConfirmation.isPresent()).toBeTruthy();
        console.log("submit confirmation is YES")
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.sleep(1000);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(5000);
        // sanity.assert3.sendKeys(protractor.Key.TAB,protractor.Key.TAB,protractor.Key.ENTER);
        // browser.sleep(2000);
        // //sanity.assertSubmitConfirmation.sendKeys(protractor.Key.TAB)

        // sanity.assertSubmitConfirmation.click();
        // browser.sleep(5000);


        console.log("verified navigation to Course section, search particular question set Do_id");
    }
    catch (Err) {
        console.log("Failed on navigating to search question set " + Err);
    }
}


const verifyNegativeShowfeedbackAndSubmit = () => {

    try {
        console.log("search particular question set by Do_id ");
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '4');
        var do_id = cred[1]['Do_Id'];//"do_213347828756676608175";
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys(do_id);
        browser.sleep(2000);
        searchObj.searchIcon.click();
        console.log("Clicked on the searchIcon");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available");
        searchObj.courseCard.click();
        browser.sleep(4000);
        content.zoomIn.click();
        //browser.executeScript("arguments[0].scrollIntoView();", sanity.questionNextSlide);
        // browser.sleep(3000);
        // browser.executeScript('window.scrollTo(0,300);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });

        //browser.wait(protractor.ExpectedCondition.visibilityof(sanity.questionNextSlide), 20000,"Slide is not visible");
        sanity.questionNextSlide.click();
        browser.sleep(2000);
        sanity.questionOption1.click();
        browser.sleep(2000);

        sanity.questionNextSlide.click();
        expect(sanity.assertFeedbackAllert.isPresent()).toBe(false).then(function () {
            console.log("Show Feedback is OFF");
        })
        expect(sanity.asssertTryAgainFeedback.isPresent()).toBe(false);
        browser.sleep(2000);
        sanity.questionNextSlide.click();
        browser.sleep(1000);
        sanity.questionNextSlide.click();
        browser.sleep(4000);
        expect(sanity.assertSubmitConfirmation.isPresent()).toBeTruthy().then(function () {
            sanity.assertSubmitConfirmation.getText().then(function () {
                console.log(input + " confirmation is ON");
                sanity.assertSubmitConfirmation.click();
            })
        })
        console.log("verified navigation to Course section, search particular question set Do_id");
    }
    catch (Err) {
        console.log("Failed on navigating to search question set " + Err);
    }
}

const verifyImagelayoutWithNegativeFeedbackAndSubmit = () => {

    try {
        console.log("search particular question set by Do_id ");
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '4');
        var do_id = cred[2]['Do_Id'];//"do_2133470331565588481240";
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys(do_id);
        browser.sleep(2000);
        searchObj.searchIcon.click();
        console.log("Clicked on the searchIcon");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available");
        searchObj.courseCard.click();
        browser.sleep(4000);
        //browser.executeScript("arguments[0].scrollIntoView();", sanity.questionNextSlide);
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        content.zoomIn.click();
        sanity.questionNextSlide.click();
        browser.sleep(5000);
        expect(sanity.imageLayout1.isPresent()).toBe(true).then(function () {
            console.log("Image Layout 1 is validated");
            sanity.imageLayout1.click()
        })
        browser.sleep(2000);
        expect(sanity.imageLayout2.isPresent()).toBe(true).then(function () {
            console.log("Image Layout 2 is validated");
        })
        browser.sleep(2000);
        expect(sanity.imageLayout3.isPresent()).toBe(true).then(function () {
            console.log("Image Layout 3 is validated");
        })
        browser.sleep(1000);
        sanity.questionNextSlide.click();
        browser.sleep(100);
        expect(sanity.assertFeedbackAllert.isPresent()).toBe(false).then(function () {
            console.log("Show Feedback is OFF");
        })
        for (i = 1; i < 4; i++) {
            sanity.questionNextSlide.click();
            browser.sleep(1000);
        }
        expect(sanity.assertSubmitConfirmation.isPresent()).toBe(false).then(function () {
            console.log("Submit confirmation is OFF");
        })
        console.log("verified navigation to Course section, search particular question set Do_id");
    }
    catch (Err) {
        console.log("Failed on navigating to search question set " + Err);
    }
}

const validateSections = () => {
    try {
        console.log("search particular question set by Do_id ");
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '4');
        var do_id = cred[7]['Do_Id'];//"do_2133626885611847681229";
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys(do_id);
        browser.sleep(2000);
        searchObj.searchIcon.click();
        console.log("Clicked on the searchIcon");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available");
        searchObj.courseCard.click();
        browser.sleep(4000);
        //browser.executeScript("arguments[0].scrollIntoView();", sanity.questionNextSlide);
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        content.zoomIn.click();
        //browser.wait(protractor.ExpectedCondition.visibilityof(sanity.questionNextSlide), 20000,"Slide is not visible");
        sanity.questionNextSlide.click();
        browser.sleep(2000);

        expect(sanity.questionSections.isPresent()).toBeTruthy().then(function () {
            (sanity.questionSections).getText().then(function (input) {
                console.log(input + " is validated");
            })
        })
        browser.sleep(2000);
        for (i = 0; i < 6; i++) {
            sanity.questionNextSlide.click();
            browser.sleep(500);
        }
        browser.sleep(2000);
        expect(sanity.questionSections.isPresent()).toBeTruthy().then(function () {
            (sanity.questionSections).getText().then(function (input) {
                console.log(input + " is validated");
            })
        })
        browser.sleep(2000);

        for (i = 0; i < 6; i++) {
            sanity.questionNextSlide.click();
            browser.sleep(500);
        }
        browser.sleep(2000);
        // ratingFeedback();
        browser.sleep(2000);
        console.log("verified navigation to Course section, search particular question set Do_id");
    }
    catch (Err) {
        console.log("Failed on navigating to search question set " + Err);
    }
}

const ratingFeedback = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.contentFeedback), 20000, "Next Slide Option Is Not Available");
        expect(content.contentFeedback.isDisplayed()).toBeTruthy();
        console.log("Next Slide Option Is Available");
        content.contentFeedback.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.submitcontentFeedback), 20000, "Submit Button Is Not Available");
        expect(content.submitcontentFeedback.isDisplayed()).toBeTruthy();
        console.log("Submit Feedback Content Successfully");
        content.submitcontentFeedback.click();
    }
    catch (Err) {
        console.log("Failed on navigating to search question set " + Err);
    }
}


const validateDikshaIDforDifferentMUAuser = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.profileButton), 20000, "profile page not loaded");
        content.profileButton.click();
        browser.sleep(2000);

        sanity.dikshaId.getText().then(function (id) {
            console.log("Diksha Id is " + id);
        })
        browser.refresh();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.switchUser), 20000, "headerDropdown page not loaded");
        sanity.switchUser.click();
        browser.sleep(11000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.profileButton), 20000, "profile page not loaded");
        content.profileButton.click();
        browser.sleep(1000);

        sanity.dikshaId.getText().then(function (id) {
            console.log("Diksha Id is " + id);
        })
        browser.sleep(1000);
        browser.refresh();

    }
    catch (Err) {
        console.log("Failed to switch user and validate diksha id " + Err);
    }
}

const validateCreationOfContents = () => {
    try {

        console.log("Observe the UI in creation pages.");
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(4000);

        expect(sanity.assertBook.isPresent()).toBeTruthy();
        console.log("Book is Validated");
        expect(sanity.assertCourse.isPresent()).toBeTruthy();
        console.log("Course is Validated");
        expect(sanity.assertResource.isPresent()).toBeTruthy();
        console.log("Resource is Validated");
        expect(sanity.assertCollection.isPresent()).toBeTruthy();
        console.log("Collection is validated");
        expect(sanity.assertLessonPlan.isPresent()).toBeTruthy();
        console.log("Lesson plan is validated");
        expect(sanity.assertUpload.isPresent()).toBeTruthy();
        console.log("Upload is validated");
    }
    catch (Err) {
        console.log("Failed to observe the creation pages." + Err);
    }
}


const validateadminDashboard = () => {
    try {

        console.log("Observe the UI in Admin dashboard.");
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().adminDashBoard), 20000, "adminDashBoard Icon not available");
        expect(sanity.adminDashBoard.isPresent()).toBeTruthy();
        sanityPage.SanityElement().adminDashBoard.click();
        browser.sleep(4000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        expect(sanity.footer.isPresent()).toBeTruthy();
        sanityPage.SanityElement().footer.getText().then(function (input) {
            console.log("Footer is : " + "[" + input + "]")
        })
    }
    catch (Err) {
        console.log("Failed to observe the creation pages." + Err);
    }
}


const verifyLiscenceFilterInBook = () => {
    try {

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookB" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
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
        expect(sanityPage.SanityElement().liscenceFilter.isPresent()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().liscenceFilter), 20000, "liscence filter not present");
        sanityPage.SanityElement().liscenceFilter.getText().then(function (filters) {
            console.log("Liscence filters are" + filters);
            browser.sleep(1000);
            sanityPage.SanityElement().liscenceFilter.click();
        })
        browser.sleep(3000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
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
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(4000);
        console.log("User successfully created a collection");
        return bookname;

    } catch (err) {
        console.log(err);
    }
}
const validateLiscenceFilterInReviewerSection = () => {
    try {

        console.log("validate Liscence filters.");
        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().assertlicense);
        browser.sleep(1000);
        expect(sanityPage.SanityElement().assertlicense.isPresent()).toBeTruthy().then(function () {
            console.log("Liscece is validated")
        })
        expect(sanityPage.SanityElement().liscenceFilter.isPresent()).toBeTruthy().then(function () {
            console.log("Liscece filter is validated.");
            sanityPage.SanityElement().liscenceFilter.getText().then(function (liscence) {
                console.log("Selected liscece in reviewer side is " + liscence);

            })
        })
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        });
        browser.sleep(2000);
    }
    catch (Err) {
        console.log("Failed to validate liscence filter." + Err);
    }
}
const publishCourseFromUpForReviewAndValidateLiscence = (coursename) => {
    try {


        browser.sleep(1000);
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
        content.searchForReview.sendKeys(coursename);
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
        content.searchedContentForPublish.click();
        browser.sleep(8000);
        for (i = 1; i > 0; i++) {
            tpdPage.tpdPage().publishTheCourse.isPresent().then(function (result) {
                if (result === true) {
                    validateLiscenceFilterInReviewerSection();
                    tpdPage.tpdPage().publishTheCourse.click();
                    browser.sleep(4000);
                    content.clkcheckBoxPublising.isPresent().then(function (result) {
                        if (result === true) {
                            content.clickFirstChekcBox.click();
                            browser.sleep(5000);
                            content.clkcheckBoxPublising.each(function (input) {
                                browser.sleep(200);
                                input.click()
                            });
                            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
                            tpdPage.tpdPage().confirmForPublishBook.click();
                            browser.sleep(6000);
                        } else {
                            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
                            tpdPage.tpdPage().confirmForPublishBook.click();
                            browser.sleep(6000);
                        }
                    })

                } else {

                    browser.refresh();
                    browser.sleep(6000);
                }
            });
            break;
        }
    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }
}

const validateCourseCategory = () => {
    var courseName;
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(100);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();

        courseName = "courseC" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);

        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        searchObj.categoryCourse.click();
        searchObj.categoryCourse.getText().then(function (input) {
            console.log(input + "is validated inside course category")
        })
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(2000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(2000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(2000);

        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(2000);
        sanityPage.SanityElement().selectcourseType.click();
        browser.sleep(2000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(2000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().selectBoardForcourse.click();
        browser.sleep(2000);

        sanityPage.SanityElement().selectBoard.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
            sanityPage.SanityElement().selectMediumForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectMedium.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
            sanityPage.SanityElement().selectClassForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectclass.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
            sanityPage.SanityElement().selectSubjectForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectSubject2.click();
        browser.sleep(2000);
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(300);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(300);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc1.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(5000);
        // sanityPage.SanityElement().clkContent.click();
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(4000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(300);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(9000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");

    } catch (err) {
        console.log(err);
    }
    return courseName;
}

const validateQrcodeWarningMessageInBook = (corseNames) => {
    try {

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookB" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(8000);

        browser.executeScript("arguments[0].scrollIntoView();", ccpage.contentCreation().qrCodeRequred);
        ccpage.contentCreation().qrCodeRequred.click();

        browser.executeScript('window.scrollTo(0,800);').then(function () {
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

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().attribution);
        browser.sleep(1000);
        var attributioninput = "bAttribution1,aAttribution2,dAttribution3,fAttribution4";
        sanityPage.SanityElement().attribution.sendKeys(attributioninput);
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
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
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        // sanityPage.SanityElement().termsAndConditionCheckbox.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().NewCoursesubmitButton.click();
        // browser.sleep(4000);
        var warningmsg = sanityPage.SanityElement().contenttoasterMsg.getText();
        warningmsg.getText().then(function (input) {
            console.log("Warning meassage is " + "[" + input + "]");
        })
        console.log("User successfully created a collection");
        return bookname;
    }
    catch (err) {
        console.log(err);
    }
}

const verifyExploreLabel = () => {
    try {
        console.log("Navigating to browse by categories in home tab.")
        browser.sleep(3000);
        wait.waitForElementVisibility(content.clkHomeTab, 20000);
        content.clkHomeTab.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(3000);
        wait.waitForElementVisibility(sanity.browseByCategories, 20000);
        sanity.browseByCategories.click();
        browser.sleep(3000);
        sanity.explorelabel.getText().then(function (input) {
            expect((input).includes("Explore"));
            console.log(input + " label is validated.");
        })
        browser.sleep(2000);
        wait.waitForElementVisibility(sanity.backButton, 20000);
        sanity.backButton.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(sanity.browseBySubjects, 20000);
        sanity.browseBySubjects.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanity.explorelabel.getText().then(function (input) {
            expect((input).includes("Explore"));
            console.log(input + " label is validated.");
        })
    }
    catch (Exception) {
        console.log("Explore label not found");
    }
}

const createCourseAndSendForReviewWithResourceForPostSync = () => {
    var courseName;
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(100);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();

        courseName = "CourseC" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);

        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(2000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(2000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(2000);

        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(2000);
        sanityPage.SanityElement().selectcourseType.click();
        browser.sleep(2000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(2000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().selectBoardForcourse.click();
        browser.sleep(2000);

        sanityPage.SanityElement().selectBoard.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
            sanityPage.SanityElement().selectMediumForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectMedium.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
            sanityPage.SanityElement().selectClassForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectclass.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
            sanityPage.SanityElement().selectSubjectForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectSubject2.click();
        browser.sleep(2000);
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(300);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(300);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc1.sendKeys("CdildDesc");
        browser.sleep(3000);

        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(5000);

        sanityPage.SanityElement().searchContentFromLibrary.sendKeys("Bulk_941");
        browser.sleep(6000);

        sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);
        browser.sleep(6000);

        sanityPage.SanityElement().selectButton.click();
        browser.sleep(4000);

        sanityPage.SanityElement().addContent.click();
        browser.sleep(4000);

        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);

        // browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        // sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(300);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(9000);
        // sanityPage.SanityElement().termsAndConditionCheckbox.click();
        // browser.sleep(3000);
        // sanityPage.SanityElement().NewCoursesubmitButton.click();
        // browser.sleep(4000);
        // var warningmsg = sanityPage.SanityElement().contenttoasterMsg.getText();
        // warningmsg.getText().then(function(input){
        //     console.log("Warning meassage is "+"["+ input+"]");
        // })
        // console.log("User successfully created a collection");
        // return bookname;
    }
    catch (err) {
        console.log(err);
    }
    return courseName;
}

const createCourseAndSendForReviewWithResource = () => {
    var courseName;
    try {
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(100);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();

        courseName = "CourseC" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);

        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().courseadditionalCategory.click();
        browser.sleep(2000);
        sanityPage.SanityElement().selectAdditionalCategory.click();
        browser.sleep(2000);
        sanityPage.SanityElement().courseType.click();
        browser.sleep(2000);

        expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        browser.sleep(2000);
        sanityPage.SanityElement().selectcourseType.click();
        browser.sleep(2000);
        sanityPage.SanityElement().subjectCovered.click();
        browser.sleep(2000);
        sanityPage.SanityElement().selectSubject.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        sanityPage.SanityElement().selectBoardForcourse.click();
        browser.sleep(2000);

        sanityPage.SanityElement().selectBoard.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
            sanityPage.SanityElement().selectMediumForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectMedium.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
            sanityPage.SanityElement().selectClassForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectclass.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
            sanityPage.SanityElement().selectSubjectForCourse.click();
            browser.sleep(2000);
        })
        sanityPage.SanityElement().selectSubject2.click();
        browser.sleep(2000);
        sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        browser.sleep(300);
        sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        browser.sleep(300);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc1.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(5000);

        sanityPage.SanityElement().searchContentFromLibrary.sendKeys("Bulk_950");
        browser.sleep(3000);

        sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);
        browser.sleep(3000);

        browser.sleep(3000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);

        // sanityPage.SanityElement().clkContent.click();
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
        // sanityPage.SanityElement().selectButton.click();
        // browser.sleep(4000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
        // sanityPage.SanityElement().addContent.click();
        browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(300);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(9000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");

    } catch (err) {
        console.log(err);
    }
    return courseName;
}


const verifyHandleLocationPopup = () => {
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
        var state = content.assertselectedstate.getText();
        state.then(function (stateInput) {
            console.log("State selected in BMC popup: " + stateInput);
        })
        browser.sleep(2000);
        wait.waitForElementVisibility(content.district, 20000);
        content.district.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.selectDistrict, 20000);
        content.selectDistrict.click();
        browser.sleep(2000);
        var district = content.assertselectedDistrict.getText();
        district.then(function (districtInput) {
            console.log("District selected in BMC popup: " + districtInput);
        })
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", content.submitForm);
        wait.waitForElementVisibility(content.submitForm, 20000);
        content.submitForm.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.profileButton), 20000, "profile page not loaded");
        content.profileButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.assertProfileDistrict), 20000, "profile page not loaded");
        content.assertProfileDistrict.getText().then(function (profileDistrict) {
            expect((profileDistrict).includes("Anantapur"));
            console.log("District in Profile is = " + profileDistrict);
        })
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.assertProfileState), 20000, "profile page not loaded");
        content.assertProfileState.getText().then(function (profileState) {
            expect((profileState).includes("Andhra Pradesh"));
            console.log("State in Profile is = " + profileState);
        })


    } catch (err) {
        console.error("Failed to handle location pop up, " + err);
    }
}

const verifyUserAbletosearchContentFromProfilepage = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.profileButton), 20000, "profile page not loaded");
        content.profileButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchBar), 20000, "profile page not loaded");
        content.searchBar.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchBar), 20000, "profile page not loaded");
        content.searchBar.sendKeys("Course");
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchBarIcon), 20000, "profile page not loaded");
        content.searchBarIcon.click();
        browser.sleep(4000);
        content.searchedContentType.getText().then(function (content) {
            console.log(content + " content type is searched.")
        })
    } catch (err) {
        console.error("Failed to handle location pop up, " + err);
    }
}

const validateburgerMenuInHelpPage = () => {
    try {
        console.error("validate help centre burger menu in help page");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.profileHelpButton), 20000, "headerDropdown page not loaded");
        content.profileHelpButton.click();
        browser.sleep(1000);
        expect((content.faqburgermenu).isPresent()).toBe(true);
        console.log("Help centre burger menu is present in help page.");
    } catch (err) {
        console.error("failed");
    }
}


const verifyBMCpopupIsNotPresentInEachTab = () => {
    try {
        console.error("validate BMC pop is not present in every tab");
        browser.sleep(1000);
        expect((content.assertBmcPopUp).isPresent()).toBe(false);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.exploretab), 20000, "explore tab page not loaded");
        content.exploretab.click();
        browser.sleep(500);
        expect((content.assertBmcPopUp).isPresent()).toBe(false);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.digitalTextbookTab), 20000, "digitalTextbook page not loaded");
        content.digitalTextbookTab.click();
        browser.sleep(500);
        expect((content.assertBmcPopUp).isPresent()).toBe(false);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.tvclassTab), 20000, "digitalTextbook page not loaded");
        content.tvclassTab.click();
        browser.sleep(500);
        expect((content.assertBmcPopUp).isPresent()).toBe(false);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.alltab), 20000, "digitalTextbook page not loaded");
        content.alltab.click();
        browser.sleep(1000);
        browser.refresh();
        browser.sleep(1000);
        expect((content.assertBmcPopUp).isPresent()).toBe(false);
        browser.sleep(2000);


    } catch (err) {
        console.error("BMC pop is present in every tab, " + err);
    }
}

const downloadTocInCSVFormat = () => {
    try {

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbpage.etb().book.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000, "Book page not loaded");
        bookname = "BookB" + faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(8000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
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

        browser.executeScript("arguments[0].scrollIntoView();", sanityPage.SanityElement().attribution);
        browser.sleep(1000);
        var attributioninput = "bAttribution1,aAttribution2,dAttribution3,fAttribution4";
        sanityPage.SanityElement().attribution.sendKeys(attributioninput);
        browser.sleep(3000);

        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(5000);

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
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
        browser.sleep(3000);

        sanityPage.SanityElement().clkMenuBook.click();
        browser.sleep(3000);

        sanityPage.SanityElement().clkMenuBookDownloadCSV.click();
        browser.sleep(4000);


    } catch (err) {
        console.log(err);
    }
}

const validateUserSearchByAdminInProfilePage = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.profileButton), 20000, "profile page not loaded");
        content.profileButton.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchBar), 20000, "search bar page not loaded");
        content.searchBar.sendKeys("user");
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchButtonInProfPage), 20000, "search button page not loaded");
        content.searchButtonInProfPage.click();
        browser.sleep(8000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.resetButton), 20000, "reset button page not loaded");
        sanity.resetButton.click();
        browser.sleep(8000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.searchedUseredit), 20000, "edit button page not loaded");
        sanity.searchedUseredit.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.closeicon), 20000, "close icon not loaded");
        sanity.closeicon.click();
        browser.sleep(4000);
        // browser.executeScript('window.scrollTo(0,2000);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        browser.sleep(4000);
        // browser.executeScript('window.scrollTo(2000,3000);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        // browser.executeScript("arguments[0].scrollIntoView();", sanity.nextbutton);
        // browser.sleep(4000);
        // for (i = 0; i < 2; i++) {
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.nextbutton), 20000, "next button not loaded");
        //     sanity.nextbutton.click();
        //     browser.sleep(4000);
        // }
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.previousButton), 20000, "previousbutton not loaded");
        // sanity.previousButton.click();
        // browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstButton), 20000, "first button not loaded");
        // sanity.firstButton.click();
        // browser.sleep(4000);

    } catch (err) {
        console.error("Failed to handle location pop up, " + err);
    }
}

const observeChangingThePreferences = () => {
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(content.clkHomeTab, 20000);
        content.clkHomeTab.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.changePreference, 20000);
        content.changePreference.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.boardDropdown, 30000);
        content.boardDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.boardValueSelection, 30000);
        content.boardValueSelection.click();
        browser.sleep(6000);
        wait.waitForElementVisibility(content.mediumDropdown, 30000);
        content.mediumDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.selectMediumValue, 30000);
        content.selectMediumValue.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(content.gradeLevelDropDown, 30000);
        content.gradeLevelDropDown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.selectGradeLevelValue, 30000);
        content.selectGradeLevelValue.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.submitButtonForDropdowns, 30000);
        content.submitButtonForDropdowns.click();
        browser.sleep(20000);
    }
    catch (Exception) {
        console.log("hometab not found");
    }
}

const changeDifferentRolesAndValidateObservatioTab = () => {
    try {
        console.log('Verify Guest user able to validate observation tab');
        browser.sleep(5000);
        expect(sanity.observationTab.isPresent()).toBeTruthy().then(function (input) {
            if (input === true) {
                browser.sleep(5000);
                wait.waitForElementVisibility(content.headerDropdown, 20000);
                content.headerDropdown.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.profileButton, 20000);
                content.profileButton.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(sanity.editpersonaldetails, 20000);
                sanity.editpersonaldetails.click();
                browser.sleep(4000);
                wait.waitForElementVisibility(sanity.roleDropDown, 20000);
                sanity.roleDropDown.click();
                browser.sleep(4000);
                wait.waitForElementVisibility(sanity.studentRole, 20000);
                sanity.studentRole.click();
                browser.sleep(4000);
                wait.waitForElementVisibility(content.btnSubmit, 20000);
                content.btnSubmit.click();
                browser.sleep(5000);
                sanity.profileRole.getText().then(function (input) {
                    expect(input).includes("School head OR Officials");
                    browser.sleep(3000);
                    browser.executeScript('window.scrollTo(0,0);').then(function () {
                        console.log('++++++SCROLLED UP+++++');
                    });
                    browser.sleep(2000);
                    wait.waitForElementVisibility(sanity.backArrowButton, 20000);
                    sanity.backArrowButton.click();
                    browser.sleep(5000);
                    (content.observationTab.isPresent()).toBe(false);
                    console.log("Observation Tab is not present");
                    browser.sleep(5000);
                })
            } else {

                wait.waitForElementVisibility(content.headerDropdown, 20000);
                content.headerDropdown.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(content.profileButton, 20000);
                content.profileButton.click();
                browser.sleep(3000);
                wait.waitForElementVisibility(sanity.editpersonaldetails, 20000);
                sanity.editpersonaldetails.click();
                browser.sleep(4000);
                wait.waitForElementVisibility(sanity.roleDropDown, 20000);
                sanity.roleDropDown.click();
                browser.sleep(4000);
                wait.waitForElementVisibility(sanity.sho, 20000);
                sanity.sho.click();
                browser.sleep(6000);
                browser.executeScript("arguments[0].scrollIntoView();", content.btnSubmit);
                wait.waitForElementVisibility(content.btnSubmit, 20000);
                content.btnSubmit.click();
                browser.sleep(5000);
                browser.executeScript('window.scrollTo(0,0);').then(function () {
                    console.log('++++++SCROLLED UP+++++');
                });
                sanity.profileRole.getText().then(function (input) {
                    expect((input).includes("School head OR Officials"));
                })
                browser.sleep(4000);
                wait.waitForElementVisibility(sanity.backArrowButton, 20000);
                sanity.backArrowButton.click();
                expect(sanity.observationTab.isPresent()).toBeTruthy();
             }
        })
    }    
    catch (Exception) {
            console.log("Edit failed");
        }
    }

    const createCourseAndSendForReviewWithMeritCourse = () => {
        var courseName;
        try {
            console.log("user is trying to create a course")
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
            content.headerDropdown.click();
            browser.sleep(100);
            browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
            content.workSpace.click();
            browser.sleep(200);
            browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
            content.course.click();
            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
            sanity.addCourseTitle.click();
            sanity.addCourseTitle.clear();
    
            courseName = "CourseC" + faker.randomData().firstname;
            sanity.addCourseTitle.sendKeys(courseName);
    
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });
            sanityPage.SanityElement().courseadditionalCategory.click();
            browser.sleep(2000);
            sanityPage.SanityElement().selectAdditionalCategory.click();
            browser.sleep(2000);
            sanityPage.SanityElement().courseType.click();
            browser.sleep(2000);
    
            expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
            browser.sleep(2000);
            sanityPage.SanityElement().selectcourseType.click();
            browser.sleep(2000);
            sanityPage.SanityElement().subjectCovered.click();
            browser.sleep(2000);
            sanityPage.SanityElement().selectSubject.click();
            browser.sleep(2000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });
            sanityPage.SanityElement().selectBoardForcourse.click();
            browser.sleep(2000);
    
            sanityPage.SanityElement().selectBoard.click();
            browser.sleep(2000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().selectMediumForCourse.click();
                browser.sleep(2000);
            })
            sanityPage.SanityElement().selectMedium.click();
            browser.sleep(2000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
                sanityPage.SanityElement().selectClassForCourse.click();
                browser.sleep(2000);
            })
            sanityPage.SanityElement().selectclass.click();
            browser.sleep(2000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
                sanityPage.SanityElement().selectSubjectForCourse.click();
                browser.sleep(2000);
            })
            sanityPage.SanityElement().selectSubject2.click();
            browser.sleep(2000);
            sanityPage.SanityElement().Author.sendKeys("EKSTEP");
            browser.sleep(300);
            sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
            browser.sleep(300);
    
            sanityPage.SanityElement().saveAsDraft.click();
            browser.sleep(5000);
    
    
            sanityPage.SanityElement().addChild.click();
            browser.sleep(3000);
    
            sanityPage.SanityElement().childDesc1.sendKeys("CdildDesc");
            browser.sleep(3000);
    
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
            sanityPage.SanityElement().addFromLibraryButton.click();
            browser.sleep(5000);
    
            sanityPage.SanityElement().searchContentFromLibrary.sendKeys("CourseAssessSonia");
            browser.sleep(3000);
    
            sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);
            browser.sleep(3000);
    
            browser.sleep(3000);
            sanityPage.SanityElement().selectButton.click();
            browser.sleep(3000);
            sanityPage.SanityElement().addContent.click();
            browser.sleep(3000);
    
            // sanityPage.SanityElement().clkContent.click();
            // browser.sleep(2000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
            // sanityPage.SanityElement().selectButton.click();
            // browser.sleep(4000);
            //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
            // sanityPage.SanityElement().addContent.click();
            browser.sleep(4000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
            sanityPage.SanityElement().contentFromLibrayBackButton.click();
            browser.sleep(4000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
            sanityPage.SanityElement().submitForreviewButton.click();
            browser.sleep(2000);
            sanityPage.SanityElement().termsAndConditionCheckbox.click();
            browser.sleep(300);
            //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
            sanityPage.SanityElement().NewCoursesubmitButton.click();
            browser.sleep(9000);
            //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");
    
        } catch (err) {
            console.log(err);
        }
        return courseName;
    }
    





module.exports = {

        verifyViewAllButton,
        createCourseAndSendForReview,
        veriyMaximumAttempts,
        addCollboratortoDraftAndSaveBook,
        verifyTOC,
        verifyTenantLogo,
        searchQRCode,
        exploreDifferentTenantName,
        bookOptionValdidation,
        generateAndDownlaodQrCode,
        addmoreUnitInBook,
        generateQRCodes,
        previeAllMyContent,
        downloadQRCode,
        tocDownload,
        openBookFromDraftAndDownloadQRCode,
        copyContentFromLib,
        searchQRCodeInGetPage,
        VerifyTocWitSubUnits,
        uploadCSVFile,
        UpdateTocAndUpload,
        copyContentFromTraining,
        uploadParticularFile,
        verifyTNTenantLogo,
        clkViewAllInCourseTab,
        courseSearchInExploreCourse,
        signWithGoogle,
        GoogleAfterLogin,
        verifydefaultValues,
        searchQRCodeInGet,
        FillBmesWhileCreatingBook,
        verifyCreateMyGroupAddMember,
        copyBookAsCourse,
        declaredUsersCsvFileDownload,
        creatorIsAbleToCopyTheBook,
        verifySearchBookInLibraryPage,
        addCollboratortoLiveAndSaveBook,
        verifyBestScore,
        verifyDiscussionForum,
        verifyEnableAndDisableDiscussionForGroup,
        verifyCloseIconInEnableAndDisableDiscussionForGroup,
        editAndDelteTopic,
        verifyEnableAndDisableDiscussionForGroup2,
        updateDiscussionForumPost,
        verifyIGOTpage,
        verifyFilterscreatingBook,
        verifyEnableAndDisableDiscussionForGroup3,
        createCourseForFramework,
        TargetFrameworkWithMultipleCategoricalValues,
        TargetFrameworkIsMandatory,
        createCourseForFrameworkWithTopicAndSubject,
        createBook,
        sendCopiedBookForReview,
        TVClassSearch,
        CreateCourseAndSaveAsDraft,
        createCourseWithRegionalLanguage,
        CreateCourseAndSaveAsDraft1,
        verifyAttributionOrder,
        changeToDarkTheme,
        observationTabVerify,
        generateQRCodeswithYesButton,
        downloadQRCode2,
        dowloadSampleCSV,
        createBookWithAllResourceType,
        generateQRCodeswithYesButtonFromDraft,
        removeCollboratortoDraftAndSaveBook,
        createBookSaveAsDraft,
        addCollborator,
        addCollboratortoDraftAndSaveBookWithWorkspace,
        createCourseAndSavetoDraft,
        createCourseAndSaveAsDraftWithChild,
        verifyDisclaimerTextInCourse,
        validateMetadataValues,
        validateMetadataInReviewerSection,
        searchContentInTabs,
        publishCourseFromUpForReviewAndValidateMetadata,
        courseMetadataValidation,
        validateProfileDetails,
        recoveryOptionInProfileDetails,
        createBookWithRegionalLanguage,
        verifyLocationDetails,
        verifyHomeTab,
        recoveryDetailsVerification,
        validateGroupCreation,
        creatorReviewComments,
        createBookwithRegionalLanguage,
        groupValidation,
        removeCollboratortoDraftAndSaveBookForCourse,
        activateDeactivateGroup,
        addCollboratortoAllMyContentAndSaveBook,
        FillBmesWhileCreatingBook3,
        verifyQRCodeAtBookLevelAndUnitLevel,
        UpdatePublished,
        validatedViewCollaborator,
        checkForCourseFramework,
        ValidateAdditionalCategory,
        navigateToQuestionSet,
        verifyNegativeShowfeedbackAndSubmit,
        verifyImagelayoutWithNegativeFeedbackAndSubmit,
        validateSections,
        ratingFeedback,
        AddResourceAndCollectionWhileCreatingBook,
        SearchWithDoIdForSummeryTypeAsComplete,
        SearchWithDoIdForSummeryTypeAsScore,
        SearchWithDoIdForSummeryTypeAsDuration,
        verifyFeedbackYesShowSolutionYesSubmitYes,
        verifyTestModewithMaximumNoOfAttempts,
        verifyWarningTimeOnQuestionSet,
        validateDikshaIDforDifferentMUAuser,
        validateCreationOfContents,
        validateadminDashboard,
        verifyLiscenceFilterInBook,
        validateLiscenceFilterInReviewerSection,
        publishCourseFromUpForReviewAndValidateLiscence,
        validateCourseCategory,
        validateQrcodeWarningMessageInBook,
        verifyExploreLabel,
        createCourseAndSendForReviewWithResourceForPostSync,
        createCourseAndSendForReviewWithResource,
        verifyHandleLocationPopup,
        verifyUserAbletosearchContentFromProfilepage,
        verifyBMCpopupIsNotPresentInEachTab,
        validateburgerMenuInHelpPage,
        downloadTocInCSVFormat,
        validateUserSearchByAdminInProfilePage,
        observeChangingThePreferences,
        changeDifferentRolesAndValidateObservatioTab,
        createCourseAndSendForReviewWithMeritCourse,
    }