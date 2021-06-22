const { browser } = require("protractor");


const filt2 = require(protractor.basePath + '/test/pages/ETB/etbPage1.js');
var filter2=filt2.EtbElem1();
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
const wait = require(protractor.basePath +'/helper/waiters.js');
const genericFun= require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath=require(protractor.basePath + '/test/pathFolder/changePath.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
var content=ccpage.contentCreation();
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

    

const verifyfilters=()=>{

    browser.sleep(4000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.digitalTextbooksFilter), 20000, "Digital Textbooks Filter not found");
    filter2.digitalTextbooksFilter.click();
    browser.sleep(4000);
    filter2.mediumValidation.click();
    browser.sleep();
    expect(filter2.mediumValidation.isDisplayed()).toBe(true);
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.selectClass1), 20000, "Class Filter not found");
    filter2.selectClass1.click();
    expect(filter2.selectClass1.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.boardValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.subjectValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.published_byValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.publishedUsertypeValidation.isDisplayed()).toBe(true);
    console.log("Digtal Textbooks verified");
    
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.coursesFilter), 20000, "Course filter not found");  
    filter2.coursesFilter.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.mediumValidation), 20000, "Medium Filter not found");
    filter2.mediumValidation.click();
    expect(filter2.mediumValidation.isDisplayed()).toBe(true);
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.selectClass1), 20000, "Class Filter not found");
    filter2.selectClass1.click();
    expect(filter2.classesValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.boardValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.subjectValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.published_byValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.publishedUsertypeValidation.isDisplayed()).toBe(true);
    console.log("Courses Verified");

    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.tvClassesFilter), 20000, "TV class filter not found");  
    filter2.tvClassesFilter.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.mediumValidation), 20000, "Medium Filter not found");
    filter2.mediumValidation.click();
    expect(filter2.mediumValidation.isDisplayed()).toBe(true);
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.classesValidation), 20000, "Class Filter not found");
    filter2.classesValidation1.click();
    expect(filter2.classesValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.boardValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.subjectValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.published_byValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(filter2.publishedUsertypeValidation.isDisplayed()).toBe(true);
    console.log("TV class filter verified");

    browser.wait(protractor.ExpectedConditions.visibilityOf(fil.allFilter), 20000, "All filter not found");  
    fil.allFilter.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(fil.mediumValidation), 20000, "Medium Filter not found");
    fil.mediumValidation.click();
    expect(fil.mediumValidation.isDisplayed()).toBe(true);
    browser.wait(protractor.ExpectedConditions.visibilityOf(fil.classesValidation), 20000, "Class Filter not found");
    fil.classesValidation.click();
    expect(fil.classesValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(fil.boardValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(fil.subjectValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(fil.published_byValidation.isDisplayed()).toBe(true);
    browser.sleep(2000);
    expect(fil.publishedUsertypeValidation.isDisplayed()).toBe(true);
    console.log("TV class filter verified");

    return{
        verifyfilters,
        };
    
};

const verifySearchContentInExplorePage=()=>{

    browser.sleep(5000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.search), 20000, "collection content not validated");
    browser.sleep(4000);
    filter2.search.sendKeys("collection");
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchbutton), 20000, "collection content not validated");
    filter2.searchbutton.click();
    browser.sleep(4000);
    filter2.appliedFilters1.getText().then(elementText =>{
        console.log(elementText);
    })
    expect(filter2.appliedFilters1.getText()).toEqual('Collection');
        console.log("collection content validated")    
    
    browser.sleep(7000);
    browser.navigate().back();
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.search), 50000, "textbook content not validated");
    filter2.search.sendKeys("TextBook");
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchbutton), 20000, "Search button not validated");
    filter2.searchbutton.click();
    browser.sleep(4000);
    
    filter2.appliedFilters1.getText().then(elementText =>{
        console.log(elementText)
    })
    expect(filter2.appliedFilters1.getText()).toEqual('TextBook');
        console.log("Textbook content validated")  
    browser.sleep(10000);
    browser.navigate().back();
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.search), 80000, "lessonPlan content validated");
    filter2.search.sendKeys("lessonPlan");
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchbutton), 20000, "collection content not validated");
    filter2.searchbutton.click();
    filter2.appliedFilters1.getText().then(elementText =>{
        console.log(elementText);
    })
    expect(filter2.appliedFilters1.getText()).toContain("LessonPlanResource");
        console.log("lessonPlan content validated")
    browser.sleep(10000);

    browser.navigate().back();    
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.search), 100000, "resource content not validated");
    filter2.search.sendKeys("Resource");
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchbutton), 20000, "searchbutton content not validated");
    filter2.searchbutton.click();
    filter2.appliedFilters1.getText().then(elementText =>{
        console.log(elementText);
    })
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.appliedFilters1), 20000, "fetchContentName is not available");
    
    expect(filter2.appliedFilters1.getText()).toContain('Resource')
        console.log("Resource content validated")
    
    browser.sleep(10000);
    browser.navigate().back();
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.search), 200000, "selfAssess content not validated");
    filter2.search.sendKeys("selfAssess");
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchbutton), 20000, "collection content not validated");
    filter2.searchbutton.click();
    filter2.appliedFilters1.getText().then(elementText =>{
        console.log(elementText);
    })
    expect(filter2.appliedFilters1.getText()).toEqual("SelfAssess")
        console.log("selfAssess content validated")
    
    browser.sleep(10000);
    browser.navigate().back();
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.search), 20000, "PracticeResource content not validated");
    filter2.search.sendKeys("PracticeResource");
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchbutton), 20000, "collection content not validated");
    filter2.searchbutton.click();
    filter2.appliedFilters1.getText().then(elementText =>{
        console.log(elementText);
    })
    expect(filter2.appliedFilters1.getText()).toEqual("PracticeResource")
        console.log("PracticeResource content validated")
    
    browser.sleep(10000);
    browser.navigate().back();
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.search), 20000, "Class Filter not found");
    filter2.search.sendKeys("LearningOutcomeDefinition");
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchbutton), 20000, "collection content not validated");
    filter2.searchbutton.click();
    filter2.appliedFilters1.getText().then(elementText =>{
        console.log(elementText);
    })
    expect(filter2.appliedFilters1.getText()).toEqual("LearningOutcomeDefinition")
        console.log("LearningOutcomeDefinition content validated")
    
    browser.sleep(10000);
    browser.navigate().back();
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.search), 20000, "Class Filter not found");
    filter2.search.sendKeys("ExplanationResource");
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchbutton), 20000, "collection content not validated");
    filter2.searchbutton.click();
    filter2.appliedFilters1.getText().then(elementText =>{
        console.log(elementText);
    })
    expect(filter2.appliedFilters1.getText()).toEqual("ExplanationResource")
        console.log("ExplanationResource content validated")

    
    return{
        verifySearchContentInExplorePage,
     }
};

const verifySearchContentInCollectionPage=()=>{


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown1), 20000, "header drop down content not validated");
        filter2.workspace.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.workspace), 20000, "Workspace content not validated");
        filter2.workspace.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.allMyContents), 20000, "collection content not validated");
        filter2.allMyContents.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchCollection), 50000, "Not able to Search");
        filter2.searchCollection.sendKeys("Collection");
        if (expect(filter2.collectionContent.getText()=="collection")){
            console.log("collection content validated")
        }
        filter2.allMyContents.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchCollection), 50000, "Not able to Search");
        browser.sleep(2000);
        filter2.searchCollection.sendKeys("TextBook");
        if (expect(filter2.collectionContent.getText()=="TextBook")){
            console.log("TextBook content validated")
        }
        filter2.allMyContents.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchCollection), 50000, "Not able to Search"); 
        browser.sleep(2000);
        filter2.searchCollection.sendKeys("LessonPlan");
        if (expect(filter2.collectionContent.getText()=="LessonPlan")){
            console.log("LessonPlan content validated")
        }
        filter2.allMyContents.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchCollection), 50000, "Not able to Search"); 
        browser.sleep(2000);
        filter2.searchCollection.sendKeys("Resource");
        if (expect(filter2.collectionContent.getText()=="Resource")){
            console.log("Resource content validated")
        }
        filter2.allMyContents.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchCollection), 50000, "Not able to Search");
        browser.sleep(2000);
        filter2.searchCollection.sendKeys("SelfAssess");
        if (expect(filter2.collectionContent.getText()=="SelfAssess")){
            console.log("SelfAssess content validated")
        }
        filter2.allMyContents.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchCollection), 50000, "Not able to Search");
        browser.sleep(2000);
        filter2.searchCollection.sendKeys("PracticeResource");
        if (expect(filter2.collectionContent.getText()=="PracticeResource")){
            console.log("PracticeResource content validated")
        }
        filter2.allMyContents.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchCollection), 50000, "Not able to Search");
        browser.sleep(2000);
        filter2.searchCollection.sendKeys("LearningOutcomeDefinition");
        if (expect(filter2.collectionContent.getText()=="LearningOutcomeDefinition")){
            console.log("LearningOutcomeDefinition content validated")
        }
        filter2.allMyContents.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.searchCollection), 50000, "Not able to Search");
        browser.sleep(2000);
        filter2.searchCollection.sendKeys("ExplanationResource");
        if (expect(filter2.collectionContent.getText()=="ExplanationResource")){
            console.log("ExplanationResource content validated")
        }
};

const boardvalueSigleSelect=()=>{
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.digitalTextbook), 20000, "Digital TextBook content not validated");
        filter2.digitalTextbook.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.reset), 20000, "Reset button not validated");
        filter2.reset.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.boardSelection), 50000, "Board not selected");
        filter2.boardSelection.click();
        browser.sleep(4000);
        filter2.selectBoard.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.clkTVClasses), 50000, "Classes not clicked");
        filter2.clkTVClasses.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.reset), 20000, "Reset not validated");
        filter2.reset.click();
        browser.sleep(4000);
        filter2.boardSelection.click();
        browser.sleep(3000);
        filter2.selectBoard.click();
    
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.mediumPills), 20000, "Medium Pills not present");
        if (filter2.mediumPills.isDisplayed()) {
            console.log("Medium Pills are validated")
        }
    
        browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.subjectpills), 20000, "Subject pills not present");
        filter2.subjectpills.click();
        browser.sleep(4000);
        if (filter2.subjectpills.isDisplayed()) {
            console.log("Subject pills are validated")
        }
        return{
            boardvalueSigleSelect,
        }
};

const multiSelection=()=>{

    browser.sleep(4000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.alltab), 20000, "All tabs not found");
    filter2.alltab.click();
    browser.sleep(4000);
    
    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.mediumPills), 20000, "Medium pills not present");
    filter2.mediumPills.click();
    browser.sleep(4000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.hindi), 20000, "Hindi Subject not present");
    filter2.hindi.click();
    browser.sleep(4000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.classSelect), 20000, "class not present");
    filter2.classSelect.click();
    browser.sleep(4000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.selectClass1), 20000, "Class 1 not selected");
    filter2.selectClass1.click();
    browser.sleep(4000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.selectClass2), 20000, "class 2 not present");
    filter2.selectClass2.click();
    browser.sleep(4000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.subjectselect), 20000, "Subject not selected");
    filter2.subjectselect.click();
    browser.sleep(4000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.subjectSelection1), 20000, "subject1 not present");
    filter2.subjectSelection1.click();
    browser.sleep(4000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(filter2.subjectSelection2), 20000, "subject2 not present");
    filter2.subjectSelection2.click();
    browser.sleep(4000);
    
    return{
        multiSelection,
        }
};
    
module.exports = {

    verifyfilters,
    verifySearchContentInExplorePage,
    verifySearchContentInCollectionPage,
    boardvalueSigleSelect,
    multiSelection,
    
};   

