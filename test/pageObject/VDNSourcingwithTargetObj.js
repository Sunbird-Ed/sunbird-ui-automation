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




const createProjectWith100DigitalTextBook = () => {
    try {
        console.log("Admin User is trying to create a Project With 100 Digital text Book")
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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "Select Framework Dropdown is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCBSE), 20000, "Select Framework Option2 is not available");
        // vdn.selectCBSE.click();
        // browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(5000);
       for(i=0;i<=100;i++)
       {
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.select100TextBook), 20000, "Text Book Is Not Listed ");
        vdn.select100TextBook.click();
        browser.sleep(10000);

       }

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertToastMsg), 20000, "Project Publish Msg is not Displayed");

        // expect(vdn.assertToastMsg.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })

        browser.sleep(3000);

    } catch (err) {
        console.log(err);
    }
    return projectName;
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




        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clickModify), 20000, "Modify Icon Not Available");
        // vdn.clickModify.click();
        // browser.sleep(3000);


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
        // vdn.nominationEndDate.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
        // vdn.nominationEndDate.click();

        // console.log(utility.selectPastDateForNominationEndDate());
        // vdn.nominationEndDate.clear();
        // vdn.nominationEndDate.sendKeys(utility.selectPastDateForNominationEndDate());
        // console.log("Nomination End Set For Past Date");

        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Nomination End Date Is Not Present");
        // vdn.shortlistEndDate.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Nomination End Date is not available");
        // vdn.shortlistEndDate.click();

        // console.log(utility.selectPastDateForShortlistEndDate());
        // vdn.shortlistEndDate.clear();
        // vdn.shortlistEndDate.sendKeys(utility.selectPastDateForShortlistEndDate());
        // console.log("Shortlist End Set For Past Date");

        // browser.sleep(2000);



        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Nomination End Date Is Not Present");
        // vdn.contributionEndDate.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Nomination End Date is not available");
        // vdn.contributionEndDate.click();

        // console.log(utility.selectPastDateForContributionEndDate());
        // vdn.contributionEndDate.clear();
        // vdn.contributionEndDate.sendKeys(utility.selectPastDateForContributionEndDate());
        // console.log("Contribution End Set For Past Date");

        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Nomination End Date Is Not Present");
        // vdn.projectEndDate.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Nomination End Date is not available");
        // vdn.projectEndDate.click();

        // console.log(utility.selectPastDateForProjectEndDate());
        // vdn.projectEndDate.clear();
        // vdn.projectEndDate.sendKeys(utility.selectPastDateForProjectEndDate());
        // console.log("Project End Set For Past Date");

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnUpdate), 20000, "Update Button Is Not Present");
        // vdn.btnUpdate.click();
        // browser.sleep(2000);



    }
    
const verifyAssignedReviewerIsAbleToViewDetailsWithNominationDisable = (projectName) => {
   
    




}


module.exports = {


    verifyAssignedReviewerIsAbleToViewDetailsWithNominationDisable,
    createProjectWith100DigitalTextBook,
    verifySourcingOrgAdminIsAbleToModifyProjectDates




    
}
