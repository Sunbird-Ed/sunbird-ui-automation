const { browser, protractor } = require("protractor");


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





module.exports = {



    createProjectWith100DigitalTextBook





    
}
