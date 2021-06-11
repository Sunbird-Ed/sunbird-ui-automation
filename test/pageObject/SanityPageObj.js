const { browser } = require('protractor');

const sanityPage= require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
const wait = require(protractor.basePath + '/helper/waiters.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const etbpage = require(protractor.basePath + '/test/pages/etb/etb.po.js');
var etbv=etbpage.etb();
var content=ccpage.contentCreation();
const genericFun= require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath=require(protractor.basePath + '/test/pathFolder/changePath.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var driver=browser.driver;
var frme=by.tagName('iframe');
var san = sanityPage.SanityElement();
var sanity = sanityPage.SanityElement();
const tpdPage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
var searchObj=tpdPage.tpdPage();


const verifySearchBookInLibraryPage=()=>{
    try{
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
    catch(err)
{
   console.log(err);
}
}
const addCollboratortoDraftAndSaveBook=()=>{
try{
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().profileIcon), 20000, "Profile Icon not available");
    sanityPage.SanityElement().profileIcon.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
    sanityPage.SanityElement().workspaceButton.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().draftButton), 20000, "draft Icon not available");
    sanityPage.SanityElement().draftButton.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().bookSeaarchBox), 20000, "search book  not available");
    sanityPage.SanityElement().bookSeaarchBox.sendKeys('BookA');
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchedFirstBook), 20000, "First search book not available");
    sanityPage.SanityElement().searchedFirstBook.click();
    browser.sleep(4000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    if(searchObj.collaboratorIcon.isDisplayed())
    {          
     console.log("Collaborator icon is present");
    }
    browser.sleep(1000);
    searchObj.collaboratorIcon.click();
    console.log("User should be able to click on collaborator icon");
    browser.sleep(5000);
    searchObj.searchCollaboratorField.click();
    browser.sleep(2000);
    searchObj.addCollaboratorButton.click();
    browser.sleep(2000);
    searchObj.addCollaboratorDoneButton.click();
    browser.sleep(2000);
    // searchObj.searchCollaboratorField.sendKeys("Mentor");
    // browser.sleep(2000);
    // searchObj.suggestionCollaboratorList1.click();
    // browser.sleep(1500);
    // searchObj.searchCollaboratorField.clear();
    // searchObj.searchCollaboratorField.click();
    // searchObj.searchCollaboratorField.sendKeys("suborg_mentor_sun 2");
    // browser.sleep(3000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestionCollaboratorList2), 20000, "suggestionCollaboratorList2 not loaded");
    // searchObj.suggestionCollaboratorList2.click();
    // browser.sleep(2000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.donebutton1), 20000, "donebutton1 not loaded");
    // searchObj.donebutton1.click();
    // browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.save), 20000, "save not loaded");
    searchObj.save.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().closeIcon), 20000, "Close Icon is not available");
    sanityPage.SanityElement().closeIcon.click();
    browser.sleep(4000);



}catch(err){
    console.log(err);
}
}
const addCollboratortoLiveAndSaveBook=()=>{
    try{
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
        if(searchObj.collaboratorIcon.isDisplayed())
        {          
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
        
    
    
    }catch(err){
        console.log(err);
    }
    }
    const verifyBestScore=()=>{
        try{
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
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickOnassesment), 20000, "assessment not available");
            // sanityPage.SanityElement().clickOnassesment.click();
            // browser.sleep(5000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
            // sanityPage.SanityElement().firststquestion.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
            // sanityPage.SanityElement().firststquestion.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
            // sanityPage.SanityElement().firststquestion.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
            // sanityPage.SanityElement().firststquestion.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
            // sanityPage.SanityElement().firststquestion.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
            // sanityPage.SanityElement().firststquestion.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
            // sanityPage.SanityElement().firststquestion.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
            // sanityPage.SanityElement().firststquestion.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firststquestion), 20000, "first option not available");
            // sanityPage.SanityElement().firststquestion.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firstBlanks), 20000, "first option not available");
            // sanityPage.SanityElement().firstBlanks.sendKeys('one');
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().secondBlanks), 20000, "first option not available");
            // sanityPage.SanityElement().secondBlanks.sendKeys('only');
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().nextButton), 20000, "next button not available");
            // sanityPage.SanityElement().nextButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButtonAfterAssessment), 20000, "submit button not available");
            // sanityPage.SanityElement().submitButtonAfterAssessment.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().firsstStar), 20000, "first star button not available");
            // sanityPage.SanityElement().firsstStar.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButtonAfterRating), 20000, "submit button not available");
            // sanityPage.SanityElement().submitButtonAfterRating.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().baackButton), 20000, "back button not available");
            // sanityPage.SanityElement().baackButton.click();
            // browser.sleep(3000);
            // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clickOnUnit), 20000, "unit 3 not available");
            // sanityPage.SanityElement().clickOnUnit.click();
            // browser.sleep(3000)
            expect(sanityPage.SanityElement().bestScore.isPresent()).toBeTruthy();

        }catch(err){
            console.log(err);
        }
        }
        const veriyMaximumAttempts=()=>{
            try{
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

            }catch(err){
                console.log(err)
            }
        }
const verifyDiscussionForum=()=>{
    try{
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().searchBoxForBook), 20000, "Serchbox for QR code  is not available");
        sanityPage.SanityElement().searchBoxForBook.sendKeys('do_213224457562038272157');
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
        expect(sanityPage.SanityElement().announcement.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().generalDiscussion.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().announcement), 20000, "announcement is not available");
        sanityPage.SanityElement().announcement.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().announcementLink), 20000, "announcementLinkis not available");
        sanityPage.SanityElement().announcementLink.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().textareaForComment), 20000, "textareaForComment is not available");
        sanityPage.SanityElement().textareaForComment.sendKeys("This is for adding comment");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().postReply), 20000, "postReply is not available");
        sanityPage.SanityElement().postReply.click();
        browser.sleep(3000);
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

        expect(sanityPage.SanityElement().tags.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().myDiscussions.isDisplayed()).toBeTruthy();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().myDiscussions), 20000, "my discussion is not available");
        sanityPage.SanityElement().myDiscussions.click();
        browser.sleep(2000);
        expect(sanityPage.SanityElement().recentPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().bestPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().savedPost.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().upvoted.isDisplayed()).toBeTruthy();
        expect(sanityPage.SanityElement().downVoted.isDisplayed()).toBeTruthy();
    }catch(err){
        console.log(err)
    }
}        
    


const verifyViewAllButton=()=>{

    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().verifyClassSec), 20000, "Class Section is not available");
    expect(sanityPage.SanityElement().verifyClassSec.getText()).toEqual('Class 2');
 console.log('Class section displayed Succesfully');
}


const verifyTOC=(contentType)=>{
try
{
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
catch(err)
{
   console.log(err);
}
}

const verifyTenantLogo=()=>{
    try
    {
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertTenantLogo), 20000, "Specific Logo is not available");

     expect(sanityPage.SanityElement().assertTenantLogo.getAttribute('alt')).toEqual('APeKX');

    console.log('Verified Tenant Specified Logo Succesfully ');
    }
catch(err)
{
   console.log(err);
}
}

const searchQRCode=()=>{
try{
    var sheetPath=getExcelPath.ConfigurePath().excelSheetPath;
    var cred= genericFun.readParticularDataFromExcelFile(sheetPath,'3');
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkEnterQRCode), 20000, "Enter QR Code is not available");
    sanityPage.SanityElement().clkEnterQRCode.click();
    sanityPage.SanityElement().enterQrcode.sendKeys(cred[18]['Title']);
    sanityPage.SanityElement().submitQrcode.click();
    browser.sleep(2000);
    sanityPage.SanityElement().clkLinkedContent.click();

    console.log('Verified Linked Content Succsfully');
}
catch(err)
{
   console.log(err);
}
}
const exploreDifferentTenantName=()=>{
try{
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkExploreContentAP), 20000, "Explore Content  is not available");
    sanityPage.SanityElement().clkExploreContentAP.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().verifyClassSec), 20000, "Class Section is not available");
    sanityPage.SanityElement().verifyClassSec.getText().then(function(input){
        var status = input.includes("Class")
        expect(status).toEqual(true);
        console.log("expected page is verified");
    });
  

    console.log('Different Tenant Explored Succesfully ');
}
catch(err)
{
   console.error(err);
}
}
const bookOptionValdidation=()=>{
try{
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "Workspace  is not available");
    content.workSpace.click();

    expect(sanityPage.SanityElement().verifyBookOption.isDisplayed()).toBeTruthy();

    console.log('Book Option displayed for Book Creator Role');
}
catch(err)
{
   console.log(err);
}
}
const addmoreUnitInBook=()=>{

    try{
    console.log("User is trying to create book")
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
    ccpage.contentCreation().workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
    etbpage.etb().book.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");
   
    bookname= "BookA"+faker.randomData().firstname;
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
    sanityPage.SanityElement().qrCodeYes.click();
browser.sleep(1000);
sanityPage.SanityElement().saveButton.click();
browser.sleep(1000);
for (i = 0; i <=1; i++) {
    sanityPage.SanityElement().clickSibling.click();
    sanityPage.SanityElement().UnitName.clear();
    sanityPage.SanityElement().UnitName.sendKeys(faker.randomData().firstname);
    sanityPage.SanityElement().qrCodeYes.click();
    browser.sleep(1000);
    sanityPage.SanityElement().saveButton.click();
  }
    }catch(err)
    {
       console.log(err);
    }
 }
 const generateQRCodes=()=>{
try{
    console.log("User is trying to create book")
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
    ccpage.contentCreation().workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
    etbpage.etb().book.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");
  
    bookname= "BookA"+faker.randomData().firstname;
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
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().UnitName), 20000, "UnitName not available");
    sanityPage.SanityElement().UnitName.sendKeys(faker.randomData().firstname);
    browser.sleep(2000);
    sanityPage.SanityElement().saveButton.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkDropDownQrcode), 20000, "clkDropDownQrcode not available");
    sanityPage.SanityElement().clkDropDownQrcode.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkGenerateQrCode), 20000, "clkGenerateQrCode not available");
    sanityPage.SanityElement().clkGenerateQrCode.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().enterQrCode), 20000, "enterQrCode not available");
    sanityPage.SanityElement().enterQrCode.sendKeys('2');
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkReqestQrCode), 20000, "clkReqestQrCode not available");
    sanityPage.SanityElement().clkReqestQrCode.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().QRcodeTostrMsg), 20000, "QRcodeTostrMsg not available");
    expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
    console.log('QR Code Generated Succesfully');
    }
    catch(err)
    {
    console.log(err);
    }
    }
  

const previeAllMyContent=()=>{
try{
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkWorkSpace), 20000, "Workspace  is not available");
    sanityPage.SanityElement().clkWorkSpace.click();
    browser.sleep(2000);
    sanityPage.SanityElement().clkAllMyContent.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkFirstCntAllMyCon), 20000, "FirstContent is not available");
    sanityPage.SanityElement().clkFirstCntAllMyCon.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().coursePagebackButton), 20000, "FirstContent is not available");
    sanityPage.SanityElement().coursePagebackButton.click();
    browser.sleep(3000);  
    // var editor = driver.findElement(frme);
    // browser.switchTo().frame(editor);
    // browser.sleep(6000);
    
   // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().closeEditor), 20000, "closeEditor is not available");

    //sanityPage.SanityElement().closeEditor.click();
    //browser.sleep(2000);

}catch(err)
{
   console.log(err);
}
}
const downloadQRCode=()=>{
        try
        {
        console.log("User is trying to create book")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");
        etbpage.etb().bookName.sendKeys(faker.randomData().firstname);

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
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().UnitName), 20000, "UnitName is not available");
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
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().chkAppIcon), 50000, "chkAppIcon  is not available");
    sanityPage.SanityElement().chkAppIcon.click();
    browser.sleep(2000);
    sanityPage.SanityElement().sltButton.click();
    browser.sleep(2000);
    // sanityPage.SanityElement().clkBoard.click();
    // browser.sleep(1000);
    // sanityPage.SanityElement().sltBoard.click();
    // browser.sleep(1000);
   
    // sanityPage.SanityElement().clkMedium.click();
    // browser.sleep(2000);
    // sanityPage.SanityElement().sltMedium.click();
    // browser.sleep(2000);

    // var we =sanityPage.SanityElement().clkClass;
    //             browser.executeScript("arguments[0].scrollIntoView();", we.getWebElement()).then(function(){
    //             we.click();
    //             });

    // browser.sleep(2000);
    // sanityPage.SanityElement().SltClass.click();
    // browser.sleep(2000);
    // sanityPage.SanityElement().clkSubject.click();
    // browser.sleep(1000);
    // sanityPage.SanityElement().SltSubject.click();
    // browser.sleep(2000);
    browser.executeScript("arguments[0].scrollIntoView();", content.author);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
    content.author.click();
    content.author.sendKeys("Ekstep");
    browser.sleep(2000);
    etbv.yearOfCreation.click();
    etbv.yearOfCreation.clear();
    etbv.yearOfCreation.sendKeys("2020");      
    browser.sleep(2000);
    sanityPage.SanityElement().clkSaveEdit.click();
    browser.sleep(2000);
    sanityPage.SanityElement().clkCloseButton.click();
    browser.sleep(2000);

    sanityPage.SanityElement().qrCodeYes.click();
    sanityPage.SanityElement().saveButton.click();
    browser.sleep(4000);

    sanityPage.SanityElement().clkDropDownQrcode.click();
    browser.sleep(2000);
    sanityPage.SanityElement().clkGenerateQrCode.click();
    browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().QRcodeTostrMsg), 20000, "QRcodeTostrMsg not available");
    expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
    console.log('QR Code Generated Succesfully');
    sanityPage.SanityElement().clkDownloadQr.click();
    browser.sleep(2000);

    }
    catch(err)
    {
    console.log(err);
    }
    }
    const tocDownload=()=>{
    try{
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");

        bookname= "BookA"+faker.randomData().firstname;
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
        catch(err)
    {
    console.log(err);
    }
    }
    const openBookFromDraftAndDownloadQRCode=()=>{
    try
    {
        console.log("User is trying to create book")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");
        bookname= "BookA"+faker.randomData().firstname;
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
    catch(err)
    {
    console.log(err);
    }
    }
    const copyContentFromLib=(contentType)=>{
    try{
        console.log("User is trying to copy content");
        
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.sendKeys(contentType);
        browser.sleep(2000);
        sanityPage.SanityElement().clkSearchLib.click();
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(san.clkFirConLib), 20000, "clkFirConLib  is not available");
        san.clkFirConLib.click();
        console.log("clicked on first content")
        browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(8000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCopyButton), 20000, "clkCopyButton  is not available");
        sanityPage.SanityElement().clkCopyButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkCopyButton.click();
        browser.sleep(3000);
        var editor = driver.findElement(by.tagName('iframe'));
        browser.switchTo().frame(editor);
        browser.sleep(8000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveButton), 20000, "saveButton  is not available");
        sanityPage.SanityElement().saveButton.click();
        browser.sleep(3000);
     
        sanityPage.SanityElement().closeEditor1.click();
        //expect(sanityPage.SanityElement().vefifyContentCopied.getText()).toEqual('TOC');

        console.log("User successfully copied content");

    }
    catch(err)
    {
    console.log("failed to copy content"+err);
    }
    }
    const searchQRCodeInGetPage=()=>{
    try
    {
        var sheetPath=getExcelPath.ConfigurePath().excelSheetPath;
        var cred= genericFun.readParticularDataFromExcelFile(sheetPath,'3');
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().enterQrcode), 20000, "Enter QR Code is not available");
        sanityPage.SanityElement().enterQrcode.sendKeys(cred[18]['Title']);
        sanityPage.SanityElement().searchCode.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkLinkedContent.click();

        console.log('Verified Linked Content Succsfully');
    }
    catch(err)
    {
    console.log(err);
    }
    }
    const VerifyTocWitSubUnits=()=>{
    try
    {
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkTraining), 20000, "clkTraining is not available");
    sanityPage.SanityElement().clkTraining.click();
    browser.sleep(2000);
    sanityPage.SanityElement().clkTrainSearInp.click();
    browser.sleep(2000);
    sanityPage.SanityElement().clkLinkedContents.getText().then(function(input){

    
        
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
catch(err)
{
   console.log(err);
}
}
const uploadCSVFile=()=>{
 try
 {   
    console.log("User is trying to create book")
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
    ccpage.contentCreation().workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
    etbpage.etb().book.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");
    bookname= "BookA"+faker.randomData().firstname;
    etbpage.etb().bookName.sendKeys("Untitled Textbook");

    FillBmesWhileCreatingBook();

    ccpage.contentCreation().startCreating.click();
    browser.sleep(5000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(5000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");

   
 

    
// set file detector
let path = require('path');
var remote =require(protractor.basePath + '/node_modules/selenium-webdriver/remote');
browser.setFileDetector(new remote.FileDetector());
//test/pageObject/Untitled Textbook.csv


var fileToUpload ='Untitled Textbook.csv';
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
catch(err)
{
   console.log(err);
}
}


const copyContentFromTraining=(contentType)=>{
    var contentName;
    try{
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
        browser.sleep(2000);
        var editor = driver.findElement(frme);
        browser.switchTo().frame(editor);
        browser.sleep(8000);
        contentName=sanityPage.SanityElement().vefifyContentCopied.getText();
        //expect(sanityPage.SanityElement().vefifyContentCopied.getText()).toEqual('TOC');
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().sendForReview), 20000, "closeEditor  is not available");
        sanityPage.SanityElement().closeEditor1.click();

        console.log("User successfully copied content");
        return contentName;
    }
    catch(err)
    {
        console.log(err);
    }
      
    }

const generateAndDownlaodQrCode=()=>{
try{
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
catch(err)
{
   console.log(err);
}
}
const UpdateTocAndUpload=(filePath)=>{
    browser.sleep(2000);
   try {
//         const fs = require('fs');
//  const {resolve, join} = require('path');
console.log('user is trying to update toc')
 //  module.exports = {  readLatestDownlaodedFileName : function(filePath) {
   var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
  var qrcode=genericFun.readParticularDataFromExcelFile(sheetPath,'3');
  var qrcodevalue=qrcode[18]['Title'];
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
   fs.readdir(resolve(filePath),function(err, list){
       list.forEach(function(file){
           browser.sleep(3000);
          
         totalSize=list.length;
       
          stats = fs.statSync(resolve(join(filePath, file)));
         // console.log(list[totalSize-1])
        //console.log(list)
       //    console.log(stats.mtime);
       //    console.log(stats.ctime);
       // console.log(list)
       // var latestfile=list[totalSize-1];
       })
       var lastfile=list[list.length-1];
 console.log(lastfile)
      // console.log(latestfile);
               var downpath=filePath;
       var FilePaths = downpath+lastfile;
       console.log(FilePaths);
var updatQrCode=genericFun.writeDataInToCSVlFile(FilePaths,0,'QR Code',qrcodevalue);
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
catch(err)
{
  console.log(err);
}
}
const uploadParticularFile=(filelatest)=>{
    // set file detector
    let path = require('path');
    var remote =require(protractor.basePath + '/node_modules/selenium-webdriver/remote');
    browser.setFileDetector(new remote.FileDetector());
    //test/pageObject/Untitled Textbook.csv
    console.log(__dirname)
    console.log('trting to upload updated CSV')
    var fileToUpload=filelatest;
    //var fileToUpload ='do_2130111423076270081379_untitled-textbook_1588274237953.csv';
    var absolutePath = path.resolve(__dirname,fileToUpload);
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

    const verifyTNTenantLogo=()=>{
        try
        {
            var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '1','Public User1');
        browser.sleep(1000);
            browser.driver.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().verfiyTNlogo), 20000, "TN Specific Logo is not available");
       //  expect(sanityPage.SanityElement().verfiyTNlogo.getAttribute('src')).toEqual('logo.png');
       expect(sanityPage.SanityElement().verfiyTNlogo.isDisplayed()).toBeTruthy();
        console.log(' Verified TN Logo Tenant Specified Logo Succesfully ');
        sanityPage.SanityElement().clickTNLogin.click();
        browser.driver.sleep(4000);
        expect(sanityPage.SanityElement().verifyTNlogoInLoginPage.getAttribute('alt')).toEqual('tn');
        browser.driver.sleep(1000);
        wait.waitForElementVisibility(content.userName, 20000);
        content.userName.sendKeys(cred[0]['Username']);
        content.password.sendKeys(cred[0]['Password']);
        content.login.click();
        }
    catch(err)
    {
       console.log(err);
    }
    }
    const clkViewAllInCourseTab=()=>{
        try
        {
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
    catch(err)
    {
       console.log(err);
    }
    }
    const courseSearchInExploreCourse=()=>{
        try
        {
            wait.waitForElementVisibility(sanityPage.SanityElement().clickExploreCourse, 20000);
            sanityPage.SanityElement().clickExploreCourse.click();
            wait.waitForElementVisibility(san.searchConLib, 20000);
            san.searchConLib.click();
            san.searchConLib.sendKeys('Course');
            san.clkSearchLib.click();
            browser.driver.sleep(2000);
            browser.executeScript('window.scrollTo(0,200);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });
            wait.waitForElementVisibility(san.clkLinkedContents, 20000);
            expect(san.clkLinkedContents.isDisplayed()).toBeTruthy();
            san.clkLinkedContents.click();
            browser.driver.sleep(1000);
            console.log('Course Searched Succesfully in ExploreCourse Search')
        }
    catch(err)
    {
       console.log(err);
    }
    }
    const signWithGoogle=()=>{
        try
        {
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
            wait.waitForElementVisibility(san.clkLibraray,80000);
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
    catch(err)
    {
       console.log(err);
    }
    }
    const GoogleAfterLogin=()=>{
        try
        {
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
            wait.waitForElementVisibility(san.clkLibraray,80000);
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
    catch(err)
    {
       console.log(err);
    }
    }

    const verifydefaultValues = () => {
        wait.waitForElementVisibility(sanity.labelLibrary, 20000);
        sanity.labelLibrary.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(sanity.labelDefaultBoard, 20000);
        sanity.labelDefaultBoard.getText().then(function(defBoard){
            console.log("labelDefaultBoard :"+defBoard);
            expect(defBoard).toContain("CBSE");
        });
        wait.waitForElementVisibility(sanity.labelDefaultMedium, 20000);
        sanity.labelDefaultMedium.getText().then(function(defMedium){
            console.log("labelDefaultMedium :"+defMedium);
            expect(defMedium).toContain("English");
        });
        browser.executeScript("arguments[0].scrollIntoView();", sanity.labelDefaultClass);
        wait.waitForElementVisibility(sanity.labelDefaultClass, 20000);
        sanity.labelDefaultClass.getText().then(function(defClass){
            console.log("labelDefaultClass :"+defClass);
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
        wait.waitForElementVisibility(sanity.SelectBiologybook , 20000);
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

    const verifyCreateMyGroupAddMember=()=>{
        try{
        console.log('user is able to create myGroup,add member ');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton),40000,"Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton),40000,"myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton),40000,"Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton),40000,"Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName),40000,"Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription),40000,"Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox),40000,"Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton),40000,"CreateGroup submit button not available");
        searchObj.createGroupSubmitButton.click();
        browser.sleep(3000); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully),40000,"addedSuccessfully Icon not available");
        var adminText=searchObj.addedSuccessfully.getText();
        expect((adminText).isDisplayed()).toBe(true);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup),40000,"Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(1000);
       
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addMember),40000,"Add member button not available");
        searchObj.addMember.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton),40000,"Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.EnterUserId),40000,"Enter User Id not available");
        searchObj.EnterUserId.sendKeys('usersun');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.verifyUserId),40000,"Verify User Id button not available");
        searchObj.verifyUserId.click();
        // browser.sleep(6000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addingMembertoGroup),40000,"Adding Member to group button not available");
        // searchObj.addingMembertoGroup.click();
        // browser.sleep(6000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.UserAddedSuccessfully),40000,"Successful Text not available");
        // var userAddedsuccessfulText=searchObj.UserAddedSuccessfully.getText();
        // expect((userAddedsuccessfulText).isDisplayed()).toBe(true);
        }catch(Exception){
            console.log('User is unable to create my Group,member ');
        }
        }
        const copyBookAsCourse=(contentType)=>{
            try{
                console.log("User is trying to copy content");
                browser.sleep(2000);
                sanityPage.SanityElement().searchConLib.click();
                browser.sleep(2000);
                sanityPage.SanityElement().searchConLib.sendKeys(contentType);
                browser.sleep(2000);
                sanityPage.SanityElement().clkSearchLib.click();
                browser.executeScript('window.scrollTo(0,200);').then(function () {
                    console.log('++++++SCROLLED Down+++++');
                });
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(san.clkFirConLib), 20000, "clkFirConLib  is not available");
                san.clkFirConLib.click();
                console.log("clicked on first content")
                browser.executeScript('window.scrollTo(0,0);').then(function(){
                    console.log('++++++SCROLLED UP+++++');
                });
        
                browser.sleep(8000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.copyAsCourse), 20000, "copyAsCourse  is not available");
                searchObj.copyAsCourse.click();
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.copyAsCourseCheckBox), 20000, "copyAsCourseCheckBox  is not available");
                searchObj.copyAsCourseCheckBox.click();
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.copyAsCourseConfirm), 20000, "copyAsCourseConfirm  is not available");
                searchObj.copyAsCourseConfirm.click();
                browser.sleep(2000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.courseIcon), 20000,"Icon not loaded");
                sanity.courseIcon.click();
                browser.sleep(2000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.allImages), 20000,"all images not loaded");
                sanity.allImages.click();
                browser.sleep(2000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firststIconImage), 20000,"first image not loaded");
                sanity.firststIconImage.click();
                browser.sleep(2000);
                //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
                // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
                // sanity.addCourseTitle.click();
                // sanity.addCourseTitle.clear();
                // var now=new Date();
                // var minutes=now.getMinutes().toString();
                // courseName= "courseA"+faker.randomData().firstname+minutes;
                // sanity.addCourseTitle.sendKeys(courseName);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
                sanity.addcourseTag.sendKeys('test');
                browser.actions().sendKeys(protractor.Key.ENTER).perform();
                browser.sleep(2000);
                browser.executeScript('window.scrollTo(0,1000);').then(function () {
                    console.log('++++++SCROLLED Down+++++');
                });
                sanityPage.SanityElement().courseadditionalCategory.click();
                browser.sleep(1000);
                sanityPage.SanityElement().selectAdditionalCategory.click();
                browser.sleep(1000);
                sanityPage.SanityElement().courseType.click();
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
                    browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000,"Medium covered not loaded");
                    sanityPage.SanityElement().selectMediumForCourse.click();
                    browser.sleep(3000);
                })
                 sanityPage.SanityElement().selectMedium.click();
                 browser.sleep(3000);
                 browser.executeScript('window.scrollTo(0,1000);').then(function () {
                    browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000,"class covered not loaded");
                    sanityPage.SanityElement().selectClassForCourse.click();
                    browser.sleep(3000);
                })
                 sanityPage.SanityElement().selectclass.click();
                 browser.sleep(3000);
                browser.executeScript('window.scrollTo(0,1000);').then(function () {
                    browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000,"subject covered not loaded");
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
                 browser.sleep(3000);   
            //     sanityPage.SanityElement().addChild.click();
            //     browser.sleep(3000); 
            //    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
            //     sanityPage.SanityElement().addFromLibraryButton.click();
            //     browser.sleep(3000); 
            //    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000,"Select content Button not loaded");
            //     sanityPage.SanityElement().selectButton.click();
            //     browser.sleep(3000); 
            //     //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000,"Add content content Button not loaded");
            //     sanityPage.SanityElement().addContent.click();
            //     browser.sleep(3000); 
            //    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000,"Back Button not loaded");
            //     sanityPage.SanityElement().contentFromLibrayBackButton.click();
            //     browser.sleep(3000); 
                //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
                sanityPage.SanityElement().NewCoursesubmitButton.click();
                browser.sleep(3000); 
                //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");
                sanityPage.SanityElement().termsAndConditionCheckbox.click();
                browser.sleep(3000); 
               // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000,"submit Button not loaded");
                sanityPage.SanityElement().submitForreviewButton.click();
                browser.sleep(3000); 
                // var editor = driver.findElement(by.tagName('iframe'));
                // browser.switchTo().frame(editor);
                // browser.sleep(8000);
                // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().saveButton), 20000, "saveButton  is not available");
                // sanityPage.SanityElement().saveButton.click();
                // browser.sleep(3000);
             
               // sanityPage.SanityElement().closeEditor1.click();
                //expect(sanityPage.SanityElement().vefifyContentCopied.getText()).toEqual('TOC');
        
                console.log("User successfully copied content as course");
        
            }
            catch(err)
            {
            console.log("failed to copy as course content"+err);
            }
            }  

    const FillBmesWhileCreatingBook = () => {
        try {
           
            wait.waitForElementVisibility(etbv.clkBoardInBook, 20000, "clkBoardInBook is not available");
            etbv.clkBoardInBook.click();
            browser.sleep(1000);
            wait.waitForElementVisibility(etbv.SltBoardInBook, 20000, "clkBoardInBook is not available");
            etbv.SltBoardInBook.click();
            browser.sleep(1000);
            wait.waitForElementVisibility(etbv.clkMediumInBook, 20000, "clkBoardInBook is not available");
            etbv.clkMediumInBook.click();
            browser.sleep(1000);
            wait.waitForElementVisibility(etbv.sltMediumInBook, 20000, "clkBoardInBook is not available");
            etbv.sltMediumInBook.click();
            browser.sleep(1000);
            wait.waitForElementVisibility(etbv.clkClassInBook, 20000, "clkBoardInBook is not available");
            etbv.clkClassInBook.click();
            browser.sleep(1000);
            wait.waitForElementVisibility(etbv.sltClassInBook, 20000, "clkBoardInBook is not available");
            etbv.sltClassInBook.click();
            browser.sleep(1000);
            wait.waitForElementVisibility(etbv.clkSubjectInBook, 20000, "clkBoardInBook is not available");
            etbv.clkSubjectInBook.click();
            browser.sleep(1000);
            wait.waitForElementVisibility(etbv.sltSubjectInBook, 20000, "clkBoardInBook is not available");
            etbv.sltSubjectInBook.click();
            browser.sleep(1000);
            wait.waitForElementVisibility(etbv.clkPublisher, 20000, "clkPublisher is not available");
            etbv.clkPublisher.click();
        }
        catch (err) {
            console.log(err);
        }
    }
    const declaredUsersCsvFileDownload = ()=>{
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
    const creatorIsAbleToCopyTheBook = ()=>{
        try {
            var sheetPath=getExcelPath.ConfigurePath().excelSheetPath;
            var cred= genericFun.readParticularDataFromExcelFile(sheetPath,'3');
            console.log("User is trying to click on Digital Text Book Link")
            browser.sleep(4000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.digitalTextBooksLink), 20000, "Avatar Content Button is not available");
            sanity.digitalTextBooksLink.click();
            console.log("User is trying to send data to search box")
            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf( sanity.searchConLib), 20000, "Manage Button is not available");
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
            browser.sleep(3000);
            sanity.copyBtn.click();
            browser.sleep(3000);

            expect(sanity.copyPopup.getText().toEqual('Content successfully copied'));
            console.log("Book is successfully copied")
        }
        catch (err) {
            console.log(err);
        }
    }
    const verifyEnableAndDisableDiscussionForGroup=()=>{
        try{
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton),40000,"Profile Button not available");
            searchObj.profileButton.click();
            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton),40000,"myGroup icon not available");
            searchObj.myGroupButton.click();
            browser.sleep(4000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup),40000,"First group is not available");
            sanity.firstGroup.click();
            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions),40000,"Group actions is not available");
            sanity.groupActions.click();
            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon),40000,"Enable discussion is not available");
            sanity.enableDiscussionIcon.click();
            browser.sleep(4000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enablediscussionSuccessful),40000,"Enable discussion successful message is not available");
            browser.sleep(2000);
            expect(sanity.enablediscussionSuccessful.isDisplayed()).toBeTruthy();
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
            sanityPage.SanityElement().forum.click();
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
            expect(sanityPage.SanityElement().categories.isDisplayed()).toBeTruthy();
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categoryCard), 20000, "categories card is not available");
            sanityPage.SanityElement().categoryCard.click();
            browser.sleep(3000);
            expect(sanityPage.SanityElement().announcement.isDisplayed()).toBeTruthy();
            expect(sanityPage.SanityElement().generalDiscussion.isDisplayed()).toBeTruthy();
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().announcement), 20000, "announcement is not available");
            sanityPage.SanityElement().announcement.click();
            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().announcementLink), 20000, "announcementLinkis not available");
            sanityPage.SanityElement().announcementLink.click();
            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().textareaForComment), 20000, "textareaForComment is not available");
            sanityPage.SanityElement().textareaForComment.sendKeys("This is for adding comment");
            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().postReply), 20000, "postReply is not available");
            sanityPage.SanityElement().postReply.click();
            browser.sleep(3000);
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
            expect(sanityPage.SanityElement().tags.isDisplayed()).toBeTruthy();
            expect(sanityPage.SanityElement().myDiscussions.isDisplayed()).toBeTruthy();
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().myDiscussions), 20000, "my discussion is not available");
            sanityPage.SanityElement().myDiscussions.click();
            browser.sleep(2000);
            expect(sanityPage.SanityElement().recentPost.isDisplayed()).toBeTruthy();
            expect(sanityPage.SanityElement().bestPost.isDisplayed()).toBeTruthy();
            expect(sanityPage.SanityElement().savedPost.isDisplayed()).toBeTruthy();
            expect(sanityPage.SanityElement().upvoted.isDisplayed()).toBeTruthy();
            expect(sanityPage.SanityElement().downVoted.isDisplayed()).toBeTruthy();
            browser.navigate().back();
            browser.navigate().back();
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions),40000,"Group actions is not available");
            sanity.groupActions.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon),40000,"Disablediscussion Icon is not available");
            sanity.disableDiscussionIcon.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton),40000,"Disablediscussion Button is not available");
            sanity.disablediscussionButton.click();
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionSuccessful),40000,"Disable discussion successful message is not available");
            browser.sleep(2000);
            expect(sanity.disableDiscussionSuccessful.isDisplayed()).toBeTruthy();
            browser.sleep(1000);
            expect(sanityPage.SanityElement().forum.isDisplayed()).toBeFalsy();


        }catch(err){
            console.log(err)
        }
    }
const createCourseAndSendForReview=()=>{
    var courseName;
    try{
        console.log("user is trying to create a course")
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000,"Creation page not loaded");
    content.course.click();
    browser.sleep(3000);
  
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.courseIcon), 20000,"Icon not loaded");
    // sanity.courseIcon.click();
    // browser.sleep(2000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.allImages), 20000,"all images not loaded");
    // sanity.allImages.click();
    // browser.sleep(2000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firststIconImage), 20000,"first image not loaded");
    // sanity.firststIconImage.click();
    // browser.sleep(2000);


    //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
    sanity.addCourseTitle.click();
    sanity.addCourseTitle.clear();
    var now=new Date();
    var minutes=now.getMinutes().toString();
    courseName= "courseA"+faker.randomData().firstname+minutes;
    sanity.addCourseTitle.sendKeys(courseName);
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addcourseTag), 20000, "tag not available");
    sanity.addcourseTag.sendKeys('test');
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.sleep(2000);
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
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000,"Medium covered not loaded");
        sanityPage.SanityElement().selectMediumForCourse.click();
        browser.sleep(3000);
    })
     sanityPage.SanityElement().selectMedium.click();
     browser.sleep(3000);
     browser.executeScript('window.scrollTo(0,1000);').then(function () {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000,"class covered not loaded");
        sanityPage.SanityElement().selectClassForCourse.click();
        browser.sleep(3000);
    })
     sanityPage.SanityElement().selectclass.click();
     browser.sleep(3000);
    browser.executeScript('window.scrollTo(0,1000);').then(function () {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000,"subject covered not loaded");
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
     browser.sleep(3000);   
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.courseadditionalCategory), 20000,"Additional category not loaded");
    // sanity.courseadditionalCategory.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectAdditionalCategory), 20000,"Additional category value not loaded");
    // sanity.selectAdditionalCategory.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.courseType), 20000,"course Type not loaded");
    // sanity.courseType.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectcourseType), 20000,"course Type value not loaded");
    // sanity.selectcourseType.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.subjectCovered), 20000,"Subject covered not loaded");
    // sanity.subjectCovered.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectSubject), 20000,"subjectcovered value not loaded");
    // sanity.selectSubject.click();
    // browser.sleep(1000);
    // browser.executeScript('window.scrollTo(0,500);').then(function () {
    //     console.log('++++++SCROLLED Down+++++');
    // });
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectBoardForcourse), 20000,"board not loaded");
    // sanity.selectBoardForcourse.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectBoard), 20000,"board value not loaded");
    // sanity.selectBoard.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectMediumForCourse), 20000,"Medium covered not loaded");
    // sanity.selectMediumForCourse.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectMedium), 20000,"Medium value not loaded");
    // sanity.selectMedium.click();
    // browser.sleep(1000); 
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectClassForCourse), 20000,"Class covered not loaded");
    // sanity.selectClassForCourse.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectclass), 20000,"Class value not loaded");
    // sanity.selectclass.click();
    // browser.sleep(1000); 
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectSubjectForCourse), 20000,"Subject covered not loaded");
    // sanity.selectSubjectForCourse.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectSubject2), 20000,"Subject value not loaded");
    // sanity.selectSubject2.click();
    // browser.sleep(1000); 
    // browser.executeScript('window.scrollTo(0,500);').then(function () {
    //     console.log('++++++SCROLLED Down+++++');
    // });
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.Author), 20000,"Author  not loaded");
    // sanity.Author.sendKeys("EKSTEP");
    // browser.sleep(1000); 
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.selectCopyRightYear), 20000,"copyRightYear not loaded");
    // sanity.selectCopyRightYear.sendKeys("2021");
    // browser.sleep(1000); 
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.saveAsDraft), 20000,"Save As Draft not loaded");
    // sanity.saveAsDraft.click();
    // browser.sleep(1000); 
    // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addChild), 20000,"Add child not loaded");
    sanityPage.SanityElement().addChild.click();
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
    browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000,"submit Button not loaded");
    sanityPage.SanityElement().submitForreviewButton.click();
    browser.sleep(3000); 
    sanityPage.SanityElement().termsAndConditionCheckbox.click();
    browser.sleep(3000); 
    //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
    sanityPage.SanityElement().NewCoursesubmitButton.click();
    browser.sleep(3000); 
    //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().termsAndConditionCheckbox), 20000,"terms and condition checkbox Button not loaded");
    
   
    }catch(err){
        console.log(err);
    }
    return courseName;
}

const verifyCloseIconInEnableAndDisableDiscussionForGroup=()=>{
    try{
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton),40000,"Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton),40000,"myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkCloseIconPopup),40000,"clkCloseIconPopup icon not available");
        searchObj.clkCloseIconPopup.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup),40000,"First group is not available");
        sanity.firstGroup.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions),40000,"Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon),40000,"Enable discussion is not available");
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

      
     


    }catch(err){
        console.log(err)
    }
}
const editAndDelteTopic=()=>{
    try{
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton),40000,"Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton),40000,"myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkCloseIconPopup),40000,"clkCloseIconPopup icon not available");
        searchObj.clkCloseIconPopup.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup),40000,"First group is not available");
        sanity.firstGroup.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions),40000,"Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon),40000,"Enable discussion is not available");
        sanity.enableDiscussionIcon.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enablediscussionSuccessful),40000,"Enable discussion successful message is not available");
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


    }catch(err){
        console.log(err)
    }
}
const verifyEnableAndDisableDiscussionForGroup2=()=>{
    try{
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton),40000,"Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton2),40000,"myGroup icon not available");
        searchObj.myGroupButton2.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkCloseIconPopup),40000,"myGroup icon not available");
        searchObj.clkCloseIconPopup.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstGroup),40000,"First group is not available");
        sanity.firstGroup.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions),40000,"Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon),40000,"Enable discussion is not available");
        sanity.enableDiscussionIcon.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enablediscussionSuccessful),40000,"Enable discussion successful message is not available");
        browser.sleep(2000);
   //expect(sanity.enablediscussionSuccessful.isDisplayed()).toBeTruthy();
   browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
        expect(sanityPage.SanityElement().categories.isDisplayed()).toBeTruthy();
        browser.sleep(1000);
 browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkCloseIconDF), 20000, "clkCloseIconDF is not available");
 expect(sanityPage.SanityElement().clkCloseIconDF.isDisplayed()).toBeTruthy();
 browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categoryCard), 20000, "categories card is not available");
        // sanityPage.SanityElement().categoryCard.click();
    
    
        browser.sleep(3000);
     //   expect(sanityPage.SanityElement().announcement.isDisplayed()).toBeTruthy();
        // expect(sanityPage.SanityElement().generalDiscussion.isDisplayed()).toBeTruthy();
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
       
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkGeneDiscDF), 20000, "generalDiscussion is not available");
        sanityPage.SanityElement().clkGeneDiscDF.click();
        browser.sleep(3000);
       
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().generalDiscussion), 20000, "generalDiscussion is not available");
        // sanityPage.SanityElement().generalDiscussion.click();
        // browser.sleep(3000);
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
      
        // browser.navigate().back();
        // browser.navigate().back();
      
  browser.sleep(2000);
  sanityPage.SanityElement().clkCloseIconDF.click();
  browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions),40000,"Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon),40000,"Disablediscussion Icon is not available");
        sanity.disableDiscussionIcon.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton),40000,"Disablediscussion Button is not available");
        sanity.disablediscussionButton.click();
        browser.sleep(2000);
    
     //    expect(sanity.disableDiscussionSuccessful.isDisplayed()).toBeTruthy();
  browser.sleep(5000);

      //   expect(sanityPage.SanityElement().forum.isDisplayed()).toBeFalsy();
  
      
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions),40000,"Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon),40000,"Enable discussion is not available");
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
      
              browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions),40000,"Group actions is not available");
              sanity.groupActions.click();
              browser.sleep(1000);
              browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon),40000,"Disablediscussion Icon is not available");
              sanity.disableDiscussionIcon.click();
              browser.sleep(1000);
              browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton),40000,"Disablediscussion Button is not available");
              sanity.disablediscussionButton.click();
              browser.sleep(2000);
            //   browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionSuccessful),40000,"Disable discussion successful message is not available");
            //   browser.sleep(2000);

        //               expect(sanity.disableDiscussionSuccessful.isDisplayed()).toBeTruthy();

    }catch(err){
        console.log(err)
    }
}
const updateDiscussionForumPost=()=>{
    try{
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
    }catch(err){
        console.log(err);
    }
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
}

    