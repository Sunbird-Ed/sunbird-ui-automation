const { browser, protractor } = require("protractor");
const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
const wait = require(protractor.basePath + '/helper/waiters.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
var etbv = etbpage.etb();
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var driver = browser.driver;
var frme = by.tagName('iframe');
var san = sanityPage.SanityElement();
var sanity = sanityPage.SanityElement();
 const vdnpage = require(protractor.basePath + '/test/pages/VDNPage/VDNPage.po.js');
 var vdn = vdnpage.VDNPage();
const vdnrpage = require(protractor.basePath + '/test/pages/VDNPage/VDNReg.po.js');
var vdn1 = vdnrpage.VDNReg();
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
var nominationEndDate = utility.nominationEndDate();
var shortlistEndDate = utility.shortlistEndDate();
var contributionEndDate = utility.contributionEndDate();
var projectEndDate = utility.projectEndDate();
var selectPastDate = utility.selectPastDate();

const utilityFun = require(protractor.basePath + '/test/utility/utilityFunctions.js');



const createProjectWithDigitalTextBook = () => {
   
    wait.waitForElementVisibility(vdn.selQuestionSet, 30000, "Practice Question Set is not available");
    vdn.selQuestionSet.click();


    wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
    vdn.selectContentType.click();
    
    wait.waitForElementVisibility(vdn.selectTargetCollection, 30000, "Target Collection dropDown is not available");
    vdn.selectTargetCollection.click();
 
    wait.waitForElementVisibility(vdn.digitalTextBook, 30000, "Digital Textbook Option is not available");
    vdn.digitalTextBook.click();
      
    wait.waitForElementVisibility(vdn1.filterBoard, 30000, "Board Option is not available");
    vdn1.filterBoard.click();

    wait.waitForElementVisibility(vdn1.filterCBSE, 30000, "CBSE Option is not available");
    vdn1.filterCBSE.click();
    
    wait.waitForElementVisibility(vdn1.filterMedium, 30000, "Medium Option is not available");
    vdn1.filterMedium.click();

    wait.waitForElementVisibility(vdn1.filterEnglish, 30000, "Medium Option is not available");
    vdn1.filterEnglish.click();

    wait.waitForElementVisibility(vdn1.filterClass, 30000, "Medium Option is not available");
    vdn1.filterClass.click();

    wait.waitForElementVisibility(vdn1.filterClas4, 30000, "Medium Option is not available");
    vdn1.filterClass4.click();

    wait.waitForElementVisibility(vdn1.filterSubject, 30000, "Medium Option is not available");
    vdn1.filterSubject.click();

    wait.waitForElementVisibility(vdn1.filterSubEvs, 30000, "Medium Option is not available");
    vdn1.filterSubEvs.click();

    wait.waitForElementVisibility(vdn1.filterApply, 30000, "Medium Option is not available");
    vdn1.filterApply.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstTextBook), 20000, "Text Book Is Not Listed ");
    vdn.selectFirstTextBook.click();
    browser.sleep(10000);
        
       wait.waitForElementVisibility(vdn.btnPublishProject, 30000, "Publish Button is not available");
       vdn.btnPublishProject.click();
       
       wait.waitForElementVisibility(vdn.btnYes, 30000, "Button Yes is not available");
       vdn.btnYes.click();


    
}


const createProjectWith100DigitalTextBook = () => {

    browser.sleep(1000);
   
    wait.waitForElementVisibility(vdn.selQuestionSet, 30000, "Practice Question Set is not available");
    vdn.selQuestionSet.click();


    wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
    vdn.selectContentType.click();
    
    wait.waitForElementVisibility(vdn.selectTargetCollection, 30000, "Target Collection dropDown is not available");
    vdn.selectTargetCollection.click();
 
    wait.waitForElementVisibility(vdn.digitalTextBook, 30000, "Digital Textbook Option is not available");
    vdn.digitalTextBook.click();
       

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "Select Framework Dropdown is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCBSE), 20000, "Select Framework Option2 is not available");
        // vdn.selectCBSE.click();
        // browser.sleep(3000);

        
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
            
        });
        browser.sleep(1000);
       for(i=1;i<=100;i++)
       {

    //     wait.waitForElementVisibility(vdn1.select100TextBook[i], 30000, "Text Books not available");
    // //    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.select100TextBook), 20000, "Text Book Is Not Listed ");
    //     vdn1.select100TextBook[i].click();
    //     browser.sleep(500);
    let var1 = "(//input[@name='checkitem'])[";
    let var2 = i;
    let var3 = "]";
    //var var1 = element(by.xpath("(//input[@name='checkitem'])[1]"));
    var textbook100 = element(by.xpath(var1 + var2 + var3));
    
    textbook100.click();

       }

        
       wait.waitForElementVisibility(vdn.btnPublishProject, 30000, "Publish Button is not available");
       vdn.btnPublishProject.click();
       
       wait.waitForElementVisibility(vdn.btnYes, 30000, "Button Yes is not available");
       vdn.btnYes.click();


    
}

const verifyPreApprovedUserNominationIsDisplayedInNominationsTab = (projectName) => {
    try {
        browser.sleep(4000);
        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";

        browser.sleep(10000);
        var assertProjInMyProjTab = element(by.xpath(var1 + var2 + var3));

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        expect(assertProjInMyProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        })

        browser.sleep(5000);
        assertProjInMyProjTab.click();
        browser.sleep(10000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationTab), 20000, "Nomination Tab is not Displayed");
        vdn.assertNominationTab.click();

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        (vdn.assertPreApproved.getText()).then(function (input) {
            expect((input).includes("Sunrise")).toBe(true);
            console.log("Contribution organisation name Is same as sourcing org");
        });

        (vdn.assertPreApproved.getText()).then(function (input) {
            expect((input).includes("Approved")).toBe(true);
            console.log("Pre-approved nomination displayed in the Nomination tab with approved status");
        });
    }
    catch (Exception) {
        console.log('Created Project Is Not Available In My Project Tab For Contributors')
    }
}
const createProjectWithAllContentTypesandCourse = () => {
    var projectName;
    try {
        console.log("Admin User is trying to create a Project")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt1), 20000, "Options Is Not Available");
        vdn.selectOpt1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);

        projectName = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName);
        browser.sleep(1000);

        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
        vdn.enterProjectDesc.sendKeys(projectDesc);
        browser.sleep(1000);
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.skipReviewBtn), 20000, "Skip Review Checkbox Is Not Present");
        vdn.skipReviewBtn.click();
        browser.sleep(2000);

       

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
        vdn.nominationEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
        vdn.nominationEndDate.click();
        console.log(nominationEndDate)
        vdn.nominationEndDate.sendKeys(nominationEndDate);
        console.log("Nomination End Date Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date Is Not Present");
        vdn.shortlistEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
        vdn.shortlistEndDate.click();
        vdn.shortlistEndDate.sendKeys(utility.shortlistEndDate());
        console.log("Shortlist End Date Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Is Not Present");
        vdn.contributionEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
        vdn.contributionEndDate.click();
        vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
        console.log("Contribution End Date Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Is Not Present");
        vdn.projectEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
        vdn.projectEndDate.click();
        vdn.projectEndDate.sendKeys(utility.projectEndDate());
        console.log("Project End Date Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
        vdn.btnNext.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
        vdn.selectContentType.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selQuestionSet), 20000, "Practice Question Set is not available");
        vdn.selQuestionSet.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.courseAssessment), 20000, "Course Assessment is not available");
        vdn.courseAssessment.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
        vdn.seleTextBook.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selExplainitionContent), 20000, "Explainition Content is not available");
        vdn.selExplainitionContent.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selLearningResource), 20000, "Learning Resource is not available");
        vdn.selLearningResource.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selOldQuestionSet), 20000, "Old Practice Question Set is not available");
        vdn.selOldQuestionSet.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selTeacherResource), 20000, "Teacher Resource is not available");
        vdn.selTeacherResource.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentTypeDropdown), 20000, "Content Type dropDown is not available");
        vdn.clkContentTypeDropdown.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection dropDown is not available");
        vdn.selectTargetCollection.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.digitalTextBook), 20000, "Digital Textbook Option is not available");
        vdn.digitalTextBook.click();
        browser.sleep(1000);


        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstTextBook), 20000, "Text Book Is Not Listed ");
        vdn.selectFirstTextBook.click();
        browser.sleep(10000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        browser.sleep(1000);

       

        browser.sleep(3000);

    } catch (err) {
        console.log(err);
    }
    return projectName;
}
const verifySourcingOrgAdminIsAbleToModifyProjectDates = (projectName) => {
    
    console.log("verify SourcingorgAdmin able to see below Tabs in Myprojects.spec.js")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt1), 20000, "Options Is Not Available");
        vdn.selectOpt1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertDetailsPage), 20000, "Details Page is not displayed");
        expect(vdn.assertDetailsPage.isPresent()).toBe(true).then(function () {
            console.log(" Details ");
        })
        browser.sleep(1000);


        projectName = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName);
        browser.sleep(1000);

        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
        vdn.enterProjectDesc.sendKeys(projectDesc);
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
        vdn.nominationEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
        vdn.nominationEndDate.click();
        vdn.nominationEndDate.sendKeys(utility.nominationEndDate());
        console.log("Nomination End Date Is Selected");


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date Is Not Present");
        vdn.shortlistEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
        vdn.shortlistEndDate.click();
        vdn.shortlistEndDate.sendKeys(utility.shortlistEndDate());
        console.log("Shortlist End Date Is Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Is Not Present");
        vdn.contributionEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
        vdn.contributionEndDate.click();
        vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
        console.log("Contributor End Date Is Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Is Not Present");
        vdn.projectEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
        vdn.projectEndDate.click();
        vdn.projectEndDate.sendKeys(utility.projectEndDate());
        console.log("Project End Date Is Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
        vdn.btnNext.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
        vdn.selectContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
        vdn.seleTextBook.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
        vdn.selectContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection dropDown is not available");
        vdn.selectTargetCollection.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.digitalTextBook), 20000, "Digital Textbook Option is not available");
        vdn.digitalTextBook.click();
        browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.digitalTextBook), 20000, "Digital Textbook Option is not available");
        vdn.digitalTextBook.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.projectsavedraft), 20000, "Save as Draft Option is not available");
        vdn1.projectsavedraft.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Project Tab Not Available");
        vdn.clkMyProject.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));



        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.assertStatusDraft), 20000, "Draft status is not displayed");
        expect(vdn1.assertStatusDraft.isPresent()).toBe(true).then(function () {
            console.log(" Draft ");
        })
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.editDraft), 20000, "Edit Draft is Not Available");
        vdn1.editDraft.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
        vdn.btnNext.click();
        browser.sleep(1000); 

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection dropDown is not available");
        vdn.selectTargetCollection.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.digitalTextBook), 20000, "Digital Textbook Option is not available");
        vdn.digitalTextBook.click();
        browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstTextBook), 20000, "Text Book Is Not Listed ");
        vdn.selectFirstTextBook.click();
        browser.sleep(10000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.publishButton), 20000, "Publish button is not Present");
        vdn.publishButton.click();
        browser.sleep(4000); 

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        browser.sleep(3000);

        var assertProjInMyProjTab = element(by.xpath(var1 + var2 + var3));

        browser.wait(protractor.ExpectedConditions.visibilityOf(assertProjInMyProjTab), 20000, "Project is not displayed");
        expect(assertProjInMyProjTab.isPresent()).toBe(true).then(function () {
            console.log(assertProjInMyProjTab);
        })
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.countTextbook), 20000, "Count of textbook is not Present");
        vdn1.countTextbook.click();
        browser.sleep(1000);
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.assertcontentTypeshdr), 20000, "contenttypes is not displayed");
        expect(vdn1.assertcontentTypeshdr.isPresent()).toBe(true).then(function () {
            console.log("Content Type(s)");
        })
        browser.sleep(1000);
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.assertmgs), 20000, "MGS is not displayed");
        expect(vdn1.assertmgs.isPresent()).toBe(true).then(function () {
            console.log("Medium, Class, Subject");
        })
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.assertProjectdates), 20000, "MGS is not displayed");
        expect(vdn1.assertProjectdates.isPresent()).toBe(true).then(function () {
            console.log("Project Dates");
        })
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.assertOpen), 20000, "Open button is not displayed");
        expect(vdn1.assertOpen.isPresent()).toBe(true).then(function () {
            console.log(" Open ");
        })

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.assertModify), 20000, "Modify button is not displayed");
        expect(vdn1.assertModify.isPresent()).toBe(true).then(function () {
            console.log(" Modify ");
        })


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.assertStatusLive), 20000, "Live status is not displayed");
        expect(vdn1.assertStatusLive.isPresent()).toBe(true).then(function () {
            console.log(" Live ");
        })
        browser.sleep(1000);

    }

    const createProjectWithDefinedSetOfOrgAndIndividualContributorsskipDisable = () => {
        var projectName;
        
            console.log("user is trying to create a Project")
            browser.sleep(1000);
            wait.waitForElementVisibility(vdn.clkMyProject, 30000, "My Prject Is Not Present");
         //   browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
            vdn.clkMyProject.click();
            
            wait.waitForElementVisibility(vdn.btnCreation, 30000, "Create Project Button Is Not Present");
           // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
            vdn.btnCreation.click();
          
    
            wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Options Is Not Available");
           // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt1), 20000, "Options Is Not Available");
            vdn.selectOpt1.click();
          
            wait.waitForElementVisibility(vdn.btnClkNext, 30000, "Next Button Is Not Present");
           // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
            vdn.btnClkNext.click();
            
    
            projectName = "Auto" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Enter Project Name Field Is Not Present");
            vdn.enterProjectName.click();
            vdn.enterProjectName.sendKeys(projectName);
            browser.sleep(1000);
    
            projectDesc = "Automation" + faker.randomData().firstname;
           // wait.waitForElementVisibility(vdn.enterProjectDesc, 30000, "Enter Project Description Field Is Not Present");
         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Enter Project Description Field Is Not Present");
            vdn.enterProjectDesc.sendKeys(projectDesc);
            
            wait.waitForElementVisibility(vdn.fromOrgOnly, 30000, "Org Only Option Not Available");
           // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
            vdn.fromOrgOnly.click();
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromSetOfSelContributors), 20000, "From Set Of Contributors Not Available");
            vdn.fromSetOfSelContributors.click();
            browser.sleep(2000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelContributors), 20000, "Select Contributors Link Not Available");
            vdn.clkSelContributors.click();
            browser.sleep(3000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.dropDownContrType), 20000, "Contributor Type Dropdown Not Available");
            vdn.dropDownContrType.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selIndividualType), 20000, "Individual Contributor Type Is Not Available");
            vdn.selIndividualType.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterNameOrOrg), 20000, "Eenter Name or Org Field Not Available");
            vdn.enterNameOrOrg.click();
            vdn.enterNameOrOrg.sendKeys('Pass123'); 
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.searchBtn), 20000, "Search Button Not Available");
            vdn.searchBtn.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSearchedContributer), 20000, "Search Contributor Not Available");
            vdn.selSearchedContributer.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSave), 20000, "Save Button Not Available");
            vdn.btnSave.click();
            browser.sleep(2000);
    
            browser.executeScript('window.scrollTo(0,500);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContributersAdded), 20000, "Contributors Not Added");
            expect(vdn.assertContributersAdded.isPresent()).toBe(true).then(function () {
                console.log("Contributors Added From The Link Successfully ");
            })
    
            browser.executeScript('window.scrollTo(0,800);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Field Is Not Present");
            vdn.contributionEndDate.click();
            
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Field is not available");
            vdn.contributionEndDate.click();
            vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
            console.log("Select Contribution End Date");
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Field Is Not Present");
            vdn.projectEndDate.click();
            
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Field is not available");
            vdn.projectEndDate.click();
            vdn.projectEndDate.sendKeys(utility.projectEndDate());
            console.log("Select Project End Date Field");
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
            vdn.btnNext.click();
           
            browser.executeScript('window.scrollTo(0,0);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.courseAssessment), 20000, "Course Assessment is not available");
            vdn.courseAssessment.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection dropDown is not available");
            vdn.selectTargetCollection.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.Course), 20000, "Course Option is not available");
            vdn.Course.click();
            browser.sleep(1000);   
            browser.executeScript('window.scrollTo(0,400);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstCollection1), 20000, "Course Is Not Listed ");
            vdn.selectFirstCollection1.click();
            browser.sleep(10000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
            vdn.btnPublishProject.click();
            browser.sleep(5000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
            vdn.btnYes.click();
            browser.sleep(3000);    
            let var1 = "//*[contains(text(),'";
            let var2 = projectName;
            let var3 = "')]//following::button[1]";
            browser.sleep(10000);
            var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
            assertProjInAllProjTab.click();
            browser.sleep(5000);
    
            expect(vdn.assertNominationTab.isPresent()).toBe(true).then(function () {
                console.log("Nomination Tab Is Present");
            })
    
            vdn.assertNominationTab.click();
            browser.sleep(3000);    
            expect(vdn.assertDefaultOrgApproved.isPresent()).toBe(true).then(function () {
                console.log("Organization contributors nomination Is approved by default");
            })
    
        }
    
        const createProjectWithcourse = () => {
           // var projectName;
                              
               wait.waitForElementVisibility(vdn.selQuestionSet, 30000, "Practice Question Set is not available");                
               vdn.selQuestionSet.click();

                wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
                vdn.selectContentType.click();
                
                wait.waitForElementVisibility(vdn.selectTargetCollection, 30000, "Target Collection dropDown is not available");
                vdn.selectTargetCollection.click();

         wait.waitForElementVisibility(vdn.Course, 30000, "Course Option is not available");
         vdn.Course.click();
           
                    browser.executeScript('window.scrollTo(0,400);').then(function () {
                    console.log('++++++SCROLLED UP+++++');
                });
                wait.waitForElementVisibility(vdn.selectFirstCollection1, 30000, "Course Is Not Listed");
                vdn.selectFirstCollection1.click();
        
                wait.waitForElementVisibility(vdn.btnPublishProject, 30000, "Publish Button is not available");
                vdn.btnPublishProject.click();
                
                wait.waitForElementVisibility(vdn.btnYes, 30000, "Button Yes is not available");
                vdn.btnYes.click();
        
        
        }
        const createProjectWithcourseandNominationDisabeSkipEnable = () => {
            var projectName;
           
                console.log("Admin User is trying to create a Project")
                browser.sleep(2000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
                vdn.clkMyProject.click();
                browser.sleep(3000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
                vdn.btnCreation.click();
                browser.sleep(1000);
        
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt1), 20000, "Options Is Not Available");
                vdn.selectOpt1.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
                vdn.btnClkNext.click();
                browser.sleep(1000);
        
                projectName = "Auto" + faker.randomData().firstname;
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
                vdn.enterProjectName.click();
                vdn.enterProjectName.sendKeys(projectName);
                browser.sleep(1000);
        
                projectDesc = "Automation" + faker.randomData().firstname;
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
                vdn.enterProjectDesc.sendKeys(projectDesc);
                browser.sleep(1000);

                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
                vdn.fromOrgOnly.click();
                browser.sleep(1000);

        //         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.skipReviewBtn), 20000, "Skip Review Checkbox Is Not Present");
        // vdn.skipReviewBtn.click();
        // browser.sleep(2000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.skip2levelReview), 20000, "Skip Two Level Review Not Available");
                vdn.skip2levelReview.click();
                browser.sleep(1000);
        
                expect(vdn.nominationEndDate.isPresent()).toBe(false).then(function () {
                    console.log("Nomination Date Not Displayed ");
                })
        
        
                browser.executeScript('window.scrollTo(0,800);').then(function () {
                    console.log('++++++SCROLLED UP+++++');
                });
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Field Is Not Present");
                vdn.contributionEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Field is not available");
                vdn.contributionEndDate.click();
                vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                console.log("Select Contribution End Date");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Field Is Not Present");
                vdn.projectEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Field is not available");
                vdn.projectEndDate.click();
                vdn.projectEndDate.sendKeys(utility.projectEndDate());
                console.log("Select Project End Date Field");
        
    
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
                vdn.btnNext.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
                vdn.selectContentType.click();
                browser.sleep(1000);
        
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selQuestionSet), 20000, "Practice Question Set is not available");
                vdn.selQuestionSet.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.courseAssessment), 20000, "Course Assessment is not available");
                vdn.courseAssessment.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
                vdn.seleTextBook.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selExplainitionContent), 20000, "Explainition Content is not available");
                vdn.selExplainitionContent.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selLearningResource), 20000, "Learning Resource is not available");
                vdn.selLearningResource.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selOldQuestionSet), 20000, "Old Practice Question Set is not available");
                vdn.selOldQuestionSet.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selTeacherResource), 20000, "Teacher Resource is not available");
                vdn.selTeacherResource.click();
                browser.sleep(2000);
        
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentTypeDropdown), 20000, "Content Type dropDown is not available");
                vdn.clkContentTypeDropdown.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection dropDown is not available");
                vdn.selectTargetCollection.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.Course), 20000, "Course Option is not available");
        vdn.Course.click();
        browser.sleep(1000);

        
        
                browser.executeScript('window.scrollTo(0,400);').then(function () {
                    console.log('++++++SCROLLED UP+++++');
                });
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstCollection1), 20000, "Course Is Not Listed ");
        vdn.selectFirstCollection1.click();
        browser.sleep(20000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
                vdn.btnPublishProject.click();
                browser.sleep(5000);
        
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
                vdn.btnYes.click();
                browser.sleep(1000);
        
 
        }
        
        const createProjectWithcourseandNominationDisabeSkipDisable = () => {
            var projectName;
           
                console.log("Admin User is trying to create a Project")
                browser.sleep(2000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
                vdn.clkMyProject.click();
                browser.sleep(3000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
                vdn.btnCreation.click();
                browser.sleep(1000);
        
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt1), 20000, "Options Is Not Available");
                vdn.selectOpt1.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
                vdn.btnClkNext.click();
                browser.sleep(1000);
        
                projectName = "Auto" + faker.randomData().firstname;
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
                vdn.enterProjectName.click();
                vdn.enterProjectName.sendKeys(projectName);
                browser.sleep(1000);
        
                projectDesc = "Automation" + faker.randomData().firstname;
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
                vdn.enterProjectDesc.sendKeys(projectDesc);
                browser.sleep(1000);

                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
                vdn.fromOrgOnly.click();
                browser.sleep(1000);

        //         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.skipReviewBtn), 20000, "Skip Review Checkbox Is Not Present");
        // vdn.skipReviewBtn.click();
        // browser.sleep(2000);
        
        //         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.skip2levelReview), 20000, "Skip Two Level Review Not Available");
        //         vdn.skip2levelReview.click();
        //         browser.sleep(1000);
        
                expect(vdn.nominationEndDate.isPresent()).toBe(false).then(function () {
                    console.log("Nomination Date Not Displayed ");
                })
        
        
                browser.executeScript('window.scrollTo(0,800);').then(function () {
                    console.log('++++++SCROLLED UP+++++');
                });
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Field Is Not Present");
                vdn.contributionEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Field is not available");
                vdn.contributionEndDate.click();
                vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                console.log("Select Contribution End Date");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Field Is Not Present");
                vdn.projectEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Field is not available");
                vdn.projectEndDate.click();
                vdn.projectEndDate.sendKeys(utility.projectEndDate());
                console.log("Select Project End Date Field");
        
    
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
                vdn.btnNext.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
                vdn.selectContentType.click();
                browser.sleep(1000);
        
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selQuestionSet), 20000, "Practice Question Set is not available");
                vdn.selQuestionSet.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.courseAssessment), 20000, "Course Assessment is not available");
                vdn.courseAssessment.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
                vdn.seleTextBook.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selExplainitionContent), 20000, "Explainition Content is not available");
                vdn.selExplainitionContent.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selLearningResource), 20000, "Learning Resource is not available");
                vdn.selLearningResource.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selOldQuestionSet), 20000, "Old Practice Question Set is not available");
                vdn.selOldQuestionSet.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selTeacherResource), 20000, "Teacher Resource is not available");
                vdn.selTeacherResource.click();
                browser.sleep(2000);
        
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentTypeDropdown), 20000, "Content Type dropDown is not available");
                vdn.clkContentTypeDropdown.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection dropDown is not available");
                vdn.selectTargetCollection.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.Course), 20000, "Course Option is not available");
        vdn.Course.click();
        browser.sleep(1000);

        
        
                browser.executeScript('window.scrollTo(0,400);').then(function () {
                    console.log('++++++SCROLLED UP+++++');
                });
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstCollection1), 20000, "Course Is Not Listed ");
        vdn.selectFirstCollection1.click();
        browser.sleep(20000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
                vdn.btnPublishProject.click();
                browser.sleep(5000);
        
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
                vdn.btnYes.click();
                browser.sleep(1000);
        
 
        }
        const createProjectWithContentPlaylist = () => {
            var projectName;
           
            //     console.log("Admin User is trying to create a Project")
            //     browser.sleep(2000);
            //     wait.waitForElementVisibility(vdn.clkMyProject, 30000, "My Prject Is Not Present");
            //     vdn.clkMyProject.click();
               
            //    wait.waitForElementVisibility(vdn.btnCreation, 30000, "Create Project Button Is Not Present");
            //     vdn.btnCreation.click();
                   
         
            //     wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Options Is Not Available");
            //     vdn.selectOpt1.click();
                
            //     wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Next Button Is Not Present");
            //     vdn.btnClkNext.click();
                       
            //     projectName = "Auto" + faker.randomData().firstname;
            //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
            //     vdn.enterProjectName.click();
            //     vdn.enterProjectName.sendKeys(projectName);
            //     browser.sleep(500);
        
            //     projectDesc = "Automation" + faker.randomData().firstname;
            //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
            //     vdn.enterProjectDesc.sendKeys(projectDesc);
            //     browser.sleep(500);

            //     wait.waitForElementVisibility(vdn.skipReviewBtn, 30000, "Skip Review Checkbox Is Not Present");
            //     vdn.skipReviewBtn.click();

            //     wait.waitForElementVisibility(vdn.nominationEndDate, 30000, "Nomination End Date Is Not Present");
            //     vdn.nominationEndDate.click();
                
            //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
            //     vdn.nominationEndDate.click();
            //     vdn.nominationEndDate.sendKeys(utility.nominationEndDate());
            //     console.log("Nomination End Date Selected");
        
            //     wait.waitForElementVisibility(vdn.shortlistEndDate, 30000, "Shortlist End Date Is Not Present");
            //     vdn.shortlistEndDate.click();
               
        
            //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
            //     vdn.shortlistEndDate.click();
            //     vdn.shortlistEndDate.sendKeys(utility.shortlistEndDate());
            //     console.log("Shortlist End Date Selected");
        
            //     wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "Shortlist End Date Is Not Present");
            //     vdn.contributionEndDate.click();
            //     browser.sleep(1000);
        
            //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
            //     vdn.contributionEndDate.click();
            //     vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
            //     console.log("Contribution End Date Selected");
        
            //     wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
            //     vdn.projectEndDate.click();
                
        
            //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
            //     vdn.projectEndDate.click();
            //     vdn.projectEndDate.sendKeys(utility.projectEndDate());
            //     console.log("Project End Date Selected");
            //     browser.sleep(1000);
        
            //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addRecogDesc), 20000, "Recognization Descriptin is not available");
            //     vdn.addRecogDesc.click();
            //     vdn.addRecogDesc.sendKeys('Description');
        
            //     wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Next Button is not available");
            //     vdn.btnNext.click();
                
            //     wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
            //     vdn.selectContentType.click();
                
                wait.waitForElementVisibility(vdn.selQuestionSet, 30000, "Practice Question Set is not available");
                vdn.selQuestionSet.click();
                
                wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
                vdn.selectContentType.click();
                
                wait.waitForElementVisibility(vdn.selectTargetCollection, 30000, "Target Collection dropDown is not available");
                vdn.selectTargetCollection.click();
             
                wait.waitForElementVisibility(vdn.contentPlayList, 30000, "Content Playlist is not available");
                vdn.contentPlayList.click();
            
        
                browser.executeScript('window.scrollTo(0,400);').then(function () {
                    console.log('++++++SCROLLED UP+++++');
                });
        
                wait.waitForElementVisibility(vdn.selectFirstContentPlaylist, 30000, "Content Playlist Is Not Listed");
               // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstContentPlaylist), 20000, "Content Playlist Is Not Listed ");
                vdn.selectFirstContentPlaylist.click();

                wait.waitForElementVisibility(vdn.btnPublishProject, 30000, "Publish Button is not available");
                vdn.btnPublishProject.click();
                
                wait.waitForElementVisibility(vdn.btnYes, 30000, "Button Yes is not available");
                vdn.btnYes.click();
        
                    
            } 

            const createProjectWithTPDCourse = () => {
                    
                wait.waitForElementVisibility(vdn.selQuestionSet, 30000, "Practice Question Set is not available");
                vdn.selQuestionSet.click();

            
                wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
                vdn.selectContentType.click();
                
                wait.waitForElementVisibility(vdn.selectTargetCollection, 30000, "Target Collection dropDown is not available");
                vdn.selectTargetCollection.click();
             
                wait.waitForElementVisibility(vdn.Course, 30000, "Course Option is not available");
                vdn.Course.click();
                  
                wait.waitForElementVisibility(vdn.Framework, 30000, "Framework is not available");
                vdn.Framework.click();
                  
                wait.waitForElementVisibility(vdn.TPD, 30000, "TPD is not available");
                 vdn.TPD.click();
                   
                 wait.waitForElementVisibility(vdn.Tpdyesbtn, 30000, "Yes button is not available");
                 vdn.Tpdyesbtn.click();
                   
            
                    // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "Select Framework Dropdown is not available");
                    // vdn.selectFrameWork.click();
                    // browser.sleep(1000);
            
                    // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCPD), 20000, "Select Framework Option2 is not available");
                    // vdn.selectCPD.click();
                    // browser.sleep(1000);
            
                    browser.executeScript('window.scrollTo(0,400);').then(function () {
                        console.log('++++++SCROLLED UP+++++');
                    });
            
                    wait.waitForElementVisibility(vdn.selectFirstCollection1, 30000, "Course is not available");
                    vdn.selectFirstCollection1.click();
                 
                    wait.waitForElementVisibility(vdn.btnPublishProject, 30000, "Publish Button is not available");
                    vdn.btnPublishProject.click();
                
                  wait.waitForElementVisibility(vdn.btnYes, 30000, "Button Yes is not available");
                  vdn.btnYes.click();
            
                    
            
                } 
            
            

            const createProjectWithNominationOpenSkipEnable = () => {
                var projectName;
               
                    console.log("Admin User is trying to create a Project")
                    browser.sleep(2000);
                    wait.waitForElementVisibility(vdn.clkMyProject, 30000, "My Prject Is Not Present");
                    vdn.clkMyProject.click();
                   
                   wait.waitForElementVisibility(vdn.btnCreation, 30000, "Create Project Button Is Not Present");
                    vdn.btnCreation.click();
                       
             
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Options Is Not Available");
                    vdn.selectOpt1.click();
                    
                    wait.waitForElementVisibility(vdn.btnClkNext, 30000, "Next Button Is Not Present");
                    vdn.btnClkNext.click();
                           
                    projectName = "Auto" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
                    vdn.enterProjectName.click();
                    vdn.enterProjectName.sendKeys(projectName);
                    browser.sleep(500);
            
                    projectDesc = "Automation" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
                    vdn.enterProjectDesc.sendKeys(projectDesc);
                    browser.sleep(500);
    
                    wait.waitForElementVisibility(vdn.skipReviewBtn, 30000, "Skip Review Checkbox Is Not Present");
                    vdn.skipReviewBtn.click();
    
                    wait.waitForElementVisibility(vdn.nominationEndDate, 30000, "Nomination End Date Is Not Present");
                    vdn.nominationEndDate.click();
                    
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
                    vdn.nominationEndDate.click();
                    vdn.nominationEndDate.sendKeys(utility.nominationEndDate());
                    console.log("Nomination End Date Selected");
            
                    wait.waitForElementVisibility(vdn.shortlistEndDate, 30000, "Shortlist End Date Is Not Present");
                    vdn.shortlistEndDate.click();
                   
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
                    vdn.shortlistEndDate.click();
                    vdn.shortlistEndDate.sendKeys(utility.shortlistEndDate());
                    console.log("Shortlist End Date Selected");
            
                    wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "Shortlist End Date Is Not Present");
                    vdn.contributionEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                    vdn.contributionEndDate.click();
                    vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                    console.log("Contribution End Date Selected");
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
                    vdn.projectEndDate.click();
                    
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                    vdn.projectEndDate.click();
                    vdn.projectEndDate.sendKeys(utility.projectEndDate());
                    console.log("Project End Date Selected");
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addRecogDesc), 20000, "Recognization Descriptin is not available");
                    vdn.addRecogDesc.click();
                    vdn.addRecogDesc.sendKeys('Description');
            
                    wait.waitForElementVisibility(vdn.btnNext, 30000, "Next Button is not available");
                    vdn.btnNext.click();
                    
                    wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
                    vdn.selectContentType.click();
        
            }
            const createProjectWithNominationOpenSkipDisable = () => {
                var projectName;
               
                    console.log("Admin User is trying to create a Project")
                    browser.sleep(2000);
                    wait.waitForElementVisibility(vdn.clkMyProject, 30000, "My Prject Is Not Present");
                    vdn.clkMyProject.click();
                   
                   wait.waitForElementVisibility(vdn.btnCreation, 30000, "Create Project Button Is Not Present");
                    vdn.btnCreation.click();
                       
             
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Options Is Not Available");
                    vdn.selectOpt1.click();
                    
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Next Button Is Not Present");
                    vdn.btnClkNext.click();
                           
                    projectName = "Auto" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
                    vdn.enterProjectName.click();
                    vdn.enterProjectName.sendKeys(projectName);
                    browser.sleep(500);
            
                    projectDesc = "Automation" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
                    vdn.enterProjectDesc.sendKeys(projectDesc);
                    browser.sleep(500);
    
                    wait.waitForElementVisibility(vdn.nominationEndDate, 30000, "Nomination End Date Is Not Present");
                    vdn.nominationEndDate.click();
                    
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
                    vdn.nominationEndDate.click();
                    vdn.nominationEndDate.sendKeys(utility.nominationEndDate());
                    console.log("Nomination End Date Selected");
            
                    wait.waitForElementVisibility(vdn.shortlistEndDate, 30000, "Shortlist End Date Is Not Present");
                    vdn.shortlistEndDate.click();
                   
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
                    vdn.shortlistEndDate.click();
                    vdn.shortlistEndDate.sendKeys(utility.shortlistEndDate());
                    console.log("Shortlist End Date Selected");
            
                    wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "Shortlist End Date Is Not Present");
                    vdn.contributionEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                    vdn.contributionEndDate.click();
                    vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                    console.log("Contribution End Date Selected");
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
                    vdn.projectEndDate.click();
                    
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                    vdn.projectEndDate.click();
                    vdn.projectEndDate.sendKeys(utility.projectEndDate());
                    console.log("Project End Date Selected");
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addRecogDesc), 20000, "Recognization Descriptin is not available");
                    vdn.addRecogDesc.click();
                    vdn.addRecogDesc.sendKeys('Description');
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Next Button is not available");
                    vdn.btnNext.click();
                    
                    wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
                    vdn.selectContentType.click();
        
            }

            const createProjectWithNominationDisableSkipEnable = () => {
                var projectName;
               
                    console.log("Admin User is trying to create a Project")
                    browser.sleep(2000);
                    wait.waitForElementVisibility(vdn.clkMyProject, 30000, "My Prject Is Not Present");
                    vdn.clkMyProject.click();
                   
                   wait.waitForElementVisibility(vdn.btnCreation, 30000, "Create Project Button Is Not Present");
                    vdn.btnCreation.click();
                       
             
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Options Is Not Available");
                    vdn.selectOpt1.click();
                    
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Next Button Is Not Present");
                    vdn.btnClkNext.click();
                           
                    projectName = "Auto" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
                    vdn.enterProjectName.click();
                    vdn.enterProjectName.sendKeys(projectName);
                    browser.sleep(500);
            
                    projectDesc = "Automation" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
                    vdn.enterProjectDesc.sendKeys(projectDesc);
                    browser.sleep(500);

                    wait.waitForElementVisibility(vdn.fromOrgOnly, 30000, "Org Only Option Not Available");
                vdn.fromOrgOnly.click();
            
    
                    wait.waitForElementVisibility(vdn.skipReviewBtn, 30000, "Skip Review Checkbox Is Not Present");
                    vdn.skipReviewBtn.click();
    
        
            
                    wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "contribution End Date Is Not Present");
                    vdn.contributionEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                    vdn.contributionEndDate.click();
                    vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                    console.log("Contribution End Date Selected");
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
                    vdn.projectEndDate.click();
                    
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                    vdn.projectEndDate.click();
                    vdn.projectEndDate.sendKeys(utility.projectEndDate());
                    console.log("Project End Date Selected");
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addRecogDesc), 20000, "Recognization Descriptin is not available");
                    vdn.addRecogDesc.click();
                    vdn.addRecogDesc.sendKeys('Description');
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Next Button is not available");
                    vdn.btnNext.click();
                    
                    wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
                    vdn.selectContentType.click();
        
            }
            const createProjectWithNominationDisableSkipDisable = () => {
                var projectName;
               
                    console.log("Admin User is trying to create a Project")
                    browser.sleep(2000);
                    wait.waitForElementVisibility(vdn.clkMyProject, 30000, "My Prject Is Not Present");
                    vdn.clkMyProject.click();
                   
                   wait.waitForElementVisibility(vdn.btnCreation, 30000, "Create Project Button Is Not Present");
                    vdn.btnCreation.click();
                       
             
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Options Is Not Available");
                    vdn.selectOpt1.click();
                    
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Next Button Is Not Present");
                    vdn.btnClkNext.click();
                           
                    projectName = "Auto" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
                    vdn.enterProjectName.click();
                    vdn.enterProjectName.sendKeys(projectName);
                    browser.sleep(500);
            
                    projectDesc = "Automation" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
                    vdn.enterProjectDesc.sendKeys(projectDesc);
                    browser.sleep(500);

                    wait.waitForElementVisibility(vdn.fromOrgOnly, 30000, "Org Only Option Not Available");
                vdn.fromOrgOnly.click();
            
       
            
                    wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "contribution End Date Is Not Present");
                    vdn.contributionEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                    vdn.contributionEndDate.click();
                    vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                    console.log("Contribution End Date Selected");
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
                    vdn.projectEndDate.click();
                    
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                    vdn.projectEndDate.click();
                    vdn.projectEndDate.sendKeys(utility.projectEndDate());
                    console.log("Project End Date Selected");
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addRecogDesc), 20000, "Recognization Descriptin is not available");
                    vdn.addRecogDesc.click();
                    vdn.addRecogDesc.sendKeys('Description');
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Next Button is not available");
                    vdn.btnNext.click();
                    
                    wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
                    vdn.selectContentType.click();
            }
            const createProjectWithSelectedSetofContributorsSkipDisable = () => {
                var projectName;
               
                    console.log("Admin User is trying to create a Project")
                    browser.sleep(2000);
                    wait.waitForElementVisibility(vdn.clkMyProject, 30000, "My Prject Is Not Present");
                    vdn.clkMyProject.click();
                   
                   wait.waitForElementVisibility(vdn.btnCreation, 30000, "Create Project Button Is Not Present");
                    vdn.btnCreation.click();
                       
             
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Options Is Not Available");
                    vdn.selectOpt1.click();
                    
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Next Button Is Not Present");
                    vdn.btnClkNext.click();
                           
                    projectName = "Auto" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
                    vdn.enterProjectName.click();
                    vdn.enterProjectName.sendKeys(projectName);
                    browser.sleep(500);
            
                    projectDesc = "Automation" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
                    vdn.enterProjectDesc.sendKeys(projectDesc);
                    browser.sleep(500);

            wait.waitForElementVisibility(vdn.fromOrgOnly, 30000, "Org Only Option Not Available");
            vdn.fromOrgOnly.click();
            wait.waitForElementVisibility(vdn.fromSetOfSelContributors, 30000, "From Set Of Contributors Not Available");
            vdn.fromSetOfSelContributors.click();
          
            wait.waitForElementVisibility(vdn.clkSelContributors, 30000, "Select Contributors Link Not Available");
            vdn.clkSelContributors.click();
    
            wait.waitForElementVisibility(vdn.dropDownContrType, 30000, "Contributor Type Dropdown Not Available");
            vdn.dropDownContrType.click();
         
            wait.waitForElementVisibility(vdn.selIndividualType, 30000, "Individual Contributor Type Is Not Available");
            vdn.selIndividualType.click();
           
            wait.waitForElementVisibility(vdn.enterNameOrOrg, 300000, "Eenter Name or Org Field Not Available");
            vdn.enterNameOrOrg.click();
            vdn.enterNameOrOrg.sendKeys('Pass123'); 
      
            wait.waitForElementVisibility(vdn.searchBtn, 30000, "Search Button Not Available");
            vdn.searchBtn.click();
           
            wait.waitForElementVisibility(vdn.selSearchedContributer, 30000, "Search Contributor Not Available");
            vdn.selSearchedContributer.click();
            
            wait.waitForElementVisibility(vdn.btnSave, 30000, "Save Button Not Available");
            vdn.btnSave.click();
            
    
            browser.executeScript('window.scrollTo(0,500);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
            browser.sleep(500);
            wait.waitForElementVisibility(vdn.assertContributersAdded, 30000, "Contributors Not Added");
            expect(vdn.assertContributersAdded.isPresent()).toBe(true).then(function () {
                console.log("Contributors Added From The Link Successfully ");
            })
    
            browser.executeScript('window.scrollTo(0,800);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
       
            
                    wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "contribution End Date Is Not Present");
                    vdn.contributionEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                    vdn.contributionEndDate.click();
                    vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                    console.log("Contribution End Date Selected");
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
                    vdn.projectEndDate.click();
                    
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                    vdn.projectEndDate.click();
                    vdn.projectEndDate.sendKeys(utility.projectEndDate());
                    console.log("Project End Date Selected");
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addRecogDesc), 20000, "Recognization Descriptin is not available");
                    vdn.addRecogDesc.click();
                    vdn.addRecogDesc.sendKeys('Description');
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Next Button is not available");
                    vdn.btnNext.click();
                    
                    wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
                    vdn.selectContentType.click();
            }
            const createProjectWithSelectedSetofContributorsSkipEnable = () => {
                var projectName;
               
                    console.log("Admin User is trying to create a Project")
                    browser.sleep(2000);
                    wait.waitForElementVisibility(vdn.clkMyProject, 30000, "My Prject Is Not Present");
                    vdn.clkMyProject.click();
                   
                   wait.waitForElementVisibility(vdn.btnCreation, 30000, "Create Project Button Is Not Present");
                    vdn.btnCreation.click();
                       
             
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Options Is Not Available");
                    vdn.selectOpt1.click();
                    
                    wait.waitForElementVisibility(vdn.selectOpt1, 30000, "Next Button Is Not Present");
                    vdn.btnClkNext.click();
                           
                    projectName = "Auto" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
                    vdn.enterProjectName.click();
                    vdn.enterProjectName.sendKeys(projectName);
                    browser.sleep(500);
            
                    projectDesc = "Automation" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
                    vdn.enterProjectDesc.sendKeys(projectDesc);
                    browser.sleep(500);

            wait.waitForElementVisibility(vdn.fromOrgOnly, 30000, "Org Only Option Not Available");
            vdn.fromOrgOnly.click();
            wait.waitForElementVisibility(vdn.fromSetOfSelContributors, 30000, "From Set Of Contributors Not Available");
            vdn.fromSetOfSelContributors.click();
          
            wait.waitForElementVisibility(vdn.clkSelContributors, 30000, "Select Contributors Link Not Available");
            vdn.clkSelContributors.click();
    
            wait.waitForElementVisibility(vdn.dropDownContrType, 30000, "Contributor Type Dropdown Not Available");
            vdn.dropDownContrType.click();
         
            wait.waitForElementVisibility(vdn.selIndividualType, 30000, "Individual Contributor Type Is Not Available");
            vdn.selIndividualType.click();
           
            wait.waitForElementVisibility(vdn.enterNameOrOrg, 300000, "Eenter Name or Org Field Not Available");
            vdn.enterNameOrOrg.click();
            vdn.enterNameOrOrg.sendKeys('Pass123'); 
      
            wait.waitForElementVisibility(vdn.searchBtn, 30000, "Search Button Not Available");
            vdn.searchBtn.click();
           
            wait.waitForElementVisibility(vdn.selSearchedContributer, 30000, "Search Contributor Not Available");
            vdn.selSearchedContributer.click();
            
            wait.waitForElementVisibility(vdn.btnSave, 30000, "Save Button Not Available");
            vdn.btnSave.click();
            
    
            browser.executeScript('window.scrollTo(0,500);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
            browser.sleep(500);
            wait.waitForElementVisibility(vdn.assertContributersAdded, 30000, "Contributors Not Added");
            expect(vdn.assertContributersAdded.isPresent()).toBe(true).then(function () {
                console.log("Contributors Added From The Link Successfully ");
            })
    
            browser.executeScript('window.scrollTo(0,800);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            wait.waitForElementVisibility(vdn.skipReviewBtn, 30000, "Skip Review Checkbox Is Not Present");
            vdn.skipReviewBtn.click();

            
                    wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "contribution End Date Is Not Present");
                    vdn.contributionEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                    vdn.contributionEndDate.click();
                    vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                    console.log("Contribution End Date Selected");
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
                    vdn.projectEndDate.click();
                    
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                    vdn.projectEndDate.click();
                    vdn.projectEndDate.sendKeys(utility.projectEndDate());
                    console.log("Project End Date Selected");
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addRecogDesc), 20000, "Recognization Descriptin is not available");
                    vdn.addRecogDesc.click();
                    vdn.addRecogDesc.sendKeys('Description');
            
                    wait.waitForElementVisibility(vdn.btnNext, 30000, "Next Button is not available");
                    vdn.btnNext.click();
                    
                    wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
                    vdn.selectContentType.click();
            }

            const saveasDraft = () => {

            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn1.projectsavedraft), 20000, "Save as Draft Option is not available");
        vdn1.projectsavedraft.click();
        browser.sleep(1000);
    }

    const createProjectWithPartialDigitalTextBook = () => {
   
        wait.waitForElementVisibility(vdn.selQuestionSet, 30000, "Practice Question Set is not available");
        vdn.selQuestionSet.click();
    
    
        wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
        vdn.selectContentType.click();
        
        wait.waitForElementVisibility(vdn.selectTargetCollection, 30000, "Target Collection dropDown is not available");
        vdn.selectTargetCollection.click();
        
     
        wait.waitForElementVisibility(vdn.digitalTextBook, 30000, "Digital Textbook Option is not available");
        vdn.digitalTextBook.click();
        browser.sleep(10000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
          
        wait.waitForElementVisibility(vdn.selectFirstTextBook, 30000, "Text Book Is Not Listed");
        browser.sleep(3000);
        vdn.selectFirstTextBook.click();
      
        wait.waitForElementVisibility(vdn1.editTextbookunit, 30000, "Edit Text Book unit Is Not available");
        browser.sleep(3000);
        vdn1.editTextbookunit.click();
        browser.sleep(5000);
       
        wait.waitForElementVisibility(vdn1.selecttxtbookunits, 30000, "Edit Text Book unit Is Not available");
        browser.sleep(3000);
        vdn1.selecttxtbookunits.click();
        var a1 = element(by.xpath("//input[@class='ng-pristine ng-valid ng-touched']"));
        wait.waitForElementVisibility(a1, 30000, " unit checkbox Is Not available");
        // browser.sleep(5000);
        a1.click();
        browser.sleep(10000);

        wait.waitForElementVisibility(vdn1.done, 30000, " Done button Is Not available");
        vdn1.done.click();
            
           wait.waitForElementVisibility(vdn.btnPublishProject, 30000, "Publish Button is not available");
           vdn.btnPublishProject.click();
           
           wait.waitForElementVisibility(vdn.btnYes, 30000, "Button Yes is not available");
           vdn.btnYes.click();
    
    
        
    }

    const createProjectWithPartialcourse = () => {
        // var projectName;
                           
            wait.waitForElementVisibility(vdn.selQuestionSet, 30000, "Practice Question Set is not available");                
            vdn.selQuestionSet.click();

             wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
             vdn.selectContentType.click();
             
             wait.waitForElementVisibility(vdn.selectTargetCollection, 30000, "Target Collection dropDown is not available");
             vdn.selectTargetCollection.click();

      wait.waitForElementVisibility(vdn.Course, 30000, "Course Option is not available");
      vdn.Course.click();
        
                 browser.executeScript('window.scrollTo(0,400);').then(function () {
                 console.log('++++++SCROLLED UP+++++');
             });
             wait.waitForElementVisibility(vdn.selectFirstCollection1, 30000, "Course Is Not Listed");
             vdn.selectFirstCollection1.click();

             wait.waitForElementVisibility(vdn1.editTextbookunit, 30000, "Edit Text Book unit Is Not available");
        vdn1.editTextbookunit.click();
       
        wait.waitForElementVisibility(vdn1.unselectUnit1, 30000, " unit checkbox Is Not available");
        vdn1.unselectUnit1.click();

        wait.waitForElementVisibility(vdn1.done, 30000, " Done button Is Not available");
        vdn1.done.click();
     
             wait.waitForElementVisibility(vdn.btnPublishProject, 30000, "Publish Button is not available");
             vdn.btnPublishProject.click();
             
             wait.waitForElementVisibility(vdn.btnYes, 30000, "Button Yes is not available");
             vdn.btnYes.click();
     
     
     }

     const createProjectWithPartialContentPlaylist = () => {
        
    
            
            wait.waitForElementVisibility(vdn.selQuestionSet, 30000, "Practice Question Set is not available");
            vdn.selQuestionSet.click();
            
            wait.waitForElementVisibility(vdn.selectContentType, 30000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            
            wait.waitForElementVisibility(vdn.selectTargetCollection, 30000, "Target Collection dropDown is not available");
            vdn.selectTargetCollection.click();
         
            wait.waitForElementVisibility(vdn.contentPlayList, 30000, "Content Playlist is not available");
            vdn.contentPlayList.click();
        
    
            browser.executeScript('window.scrollTo(0,400);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            wait.waitForElementVisibility(vdn.selectFirstContentPlaylist, 30000, "Content Playlist Is Not Listed");
           // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstContentPlaylist), 20000, "Content Playlist Is Not Listed ");
            vdn.selectFirstContentPlaylist.click();
            browser.sleep(2000);
            wait.waitForElementVisibility(vdn1.editTextbookunit, 30000, "Edit Text Book unit Is Not available");
            browser.sleep(3000);
            vdn1.editTextbookunit.click();
            browser.sleep(2000);
           
            wait.waitForElementVisibility(vdn1.unselectUnit1, 30000, " unit checkbox Is Not available");
            browser.sleep(5000);
            vdn1.unselectUnit1.click();
            
            wait.waitForElementVisibility(vdn1.done, 30000, " Done button Is Not available");
            vdn1.done.click();

            wait.waitForElementVisibility(vdn.btnPublishProject, 30000, "Publish Button is not available");
            vdn.btnPublishProject.click();
            
            wait.waitForElementVisibility(vdn.btnYes, 30000, "Button Yes is not available");
            vdn.btnYes.click();
    
                
        } 

        const createProjectWithoutTargetCollection = () => {
          
                console.log("Admin User is trying to create a Project With Digital text Book")
                browser.sleep(2000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
                vdn.clkMyProject.click();
                browser.sleep(3000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
                vdn.btnCreation.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Is Not Available");
                vdn.selectOpt3.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
                vdn.btnClkNext.click();
                browser.sleep(1000);
        
                projectName = "Auto" + faker.randomData().firstname;
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
                vdn.enterProjectName.click();
                vdn.enterProjectName.sendKeys(projectName);
                browser.sleep(1000);
        
                projectDesc = "Automation" + faker.randomData().firstname;
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
                vdn.enterProjectDesc.sendKeys(projectDesc);
                browser.sleep(1000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
                vdn.nominationEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
                vdn.nominationEndDate.click();
                console.log(nominationEndDate)
                vdn.nominationEndDate.sendKeys(nominationEndDate);
                console.log("Nomination End Date Selected");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date Is Not Present");
                vdn.shortlistEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
                vdn.shortlistEndDate.click();
                vdn.shortlistEndDate.sendKeys(utility.shortlistEndDate());
                console.log("Shortlist End Date Selected");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Is Not Present");
                vdn.contributionEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                vdn.contributionEndDate.click();
                vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                console.log("Contribution End Date Selected");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Is Not Present");
                vdn.projectEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                vdn.projectEndDate.click();
                vdn.projectEndDate.sendKeys(utility.projectEndDate());
                console.log("Project End Date Selected");
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
                vdn.btnNext.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
                vdn.selectContentType.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
                vdn.seleTextBook.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
                vdn.selectContentType.click();
                browser.sleep(1000);
    
        
                browser.executeScript('window.scrollTo(0,400);').then(function () {
                    console.log('++++++SCROLLED UP+++++');
                });
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
                vdn.btnPublishProject.click();
                browser.sleep(5000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
                vdn.btnYes.click();
                browser.sleep(5000);
                expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
                    vdn.toastMessage.getText().then(function (input) {
                        console.log(input);
                    })
                })
            }
              
        const  createProjectWithoutTargetCollectionTPD = () => {
          
                    console.log("Admin User is trying to create a Project With Digital text Book")
                    browser.sleep(2000);
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
                    vdn.clkMyProject.click();
                    browser.sleep(3000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
                    vdn.btnCreation.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Is Not Available");
                    vdn.selectOpt3.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
                    vdn.btnClkNext.click();
                    browser.sleep(1000);
            
                    projectName = "Auto" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
                    vdn.enterProjectName.click();
                    vdn.enterProjectName.sendKeys(projectName);
                    browser.sleep(1000);
            
                    projectDesc = "Automation" + faker.randomData().firstname;
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
                    vdn.enterProjectDesc.sendKeys(projectDesc);
                    browser.sleep(1000);
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
                    vdn.nominationEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
                    vdn.nominationEndDate.click();
                    console.log(nominationEndDate)
                    vdn.nominationEndDate.sendKeys(nominationEndDate);
                    console.log("Nomination End Date Selected");
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date Is Not Present");
                    vdn.shortlistEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
                    vdn.shortlistEndDate.click();
                    vdn.shortlistEndDate.sendKeys(utility.shortlistEndDate());
                    console.log("Shortlist End Date Selected");
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Is Not Present");
                    vdn.contributionEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                    vdn.contributionEndDate.click();
                    vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                    console.log("Contribution End Date Selected");
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Is Not Present");
                    vdn.projectEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                    vdn.projectEndDate.click();
                    vdn.projectEndDate.sendKeys(utility.projectEndDate());
                    console.log("Project End Date Selected");
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
                    vdn.btnNext.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
                    vdn.selectContentType.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
                    vdn.seleTextBook.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
                    vdn.selectContentType.click();
                    browser.sleep(1000);

                    wait.waitForElementVisibility(vdn.Framework, 30000, "Framework is not available");
                    vdn.Framework.click();
                      
                    wait.waitForElementVisibility(vdn.TPD, 30000, "TPD is not available");
                     vdn.TPD.click();
                       
                     wait.waitForElementVisibility(vdn.Tpdyesbtn, 30000, "Yes button is not available");
                     vdn.Tpdyesbtn.click();
        
            
                    browser.executeScript('window.scrollTo(0,400);').then(function () {
                        console.log('++++++SCROLLED UP+++++');
                    });
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
                    vdn.btnPublishProject.click();
                    browser.sleep(5000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
                    vdn.btnYes.click();
                    browser.sleep(5000);
                    expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
                        vdn.toastMessage.getText().then(function (input) {
                            console.log(input);
                        })
                    })
                  

        }
    
        const createProjectWithoutTargetCollectionNominationDisableSkipEnable = () => {
          
            console.log("Admin User is trying to create a Project With Digital text Book")
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
            vdn.clkMyProject.click();
            browser.sleep(3000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
            vdn.btnCreation.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Is Not Available");
            vdn.selectOpt3.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
            vdn.btnClkNext.click();
            browser.sleep(1000);
    
            projectName = "Auto" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
            vdn.enterProjectName.click();
            vdn.enterProjectName.sendKeys(projectName);
            browser.sleep(1000);
    
            projectDesc = "Automation" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
            vdn.enterProjectDesc.sendKeys(projectDesc);
            browser.sleep(1000);
            
            wait.waitForElementVisibility(vdn.fromOrgOnly, 30000, "Org Only Option Not Available");
            vdn.fromOrgOnly.click();
        

                wait.waitForElementVisibility(vdn.skipReviewBtn, 30000, "Skip Review Checkbox Is Not Present");
                vdn.skipReviewBtn.click();

    
        
                wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "contribution End Date Is Not Present");
                vdn.contributionEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                vdn.contributionEndDate.click();
                vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                console.log("Contribution End Date Selected");
        
                wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
                vdn.projectEndDate.click();
                
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                vdn.projectEndDate.click();
                vdn.projectEndDate.sendKeys(utility.projectEndDate());
                console.log("Project End Date Selected");
                browser.sleep(1000);

            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
            vdn.btnNext.click();
            browser.sleep(1000);

            wait.waitForElementVisibility(vdn.selectContentType, 30000, "Project End Date Is Not Present");
            vdn.selectContentType.click();
    
            // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            // vdn.selectContentType.click();
            // browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
            vdn.seleTextBook.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);

    
            browser.executeScript('window.scrollTo(0,400);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
            vdn.btnPublishProject.click();
            browser.sleep(5000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
            vdn.btnYes.click();
            browser.sleep(5000);
            expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
                vdn.toastMessage.getText().then(function (input) {
                    console.log(input);
                })
            })
        }

        
        const createProjectWithoutTargetCollectionNominationOpenSkipEnable = () => {
          
            console.log("Admin User is trying to create a Project With Digital text Book")
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
            vdn.clkMyProject.click();
            browser.sleep(3000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
            vdn.btnCreation.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Is Not Available");
            vdn.selectOpt3.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
            vdn.btnClkNext.click();
            browser.sleep(1000);
    
            projectName = "Auto" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
            vdn.enterProjectName.click();
            vdn.enterProjectName.sendKeys(projectName);
            browser.sleep(1000);
    
            projectDesc = "Automation" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
            vdn.enterProjectDesc.sendKeys(projectDesc);
            browser.sleep(1000);
            
            
        

                wait.waitForElementVisibility(vdn.skipReviewBtn, 30000, "Skip Review Checkbox Is Not Present");
                vdn.skipReviewBtn.click();

                
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
                vdn.nominationEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
                vdn.nominationEndDate.click();
                console.log(nominationEndDate)
                vdn.nominationEndDate.sendKeys(nominationEndDate);
                console.log("Nomination End Date Selected");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date Is Not Present");
                vdn.shortlistEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
                vdn.shortlistEndDate.click();
                vdn.shortlistEndDate.sendKeys(utility.shortlistEndDate());
                console.log("Shortlist End Date Selected");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Is Not Present");
                vdn.contributionEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                vdn.contributionEndDate.click();
                vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                console.log("Contribution End Date Selected");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Is Not Present");
                vdn.projectEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                vdn.projectEndDate.click();
                vdn.projectEndDate.sendKeys(utility.projectEndDate());
                console.log("Project End Date Selected");
    
        

            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
            vdn.btnNext.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
            vdn.seleTextBook.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);

    
            browser.executeScript('window.scrollTo(0,400);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
            vdn.btnPublishProject.click();
            browser.sleep(5000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
            vdn.btnYes.click();
            browser.sleep(5000);
            expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
                vdn.toastMessage.getText().then(function (input) {
                    console.log(input);
                })
            })
        }
        const createProjectWithoutTargetCollectionNominationOpenSkipDisable = () => {
          
            console.log("Admin User is trying to create a Project With Digital text Book")
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
            vdn.clkMyProject.click();
            browser.sleep(3000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
            vdn.btnCreation.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Is Not Available");
            vdn.selectOpt3.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
            vdn.btnClkNext.click();
            browser.sleep(1000);
    
            projectName = "Auto" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
            vdn.enterProjectName.click();
            vdn.enterProjectName.sendKeys(projectName);
            browser.sleep(1000);
    
            projectDesc = "Automation" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
            vdn.enterProjectDesc.sendKeys(projectDesc);
            browser.sleep(1000);
                
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
                vdn.nominationEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
                vdn.nominationEndDate.click();
                console.log(nominationEndDate)
                vdn.nominationEndDate.sendKeys(nominationEndDate);
                console.log("Nomination End Date Selected");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date Is Not Present");
                vdn.shortlistEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
                vdn.shortlistEndDate.click();
                vdn.shortlistEndDate.sendKeys(utility.shortlistEndDate());
                console.log("Shortlist End Date Selected");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Is Not Present");
                vdn.contributionEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                vdn.contributionEndDate.click();
                vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                console.log("Contribution End Date Selected");
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Is Not Present");
                vdn.projectEndDate.click();
                browser.sleep(1000);
        
                browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                vdn.projectEndDate.click();
                vdn.projectEndDate.sendKeys(utility.projectEndDate());
                console.log("Project End Date Selected");
    
        

            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
            vdn.btnNext.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
            vdn.seleTextBook.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);

    
            browser.executeScript('window.scrollTo(0,400);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
            vdn.btnPublishProject.click();
            browser.sleep(5000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
            vdn.btnYes.click();
            browser.sleep(5000);
            expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
                vdn.toastMessage.getText().then(function (input) {
                    console.log(input);
                })
            })
        }

        const createProjectWithoutTargetCollectionSelectedsetofContributorsSkipEnable = () => {
          
            console.log("Admin User is trying to create a Project With Digital text Book")
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
            vdn.clkMyProject.click();
            browser.sleep(3000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
            vdn.btnCreation.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Is Not Available");
            vdn.selectOpt3.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
            vdn.btnClkNext.click();
            browser.sleep(1000);
    
            projectName = "Auto" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
            vdn.enterProjectName.click();
            vdn.enterProjectName.sendKeys(projectName);
            browser.sleep(1000);
    
            projectDesc = "Automation" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
            vdn.enterProjectDesc.sendKeys(projectDesc);
            browser.sleep(1000);
        
            
            wait.waitForElementVisibility(vdn.fromOrgOnly, 30000, "Org Only Option Not Available");
            vdn.fromOrgOnly.click();
            wait.waitForElementVisibility(vdn.fromSetOfSelContributors, 30000, "From Set Of Contributors Not Available");
            vdn.fromSetOfSelContributors.click();
          
            wait.waitForElementVisibility(vdn.clkSelContributors, 30000, "Select Contributors Link Not Available");
            vdn.clkSelContributors.click();
    
            wait.waitForElementVisibility(vdn.dropDownContrType, 30000, "Contributor Type Dropdown Not Available");
            vdn.dropDownContrType.click();
         
            wait.waitForElementVisibility(vdn.selIndividualType, 30000, "Individual Contributor Type Is Not Available");
            vdn.selIndividualType.click();
           
            wait.waitForElementVisibility(vdn.enterNameOrOrg, 300000, "Eenter Name or Org Field Not Available");
            vdn.enterNameOrOrg.click();
            vdn.enterNameOrOrg.sendKeys('Pass123'); 
      
            wait.waitForElementVisibility(vdn.searchBtn, 30000, "Search Button Not Available");
            vdn.searchBtn.click();
           
            wait.waitForElementVisibility(vdn.selSearchedContributer, 30000, "Search Contributor Not Available");
            vdn.selSearchedContributer.click();
            
            wait.waitForElementVisibility(vdn.btnSave, 30000, "Save Button Not Available");
            vdn.btnSave.click();
            
    
            browser.executeScript('window.scrollTo(0,500);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
            browser.sleep(500);
            wait.waitForElementVisibility(vdn.assertContributersAdded, 30000, "Contributors Not Added");
            expect(vdn.assertContributersAdded.isPresent()).toBe(true).then(function () {
                console.log("Contributors Added From The Link Successfully ");
            })
    
            browser.executeScript('window.scrollTo(0,800);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.skipReviewBtn), 20000, "Skip Review Checkbox Is Not Present");
            vdn.skipReviewBtn.click();
            browser.sleep(2000);
    

            
                    wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "contribution End Date Is Not Present");
                    vdn.contributionEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                    vdn.contributionEndDate.click();
                    vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                    console.log("Contribution End Date Selected");
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
                    vdn.projectEndDate.click();
                    
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                    vdn.projectEndDate.click();
                    vdn.projectEndDate.sendKeys(utility.projectEndDate());
                    console.log("Project End Date Selected");
                    browser.sleep(1000);
            

            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
            vdn.btnNext.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
            vdn.seleTextBook.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);

    
            browser.executeScript('window.scrollTo(0,400);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
            vdn.btnPublishProject.click();
            browser.sleep(5000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
            vdn.btnYes.click();
            browser.sleep(5000);
            expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
                vdn.toastMessage.getText().then(function (input) {
                    console.log(input);
                })
            })

        }
        const createProjectWithoutTargetCollectionSelectedsetofContributorsSkipDisable = () => {
          
            console.log("Admin User is trying to create a Project With Digital text Book")
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
            vdn.clkMyProject.click();
            browser.sleep(3000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
            vdn.btnCreation.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Is Not Available");
            vdn.selectOpt3.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
            vdn.btnClkNext.click();
            browser.sleep(1000);
    
            projectName = "Auto" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
            vdn.enterProjectName.click();
            vdn.enterProjectName.sendKeys(projectName);
            browser.sleep(1000);
    
            projectDesc = "Automation" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
            vdn.enterProjectDesc.sendKeys(projectDesc);
            browser.sleep(1000);
        
            
            wait.waitForElementVisibility(vdn.fromOrgOnly, 30000, "Org Only Option Not Available");
            vdn.fromOrgOnly.click();
            wait.waitForElementVisibility(vdn.fromSetOfSelContributors, 30000, "From Set Of Contributors Not Available");
            vdn.fromSetOfSelContributors.click();
          
            wait.waitForElementVisibility(vdn.clkSelContributors, 30000, "Select Contributors Link Not Available");
            vdn.clkSelContributors.click();
    
            wait.waitForElementVisibility(vdn.dropDownContrType, 30000, "Contributor Type Dropdown Not Available");
            vdn.dropDownContrType.click();
         
            wait.waitForElementVisibility(vdn.selIndividualType, 30000, "Individual Contributor Type Is Not Available");
            vdn.selIndividualType.click();
           
            wait.waitForElementVisibility(vdn.enterNameOrOrg, 300000, "Eenter Name or Org Field Not Available");
            vdn.enterNameOrOrg.click();
            vdn.enterNameOrOrg.sendKeys('Pass123'); 
      
            wait.waitForElementVisibility(vdn.searchBtn, 30000, "Search Button Not Available");
            vdn.searchBtn.click();
           
            wait.waitForElementVisibility(vdn.selSearchedContributer, 30000, "Search Contributor Not Available");
            vdn.selSearchedContributer.click();
            
            wait.waitForElementVisibility(vdn.btnSave, 30000, "Save Button Not Available");
            vdn.btnSave.click();
            
    
            browser.executeScript('window.scrollTo(0,500);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
            browser.sleep(500);
            wait.waitForElementVisibility(vdn.assertContributersAdded, 30000, "Contributors Not Added");
            expect(vdn.assertContributersAdded.isPresent()).toBe(true).then(function () {
                console.log("Contributors Added From The Link Successfully ");
            })
    
            browser.executeScript('window.scrollTo(0,800);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
                   
                    wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "contribution End Date Is Not Present");
                    vdn.contributionEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                    vdn.contributionEndDate.click();
                    vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                    console.log("Contribution End Date Selected");
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
                    vdn.projectEndDate.click();
                    
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                    vdn.projectEndDate.click();
                    vdn.projectEndDate.sendKeys(utility.projectEndDate());
                    console.log("Project End Date Selected");
                    browser.sleep(1000);
            

            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
            vdn.btnNext.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
            vdn.seleTextBook.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);

    
            browser.executeScript('window.scrollTo(0,400);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
            vdn.btnPublishProject.click();
            browser.sleep(5000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
            vdn.btnYes.click();
            browser.sleep(5000);
            expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
                vdn.toastMessage.getText().then(function (input) {
                    console.log(input);
                })
            })

        }
        const createProjectWithoutTargetCollectionNominationDisableSkipDisable = () => {
          
            console.log("Admin User is trying to create a Project With Digital text Book")
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
            vdn.clkMyProject.click();
            browser.sleep(3000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
            vdn.btnCreation.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Is Not Available");
            vdn.selectOpt3.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
            vdn.btnClkNext.click();
            browser.sleep(1000);
    
            projectName = "Auto" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
            vdn.enterProjectName.click();
            vdn.enterProjectName.sendKeys(projectName);
            browser.sleep(1000);
    
            projectDesc = "Automation" + faker.randomData().firstname;
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
            vdn.enterProjectDesc.sendKeys(projectDesc);
            browser.sleep(1000);
        
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
            vdn.fromOrgOnly.click();
            browser.sleep(1000);

                   
                    wait.waitForElementVisibility(vdn.contributionEndDate, 30000, "contribution End Date Is Not Present");
                    vdn.contributionEndDate.click();
                    browser.sleep(1000);
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
                    vdn.contributionEndDate.click();
                    vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
                    console.log("Contribution End Date Selected");
            
                    wait.waitForElementVisibility(vdn.projectEndDate, 30000, "Project End Date Is Not Present");
                    vdn.projectEndDate.click();
                    
            
                    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
                    vdn.projectEndDate.click();
                    vdn.projectEndDate.sendKeys(utility.projectEndDate());
                    console.log("Project End Date Selected");
                    browser.sleep(1000);
            

            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
            vdn.btnNext.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.seleTextBook), 20000, "eTextBook is not available");
            vdn.seleTextBook.click();
            browser.sleep(1000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
            vdn.selectContentType.click();
            browser.sleep(1000);

            wait.waitForElementVisibility(vdn1.filterBoard, 30000, "Board Option is not available");
            vdn1.filterBoard.click();
        
            wait.waitForElementVisibility(vdn1.filterCBSE, 30000, "CBSE Option is not available");
            vdn1.filterCBSE.click();
            
            wait.waitForElementVisibility(vdn1.filterMedium, 30000, "Medium Option is not available");
            vdn1.filterMedium.click();
        
            wait.waitForElementVisibility(vdn1.filterEnglish, 30000, "Medium Option is not available");
            vdn1.filterEnglish.click();
        
            wait.waitForElementVisibility(vdn1.filterClass, 30000, "Medium Option is not available");
            vdn1.filterClass.click();
        
            wait.waitForElementVisibility(vdn1.filterClas4, 30000, "Medium Option is not available");
            vdn1.filterClass4.click();
        
            wait.waitForElementVisibility(vdn1.filterSubject, 30000, "Medium Option is not available");
            vdn1.filterSubject.click();
        
            wait.waitForElementVisibility(vdn1.filterSubEvs, 30000, "Medium Option is not available");
            vdn1.filterSubEvs.click();
        

    
            browser.executeScript('window.scrollTo(0,400);').then(function () {
                console.log('++++++SCROLLED UP+++++');
            });

            
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
            vdn.btnPublishProject.click();
            browser.sleep(5000);
    
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
            vdn.btnYes.click();
            browser.sleep(5000);
            expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
                vdn.toastMessage.getText().then(function (input) {
                    console.log(input);
                })
            })

            browser.sleep(3000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkForIndividualContentNotForAnyCollectionSection), 20000, "For Individual Content not for any collection Is Not Present");
            vdn.clkForIndividualContentNotForAnyCollectionSection.click();
            browser.sleep(3000);
    
            let var1 = "(//*[contains(text(),'";
            let var2 = projectName;
            let var3 = "')]//following::button[1])[3]";
            browser.sleep(10000);
            var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
    
            expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
                console.log("Created Project Is Available In My Projects tab ");
            });
            browser.sleep(1000);
            assertProjInAllProjTab.click();
            browser.sleep(5000);

        }
         
     

module.exports = {


   // verifyAssignedReviewerIsAbleToViewDetailsWithNominationDisable,
    createProjectWith100DigitalTextBook,
    verifySourcingOrgAdminIsAbleToModifyProjectDates,
    createProjectWithDefinedSetOfOrgAndIndividualContributorsskipDisable,
    createProjectWithcourse,
    createProjectWithcourseandNominationDisabeSkipEnable,
    createProjectWithContentPlaylist,
    createProjectWithNominationOpenSkipEnable,
    createProjectWithNominationOpenSkipDisable ,
    createProjectWithNominationDisableSkipEnable,
    createProjectWithcourseandNominationDisabeSkipDisable,
    createProjectWithNominationDisableSkipDisable,
    createProjectWithSelectedSetofContributorsSkipDisable,
    createProjectWithSelectedSetofContributorsSkipEnable,
    createProjectWithTPDCourse,
    createProjectWithDigitalTextBook,
    saveasDraft,
    createProjectWithPartialDigitalTextBook,
    createProjectWithPartialcourse,
    createProjectWithPartialContentPlaylist,
    createProjectWithoutTargetCollection,
    createProjectWithoutTargetCollectionTPD,
    createProjectWithoutTargetCollectionNominationDisableSkipEnable,
    createProjectWithoutTargetCollectionNominationOpenSkipEnable,
    createProjectWithoutTargetCollectionNominationOpenSkipDisable,
    createProjectWithoutTargetCollectionSelectedsetofContributorsSkipDisable,
    createProjectWithoutTargetCollectionSelectedsetofContributorsSkipEnable,
    createProjectWithoutTargetCollectionNominationDisableSkipDisable

    
}
