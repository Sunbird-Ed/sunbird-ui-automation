const { browser, protractor } = require("protractor");

const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
const wait = require(protractor.basePath + '/helper/waiters.js');
const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const etbpage = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
var etbv = etbpage.etb();
const usrOnBoard = require(protractor.basePath + '/test/pages/userOnBoarding/UserOnBoardingPage.js')
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
const vdnpage = require(protractor.basePath + '/test/pages/VDNPage/VDNPage.po.js');
var vdn = vdnpage.VDNPage();
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
var nominationEndDate = utility.nominationEndDate();
var shortlistEndDate = utility.shortlistEndDate();
var contributionEndDate = utility.contributionEndDate();
var projectEndDate = utility.projectEndDate();
var selectPastDate = utility.selectPastDate();
var pdf = protractor.basePath + '/test/testdata/samplepdf.pdf';
var epub = protractor.basePath + '/test/testdata/faulkner-sound-and-the-fury.epub';
var mp3 = protractor.basePath + '/test/testdata/school chale hum.mp3';
var mp4 = protractor.basePath + '/test/testdata/UploadContentMP4.mp4';
var webm = protractor.basePath + '/test/testdata/Upload content-webm.webm';
var h5p = protractor.basePath + '/test/testdata/fill-in-the-blanks-837.h5p';
var html = protractor.basePath + '/test/testdata/HTMLContent_test.zip';
const utilityFun = require(protractor.basePath + '/test/utility/utilityFunctions.js');


const createProjectWithCourse = () => {
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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "Select Framework Dropdown is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCPD), 20000, "Select Framework Option2 is not available");
        // vdn.selectCPD.click();
        // browser.sleep(1000);

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
        browser.sleep(3000);

        //browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertToastMsg), 20000, "Project Publish Msg is not Displayed");

        // expect(vdn.assertToastMsg.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })

        browser.sleep(3000);

    } catch (err) {
        console.log(err);
    }
    return projectName;
}

const verifyProjectAvailableInAllProjectsTabForContributor = (projectName) => {
    try {
        browser.sleep(1000);
        var Url = getAppURL.ConfigurePath().AppURL;  
        var OrganizationName = getExcelPath.ConfigurePath().OrgName;
        
        browser.get(Url);
        browser.sleep(4000);


        let v1 = "//label[text()='";
        var v2 = OrganizationName;
        console.log(v2);
        let v3 = "']//following::a[text()='Contribute'][1]";
        browser.sleep(10000);
        var selSunriseContributer = element(by.xpath(v1 + v2 + v3));


        // //browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSunriseContributer), 20000, " Cherry Cont is not available");
        selSunriseContributer.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkAllMyProjects), 20000, " All My Project is not available");
        vdn.clkAllMyProjects.click();
        browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        })


    }
    catch (Exception) {
        console.log('Created Project Is Not Available In All Project Tab For Contributors')
    }
}

const createProjectWithCourseOrgOnly = () => {
    var projectName;
    try {
        console.log("user is trying to create a Project")
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt1), 20000, "Options Not Present");
        vdn.selectOpt1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);

        projectName = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Enter Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName);
        browser.sleep(1000);

        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Enter Project Description Field Is Not Present");
        vdn.enterProjectDesc.sendKeys(projectDesc);
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
        vdn.fromOrgOnly.click();
        browser.sleep(1000);

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

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type is not available");
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
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkOutContentType), 20000, "Content Type is not available");
        vdn.clkOutContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection is not available");
        vdn.selectTargetCollection.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.Course), 20000, "Course Option is not available");
        vdn.Course.click();
        browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "Select Framework Dropdown is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCPD), 20000, "Select Framework Option2 is not available");
        // vdn.selectCPD.click();
        // browser.sleep(1000);
        

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstCollection1), 20000, "Course Is Not Listed ");
        vdn.selectFirstCollection1.click();
        browser.sleep(10000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Project is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Confirm Yes Button is not available");
        vdn.btnYes.click();
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertToastMsg), 20000, "Project Is Not Published");
        // expect(vdn.assertToastMsg.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully");
        // })

        expect(vdn.assertToastMsg.isPresent()).toBeTruthy();
        console.log("Project published successfully ");

        browser.sleep(5000);


        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        expect(vdn.assertNominationTab.isPresent()).toBe(false).then(function () {
            console.log("Nomination Tab Is not Present");
        })


    } catch (err) {
        console.log(err);
    }
    return projectName;
}

const createProjectWithDefinedSetOfOrgAndIndividualContributors = () => {
    var projectName;
    try {
        console.log("user is trying to create a Project")
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt1), 20000, "Options Not Present");
        vdn.selectOpt1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);

        projectName = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Enter Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName);
        browser.sleep(1000);

        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Enter Project Description Field Is Not Present");
        vdn.enterProjectDesc.sendKeys(projectDesc);
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
        vdn.fromOrgOnly.click();
        browser.sleep(1000);

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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "Select Framework Dropdown is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCPD), 20000, "Select Framework Option2 is not available");
        // vdn.selectCPD.click();
        // browser.sleep(1000);

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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertToastMsg), 20000, "Project Publish Msg is not Displayed");
        // expect(vdn.assertToastMsg.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })

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

        // expect(vdn.assertDefaultIndApproved.isPresent()).toBe(true).then(function () {
        //     console.log("Individual contributors nomination Is approved by default");
        // })

        expect(vdn.assertDefaultOrgApproved.isPresent()).toBe(true).then(function () {
            console.log("Organization contributors nomination Is approved by default");
        })

    }
    catch (Exception) {
        console.log('Unable To Create Project With Defined Org and Individual Contributor')
    }
    return projectName;
}


const verifyAutomaticallyApprovedIndividualNomination = (projectName) => {
    try {
        browser.sleep(1000);
        var Url = getAppURL.ConfigurePath().AppURL;
        var OrganizationName = getExcelPath.ConfigurePath().OrgName;
        browser.get(Url);
        browser.sleep(4000);

        let v1 = "//label[text()='";
        var v2 = OrganizationName;
        console.log(v2);
        let v3 = "']//following::a[text()='Contribute'][1]";
        browser.sleep(10000);
        var selSunriseContributer = element(by.xpath(v1 + v2 + v3));

        //browser.wait(protractor.ExpectedConditions.visibilityOf(selSunriseContributer), 20000, "Surise Contributor is not available");
        selSunriseContributer.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "Click All My Project is not available");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        let var4 = "')]//following::span[text()='Approved']";

        browser.sleep(10000);
        var assertProjInMyProjTab = element(by.xpath(var1 + var2 + var3));
        var assertAutoAproved = element(by.xpath(var1 + var2 + var4));

        expect(assertProjInMyProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        })

        expect(assertAutoAproved.isPresent()).toBe(true).then(function () {
            console.log("automatically approved nomination on Individual contributors. ");
        })


    }
    catch (Exception) {
        console.log('Created Project Is Not Available In All My Project Tab For Contributors')
    }
}


const createProjectWithDigitalTextBook = () => {
    try {
        console.log("Admin User is trying to create a Project With Digital text Book")
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstTextBook), 20000, "Text Book Is Not Listed ");
        vdn.selectFirstTextBook.click();
        browser.sleep(10000);

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

const NominateContributer = (projectName) => {
    try {
        browser.sleep(1000);
        // var Url = getAppURL.ConfigurePath().AppURL;
        // browser.get(Url);
        browser.sleep(4000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSunriseContributer), 20000, " startDateCalendar is not available");
        // vdn.selSunriseContributer.click();
        // browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkAllMyProjects), 20000, " startDateCalendar is not available");
        // vdn.clkAllMyProjects.click();
        // browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSelectContentTypes), 20000, "Select Content Type Button is not Present");
        vdn.btnSelectContentTypes.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType1), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType1.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectedContentTypeSuccess), 20000, "Content Type not Success");
        expect(vdn.selectedContentTypeSuccess.isPresent()).toBe(true).then(function () {
            console.log("Selected Content type(s) saved successfully");
        });

        browser.executeScript("arguments[0].scrollIntoView();", vdn.checkBoxUploadSample);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxUploadSample), 30000, "Checkbox not Present");
        vdn.checkBoxUploadSample.click();
        browser.sleep(2000);



        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNominate), 20000, "Nominate Button not Present");
        vdn.btnNominate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationSent), 20000, "Nomination set not Success");
        // expect(vdn.assertNominationSent.isPresent()).toBe(true).then(function () {
        //     console.log("Nomination Sent Successfully");
        // });

    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}

const verifySourcingOrgAdminIsAbleToAcceptNomination = (projectName) => {

    try {

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[2]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In My Projects tab ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationTab), 20000, "Nomination Tab is not Displayed");
        vdn.assertNominationTab.click();
        browser.sleep(10000);
        
        browser.executeScript("arguments[0].scrollIntoView();", vdn.openUserForAction);
        browser.sleep(2000);

        

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openUserForAction), 20000, "Open Pending User not Displayed");
        vdn.openUserForAction.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnAccept), 20000, "Open Pending User not Displayed");
        vdn.btnAccept.click();
        browser.sleep(2000);

        expect(vdn.assertNominatiopSuccess.isPresent()).toBe(true).then(function () {
            console.log("Nomination Updated Successfully");
        });
    }
    catch (Exception) {
        console.log('Unable Accept Nomination')
    }
}

const createProjectWithContentPlaylist = () => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
        vdn.nominationEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
        vdn.nominationEndDate.click();
        vdn.nominationEndDate.sendKeys(utility.nominationEndDate());
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
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addRecogDesc), 20000, "Recognization Descriptin is not available");
        vdn.addRecogDesc.click();
        vdn.addRecogDesc.sendKeys('Description');

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
        vdn.btnNext.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
        vdn.selectContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selQuestionSet), 20000, "Practice Question Set is not available");
        vdn.selQuestionSet.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type dropDown is not available");
        vdn.selectContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection dropDown is not available");
        vdn.selectTargetCollection.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contentPlayList), 20000, "Content Playlist is not available");
        vdn.contentPlayList.click();
        browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectMedium), 20000, "Select Medium is not available");
        // vdn.selectMedium.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selMediumEnglish), 20000, "English Medium is not available");
        // vdn.selMediumEnglish.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectGrade), 20000, "Select Grade is not available");
        // vdn.selectGrade.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectGradeClass1), 20000, "Select Grade Class1 is not available");
        // vdn.selectGradeClass1.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectSubject), 20000, "Select Subject is not available");
        // vdn.selectSubject.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectSubjectEnglish), 20000, "Subject English is not available");
        // vdn.selectSubjectEnglish.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnAply), 20000, "Apply Button not available");
        // vdn.btnAply.click();
        // browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstContentPlaylist), 20000, "Content Playlist Is Not Listed ");
        vdn.selectFirstContentPlaylist.click();
        browser.sleep(10000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        browser.sleep(5000);

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


const createProjectWithTargetCollection = (targetCollectionType) => {
    try {
        console.log("Admin User is trying to create a Project With Digital text Book")
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection dropDown is not available");
        vdn.selectTargetCollection.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.digitalTextBook), 20000, "Digital Textbook Option is not available");
        vdn.digitalTextBook.click();
        browser.sleep(1000);

        // if (targetCollectionType === "digitalTextBook") {
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.digitalTextBook), 20000, "Digital Textbook Option is not available");
        //     vdn.digitalTextBook.click();
        //     browser.sleep(1000);
        // } else if (targetCollectionType === "contentPlaylist") {
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contentPlaylistInTargetCollection), 20000, "Digital Textbook Option is not available");
        //     vdn.contentPlaylistInTargetCollection.click();
        //     browser.sleep(1000);

        // } else if (targetCollectionType === "courseInTargetCollection") {
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.courseInTargetCollection), 20000, "Digital Textbook Option is not available");
        //     vdn.courseInTargetCollection.click();
        //     browser.sleep(1000);
        // } else if (targetCollectionType === "questionPaperInTargetCollection") {
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.questionPaperInTargetCollection), 20000, "Digital Textbook Option is not available");
        //     vdn.questionPaperInTargetCollection.click();
        //     browser.sleep(1000);
        // }

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstTextBook), 20000, "Text Book Is Not Listed ");
        vdn.selectFirstTextBook.click();
        browser.sleep(6000);

        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnsaveAsDraft), 20000, "Text Book Is Not Listed ");
        vdn.btnsaveAsDraft.click();
        // expect(vdn.toastMessage.isPresent()).then(function () {
        //     vdn.toastMessage.getText().then(function (input) {
        //         console.log(input);
        //     })
        // })
        browser.sleep(9000);

    } catch (err) {
        console.log(err);
    }
    return projectName;
}


const verifySourcingOrgAdminIsAbleToRejectNomination = (projectName) => {

    try {

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[2]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In My Projects tab ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationTab), 20000, "Nomination Tab is not Displayed");
        vdn.assertNominationTab.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openUserForAction), 20000, "Open Pending User not Displayed");
        vdn.openUserForAction.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnReject), 20000, "Reject Button not Displayed");
        vdn.btnReject.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterReasonForReject), 20000, "Reject Reason Field not Displayed");
        vdn.enterReasonForReject.sendKeys('Reason For Rejection')
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button Is not Displayed");
        vdn.btnSubmitContentType.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominatiopSuccess), 20000, "Nomination Update Is not Success");
        expect(vdn.assertNominatiopSuccess.isPresent()).toBe(true).then(function () {
            console.log("Nomination Updated Successfully");
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationTab), 20000, "Nomination Tab Is not Displayed");
        vdn.assertNominationTab.click();
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertReject), 20000, "Nomination not Rejected");
        // expect(vdn.assertReject.isPresent()).toBe(true).then(function () {
        //     console.log("Nomination Rejected Successfully");
        // });
    }
    catch (Exception) {
        console.log('Unable Reject Nomination')
    }
}

const verifySourcingOrgAdminIsAbleToAssignReviewer = (projectName) => {
    try {

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationStatus), 20000, "Nomination Status is Disabled");
        // expect(vdn.nominationStatus.isPresent()).toBe(true).then(function () {
        //     console.log("Nomination Is In Enabled Status");
        // });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUsersToProjectTab), 20000, "Assign Users To Project Tab not Displayed");
        vdn.assignUsersToProjectTab.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "Select Role Option not Displayed");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer Option not Displayed");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRolesUpdated), 20000, "Roles Not Updated");
        expect(vdn.assertRolesUpdated.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated Successfully with Nomination Enabled");
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Project Tab Not Available");
        vdn.clkMyProject.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clickModify), 20000, "Modify Icon Not Available");
        vdn.clickModify.click();
        browser.sleep(3000);
        console.log(utility.nominationEndDate());
        vdn.nominationEndDate.clear();
        vdn.nominationEndDate.sendKeys(utility.selectPastDate());
        console.log("Nomination End Set For Past Date");

        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnUpdate), 20000, "Update Button Is Not Present");
        vdn.btnUpdate.click();
        browser.sleep(2000);

        assertProjInAllProjTab.click();
        browser.sleep(5000);

        expect(vdn.nominationStatus.isPresent()).toBe(false).then(function () {
            console.log("Nomination Is In Disabled Status");
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUsersToProjectTab), 20000, "Assign Users To Project Tab not Displayed");
        vdn.assignUsersToProjectTab.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "Select Role Option not Displayed");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer1), 20000, "Reviewer Option not Displayed");
        vdn.selectReviewer1.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRolesUpdated), 20000, "Roles Not Updated");
        expect(vdn.assertRolesUpdated.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated Successfully with Nomination Disabled");
        });

    }
    catch (Exception) {
        console.log('Unable To Assign Reviewer ');
    }
}



const validateiconsAndeditDraft = (projectName, targetCollectionType) => {
    try {
        let var1 = "(//div[contains(text(),'";
        let var2 = projectName;
        let var3 = "')])//following::div[text()='Draft']";
        let var4 = "')])//following::span[contains(text(),'Edit Draft')]"
        let var5 = "')])//following-sibling::div)[1]"
        let var6 = "')])//following::div[contains(text(),'Project End Date')]";
        let var7 = "')])//following::i[@data-tooltip='Delete']";
        let var9 = "')])//following::span[contains(text(),'Edit Draft')][1]//following::div[1]";
        browser.sleep(10000);

        var assertDraftIcon = element(by.xpath(var1 + var2 + var3));
        var btnEditDraft = element(by.xpath(var1 + var2 + var4));
        // var assertTextBook = element(by.xpath(var1+var2+var5));
        var assertProjectdates = element(by.xpath(var1 + var2 + var6));
        expect(assertDraftIcon.isPresent()).toBe(true).then(function () {
            console.log('Draft icon is validated.');
        })
        browser.sleep(3000);
        // expect(assertTextBook.isPresent()).toBe(true).then(function(){
        //     console.log("textBook is Validated.");
        // })
        browser.sleep(2000);
        expect(assertProjectdates.isPresent()).toBe(true).then(function () {
            console.log("Project date is displayed.")
        })
        browser.sleep(2000);
        expect(btnEditDraft.isPresent()).toBe(true).then(function () {
            console.log("Edit Draft button is validated.");
        })
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(btnEditDraft), 20000, "Text Book Is Not Listed ");
        btnEditDraft.click();
        browser.sleep(3000);

        updatedProjectName = "Updated_Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
        vdn.enterProjectName.clear();
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(updatedProjectName);
        browser.sleep(1000);


        updatedProjectDesc = "Updated_Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
        vdn.enterProjectDesc.clear();
        vdn.enterProjectDesc.sendKeys(updatedProjectDesc);
        browser.sleep(1000);

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var nominationEndDate = cred[41]['CourseName'];
        var shortlistEndDate = cred[41]['CourseDescription'];
        var contributionEndDate = cred[41]['Title'];
        var projectEndDate = cred[41]['TitleDescription'];

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
        vdn.nominationEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
        vdn.nominationEndDate.click();
        vdn.nominationEndDate.sendKeys(nominationEndDate);
        console.log("Nomination End Date Is Selected");


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date Is Not Present");
        vdn.shortlistEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
        vdn.shortlistEndDate.click();
        vdn.shortlistEndDate.sendKeys(shortlistEndDate);
        console.log("Shortlist End Date Is Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Is Not Present");
        vdn.contributionEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
        vdn.contributionEndDate.click();
        vdn.contributionEndDate.sendKeys(contributionEndDate);
        console.log("Contributor End Date Is Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Is Not Present");
        vdn.projectEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
        vdn.projectEndDate.click();
        vdn.projectEndDate.sendKeys(projectEndDate);
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

        if (targetCollectionType === "digitalTextBook") {
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.digitalTextBook), 20000, "Digital Textbook Option is not available");
            vdn.digitalTextBook.click();
            browser.sleep(1000);
        } else if (targetCollectionType === "contentPlaylist") {
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contentPlaylistInTargetCollection), 20000, "Digital Textbook Option is not available");
            vdn.contentPlaylistInTargetCollection.click();
            browser.sleep(1000);

        } else if (targetCollectionType === "courseInTargetCollection") {
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.courseInTargetCollection), 20000, "Digital Textbook Option is not available");
            vdn.courseInTargetCollection.click();
            browser.sleep(1000);
        } else if (targetCollectionType === "questionPaperInTargetCollection") {
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.questionPaperInTargetCollection), 20000, "Digital Textbook Option is not available");
            vdn.questionPaperInTargetCollection.click();
            browser.sleep(1000);
        } else {
            browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.digitalTextBook), 20000, "Digital Textbook Option is not available");
            vdn.digitalTextBook.click();
            browser.sleep(1000);
        }

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstTextBook), 20000, "Text Book Is Not Listed ");
        vdn.selectFirstTextBook.click();
        browser.sleep(10000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnsaveAsDraft), 20000, "Text Book Is Not Listed ");
        vdn.btnsaveAsDraft.click();
        browser.sleep(10000);
        let var8 = updatedProjectName;
        var deleteIcon2 = element(by.xpath(var1 + var8 + var9));
        expect(deleteIcon2.isPresent()).toBe(true).then(function () {
            console.log("Delete icon is validated.");
        })
        browser.sleep(2000);
        deleteIcon2.click();
        browser.sleep(2000);
        vdn.yesBtn.click();
        expect(vdn.toastMessage.isPresent()).then(function () {
            vdn.toastMessage.getText().then(function (input) {
                console.log(input);
            })
        })
    } catch (err) {
        console.log(err);
    }
}

const createProjectWithoutTargetCollection = () => {
    try {
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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "select framework is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCBSE), 20000, "CBSE dropDown is not available");
        // vdn.selectCBSE.click();
        // browser.sleep(3000);
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUpload), 20000, "Upload button is not available");
        vdn.clkUpload.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelectFile), 20000, "select file is not available");
        vdn.clkSelectFile.click();
        browser.sleep(3000);
        utilityFun.uploadParticularFile(pdf);

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

    } catch (err) {
        console.log(err);
    }
    return projectName;
}

const editFromDraftAfterPublishProject = () => {
    try {


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.editIcon), 20000, "edit Is Not Present");
        vdn.editIcon.click();
        browser.sleep(2000);
        expect(vdn.projectScopeTab.isPresent()).toBe(false).then(function () {
            console.log("Preject scope tab is not present")
        })
        updatedProjectName = "Updated_Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Project Name Field Is Not Present");
        vdn.enterProjectName.clear();
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(updatedProjectName);
        browser.sleep(1000);

        updatedProjectDesc = "Updated_Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Project Description Field Is Not Present");
        vdn.enterProjectDesc.clear();
        vdn.enterProjectDesc.sendKeys(updatedProjectDesc);
        browser.sleep(1000);

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var nominationEndDate = cred[41]['CourseName'];
        var shortlistEndDate = cred[41]['CourseDescription'];
        var contributionEndDate = cred[41]['Title'];
        var projectEndDate = cred[41]['TitleDescription'];

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
        vdn.nominationEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
        vdn.nominationEndDate.click();
        vdn.nominationEndDate.clear();
        vdn.nominationEndDate.sendKeys(nominationEndDate);
        console.log("Nomination End Date Is Selected");
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date Is Not Present");
        vdn.shortlistEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
        vdn.shortlistEndDate.click();
        vdn.shortlistEndDate.clear();
        vdn.shortlistEndDate.sendKeys(shortlistEndDate);
        console.log("Shortlist End Date Is Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Is Not Present");
        vdn.contributionEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
        vdn.contributionEndDate.click();
        vdn.contributionEndDate.clear();
        vdn.contributionEndDate.sendKeys(contributionEndDate);
        console.log("Contributor End Date Is Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Is Not Present");
        vdn.projectEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
        vdn.projectEndDate.click();
        vdn.projectEndDate.clear();
        vdn.projectEndDate.sendKeys(projectEndDate);
        console.log("Project End Date Is Selected");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.updateButton), 20000, "update button is not available");
        vdn.updateButton.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.closeDeletehamburgerMenuOption), 20000, " edit Is Not Present");
        vdn.closeDeletehamburgerMenuOption.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.delteOption), 20000, "delete Prject Is Not Present");
        vdn.delteOption.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.yesBtn), 20000, "Button Yes is not available");
        vdn.yesBtn.click();
        browser.sleep(5000);
        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            vdn.toastMessage.getText().then(function (input) {
                console.log(input);
            })
        })

    } catch (err) {
        console.log(err);
    }
}

const closeProject = () => {
    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.closeDeletehamburgerMenuOption), 20000, " edit Is Not Present");
        vdn.closeDeletehamburgerMenuOption.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.closeButton), 20000, "delete Prject Is Not Present");
        vdn.closeButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.yesBtn), 20000, "Button Yes is not available");
        vdn.yesBtn.click();
        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            vdn.toastMessage.getText().then(function (input) {
                console.log(input);
            })
        })

    } catch (err) {
        console.log(err);
    }
}


const createProjectWithAllContentType = () => {
    var projectName;
    try {
        console.log("user is trying to create a Project")
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt1), 20000, "Options Not Present");
        vdn.selectOpt1.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);

        projectName = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Enter Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName);
        browser.sleep(1000);

        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Enter Project Description Field Is Not Present");
        vdn.enterProjectDesc.sendKeys(projectDesc);
        browser.sleep(1000);

        // var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        // var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        // var nominationEndDate = cred[41]['CourseName'];
        // var shortlistEndDate = cred[41]['CourseDescription'];
        // var contributionEndDate = cred[41]['Title'];
        // var projectEndDate = cred[41]['TitleDescription'];
        expect(vdn.skipCheckbox.isSelected()).toBe(false);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.skip2levelReview), 20000, "Skip Two Level Review Not Available");
        vdn.skip2levelReview.click();
        expect(vdn.skipCheckbox.isSelected()).toBe(true).then(function () {
            console.log("Skip level is selected.")
        })
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

        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
        vdn.btnNext.click();
        browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContentType), 20000, "Content Type is not available");
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
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkOutContentType), 20000, "Content Type is not available");
        vdn.clkOutContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection is not available");
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Project is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Confirm Yes Button is not available");
        vdn.btnYes.click();
        browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertToastMsg), 20000, "Project Is Not Published");
        // expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully");
        // })
        browser.sleep(5000);


        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        let var4 = "')]"
        browser.sleep(10000);
        var assertProject = element(by.xpath(var1 + var2 + var4));
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(5000);
        expect(vdn.assertCollectionType.isPresent()).toBe(true).then(function () {
            (vdn.assertCollectionType.getText()).then(function (input) {
                expect((input).includes("Digital Textbook")).toBe(true);
                console.log(input + "is validated.")
            })
        })
        expect(vdn.assertNomination.isPresent()).toBe(true).then(function () {
            (vdn.assertNomination.getText()).then(function (input) {
                console.log(input + "is validated.");
            })
        })
        expect(vdn.assertAssignUsers.isPresent()).toBe(true).then(function () {
            (vdn.assertAssignUsers.getText()).then(function (input) {
                console.log(input + "is validated.");
            })
        })
        expect(vdn.assertContributionDashboard.isPresent()).toBe(true).then(function () {
            (vdn.assertContributionDashboard.getText()).then(function (input) {
                console.log(input + "is validated.");
            })
        })
        expect(vdn.assertReports.isPresent()).toBe(true).then(function () {
            (vdn.assertReports.getText()).then(function (input) {
                console.log(input + "is validated.");
            })
        })
        expect(assertProject.isPresent()).toBe(true).then(function () {
            (assertProject.getText()).then(function (input) {
                console.log("Project Name " + input + " is validated.");
            })
        })

    } catch (err) {
        console.log(err);
    }
    return projectName;
}

const OrgAdminIsAbleToAssignReviewer = (projectName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '1');
        var reviewer = cred[1]['Username'];
        console.log(reviewer);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationTab), 20000, "Nomination Status is Disabled");
        expect(vdn.assertNominationTab.isPresent()).toBe(true).then(function () {
            console.log("Nomination Is In Enabled Status");
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUsersToProjectTab), 20000, "Assign Users To Project Tab not Displayed");
        vdn.assignUsersToProjectTab.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys(reviewer);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "Select Role Option not Displayed");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer Option not Displayed");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRolesUpdated), 20000, "Roles Not Updated");
        expect(vdn.assertRolesUpdated.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated Successfully with Nomination Enabled");
        });
    }
    catch (Exception) {
        console.log('Unable To Assign Reviewer');
    }
}


const verifyAssignedReviewerIsAbleToViewDetails = (projectName) => {
    try {

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        expect(vdn.btnCreation.isPresent()).toBe(false).then(function () {
            console.log("Create New Button Is Not Displayed");
        });

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        expect(vdn.assignUsersToProjectTab.isPresent()).toBe(false).then(function () {
            console.log("User tab is Not Displayed in the view Project details page");
        });

        expect(vdn.digitalTextBooksTab.isPresent()).toBe(true).then(function () {
            console.log("Digital Text Book tab is Displayed in the view Project details page");
        });

        expect(vdn.assertNominationTab.isPresent()).toBe(true).then(function () {
            console.log("Nomination tab is Displayed in the view Project details page");
        });

        expect(vdn.contributionDashBoardTab.isPresent()).toBe(true).then(function () {
            console.log("Contribution Dashboard tab is Displayed in the view Project details page");
        });

        expect(vdn.assertReportsTab.isPresent()).toBe(true).then(function () {
            console.log("Reports tab is Displayed in the view Project details page");
        });

    }
    catch (Exception) {
        console.log('Unable to Verify Details In The Project Details Page ')
    }
}


const OrgAdminIsAbleToAssignReviewerWithNominationDisable = (projectName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '1');
        var reviewer = cred[1]['Username'];
        console.log(reviewer);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationTab), 20000, "Nomination Status is Disabled");
        expect(vdn.assertNominationTab.isPresent()).toBe(false).then(function () {
            console.log("Nomination Is In Disabled Status");
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUsersToProjectTab), 20000, "Assign Users To Project Tab not Displayed");
        vdn.assignUsersToProjectTab.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys(reviewer);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "Select Role Option not Displayed");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer Option not Displayed");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRolesUpdated), 20000, "Roles Not Updated");
        expect(vdn.assertRolesUpdated.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated Successfully with Nomination Disbled");
        });
    }
    catch (Exception) {
        console.log('Unable To Assign Reviewer');
    }
}


const createProjectWithDigitalTextBookWithNominationDisable = () => {
    try {
        console.log("Admin User is trying to create a Project With Digital text Book")
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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
        // vdn.nominationEndDate.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
        // vdn.nominationEndDate.click();
        // vdn.nominationEndDate.sendKeys(utility.nominationEndDate());
        // console.log("Nomination End Date Is Selected");


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date Is Not Present");
        // vdn.shortlistEndDate.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
        // vdn.shortlistEndDate.click();
        // vdn.shortlistEndDate.sendKeys(utility.shortlistEndDate());
        // console.log("Shortlist End Date Is Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
        vdn.fromOrgOnly.click();
        browser.sleep(1000);

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


        browser.executeScript("arguments[0].scrollIntoView();", vdn.btnNext);
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstTextBook), 20000, "Text Book Is Not Listed ");
        vdn.selectFirstTextBook.click();
        browser.sleep(10000);


        browser.executeScript("arguments[0].scrollIntoView();", vdn.btnPublishProject);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        browser.sleep(5000);

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


const verifySourcingOrgAdminIsAbleToModifyProjectDates = (projectName) => {
    try {

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Project Tab Not Available");
        vdn.clkMyProject.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));



        // assertProjInAllProjTab.click();




        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);





        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clickModify), 20000, "Modify Icon Not Available");
        vdn.clickModify.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
        vdn.nominationEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
        vdn.nominationEndDate.click();

        console.log(utility.selectPastDateForNominationEndDate());
        vdn.nominationEndDate.clear();
        vdn.nominationEndDate.sendKeys(utility.selectPastDateForNominationEndDate());
        console.log("Nomination End Set For Past Date");

        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Nomination End Date Is Not Present");
        vdn.shortlistEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Nomination End Date is not available");
        vdn.shortlistEndDate.click();

        console.log(utility.selectPastDateForShortlistEndDate());
        vdn.shortlistEndDate.clear();
        vdn.shortlistEndDate.sendKeys(utility.selectPastDateForShortlistEndDate());
        console.log("Shortlist End Set For Past Date");

        browser.sleep(2000);



        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Nomination End Date Is Not Present");
        vdn.contributionEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Nomination End Date is not available");
        vdn.contributionEndDate.click();

        console.log(utility.selectPastDateForContributionEndDate());
        vdn.contributionEndDate.clear();
        vdn.contributionEndDate.sendKeys(utility.selectPastDateForContributionEndDate());
        console.log("Contribution End Set For Past Date");

        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Nomination End Date Is Not Present");
        vdn.projectEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Nomination End Date is not available");
        vdn.projectEndDate.click();

        console.log(utility.selectPastDateForProjectEndDate());
        vdn.projectEndDate.clear();
        vdn.projectEndDate.sendKeys(utility.selectPastDateForProjectEndDate());
        console.log("Project End Set For Past Date");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnUpdate), 20000, "Update Button Is Not Present");
        vdn.btnUpdate.click();
        browser.sleep(2000);


        // (vdn.nominationEndDateInDetails.getText()).then(function (input) {
        //     console.log(input);  
        //     console.log(utility.nominationEndDateExpected())
        //     expect(input).toContain(utility.nominationEndDateExpected())
        //     {
        //         console.log('Nomination Date Is Displayed As Entered ');
        //     }

        // });



    }
    catch (Exception) {
        console.log('Unable To  Validate Modified Date');
    }
}

const verifyAssignedReviewerIsAbleToViewDetailsWithNominationDisable = (projectName) => {
    try {

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        expect(vdn.btnCreation.isPresent()).toBe(false).then(function () {
            console.log("Create New Button Is Not Displayed");
        });

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        expect(vdn.assignUsersToProjectTab.isPresent()).toBe(false).then(function () {
            console.log("User tab is Not Displayed in the view Project details page");
        });

        expect(vdn.digitalTextBooksTab.isPresent()).toBe(true).then(function () {
            console.log("Digital Text Book tab is Displayed in the view Project details page");
        });

        // expect(vdn.assertNominationTab.isPresent()).toBe(true).then(function () {
        //     console.log("Nomination tab is Displayed in the view Project details page");
        // });

        expect(vdn.contributionDashBoardTab.isPresent()).toBe(true).then(function () {
            console.log("Contribution Dashboard tab is Displayed in the view Project details page");
        });

        expect(vdn.assertReportsTab.isPresent()).toBe(true).then(function () {
            console.log("Reports tab is Displayed in the view Project details page");
        });

    }
    catch (Exception) {
        console.log('Unable to Verify Details In The Project Details Page ')
    }
}


const createProjectWithAllContentTypes = () => {
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

        // var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        // var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        // var nominationEndDate = cred[41]['CourseName'];
        // var shortlistEndDate = cred[41]['CourseDescription'];
        // var contributionEndDate = cred[41]['Title'];
        // var projectEndDate = cred[41]['TitleDescription'];

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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertToastMsg), 20000, "Project Publish Msg is not Displayed");
        // expect(vdn.assertToastMsg.isPresent().toBeTrue()).then(function(){
        //         console.log(" course card is validated");
        //     })

        // expect(vdn.assertToastMsg.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })

        browser.sleep(3000);

    } catch (err) {
        console.log(err);
    }
    return projectName;
}



const addSampleFromContriutionSideAndNominate = (projectName) => {
    try {
        browser.sleep(1000);
        // var Url = getAppURL.ConfigurePath().AppURL;
        // browser.get(Url);
        browser.sleep(4000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSunriseContributer), 20000, " startDateCalendar is not available");
        // vdn.selSunriseContributer.click();
        // browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkAllMyProjects), 20000, " startDateCalendar is not available");
        // vdn.clkAllMyProjects.click();
        // browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(10000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSelectContentTypes), 20000, "Select Content Type Button is not Present");
        vdn.btnSelectContentTypes.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkPracticeQuestion), 20000, "Checkbox is not Present");
        vdn.checkPracticeQuestion.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkeTextbook), 20000, "Checkbox is not Present");
        vdn.checkeTextbook.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkExplanationContent), 20000, "Checkbox is not Present");
        vdn.checkExplanationContent.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkLearningResource), 20000, "Checkbox is not Present");
        vdn.checkLearningResource.click();
        browser.sleep(2000);

        //   browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkLearningPlanUnit), 20000, "Checkbox is not Present");
        //   vdn.checkLearningPlanUnit.click();
        //   browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(10000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectedContentTypeSuccess), 20000, "Content Type not Success");
        // expect(vdn.selectedContentTypeSuccess.isPresent()).toBe(true).then(function () {
        //     console.log("Selected Content type(s) saved successfully");
        // });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxUploadSample), 20000, "Checkbox not Present");
        vdn.checkBoxUploadSample.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUploadSample), 20000, "Checkbox not Present");
        vdn.clkUploadSample.click();
        browser.sleep(6000);



        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkeTextbook), 20000, "Checkbox not Present");
        // vdn.clkeTextbook.click();
        // browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Checkbox not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "Checkbox not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Checkbox not Present");
        vdn.clkContnue.click();
        browser.sleep(5000);



        utilityFun.uploadParticularFile(pdf);
        expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });


        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(2000);
        expect(vdn.assertContentSentReviewMsg.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });

        browser.sleep(2000);
        expect(vdn.assertNoOfSamples.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });

        wait.waitForElementVisibility(vdn.clkBackBtn, 20000);
        vdn.clkBackBtn.click();
        browser.sleep(8000);


        wait.waitForElementVisibility(vdn.btnNominate, 20000);
        vdn.btnNominate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationSent), 20000, "Nomination set not Success");
        expect(vdn.assertNominationSent.isPresent()).toBe(true).then(function () {
            console.log("Nomination Sent Successfully");
        });

        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}


const verifySourcingOrgAdminIsAbleToViewSamples = (projectName) => {
    try {
        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[2]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In My Projects tab ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(7000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationTab), 20000, "Nomination Tab is not Displayed");
        vdn.assertNominationTab.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkPendingOpen), 20000, "Open Pending User not Displayed");
        vdn.clkPendingOpen.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkViewSample), 20000, "Open Pending User not Displayed");
        vdn.clkViewSample.click();
        browser.sleep(8000);
        expect(vdn.assertTotalCountInContentTypeSec.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In My Projects tab ");
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkeTextbook), 20000, "Open Pending User not Displayed");
        vdn.clkeTextbook.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUploadedSampleContentType), 20000, "Open Pending User not Displayed");
        vdn.clkUploadedSampleContentType.click();
        browser.sleep(8000);
    }
    catch (Exception) {
        console.log('Unable Accept Nomination')
    }
}


const verifyModifiedProjectDates = () => {
    expect(vdn.nominationEndDateInDetails.getText()).toEqual(utility.nominationEndDateExpected());
    console.log('Nomination Date Is Displayed As Entered ');


    expect(vdn.shortlistEndDateInDetails.getText()).toEqual(utility.shortlistEndDateExpected());
    console.log('Shortlist End Date Is Displayed As Entered ');


    expect(vdn.assertContributionEndDate.getText()).toEqual(utility.contributionEndDateExpected());
    console.log('Contribution End Date Is Displayed As Entered ');

    expect(vdn.projectEndDateInDetails.getText()).toContain(utility.projectEndDateExpected());
    console.log('Project End Date Is Displayed As Entered ');
}

const assignOrgContributorAndOrgReviewerToCreatedProject = (projectName) => {
    try {

        console.log("Admin User is trying to Assign Contributor")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var openProject = element(by.xpath(var1 + var2 + var3));

        browser.sleep(1000);
        openProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUserTab), 20000, "Assign User Tab Not Present");
        vdn.assignUserTab.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys('testspider');
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer not Present");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.clear();
        vdn.enterSearchField.sendKeys('vdnstag');
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContributor), 20000, "Reviewer not Present");
        vdn.selectContributor.click();
        browser.sleep(2000);


        expect(vdn.assertNominationEndDate.getText()).toEqual(utility.nominationEndDateExpected());
        console.log('Nomination Date Is Displayed As Entered ');


        expect(vdn.assertShortlistEndDate.getText()).toEqual(utility.shortlistEndDateExpected());
        console.log('Shortlist End Date Is Displayed As Entered ');


        expect(vdn.assertContributionAndReviewEndDate.getText()).toEqual(utility.contributionEndDateExpected());
        console.log('Contribution End Date Is Displayed As Entered ');

        expect(vdn.assertProjectEndDate.getText()).toContain(utility.projectEndDateExpected());
        console.log('Project End Date Is Displayed As Entered ');


    }
    catch (Exception) {
        console.log('Unable to Assign Contributor To the Project')
    }
}




const verifyModifiedProjectDatesOnProjectDetails = (projectName) => {

    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
    vdn.clkMyProjectsOnIndContributor.click();
    browser.sleep(3000);

    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::button[1]";
    browser.sleep(10000);
    var openProject = element(by.xpath(var1 + var2 + var3));

    browser.sleep(1000);
    openProject.click();
    browser.sleep(5000);

    expect(vdn.assertNominationEndDate.getText()).toEqual(utility.nominationEndDateExpected());
    console.log('Nomination Date Is Displayed As Entered ');


    expect(vdn.assertShortlistEndDate.getText()).toEqual(utility.shortlistEndDateExpected());
    console.log('Shortlist End Date Is Displayed As Entered ');


    expect(vdn.assertContributionAndReviewEndDate.getText()).toEqual(utility.contributionEndDateExpected());
    console.log('Contribution End Date Is Displayed As Entered ');

    expect(vdn.assertProjectEndDate.getText()).toContain(utility.projectEndDateExpected());
    console.log('Project End Date Is Displayed As Entered ');
}

const verifyEnrolmentPopUpIsDisplayed = () => {
    try {

        browser.sleep(5000);

        expect(vdn.enrollmentPopup.isPresent()).toBe(true).then(function () {
            console.log("Enrollment Popup Is Present After Login");
        });

        expect(vdn.assertOrgOption.isPresent()).toBe(true).then(function () {
            console.log("Organization Option Is Displayed Enrollment Popup");
        });

        expect(vdn.assertIndOption.isPresent()).toBe(true).then(function () {
            console.log("Individual Option Is Displayed Enrollment Popup");
        });

        expect(vdn.assertCheckBox.isPresent()).toBe(true).then(function () {
            console.log("Checkbox Is Displayed Enrollment Popup");
        });

    }
    catch (Exception) {
        console.log('Unable To Display Enrollment Popup with Individual and Organozation Option')
    }
}

const OpenAprovedProjectAndAssignContributeRole = () => {
    try {


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Project Is not Displayed");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openApprovedProject), 20000, "Approved Project Not Present");
        vdn.openApprovedProject.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUserTab), 20000, "Assign User Tab Not Present");
        vdn.assignUserTab.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.clear();
        vdn.enterSearchField.sendKeys('test');
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContributor), 20000, "Reviewer not Present");
        vdn.selectContributor.click();
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('Unable To Assign Contributor Role');
    }
}

const verifyMyContentsTabIsAvailable = () => {
    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertMyContent), 20000, "My Content Tab Is not Present");
        expect(vdn.assertMyContent.isPresent()).toBe(true).then(function () {
            console.log("My Content Tab Is Displayed");
        });
        vdn.assertMyContent.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertMyContentHeading), 20000, "My Content Tab Is not Present");
        expect(vdn.assertMyContentHeading.isPresent()).toBe(true).then(function () {
            console.log("My Content Heading Is Displayed Post Clicking On My Content Tab");
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertTotalContributed), 20000, "Total Contributed Option Is not Present");
        expect(vdn.assertTotalContributed.isPresent()).toBe(true).then(function () {
            console.log("Total Contributed Option Is Displayed Post Clicking On My Content Tab");
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertPublishedOnDiksha), 20000, "Published On Diksha Option Is not Present");
        expect(vdn.assertPublishedOnDiksha.isPresent()).toBe(true).then(function () {
            console.log("Published On Diksha Option Is Displayed Post Clicking On My Content Tab");
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNotPublishedOnDiksha), 20000, "Not Published On Diksha Option Is not Present");
        expect(vdn.assertNotPublishedOnDiksha.isPresent()).toBe(true).then(function () {
            console.log("Not Published On Diksha Option Is Displayed Post Clicking On My Content Tab");
        });

    }
    catch (Exception) {
        console.log('Unable To Find My Contents Tab');
    }
}

const verifyContributorOrgAdminIsAbleToSearchAndAssignRoles = (projectName) => {
    try {

        console.log("Admin User is trying to Assign Contributor")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var openProject = element(by.xpath(var1 + var2 + var3));

        browser.sleep(1000);
        openProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUserTab), 20000, "Assign User Tab Not Present");
        vdn.assignUserTab.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys('sunrise8');
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer not Present");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Reviewer");
        });



        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.clear();
        vdn.enterSearchField.sendKeys('test');
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContributor), 20000, "Reviewer not Present");
        vdn.selectContributor.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Contributor");
        });

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        // vdn.enterSearchField.click();
        // vdn.enterSearchField.clear();
        // vdn.enterSearchField.sendKeys('vdncontr');
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        // vdn.clkSearchbtn.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        // vdn.selectRole.click();
        // browser.sleep(2000);


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectBoth), 20000, "Reviewer not Present");
        // vdn.selectBoth.click();
        // browser.sleep(2000);

        // expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
        //     console.log("Roles Updated as Both Reviewer And Contributer");
        // });



    }
    catch (Exception) {
        console.log('Unable To Search And Assign Role');
    }
}


const changeToAdminRoleInManageUsersTab = () => {
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "Clicked on My Projects tab")
    vdn.clkMyProjectsOnIndContributor.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkManageUsers), 20000, "Manage Users Tab is not available");
    vdn.clkManageUsers.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
    vdn.enterSearchField.click();
    vdn.enterSearchField.sendKeys('VDNStag21');
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
    vdn.clkSearchbtn.click();
    browser.sleep(2000);

    // expect(vdn.assertUser.isPresent()).toBe(true).then(function () {
    //     console.log("User is available with User Role");
    // })

    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkOnChangeRole), 20000, "Change Role field is not present");
    vdn.clkOnChangeRole.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.changeToAdminRole), 20000, "Admin is not present");
    vdn.changeToAdminRole.click();
    //browser.sleep(2000);

    // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRoleUpdatedMessage), 20000, "Role Updated message is not Displayed");

    // expect(vdn.assertRoleUpdatedMessage.isPresent()).toBe(true).then(function () {
    //     console.log("Role updated  from user to Admin successfully ");
    // })

    browser.sleep(3000);
}

const changeToUserRoleInManageUsersTab = () => {
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkManageUsers), 20000, "Manage Users Tab is not available");
    vdn.clkManageUsers.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
    vdn.enterSearchField.click();
    vdn.enterSearchField.sendKeys('VDNStag21');
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
    vdn.clkSearchbtn.click();
    browser.sleep(2000);

    // expect(vdn.assertUser.isPresent()).toBe(true).then(function () {
    //     console.log("User is available with Admin Role");
    // })

    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkOnChangeRole), 20000, "Change Role field is not present");
    vdn.clkOnChangeRole.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.changeToUserRole), 20000, "User is not present");
    vdn.changeToUserRole.click();
    //browser.sleep(2000);

    // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRoleUpdatedMessage), 20000, "Role Updated message is not Displayed");

    // expect(vdn.assertRoleUpdatedMessage.isPresent()).toBe(true).then(function () {
    //     console.log("Role updated  from Admin to User successfully ");
    // })

    browser.sleep(3000);

}

const verifyManageUsersAndAllProjectsTabPostRoleChangedToAdmin = () => {
    browser.sleep(3000);

    expect(vdn.clkManageUsers.isPresent()).toBe(true).then(function () {
        console.log("Manage Users tab is displayed post role changed to Admin");
    })

    browser.sleep(3000);

    expect(vdn.clkAllMyProjects.isPresent()).toBe(true).then(function () {
        console.log("All Projects tab is displayed post role changed to Admin");
    })

    browser.sleep(3000);
}

const verifyNoManageUsersAndAllProjectsTabPostRoleChangedToUser = () => {
    browser.sleep(3000);

    expect(vdn.clkManageUsers.isPresent()).toBe(false).then(function () {
        console.log("Manage Users tab is not displayed post role changed to Admin");
    })

    browser.sleep(3000);

    expect(vdn.clkAllMyProjects.isPresent()).toBe(false).then(function () {
        console.log("All Projects tab is not displayed post role changed to Admin");
    })

    browser.sleep(3000);
}

const createProjectWithIndividualContributor = () => {
    var projectName;
    try {
        console.log("user is trying to create a Project")
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt1), 20000, "Options Not Present");
        vdn.selectOpt1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);

        projectName = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Enter Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName);
        browser.sleep(1000);

        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Enter Project Description Field Is Not Present");
        vdn.enterProjectDesc.sendKeys(projectDesc);
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
        vdn.fromOrgOnly.click();
        browser.sleep(1000);

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
        vdn.enterNameOrOrg.sendKeys('Pass123'); //
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.searchBtn), 20000, "Search Button Not Available");
        vdn.searchBtn.click();
        browser.sleep(4000);

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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.toastMessage), 20000, "Project Publish Msg is not Displayed");
        // expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })

        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('Unable To Create Project With Individual Contributor')
    }
    return projectName;
}

const verifyApprovedStatusForProjectWithIndividualContributor = (projectName) => {

    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
    vdn.clkMyProjectsOnIndContributor.click();
    browser.sleep(3000);

    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::span[text()='Approved']";
    let var4 = "')]";
    browser.sleep(10000);

    var assertCreatedProject = element(by.xpath(var1 + var2 + var4));
    var assertApprovedStatus = element(by.xpath(var1 + var2 + var3));

    browser.sleep(3000);

    expect(assertCreatedProject.isPresent()).toBe(true).then(function () {
        console.log("Created Project is Available is My Projects");
    })

    expect(assertApprovedStatus.isPresent()).toBe(true).then(function () {
        console.log("Approved status is visible for Created Project");
    })

}


const createProjectWithContributorOrgAdmin = () => {
    var projectName1;
    try {
        console.log("user is trying to create a Project")
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt1), 20000, "Options Not Present");
        vdn.selectOpt1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);

        projectName1 = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Enter Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName1);
        browser.sleep(1000);

        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Enter Project Description Field Is Not Present");
        vdn.enterProjectDesc.sendKeys(projectDesc);
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
        vdn.fromOrgOnly.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromSetOfSelContributors), 20000, "From Set Of Contributors Not Available");
        vdn.fromSetOfSelContributors.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelContributors), 20000, "Select Contributors Link Not Available");
        vdn.clkSelContributors.click();
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.dropDownContrType), 20000, "Contributor Type Dropdown Not Available");
        // vdn.dropDownContrType.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selIndividualType), 20000, "Individual Contributor Type Is Not Available");
        // vdn.selIndividualType.click();
        // browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterNameOrOrg), 20000, "Eenter Name or Org Field Not Available");
        vdn.enterNameOrOrg.click();
        vdn.enterNameOrOrg.sendKeys('Karnataka');
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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.toastMessage), 20000, "Project Publish Msg is not Displayed");
        // expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })

        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('Unable To Create Project With Contributor Org Admin')
    }
    return projectName1;
}

const verifyPendingApprovalStatusForProjectWithDigitalTextBook = (projectName) => {

    browser.sleep(3000);

    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::span[text()='Pending']";
    let var4 = "')]";
    browser.sleep(10000);

    var assertNominatedDigitalTextbookProject = element(by.xpath(var1 + var2 + var4));
    var assertApprovedStatus = element(by.xpath(var1 + var2 + var3));

    browser.sleep(3000);

    expect(assertNominatedDigitalTextbookProject.isPresent()).toBe(true).then(function () {
        console.log("Nominated DigitalTextbook Project is Available is All Projects");
    })

    expect(assertApprovedStatus.isPresent()).toBe(true).then(function () {
        console.log("Pending status is visible for Nominated DigitalTextbook Project");
    })

}

const addSample = (projectName) => {
    try {
        browser.sleep(1000);
        browser.sleep(1000);
        var Url = getAppURL.ConfigurePath().AppURL;
        browser.get(Url);
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selCherryContributer), 20000, " startDateCalendar is not available");
        vdn.selCherryContributer.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkAllMyProjects), 20000, " startDateCalendar is not available");
        vdn.clkAllMyProjects.click();
        browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        browser.executeScript("arguments[0].scrollIntoView();", assertProjInAllProjTab);

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSelectContentTypes), 20000, "Select Content Type Button is not Present");
        vdn.btnSelectContentTypes.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCourseAssessment), 20000, "selectCourseAssessment is not Present");
        vdn.selectCourseAssessment.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(5000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxUploadSample), 20000, "Checkbox not Present");
        vdn.checkBoxUploadSample.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUploadSample), 20000, "Checkbox not Present");
        vdn.clkUploadSample.click();
        browser.sleep(6000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.courseCreateNewButton), 20000, "Checkbox not Present");
        vdn.courseCreateNewButton.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltCourseAssessmentContribute), 20000, "Checkbox not Present");
        vdn.sltCourseAssessmentContribute.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Checkbox not Present");
        vdn.clkContnue.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.radioButtonEcmlCreation1), 20000, "Checkbox not Present");
        vdn.radioButtonEcmlCreation1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnuePopUp), 20000, "Checkbox not Present");
        vdn.clkContnuePopUp.click();
        browser.sleep(12000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(vdn.addQuestionSet, 20000, "addQuestionSet is not available");
        vdn.addQuestionSet.click();
        browser.sleep(2000);
        vdn.sltQuestionCheckbox.click();
        browser.sleep(2000);
        vdn.nextButton.click();
        browser.sleep(1000);

        quesSetTitle = "Question" + faker.randomData().firstname;
        vdn.questionSetTitle.sendKeys(quesSetTitle);
        browser.sleep(1000);

        vdn.addQuestionSetButton.click();
        browser.sleep(1000);

        vdn.savebutton.click();
        browser.sleep(1000);

        vdn.closePopUpButton.click();
        browser.sleep(1000);

        vdn.closeEditor.click();
        browser.sleep(1000);

        browser.switchTo().defaultContent();
        browser.sleep(8000);

        vdn.btnSubmitContentType.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(vdn.clkBackBtn, 20000);
        vdn.clkBackBtn.click();
        browser.sleep(8000);
        browser.refresh();
        browser.sleep(1000);

        wait.waitForElementVisibility(vdn.btnNominate, 20000);
        vdn.btnNominate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}

const verifyProjectAvailableInAllProjectsTab = (projectName) => {
    var contentName;
    var quesSetTitle;
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, " click My project is not available");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.executeScript("arguments[0].scrollIntoView();", vdn.uploadContentButton);
        vdn.uploadContentButton.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.courseCreateNewButton), 20000, "Checkbox not Present");
        vdn.courseCreateNewButton.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltCourseAssessmentContribute), 20000, "Checkbox not Present");
        vdn.sltCourseAssessmentContribute.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Checkbox not Present");
        vdn.clkContnue.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.radioButtonEcmlCreation1), 20000, "Checkbox not Present");
        vdn.radioButtonEcmlCreation1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnuePopUp), 20000, "clkContnuePopUp not Present");
        vdn.clkContnuePopUp.click();
        browser.sleep(15000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(vdn.addQuestionSet, 20000, "addQuestionSet is not available");
        vdn.addQuestionSet.click();
        browser.sleep(2000);
        vdn.sltQuestionCheckbox.click();
        browser.sleep(2000);
        vdn.nextButton.click();
        browser.sleep(1000);

        quesSetTitle = "Question" + faker.randomData().firstname;
        vdn.questionSetTitle.sendKeys(quesSetTitle);
        browser.sleep(1000);

        vdn.addQuestionSetButton.click();
        browser.sleep(1000);

        vdn.savebutton.click();
        browser.sleep(1000);

        vdn.closePopUpButton.click();
        browser.sleep(1000);

        vdn.closeEditor.click();
        browser.sleep(1000);

        browser.switchTo().defaultContent();
        browser.sleep(8000);

        vdn.submitForReviewContentButton.click();
        browser.sleep(4000);

        contentName = "Title" + faker.randomData().firstname;
        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys(contentName);
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(vdn.clkBackBtn, 20000);
        vdn.clkBackBtn.click();
        browser.sleep(8000);
        browser.refresh();
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('Created Project Is Not Available In All Project Tab For Contributors')
    }
    return { contentName, quesSetTitle };
}


const verifyProjectCount = (questionTitle, projectName, title) => {
    try {
        browser.sleep(1000);
        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        let var4 = "')]//following::span[contains(text(),'Approval Pending')]";
        let var5 = questionTitle;
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        var clkCourseUnit = element(by.xpath(var1 + var5 + var4));
        var comment = "test comment";
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(7000);
        vdn.aproovePendingOpenButton.click();
        browser.sleep(5000);
        clkCourseUnit.click();
        browser.sleep(2000);

        if (title === "sendBackForCorrection") {
            vdn.sendBackForCorrectionButton.click();
            vdn.addComments.sendKeys(comment);
            vdn.submitReviewbutton.click();
        } else if (title === "publish") {
            vdn.publishButton.click();
        } else if (title === "reject") {
            vdn.rejectButton.click();
            vdn.addComments.sendKeys(comment);
            vdn.submitReviewbutton.click();
        }
        vdn.clkBackBtn.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.approvalStatus), 20000, " click all project is not available");
        (vdn.approvalStatus.getText()).then(function (statusAP) {
            vdn.approvalPendingCount.getText().then(function (totalAP) {
                expect((statusAP).includes(totalAP));
            })
        })
        browser.sleep(2000);
        (vdn.totalCount.getText()).then(function (a) {
            (vdn.approvalPendingCount.getText()).then(function (b) {
                (vdn.approvedCount.getText()).then(function (c) {
                    (vdn.rejectedCount.getText()).then(function (d) {
                        (vdn.correctionsPending.getText()).then(function (e) {
                            var total = parseInt(a);
                            var approvPending = parseInt(b);
                            var approved = parseInt(c);
                            var reject = parseInt(d);
                            var correctionsPend = parseInt(e);
                            var totalCount = approvPending + approved + reject + correctionsPend;
                            var approvalPendingCount = total - (approved + reject + correctionsPend);
                            var approvedCount = total - (approvPending + reject + correctionsPend);
                            var rejectCount = total - (approvPending + correctionsPend + approved);
                            var correctionPendingCount = total - (approvPending + approved + reject);
                            expect(total).toEqual(totalCount);
                            expect(approvalPendingCount).toEqual(approvPending);
                            expect(approvedCount).toEqual(approved);
                            expect(rejectCount).toEqual(reject);
                            expect(correctionPendingCount).toEqual(correctionsPend);
                            console.log("Total count is " + total);
                            console.log("Total approval pending count is " + approvPending);
                            console.log("Total reject count is " + approved);
                            console.log("Total approved count is " + reject);
                            console.log("Total correction pending count is " + correctionPendingCount);
                        })
                    })
                })
            })
        })

        browser.sleep(5000);
    }
    catch (Exception) {
        console.log('Failed')
    }
}


const reviewContent = (projectName, title) => {
    try {
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);
        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        let var4 = "')]//following::span[contains(text(),'Review Pending')]";
        let var5 = "//*[contains(text(),'";
        let var6 = title;
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        var clkReviewPending = element(by.xpath(var5 + var6 + var4));
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(7000);
        vdn.reviewContent.click();
        browser.sleep(2000);
        clkReviewPending.click();
        browser.sleep(2000);
        vdn.submitForApproval.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(vdn.clkBackBtn, 20000);
        vdn.clkBackBtn.click();
        browser.sleep(1000);
    }
    catch (Exception) {
        console.log('Failed')
    }
}

const openApprovedProjectInMyProjectsForIndividualContributor =() =>{
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Projects Tab is not available");
    vdn.clkMyProjectsOnIndContributor.click();
    browser.sleep(3000);

    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(3000);


    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openApprovedProject), 20000, "Approved Project is not available");
    vdn.openApprovedProject.click();
    browser.sleep(3000);

}

const uploadContentAndVerifyDraftInTOCpage = () => {
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentButton), 20000, "Upload Button is not available");
    vdn.uploadContentButton.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewBtn), 20000, "Create New Button is not available");
    vdn.createNewBtn.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltCourseAssessmentContribute), 20000, "Image is not available");
    vdn.sltCourseAssessmentContribute.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Continue button is not available");
    vdn.clkContnue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.radioButtonEcmlCreation1), 20000, "Interactive Content online is not available");
    vdn.radioButtonEcmlCreation1.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnuePopUp), 20000, "Continue button is not available");
    vdn.clkContnuePopUp.click();
    
    browser.sleep(15000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(7000);
    wait.waitForElementVisibility(vdn.addQuestionSet, 20000, "addQuestionSet is not available");
    vdn.addQuestionSet.click();
    browser.sleep(5000);
    vdn.sltQuestionCheckbox.click();
    browser.sleep(2000);
    vdn.nextButton.click();
    browser.sleep(3000);

    quesSetTitle = "Question" + faker.randomData().firstname;
    vdn.questionSetTitle.sendKeys(quesSetTitle);
    browser.sleep(1000);

    vdn.addQuestionSetButton.click();
    browser.sleep(1000);

    vdn.savebutton.click();
    browser.sleep(1000);

    vdn.closePopUpButton.click();
    browser.sleep(1000);

    vdn.closeEditor.click();
    browser.sleep(1000);

    browser.switchTo().defaultContent();
    browser.sleep(8000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.editDetails), 20000, "EditDetails option is not available");
    vdn.editDetails.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName), 20000, "Name field is not available");
    vdn.enterName.click();
    vdn.enterName.sendKeys('Test');
    browser.sleep(3000);


    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterCopyRight), 20000, "copy right year field is not available");
    vdn.enterCopyRight.click();
    vdn.enterCopyRight.sendKeys('2022');
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.saveBton), 20000, "Save button is not available");
    vdn.saveBton.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContentSavedToastMessage), 20000, "content updated successfully message is not displayed");

    expect(vdn.assertContentSavedToastMessage.isPresent()).toBe(true).then(function () {
        console.log("content updated successfully message is displayed");
    })
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.backBtn), 20000, "back button is not available");
    vdn.backBtn.click();
    browser.sleep(3000);

   browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.bulkUploadContentBtn), 20000, "Bulk upload content button is not Displayed");

    expect(vdn.bulkUploadContentBtn.isPresent()).toBe(true).then(function () {
        console.log("bulk upload content button is displayed in TOC page");
    })

    browser.sleep(3000);

    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertDraftInTOC), 20000, "Draft is not Displayed");

    expect(vdn.assertDraftInTOC.isPresent()).toBe(true).then(function () {
        console.log("Draft is displayed in TOC page");
    })

    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.kababMenu), 20000, "kabab menu button is not available");
    vdn.kababMenu.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.deleteDraft), 20000, "Delete option is not available");
    vdn.deleteDraft.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.yesBtn), 20000, "Yes button is not available");
    vdn.yesBtn.click();
    browser.sleep(6000);

}




const verifydefaultContributorOrgAdminIsAbleToSearchAndAssignRoles = (projectName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var reviewerRole = cred[0]['Title'];
        var contributerRole = cred[1]['Title'];
        var bothRole = cred[2]['Title'];

        console.log("Admin User is trying to Assign Contributor")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var openProject = element(by.xpath(var1 + var2 + var3));

        browser.sleep(1000);
        openProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUserTab), 20000, "Assign User Tab Not Present");
        vdn.assignUserTab.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys(reviewerRole);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer not Present");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Reviewer");
        });



        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.clear();
        vdn.enterSearchField.sendKeys(contributerRole);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContributor), 20000, "Reviewer not Present");
        vdn.selectContributor.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Contributor");
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.clear();
        vdn.enterSearchField.sendKeys(bothRole);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectBoth), 20000, "Reviewer not Present");
        vdn.selectBoth.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as Both Reviewer And Contributer");
        });



    }
    catch (Exception) {
        console.log('Unable To Search And Assign Role');
    }
}



       

        

const verifyCreatedProjectIsAvailableInIndividualContentNotTargetedToAnyCollectionSection = (projectName) => {

    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkForIndividualContentNotForAnyCollectionSection), 20000, "For Individual Content not for any collection Is Not Present");
    vdn.clkForIndividualContentNotForAnyCollectionSection.click();
    browser.sleep(3000);

    let var1 = "(//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')])[3]";
    let var4 = "//following::button[1]";
    browser.sleep(10000);

    var assertCreatedProject = element(by.xpath(var1 + var2 + var3));
    var openCreatedProject = element(by.xpath(var1 + var2 + var3 + var4));
    console.log(assertCreatedProject);

    browser.sleep(3000);

    expect(assertCreatedProject.isPresent()).toBe(true).then(function () {
        console.log("Created Project is Available in For Individual content not for any collection section");
    })

    browser.wait(protractor.ExpectedConditions.visibilityOf(openCreatedProject), 20000, "For Individual Content not for any collection Is Not Present");
    openCreatedProject.click();
    browser.sleep(3000);

    expect(vdn.assertNominations.isPresent()).toBe(true).then(function () {
        console.log("Nomination is present in project created with Skip review disabled");
    })

    browser.sleep(3000);

    expect(vdn.assertReviewEnabledMessageInProject.isPresent()).toBe(false).then(function () {
        console.log("Skip review is disabled  in the  created project");
    })

    browser.sleep(3000);

}

const createProjectWithOrgOnlyForNotTargetedToAnyCollection =() =>{
    var projectName;
    try {
        console.log("user is trying to create a Project")
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Not Present");
        vdn.selectOpt3.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);

        projectName = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Enter Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName);
        browser.sleep(1000);

        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Enter Project Description Field Is Not Present");
        vdn.enterProjectDesc.sendKeys(projectDesc);
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
        vdn.fromOrgOnly.click();
        browser.sleep(3000);


        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.skipReviewBtn), 20000, "Skip Review Checkbox Is Not Present");
        vdn.skipReviewBtn.click();
        browser.sleep(2000);


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
        browser.sleep(5000);

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
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUpload), 20000, "Upload button is not available");
        vdn.clkUpload.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelectFile), 20000, "select file is not available");
        vdn.clkSelectFile.click();
        browser.sleep(3000);

        utilityFun.uploadParticularFile(pdf);
        browser.sleep(2000);

    
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkOnBoard), 20000, "Board dropdown is not available");
        // vdn.clkOnBoard.click();
        // browser.sleep(3000);

        
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selBoard), 20000, "CBSE is not available");
        // vdn.selBoard.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selMedium), 20000, "Medium dropdown is not available");
        // vdn.selMedium.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selMed1), 20000, "English is not available");
        // vdn.selMed1.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectClass), 20000, "Grade dropdown is not available");
        // vdn.selectClass.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selClass1), 20000, "Grade 1 is not available");
        // vdn.selClass1.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSubj), 20000, "Subject dropdown is not available");
        // vdn.selSubj.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSub1), 20000, "English is not available");
        // vdn.selSub1.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selClass), 20000, "English is not available");
        // vdn.selClass.click();
        // browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        //browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.toastMessage), 20000, "Project Publish Msg is not Displayed");
        // expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })

        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('Unable To Create Project With Org only with skip review enabled');
    }
    return projectName;
}

const verifyCreatedProjectIsAvailableInIndividualContentNotTargetedToAnyCollectionSectionForSkipReviewEnabled = (projectName) => {

    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkForIndividualContentNotForAnyCollectionSection), 20000, "For Individual Content not for any collection Is Not Present");
    vdn.clkForIndividualContentNotForAnyCollectionSection.click();
    browser.sleep(3000);

    let var1 = "(//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')])[3]";
    let var4 = "//following::button[1]";
    browser.sleep(10000);

    var assertCreatedProject = element(by.xpath(var1 + var2 + var3));
    var openCreatedProject = element(by.xpath(var1 + var2 + var3 + var4));
    console.log(assertCreatedProject);

    browser.sleep(3000);

    expect(assertCreatedProject.isPresent()).toBe(true).then(function () {
        console.log("Created Project is Available in For Individual content not for any collection section");
    })
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(openCreatedProject), 20000, "For Individual Content not for any collection Is Not Present");
    openCreatedProject.click();
    browser.sleep(3000);

    expect(vdn.assertReviewEnabledMessageInProject.isPresent()).toBe(true).then(function () {
        console.log("Skip review is enabled  in the  created project");
    })

    browser.sleep(3000);

    expect(vdn.assertNominations.isPresent()).toBe(false).then(function () {
        console.log("Nominations is not present in the project created with Skip review enabled");
    })

}

const createProjectWithIndividualContentNotTargetedToAnyCollection =() =>{
    var projectName;
    try {
        console.log("user is trying to create a Project")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Not Present");
        vdn.selectOpt3.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);
        projectName = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Enter Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName);
        browser.sleep(1000);
        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Enter Project Description Field Is Not Present");
        vdn.enterProjectDesc.sendKeys(projectDesc);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.fromOrgOnly), 20000, "Org Only Option Not Available");
        vdn.fromOrgOnly.click();
        browser.sleep(1000);
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
        vdn.enterNameOrOrg.sendKeys('Test');
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
        browser.sleep(5000);
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
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "Select Framework Dropdown is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCBSE), 20000, "Select Framework Option2 is not available");
        // vdn.selectCBSE.click();
        // browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUpload), 20000, "Upload button is not available");
        vdn.clkUpload.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelectFile), 20000, "select file is not available");
        vdn.clkSelectFile.click();
        browser.sleep(3000);
        utilityFun.uploadParticularFile(pdf);
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkOnBoard), 20000, "Board dropdown is not available");
        // vdn.clkOnBoard.click();
        // browser.sleep(3000);
        
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selBoard), 20000, "CBSE is not available");
        // vdn.selBoard.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selMedium), 20000, "Medium dropdown is not available");
        // vdn.selMedium.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selMed1), 20000, "English is not available");
        // vdn.selMed1.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectClass), 20000, "Grade dropdown is not available");
        // vdn.selectClass.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selClass1), 20000, "Grade 1 is not available");
        // vdn.selClass1.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSubj), 20000, "Subject dropdown is not available");
        // vdn.selSubj.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSub1), 20000, "English is not available");
        // vdn.selSub1.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selClass), 20000, "English is not available");
        // vdn.selClass.click();
        // browser.sleep(3000);
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        //browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.toastMessage), 20000, "Project Publish Msg is not Displayed");
        // expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log('Unable To Create Project With Individual Contributor')
    }
    return projectName;
}

const createProjectWithAnyTargetCollection =() =>{
    var projectName;
    try {
        console.log("user is trying to create a Project")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Not Present");
        vdn.selectOpt3.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);
        projectName = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Enter Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName);
        browser.sleep(1000);
        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Enter Project Description Field Is Not Present");
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
        browser.sleep(5000);
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
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "select framework is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selBoard), 20000, "CPD dropDown is not available");
        // vdn.selBoard.click();
        // browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUpload), 20000, "Upload button is not available");
        vdn.clkUpload.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelectFile), 20000, "select file is not available");
        vdn.clkSelectFile.click();
        browser.sleep(3000);
        utilityFun.uploadParticularFile(pdf);
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clickBoard), 20000, "Board dropdown is not available");
        // vdn.clickBoard.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCBSE1), 20000, "CBSE is not available");
        // vdn.selectCBSE1.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selMedium), 20000, "Medium dropdown is not available");
        // vdn.selMedium.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selMed1), 20000, "English option is not available");
        // vdn.selMed1.click();
        // browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectClass), 20000, "class dropdown is not available");
        // vdn.selectClass.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selClass1), 20000, "Class 1 is not available");
        // vdn.selClass1.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSubj), 20000, "Subject dropdown is not available");
        // vdn.selSubj.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSub1), 20000, "subject is not available");
        // vdn.selSub1.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        //browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.toastMessage), 20000, "Project Publish Msg is not Displayed");
        // expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log('Unable To Create Project ')
    }
    return projectName;
}

const verifyCreatedProjectWithSkipReviewDisabled = (projectName) => {
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkForIndividualContentNotForAnyCollectionSection), 20000, "For Individual Content not for any collection Is Not Present");
    vdn.clkForIndividualContentNotForAnyCollectionSection.click();
    browser.sleep(3000);
    let var1 = "(//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')])[3]";
    browser.sleep(10000);
    var assertCreatedProject = element(by.xpath(var1 + var2 + var3));
    //console.log(assertCreatedProject);
    browser.sleep(3000);
    expect(assertCreatedProject.isPresent()).toBe(true).then(function () {
        console.log("Created Project is Available in For Individual content not for any collection section");
    })
    browser.sleep(3000);
}


const assignReviewerRoleToTheCreatedProject = () => {
    browser.sleep(3000);

    expect(vdn.assertNominationTab.isPresent()).toBe(true).then(function () {
        console.log("Nomination Tab Is  Present");
    })

    expect(vdn.assignUsersToProjectTab.isPresent()).toBe(true).then(function () {
        console.log("Assign users to project is present");
    })

    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUsersToProjectTab), 20000, "Assign Users To Project Tab not Displayed");
        vdn.assignUsersToProjectTab.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "Select Role Option not Displayed");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer Option not Displayed");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRolesUpdated), 20000, "Roles Not Updated");
        expect(vdn.assertRolesUpdated.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated Successfully");
        });
}

const createProjectWithContentNotTargetedToAnyCollection =() =>{
    var projectName;
    try {
        console.log("user is trying to create a Project")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProject), 20000, "My Prject Is Not Present");
        vdn.clkMyProject.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreation), 20000, "Create Project Button Is Not Present");
        vdn.btnCreation.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectOpt3), 20000, "Options Not Present");
        vdn.selectOpt3.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnClkNext), 20000, "Next Button Is Not Present");
        vdn.btnClkNext.click();
        browser.sleep(1000);
        projectName = "Auto" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectName), 20000, "Enter Project Name Field Is Not Present");
        vdn.enterProjectName.click();
        vdn.enterProjectName.sendKeys(projectName);
        browser.sleep(1000);
        projectDesc = "Automation" + faker.randomData().firstname;
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterProjectDesc), 20000, "Enter Project Description Field Is Not Present");
        vdn.enterProjectDesc.sendKeys(projectDesc);
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date Is Not Present");
        vdn.nominationEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.nominationEndDate), 20000, "Nomination End Date is not available");
        vdn.nominationEndDate.click();
        vdn.nominationEndDate.sendKeys(nominationEndDate);
        console.log("Nomination End Date Selected");


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date Is Not Present");
        vdn.shortlistEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.shortlistEndDate), 20000, "Shortlist End Date is not available");
        vdn.shortlistEndDate.click();
        vdn.shortlistEndDate.sendKeys(shortlistEndDate);
        console.log("Shortlist End Date Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Is Not Present");
        vdn.contributionEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date is not available");
        vdn.contributionEndDate.click();
        vdn.contributionEndDate.sendKeys(contributionEndDate);
        console.log("Contribution End Date Selected");

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Is Not Present");
        vdn.projectEndDate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date is not available");
        vdn.projectEndDate.click();
        vdn.projectEndDate.sendKeys(projectEndDate);
        console.log("Project End Date Selected");

        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContributersAdded), 20000, "Contributors Not Added");
        // expect(vdn.assertContributersAdded.isPresent()).toBe(true).then(function () {
        //     console.log("Contributors Added From The Link Successfully ");
        // })
        // browser.executeScript('window.scrollTo(0,800);').then(function () {
        //     console.log('++++++SCROLLED UP+++++');
        // });
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Field Is Not Present");
        // vdn.contributionEndDate.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contributionEndDate), 20000, "Contribution End Date Field is not available");
        // vdn.contributionEndDate.click();
        // vdn.contributionEndDate.sendKeys(utility.contributionEndDate());
        // console.log("Select Contribution End Date");
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Field Is Not Present");
        // vdn.projectEndDate.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.projectEndDate), 20000, "Project End Date Field is not available");
        // vdn.projectEndDate.click();
        // vdn.projectEndDate.sendKeys(utility.projectEndDate());
        // console.log("Select Project End Date Field");
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNext), 20000, "Next Button is not available");
        vdn.btnNext.click();
        browser.sleep(5000);
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
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "Select Framework Dropdown is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCBSE), 20000, "Select Framework Option2 is not available");
        vdn.selectCBSE.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        //browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.toastMessage), 20000, "Project Publish Msg is not Displayed");
        // expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log('Unable To Create Project With Individual Contributor')
    }
    return projectName;
}

const verifyIndividualContributorIsAbleToNominateWithoutTargetCollection = (projectName) => {
    try {
        browser.sleep(1000);
        var Url = getAppURL.ConfigurePath().AppURL;  
        var OrganizationName = getExcelPath.ConfigurePath().OrgName;
        
        browser.get(Url);
        browser.sleep(4000);

        let v1 = "//label[text()='";
        var v2 = OrganizationName;
        console.log(v2);
        let v3 = "']//following::a[text()='Contribute'][1]";
        browser.sleep(10000);
        var selSunriseContributer = element(by.xpath(v1 + v2 + v3));

        selSunriseContributer.click();
        browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSelectContentTypes), 20000, "Select Content Type Button is not Present");
        vdn.btnSelectContentTypes.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType1), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectedContentTypeSuccess), 20000, "Content Type not Success");
        expect(vdn.selectedContentTypeSuccess.isPresent()).toBe(true).then(function () {
            console.log("Selected Content type(s) saved successfully");
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNominate), 20000, "Nominate Button not Present");
        vdn.btnNominate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationSent), 20000, "Nomination set not Success");
        // expect(vdn.assertNominationSent.isPresent()).toBe(true).then(function () {
        //     console.log("Nomination Sent Successfully");
        // });

        browser.sleep(3000);

        let var4 = "//*[contains(text(),'";
        let var5 = projectName;
        let var6 = "')]//following::span[text()='Pending']";
        browser.sleep(5000);
        var assertAutoAproved = element(by.xpath(var4 + var5 + var6));

        expect(assertAutoAproved.isPresent()).toBe(true).then(function () {
            console.log("collection is available in My project tab with nomination pending status ");
        })

    }
    catch(Exception) {
        console.log('Unable to View Created Project')
    }

}

const verifyOrgAbleToDownloadContentDetails = (projectName) => {
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkForIndividualContentNotForAnyCollectionSection), 20000, "For Individual Content not for any collection Is Not Present");
    vdn.clkForIndividualContentNotForAnyCollectionSection.click();
    browser.sleep(3000);

    let var1 = "(//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')])[3]";
    let var4 = "//following::button[1]";
    browser.sleep(10000);

    var assertCreatedProject = element(by.xpath(var1 + var2 + var3));
    var openCreatedProject = element(by.xpath(var1 + var2 + var3 + var4));
    console.log(assertCreatedProject);

    browser.sleep(3000);

    expect(assertCreatedProject.isPresent()).toBe(true).then(function () {
        console.log("Created Project is Available in For Individual content not for any collection section");
    })

    browser.wait(protractor.ExpectedConditions.visibilityOf(openCreatedProject), 20000, "For Individual Content not for any collection Is Not Present");
    openCreatedProject.click();
    browser.sleep(3000);

    expect(vdn.assertContents.isPresent()).toBe(true).then(function () {
        console.log("Contents tab is available in created project without target collection");
    })

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContents), 20000, "Contents tab is not Present");
    vdn.assertContents.click();
    browser.sleep(3000);

    expect(vdn.downloadContentDetailsBtn.isPresent()).toBe(true).then(function () {
        console.log("Download content details button is available in created project without target collection");
    })

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.downloadContentDetailsBtn), 20000, "Download content details button is not Present");
    vdn.downloadContentDetailsBtn.click();
    browser.sleep(3000);
    console.log("Org is able to download the content details of the project");
    browser.sleep(3000);

}
const verifyOrgAbleToDownloadNominationDetailsOfProject = () => {
    browser.sleep(3000);
    expect(vdn.assertNomination.isPresent()).toBe(true).then(function () {
        console.log("Nomination tab is available in created project without target collection");
    })

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNomination), 20000, "Nominations tab is not Present");
    vdn.assertNomination.click();
    browser.sleep(3000);

    expect(vdn.downloadNominationDetailsBtn.isPresent()).toBe(true).then(function () {
        console.log("Download nomination details button is available in created project without target collection");
    })

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.downloadNominationDetailsBtn), 20000, "Download nomination details button is not Present");
    vdn.downloadNominationDetailsBtn.click();
    browser.sleep(3000);
    console.log("Org is able to download the nomination details of the project");
    browser.sleep(3000);

}


const verifyOrgAbleToDownloadContributionDetailsOfTheProject = () => {
    browser.sleep(3000);
    expect(vdn.assertContributionDashboard.isPresent()).toBe(true).then(function () {
        console.log("Contribution Dashboard tab is available in created project without target collection");
    })

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContributionDashboard), 20000, "Contribution Dashboard tab is not Present");
    vdn.assertContributionDashboard.click();
    browser.sleep(3000);

    expect(vdn.downloadContributionDetailsBtn.isPresent()).toBe(true).then(function () {
        console.log("Download contribution details button is available in created project without target collection");
    })

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.downloadContributionDetailsBtn), 20000, "Download contribution details button is not Present");
    vdn.downloadContributionDetailsBtn.click();
    browser.sleep(3000);
    console.log("Org is able to download the contribution details of the project");
    browser.sleep(3000);
}

const verifyNewCredentialAbleToRegisterAsIndividualContributor = () => {
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.termsAndConditionsCheckBox), 20000, "Terms and conditions checkbox is not Present");
    vdn.termsAndConditionsCheckBox.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit button is not Present");
    vdn.btnSubmitContentType.click();

    // expect(vdn.assertEnrollmentSuccessMsg.isPresent()).toBe(true).then(function () {
    //     console.log("Enrollement success message is displayed");
    // })
    
    browser.sleep(3000);

    expect(vdn.clkAllMyProjects.isPresent()).toBe(true).then(function () {
        console.log("All My Projects tab is displayed for individual contributor");
    })

    expect(vdn.clkMyProjectsOnIndContributor.isPresent()).toBe(true).then(function () {
        console.log("My Projects tab is displayed for individual contributor");
    })

}

const createCourseProjectWithSkipReviewEnabled = () => {
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
        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.skip2levelReview), 20000, "Skip Two Level Review Not Available");
        vdn.skip2levelReview.click();
        browser.sleep(1000);

        // var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        // var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        // var nominationEndDate = cred[41]['CourseName'];
        // var shortlistEndDate = cred[41]['CourseDescription'];
        // var contributionEndDate = cred[41]['Title'];
        // var projectEndDate = cred[41]['TitleDescription'];

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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.Course), 20000, "Digital Textbook Option is not available");
        vdn.Course.click();
        browser.sleep(1000);


        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstCollection1), 20000, "Text Book Is Not Listed ");
        vdn.selectFirstCollection1.click();
        browser.sleep(10000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        browser.sleep(1000);

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

const assignDefaultContributorOrgAdminToContributerRole = (projectName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var reviewerRole = cred[0]['Title'];
        var contributerRole = cred[1]['Title'];
        var bothRole = cred[2]['Title'];

        console.log("Admin User is trying to Assign Contributor")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var openProject = element(by.xpath(var1 + var2 + var3));

        browser.sleep(1000);
        openProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUserTab), 20000, "Assign User Tab Not Present");
        vdn.assignUserTab.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys(reviewerRole);
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        // vdn.clkSearchbtn.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        // vdn.selectRole.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer not Present");
        // vdn.selectReviewer.click();
        // browser.sleep(2000);

        // expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
        //     console.log("Roles Updated as A Reviewer");
        // });



        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        // vdn.enterSearchField.click();
        // vdn.enterSearchField.clear();
        // vdn.enterSearchField.sendKeys(contributerRole);
        // browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContributor), 20000, "Reviewer not Present");
        vdn.selectContributor.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Contributor");
        });

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        // vdn.enterSearchField.click();
        // vdn.enterSearchField.clear();
        // vdn.enterSearchField.sendKeys(bothRole);
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        // vdn.clkSearchbtn.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        // vdn.selectRole.click();
        // browser.sleep(2000);


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectBoth), 20000, "Reviewer not Present");
        // vdn.selectBoth.click();
        // browser.sleep(2000);

        // expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
        //     console.log("Roles Updated as Both Reviewer And Contributer");
        // });



    }
    catch (Exception) {
        console.log('Unable To Search And Assign Role');
    }
}


const DefaultContributionOrgContributorIsAbleToUploadContentForSkipReviewEnabled = (projectName) => {
    var contentName;
    var quesSetTitle;
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, " click My project is not available");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.executeScript("arguments[0].scrollIntoView();", vdn.uploadContentButton);
        vdn.uploadContentButton.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnCreateNew), 20000, "Create New Button Not Present");
        vdn.btnCreateNew.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "Checkbox not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Checkbox not Present");
        vdn.clkContnue.click();
        browser.sleep(1000);

        utilityFun.uploadParticularFile(pdf);
        // expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
        //     console.log("Created Project Is Available In All Projects tab for contributors ");
        // });
        

        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('Created Project Is Not Available In All Project Tab For Contributors')
    }
    return { contentName, quesSetTitle };
}

const verifySourcingOrgAdminIsAbleToAcceptNominationWithoutTargetColl = (projectName) => {

    try {

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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationTab), 20000, "Nomination Tab is not Displayed");
        vdn.assertNominationTab.click();
        browser.sleep(3000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openUserForAction), 20000, "Open Pending User not Displayed");
        vdn.openUserForAction.click();
        browser.sleep(3000);

        /*browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openSample), 20000, "Open Button For Sample not Displayed");
        vdn.openSample.click();
        browser.sleep(3000);


        expect(vdn.assertSampleTitle.isPresent()).toBe(true).then(function () {
            console.log("View Sample Successfully");
        });*/

        // expect(vdn.assertSample.isPresent()).toBe(true).then(function () {
        //     console.log("View Sample Successfully");
        // });

        /*browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnBack), 20000, "Back Button For Sample not Displayed");
        vdn.btnBack.click();
        browser.sleep(3000);*/


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnAccept), 20000, "Open Pending User not Displayed");
        vdn.btnAccept.click();
        browser.sleep(2000);

        expect(vdn.assertNominatiopSuccess.isPresent()).toBe(true).then(function () {
            console.log("Nomination Updated Successfully");
        });
    }
    catch (Exception) {
        console.log('Unable Accept Nomination')
    }
}


const verifyIndividualContributorIsAbleToNominateWithoutTargetCollectionWithSample = (projectName) => {
    try {
        browser.sleep(1000);
        var Url = getAppURL.ConfigurePath().AppURL;  
        var OrganizationName = getExcelPath.ConfigurePath().OrgName;
        
        browser.get(Url);
        browser.sleep(4000);

        let v1 = "//label[text()='";
        var v2 = OrganizationName;
        console.log(v2);
        let v3 = "']//following::a[text()='Contribute'][1]";
        browser.sleep(10000);
        var selSunriseContributer = element(by.xpath(v1 + v2 + v3));

        selSunriseContributer.click();
        browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSelectContentTypes), 20000, "Select Content Type Button is not Present");
        vdn.btnSelectContentTypes.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType1), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectedContentTypeSuccess), 20000, "Content Type not Success");
        expect(vdn.selectedContentTypeSuccess.isPresent()).toBe(true).then(function () {
            console.log("Selected Content type(s) saved successfully");
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUploadSample), 20000, "Checkbox not Present");
        vdn.clkUploadSample.click();
        browser.sleep(6000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "Checkbox not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Checkbox not Present");
        vdn.clkContnue.click();
        browser.sleep(5000);



        utilityFun.uploadParticularFile(pdf);
        expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });


        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(2000);
        expect(vdn.assertContentSentReviewMsg.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });


        wait.waitForElementVisibility(vdn.btnNominate, 20000);
        vdn.btnNominate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationSent), 20000, "Nomination set not Success");
        expect(vdn.assertNominationSent.isPresent()).toBe(true).then(function () {
            console.log("Nomination Sent Successfully");
        });

        browser.sleep(3000);

       

    }
    catch(Exception) {
        console.log('Unable to View Created Project')
    }

}

const verifyUpdatedCountInContributionDashboard = (projectName) => {
    try {

        browser.sleep(1000);
        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(7000);
    
        expect(vdn.assertContributionDashboard.isPresent()).toBe(true).then(function () {
            console.log("Contribution Dashboard tab is available in created project ");
        })
    
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContributionDashboard), 20000, "Contribution Dashboard tab is not Present");
        vdn.assertContributionDashboard.click();
        browser.sleep(3000);

        expect(vdn.assertContributingOrganisation.isPresent()).toBe(true).then(function () {
            console.log("Contributing Organisation is available in created project ");
        })

        expect(vdn.assertYourOrganisation.isPresent()).toBe(true).then(function () {
            console.log("Your organisation is available in created project ");
        })

        expect(vdn.draftSec.isPresent()).toBe(true).then(function () {
            console.log("Draft section is available in created project ");
        })

        expect(vdn.reviewPendingSec.isPresent()).toBe(true).then(function () {
            console.log("Review Pending section is available in created project ");
        })

        expect(vdn.correctionsPendingSec.isPresent()).toBe(true).then(function () {
            console.log("Corrections pending section is available in created project ");
        })

        expect(vdn.acceptedSec.isPresent()).toBe(true).then(function () {
            console.log("Accepted section is available in created project ");
        })

        expect(vdn.notAcceptedSec.isPresent()).toBe(true).then(function () {
            console.log("Not Accepted section is available in created project ");
        })

        expect(vdn.approvalPendingSec.isPresent()).toBe(true).then(function () {
            console.log("Approval pending section is available in created project ");
        })

        expect(vdn.approvedSec.isPresent()).toBe(true).then(function () {
            console.log("Approved section is available in created project ");
        })

        expect(vdn.rejectedSec.isPresent()).toBe(true).then(function () {
            console.log("Rejected section is available in created project ");
        })
  
        browser.sleep(2000);

        (vdn.draftCount.getText()).then(function (a) {
            (vdn.reviewPendingCount.getText()).then(function (b) {
                (vdn.correctionsPendingCount.getText()).then(function (c) {
                    (vdn.acceptedCount.getText()).then(function (d) {
                        (vdn.notAcceptedCount.getText()).then(function (e) {
                            (vdn.approvalPendingCountYourOrg.getText()).then(function (f) {
                                (vdn.approvedCountYourOrg.getText()).then(function (g) {
                                    (vdn.rejectedCountYourOrg.getText()).then(function (h) {
                            var draftcount = parseInt(a);
                            var reviewpendingcount = parseInt(b);
                            var correctionpendingcount = parseInt(c);
                            var accpetedcount = parseInt(d);
                            var notacceptedcount = parseInt(e);
                            var approvalpendingcount = parseInt(f);
                            var approvedcount = parseInt(g);
                            var rejectedcount = parseInt(h);

                            var totalContributingOrgCount = draftcount + reviewpendingcount + correctionpendingcount + accpetedcount + notacceptedcount ;
                            var totalYourOrgCount = approvalpendingcount + approvedcount + rejectedcount ;

                            var updatedDraftCount = totalContributingOrgCount - (reviewpendingcount + correctionpendingcount + accpetedcount + notacceptedcount);
                            var updatedReviewPendingCount = totalContributingOrgCount - (draftcount + correctionpendingcount + accpetedcount + notacceptedcount);
                            var updatedCorrectionsPendingCount =  totalContributingOrgCount - (draftcount + reviewpendingcount + accpetedcount + notacceptedcount);
                            var updatedAcceptedCount = totalContributingOrgCount - (reviewpendingcount + correctionpendingcount + draftcount + notacceptedcount);
                            var updatedNotAcceptedCount = totalContributingOrgCount - (reviewpendingcount + correctionpendingcount + draftcount + accpetedcount);

                            var updatedApprovalPendingCount = totalYourOrgCount - (approvedcount + rejectedcount);
                            var updatedApprovedCount = totalYourOrgCount - (approvalpendingcount + rejectedcount);
                            var updatedRejectedCount = totalYourOrgCount - (approvalpendingcount + approvedcount);

                            
                            expect(draftcount).toEqual(updatedDraftCount);
                            expect(reviewpendingcount).toEqual(updatedReviewPendingCount);
                            expect(correctionpendingcount).toEqual(updatedCorrectionsPendingCount);
                            expect(accpetedcount).toEqual(updatedAcceptedCount);
                            expect(notacceptedcount).toEqual(updatedNotAcceptedCount);
                            expect(approvalpendingcount).toEqual(updatedApprovalPendingCount);
                            expect(approvedcount).toEqual(updatedApprovedCount);
                            expect(rejectedcount).toEqual(updatedRejectedCount);

                            console.log("Contributing Organisation count is " + totalContributingOrgCount);
                            
                            console.log("Total draft count is " + draftcount);
                            console.log("Total review pending count is " + reviewpendingcount);
                            console.log("Total corrections pending count is " + correctionpendingcount);
                            console.log("Total accepted count is " + accpetedcount);
                            console.log("Total not accepted count is " + notacceptedcount);

                            console.log("Your Organisation count is " + totalYourOrgCount);

                            console.log("Total Approval pending count is " + approvalpendingcount);
                            console.log("Total approved count is " + approvedcount);
                            console.log("Total Rejected count is " + rejectedcount);

                           
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })

        browser.sleep(5000);
    }
    catch (Exception) {
        console.log('Failed')
    }
}

const verifyUpdatedCountsUnderCourseContentPlaylistAndDigitalTextbooktab = () => {
    try{
        browser.sleep(5000);
        (vdn.totalCount.getText()).then(function (a) {
            (vdn.approvalPendingCount.getText()).then(function (b) {
                (vdn.approvedCount.getText()).then(function (c) {
                    (vdn.rejectedCount.getText()).then(function (d) {
                        (vdn.correctionsPending.getText()).then(function (e) {
                            var total = parseInt(a);
                            var approvPending = parseInt(b);
                            var approved = parseInt(c);
                            var reject = parseInt(d);
                            var correctionsPend = parseInt(e);
                            var totalCount = approvPending + approved + reject + correctionsPend;
                            var approvalPendingCount = total - (approved + reject + correctionsPend);
                            var approvedCount = total - (approvPending + reject + correctionsPend);
                            var rejectCount = total - (approvPending + correctionsPend + approved);
                            var correctionPendingCount = total - (approvPending + approved + reject);
                            expect(total).toEqual(totalCount);
                            expect(approvalPendingCount).toEqual(approvPending);
                            expect(approvedCount).toEqual(approved);
                            expect(rejectCount).toEqual(reject);
                            expect(correctionPendingCount).toEqual(correctionsPend);
                            console.log("Total count is " + total);
                            console.log("Total approval pending count is " + approvPending);
                            console.log("Total reject count is " + approved);
                            console.log("Total approved count is " + reject);
                            console.log("Total correction pending count is " + correctionPendingCount);
                        })
                    })
                })
            })
        })
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log('Failed')
    }
}

const openCreatedProject = (projectName) =>{
   
    browser.sleep(5000);
    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::button[1]";
    browser.sleep(10000);
    var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
    assertProjInAllProjTab.click();
    browser.sleep(7000);
}


const openCreatedProjectWithoutTargetCollection = (projectName) =>{
   
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkForIndividualContentNotForAnyCollectionSection), 20000, "Contribution Dashboard tab is not Present");
    vdn.clkForIndividualContentNotForAnyCollectionSection.click();
    browser.sleep(3000);

    browser.sleep(5000);
    let var1 = "(//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::button[1])[3]";

    browser.sleep(10000);
    var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
    assertProjInAllProjTab.click();
    browser.sleep(7000);
}


const contentsPublishRejectAndSendForCorrection = (projectName) =>{
   
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.publishContent2), 20000, "Content 2 is not Present");
    vdn.publishContent2.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.publishButton), 20000, "Publish button is not Present");
    vdn.publishButton.click();
    browser.sleep(6000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.rejectContent3), 20000, "Content 3 is not Present");
    vdn.rejectContent3.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.rejectButton), 20000, "Reject button is not Present");
    vdn.rejectButton.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addComments), 20000, "Add comments is not Present");
    vdn.addComments.click();
    vdn.addComments.sendKeys("Incorrect Content");
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitReviewbutton), 20000, "submit for Review button is not Present");
    vdn.submitReviewbutton.click();
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sendForCorrectionsContent4), 20000, "Content 4 is not Present");
    vdn.sendForCorrectionsContent4.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sendBackForCorrectionButton), 20000, "send for corrections button is not Present");
    vdn.sendBackForCorrectionButton.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addComments), 20000, "Add comments is not Present");
    vdn.addComments.click();
    vdn.addComments.sendKeys("Content need some corrections");
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitReviewbutton), 20000, "submit for Review button is not Present");
    vdn.submitReviewbutton.click();
    browser.sleep(5000);



}

const assignContributorAndReviewerRoleToTheProject = (projectName) =>{
   
    browser.sleep(5000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Projects tab is not Present");
    vdn.clkMyProjectsOnIndContributor.click();
    browser.sleep(3000);

    browser.sleep(5000);
    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::button[1]";

    browser.sleep(10000);
    var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
    assertProjInAllProjTab.click();
    browser.sleep(7000);

    expect(vdn.clkAllMyProjects.isPresent()).toBe(true).then(function () {
        console.log("All Projects tab is available in created project ");
    })

    expect(vdn.clkMyProjectsOnIndContributor.isPresent()).toBe(true).then(function () {
        console.log("My Projects tab is available in created project ");
    })

    expect(vdn.clkManageUsers.isPresent()).toBe(true).then(function () {
        console.log("Manage users tab is available in created project ");
    })

    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUsers), 20000, "Assign users to the projects tab is not displayed");
    vdn.assignUsers.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selRole1), 20000, "Select Role is not displayed");
    vdn.selRole1.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selContributorRole), 20000, "Contributor is not displayed");
    vdn.selContributorRole.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selRole2), 20000, "Select Role is not displayed");
    vdn.selRole1.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selReviewerRole), 20000, "Reviewer is not displayed");
    vdn.selReviewerRole.click();
    browser.sleep(3000);

}

const uploadContentFromContributorSide = (projectName) =>{
   
    browser.sleep(5000);
    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(1000);
    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });

    browser.sleep(2000);
    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::button[1]";

    browser.sleep(10000);
    var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
    assertProjInAllProjTab.click();
    browser.sleep(7000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createUploadContent), 20000, "Create button is not displayed");
    vdn.createUploadContent.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selETextbook), 20000, "Select eTextbook is not displayed");
    vdn.selETextbook.click();
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(pdf);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample1");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);

}

const uploadSecondContent = (projectName) =>{
   
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createUploadContent), 20000, "Create button is not displayed");
    vdn.createUploadContent.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selETextbook), 20000, "Select eTextbook is not displayed");
    vdn.selETextbook.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(pdf);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample2");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);

}

const uploadThirdContent = (projectName) =>{
   
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createUploadContent), 20000, "Create button is not displayed");
    vdn.createUploadContent.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selETextbook), 20000, "Select eTextbook is not displayed");
    vdn.selETextbook.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(pdf);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample3");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);

}

const uploadFourthContent = (projectName) =>{
   
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createUploadContent), 20000, "Create button is not displayed");
    vdn.createUploadContent.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selETextbook), 20000, "Select eTextbook is not displayed");
    vdn.selETextbook.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(pdf);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample4");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);

}

const contentSentForApprovalFromReviewerSide = (projectName) =>{
   
    browser.sleep(5000);

    browser.sleep(2000);
    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::button[1]";

    browser.sleep(10000);
    var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
    assertProjInAllProjTab.click();
    browser.sleep(7000);

    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openApproveContent), 20000, "open button is not displayed");
    vdn.openApproveContent.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitContenForApproval), 20000, "submit is not displayed");
    vdn.submitContenForApproval.click();
    browser.sleep(3000);

}

const approveContent2 = (projectName) => {
    browser.sleep(7000);

    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.approveContent2), 20000, "open button is not displayed");
    vdn.approveContent2.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitContenForApproval), 20000, "submit is not displayed");
    vdn.submitContenForApproval.click();
    browser.sleep(3000);

}

const approveContent3 = (projectName) => {
    browser.sleep(7000);

    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.approveContent3), 20000, "open button is not displayed");
    vdn.approveContent3.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitContenForApproval), 20000, "submit is not displayed");
    vdn.submitContenForApproval.click();
    browser.sleep(3000);

}

const approveContent4 = (projectName) => {
    browser.sleep(7000);

    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.approveContent4), 20000, "open button is not displayed");
    vdn.approveContent4.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitContenForApproval), 20000, "submit is not displayed");
    vdn.submitContenForApproval.click();
    browser.sleep(3000);

}

const verifyAllProjectsMyProjectsAndManageUsersTabForAssignedContAdmin = () => {
    browser.sleep(7000);

    expect(vdn.clkAllMyProjects.isPresent()).toBe(true).then(function () {
        console.log("All Projects tab is available in created project ");
    })

    expect(vdn.clkMyProjectsOnIndContributor.isPresent()).toBe(true).then(function () {
        console.log("My Projects tab is available in created project ");
    })

    expect(vdn.clkManageUsers.isPresent()).toBe(true).then(function () {
        console.log("Manage users tab is available in created project ");
    })
    browser.sleep(2000);

}

const verifyAssignedAdminAbleToAssignUsersToTheProject = (projectName1) => {
    browser.sleep(7000);

    browser.sleep(5000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Projects tab is not Present");
    vdn.clkMyProjectsOnIndContributor.click();
    browser.sleep(3000);

    
    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });

    browser.sleep(2000);
    
    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });

    browser.sleep(5000);
    let var1 = "//*[contains(text(),'";
    let var2 = projectName1;
    let var3 = "')]//following::button[1]";

    browser.sleep(10000);
    var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
    assertProjInAllProjTab.click();
    browser.sleep(7000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUsers), 20000, "Assign users to the projects tab is not displayed");
    vdn.assignUsers.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selRole1), 20000, "Select Role is not displayed");
    vdn.selRole1.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selContributorRole), 20000, "Contributor is not displayed");
    vdn.selContributorRole.click();
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRolesUpdated), 20000, "Roles Not Updated");
    expect(vdn.assertRolesUpdated.isPresent()).toBe(true).then(function () {
        console.log("Roles Updated Successfully with Nomination Enabled");
    });


    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selRole2), 20000, "Select Role is not displayed");
    vdn.selRole1.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selReviewerRole), 20000, "Reviewer is not displayed");
    vdn.selReviewerRole.click();
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRolesUpdated), 20000, "Roles Not Updated");
    expect(vdn.assertRolesUpdated.isPresent()).toBe(true).then(function () {
        console.log("Roles Updated Successfully with Nomination Enabled");
    });


}





const assignDefaultContributorOrgAdminToBothAndContributer = (projectName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var bothRole = cred[0]['Title'];
        var contributerRole = cred[1]['Title'];
        

        console.log("Admin User is trying to Assign Contributor")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var openProject = element(by.xpath(var1 + var2 + var3));

        browser.sleep(1000);
        openProject.click();
        browser.sleep(5000);
   

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUserTab), 20000, "Assign User Tab Not Present");
        vdn.assignUserTab.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys(bothRole);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);
        


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectBoth), 20000, "Reviewer not Present");
        vdn.selectBoth.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Both");
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.clear();
        vdn.enterSearchField.sendKeys(contributerRole);
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        // vdn.clkSearchbtn.click();
        // browser.sleep(2000);
        


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContributor), 20000, "Contributor not Present");
        vdn.selectContributor.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Contributer");
        });

        
    }
    catch (Exception) {
        console.log('Unable To Search And Assign Role');
    }
}



const addSampleFromContriutionSide = (projectName) => {
    try {
        browser.sleep(1000);
        // var Url = getAppURL.ConfigurePath().AppURL;
        // browser.get(Url);
        browser.sleep(4000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSunriseContributer), 20000, " startDateCalendar is not available");
        // vdn.selSunriseContributer.click();
        // browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkAllMyProjects), 20000, " startDateCalendar is not available");
        // vdn.clkAllMyProjects.click();
        // browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUpload), 20000, "Upload Button is not Present");
        vdn.clkUpload.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "eTextBook is not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkExplanationContent), 20000, "Checkbox is not Present");
        // vdn.checkExplanationContent.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkLearningResource), 20000, "Checkbox is not Present");
        // vdn.checkLearningResource.click();
        // browser.sleep(2000);

        //   browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkLearningPlanUnit), 20000, "Checkbox is not Present");
        //   vdn.checkLearningPlanUnit.click();
        //   browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        // vdn.btnSubmitContentType.click();
        // browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectedContentTypeSuccess), 20000, "Content Type not Success");
        // expect(vdn.selectedContentTypeSuccess.isPresent()).toBe(true).then(function () {
        //     console.log("Selected Content type(s) saved successfully");
        // });


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxUploadSample), 20000, "Checkbox not Present");
        // vdn.checkBoxUploadSample.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUploadSample), 20000, "Checkbox not Present");
        // vdn.clkUploadSample.click();
        // browser.sleep(6000);



        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkeTextbook), 20000, "Checkbox not Present");
        // vdn.clkeTextbook.click();
        // browser.sleep(2000);


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Checkbox not Present");
        // vdn.eTextbookCreateNewBtn.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "Checkbox not Present");
        // vdn.slteTextbookContribute.click();
        // browser.sleep(1000);


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Checkbox not Present");
        // vdn.clkContnue.click();
        // browser.sleep(5000);



        utilityFun.uploadParticularFile(pdf);
        // expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
        //     console.log("Created Project Is Available In All Projects tab for contributors ");
        // });


        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        // browser.sleep(2000);
        // expect(vdn.assertContentSentReviewMsg.isPresent()).toBe(true).then(function () {
        //     console.log("Created Project Is Available In All Projects tab for contributors ");
        // });

        // browser.sleep(2000);
        // expect(vdn.assertNoOfSamples.isPresent()).toBe(true).then(function () {
        //     console.log("Created Project Is Available In All Projects tab for contributors ");
        // });

        // wait.waitForElementVisibility(vdn.clkBackBtn, 20000);
        // vdn.clkBackBtn.click();
        // browser.sleep(8000);


        // wait.waitForElementVisibility(vdn.btnNominate, 20000);
        // vdn.btnNominate.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        // vdn.btnSubmitContentType.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationSent), 20000, "Nomination set not Success");
        // expect(vdn.assertNominationSent.isPresent()).toBe(true).then(function () {
        //     console.log("Nomination Sent Successfully");
        // });

        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}


const verifyDefaultOrgUserWithBothAsRoleIsAbleToReviewTheContent = (projectName) => {
    try {
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSunriseContributer), 20000, " startDateCalendar is not available");
        // vdn.selSunriseContributer.click();
        // browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkAllMyProjects), 20000, " startDateCalendar is not available");
        // vdn.clkAllMyProjects.click();
        // browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openbtnReviewPending), 20000, "Open Button is not Present");
        vdn.openbtnReviewPending.click();
        browser.sleep(2000);

        expect(vdn.submitForApproval.isPresent()).toBe(true).then(function () {
            console.log("Submit For Approval Option Is Present For default org user with both Role");
        });

        expect(vdn.requestChanges.isPresent()).toBe(true).then(function () {
            console.log("Request Change Option Is Present For default org user with both Role");
        });


        expect(vdn.assertSampleTitle.isPresent()).toBe(true).then(function () {
            console.log("View Sample Successfully");
        });

        expect(vdn.assertSample.isPresent()).toBe(true).then(function () {
            console.log("View Sample Successfully");
        });

        vdn.assertSample.click();
        browser.sleep(2000);

        

        expect(vdn.assertDetails.isPresent()).toBe(true).then(function () {
            console.log("org user with both as a role is abel to view the content");
        });


        







        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "eTextBook is not Present");
        // vdn.slteTextbookContribute.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        // vdn.continueBtn.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkExplanationContent), 20000, "Checkbox is not Present");
        // vdn.checkExplanationContent.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkLearningResource), 20000, "Checkbox is not Present");
        // vdn.checkLearningResource.click();
        // browser.sleep(2000);

        //   browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkLearningPlanUnit), 20000, "Checkbox is not Present");
        //   vdn.checkLearningPlanUnit.click();
        //   browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        // vdn.btnSubmitContentType.click();
        // browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectedContentTypeSuccess), 20000, "Content Type not Success");
        // expect(vdn.selectedContentTypeSuccess.isPresent()).toBe(true).then(function () {
        //     console.log("Selected Content type(s) saved successfully");
        // });


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxUploadSample), 20000, "Checkbox not Present");
        // vdn.checkBoxUploadSample.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUploadSample), 20000, "Checkbox not Present");
        // vdn.clkUploadSample.click();
        // browser.sleep(6000);



        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkeTextbook), 20000, "Checkbox not Present");
        // vdn.clkeTextbook.click();
        // browser.sleep(2000);


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Checkbox not Present");
        // vdn.eTextbookCreateNewBtn.click();
        // browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "Checkbox not Present");
        // vdn.slteTextbookContribute.click();
        // browser.sleep(1000);


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Checkbox not Present");
        // vdn.clkContnue.click();
        // browser.sleep(5000);

        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}


const assignDefaultContributorOrgAdminToReviewerAndContributer = (projectName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var reviewerRole = cred[2]['Title'];
        var contributerRole = cred[1]['Title'];
        

        console.log("Admin User is trying to Assign Contributor")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var openProject = element(by.xpath(var1 + var2 + var3));

        browser.sleep(1000);
        openProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUserTab), 20000, "Assign User Tab Not Present");
        vdn.assignUserTab.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys(reviewerRole);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);
        


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer not Present");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Both");
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.clear();
        vdn.enterSearchField.sendKeys(contributerRole);
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        // vdn.clkSearchbtn.click();
        // browser.sleep(2000);
        


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContributor), 20000, "Contributor not Present");
        vdn.selectContributor.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Contributer");
        });

        
    }
    catch (Exception) {
        console.log('Unable To Search And Assign Role');
    }
}


const verifyDefaultOrgUserWithReviewerAsRoleIsAbleToReviewTheContent = (projectName) => {
    try {
        browser.sleep(2000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openbtnReviewPending), 20000, "Open Button is not Present");
        vdn.openbtnReviewPending.click();
        browser.sleep(2000);

        expect(vdn.submitForApproval.isPresent()).toBe(true).then(function () {
            console.log("Submit For Approval Option Is Present For default org user with both Role");
        });

        expect(vdn.requestChanges.isPresent()).toBe(true).then(function () {
            console.log("Request Change Option Is Present For default org user with both Role");
        });


        expect(vdn.assertSampleTitle.isPresent()).toBe(true).then(function () {
            console.log("View Sample Successfully");
        });

        expect(vdn.assertSample.isPresent()).toBe(true).then(function () {
            console.log("View Sample Successfully");
        });
        

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkNxtBtn1), 20000, "Next Button is not Present");
        vdn.clkNxtBtn1.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkNxtBtn2), 20000, "Next Button2 is not Present");
        vdn.clkNxtBtn2.click();
        browser.sleep(2000);

        expect(vdn.consumeComplete.isPresent()).toBe(true).then(function () {
            console.log("Sample Completly Consumed Successfully");
        });
        
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}


const createProjectWithoutTargetCollectionWithMultipleContentTypes = () => {
    try {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selTeacherResource), 20000, "Teacher Resource is not available");
        vdn.selTeacherResource.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentTypeDropdown), 20000, "Content Type dropDown is not available");
        vdn.clkContentTypeDropdown.click();
        browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "select framework is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCBSE), 20000, "CBSE dropDown is not available");
        // vdn.selectCBSE.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUpload), 20000, "Upload button is not available");
        vdn.clkUpload.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelectFile), 20000, "select file is not available");
        vdn.clkSelectFile.click();
        browser.sleep(3000);
        utilityFun.uploadParticularFile(pdf);

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

    } catch (err) {
        console.log(err);
    }
    return projectName;
}


const assignContributorOrgAdminToBothAndContributer = (projectName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var bothRole = cred[4]['Title'];
        var contributerRole = cred[3]['Title'];
        

        console.log("Admin User is trying to Assign Contributor")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var openProject = element(by.xpath(var1 + var2 + var3));

        browser.sleep(1000);
        openProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUserTab), 20000, "Assign User Tab Not Present");
        vdn.assignUserTab.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys(bothRole);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);
        


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectBoth), 20000, "Reviewer not Present");
        vdn.selectBoth.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Both");
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.clear();
        vdn.enterSearchField.sendKeys(contributerRole);
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        // vdn.clkSearchbtn.click();
        // browser.sleep(2000);
        


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContributor), 20000, "Contributor not Present");
        vdn.selectContributor.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Contributer");
        });

        
    }
    catch (Exception) {
        console.log('Unable To Search And Assign Role');
    }
}

const OrgAdminIsAbleToAcceptNominationWithoutTargetColl = (projectName) => {

    try {

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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationTab), 20000, "Nomination Tab is not Displayed");
        vdn.assertNominationTab.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openUserForAction), 20000, "Open Pending User not Displayed");
        vdn.openUserForAction.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnAccept), 20000, "Open Pending User not Displayed");
        vdn.btnAccept.click();
        browser.sleep(2000);

        expect(vdn.assertNominatiopSuccess.isPresent()).toBe(true).then(function () {
            console.log("Nomination Updated Successfully");
        });
    }
    catch (Exception) {
        console.log('Unable Accept Nomination')
    }
}

const ContributorIsAbleToNominateWithoutTargetCollection = (projectName) => {
    try {
        browser.sleep(1000);
        var Url = getAppURL.ConfigurePath().AppURL;  
        var OrganizationName = getExcelPath.ConfigurePath().OrgName;
        
        browser.get(Url);
        browser.sleep(4000);

        let v1 = "//label[text()='";
        var v2 = OrganizationName;
        console.log(v2);
        let v3 = "']//following::a[text()='Contribute'][1]";
        browser.sleep(10000);
        var selSunriseContributer = element(by.xpath(v1 + v2 + v3));

        selSunriseContributer.click();
        browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSelectContentTypes), 20000, "Select Content Type Button is not Present");
        vdn.btnSelectContentTypes.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType1), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType2), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType2.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType3), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType3.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType4), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType4.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType5), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType5.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectedContentTypeSuccess), 20000, "Content Type not Success");
        expect(vdn.selectedContentTypeSuccess.isPresent()).toBe(true).then(function () {
            console.log("Selected Content type(s) saved successfully");
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNominate), 20000, "Nominate Button not Present");
        vdn.btnNominate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationSent), 20000, "Nomination set not Success");
        expect(vdn.assertNominationSent.isPresent()).toBe(true).then(function () {
            console.log("Nomination Sent Successfully");
        });

        browser.sleep(3000);

        let var4 = "//*[contains(text(),'";
        let var5 = projectName;
        let var6 = "')]//following::span[text()='Pending']";
        browser.sleep(5000);
        var assertAutoAproved = element(by.xpath(var4 + var5 + var6));

        expect(assertAutoAproved.isPresent()).toBe(true).then(function () {
            console.log("collection is available in My project tab with nomination pending status ");
        })

    }
    catch(Exception) {
        console.log('Unable to View Created Project')
    }

}


const userShouldNotBeAllowedToReviewHisOwnContent = (projectName) => {
    try {
        browser.sleep(2000);

        

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openbtnReviewPending), 20000, "Open Button is not Present");
        // vdn.openbtnReviewPending.click();
        // browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUpload), 20000, "Upload Button is not Present");
        vdn.clkUpload.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "eTextBook is not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);

        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();

        browser.sleep(3000);

        vdn.openbtnReviewPending.click();



       

        

        expect(vdn.submitReviewbutton.isPresent()).toBe(false).then(function () {
            console.log("User should not be allowed to review his own content");
        });
        
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User should be allowed to review his own content')
    }
}

const verifySourcingAdminIsAbleToAcceptNomination = (projectName) => {

    try {
        browser.sleep(20000);
        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[text()='Open '][1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In My Projects tab ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominations), 20000, "Nomination Tab is not Displayed");
        vdn.assertNominations.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openNominations), 20000, "Open Pending  not Displayed");
        vdn.openNominations.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnAccept), 20000, "Accept Button not Displayed");
        vdn.btnAccept.click();
        browser.sleep(2000);

        expect(vdn.assertNominatiopSuccess.isPresent()).toBe(true).then(function () {
            console.log("Nomination Updated Successfully");
        });
    }
    catch (Exception) {
        console.log('Unable Accept Nomination')
    }
}

const uploadTheContentFromIndividualContributorSide = (projectName) => {

    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My projects tab is not Displayed");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(4000);


        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentButton), 20000, "upload content is not Displayed");
        vdn.uploadContentButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentFromIndCont), 20000, "Upload Content not Displayed");
        vdn.uploadContentFromIndCont.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextBookUpload), 20000, "Book Upload Not Displayed");
        vdn.eTextBookUpload.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(pdf);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample1");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}

const sourcingAdminAbleToAssignReviewerRole = (projectName) => {

    try {

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(7000);

    
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUsersToProjectTab), 20000, "Assign Users To Project Tab not Displayed");
        vdn.assignUsersToProjectTab.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "Select Role Option not Displayed");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer Option not Displayed");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRolesUpdated), 20000, "Roles Not Updated");
        expect(vdn.assertRolesUpdated.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated Successfully with Nomination Enabled");
        });
    }
    catch (Exception) {
        console.log('Reviewer role not updated successfully')
    }
}

const verifyPostRejectionValidateRejectedCount = (projectName) => {
    browser.sleep(7000);

    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::button[1]";
    browser.sleep(10000);
    var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
    assertProjInAllProjTab.click();
    browser.sleep(7000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openUploadedContent), 20000, "uploaded content not Displayed");
        vdn.openUploadedContent.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openAngularDropdown), 20000, "dropdown Option not Displayed");
        vdn.openAngularDropdown.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openContentForReject), 20000, "Content not Displayed");
        vdn.openContentForReject.click();
        browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.rejectButton), 20000, "Reject button is not Present");
    vdn.rejectButton.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.addComments), 20000, "Add comments is not Present");
    vdn.addComments.click();
    vdn.addComments.sendKeys("Incorrect Content");
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitReviewbutton), 20000, "submit for Review button is not Present");
    vdn.submitReviewbutton.click();
    browser.sleep(5000);

    browser.sleep(5000);
    (vdn.totalCount.getText()).then(function (a) {
        (vdn.approvalPendingCount.getText()).then(function (b) {
            (vdn.approvedCount.getText()).then(function (c) {
                (vdn.rejectedCount.getText()).then(function (d) {
                    (vdn.correctionsPending.getText()).then(function (e) {
                        var total = parseInt(a);
                        var approvPending = parseInt(b);
                        var approved = parseInt(c);
                        var reject = parseInt(d);
                        var correctionsPend = parseInt(e);
                        var totalCount = approvPending + approved + reject + correctionsPend;
                        var approvalPendingCount = total - (approved + reject + correctionsPend);
                        var approvedCount = total - (approvPending + reject + correctionsPend);
                        var rejectCount = total - (approvPending + correctionsPend + approved);
                        var correctionPendingCount = total - (approvPending + approved + reject);
                        expect(total).toEqual(totalCount);
                        expect(approvalPendingCount).toEqual(approvPending);
                        expect(approvedCount).toEqual(approved);
                        expect(rejectCount).toEqual(reject);
                        expect(correctionPendingCount).toEqual(correctionsPend);
                        console.log("Total count is " + total);
                        console.log("Total approval pending count is " + approvPending);
                        console.log("Total reject count is " + approved);
                        console.log("Total approved count is " + reject);
                        console.log("Total correction pending count is " + correctionPendingCount);
                    })
                })
            })
        })
    })
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkBackButton), 20000, "Back button is not Present");
    vdn.clkBackButton.click();
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContributionDashboard), 20000, "Contribution dashboard is not Present");
    vdn.assertContributionDashboard.click();
    browser.sleep(3000);

    expect(vdn.rejectedCountInContributionDashboard.isPresent()).toBe(true).then(function () {
        console.log("Rejected count updated successfully in Your organisation");
    });


    (vdn.totalCount.getText()).then(function (z) {
        var rejectedCnt = parseInt(z);
        console.log("Total count is " + rejectedCnt);

    })

    browser.sleep(3000);
}


const createProjectWithDigitalTextBookSkipReviewEnabled = () => {
    try {
        console.log("Admin User is trying to create a Project With Digital text Book")
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.skip2levelReview), 20000, "Skip Two Level Review Not Available");
        vdn.skip2levelReview.click();
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstTextBook), 20000, "Text Book Is Not Listed ");
        vdn.selectFirstTextBook.click();
        browser.sleep(10000);

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


const uploadContentFromAssignedContributor = (projectName) => {

    try {

        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    
        browser.sleep(2000);
        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
    
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(7000);
    
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentButton), 20000, "upload content is not Displayed");
        vdn.uploadContentButton.click();
        browser.sleep(3000);
    

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentFromIndCont), 20000, "Upload Content Not Displayed");
        vdn.uploadContentFromIndCont.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextBookUpload), 20000, "Book Upload not Displayed");
        vdn.eTextBookUpload.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
        vdn.clkContinue.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
        vdn.selFileInDragAndDrop.click();
        browser.sleep(3000);

        utilityFun.uploadParticularFile(pdf);

        browser.sleep(7000);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
        vdn.clkSubmitForReview.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
        vdn.enterName1.click();
        vdn.enterName1.sendKeys("Sample1");
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
        vdn.enterYear.click();
        vdn.enterYear.sendKeys("2022");
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
        vdn.clksubmit.click();
        browser.sleep(3000);
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}


const verifyAcceptRequestChangesNotAvailableInReviewerSide = (projectName) => {
    browser.sleep(7000);

    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::button[1]";
    browser.sleep(10000);
    var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
    assertProjInAllProjTab.click();
    browser.sleep(7000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.reviewContentBtn), 20000, "uploaded content not Displayed");
        vdn.reviewContentBtn.click();
        browser.sleep(2000);

        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openAngularDropdown), 20000, "dropdown Option not Displayed");
        vdn.openAngularDropdown.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openContentForReject), 20000, "Content not Displayed");
        vdn.openContentForReject.click();
        browser.sleep(5000);

        expect(vdn.rejectButton.isPresent()).toBe(false).then(function () {
            console.log("Reject button is not displayed while previewing the content");
        });

        expect(vdn.sendBackForCorrectionButton.isPresent()).toBe(false).then(function () {
            console.log("Send back for corrections button is not displayed while previewing the content");
        });







}

const verifyContributorsAreAbleToUploadASampleAndInitiateNomination = (projectName) => {
    try {

        browser.sleep(3000);
        vdn.clkMyProjectsOnIndContributor.click();
        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        let var4 = "')]//following::span[contains(text(),'Initiated')]"
        browser.sleep(5000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        var assertInitiate = element(by.xpath(var1+var2+var4));

        expect(assertInitiate.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors With Initate");
        });

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        

        expect(vdn.btnNominate.isPresent()).toBe(true).then(function () {
            console.log("Nomination Button Is Displayed ");
        });

        expect(vdn.clkUploadSample.isPresent()).toBe(true).then(function () {
            console.log("Upload Button Is Displayed ");
        });
        
        browser.sleep(2000);
        


    }

    catch (Exception) {
        console.log('Unable To Verify Uploadeed Sample With Nomination Initiate Status');
    }
}

const addSampleFromContriutionSideWithoutNominate = (projectName) => {
    try {
        browser.sleep(1000);
        // var Url = getAppURL.ConfigurePath().AppURL;
        // browser.get(Url);
        browser.sleep(4000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSunriseContributer), 20000, " startDateCalendar is not available");
        // vdn.selSunriseContributer.click();
        // browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkAllMyProjects), 20000, " startDateCalendar is not available");
        // vdn.clkAllMyProjects.click();
        // browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSelectContentTypes), 20000, "Select Content Type Button is not Present");
        vdn.btnSelectContentTypes.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkPracticeQuestion), 20000, "Checkbox is not Present");
        vdn.checkPracticeQuestion.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkeTextbook), 20000, "Checkbox is not Present");
        vdn.checkeTextbook.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkExplanationContent), 20000, "Checkbox is not Present");
        vdn.checkExplanationContent.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkLearningResource), 20000, "Checkbox is not Present");
        vdn.checkLearningResource.click();
        browser.sleep(2000);

        //   browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkLearningPlanUnit), 20000, "Checkbox is not Present");
        //   vdn.checkLearningPlanUnit.click();
        //   browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectedContentTypeSuccess), 20000, "Content Type not Success");
        // expect(vdn.selectedContentTypeSuccess.isPresent()).toBe(true).then(function () {
        //     console.log("Selected Content type(s) saved successfully");
        // });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxUploadSample), 20000, "Checkbox not Present");
        vdn.checkBoxUploadSample.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUploadSample), 20000, "Checkbox not Present");
        vdn.clkUploadSample.click();
        browser.sleep(6000);



        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkeTextbook), 20000, "Checkbox not Present");
        // vdn.clkeTextbook.click();
        // browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Checkbox not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "Checkbox not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Checkbox not Present");
        vdn.clkContnue.click();
        browser.sleep(5000);



        utilityFun.uploadParticularFile(pdf);
        expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });


        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(2000);
        expect(vdn.assertContentSentReviewMsg.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });

        browser.sleep(2000);
        expect(vdn.assertNoOfSamples.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });

        wait.waitForElementVisibility(vdn.clkBackBtn, 20000);
        vdn.clkBackBtn.click();
        browser.sleep(8000);


        // wait.waitForElementVisibility(vdn.btnNominate, 20000);
        // vdn.btnNominate.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        // vdn.btnSubmitContentType.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationSent), 20000, "Nomination set not Success");
        // expect(vdn.assertNominationSent.isPresent()).toBe(true).then(function () {
        //     console.log("Nomination Sent Successfully");
        // });

        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Add Sample')
    }
}


const NominateContributerWithUploadSample = (projectName) => {
    try {
        browser.sleep(4000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSelectContentTypes), 20000, "Select Content Type Button is not Present");
        vdn.btnSelectContentTypes.click();
        browser.sleep(1000);

       browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkPracticeQuestion), 20000, "Checkbox is not Present");
        vdn.checkPracticeQuestion.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkeTextbook), 20000, "Checkbox is not Present");
        vdn.checkeTextbook.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkExplanationContent), 20000, "Checkbox is not Present");
        vdn.checkExplanationContent.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkLearningResource), 20000, "Checkbox is not Present");
        vdn.checkLearningResource.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkTeacherResource), 20000, "Checkbox is not Present");
        vdn.checkTeacherResource.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(5000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxUploadSample), 20000, "Checkbox not Present");
        vdn.checkBoxUploadSample.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUploadSample), 20000, "Checkbox not Present");
        vdn.clkUploadSample.click();
        browser.sleep(6000);



        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkeTextbook), 20000, "Checkbox not Present");
        // vdn.clkeTextbook.click();
        // browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Checkbox not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "Checkbox not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Checkbox not Present");
        vdn.clkContnue.click();
        browser.sleep(5000);



        utilityFun.uploadParticularFile(pdf);

        expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        

        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(2000);

        expect(vdn.assertContentSentReviewMsg.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });

        wait.waitForElementVisibility(vdn.clkBackBtn, 20000);
        vdn.clkBackBtn.click();
        browser.sleep(8000);


        wait.waitForElementVisibility(vdn.btnNominate, 20000);
        vdn.btnNominate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertNominationSent), 20000, "Nomination set not Success");
        expect(vdn.assertNominationSent.isPresent()).toBe(true).then(function () {
            console.log("Nomination Sent Successfully");
        });

        browser.sleep(3000);

        
        

    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}


const assignContributorOrgAdminToContributerRole = (projectName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var contRole = cred[3]['Title'];
       
        

        console.log("Admin User is trying to Assign Contributor")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var openProject = element(by.xpath(var1 + var2 + var3));

        browser.sleep(1000);
        openProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUserTab), 20000, "Assign User Tab Not Present");
        vdn.assignUserTab.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys(contRole);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContributor), 20000, "Contributor not Present");
        vdn.selectContributor.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Contributer");
        });

        
    }
    catch (Exception) {
        console.log('Unable To Search And Assign Role');
    }
}


const verifyUploadContentStatusForAssignedContributer = (projectName) => {
    try {
        browser.sleep(4000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUpload), 20000, "Upload Button is not Present");
        vdn.clkUpload.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Create New Button is not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "eTextBook is not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(2000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);
        expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });


        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(3000);

        expect(vdn.assertReviewPending.isPresent()).toBe(true).then(function () {
            console.log("Created Content Is Pending status ");
        });
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Create New Button is not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "eTextBook is not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(2000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);

        wait.waitForElementVisibility(vdn.clkBackBtn, 20000);
        vdn.clkBackBtn.click();
        browser.sleep(5000);

        expect(vdn.assertReviewPending.isPresent()).toBe(true).then(function () {
            console.log("Created Content Is Saved and Is In Draft Status ");
        });

    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}

const verifyCountsUnderTextBookAndContributionDashboardPostPublishTheContent = (projectName) => {
    browser.sleep(7000);

    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::button[1]";
    browser.sleep(10000);
    var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
    assertProjInAllProjTab.click();
    browser.sleep(7000);

    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);

    browser.executeScript('window.scrollTo(0,400);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openUploadedContent), 20000, "uploaded content not Displayed");
        vdn.openUploadedContent.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openAngularDropdown), 20000, "dropdown Option not Displayed");
        vdn.openAngularDropdown.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.openContentForReject), 20000, "Content not Displayed");
        vdn.openContentForReject.click();
        browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.publishButton), 20000, "Publish button is not Present");
    vdn.publishButton.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkBackButton), 20000, "Back button is not Present");
    vdn.clkBackButton.click();
    browser.sleep(5000);

    browser.sleep(5000);
    (vdn.totalCount.getText()).then(function (a) {
        (vdn.approvalPendingCount.getText()).then(function (b) {
            (vdn.approvedCount.getText()).then(function (c) {
                (vdn.rejectedCount.getText()).then(function (d) {
                    (vdn.correctionsPending.getText()).then(function (e) {
                        var total = parseInt(a);
                        var approvPending = parseInt(b);
                        var approved = parseInt(c);
                        var reject = parseInt(d);
                        var correctionsPend = parseInt(e);
                        var totalCount = approvPending + approved + reject + correctionsPend;
                        var approvalPendingCount = total - (approved + reject + correctionsPend);
                        var approvedCount = total - (approvPending + reject + correctionsPend);
                        var rejectCount = total - (approvPending + correctionsPend + approved);
                        var correctionPendingCount = total - (approvPending + approved + reject);
                        expect(total).toEqual(totalCount);
                        expect(approvalPendingCount).toEqual(approvPending);
                        expect(approvedCount).toEqual(approved);
                        expect(rejectCount).toEqual(reject);
                        expect(correctionPendingCount).toEqual(correctionsPend);
                        console.log("Total count is " + total);
                        console.log("Total approval pending count is " + approvPending);
                        console.log("Total reject count is " + approved);
                        console.log("Total approved count is " + reject);
                        console.log("Total correction pending count is " + correctionPendingCount);
                    })
                })
            })
        })
    })
    browser.sleep(3000);

    // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkBackButton), 20000, "Back button is not Present");
    // vdn.clkBackButton.click();
    // browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContributionDashboard), 20000, "Contribution dashboard is not Present");
    vdn.assertContributionDashboard.click();
    browser.sleep(3000);

    expect(vdn.publishCountInContributionDashboard.isPresent()).toBe(true).then(function () {
        console.log("Published count updated successfully in Your organisation");
    });


    (vdn.totalCount.getText()).then(function (z) {
        var publishedCount = parseInt(z);
        console.log("Total count is " + publishedCount);

    })

    browser.sleep(3000);
}

const uploadTheContentFromIndividualContributorSideAndVerifyDraftStatusInTOC = (projectName) => {

    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My projects tab is not Displayed");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(4000);


        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentButton), 20000, "upload content is not Displayed");
        vdn.uploadContentButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentFromIndCont), 20000, "create new button  not Displayed");
        vdn.uploadContentFromIndCont.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextBookUpload), 20000, "etextbook content  not Displayed");
        vdn.eTextBookUpload.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(pdf);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentDetails), 20000, "Content details is not displayed");
    vdn.clkContentDetails.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("PdfFile");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.saveBton), 20000, "Save button is not available");
    vdn.saveBton.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContentSavedToastMessage), 20000, "content updated successfully message is not displayed");

    expect(vdn.assertContentSavedToastMessage.isPresent()).toBe(true).then(function () {
        console.log("content updated successfully message is displayed");
    })
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.backBtn), 20000, "Back button is not displayed");
    vdn.backBtn.click();
    browser.sleep(3000);

    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);


    expect(vdn.draftStatusInEtextbook.isPresent()).toBe(true).then(function () {
        console.log("Draft label is displayed under etextbook category in TOC");
    });

    expect(vdn.countUnderDraftStatusInTOC.isPresent()).toBe(true).then(function () {
        console.log("Draft count is displayed under etextbook category in TOC");
        
    });
    browser.sleep(2000);
    console.log("Draft count is : " + vdn.countUnderDraftStatusInTOC.getText);
    browser.sleep(2000);

    expect(vdn.assertDraftStatusInTOCPage.isPresent()).toBe(true).then(function () {
        console.log("Uploaded Content saved as Draft successfully in TOC");
    });
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}

const uploadContentAndVerifyApprovalPendingStatusInTOCPostPublish = (projectName) => {

    try {
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentFromIndCont), 20000, "Upload Content Displayed");
        vdn.uploadContentFromIndCont.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextBookUpload), 20000, "etextBook Not Displayed");
        vdn.eTextBookUpload.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(pdf);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentDetails), 20000, "Content details is not displayed");
    vdn.clkContentDetails.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.saveBton), 20000, "Save button is not available");
    vdn.saveBton.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContentSavedToastMessage), 20000, "content updated successfully message is not displayed");

    expect(vdn.assertContentSavedToastMessage.isPresent()).toBe(true).then(function () {
        console.log("content updated successfully message is displayed");
    })
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);


    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);

    expect(vdn.approvalPendingLabelInTOC.isPresent()).toBe(true).then(function () {
        console.log("Approval Pending label is displayed under etextbook category in TOC");
    });

    expect(vdn.approvalPendingCountInTOC.isPresent()).toBe(true).then(function () {
        console.log("Approval pending count is displayed under etextbook category in TOC");
        
    });
    browser.sleep(2000);
    console.log("Draft count is : " + vdn.approvalPendingCountInTOC.getText);
    browser.sleep(2000);

    expect(vdn.approvalPendingStatusInTOC.isPresent()).toBe(true).then(function () {
        console.log("Uploaded content post publish saved as Approval pending successfully in TOC");
    });

   
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}



const createCourseProjectWithCourseAssessmentAndEtextbookContentTypes = () => {
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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selOldQuestionSet), 20000, "Old Practice Question Set is not available");
        // vdn.selOldQuestionSet.click();
        // browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selTeacherResource), 20000, "Teacher Resource is not available");
        vdn.selTeacherResource.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkOutContentType), 20000, "Content Type is not available");
        vdn.clkOutContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection dropDown is not available");
        vdn.selectTargetCollection.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.Course), 20000, "Course Option is not available");
        vdn.Course.click();
        browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "Select Framework Dropdown is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCPD), 20000, "Select Framework Option2 is not available");
        // vdn.selectCPD.click();
        // browser.sleep(1000);

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

        //browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertToastMsg), 20000, "Project Publish Msg is not Displayed");

        // expect(vdn.assertToastMsg.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })

        browser.sleep(3000);

    } catch (err) {
        console.log(err);
    }
    return projectName;
}

const NominateContributerWithMultipleContentTypes = (projectName) => {
    try {
        browser.sleep(1000);
        // var Url = getAppURL.ConfigurePath().AppURL;
        // browser.get(Url);
        browser.sleep(4000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(10000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSelectContentTypes), 20000, "Select Content Type Button is not Present");
        vdn.btnSelectContentTypes.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType1), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType2), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType2.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType3), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType3.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType4), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType4.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType5), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType5.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxContentType6), 20000, "Checkbox is not Present");
        vdn.checkBoxContentType6.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectedContentTypeSuccess), 20000, "Content Type not Success");
        expect(vdn.selectedContentTypeSuccess.isPresent()).toBe(true).then(function () {
            console.log("Selected Content type(s) saved successfully");
        });
        
        browser.executeScript("arguments[0].scrollIntoView();", vdn.checkBoxUploadSample);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.checkBoxUploadSample), 20000, "Checkbox not Present");
        vdn.checkBoxUploadSample.click();
        browser.sleep(1000);

    

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnNominate), 20000, "Nominate Button not Present");
        vdn.btnNominate.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSubmitContentType), 20000, "Submit Button not Present");
        vdn.btnSubmitContentType.click();
        browser.sleep(1000);

       

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSunriseContributer), 20000, " startDateCalendar is not available");
        // vdn.selSunriseContributer.click();
        // browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkAllMyProjects), 20000, " startDateCalendar is not available");
        // vdn.clkAllMyProjects.click();
        // browser.sleep(5000);
    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}

const assignContributorOrgAdminToReviewerAndContributer = (projectName) => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var reviewerRole = cred[4]['Title'];
        var contributerRole = cred[3]['Title'];
        

        console.log("Admin User is trying to Assign Contributor")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Prject Is Not Present");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(3000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var openProject = element(by.xpath(var1 + var2 + var3));

        browser.sleep(1000);
        openProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUserTab), 20000, "Assign User Tab Not Present");
        vdn.assignUserTab.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.sendKeys(reviewerRole);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);
        


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        // vdn.clkSearchbtn.click();
        // browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer not Present");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Both");
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterSearchField), 20000, "Search Field not Present");
        vdn.enterSearchField.click();
        vdn.enterSearchField.clear();
        vdn.enterSearchField.sendKeys(contributerRole);
        browser.sleep(2000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        // vdn.clkSearchbtn.click();
        // browser.sleep(2000);
        


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSearchbtn), 20000, "Search Button not Present");
        vdn.clkSearchbtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "select Role not Present");
        vdn.selectRole.click();
        browser.sleep(2000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectContributor), 20000, "Contributor not Present");
        vdn.selectContributor.click();
        browser.sleep(2000);

        expect(vdn.toastMessage.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Contributer");
        });

        
    }
    catch (Exception) {
        console.log('Unable To Search And Assign Role');
    }
}

const uploadMoreContentForAction = (projectName) => {
    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Create New Button is not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "eTextBook is not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(2000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);
        expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });


        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample2");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Create New Button is not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "eTextBook is not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(2000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);
        expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });


        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample3");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('Unable To Upload More Content');
    }
}


const verifyCountAndStatusOnReviewer = (projectName) => {
    try {
        browser.sleep(4000);


        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.reviewContentBtn), 20000, "Review Button is not Present");
        vdn.reviewContentBtn.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.countAwaiting), 20000, "Invalid Count");
        expect(vdn.countAwaiting.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated as A Contributer");
        });
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextReviewPendings), 20000, "eTextBook Review Pending not Present");
        vdn.eTextReviewPendings.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSample1ForAccept), 20000, "Sample1 Review Pending not Present");
        vdn.selSample1ForAccept.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitForApproval), 20000, "Submit For Approval not Present");
        vdn.submitForApproval.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSample2ForReject), 20000, "Sample2 Review Pending not Present");
        vdn.selSample2ForReject.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.requestChanges), 20000, "Request Changes Button not Present");
        vdn.requestChanges.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterReasonForReject), 20000, "Enter Reason Field not Present");
        vdn.enterReasonForReject.sendKeys('Reason For Change')
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitReviewbutton), 20000, "Submit Review Button not Present");
        vdn.submitReviewbutton.click();
        browser.sleep(2000);


        expect(vdn.assertApprovalPending.isPresent()).toBe(true).then(function () {
            console.log("Approval Pending Status Is Displayed On Reviewer ");
        });


        expect(vdn.assertNotAccepted.isPresent()).toBe(true).then(function () {
            console.log("Not Accepted Status Is Displayed On Reviewer ");
        });
        
    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}








      

//         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.reviewContentBtn), 20000, "Review Button is not Present");
//         vdn.reviewContentBtn.click();
//         browser.sleep(2000);

//         browser.executeScript('window.scrollTo(0,0);').then(function () {
//             console.log('++++++SCROLLED UP+++++');
//         });

//         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.countAwaiting), 20000, "Invalid Count");
//         expect(vdn.countAwaiting.isPresent()).toBe(true).then(function () {
//             console.log("Roles Updated as A Contributer");
//         });
//         browser.sleep(2000);

//         browser.executeScript('window.scrollTo(0,300);').then(function () {
//             console.log('++++++SCROLLED UP+++++');
//         });


//         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextReviewPendings), 20000, "eTextBook Review Pending not Present");
//         vdn.eTextReviewPendings.click();
//         browser.sleep(2000);

//         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSample1ForAccept), 20000, "Sample1 Review Pending not Present");
//         vdn.selSample1ForAccept.click();
//         browser.sleep(2000);

//         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitForApproval), 20000, "Submit For Approval not Present");
//         vdn.submitForApproval.click();
//         browser.sleep(2000);

//         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSample2ForReject), 20000, "Sample2 Review Pending not Present");
//         vdn.selSample2ForReject.click();
//         browser.sleep(2000);

//         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.requestChanges), 20000, "Request Changes Button not Present");
//         vdn.requestChanges.click();
//         browser.sleep(2000);

//         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterReasonForReject), 20000, "Enter Reason Field not Present");
//         vdn.enterReasonForReject.sendKeys('Reason For Change')
//         browser.sleep(2000);

//         browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitReviewbutton), 20000, "Submit Review Button not Present");
//         vdn.submitReviewbutton.click();
//         browser.sleep(2000);


//         expect(vdn.assertApprovalPending.isPresent()).toBe(true).then(function () {
//             console.log("Approval Pending Status Is Displayed On Reviewer ");
//         });


//         expect(vdn.assertNotAccepted.isPresent()).toBe(true).then(function () {
//             console.log("Not Accepted Status Is Displayed On Reviewer ");
//         });
        

//     }
//     catch (Exception) {
//         console.log('User Is Not Able To Unable To Nominate For The Project')
//     }
// }


const uploadThePdfContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent = (projectName) => {

    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My projects tab is not Displayed");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(4000);



        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentButton), 20000, "upload content is not Displayed");
        vdn.uploadContentButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewButton), 20000, "create new button  not Displayed");
        vdn.createNewButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextBookUpload), 20000, "etextbook content  not Displayed");
        vdn.eTextBookUpload.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(pdf);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentDetails), 20000, "Content details is not displayed");
    vdn.clkContentDetails.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample1");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.saveBton), 20000, "Save button is not available");
    vdn.saveBton.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContentSavedToastMessage), 20000, "content updated successfully message is not displayed");

    expect(vdn.assertContentSavedToastMessage.isPresent()).toBe(true).then(function () {
        console.log("content updated successfully message is displayed");
    })
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);


    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);

    // expect(vdn.approvalPendingStatusPostPublishTheContent.isPresent()).toBe(true).then(function () {
    //     console.log("Approval Pending label is displayed In TOC");
    // });

    // browser.sleep(3000);
  
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}


const uploadTheEpubContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent = (projectName) => {

    try {

        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewButton), 20000, "create new button  not Displayed");
        vdn.createNewButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextBookUpload), 20000, "etextbook content  not Displayed");
        vdn.eTextBookUpload.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(epub);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentDetails), 20000, "Content details is not displayed");
    vdn.clkContentDetails.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample2");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.saveBton), 20000, "Save button is not available");
    vdn.saveBton.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContentSavedToastMessage), 20000, "content updated successfully message is not displayed");

    expect(vdn.assertContentSavedToastMessage.isPresent()).toBe(true).then(function () {
        console.log("content updated successfully message is displayed");
    })
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);


    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);

    // expect(vdn.approvalPendingStatusPostPublishTheContent.isPresent()).toBe(true).then(function () {
    //     console.log("Approval Pending label is displayed In TOC");
    // });

    // browser.sleep(3000);
  
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}

const uploadTheMP3ContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent = (projectName) => {

    try {

        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewButton), 20000, "create new button  not Displayed");
        vdn.createNewButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selExplanationContentType), 20000, "etextbook content  not Displayed");
        vdn.selExplanationContentType.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(mp3);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentDetails), 20000, "Content details is not displayed");
    vdn.clkContentDetails.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample3");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.saveBton), 20000, "Save button is not available");
    vdn.saveBton.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContentSavedToastMessage), 20000, "content updated successfully message is not displayed");

    expect(vdn.assertContentSavedToastMessage.isPresent()).toBe(true).then(function () {
        console.log("content updated successfully message is displayed");
    })
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);


    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);

    // expect(vdn.approvalPendingStatusPostPublishTheContent.isPresent()).toBe(true).then(function () {
    //     console.log("Approval Pending label is displayed In TOC");
    // });

    // browser.sleep(3000);
  
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}

const uploadTheMP4ContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent = (projectName) => {

    try {

        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewButton), 20000, "create new button  not Displayed");
        vdn.createNewButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selExplanationContentType), 20000, "etextbook content  not Displayed");
        vdn.selExplanationContentType.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(mp4);

    browser.sleep(7000);
    browser.sleep(3000);
    browser.sleep(7000);
    browser.sleep(3000);
    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.doneBtn), 20000, "Done button is not displayed");
    vdn.doneBtn.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentDetails), 20000, "Content details is not displayed");
    vdn.clkContentDetails.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample4");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.saveBton), 20000, "Save button is not available");
    vdn.saveBton.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContentSavedToastMessage), 20000, "content updated successfully message is not displayed");

    expect(vdn.assertContentSavedToastMessage.isPresent()).toBe(true).then(function () {
        console.log("content updated successfully message is displayed");
    })
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);


    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);

    // expect(vdn.approvalPendingStatusPostPublishTheContent.isPresent()).toBe(true).then(function () {
    //     console.log("Approval Pending label is displayed In TOC");
    // });

    // browser.sleep(3000);
  
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}


const uploadTheWebmContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent = (projectName) => {

    try {

        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewButton), 20000, "create new button  not Displayed");
        vdn.createNewButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selExplanationContentType), 20000, "etextbook content  not Displayed");
        vdn.selExplanationContentType.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(webm);

    browser.sleep(7000);
    browser.sleep(3000);
    browser.sleep(7000);
    browser.sleep(3000);
    browser.sleep(7000);
    browser.sleep(3000);
    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.doneBtn), 20000, "Done button is not displayed");
    vdn.doneBtn.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentDetails), 20000, "Content details is not displayed");
    vdn.clkContentDetails.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample5");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.saveBton), 20000, "Save button is not available");
    vdn.saveBton.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContentSavedToastMessage), 20000, "content updated successfully message is not displayed");

    expect(vdn.assertContentSavedToastMessage.isPresent()).toBe(true).then(function () {
        console.log("content updated successfully message is displayed");
    })
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);


    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);

    // expect(vdn.approvalPendingStatusPostPublishTheContent.isPresent()).toBe(true).then(function () {
    //     console.log("Approval Pending label is displayed In TOC");
    // });

    // browser.sleep(3000);
  
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}

const uploadTheh5pContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent = (projectName) => {

    try {

        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewButton), 20000, "create new button  not Displayed");
        vdn.createNewButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selLearningResourceContentType), 20000, "Learning resouce content  not Displayed");
        vdn.selLearningResourceContentType.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(h5p);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentDetails), 20000, "Content details is not displayed");
    vdn.clkContentDetails.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample2");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.saveBton), 20000, "Save button is not available");
    vdn.saveBton.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContentSavedToastMessage), 20000, "content updated successfully message is not displayed");

    expect(vdn.assertContentSavedToastMessage.isPresent()).toBe(true).then(function () {
        console.log("content updated successfully message is displayed");
    })
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);


    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);

    // expect(vdn.approvalPendingStatusPostPublishTheContent.isPresent()).toBe(true).then(function () {
    //     console.log("Approval Pending label is displayed In TOC");
    // });

    // browser.sleep(3000);
  
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}

const uploadThehtmlContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent = (projectName) => {

    try {

        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewButton), 20000, "create new button  not Displayed");
        vdn.createNewButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selLearningResourceContentType), 20000, "Learning resouce content  not Displayed");
        vdn.selLearningResourceContentType.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
    vdn.clkContinue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selFileInDragAndDrop), 20000, "Select files is not displayed");
    vdn.selFileInDragAndDrop.click();
    browser.sleep(3000);

    utilityFun.uploadParticularFile(html);

    browser.sleep(7000);
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContentDetails), 20000, "Content details is not displayed");
    vdn.clkContentDetails.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName1), 20000, "Name is not displayed");
    vdn.enterName1.click();
    vdn.enterName1.sendKeys("Sample3");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterYear), 20000, "enter year is not displayed");
    vdn.enterYear.click();
    vdn.enterYear.sendKeys("2022");
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.saveBton), 20000, "Save button is not available");
    vdn.saveBton.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertContentSavedToastMessage), 20000, "content updated successfully message is not displayed");

    expect(vdn.assertContentSavedToastMessage.isPresent()).toBe(true).then(function () {
        console.log("content updated successfully message is displayed");
    })
    browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit review button is not displayed");
    vdn.clkSubmitForReview.click();
    browser.sleep(5000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clksubmit), 20000, "submit is not displayed");
    vdn.clksubmit.click();
    browser.sleep(3000);


    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(5000);

    // expect(vdn.approvalPendingStatusPostPublishTheContent.isPresent()).toBe(true).then(function () {
    //     console.log("Approval Pending label is displayed In TOC");
    // });

    // browser.sleep(3000);
  
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}

const createCourseAssessmentContentFromIndividualContributorSide = (projectName) => {

    try {

        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewButton), 20000, "create new button  not Displayed");
        vdn.createNewButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltCourseAssessmentContribute), 20000, "Checkbox not Present");
        vdn.sltCourseAssessmentContribute.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Checkbox not Present");
        vdn.clkContnue.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.radioButtonEcmlCreation1), 20000, "Checkbox not Present");
        vdn.radioButtonEcmlCreation1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnuePopUp), 20000, "clkContnuePopUp not Present");
        vdn.clkContnuePopUp.click();
        browser.sleep(15000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(vdn.addQuestionSet, 20000, "addQuestionSet is not available");
        vdn.addQuestionSet.click();
        browser.sleep(2000);
        vdn.sltQuestionCheckbox.click();
        browser.sleep(2000);
        vdn.nextButton.click();
        browser.sleep(1000);

        quesSetTitle = "Question" + faker.randomData().firstname;
        vdn.questionSetTitle.sendKeys(quesSetTitle);
        browser.sleep(1000);

        vdn.addQuestionSetButton.click();
        browser.sleep(1000);

        vdn.savebutton.click();
        browser.sleep(1000);

        vdn.closePopUpButton.click();
        browser.sleep(1000);

        vdn.closeEditor.click();
        browser.sleep(1000);

        browser.switchTo().defaultContent();
        browser.sleep(8000);

        vdn.submitForReviewContentButton.click();
        browser.sleep(4000);

        contentName = "Title" + faker.randomData().firstname;
        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys(contentName);
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(2000);

        
    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}

const createPracticeQuestionSetFromIndContributorSide = (projectName) => {

    try {

        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewButton), 20000, "create new button  not Displayed");
        vdn.createNewButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selPracticeQuestionSet), 20000, "Practice Question set  not Displayed");
        vdn.selPracticeQuestionSet.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContinue), 20000, "continue button is not displayed");
       vdn.clkContinue.click();
       browser.sleep(5000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName), 20000, "Name is not displayed");
    vdn.enterName.click();
    vdn.enterName.sendKeys("Testing");
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName), 20000, "Name is not displayed");
    vdn.enterName.click();
    vdn.enterName.sendKeys("Testing");
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterDescription), 20000, "Description is not displayed");
    vdn.enterDescription.click();
    vdn.enterDescription.sendKeys("Testing");
    browser.sleep(3000);

    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterInstructions), 20000, "Enter instructions is not displayed");
    vdn.enterInstructions.click();
    vdn.enterInstructions.sendKeys("Testing VDN");
    browser.sleep(2000);

    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelSyllabus), 20000, "Select syllabus  not Displayed");
    vdn.clkSelSyllabus.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selCBSEBoardValue), 20000, "CBSE  not Displayed");
    vdn.selCBSEBoardValue.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelMediumsection), 20000, "Select Medium  not Displayed");
    vdn.clkSelMediumsection.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selEngMediumValue), 20000, "English  not Displayed");
    vdn.selEngMediumValue.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelClassSection), 20000, "Select class  not Displayed");
    vdn.clkSelClassSection.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selClass1Value), 20000, "Class 1  not Displayed");
    vdn.selClass1Value.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelSubSection), 20000, "Select subject  not Displayed");
    vdn.clkSelSubSection.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selEngMediumValue), 20000, "English subject  not Displayed");
    vdn.selEngMediumValue.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelAudienceSection), 20000, "select audience  not Displayed");
    vdn.clkSelAudienceSection.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selAudienceValue), 20000, "CBSE  not Displayed");
    vdn.selAudienceValue.click();
    browser.sleep(2000);

    browser.executeScript('window.scrollTo(0,200);').then(function () {
        console.log('++++++SCROLLED UP+++++');
    });
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSelHour), 20000, "hours  not Displayed");
    vdn.clkSelHour.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selHoursInDropdown), 20000, "hours in dropdown  not Displayed");
    vdn.selHoursInDropdown.click();
    browser.sleep(2000);

    browser.executeScript('window.scrollTo(400,0);').then(function () {
        console.log('++++++SCROLLED DOWN+++++');
    });
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnSaveAsDraft), 20000, "Save as draft  not Displayed");
    vdn.btnSaveAsDraft.click();
    browser.sleep(2000);

    
}
    catch (Exception) {
        console.log('Unable upload Content')
    }
}

const createContentPlaylistProjectWithMultilpleContentTypes = () => {
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

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selOldQuestionSet), 20000, "Old Practice Question Set is not available");
        // vdn.selOldQuestionSet.click();
        // browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selTeacherResource), 20000, "Teacher Resource is not available");
        vdn.selTeacherResource.click();
        browser.sleep(1000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkOutContentType), 20000, "Content Type is not available");
        vdn.clkOutContentType.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectTargetCollection), 20000, "Target Collection dropDown is not available");
        vdn.selectTargetCollection.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.contentPlayList), 20000, "Content playlist Option is not available");
        vdn.contentPlayList.click();
        browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFrameWork), 20000, "Select Framework Dropdown is not available");
        // vdn.selectFrameWork.click();
        // browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectCPD), 20000, "Select Framework Option2 is not available");
        // vdn.selectCPD.click();
        // browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectFirstContentPlaylist), 20000, "Content playlist Is Not Listed ");
        vdn.selectFirstContentPlaylist.click();
        browser.sleep(10000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnPublishProject), 20000, "Publish Button is not available");
        vdn.btnPublishProject.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.btnYes), 20000, "Button Yes is not available");
        vdn.btnYes.click();
        browser.sleep(3000);

        //browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertToastMsg), 20000, "Project Publish Msg is not Displayed");

        // expect(vdn.assertToastMsg.isPresent()).toBe(true).then(function () {
        //     console.log("Project published successfully ");
        // })

        browser.sleep(3000);

    } catch (err) {
        console.log(err);
    }
    return projectName;
}

const verifyAssignedProjectReviewerIsAbleToSubmitForApprovalWithCourseAssessment = (projectName) => {
    try {
        browser.sleep(4000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.reviewContentBtn), 20000, "Review Button is not Present");
        vdn.reviewContentBtn.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkRevPending), 20000, "Course Test1 Review Pending not Present");
        vdn.clkRevPending.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitForApproval), 20000, "Submit For Approval not Present");
        vdn.submitForApproval.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkRevPending2), 20000, "Sample Teacher Resource Review Pending not Present");
        vdn.clkRevPending2.click();
        browser.sleep(2000);
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitForApproval), 20000, "Submit For Approval not Present");
        vdn.submitForApproval.click();
        browser.sleep(2000);
        

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitReviewbutton), 20000, "Submit Review Button not Present");
        // vdn.submitReviewbutton.click();
        // browser.sleep(2000);


        expect(vdn.assertApprovalPending.isPresent()).toBe(true).then(function () {
            console.log("Approval Pending Status Is Displayed On Reviewer ");
        });


        // expect(vdn.assertNotAccepted.isPresent()).toBe(true).then(function () {
        //     console.log("Not Accepted Status Is Displayed On Reviewer ");
        // });
        
    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}

const uploadContentAndSubmitForRev = () => {
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentButton), 20000, "Upload Button is not available");
    vdn.uploadContentButton.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewBtn), 20000, "Create New Button is not available");
    vdn.createNewBtn.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltCourseAssessmentContribute), 20000, "Image is not available");
    vdn.sltCourseAssessmentContribute.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Continue button is not available");
    vdn.clkContnue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.radioButtonEcmlCreation1), 20000, "Interactive Content online is not available");
    vdn.radioButtonEcmlCreation1.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnuePopUp), 20000, "Continue button is not available");
    vdn.clkContnuePopUp.click();
    
    browser.sleep(15000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(7000);
    wait.waitForElementVisibility(vdn.addQuestionSet, 20000, "addQuestionSet is not available");
    vdn.addQuestionSet.click();
    browser.sleep(5000);
    vdn.sltQuestionCheckbox.click();
    browser.sleep(2000);
    vdn.nextButton.click();
    browser.sleep(3000);

    quesSetTitle = "Question" + faker.randomData().firstname;
    vdn.questionSetTitle.sendKeys(quesSetTitle);
    browser.sleep(1000);

    vdn.addQuestionSetButton.click();
    browser.sleep(1000);

    vdn.savebutton.click();
    browser.sleep(1000);

    vdn.closePopUpButton.click();
    browser.sleep(1000);

    vdn.closeEditor.click();
    browser.sleep(1000);

    browser.switchTo().defaultContent();
    browser.sleep(8000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit For Review Button is not available");
    vdn.clkSubmitForReview.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName), 20000, "Name field is not available");
    vdn.enterName.click();
    vdn.enterName.sendKeys('Test1');
    browser.sleep(3000);


    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterCopyRight), 20000, "copy right year field is not available");
    vdn.enterCopyRight.click();
    vdn.enterCopyRight.sendKeys('2022');
    browser.sleep(3000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
    vdn.clkSubmitUploadForm.click();
    browser.sleep(2000);


    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.createNewBtn), 20000, "Create New Button is not available");
    vdn.createNewBtn.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltCourseAssessmentContribute), 20000, "Image is not available");
    vdn.sltCourseAssessmentContribute.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnue), 20000, "Continue button is not available");
    vdn.clkContnue.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.radioButtonEcmlCreation1), 20000, "Interactive Content online is not available");
    vdn.radioButtonEcmlCreation1.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkContnuePopUp), 20000, "Continue button is not available");
    vdn.clkContnuePopUp.click();
    
    browser.sleep(15000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(7000);
    wait.waitForElementVisibility(vdn.addQuestionSet, 20000, "addQuestionSet is not available");
    vdn.addQuestionSet.click();
    browser.sleep(5000);
    vdn.sltQuestionCheckbox.click();
    browser.sleep(2000);
    vdn.nextButton.click();
    browser.sleep(3000);

    quesSetTitle = "Question" + faker.randomData().firstname;
    vdn.questionSetTitle.sendKeys(quesSetTitle);
    browser.sleep(1000);

    vdn.addQuestionSetButton.click();
    browser.sleep(1000);

    vdn.savebutton.click();
    browser.sleep(1000);

    vdn.closePopUpButton.click();
    browser.sleep(1000);

    vdn.closeEditor.click();
    browser.sleep(1000);

    browser.switchTo().defaultContent();
    browser.sleep(8000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkSubmitForReview), 20000, "Submit For Review Button is not available");
    vdn.clkSubmitForReview.click();
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterName), 20000, "Name field is not available");
    vdn.enterName.click();
    vdn.enterName.sendKeys('Test2');
    browser.sleep(3000);


    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.enterCopyRight), 20000, "copy right year field is not available");
    vdn.enterCopyRight.click();
    vdn.enterCopyRight.sendKeys('2022');
    browser.sleep(3000);

    browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
    browser.sleep(2000);
    vdn.clickCheckBox.click();

    wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
    vdn.clkSubmitUploadForm.click();
    browser.sleep(2000);

    
}


const openCreatedProjectFromMyProjects = (projectName) => {
    try {

    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "My Projects Tab is not available");
    vdn.clkMyProjectsOnIndContributor.click();
    browser.sleep(3000);

    browser.sleep(4000);
    let var1 = "//*[contains(text(),'";
    let var2 = projectName;
    let var3 = "')]//following::button[1]";
    browser.sleep(10000);
    var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

    expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
       });
    browser.sleep(1000);
    assertProjInAllProjTab.click();
    browser.sleep(5000);
    }
    catch(Exception) {
        console.log('Unable To Open Project');
    }
}

const UploadExplinationCntentAfterUploadingUploadingEtext = (projectName) => {
    try {
        browser.sleep(4000);

        // let var1 = "//*[contains(text(),'";
        // let var2 = projectName;
        // let var3 = "')]//following::button[1]";
        // browser.sleep(10000);
        // var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        // expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
        //     console.log("Created Project Is Available In All Projects tab for contributors ");
        // });
        // browser.sleep(1000);
        // assertProjInAllProjTab.click();
        // browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkUpload), 20000, "Upload Button is not Present");
        // vdn.clkUpload.click();
        // browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Create New Button is not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltExplainitionContent), 20000, "Explanation Content is not Present");
        vdn.sltExplainitionContent.click();
        browser.sleep(2000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);
        expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });


        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample EC");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(3000);

        expect(vdn.assertReviewPending.isPresent()).toBe(true).then(function () {
            console.log("Created Explanation Content Is Pending status ");
        });
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Create New Button is not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.slteTextbookContribute), 20000, "eTextBook is not Present");
        vdn.slteTextbookContribute.click();
        browser.sleep(2000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);

        wait.waitForElementVisibility(vdn.clkBackBtn, 20000);
        vdn.clkBackBtn.click();
        browser.sleep(5000);

        expect(vdn.assertReviewPending.isPresent()).toBe(true).then(function () {
            console.log("Created Content Is Saved and Is In Draft Status ");
        });

    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}


const verifyAssignedProjectReviewerIsAbleToSubmitForApprovalWithETextBookAndEC = (projectName) => {
    try {
        browser.sleep(4000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.reviewContentBtn), 20000, "Review Button is not Present");
        vdn.reviewContentBtn.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.countAwaiting), 20000, "Invalid Count");
        // expect(vdn.countAwaiting.isPresent()).toBe(true).then(function () {
        //     console.log("Roles Updated as A Contributer");
        // });
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextReviewPendings), 20000, "eTextBook Review Pending not Present");
        vdn.eTextReviewPendings.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSample1ForAccept), 20000, "Sample1 Review Pending not Present");
        vdn.selSample1ForAccept.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitForApproval), 20000, "Submit For Approval not Present");
        vdn.submitForApproval.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSampleECForAccept), 20000, "Sample2 Review Pending not Present");
        vdn.selSampleECForAccept.click();
        browser.sleep(2000);
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitForApproval), 20000, "Submit For Approval not Present");
        vdn.submitForApproval.click();
        browser.sleep(2000);
        

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitReviewbutton), 20000, "Submit Review Button not Present");
        // vdn.submitReviewbutton.click();
        // browser.sleep(2000);


        expect(vdn.assertApprovalPending.isPresent()).toBe(true).then(function () {
            console.log("Approval Pending Status Is Displayed On Reviewer ");
        });


        // expect(vdn.assertNotAccepted.isPresent()).toBe(true).then(function () {
        //     console.log("Not Accepted Status Is Displayed On Reviewer ");
        // });
        
    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}

const UploadContentsForLearningResourceAndTeacherResourceAssignedContributer = (projectName) => {
    try {
        browser.sleep(4000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.uploadContentButton), 20000, "Upload Content Button is not Present");
        vdn.uploadContentButton.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Create New Button is not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltLearningResource), 20000, "Learning Resourcce is not Present");
        vdn.sltLearningResource.click();
        browser.sleep(2000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);
        expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });


        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample LR1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(3000);

        expect(vdn.assertReviewPending.isPresent()).toBe(true).then(function () {
            console.log("Created Content Is Pending status ");
        });
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Create New Button is not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltLearningResource), 20000, "eTextBook is not Present");
        vdn.sltLearningResource.click();
        browser.sleep(2000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);

        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample LR2");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(3000);

        expect(vdn.assertReviewPending.isPresent()).toBe(true).then(function () {
            console.log("Created Content Is Pending status ");
        });
        browser.sleep(3000);

        // wait.waitForElementVisibility(vdn.clkBackBtn, 20000);
        // vdn.clkBackBtn.click();
        // browser.sleep(5000);

        // expect(vdn.assertReviewPending.isPresent()).toBe(true).then(function () {
        //     console.log("Created Content Is Saved and Is In Draft Status ");
        // });

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Create New Button is not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltTeacherResource), 20000, "Teacher Resourcce is not Present");
        vdn.sltTeacherResource.click();
        browser.sleep(2000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);
        expect(vdn.assertSuccesMsgFileUpload.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });


        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample TR1");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(3000);

        expect(vdn.assertReviewPending.isPresent()).toBe(true).then(function () {
            console.log("Created Content Is Pending status ");
        });
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextbookCreateNewBtn), 20000, "Create New Button is not Present");
        vdn.eTextbookCreateNewBtn.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.sltTeacherResource), 20000, "eTextBook is not Present");
        vdn.sltTeacherResource.click();
        browser.sleep(2000);

        
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.continueBtn), 20000, "Checkbox is not Present");
        vdn.continueBtn.click();
        browser.sleep(2000);

        utilityFun.uploadParticularFile(pdf);

        wait.waitForElementVisibility(vdn.clkSubmit, 20000);
        vdn.clkSubmit.click();
        browser.sleep(300);

        wait.waitForElementVisibility(vdn.enterName, 20000);
        vdn.enterName.click();
        vdn.enterName.sendKeys("sample TR2");
        browser.sleep(300);
        wait.waitForElementVisibility(vdn.enterCopyRight, 20000);
        vdn.enterCopyRight.click();
        vdn.enterCopyRight.sendKeys("2022");
        browser.sleep(300);
        browser.executeScript("arguments[0].scrollIntoView();", vdn.clickCheckBox);
        browser.sleep(2000);
        vdn.clickCheckBox.click();

        wait.waitForElementVisibility(vdn.clkSubmitUploadForm, 20000);
        vdn.clkSubmitUploadForm.click();
        browser.sleep(3000);

        expect(vdn.assertReviewPending.isPresent()).toBe(true).then(function () {
            console.log("Created Content Is Pending status ");
        });
        browser.sleep(3000);


    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}

const verifyAssignedProjectReviewerIsAbleToSubmitForApprovalWithLRAndTR = (projectName) => {
    try {
        browser.sleep(4000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));

        expect(assertProjInAllProjTab.isPresent()).toBe(true).then(function () {
            console.log("Created Project Is Available In All Projects tab for contributors ");
        });
        browser.sleep(1000);
        assertProjInAllProjTab.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.reviewContentBtn), 20000, "Review Button is not Present");
        vdn.reviewContentBtn.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.countAwaiting), 20000, "Invalid Count");
        // expect(vdn.countAwaiting.isPresent()).toBe(true).then(function () {
        //     console.log("Roles Updated as A Contributer");
        // });
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });


        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.eTextReviewPendings), 20000, "eTextBook Review Pending not Present");
        // vdn.eTextReviewPendings.click();
        // browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSampleLR1ForAccept), 20000, "Sample1 Learning Resource Review Pending not Present");
        vdn.selSampleLR1ForAccept.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitForApproval), 20000, "Submit For Approval not Present");
        vdn.submitForApproval.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selSampleTR1ForAccept), 20000, "Sample Teacher Resource Review Pending not Present");
        vdn.selSampleTR1ForAccept.click();
        browser.sleep(2000);
       
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitForApproval), 20000, "Submit For Approval not Present");
        vdn.submitForApproval.click();
        browser.sleep(2000);
        

        // browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.submitReviewbutton), 20000, "Submit Review Button not Present");
        // vdn.submitReviewbutton.click();
        // browser.sleep(2000);


        expect(vdn.assertApprovalPending.isPresent()).toBe(true).then(function () {
            console.log("Approval Pending Status Is Displayed On Reviewer ");
        });


        // expect(vdn.assertNotAccepted.isPresent()).toBe(true).then(function () {
        //     console.log("Not Accepted Status Is Displayed On Reviewer ");
        // });
        
    }
    catch (Exception) {
        console.log('User Is Not Able To Unable To Nominate For The Project')
    }
}

const sourcingAdminAbleToAssignReviewerRole1 = (projectName) => {

    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.clkMyProjectsOnIndContributor), 20000, "Click All My Project is not available");
        vdn.clkMyProjectsOnIndContributor.click();
        browser.sleep(5000);

        let var1 = "//*[contains(text(),'";
        let var2 = projectName;
        let var3 = "')]//following::button[1]";
        browser.sleep(10000);
        var assertProjInAllProjTab = element(by.xpath(var1 + var2 + var3));
        assertProjInAllProjTab.click();
        browser.sleep(7000);

    
        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assignUsersToProjectTab1), 20000, "Assign Users To Project Tab not Displayed");
        vdn.assignUsersToProjectTab1.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectRole), 20000, "Select Role Option not Displayed");
        vdn.selectRole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.selectReviewer), 20000, "Reviewer Option not Displayed");
        vdn.selectReviewer.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(vdn.assertRolesUpdated), 20000, "Roles Not Updated");
        expect(vdn.assertRolesUpdated.isPresent()).toBe(true).then(function () {
            console.log("Roles Updated Successfully with Nomination Enabled");
        });
    }
    catch (Exception) {
        console.log('Reviewer role not updated successfully')
    }
}
const sourcingAdminAbleToseeStateSystem = () => {

    

        expect(vdn.stateSystem.isPresent()).toBe(true).then(function () {
            console.log("State System Is Displayed login Page");
     
}


        )};





module.exports = {
    createProjectWithCourse,
    verifyProjectAvailableInAllProjectsTabForContributor,
    createProjectWithCourseOrgOnly,
    createProjectWithDefinedSetOfOrgAndIndividualContributors,
    verifyAutomaticallyApprovedIndividualNomination,
    createProjectWithDigitalTextBook,
    verifyPreApprovedUserNominationIsDisplayedInNominationsTab,
    NominateContributer,
    verifySourcingOrgAdminIsAbleToAcceptNomination,
    createProjectWithTargetCollection,
    validateiconsAndeditDraft,
    createProjectWithoutTargetCollection,
    editFromDraftAfterPublishProject,
    closeProject,
    createProjectWithAllContentType,
    createProjectWithContentPlaylist,
    verifySourcingOrgAdminIsAbleToRejectNomination,
    verifySourcingOrgAdminIsAbleToAssignReviewer,
    OrgAdminIsAbleToAssignReviewer,
    verifyAssignedReviewerIsAbleToViewDetails,
    OrgAdminIsAbleToAssignReviewerWithNominationDisable,
    createProjectWithDigitalTextBookWithNominationDisable,
    verifySourcingOrgAdminIsAbleToModifyProjectDates,
    verifyAssignedReviewerIsAbleToViewDetailsWithNominationDisable,
    createProjectWithAllContentTypes,
    verifySourcingOrgAdminIsAbleToViewSamples,
    addSampleFromContriutionSideAndNominate,
    verifyModifiedProjectDates,
    assignOrgContributorAndOrgReviewerToCreatedProject,
    verifyModifiedProjectDatesOnProjectDetails,
    verifyEnrolmentPopUpIsDisplayed,
    OpenAprovedProjectAndAssignContributeRole,
    verifyMyContentsTabIsAvailable,
    verifyContributorOrgAdminIsAbleToSearchAndAssignRoles,
    changeToAdminRoleInManageUsersTab,
    changeToUserRoleInManageUsersTab,
    verifyManageUsersAndAllProjectsTabPostRoleChangedToAdmin,
    verifyNoManageUsersAndAllProjectsTabPostRoleChangedToUser,
    createProjectWithIndividualContributor,
    verifyApprovedStatusForProjectWithIndividualContributor,
    createProjectWithContributorOrgAdmin,
    verifyPendingApprovalStatusForProjectWithDigitalTextBook,
    addSample,
    verifyProjectAvailableInAllProjectsTab,
    verifyProjectCount,
    reviewContent,
    verifydefaultContributorOrgAdminIsAbleToSearchAndAssignRoles,
    openApprovedProjectInMyProjectsForIndividualContributor,
    uploadContentAndVerifyDraftInTOCpage,
    createProjectWithIndividualContentNotTargetedToAnyCollection,
    verifyCreatedProjectIsAvailableInIndividualContentNotTargetedToAnyCollectionSection,
    createProjectWithOrgOnlyForNotTargetedToAnyCollection,
    verifyCreatedProjectIsAvailableInIndividualContentNotTargetedToAnyCollectionSectionForSkipReviewEnabled,
    createProjectWithAnyTargetCollection,
    verifyCreatedProjectWithSkipReviewDisabled,
    assignReviewerRoleToTheCreatedProject,
    createProjectWithContentNotTargetedToAnyCollection,
    verifyIndividualContributorIsAbleToNominateWithoutTargetCollection,
    verifyOrgAbleToDownloadContentDetails,
    verifyOrgAbleToDownloadNominationDetailsOfProject,
    verifyOrgAbleToDownloadContributionDetailsOfTheProject,
    verifyNewCredentialAbleToRegisterAsIndividualContributor,
    createCourseProjectWithSkipReviewEnabled,
    assignDefaultContributorOrgAdminToContributerRole,
    DefaultContributionOrgContributorIsAbleToUploadContentForSkipReviewEnabled,
    verifySourcingOrgAdminIsAbleToAcceptNominationWithoutTargetColl,
    verifyIndividualContributorIsAbleToNominateWithoutTargetCollectionWithSample,
    verifyUpdatedCountInContributionDashboard,
    assignDefaultContributorOrgAdminToBothAndContributer,
    addSampleFromContriutionSide,
    verifyDefaultOrgUserWithBothAsRoleIsAbleToReviewTheContent,
    assignDefaultContributorOrgAdminToReviewerAndContributer,
    verifyDefaultOrgUserWithReviewerAsRoleIsAbleToReviewTheContent,
    createProjectWithoutTargetCollectionWithMultipleContentTypes,
    assignContributorOrgAdminToBothAndContributer,
    OrgAdminIsAbleToAcceptNominationWithoutTargetColl,
    ContributorIsAbleToNominateWithoutTargetCollection,
    verifyUpdatedCountsUnderCourseContentPlaylistAndDigitalTextbooktab,
    openCreatedProject,
    userShouldNotBeAllowedToReviewHisOwnContent,
    verifyContributorsAreAbleToUploadASampleAndInitiateNomination,
    addSampleFromContriutionSideWithoutNominate,
    openCreatedProjectWithoutTargetCollection,
    assignContributorAndReviewerRoleToTheProject,
    uploadContentFromContributorSide,
    contentSentForApprovalFromReviewerSide,
    uploadSecondContent,
    uploadThirdContent,
    uploadFourthContent,
    approveContent2,
    approveContent3,
    approveContent4,
    contentsPublishRejectAndSendForCorrection,
    verifyAllProjectsMyProjectsAndManageUsersTabForAssignedContAdmin,
    verifyAssignedAdminAbleToAssignUsersToTheProject,
    verifySourcingAdminIsAbleToAcceptNomination,
    uploadTheContentFromIndividualContributorSide,
    sourcingAdminAbleToAssignReviewerRole,
    verifyPostRejectionValidateRejectedCount,
    createProjectWithDigitalTextBookSkipReviewEnabled,
    uploadContentFromAssignedContributor,
    verifyAcceptRequestChangesNotAvailableInReviewerSide,
    NominateContributerWithUploadSample,
    assignContributorOrgAdminToContributerRole,
    verifyUploadContentStatusForAssignedContributer,
    verifyCountsUnderTextBookAndContributionDashboardPostPublishTheContent,
    uploadTheContentFromIndividualContributorSideAndVerifyDraftStatusInTOC,
    uploadContentAndVerifyApprovalPendingStatusInTOCPostPublish,
    createCourseProjectWithCourseAssessmentAndEtextbookContentTypes,
    NominateContributerWithMultipleContentTypes,
    uploadThePdfContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent,
    uploadTheEpubContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent,
    uploadTheMP3ContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent,
    uploadTheMP4ContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent,
    uploadTheWebmContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent,
    uploadTheh5pContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent,
    uploadThehtmlContentFromIndividualContributorSideAndVerifyAbleToPublishTheContent,
    createCourseAssessmentContentFromIndividualContributorSide,
    createPracticeQuestionSetFromIndContributorSide,
    createContentPlaylistProjectWithMultilpleContentTypes,
    verifyAssignedProjectReviewerIsAbleToSubmitForApprovalWithCourseAssessment,
    uploadContentAndSubmitForRev,
    openCreatedProjectFromMyProjects,
    UploadExplinationCntentAfterUploadingUploadingEtext,
    verifyAssignedProjectReviewerIsAbleToSubmitForApprovalWithETextBookAndEC,       
    UploadContentsForLearningResourceAndTeacherResourceAssignedContributer,
    verifyAssignedProjectReviewerIsAbleToSubmitForApprovalWithLRAndTR,
    assignContributorOrgAdminToReviewerAndContributer,
    uploadMoreContentForAction,
    verifyCountAndStatusOnReviewer,
    sourcingAdminAbleToAssignReviewerRole1,
    sourcingAdminAbleToseeStateSystem,
}