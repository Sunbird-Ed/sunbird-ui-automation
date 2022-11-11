//const { browser } = require("protractor");

const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
const etbPage = require(protractor.basePath + '/test/pages/ETB/EtbPage.js');
const wait = require(protractor.basePath + '/helper/waiters.js');
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const etbpage1 = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
const tpdpage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const resourcePag = require(protractor.basePath + '/test/pages/resource/resource.po.js');
var content = ccpage.contentCreation();
var resov = resourcePag.resource();
var etbv = etbpage1.etb();
var driver = browser.driver;
var frme = by.tagName('iframe');
var san = sanityPage.SanityElement();
var sanity = sanityPage.SanityElement();
var tpd = tpdpage.tpdPage();






const navigateToWorkspace = () => {
    try {
        browser.sleep(1000);
        console.log('User is navigating to the Workspace to create or check  Book');
        console.log('User is navigating to workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().workSpace), 40000, "workSpace is not available");
        etbPage.EtbElem().workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbv.book.click();
        console.log('User successfully navigated to book');
        browser.sleep(2000);
    }
    catch (err) {
        console.log(err);
    }
}

const editFormEditals = () => {
    try {
        browser.sleep(5000);
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(etbv.editDetails), 20000, "Edit Details is not available");

        //  etbv.editDetails.getText().then(function (EditDetails) {
        //     console.log("coursename :" +EditDetails);
        //        });
        //        browser.sleep(5000);
        //        browser.sleep(5000);

        //  browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.editDetails), 30000, "Edit Detials button not available");
        //     etbv.editDetails.click();
        //     browser.sleep(5000);
        //     browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage1.etb().editDetails), 30000, "Edit Detials button not available");
        etbpage1.etb().editDetails.click();
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
        browser.sleep(1000);
    } catch (err) {
        console.log(err);
    }
}


const checkForDisabledAndEnabled = () => {
    try {
        browser.sleep(2000);
        console.log('User is able to see the Download TOC Metadata is disabled and enabled');
        // var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        // var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseName), 40000, "courseName is not available");
        // etbPage.EtbElem().courseName.sendKeys(cred[2]['CourseName']);

        bookname = "BookA" + faker.randomData().firstname;
        etbv.bookName.sendKeys(bookname);
        sanityFun.FillBmesWhileCreatingBook();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        console.log('User is clicked on start creating button')
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickUseEditor), 40000, "clickUseEditor is not available");
        etbPage.EtbElem().clickUseEditor.click();
        console.log('Clicked on Start Creating')
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().dropDownTOC), 40000, "dropDownTOC is not available");
        etbPage.EtbElem().dropDownTOC.click();
        console.log('User is able to see TOC option');
        browser.sleep(1000);

        if (expect(etbPage.EtbElem().downloadIcon.isEnabled()).toBeTruthy()) {
            console.log('Post click on user as editor , intitally the download toc option is disable.');
        }
        else {
            console.log("Element is visible");
        }
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().dropDownTOC), 40000, "dropDownTOC is not available");
        etbPage.EtbElem().dropDownTOC.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().closeCourseButton), 40000, "closeCourseButton is not available");
        etbPage.EtbElem().closeCourseButton.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().workSpace), 40000, "workSpace is not available");
        etbPage.EtbElem().workSpace.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000, "Book page not loaded");
        etbv.book.click();
        browser.sleep(1000);

        browser.refresh();

        browser.sleep(2000);
        bookname = "BookA" + faker.randomData().firstname;
        etbv.bookName.sendKeys(bookname);
        sanityFun.FillBmesWhileCreatingBook();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        console.log('User is clicked on start creating button')
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickUseEditor), 40000, "clickUseEditor is not available");
        etbPage.EtbElem().clickUseEditor.click();
        console.log('Clicked on Start Creating')
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().newchild), 40000, "newchild is not available");
        etbPage.EtbElem().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().untitledNameB), 40000, "untitledNameB is not available");
        etbPage.EtbElem().untitledNameB.click();
        etbPage.EtbElem().untitledNameB.clear();
        etbPage.EtbElem().untitledNameB.sendKeys(cred[2]['CourseName']);
        etbPage.EtbElem().qrCodeRequired.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        etbPage.EtbElem().saveCourse.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().dropDownTOC), 40000, "dropDownTOC is not available");
        etbPage.EtbElem().dropDownTOC.click();

        console.log('Add some units and resources and save the toc')
        if (expect(etbPage.EtbElem().downloadIcon1.isDisplayed()).toBeTruthy()) {
            console.log('After saving the toc, download toc option should get enabled.');
        }
        else {
            console.log("Element is visible");
        }

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().closeCourseButton), 40000, "closeCourseButton is not available");
        etbPage.EtbElem().closeCourseButton.click();
        browser.sleep(1000);
    }
    catch (err) {
        console.log(err);
    }
}
const addCollaboratorForBook = () => {
    var courseName;
    try {
        browser.sleep(1000);
        console.log('User is trying to create New Book');
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseName), 40000, "courseName is not available");
        courseName = "Book A" + faker.randomData().firstname;
        etbPage.EtbElem().courseName.sendKeys(courseName);

        sanityFun.FillBmesWhileCreatingBook();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        console.log('User is clicked on start creating button');
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickUseEditor), 40000, "clickUseEditor is not available");
        etbPage.EtbElem().clickUseEditor.click();
        browser.sleep(1000);
        console.log('Clicked on Start Creating');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().newchild), 40000, "Didn't switched to different frame");
        etbPage.EtbElem().newchild.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().untitledNameB), 40000, "createBook is not available");
        etbPage.EtbElem().untitledNameB.click();
        etbPage.EtbElem().untitledNameB.clear();
        etbPage.EtbElem().untitledNameB.sendKeys(courseName);
        browser.sleep(1000);
        etbPage.EtbElem().qrCodeRequired.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.sendKeys(cred[14]['Title']);
        console.log('Enter DialCode');
        browser.sleep(1000);
        etbPage.EtbElem().validatedialcodeEnterYes.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().collaboratorIcon), 40000, "collaboratorIcon is not available");
        console.log('Collaborator icon is present');
        etbPage.EtbElem().collaboratorIcon.click();
        browser.sleep(1000);
        etbPage.EtbElem().searchCollaboratorField.click();
        etbPage.EtbElem().searchCollaboratorField.sendKeys('Content Creator');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().suggestionCollaboratorList), 40000, "Content Creator is not available");
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().allElements), 40000, "courseToBeClicked is not available");
        // etbPage.EtbElem().allElements.getText().then(function (creator) {
        //     console.log(creator);
        // });
        etbPage.EtbElem().suggestionCollaboratorList.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().addCollaborator), 40000, "addCollaborator is not available");
        // etbPage.EtbElem().addCollaborator.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().donebutton1), 40000, "donebutton1 is not available");
        etbPage.EtbElem().donebutton1.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        etbPage.EtbElem().saveCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().closeEditor1), 40000, "closeEditor1 is not available");
        etbPage.EtbElem().closeEditor1.click();
        console.log('User successfully added collaborator in book')
        return courseName;
    } catch (err) {
        console.log(err);
    }

}
const navigateToWorkspace1 = () => {
    try {
        browser.sleep(1000);
        console.log('User is navigating to the Workspace to create or check');
        console.log('User is navigating to workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().workSpace), 40000, "workSpace is not available");
        etbPage.EtbElem().workSpace.click();
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", etbPage.EtbElem().collaborationMenu);
        etbPage.EtbElem().collaborationMenu.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        console.log('User successfully navigated to Collaborations');

    }
    catch (err) {
        console.log(err);
    }

}


const editTextBookInCollaboratorBucketAndVerify = (courseName) => {
    try {
        browser.sleep(1000);
        console.log('User is trying to edit Text Book In Collaborator Bucket And Verify');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(tpd.collaborationSection), 40000, "searchForReview is not available");
        // tpd.collaborationSection.click();
        // browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchForReview), 40000, "searchForReview is not available");
        etbPage.EtbElem().searchForReview.click();
        browser.sleep(1000);
        etbPage.EtbElem().searchForReview.sendKeys(courseName);
        browser.sleep(1000);

        try {
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().editCollaborator), 40000, "editCollaborator is not available");
            etbPage.EtbElem().editCollaborator.click();
        }
        catch (Exception) {
            console.log('ExceptionE3')
        }
        browser.sleep(1000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        sanityPage.SanityElement().addChild.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
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
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(6000);

    }
    catch (err) {
        console.log(err);
    }
}

const saveAndSendBookForReview = () => {
    try {
        console.log('User is trying to save And Send NewBook For Review');
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sendForReview), 40000, "sendForReview is not available");
        etbPage.EtbElem().sendForReview.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().continueAnyway), 40000, "continueAnyway is not available");
        etbPage.EtbElem().continueAnyway.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickAppIcon), 50000, "clickAppIcon is not available");
        browser.sleep(1000);
        etbPage.EtbElem().clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().checkAppIcon), 40000, "checkAppIcon is not available");
        etbPage.EtbElem().checkAppIcon.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectAppIcon), 40000, "selectAppIcon is not available");
        etbPage.EtbElem().selectAppIcon.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().board), 40000, "board is not available");
        // etbPage.EtbElem().board.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().boardSelect), 40000, "boardSelect is not available");
        // etbPage.EtbElem().boardSelect.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().medium), 40000, "medium is not available");
        // etbPage.EtbElem().medium.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().mediumSelect), 40000, "mediumSelect is not available");
        // etbPage.EtbElem().mediumSelect.click();
        // browser.sleep(1000);
        // browser.executeScript("arguments[0].scrollIntoView();", etbPage.EtbElem().clickclass);
        // etbPage.EtbElem().clickclass.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().SelectClass), 30000, "contuinew button not available");
        // etbPage.EtbElem().SelectClass.click();
        // etbPage.EtbElem().clicksubject.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectSubject), 30000, "contuinew button not available");
        // etbPage.EtbElem().selectSubject.click();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().save), 40000, "save is not available");
        etbPage.EtbElem().save.click();
        browser.sleep(1000);
        console.log('User has successfully saved And Send NewBook For Review');
    }
    catch (err) {
        console.log(err);
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
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().EnterQRCodeBox), 40000, "enterQRcodeButton is not available");
        etbPage.EtbElem().EnterQRCodeBox.click();
        browser.sleep(1000);
        etbPage.EtbElem().EnterQRCodeBox.sendKeys(cred[18]['CourseDescription']);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().SearchQRCode), 40000, "enterQRcodeInSearchField is not available");
        etbPage.EtbElem().SearchQRCode.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().enterQRcodeInSearchField), 40000, "enterQRcodeInSearchField is not available");
        // etbPage.EtbElem().enterQRcodeInSearchField.click();
        // etbPage.EtbElem().enterQRcodeInSearchField.sendKeys(cred[18]['CourseDescription']);
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().submitQRcode), 40000, "enterQRcodeInSearchField is not available");
        // etbPage.EtbElem().submitQRcode.click();
        // browser.sleep(1000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkEnterQRCode), 20000, "Enter QR Code is not available");
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().linkedQRcodeContent), 40000, "enterQRcodeInSearchField is not available");
        etbPage.EtbElem().linkedQRcodeContent.getText().then(function (content) {
            console.log('Linked contents are:' + content);
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().QrcontentClk), 40000, "QrcontentClk is not available");
        etbPage.EtbElem().QrcontentClk.click();
        console.log('Content Opened Successfully')
        console.log('Searched contents are verified');
        browser.sleep(1000);
    }
    catch (err) {
        console.log(err);
    }
}



const searchWithInvalidQRcode = () => {
    try {
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        etbPage.EtbElem().headerLibrary.click();
        console.log('user is trying to search content using invalid QR code');
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
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().EnterQRCodeBox), 40000, "enterQRcodeButton is not available");
        etbPage.EtbElem().EnterQRCodeBox.click();
        browser.sleep(1000);
        etbPage.EtbElem().EnterQRCodeBox.sendKeys('C2H4CD');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().SearchQRCode), 40000, "enterQRcodeInSearchField is not available");
        etbPage.EtbElem().SearchQRCode.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().contentNotAdded), 40000, "contentNotAdded is not available");
        etbPage.EtbElem().contentNotAdded.getText().then(function (actualContent) {
            console.log("Content Present is  :" + actualContent);
            var expectedContent = "did not match any content";
            expect(actualContent).toContain(expectedContent)
            {
                console.log('Content not added yet')
            }
        });
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




const createBookWithEditDetailsFilled = () => {
    var courseName;
    try {
        browser.sleep(1000);
        console.log('User is trying to create Book With Edit Details Filled');
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        console.log('User successfully navigated to the Workspace to create or check');
        console.log('User is trying to create New Book');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseName), 40000, "courseName is not available");
        courseName = "Book A" + faker.randomData().firstname;
        etbPage.EtbElem().courseName.sendKeys(courseName);

        sanityFun.FillBmesWhileCreatingBook();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickUseEditor), 40000, "clickUseEditor is not available");
        etbPage.EtbElem().clickUseEditor.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().newchild), 40000, "Didn't switched to different frame");
        etbPage.EtbElem().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().untitledNameB), 40000, "createBook is not available");
        etbPage.EtbElem().untitledNameB.click();
        etbPage.EtbElem().untitledNameB.clear();
        etbPage.EtbElem().untitledNameB.sendKeys(courseName);
        browser.sleep(1000);
        etbPage.EtbElem().qrCodeRequired.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.sendKeys(cred[14]['Title']);
        console.log('Enter DialCode');
        browser.sleep(1000);
        etbPage.EtbElem().validatedialcodeEnterYes.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveIcon), 40000, "createBook is not available");
        etbPage.EtbElem().saveIcon.click();
        console.log('clicked on Save Icon');
        console.log('User successfully created Book With Edit Details Filled');
        return courseName;

    }
    catch (err) {
        console.log(err);
    }

}

const saveAndSendEdittedBookForReview = () => {
    try {

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sendForReview), 40000, "sendForReview is not available");
        etbPage.EtbElem().sendForReview.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().continueAnyway), 40000, "continueAnyway is not available");
        etbPage.EtbElem().continueAnyway.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickAppIcon), 50000, "clickAppIcon is not available");
        browser.sleep(1000);
        etbPage.EtbElem().clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().checkAppIcon), 40000, "checkAppIcon is not available");
        etbPage.EtbElem().checkAppIcon.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectAppIcon), 40000, "selectAppIcon is not available");
        etbPage.EtbElem().selectAppIcon.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().board), 40000, "board is not available");
        // etbPage.EtbElem().board.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().boardSelect), 40000, "boardSelect is not available");
        // etbPage.EtbElem().boardSelect.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().medium), 40000, "medium is not available");
        // etbPage.EtbElem().medium.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().mediumSelect), 40000, "mediumSelect is not available");
        // etbPage.EtbElem().mediumSelect.click();
        // browser.sleep(1000);
        // browser.executeScript("arguments[0].scrollIntoView();", etbPage.EtbElem().clickclass);
        // etbPage.EtbElem().clickclass.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().SelectClass), 30000, "SelectClass button not available");
        // etbPage.EtbElem().SelectClass.click();
        // etbPage.EtbElem().clicksubject.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectSubject), 30000, "selectSubject button not available");
        // etbPage.EtbElem().selectSubject.click();

        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", etbPage.EtbElem().yearOfCreation);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().yearOfCreation), 40000, "yearOfCreation is not available");
        etbPage.EtbElem().yearOfCreation.click();
        etbPage.EtbElem().yearOfCreation.clear();
        etbPage.EtbElem().yearOfCreation.sendKeys('2020');

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().save), 40000, "save is not available");
        etbPage.EtbElem().save.click();
        browser.sleep(4000);


    }
    catch (err) {
        console.log(err);
    }
}

const reviewInSubmissions = () => {
    try {
        browser.sleep(1000);
        console.log('To verify Book is found in review submission');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().workSpace), 40000, "workSpace is not available");
        etbPage.EtbElem().workSpace.click();
        browser.sleep(1000);
        console.log('Clicked on WorkSpace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().reviewSubmission), 40000, "workSpace is not available");
        etbPage.EtbElem().reviewSubmission.click();
        console.log('Clicked on Review Submission');
        browser.sleep(1000);
        browser.refresh();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().coursename), 40000, "workSpace is not available");
        etbPage.EtbElem().coursename.getText().then(function (value) {
            console.log("coursename :" + value);
            console.log(value + "Content is found in Review Submissions Bucket");
            console.log('Content creator should be able to see the content under Submitted for review section post sending');
        });

    }
    catch (err) {
        console.log(err);
    }

}


const searchInUpForReview = (source) => {
    try {
        browser.sleep(1000);
        console.log('User is trying to create Book With Edit Details Filled');
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        console.log('User is trying to search in Up For Review bucket for ' + source);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().workSpace), 40000, "workSpace is not available");
        etbPage.EtbElem().workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().upForReview), 40000, "upForReview is not available");
        etbPage.EtbElem().upForReview.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchForReview), 40000, "searchForReview is not available");
        // etbPage.EtbElem().searchForReview.click();
        // etbPage.EtbElem().searchForReview.sendKeys(cred[2]['CourseName']);
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchIconUpForReview), 40000, "searchIconUpForReview is not available");
        // etbPage.EtbElem().searchIconUpForReview.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchedContentForPublish), 40000, "searchedContentForPublish is not available");
        etbPage.EtbElem().searchedContentForPublish.click();
        console.log('User should be able to click on Up for review section to review contents');

    }
    catch (err) {
        console.log(err);
    }

}
const validateViewDetailPublishAndSearch = (source) => {
    try {
        browser.sleep(1000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        console.log('User is trying to validate View Detail Publish And Search ' + source);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().viewDetail), 40000, "viewDetail is not available");
        etbPage.EtbElem().viewDetail.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().valueOfMedium), 40000, "valueOfMedium is not available");
        etbPage.EtbElem().valueOfMedium.getText().then(function (medium) {
            console.log("valueOfMedium is  :" + medium);
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().valueOfClass), 40000, "valueOfClass is not available");
        etbPage.EtbElem().valueOfClass.getText().then(function (vClass) {
            console.log("valueOfClass is  :" + vClass);
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().valueOfSubject), 40000, "valueOfSubject is not available");
        etbPage.EtbElem().valueOfSubject.getText().then(function (subject) {
            console.log("valueOfSubject is  :" + subject);
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().valueOfPublisher), 40000, "valueOfPublisher is not available");
        etbPage.EtbElem().valueOfPublisher.getText().then(function (actualPublisher) {
            console.log("valueOfPublisher is  :" + actualPublisher);
            var expectedPublisher = "EKSTEP";
            expect(actualPublisher).not.toContain(expectedPublisher)
            {
                console.log('publisher is not asserted')
            }
            console.log('publisher field is validated : ' + actualPublisher);

        });
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", etbPage.EtbElem().valueOfYearOfCreation);
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().valueOfAuthor), 40000, "valueOfAuthor is not available");
        // etbPage.EtbElem().valueOfAuthor.getText().then(function (actualAuthor) {
        //     console.log("valueOfPublisher is  :" + actualAuthor);
        //     var expectedAuthor = "EKSTEP";
        //     expect(actualAuthor).not.toContain(expectedAuthor)
        //     {
        //         console.log('author is not asserted')
        //     }
        //     console.log('author field is validated : ' + actualAuthor);

        // });
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().valueOfAttributions), 40000, "valueOfAttributions is not available");
        etbPage.EtbElem().valueOfAttributions.getText().then(function (actualAttributions) {
            console.log("valueOfAttributions is  :" + actualAttributions);
            var expectedAttributions = "EKSTEP";
            expect(actualAttributions).not.toContain(expectedAttributions)
            {
                console.log('attributions is not asserted')
            }
            console.log('attributions field is validated :' + actualAttributions);

        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().valueOfCopyright), 40000, "valueOfCopyright is not available");
        etbPage.EtbElem().valueOfCopyright.getText().then(function (actualCopyright) {
            console.log("valueOfCopyright is  :" + actualCopyright);
            var expectedCopyright = "ntptest";
            expect(actualCopyright).toContain(expectedCopyright)
            {
                console.log('copyright is not asserted')
            }
            console.log('copyright field is validated : ' + actualCopyright);

        });
        try {
            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().valueOfYearOfCreation), 40000, "valueOfYearOfCreation is not available");
            etbPage.EtbElem().valueOfYearOfCreation.getText().then(function (actualYearOfCreation) {
                console.log("valueOfYearOfCreation is  :" + actualYearOfCreation);
                var expectedYearOfCreation = "2019";
                expect(actualYearOfCreation).not.toContain(expectedYearOfCreation)
                {
                    console.log('year of creation is not asserted')
                }
                console.log('year of creation field is validated : ' + actualYearOfCreation);

            });


        }
        catch (e) {
            console.log('Handled');

        }
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().closeViewDetailPage), 40000, "closeViewDetailPage is not available");
        etbPage.EtbElem().closeViewDetailPage.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().publishCourse), 40000, "publishCourse is not available");
        etbPage.EtbElem().publishCourse.click();
        browser.sleep(1000);
        etbPage.EtbElem().checkBox.each(function (input) {
            input.click()
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().popupPublishButtons), 40000, "popupPublishButtons is not available");
        etbPage.EtbElem().popupPublishButtons.click();
        browser.sleep(1000);
        browser.switchTo().defaultContent();
        browser.sleep(1000);



    }
    catch (err) {
        console.log(err);
    }

}
const navigateToLibraryAndSearchForBook = (courseName1) => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(2000);
        console.log('User is trying to navigate To Library And Search For Book');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        etbPage.EtbElem().headerLibrary.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        etbPage.EtbElem().filterSearch.click();
        browser.sleep(4000);
        etbPage.EtbElem().filterSearch.sendKeys(courseName1);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchIcon), 40000, "searchIcon is not available");
        etbPage.EtbElem().searchIcon.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.courseCard), 40000, "courseCard is not available");
        content.courseCard.click();
        browser.sleep(30000);


        console.log('User successfully navigated To Library And Search For Book');


    }
    catch (err) {
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


const createBook = () => {
    try {
        browser.sleep(1000);
        console.log('User is trying to create New Book');
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseName), 40000, "courseName is not available");
        etbPage.EtbElem().courseName.sendKeys(cred[2]['CourseName']);
        sanityFun.FillBmesWhileCreatingBook();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
        browser.sleep(1000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.EnterBookTag), 20000, "tag not available");
        // sanity.EnterBookTag.click();
        // browser.sleep(1000);
        // sanity.EnterBookTag.sendKeys('test');
        // browser.sleep(2000);
        //browser.executeScript("arguments[0].scrollIntoView();",sanityPage.SanityElement().courseadditionalCategory);
        // browser.executeScript('window.scrollTo(0,400);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        // browser.sleep(1000);    
        // sanityPage.SanityElement().courseadditionalCategory.click();
        //     browser.sleep(2000);
        //     sanityPage.SanityElement().selectAdditionalCategory.click();
        //     browser.sleep(1000);

        //     browser.executeScript('window.scrollTo(0,1000);').then(function () {
        //         console.log('++++++SCROLLED Down+++++');
        //     });

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
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();
        courseName = "courseA" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);
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
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(6000);

    } catch (err) {
        console.log(err);
    }

}


const limitedSharing = (contentType) => {
    try {
        browser.sleep(2000);
        console.log('User is trying to Limited sharing ' + contentType);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        // etbPage.EtbElem().saveCourse.click();
        // browser.sleep(5000);
        // browser.executeScript("arguments[0].scrollIntoView();", etbPage.EtbElem().untitledNameB);
        // browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().untitledNameB), 40000, "untitledNameB is not available");
        etbPage.EtbElem().untitledNameB.click();
        browser.sleep(1000);
        etbPage.EtbElem().untitledNameB.sendKeys('_ ' + 'Limited Sharing');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        etbPage.EtbElem().saveCourse.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().limitedSharingArrow), 40000, "limitedSharingArrow is not available");
        etbPage.EtbElem().limitedSharingArrow.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickLimitedSharing), 40000, "clickLimitedSharing is not available");
        etbPage.EtbElem().clickLimitedSharing.click();
        console.log('User successfully send to Limited sharing ' + contentType);

    }
    catch (err) {
        console.log(err);
    }

}

const verifyQRCodeField = () => {
    try {
        browser.sleep(2000);
        console.log('User is trying to verify QRCode Filed is Enable or Disabled');
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        console.log('User successfully navigated to the Workspace to create or check');
        console.log('User is trying to create New Book');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseName), 40000, "courseName is not available");
        etbPage.EtbElem().courseName.sendKeys(cred[2]['CourseName']);

        sanityFun.FillBmesWhileCreatingBook();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        browser.sleep(5000);
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickUseEditor), 40000, "clickUseEditor is not available");
        etbPage.EtbElem().clickUseEditor.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().newchild), 40000, "Didn't switched to different frame");
        etbPage.EtbElem().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().untitledNameB), 40000, "createBook is not available");
        etbPage.EtbElem().untitledNameB.click();
        etbPage.EtbElem().untitledNameB.clear();
        etbPage.EtbElem().untitledNameB.sendKeys(cred[2]['CourseName']);

        expect(etbPage.EtbElem().qrCodeFieldNO.isSelected()).toBeTruthy()
        browser.sleep(1000);
        if (etbPage.EtbElem().qrCodeFieldNO.isSelected()) {
            console.log('QRCode Field is Disabled because Qrcode required field is Set to NO');
        }
        else {
            console.log('QRCode Field is Enabled After QrCode Required Field it set to NO');
        }

        etbPage.EtbElem().qrCodeRequired.click();
        browser.sleep(1000);

        expect(etbPage.EtbElem().qrCodeRequired.isEnabled()).toBeTruthy()
        browser.sleep(1000);
        if (etbPage.EtbElem().qrCodeRequired.isEnabled()) {
            console.log('QRCode Field is Enabled because QrCode required field is set to  YES');
        }
        else {
            console.log('QRCode Field is Enabled because QrCode required field is set to  YES');
        }
        etbPage.EtbElem().dialcodeEnter.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.sendKeys(cred[14]['Title']);
        console.log('Enter DialCode');
        browser.sleep(1000);
        etbPage.EtbElem().validatedialcodeEnterYes.click();
        console.log('Succesfully Verifyed that user is able to add QR code in enabled field.');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveIcon), 40000, "createBook is not available");
        etbPage.EtbElem().saveIcon.click();
        // etbPage.EtbElem()s.saveIcon.click();
        console.log('clicked on Save Icon');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().closeEditor1), 40000, "closeEditor1 is not available");
        etbPage.EtbElem().closeEditor1.click();
    }
    catch (err) {
        console.log(err);
    }

}


const addResourceFromExploreSuggestion = () => {

    try {
        browser.sleep(1000);
        console.log('User is trying to create New Book');
        var bookname = "BookA" + faker.randomData().firstname;
        console.log('User successfully navigated to the Workspace to create or check');
        console.log('User is trying to create New Book');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseName), 40000, "courseName is not available");
        etbPage.EtbElem().courseName.sendKeys(bookname);

        sanityFun.FillBmesWhileCreatingBook();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        browser.sleep(1000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickUseEditor), 40000, "clickUseEditor is not available");
        etbPage.EtbElem().clickUseEditor.click();
        browser.sleep(1000);
        console.log('Clicked on Start Creating');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().newchild), 40000, "Didn't switched to different frame");
        etbPage.EtbElem().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().untitledNameB), 40000, "createBook is not available");
        etbPage.EtbElem().untitledNameB.click();
        etbPage.EtbElem().untitledNameB.clear();
        etbPage.EtbElem().untitledNameB.sendKeys(bookname);
        // browser.sleep(3000);
        // etbPage.EtbElem().qrCodeRequired.click();
        // browser.sleep(2000);
        // etbPage.EtbElem().dialcodeEnter.click();
        // browser.sleep(2000);
        // etbPage.EtbElem().dialcodeEnter.sendKeys(cred[14]['Title']);
        // console.log('Enter DialCode');
        // browser.sleep(3000);
        // etbPage.EtbElem().validatedialcodeEnterYes.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().addResource), 40000, "addResource is not available");
        etbPage.EtbElem().addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("pdf");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        // console.log('Click on Proceed button');
        // console.log('User is able to add resource from Find & select resource section');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        etbPage.EtbElem().saveCourse.click();
        browser.sleep(1000);

        etbPage.EtbElem().previewClick.click();
        browser.sleep(1000);
        etbPage.EtbElem().clickPlayButton.click();
        browser.sleep(1000);
        etbPage.EtbElem().navigateToRootFolder.click();



        // browser.sleep(1000);
        //  etbPage.EtbElem().closeEditor1.click();




    } catch (err) {
        console.log(err);
    }

}

const clickFirstBookAndCopyInLibrary = () => {
    try {
        browser.sleep(2000);
        console.log('verifying the library search');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        etbPage.EtbElem().headerLibrary.click();
        console.log('Clicked on Library Section');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        etbPage.EtbElem().filterSearch.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        etbPage.EtbElem().filterSearch.sendKeys('Textbook');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchIcon), 40000, "searchIcon is not available");
        etbPage.EtbElem().searchIcon.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFirstBook), 40000, "clickFirstBook is not available");
        etbPage.EtbElem().clickFirstBook.click();
        console.log('Clicked on FirstBook');
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickCopyInBook), 40000, "clickCopyInBook is not available");
        etbPage.EtbElem().clickCopyInBook.click();
        browser.sleep(2000);
        etbPage.EtbElem().clickCopyInBook.click();
        console.log('Clicked on Copy button');
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        console.log('Editor Displayed Succesfully');
        console.log('Book Copied Successfully');


    }
    catch (err) {
        console.log(err);
    }
}
const addMoreThan4UnitsToCheckTheErrorMessage = () => {
    try {
        browser.sleep(1000);
        console.log('User is adding more than 4 units');
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        console.log('User successfully navigated to the Workspace to create or check');
        console.log('User is trying to create New Book');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseName), 40000, "courseName is not available");
        etbPage.EtbElem().courseName.sendKeys(cred[2]['CourseName']);

        sanityFun.FillBmesWhileCreatingBook();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        browser.sleep(5000);
        console.log('User is clicked on start creating button');
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickUseEditor), 40000, "clickUseEditor is not available");
        etbPage.EtbElem().clickUseEditor.click();
        browser.sleep(1000);
        console.log('Clicked on Start Creating');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().newchild), 40000, "newchild is not available");
        etbPage.EtbElem().newchild.click();
        console.log('User should be able to add child to main unit by clicking on add new unit');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().untitledNameB), 40000, "createBook is not available");
        etbPage.EtbElem().untitledNameB.click();
        browser.sleep(1000);
        etbPage.EtbElem().newchild.click();
        browser.sleep(1000);
        etbPage.EtbElem().newchild.click();
        browser.sleep(1000);
        etbPage.EtbElem().newchild.click();
        browser.sleep(1000);
        etbPage.EtbElem().newchild.click();
        browser.sleep(1000);
        etbPage.EtbElem().newchild.click();
        console.log('User should be able to 4 child unit to 1 main unit each');
        expect(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sorryThisOperationIsNotAllowed)).toBeTruthy
        browser.sleep(1000);
        if (protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sorryThisOperationIsNotAllowed)) {
            console.log('Sorry This Operation Is Not Allowed')
        }
        else {
            console.log('This Operation Is  Allowed')
        }
        console.log('Post click on 4 units, he should get the warning message about adding more unit and he should not be able to add more than that');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        etbPage.EtbElem().saveCourse.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().closeCourseButton), 40000, "saveCourse is not available");
        etbPage.EtbElem().closeCourseButton.click();
        browser.sleep(1000);
    } catch (err) {
        console.log(err);
    }
}

const checkBookInDraftSection = () => {
    var coursename;
    try {
        browser.sleep(2000);
        console.log('User is trying to create Book Check For The Added   Resource');
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseName), 40000, "courseName is not available");
        coursename = "Book A" + faker.randomData().firstname;
        etbPage.EtbElem().courseName.sendKeys(coursename);

        sanityFun.FillBmesWhileCreatingBook();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        console.log('User is clicked on start creating button');
        browser.sleep(5000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickUseEditor), 40000, "clickUseEditor is not available");
        etbPage.EtbElem().clickUseEditor.click();
        browser.sleep(1000);
        console.log('Clicked on Start Creating');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().newchild), 40000, "Didn't switched to different frame");
        etbPage.EtbElem().newchild.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().untitledNameB), 40000, "createBook is not available");
        etbPage.EtbElem().untitledNameB.click();
        etbPage.EtbElem().untitledNameB.clear();
        etbPage.EtbElem().untitledNameB.sendKeys(coursename);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().addResource), 40000, "addResource is not available");
        etbPage.EtbElem().addResource.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectResourceN), 40000, "selectResourceN is not available");
        etbPage.EtbElem().selectResourceN.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().resourcename1), 40000, "resourcename1 is not available");
        etbPage.EtbElem().resourcename1.getText().then(function (name) {
            console.log('Selected Name:' + name);
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().proceedButton), 40000, "proceedButton is not available");
        etbPage.EtbElem().proceedButton.click();
        browser.sleep(1000);
        etbPage.EtbElem().qrCodeRequired.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.sendKeys(cred[28]['CourseName']);
        console.log('Enter DialCode');
        browser.sleep(1000);
        etbPage.EtbElem().validatedialcodeEnterYes.click();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", etbPage.EtbElem().resourcename);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().resourcename), 40000, "proceedButton is not available");
        etbPage.EtbElem().resourcename.getText().then(function (name1) {
            console.log('Selected  Name From Search Box is Shown As:' + name1);
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        etbPage.EtbElem().saveCourse.click();
        console.log('User is successfully save the created book content');
        browser.sleep(6000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().closeEditor1), 40000, "closeEditor1 is not available");
        // etbPage.EtbElem().closeEditor1.click();
        // browser.sleep(6000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().getContentFromDraft), 40000, "getContentFromDraft is not available");
        // etbPage.EtbElem().getContentFromDraft.click();
        console.log('User has verified created Book');
        console.log('User has successfully created Book Check For The Added   Resource');
        return coursename;
    } catch (err) {
        console.log(err);
    }

}

const rejectTheContent = (bookName) => {
    try {
        browser.sleep(1000);
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        console.log('User is trying to reject the content ' + bookName);
        console.log('User is trying to reject the content');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().workSpace), 40000, "workSpace is not available");
        etbPage.EtbElem().workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().upForReview), 40000, "upForReview is not available");
        etbPage.EtbElem().upForReview.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchForReview), 40000, "searchForReview is not available");
        etbPage.EtbElem().searchForReview.click();
        etbPage.EtbElem().searchForReview.sendKeys(bookName);
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchedContentForPublish), 40000, "searchedContentForPublish is not available");
        etbPage.EtbElem().searchedContentForPublish.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickRequestChanges), 40000, "clickRequestChanges is not available");
        etbPage.EtbElem().clickRequestChanges.click();
        etbPage.EtbElem().clickRequestChanges.getText().then(function (request) {
            console.log('Request is  :' + request);

        });
        browser.sleep(1000);
        etbPage.EtbElem().checkBox.each(function (input) {
            input.click()
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().reviewComment), 40000, "reviewComment is not available");
        etbPage.EtbElem().reviewComment.click();
        etbPage.EtbElem().reviewComment.sendKeys('Inappropriate course,Empty Course,Duplicate Course,Not Suitable for Children')
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().requestChangesButton), 40000, "requestChangesButton is not available");
        etbPage.EtbElem().requestChangesButton.click();
        browser.sleep(1000);
        console.log(inputToReject + ' is rejected succesfully')
    }
    catch (err) {
        console.log(err);
    }

}

const editQRCodeAndSubmit = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        console.log('User is trying to open the book from draft  edit and submit the content for reviewing');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().workSpace), 40000, "workSpace is not available");
        etbPage.EtbElem().workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().drafts), 40000, "drafts is not available");
        etbPage.EtbElem().drafts.click();
        browser.refresh();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().getContentFromDraft), 40000, "getContentFromDraft is not available");
        etbPage.EtbElem().getContentFromDraft.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        etbPage.EtbElem().editQRCodeButton.click();
        browser.sleep(1000);
        etbPage.EtbElem().enterQRCode.clear();
        browser.sleep(1000);
        etbPage.EtbElem().qrCodeFieldNO.click();
        console.log('QR Code is removed and Required QR code is changed to No');
        browser.sleep(1000);
        etbPage.EtbElem().qrCodeRequired.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.sendKeys(cred[28]['CourseName']);
        browser.sleep(1000);
        etbPage.EtbElem().validatedialcodeEnterYes.click();
        console.log('Added new QR Code');
        browser.sleep(1000);
        etbPage.EtbElem().addResource.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectExtraResource), 40000, "selectExtraResource is not available");
        etbPage.EtbElem().selectExtraResource.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().proceedButton), 40000, "proceedButton is not available");
        etbPage.EtbElem().proceedButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        etbPage.EtbElem().saveCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sendForReview), 40000, "sendForReview is not available");
        etbPage.EtbElem().sendForReview.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().continueAnyway), 40000, "continueAnyway is not available");
        etbPage.EtbElem().continueAnyway.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().save), 40000, "save is not available");
        etbPage.EtbElem().save.click();
        console.log('Book creator is successfully able to edit and send the book for review')

    }
    catch (err) {
        console.log(err);
    }

}


const publishAndSearch = (source1) => {
    try {
        browser.sleep(1000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        console.log('User is trying to publish and search ' + source1);
        console.log('User is navigating to workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().publishCourseButton), 40000, "publishCourseButton is not available");
        etbPage.EtbElem().publishCourseButton.click();
        console.log('Clicked on PublishCourse Button');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().popupPublishButtons), 40000, "popupPublishButtons is not available");
        etbPage.EtbElem().popupPublishButtons.click();
        browser.sleep(1000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().upForReview))).toBeTruthy()
        console.log('up for review is not displayed')
        browser.sleep(1000);
        console.log(+source1 + 'is published sucessfully');
    }
    catch (err) {
        console.log(err);
    }
}
const publishAndSearch1 = (source1) => {
    try {
        browser.sleep(1000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        console.log('User is trying to publish and search ' + source1);
        console.log('User is navigating to workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().publishCourseButton), 40000, "publishCourseButton is not available");
        etbPage.EtbElem().publishCourseButton.click();
        console.log('Clicked on PublishCourse Button');
        browser.sleep(1000);
        etbPage.EtbElem().checkBox.each(function (input) {
            input.click()
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().popupPublishButtons), 40000, "popupPublishButtons is not available");
        etbPage.EtbElem().popupPublishButtons.click();
        browser.sleep(6000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().upForReview))).toBeTruthy()
        console.log('up for review is not displayed')
        browser.sleep(5000);
        console.log(+source1 + 'is published sucessfully');
    }
    catch (err) {
        console.log(err);
    }
}

const navigateToWorkspaceFeatures = (workspaceVariable) => {
    try {
        browser.sleep(1000);
        console.log('User is trying to navigate to ' + workspaceVariable + ' in Workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().workSpace), 40000, "workSpace is not available");
        etbPage.EtbElem().workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().allMyContent), 40000, "allMyContent is not available");
        etbPage.EtbElem().allMyContent.click();
        browser.refresh();

    }
    catch (err) {
        console.log(err);
    }

}
const searchBookInAllMyContent = (bookName) => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchForReview), 40000, "searchForReview is not available");
        etbPage.EtbElem().searchForReview.click();
        browser.sleep(1000);
        etbPage.EtbElem().searchForReview.sendKeys(bookName);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().deleteButton), 40000, "deleteButton is not available");
        etbPage.EtbElem().deleteButton.click();
        browser.sleep(1000);
        console.log('Clicked on Delete Button');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().yesButtonPopup), 40000, "yesButtonPopup is not available");
        etbPage.EtbElem().yesButtonPopup.click();
        browser.sleep(1000);
        console.log('Clicked on Yes in Delete Dialog Box');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().messageBox), 40000, "messageBox is not available");
        etbPage.EtbElem().messageBox.getText().then(function (message) {
            console.log('Text in the Message box is  :' + message);
        })

    }
    catch (err) {
        console.log(err);
    }

}




const downloadSampleCSVFile = () => {
    try {
        browser.sleep(1000);
        console.log('User is trying to create Book With Edit Details Filled');
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        console.log('User successfully navigated to the Workspace to create or check');
        console.log('User is trying to create New Book');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseName), 40000, "courseName is not available");
        etbPage.EtbElem().courseName.sendKeys(cred[2]['CourseName']);

        sanityFun.FillBmesWhileCreatingBook();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sampleCsvFile), 40000, "SampleCSV is not available");
        etbPage.EtbElem().sampleCsvFile.click();
        browser.sleep(1000);


        var cred = genericFun.readParticularDataFromCSVFile('/home/qualitrix/Downloads/uploadsamplecsvfile.csv', 0, 'Purpose of Content to be linked');
        console.log(cred);

    }
    catch (err) {
        console.log(err);
    }
}


const verifyStatusInDraftSection = () => {
    try {
        browser.sleep(1000);
        console.log('User is trying to open the book from draft  edit and submit the content for reviewing');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().workSpace), 40000, "workSpace is not available");
        etbPage.EtbElem().workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().drafts), 40000, "drafts is not available");
        etbPage.EtbElem().allMyContent.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().showfilter), 40000, "showfilter is not available");
        etbPage.EtbElem().showfilter.click();
        browser.sleep(1000);
        etbPage.EtbElem().clkStatus.click();
        browser.sleep(1000);
        etbPage.EtbElem().clkDraftStatus.click();
        browser.sleep(1000);
        etbPage.EtbElem().clickSameStatus.click();
        browser.sleep(1000);
        etbPage.EtbElem().clkApply.click();
        browser.sleep(3000);
        etbPage.EtbElem().showfilter.click();
        browser.sleep(1000);

        if (expect(etbPage.EtbElem().verifyDraftStatus.isDisplayed()).toBeTruthy()) {
        }

        etbPage.EtbElem().showfilter.click();
        browser.sleep(1000);
        etbPage.EtbElem().clickSameStatus.click();
        browser.sleep(1000);
        etbPage.EtbElem().clkDraftStatus.click();
        browser.sleep(1000);
        etbPage.EtbElem().clkLiveStatus.click();
        browser.sleep(1000);
        etbPage.EtbElem().clickSameStatus.click();
        browser.sleep(1000);
        etbPage.EtbElem().clkApply.click();
        browser.sleep(1000);
        etbPage.EtbElem().showfilter.click();
        browser.sleep(1000);
        if (expect(etbPage.EtbElem().verifyLiveStatus.isDisplayed()).toBeTruthy()) {
        }


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
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectFilterMedium), 40000, "selectFilterMedium is not available");
        content.selectFilterMedium.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickclass), 40000, "clickFilterClass is not available");
        content.clickclass.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.SelectClass), 40000, "selectFilterClass is not available");
        content.SelectClass.click();
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickFilterSubject), 40000, "clickFilterSubject is not available");
        // content.clickFilterSubject.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectFilterSubject), 40000, "selectFilterSubject is not available");
        // content.selectFilterSubject.click();
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
                        //console.log("User successfully verified the Book : " + bookName2);
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
const linkAndDelinkQRcode = () => {
    var courseName;
    try {
        browser.sleep(1000);
        console.log('User is trying to link And Delink QRcode');
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseName), 40000, "courseName is not available");
        courseName = "Book A" + faker.randomData().firstname;
        etbPage.EtbElem().courseName.sendKeys(courseName);

        sanityFun.FillBmesWhileCreatingBook();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().startCreating), 40000, "startCreating is not available");
        etbPage.EtbElem().startCreating.click();
        console.log('User is clicked on start creating button');
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickUseEditor), 40000, "clickUseEditor is not available");
        browser.sleep(1000);
        etbPage.EtbElem().clickUseEditor.click();
        browser.sleep(1000);
        console.log('Clicked on Start Creating');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().newchild), 40000, "Didn't switched to different frame");
        etbPage.EtbElem().newchild.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().untitledNameB), 40000, "createBook is not available");
        etbPage.EtbElem().untitledNameB.click();
        etbPage.EtbElem().untitledNameB.clear();
        etbPage.EtbElem().untitledNameB.sendKeys(courseName);
        browser.sleep(1000);
        etbPage.EtbElem().qrCodeRequired.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.sendKeys(cred[14]['Title']);
        console.log('Enter DialCode');
        browser.sleep(1000);
        etbPage.EtbElem().validatedialcodeEnterYes.click();
        browser.sleep(1000);
        console.log("QR code linked successfully");

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().newchild), 40000, "Didn't switched to different frame");
        etbPage.EtbElem().newchild.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().untitledNameB), 40000, "createBook is not available");
        etbPage.EtbElem().untitledNameB.click();
        etbPage.EtbElem().untitledNameB.clear();
        etbPage.EtbElem().untitledNameB.sendKeys(courseName);
        browser.sleep(1000);
        etbPage.EtbElem().qrCodeRequired.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.click();
        browser.sleep(1000);
        etbPage.EtbElem().dialcodeEnter.sendKeys(cred[14]['Title']);
        console.log('Enter DialCode');
        browser.sleep(1000);
        // etbPage.EtbElem().validatedialcodeEnterYes.click();
        // browser.sleep(1000);
        //console.log("QR code linked successfully");    

        etbPage.EtbElem().validatedialcodeEnterNo.click();
        console.log("QR code Delinked successfully");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        etbPage.EtbElem().saveCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().closeEditor1), 40000, "closeEditor1 is not available");
        etbPage.EtbElem().closeEditor1.click();
        console.log('User successfully linked and delinked QR code')
        return courseName;
    } catch (err) {
        console.log(err);
    }

}
const clickOnWorkspace = () => {
    try {
        browser.sleep(1000);
        console.log('User is trying to navigate to  Workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().workSpace), 40000, "workSpace is not available");
        etbPage.EtbElem().workSpace.click();
        browser.sleep(2000);


    }
    catch (err) {
        console.log(err);
    }

}

const addCollectionInAddResoucePage = (resourceName) => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.addResource), 30000, "addResource not available");
        content.addResource.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        browser.sleep(1000);

        content.resourceSearch.sendKeys(resourceName);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        etbPage.EtbElem().saveCourse.click();
        browser.sleep(6000);
    }
    catch (err) {
        console.error(err);
    }
}
const addCollectionInExploreSuggestion = () => {
    try {
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.addResourceFromExplore), 30000, "addResource FromExplore not available");
        content.addResourceFromExplore.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().saveCourse), 40000, "saveCourse is not available");
        etbPage.EtbElem().saveCourse.click();
        browser.sleep(6000);
    }
    catch (err) {
        console.error(err);
    }
}

const verifyShallowBookInLibrarySection = (ShallowBookName) => {
    try {
        browser.sleep(1000);
        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        etbPage.EtbElem().headerLibrary.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        etbPage.EtbElem().filterSearch.click();
        etbPage.EtbElem().filterSearch.sendKeys(ShallowBookName);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchIcon), 40000, "searchIcon is not available");
        etbPage.EtbElem().searchIcon.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseCard1), 40000, "courseCard1 is not available");

        etbPage.EtbElem().courseCard1.click();

        browser.sleep(1000);
        etbPage.EtbElem().assertShalloBook.getText().then(function (futureMessage) {
            console.log("Content Present is  :" + futureMessage);
            var expectedContent = "Copy as course";
            expect(futureMessage).toContain(expectedContent)
            {
                console.log('ShallBook Verfied Succesfully')
            }
        });


        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterBoard), 40000, "clickFilterBoard is not available");
        // etbPage.EtbElem().clickFilterBoard.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterBoard), 40000, "selectFilterBoard is not available");
        // etbPage.EtbElem().selectFilterBoard.click();
    }
    catch (Exception) {
        console.log('ShallBook  is not present');

    }
}


const verifyLicenceLabelEditPage = () => {
    try {

        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage1.etb().editDetails), 30000, "Edit Detials button not available");
        etbpage1.etb().editDetails.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.continuewButton), 30000, "contuinew button not available");
        // etbv.continuewButton.click();
        browser.sleep(6000);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);

        browser.sleep(1000);
        etbPage.EtbElem().licenseLabelEditPageBook.getText().then(function (futureMessage) {
            console.log("License Content Present is  :" + futureMessage);
            var expectedContent = "By creating any type of content (resources, books, courses etc.) on DIKSHA, you consent to publish it under the Creative Commons License Framework. Please choose the applicable creative commons license you wish to apply to your content.";
            expect(futureMessage).toContain(expectedContent)
            {
                console.log('License Content Displayed in Book Verfied Succesfully')
            }
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.closeEditPopUp), 20000, "closeEditPopUp button not available");
        etbv.closeEditPopUp.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.closeEditor1), 20000, "closeEditor1 button not available");
        etbv.closeEditor1.click();
        browser.sleep(1000);

    } catch (err) {
        console.log(err);
    }
}

const openPublishedpageDownloadQrCodeCsv = () => {
    try {
        console.log("User is trying to  open Published Section And Download QRcode");
        content.published.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage.etb().downloadQRCodeCsv), 20000, "DownloadQR code csv link is not available");
        browser.sleep(2000);
        etbpage.etb().downloadQRCodeCsv.click();
        console.log("QR code csv file downloaded successfully");
    } catch (err) {
        console.error("user failed to open published page and download Qr code csv file")
    }
}

const ApplyFilterInCourseTab = () => {

    try {
        browser.sleep(1000);
        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().linkCourse), 40000, "headerLibrary is not available");
        etbPage.EtbElem().linkCourse.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        // etbPage.EtbElem().filterSearch.click();
        // etbPage.EtbElem().filterSearch.sendKeys('course');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchIcon), 40000, "searchIcon is not available");
        // etbPage.EtbElem().searchIcon.click();

        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilter), 40000, "clickFilterBoard is not available");
        // etbPage.EtbElem().clickFilter.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterBoard), 40000, "clickFilterBoard is not available");
        // etbPage.EtbElem().clickFilterBoard.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterBoard), 40000, "selectFilterBoard is not available");
        // etbPage.EtbElem().selectFilterBoard.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterMedium), 40000, "clickFilterMedium is not available");
        etbPage.EtbElem().clickFilterMedium.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterMedium), 40000, "selectFilterMedium is not available");
        etbPage.EtbElem().selectFilterMedium.click();
        browser.sleep(1000);
        etbPage.EtbElem().clickFilterMedium.click();
        browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterClass), 40000, "clickFilterClass is not available");
        // etbPage.EtbElem().clickFilterClass.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterClass), 40000, "selectFilterClass is not available");
        // etbPage.EtbElem().selectFilterClass.click();
        // browser.sleep(1000);
        // etbPage.EtbElem().clickFilterClass.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterSubject), 40000, "clickFilterSubject is not available");
        // etbPage.EtbElem().clickFilterSubject.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterSubject), 40000, "selectFilterSubject is not available");
        // etbPage.EtbElem().selectFilterSubject.click();
        // browser.sleep(500);
        // etbPage.EtbElem().clickFilterSubject.click();
        browser.sleep(500);
        // $('body').sendKeys(protractor.Key.ESCAPE);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().btnApply), 40000, "btnApply is not available");
        // etbPage.EtbElem().btnApply.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickCourse), 40000, "courseToBeClicked is not available");
        etbPage.EtbElem().clickCourse.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().btnJoinCourse), 40000, "btnJoinCourse is not available");
        expect(etbPage.EtbElem().btnJoinCourse.isDisplayed()).toBeTruthy();
        console.log("User successfully navigated To course And Search For course");

    }




    catch (Exception) {
        console.log('Failed on searching course by applying filters');

    }
}

const sendCopiedBookForReview = () => {
    try {

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

    }
    catch (err) {
        console.log(err);
    }
}
const verifyLicenceLabelInCourseEditPage = () => {
    try {
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage1.etb().editDetails), 30000, "Edit Detials button not available");
        etbpage1.etb().editDetails.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.continuewButton), 30000, "contuinew button not available");
        // etbv.continuewButton.click();
        browser.sleep(6000);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        browser.sleep(1000);
        etbPage.EtbElem().licenseLabelEditPageBook.getText().then(function (futureMessage) {
            console.log("License Content Present is  :" + futureMessage);
            var expectedContent = "I agree that by submitting / publishing this Content, I confirm that this Content complies with the Terms of Use and Content Policy and that I consent to publish it under the Creative Commons Framework. I have made sure that I do not violate copyright or privacy rights of others";
            expect(futureMessage).toContain(expectedContent)
            {
                console.log('License Content Displayed in Book Verfied Succesfully')
            }
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.closeEditPopUp), 20000, "closeEditPopUp button not available");
        etbv.closeEditPopUp.click();
        browser.sleep(2000);
    } catch (err) {
        console.log(err);
    }


}

const CheckJoinButtonOptions = () => {

    try {
        browser.sleep(1000);

        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(tpd.searchInput), 20000, "searchInput not available");
        tpd.searchInput.sendKeys("AutomationCourseContent");
        tpd.searchIcon.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickCourse), 40000, "courseToBeClicked is not available");
        etbPage.EtbElem().clickCourse.click();
        browser.sleep(2000);

        expect(tpd.joinCourse.isDisplayed()).toBeTruthy().then(function () {
            tpd.joinCourse.click();
        })
        browser.sleep(2000);
        tpd.assertCourseloginpopUp.getText().then(function (input) {
            expect(input).toEqual("To access the course you have to log in and join the course")
            console.log("login popup msg is validated during join course as a guest user");
        })
        browser.sleep(2000);
        (tpd.loginPopup).getText().then(function (input) {
            expect(input).toEqual("Login")
            console.log("Login is validated");
            tpd.loginPopup.click();

        })

        browser.sleep(1000);
        //utility.userLoginPopup('public User1');
        //tpd.joinCourse.click();
        //browser.sleep(1000);
        content.userName.sendKeys("usersun@gmail.com");
        browser.sleep(100);
        content.password.sendKeys("password");
        browser.sleep(100);
        wait.waitForElementVisibility(content.logincourseconsume, 20000);
        content.logincourseconsume.click();
        browser.sleep(15000);
        // tpd.startlearningButton.isDisplayed().toBeTruthy();
        // browser.executeScript("arguments[0].scrollIntoView();", tpd.batchDetails);
        // tpd.batchDetails.click();
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        tpd.credits.click();
        browser.sleep(3000);
        expect(tpd.createdBy.isDisplayed()).toBeTruthy().then(function () {
            // browser.executeScript("arguments[0].scrollIntoView();", tpd.createdBy);
            (tpd.createdBy.getText()).then(function (input) {
                console.log(input);
                browser.sleep(1000);
            })
        })
        browser.sleep(2000);
       
        tpd.createdByname.getText().then(function (input1) {
            console.log("created by" + input1);
        })
    }
    catch (Exception) {
        console.log('Failed on searching course by applying filters');
    }
}

const filterResultForGuestUser = () => {
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
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterBoard), 40000, "clickFilterBoard is not available");
        etbPage.EtbElem().clickFilterBoard.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterBoard), 40000, "selectFilterBoard is not available");
        etbPage.EtbElem().selectFilterBoard.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterMedium), 40000, "clickFilterMedium is not available");
        etbPage.EtbElem().clickFilterMedium.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterMedium), 40000, "selectFilterMedium is not available");
        etbPage.EtbElem().selectFilterMedium.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterClass), 40000, "clickFilterClass is not available");
        etbPage.EtbElem().clickFilterClass.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterClass), 40000, "selectFilterClass is not available");
        etbPage.EtbElem().selectFilterClass.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterSubject), 40000, "clickFilterSubject is not available");
        etbPage.EtbElem().clickFilterSubject.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().selectFilterSubject), 40000, "selectFilterSubject is not available");
        etbPage.EtbElem().selectFilterSubject.click();
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
                        //console.log("User successfully verified the Book : " + bookName2);
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

const verifyOnlyClassFilter = () => {
    try {
        browser.sleep(1000);
        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        etbPage.EtbElem().headerLibrary.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        etbPage.EtbElem().filterSearch.click();
        etbPage.EtbElem().filterSearch.sendKeys('Textbook');
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.searchIcon), 40000, "searchIcon is not available");
        sanity.searchIcon.click();

        browser.sleep(6000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickclass), 40000, "clickFilterClass is not available");
        content.clickclass.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.SelectClass), 40000, "selectFilterClass is not available");
        content.SelectClass.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        });

        expect(protractor.ExpectedConditions.visibilityOf(resov.courseToBeClicked)).toBeTruthy()
        browser.sleep(1000);
    }
    catch (Exception) {
        console.log('Failed on searching library by applying filters');

    }

}

const searchContentInExplorePage = (Consume) => {
    try {
        browser.sleep(1000);
        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        etbPage.EtbElem().headerLibrary.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        etbPage.EtbElem().filterSearch.click();
        etbPage.EtbElem().filterSearch.sendKeys(Consume);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().searchIcon), 40000, "searchIcon is not available");
        etbPage.EtbElem().searchIcon.click();

        browser.sleep(4000);



        expect(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseToBeClicked)).toBeTruthy()
        browser.sleep(1000);

        etbPage.EtbElem().filterSearch.click();
        etbPage.EtbElem().filterSearch.clear();
        browser.sleep(1000);


    }
    catch (Exception) {
        console.log('Failed on searching library by applying filters');

    }

}

const boardValueForTvClassAndDigitTxtBook = () => {
    try {
        browser.sleep(1000);
        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        etbPage.EtbElem().headerLibrary.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clickFilterBoard1), 40000, "clickFilterBoard is not available");
        etbPage.EtbElem().clickFilterBoard1.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sltFilterBoard2), 40000, "selectFilterBoard is not available");
        etbPage.EtbElem().sltFilterBoard2.click();
        browser.sleep(2000);

        //var BoardValue=etbPage.EtbElem().fetchBoardValue.getText();
        expect(BoardValue.getText()).toEqual('IGOT-Health');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkTVClasses), 40000, "clkTVClasses is not available");
        etbPage.EtbElem().clkTVClasses.click();
        browser.sleep(3000);
        expect(BoardValue.getText()).toEqual('IGOT-Health');

        browser.sleep(1000);
    }
    catch (Exception) {
        console.log('Failed on veriyfing Board Value');

    }
}

const multiselectForAllTabs = () => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkBoardDdAllTabs), 40000, "clickFilterBoard is not available");
        etbPage.EtbElem().clkBoardDdAllTabs.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sltBoardDdAllTabs), 40000, "selectFilterBoard is not available");
        etbPage.EtbElem().sltBoardDdAllTabs.click();
        browser.sleep(2000);

        expect(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseToBeClicked)).toBeTruthy()
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkMediumDdAllTabs), 40000, "clickFilterMedium is not available");
        etbPage.EtbElem().clkMediumDdAllTabs.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sltMediumDdAllTabs), 40000, "selectFilterMedium is not available");
        etbPage.EtbElem().sltMediumDdAllTabs.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkMediumDdAllTabs), 40000, "clickFilterMedium is not available");
        etbPage.EtbElem().clkMediumDdAllTabs.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sltMedium2DdAllTabs), 40000, "selectFilterMedium is not available");
        etbPage.EtbElem().sltMedium2DdAllTabs.click();
        browser.sleep(2000);


        expect(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseToBeClicked)).toBeTruthy()
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkClassDdAllTabs), 40000, "clickFilterClass is not available");
        etbPage.EtbElem().clkClassDdAllTabs.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sltClassDdAllTabs), 40000, "selectFilterClass is not available");
        etbPage.EtbElem().sltClassDdAllTabs.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkClassDdAllTabs), 40000, "clickFilterClass is not available");
        etbPage.EtbElem().clkClassDdAllTabs.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sltClass2DdAllTabs), 40000, "selectFilterClass is not available");
        etbPage.EtbElem().sltClass2DdAllTabs.click();
        browser.sleep(2000);


        expect(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseToBeClicked)).toBeTruthy()
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkSubjectDdAllTabs), 40000, "clickFilterSubject is not available");
        etbPage.EtbElem().clkSubjectDdAllTabs.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().sltSubjectDdAllTabs), 40000, "selectFilterSubject is not available");
        etbPage.EtbElem().sltSubjectDdAllTabs.click();

        expect(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().courseToBeClicked)).toBeTruthy()
        browser.sleep(1000);

        // browser.sleep(1000);
        // browser.sleep(1000);
    }
    catch (Exception) {
        console.log('Failed on veriyfing Board Value');

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
const verifyPublishedAndSubjectBy = () => {
    try {
        browser.sleep(1000);
        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        etbPage.EtbElem().headerLibrary.click();

        browser.sleep(3000);
        var subjectNoDefDD = etbPage.EtbElem().subjectNoDefDD.getText();
        expect(subjectNoDefDD.getText()).toEqual('Select Subject');
        browser.sleep(1000);

        var PublishedDD = etbPage.EtbElem().PublishedDD.getText();
        expect(PublishedDD.getText()).toEqual('Select Published By');
        browser.sleep(1000);


        browser.sleep(1000);
    }
    catch (Exception) {
        console.log('Failed on veriyfing Board Value');

    }
}
const contentInSubjectWiseInAllTabs = () => {
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


        expect(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().contentInSubjectWise)).toBeTruthy()



        browser.sleep(1000);
    }
    catch (Exception) {
        console.log('Failed on veriyfing contentInSubjectWise in ALLTabs');

    }
}
const verifDefaultValueInDigiTxtAndTVClass = () => {
    try {
        browser.sleep(1000);
        console.log('verifying the library search by applying filters');
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        etbPage.EtbElem().headerLibrary.click();



        var defaultValueCBSEDD = etbPage.EtbElem().defaultValueCBSEDD.getText();
        expect(defaultValueCBSEDD.getText()).toEqual('CBSE/NCERT');

        var defaultValueEnglish = etbPage.EtbElem().defaultValueEnglish.getText();
        expect(defaultValueEnglish.getText()).toEqual('English');

        var defaultValueClass = etbPage.EtbElem().defaultValueClass.getText();
        expect(defaultValueClass.getText()).toEqual('Class 1');


        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkTVClasses), 40000, "clkTVClasses is not available");
        etbPage.EtbElem().clkTVClasses.click();
        browser.sleep(3000);

        expect(defaultValueCBSEDD.getText()).toEqual('CBSE/NCERT');
        expect(defaultValueEnglish.getText()).toEqual('English');
        expect(defaultValueClass.getText()).toEqual('Class 1');


        browser.sleep(1000);

    }
    catch (Exception) {
        console.log('Failed on verifyNoDefaultValuSltinFilter');

    }
}
const contentInSubjectWiseIncourseTab = () => {
    try {
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(tpd.courses), 40000, "tpd.courses is not available");
        tpd.courses.click();
        browser.sleep(3000);
        expect(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().CoursecontentInSubjectWise)).toBeTruthy();

        browser.sleep(1000);
    }
    catch (Exception) {
        console.log('Failed on veriyfing contentInSubjectWise in CourseTabs');

    }


}
const verifyCountWithState = () => {
    try {
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown is not available");
        content.headerDropdown.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkAdminDashBoard), 20000, "headerDropdown is not available");
        etbPage.EtbElem().clkAdminDashBoard.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().clkFirtReport), 20000, "headerDropdown is not available");
        etbPage.EtbElem().clkFirtReport.click();
        browser.sleep(3000);


        expect(protractor.ExpectedConditions.visibilityOf(etbPage.EtbElem().veriryCanvas)).toBeTruthy()




        browser.sleep(1000);
    }
    catch (Exception) {
        console.log('Failed on veriyfing verifyCountWithState');

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
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('Failed on searching library by applying filters');

    }

}


const verifyMCSBookPostSearch = () => {
    try {
        sanityFun.verifyFilterscreatingBook();
    }
    catch (err) {
        console.log(' User not able to create book');
    }
}
const verifyUserAccessLiscenceTerms = () => {
    try {
        console.log('Verify User is able to access Liscence Terms Section')
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage1.etb().GuestHeaderDropDown), 50000, "guest drop down is not available");
        etbpage1.etb().GuestHeaderDropDown.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage1.etb().themeSwitch), 40000, "Theme is not switchable");
        etbpage1.etb().themeSwitch.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage1.etb().digitalTextBook), 50000, "Digital Text book is not available");
        etbpage1.etb().digitalTextBook.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage1.etb().openBook), 50000, "Book not available");
        etbpage1.etb().openBook.click();
        browser.sleep(3000);
        etbpage1.etb().liscenceTerms.then(function (PopupText) {
            expect(PopupText).toEqual('Credits And Licence Info')
        });
        etbpage1.etb().liscenceTerms.click();
        console.log('User is able to access Liscence Terms Section');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbpage1.etb().liscenceTerms), 50000, "Book not available");
        // etbpage1.etb().liscenceTerms.click();
        // browser.sleep(3000
    }
    catch (err) {
        console.log('User not able to access Liscence Terms Section');
    }
}

const userLoginPopup = (roleName) => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '1', roleName);
        browser.sleep(4000);
        wait.waitForElementVisibility(content.userName, 20000);
        content.userName.sendKeys(cred[0]['Username']);
        browser.sleep(100);
        content.password.sendKeys(cred[0]['Password']);
        browser.sleep(100);
        content.login.click();
        browser.sleep(3000);

    } catch (Err) {
        console.error("Failed to user login, " + Err);
    }

}

const filtersInAllTab = () => {
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
    }
    catch (Exception) {
        console.log('Failed');
    }
}


const validateFiltersInAllTheTabs = () => {
    
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkAllTabs, 20000, "click all tabs not loaded");
        resov.clkAllTabs.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkBoardDdAllTabs), 40000, "clickFilterBoard is not available");
        resov.clkBoardDdAllTabs.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltBoardDdAllTabs), 40000, "selectFilterBoard is not available");
        resov.sltBoardDdAllTabs.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkMediumDdAllTabs), 40000, "clickFilterMedium is not available");
        resov.clkMediumDdAllTabs.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltMediumDdAllTabs), 40000, "selectFilterMedium is not available");
        resov.sltMediumDdAllTabs.click();
        browser.sleep(2000);

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkClassDdAllTabs), 40000, "clickFilterClass is not available");
        resov.clkClassDdAllTabs.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltClassDdAllTabs), 40000, "selectFilterClass is not available");
        resov.sltClassDdAllTabs.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkDigitalTxtBooks), 40000, "digital textbook is not available");
        resov.clkDigitalTxtBooks.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.clkAllTabs, 20000, "click all tabs not loaded");
        resov.clkAllTabs.click();
        browser.sleep(3000);

        resov.assertBoard.getText().then(function(input){
            
            console.log(input);
            (input).includes("CBSE/NCERT")
        })
        browser.sleep(2000);
        resov.assertMedium.getText().then(function(input){
          
            console.log(input);
            (input).includes("Assamese");
        })
        browser.sleep(2000);
        resov.assertClass.getText().then(function(input){
            
            console.log(input);
            (input).includes("Kg");
        })

    }
    catch (Exception) {
        console.log('Failed');
    }
}



const validateregionallanguageSelection = () => {
    
    try {
        browser.sleep(3000);
        wait.waitForElementVisibility(resov.clkAllTabs, 20000, "click all tabs not loaded");
        resov.clkAllTabs.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkBoardDdAllTabs), 40000, "clickFilterBoard is not available");
        resov.clkBoardDdAllTabs.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltBoardDdAllTabs), 40000, "selectFilterBoard is not available");
        resov.sltBoardDdAllTabs.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkMediumDdAllTabs), 40000, "clickFilterMedium is not available");
        resov.clkMediumDdAllTabs.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltMediumDdAllTabs), 40000, "selectFilterMedium is not available");
        resov.sltMediumDdAllTabs.click();
        browser.sleep(2000);

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkClassDdAllTabs), 40000, "clickFilterClass is not available");
        resov.clkClassDdAllTabs.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.sltClassDdAllTabs), 40000, "selectFilterClass is not available");
        resov.sltClassDdAllTabs.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.clkDigitalTxtBooks), 40000, "digital textbook is not available");
        resov.clkDigitalTxtBooks.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.clkAllTabs, 20000, "click all tabs not loaded");
        resov.clkAllTabs.click();
        browser.sleep(3000);

        resov.assertBoard.getText().then(function(input){
            
            console.log(input);
            (input).includes("CBSE/NCERT")
        })
        browser.sleep(2000);
        resov.assertMedium.getText().then(function(input){
          
            console.log(input);
            (input).includes("Assamese");
        })
        browser.sleep(2000);
        resov.assertClass.getText().then(function(input){
            
            console.log(input);
            (input).includes("Kg");
        })

    }
    catch (Exception) {
        console.log('Failed');
    }
}

module.exports = {
    navigateToWorkspace,
    checkForDisabledAndEnabled,
    verifyStatusInDraftSection,
    addCollaboratorForBook,
    downloadSampleCSVFile,
    navigateToWorkspace1,
    editTextBookInCollaboratorBucketAndVerify,
    saveAndSendBookForReview,
    editFormEditals,
    searchWithQRcode,
    searchWithInvalidQRcode,
    createBookWithEditDetailsFilled,
    saveAndSendEdittedBookForReview,
    reviewInSubmissions,
    searchInUpForReview,
    validateViewDetailPublishAndSearch,
    navigateToLibraryAndSearchForBook,
    createBook,
    limitedSharing,
    verifyQRCodeField,
    addResourceFromExploreSuggestion,
    clickFirstBookAndCopyInLibrary,
    addMoreThan4UnitsToCheckTheErrorMessage,
    checkBookInDraftSection,
    rejectTheContent,
    editQRCodeAndSubmit,
    publishAndSearch,
    navigateToWorkspaceFeatures,
    searchBookInAllMyContent,
    publishAndSearch1,
    librarysearchFilter,
    linkAndDelinkQRcode,
    clickOnWorkspace,
    addCollectionInAddResoucePage,
    addCollectionInExploreSuggestion,
    verifyShallowBookInLibrarySection,
    verifyLicenceLabelEditPage,
    openPublishedpageDownloadQrCodeCsv,
    ApplyFilterInCourseTab,
    sendCopiedBookForReview,
    verifyLicenceLabelInCourseEditPage,
    CheckJoinButtonOptions,
    filterResultForGuestUser,
    verifyOnlyClassFilter,
    searchContentInExplorePage,
    boardValueForTvClassAndDigitTxtBook,
    multiselectForAllTabs,
    verifyNoDefaultValuSltinFilter,
    verifyPublishedAndSubjectBy,
    contentInSubjectWiseInAllTabs,
    verifDefaultValueInDigiTxtAndTVClass,
    contentInSubjectWiseIncourseTab,
    verifyCountWithState,
    TVClassSearch,
    verifyUserAccessLiscenceTerms,
    verifyMCSBookPostSearch,
    publishTheBookFromUpForReview,
    userLoginPopup,
    filtersInAllTab,
    validateFiltersInAllTheTabs,
}
