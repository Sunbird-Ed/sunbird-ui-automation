//const { browser } = require("protractor");

const { browser } = require("protractor");

const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/ETB/etb.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const tpdPage = require(protractor.basePath + '/test/pages/tpdPage/tpdpage.po.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
const resourcePag = require(protractor.basePath + '/test/pages/resource/resource.po.js');
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpage = require(protractor.basePath + '/test/pages/sanity/VerifySignInPopupInExploreCourseEnrollButton.js');
var verifyCEBObj = verifyCEBpage.VerifySignInPopupInExploreCourseEnrollButton();
const sanityPage = require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const todaysDate = utility.recentDate();
const endDate = utility.nextDate();
const futureDate = utility.futureDate();
var searchObj = tpdPage.tpdPage();
var content = ccpage.contentCreation();
var etbv = etbpage.etb();
var resov = resourcePag.resource();
var sanity = sanityPage.SanityElement();


const createCourse = () => {
    var courseName;
    try {

        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.nonAcademic.click();

        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        // courseName= "CourseA"+faker.randomData().firstname;
        // content.name.sendKeys(courseName);
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        content.newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        content.titleN.click();
        content.titleN.clear();
        content.titleN.sendKeys(faker.randomData().firstname);
        content.descriptionN.sendKeys('description');
        content.addTagN.sendKeys('tag');
        //     content.addResource.click(); 
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        //     content.resourceSearch.click();
        //    content.resourceSearch.sendKeys("Pdf");
        //    browser.sleep(1000);
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        //     content.selectResourceType2.click();
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        //     content.clickAddbutton.click();

        //    browser.sleep(2000);
        //    browser.wait(protractor.ExpectedConditions.visibilityOf(content.checkboxFirst), 50000, "checkboxFirst is not available");
        //    content.checkboxFirst.click();

        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();
        browser.sleep(1000);
        console.log("User successfully created course")
        return courseName;
    } catch (Exception) {
        console.log("User failed to create course")
    }
}
const sendForReviewTheCourse = () => {
    var courseName;
    try {

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.sendForReview), 20000, "send for review not available");
        content.sendForReview.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAppIcon), 20000, "clickAppIcon not available");
        content.clickAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.checkAppIcon), 20000, "checkAppIcon not available");
        content.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectAppIcon), 20000, "selectAppIcon not available");
        content.selectAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topic), 20000, "topic not available");
        content.topic.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorImg), 20000, "topicSelectorImg not available");
        browser.sleep(500);
        content.topicSelectorImg.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorContent), 20000, "topicSelectorContent not available");
        content.topicSelectorContent.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorDone), 20000, "topicSelectorDone not available");
        content.topicSelectorDone.click();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.purposeOfCourse);
        searchObj.purposeOfCourse.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.purposeOfFirstCourse), 30000, "purposeOfFirstCourse button not available");
        searchObj.purposeOfFirstCourse.click();
        browser.sleep(500);
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.mediumOfInstruction);
        searchObj.mediumOfInstruction.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstmediumOfInstruction), 30000, "firstmediumOfInstruction button not available");
        searchObj.firstmediumOfInstruction.click();
        browser.sleep(500);
        searchObj.mediumOfInstruction.click();
        browser.sleep(500);
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.audienceType);
        searchObj.audienceType.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstAudienceType), 30000, "firstAudienceType button not available");
        searchObj.firstAudienceType.click();
        browser.sleep(500);
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.classesTaught);
        searchObj.classesTaught.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstclassTaught), 30000, "firstclassTaught button not available");
        searchObj.firstclassTaught.click();
        browser.sleep(500);
        searchObj.classesTaught.click();
        browser.sleep(500);
        searchObj.subjectsTaught.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstSubjectTaught), 30000, "firstclassTaught button not available");
        searchObj.firstSubjectTaught.click();
        browser.sleep(500);
        // searchObj.subjectsTaught.click();
        // browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", content.author);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        content.author.click();
        content.author.sendKeys("Ekstep");
        // browser.executeScript("arguments[0].scrollIntoView();",  etbv.yearOfCreation);
        // etbv.yearOfCreation.click();
        // etbv.yearOfCreation.clear();
        // etbv.yearOfCreation.sendKeys("2020");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
        content.saveform.click();
        browser.sleep(3000);
        return courseName;
    } catch (er) {
        console.error("User failed to create course")
    }
}
const publishTheCourseFromUpForReview = (coursename) => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000, "Creation page not loaded");
    content.upForReview.click();
    browser.sleep(2000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
    content.searchForReview.click();
    content.searchForReview.sendKeys(coursename);
    // content.searchIconUpForReview.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
    content.searchedContentForPublish.click();
    console.log("trying to enter in the frame")
    browser.sleep(6000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(3000);
    console.log("entered in the frame")
    // browser.wait(protractor.ExpectedCondisstions.visibilityOf(content.publishCourseButton), 20000,"Creation page not loaded");
    content.publishCourseButton.click();
    browser.sleep(1000);
    content.checkBox.each(function (input) {
        input.click()
    });
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickpublishbutton), 20000, "Creation page not loaded");
    content.clickpublishbutton.click();
    browser.switchTo().defaultContent();
    browser.sleep(1000);
}
const createInviteOnlyBatchForLatestCourse = () => {

    try {
        browser.sleep(1000);
        console.log("User is trying to create invite only batch for a course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "head course is not available");
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(550,350);').then(function () {
            searchObj.latestCourseViewAllSection.click();
        });
        //browser.actions().mouseMove(searchObj.latestCourseViewAllSection).perform();
        //browser.executeScript("arguments[0].scrollIntoView();",searchObj.latestCourseViewAllSection);
        //searchObj.latestCourseViewAllSection.click();
        browser.sleep(1000);
        console.log("Click on Latest Course");
        searchObj.getCourseName.getText().then(function (courseName) {
            console.log(courseName);
        });

        content.courseCard.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "addIcon is not available");
        searchObj.addIcon.click();

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, " nameOfBatch is not available");
        searchObj.nameOfBatch.click();
        searchObj.nameOfBatch.sendKeys("batch1");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.aboutBatch), 20000, "  aboutBatch is not available");
        searchObj.aboutBatch.sendKeys('batch1');
        searchObj.aboutBatch.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDate), 20000, "startDate is not available");
        searchObj.startDate.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
        searchObj.startDateCalendar.click();
        //browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDate), 20000, "endDate is not available");
        searchObj.endDate.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDateCalendar), 20000, " endDateCalendar is not available");
        searchObj.endDateCalendar.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.mentorsInBatch), 20000, "mentorsInBatch is not available");
        searchObj.mentorsInBatch.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstMentorInBatch), 20000, " firstMentorInBatch is not available");
        searchObj.firstMentorInBatch.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.mentorDropdown), 20000, "mentorDropdown is not available");
        searchObj.mentorDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.membersInBatch), 20000, "membersInBatch is not available");
        searchObj.membersInBatch.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.firstMemberInBatch), 20000, "firstMemberInBatch is not available");
        searchObj.firstMemberInBatch.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.memberDropdown), 20000, "memberDropdown is not available");
        searchObj.memberDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.buttonCreate), 20000, "buttonCreate is not available");
        searchObj.buttonCreate.click();
        console.log("Invite only batch for a course is created sucessfully");

    }
    catch (Exception) {
        console.log("User is Failed to create invite only batch for a course");
    }

}


const publishContentFromUpForReviewBucket2 = (coursename) => {
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
        for (i = 1; i < 9; i++) {
            tpdPage.tpdPage().publishTheCourse.isPresent().then(function (result) {
                if (result === true) {
                    tpdPage.tpdPage().publishTheCourse.click();
                    browser.sleep(1000);
                    content.clkcheckBoxPublising.isPresent().then(function (result) {
                        if (result === true) {
                            content.clickFirstChekcBox.click();
                            browser.sleep(3000);
                            content.clkcheckBoxPublising.each(function (input) {
                                browser.sleep(200);
                                input.click()
                            });
                            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
                            tpdPage.tpdPage().confirmForPublishBook.click();
                            browser.sleep(2000);
                        } else {
                            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
                            tpdPage.tpdPage().confirmForPublishBook.click();
                            browser.sleep(6000);
                        }
                    })

                } else {
                    sanity.submitForreviewButton.isPresent().then(function (result2) {
                        if (result2 === true) {
                            browser.refresh();
                            browser.sleep(200);
                        }
                    })

                }

            });
            break;
        }
    }
    catch (Exception) {
        console.log("Failed on navigating to Course section and search course");
    }
}

const publishContentFromUpForReviewBucket = (coursename) => {
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


    tpdPage.tpdPage().publishTheCourse.isPresent().then(function (result) {
        if (result) {

            tpdPage.tpdPage().publishTheCourse.click();
            browser.sleep(4000);
            content.clickFirstChekcBox.click();
            browser.sleep(5000);
            content.clkcheckBoxPublising.each(function (input) {
                browser.sleep(200);
                input.click()
            });
            browser.sleep(2000);


        } else {

            browser.refresh();
            browser.sleep(6000);
            browser.refresh();
            browser.sleep(8000);

            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().publishTheCourse), 20000, "workspace page not loaded");
            tpdPage.tpdPage().publishTheCourse.click();
            browser.sleep(4000);

            content.clickFirstChekcBox.click();
            browser.sleep(5000);
            content.clkcheckBoxPublising.each(function (input) {
                browser.sleep(200);
                input.click()
            });
            browser.sleep(2000);

        }
    });




    browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
    tpdPage.tpdPage().confirmForPublishBook.click();
    browser.sleep(6000);

}



const publishContent = (coursename) => {
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

        sanity.submitForreviewButton.isPresent().then(function (result2) {
            while (result2 === true) {
                browser.refresh();
                browser.sleep(200);
            }
        })
        tpdPage.tpdPage().publishTheCourse.isPresent().then(function (result) {
            if (result === true) {
                tpdPage.tpdPage().publishTheCourse.click();
                browser.sleep(1000);
                content.clkcheckBoxPublising.isPresent().then(function (result) {
                    if (result === true) {
                        content.clickFirstChekcBox.click();
                        browser.sleep(3000);
                        content.clkcheckBoxPublising.each(function (input) {
                            browser.sleep(200);
                            input.click()
                        });
                        browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
                        tpdPage.tpdPage().confirmForPublishBook.click();
                        browser.sleep(2000);
                    } else {
                        browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
                        tpdPage.tpdPage().confirmForPublishBook.click();
                        browser.sleep(6000);
                    }
                })
            }
        })





        //     for (i = 1; i < 5; i++) {
        //         sanity.submitForreviewButton.isPresent().then(function (result2) {
        //             if (result2 === true) {
        //                 browser.refresh();
        //                 browser.sleep(200);
        //             } else {
        //                 tpdPage.tpdPage().publishTheCourse.isPresent().then(function (result) {
        //                     if (result === true) {
        //                         tpdPage.tpdPage().publishTheCourse.click();
        //                         browser.sleep(1000);
        //                         content.clkcheckBoxPublising.isPresent().then(function (result) {
        //                             if (result === true) {
        //                                 content.clickFirstChekcBox.click();
        //                                 browser.sleep(3000);
        //                                 content.clkcheckBoxPublising.each(function (input) {
        //                                     browser.sleep(200);
        //                                     input.click()
        //                                 });
        //                                 browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
        //                                 tpdPage.tpdPage().confirmForPublishBook.click();
        //                                 browser.sleep(2000);
        //                             } else {
        //                                 browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
        //                                 tpdPage.tpdPage().confirmForPublishBook.click();
        //                                 browser.sleep(6000);
        //                             }
        //                         })

        //                     }

        //                 });

        //             }
        //         })
        //     }
        // })
    }

    catch (Exception) {
        console.log("Failed on navigating to Course section and search course");
    }
}





const navigateToCourseAndSearch = (courseName) => {

    try {

        console.log("To verify navigate to Course section and search course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse is not available");
        searchObj.headerCourse.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput  is not available");
        searchObj.searchInput.sendkeys(courseName);
        searchObj.searchInput.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon), 20000, " searchIcon is not available");
        searchObj.searchIcon.click();
        browser.sleep(2000);
        if (searchObj.courseCard.isDisplayed()) {
            console.log("Course is displayed as the result");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, " courseCard is not available");
            searchObj.courseCard.click();
        }
        else {
            console.log("Course is displayed as the result");
        }
    }
    catch (Exception) {
        console.log("Failed on navigating to Course section and search course");
    }
}


const ClickOnviewAllAndSearch = (courseName) => {
    try {
        console.log("verify course name should be displayed as per latest enrollmet");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewAllButton), 20000, "viewAll Button is not available");
        searchObj.viewAllButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.latestEnrolledourse), 20000, "latest Enrolled course is not available");
        var latestCoursename = searchObj.viewAllButton.getText();
        browser.sleep(1000);
        expect(latestCoursename).toContain(courseName)

    } catch (Exception) {
        console.log("Failed to find course as per latest enrollment");
    }
}



const createCourseWithAllResourceType = () => {
    var courseName;
    try {
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.nonAcademic.click();
        browser.sleep(1000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        // courseName="CourseA"+faker.randomData().firstname;
        // content.name.sendKeys(courseName);
        content.startCreating.click();
        browser.sleep(4000);
        browser.sleep(8000);

        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        content.newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        content.titleN.click();
        content.titleN.clear();
        content.titleN.sendKeys(faker.randomData().firstname);
        content.descriptionN.sendKeys('description');
        content.addTagN.sendKeys('tag');
        browser.sleep(1000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("pdf");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("ecm");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("html");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(1000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("h5p");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("epub");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("mp4");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("webm");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never loaded");
        content.save.click();
        browser.sleep(1000);
        console.log("User successfully created course with all resource type");
        return courseName;
    } catch (Exception) {
        console.log("failed to execute create course with all resource type")
    }
}


const navigateToCourseSearchAndConsume = () => {
    try {

        console.log("To verify navigate to Course section and search course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse is not available");
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput  is not available");
        searchObj.searchInput.sendKeys('course');
        searchObj.searchInput.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon), 20000, " searchIcon is not available");
        searchObj.searchIcon.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        if (searchObj.courseCard.isPresent()) {
            console.log("Course is displayed as the result");
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available");
            searchObj.courseCard.click();
        }
        else {
            console.log("Course is not displayed as the result");
        }
    }
    catch (Exception) {
        console.log("Failed on navigating to Course section and search course");
    }
}
const searchCollaboratorBySearchField = (corseNames) => {
    // var coursename;
    try {

        console.log("User is navigating to the Workspace to create or check ");
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

        browser.sleep(2500);
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
        searchObj.searchCollaboratorField.sendKeys("suborg");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.suggestionCollaboratorList1), 20000, "suggestionCollaboratorList2 not loaded");
        searchObj.suggestionCollaboratorList1.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.donebutton1), 20000, "donebutton1 not loaded");
        searchObj.donebutton1.click();
        browser.sleep(2000);
        coursename = editDetailsForm();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.saveAsDraft), 20000, "donebutton1 not loaded");
        // sanity.saveAsDraft.click();
        // browser.sleep(2000);

        console.log("User successfully added  collaborator");

    }
    catch (Exception) {
        console.log("Failed to search collaborator by searchField");
    }
    //return coursename;
}
const collaboratorSendTheCourseForReview = (coursename) => {

    try {

        console.log("Collaborator is tryig to edit the content but get a lock icon");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 20000, "workSpace page not loaded");
        searchObj.workSpace.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.collaborationSection), 20000, "collaborationSection page not loaded");
        searchObj.collaborationSection.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchForReview), 20000, "searchForReview page not loaded");
        searchObj.searchForReview.click();
        searchObj.searchForReview.sendKeys(coursename);
        //  searchObj.searchIconUpForReview .click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInCollaboration), 20000, "courseNameInCollaboration is not available");
        // courseNameInCollaboration =resov.courseNameInCollaboration.getText();
        // console.log(courseNameInCollaboration);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editIcon1), 20000, "editIcon1 is not available");

        searchObj.editIcon1.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "newchild not available");
        searchObj.newChild.click();
        browser.sleep(1000);
        searchObj.titleNameForCourse.click();
        searchObj.titleNameForCourse.clear();
        searchObj.titleNameForCourse.sendKeys(coursename);
        searchObj.titleKeywordForCourse.sendKeys('math');
        // searchObj.addResource.click();
        // browser.sleep(2500);
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.selectResourceN), 20000, " selectResourceN not available");
        // searchObj.selectResourceN.click();
        // searchObj.proceedButton.click();
        browser.sleep(1500);
        if (searchObj.save.isEnabled()) {

            console.log("Course is created successfuly");

        }

    }
    catch (Exception) {
        console.log("Failed to send the course for review");
    }
}
const saveAndSendNewCourseForReview = () => {

    try {

        console.log("User is trying to save and send course for review");
        try {
            searchObj.save.click();
        }
        catch (Exception) {
            console.log("Exception Handled");
        }
        browser.sleep(10000);
        searchObj.sendForReview.click();
        console.log("clicked on Send For Review");
        browser.sleep(1000);

        console.log("clicked on Send For Review");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickAppIcon), 30000, "clickAppIcon button not available");
        searchObj.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkAppIcon), 30000, "checkappicon button not available");
        searchObj.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectAppIcon), 30000, "selectappicon button not available");
        searchObj.selectAppIcon.click();
        console.log("selected APPicon");
        browser.sleep(1000);

        // try{
        //     browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.yearOfCreation);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.yearOfCreation), 30000, "yearOfCreation not available");
        // searchObj.yearOfCreation.click();
        // browser.sleep(1000);
        // searchObj.yearOfCreation.sendKeys("2020");
        // browser.sleep(1000);
        // }
        // catch(Exception)
        // {
        //     console.log("year of creation is not present " );

        // }

        // searchObj.topic.click();
        // browser.sleep(1000);
        // searchObj.select.click();
        // browser.sleep(1000);
        // searchObj.done.click();
        // browser.sleep(1000);
        // try{
        //     browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.author);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.author), 30000, "author not available");
        // searchObj.author.click();
        // searchObj.author.clear();
        // browser.sleep(1000);
        // searchObj.author.sendKeys('EKSTEP');
        // browser.sleep(1000);
        // }
        // catch(Exception)
        // {
        //     console.log("Author is not present " );

        // }

        searchObj.saveButton.click();
        browser.sleep(2000);
        console.log("Clicked on Save button");
        console.log("User has successfully saved and send course for review");

    }
    catch (Exception) {
        console.log("Failed on saving and sending course for review");
    }
}
const checkTheCourseInReviewSubmision = (edittedcourse) => {

    try {
        browser.sleep(3000);
        console.log("Collaborator is trying to check the course in review submission");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(150);
        searchObj.workSpace.click();
        browser.sleep(5000);
        resourcePag.submittedForReview.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submittedForReviewCard), 30000, "courseNameInCollaboration not available");
        searchObj.submittedForReviewCard.getText().then(function (input) {
            console.log("Book Name is " + input);
            expect(input).toEqual(edittedcourse);
        })

        console.log("Course is verified successfully");

    }
    catch (Exception) {
        console.log("Failed to check the course in submitted for review");
    }
}

const createCourseAddCollaborator = () => {

    try {

        console.log("Creating a course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 20000, "workspace page not loaded");
        searchObj.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createCourse), 20000, "createCourse  not loaded");
        searchObj.createCourse.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.coursename), 20000, "Coursename never loaded");
        courseName = "CourseB" + faker.randomData().firstname;
        searchObj.coursename.sendKeys(courseName);
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
const collaboratorCanEditCourse = () => {

    try {


        console.log("Collaborator is trying to edit the course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        searchObj.workSpace.click();
        searchObj.collaborationSection.click();
        searchObj.searchForReview.click();
        searchObj.searchForReview.sendKeys(courseName);
        //  searchObj.searchIconUpForReview .click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInCollaboration), 20000, "courseNameInCollaboration is not available");
        // courseNameInCollaboration =resov.courseNameInCollaboration.getText();
        // console.log(courseNameInCollaboration);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editIcon1), 20000, "editIcon1 is not available");


        console.log("Collaborator is trying to edit the course");
        browser.sleep(1500);
        searchObj.editIcon1.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "newchild not available");
        searchObj.newChild.click();
        browser.sleep(1000);
        searchObj.titleNameForCourse.click();
        searchObj.titleNameForCourse.clear();
        searchObj.titleNameForCourse.sendKeys('CourseB');
        searchObj.titleKeywordForCourse.sendKeys('math');
        // searchObj.addResource.click();
        // browser.sleep(1500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resourceSearch), 20000, " resourceSearch not available");
        // searchObj.resourceSearch.click();
        // searchObj.resourceSearch.sendKeys("pdf");
        // browser.sleep(2000);
        // searchObj.selectResourceType2.click();
        // browser.sleep(1500);
        // searchObj.clickAddbutton.click();
        // console.log("Resouce Type Added Succesfully");
        // searchObj.proceedButton.click();
        browser.sleep(1500);
        searchObj.save.click();
        browser.sleep(2000);
        searchObj.closeEditor1.click();

        console.log("Collaborator editted the course successfully");

    }
    catch (Exception) {
        console.log("Collaborator is not able to edit the course");
    }
}
const deleteWorSpaceContent = (contentName) => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchContent), 20000, "search book  not available");
        searchObj.searchContent.sendKeys(contentName);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.deleteButton), 20000, "  deleteButton is not available");
        content.deleteButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.yesButtonPopup), 20000, "yesButtonPopup is not available");
        content.yesButtonPopup.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.toastMsg), 20000, "toastmsg is not available");
        content.toastMsg.getText().then(function (input) {
            console.log(input);
            expect(input).toEqual("Content deleted successfully...");
        });
        browser.sleep(2000);
    }
    catch (err) {
        console.log("Failed")
    }
}

const searchContent = (whereToDelete) => {
    try {

        //pass |whereToDelete| as draft, allContents or publishedContent
        //pass |contentName| as bookName, CourseName ResourceName etc..

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "Profile Icon not available");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(2000);

        if (whereToDelete === "draft") {
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().draftButton), 20000, "draft Icon not available");
            sanityPage.SanityElement().draftButton.click();
            browser.sleep(2000);
        }
        else if (whereToDelete === "allContent") {
            browser.wait(protractor.ExpectedConditions.visibilityOf(content.allMyContent), 20000, "allMyContent page not loaded");
            content.allMyContent.click();
            browser.sleep(2000);

        }
        else if (whereToDelete === "publishedContent") {
            browser.wait(protractor.ExpectedConditions.visibilityOf(content.published), 20000, "published page not loaded");
            content.published.click();
        }
        else {
            console.log("Please pass content name and from where to delete in workspace");
        }
    }
    catch (err) {
        console.log("Failed");
    }
}



const reviewStatusCollaborator = () => {

    try {

        console.log("Collaborator is trying to review status course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        searchObj.workSpace.click();
        browser.sleep(500);
        searchObj.collaborationSection.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchContent), 20000, " searchContent not available");
        searchObj.searchContent.click();
        searchObj.searchContent.sendKeys();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstSearchContent), 20000, " firstSearchContent not available");

        if (searchObj.editCollaborator.isDisplayed()) {
            console.log("Edit icon is present in the draft section");
        } else {
            console.log("Collaborator cannot edit the content sent for review");
        }

    }
    catch (Exception) {
        console.log("Failed to edit course by collaborator");
    }
}
const collaboratorNotAbleToDeleteCourse = () => {

    try {

        console.log("Collaborator is trying to see delete icon");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        searchObj.workSpace.click();
        browser.sleep(500);
        searchObj.collaborationSection.click();
        browser.sleep(500);
        if (searchObj.deleteIcon1.isDisplayed()) {
            console.log("Delete icon not present");
        }

    }
    catch (Exception) {
        console.log("Collaborator successfully deleting the content");
    }
}
const SendForLimitedSharing = () => {
    try {
        console.log('User is Trying to Send For limied Sharing');
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.sendForReviewDropDown), 40000, "sendForReviewDropDown is not available");
        searchObj.sendForReviewDropDown.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickLimitedSharing), 40000, "clickLimitedSharing is not available");
        searchObj.clickLimitedSharing.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.sharedViaLink), 40000, "sharedViaLink is not available");
        searchObj.sharedViaLink.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickFirstCourseInShareVialink), 40000, "clickFirstCourseInShareVialink is not available");
        searchObj.clickFirstCourseInShareVialink.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();
        browser.sleep(1000);

        console.log('Succesfuly Sent for Limited Sharing');

        browser.sleep(3000);
    }
    catch (e) {
        console.log('Failed to Send For limied Sharing');

    }

}
const navigateToAllMyContent = () => {
    try {
        browser.sleep(1000);
        console.log('User is navigating to the all my content to create or check');
        console.log('User is navigating to all my content');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 40000, "workSpace is not available");
        searchObj.workSpace.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.allMyContent), 40000, "allMyContent is not available");
        searchObj.allMyContent.click();
        console.log('User successfully navigated to All My Content');
    }
    catch (e) {
        console.log('Failed on navigating to Workspace and create');

    }

}


const applyStatusFilterinAllMyContent = () => {
    try {
        browser.sleep(2000);
        console.log('Verifying Status Filter in all my content');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Click on Filter Icon');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.status), 40000, "status is not available");
        searchObj.status.click();
        console.log('Click on Status DropDown');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.draft), 40000, "draft is not available");
        searchObj.draft.click();
        console.log('Select Draft Filer');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchCourse.status), 40000, "status is not available");
        searchObj.status1.click();
        console.log('Select Status Filer');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.applyButton1), 40000, "applyButton1 is not available");
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Click on Filter Icon');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName), 40000, "contentName is not available");
        searchObj.contentName.getText().then(function (contentName) {
            console.log('contentName is' + contentName);


            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInActivity), 40000, "searchInActivity is not available");
            searchObj.searchInActivity.click();
            searchObj.searchInActivity.sendKeys(contentName);
            console.log('Enter Course Name in Search Field');
        });
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon2), 40000, "searchIcon2 is not available");
        searchObj.searchIcon2.click();
        console.log('Click on Search Icon');
        console.log('Succesfully Verified Drafts Status Filter in Search Field');
        browser.sleep(1000);
        searchObj.searchInActivity.click();
        searchObj.searchInActivity.clear();
        console.log('Clear Searched Course in Search Text Field');
        searchObj.allMyContent.click();
        console.log('Navigate to all My Content');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Click on Filter Icon');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.status), 40000, "status is not available");
        searchObj.status.click();
        console.log('Select StatusDropDown');
        browser.sleep(1000);
        searchObj.statusReview.click();
        browser.sleep(1000);
        searchObj.status1.click();
        browser.sleep(1000);
        console.log('Select Review in Dropdown');
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Click on Filter Icon');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName), 40000, "contentName is not available");
        searchObj.contentName.getText().then(function (contentName2) {
            console.log('contentName is' + contentName2);


            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInActivity), 40000, "searchInActivity is not available");
            searchObj.searchInActivity.click();
            searchObj.searchInActivity.sendKeys(contentName2);
            console.log('Enter Course Name in Search Field');
        });

        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon2), 40000, "searchIcon2 is not available");
        searchObj.searchIcon2.click();
        console.log('Click on Search Icon');
        console.log('Succesfully Verified Drafts Status Filter in Search Field');
        browser.sleep(1000);
        searchObj.searchInActivity.click();
        searchObj.searchInActivity.clear();
        console.log('Clear Searched Course in Search Text Field');

        searchObj.allMyContent.click();
        console.log('Navigate to all My Content');




        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Click on Filter Icon');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.status), 40000, "status is not available");
        searchObj.status.click();
        console.log('Select StatusDropDown');
        browser.sleep(1000);
        searchObj.statusLive.click();
        searchObj.status1.click();
        browser.sleep(1000);
        console.log('Select statusLive in Dropdown');
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Click on Filter Icon');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName), 40000, "contentName is not available");
        searchObj.contentName.getText().then(function (contentName3) {
            console.log('contentName is' + contentName3);


            browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInActivity), 40000, "searchInActivity is not available");
            searchObj.searchInActivity.click();
            searchObj.searchInActivity.sendKeys(contentName3);
            console.log('Enter Course Name in Search Field');
        });

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon2), 40000, "searchIcon2 is not available");
        searchObj.searchIcon2.click();
        console.log('Click on Search Icon');
        console.log('Succesfully Verified Live Status Filter in Search Field');
        browser.sleep(1000);
        searchObj.searchInActivity.click();
        searchObj.searchInActivity.clear();
        console.log('Clear Searched Course in Search Text Field');
        browser.sleep(1000);
        searchObj.allMyContent.click();
        console.log('Navigate to all My Content');
        browser.sleep(1000);

        console.log('Course is Succesfully Display after applying Status Filter like Draft,Review,Live in All My Content');
    }
    catch (e) {
        console.error('Failed to Verify Course displays after applying Status Filter like Draft,Review,Live in All My Content, ' + e);

    }

}


const applyFilterinAllMyContent = () => {
    try {
        browser.sleep(1000);
        console.log('Verifying  Filter in all my content');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();

        console.log('Click on Filter Icon');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectMediumfilter), 40000, "selectMediumfilter is not available");
        searchObj.selectMediumfilter.click();
        console.log('Click on Medium Filter');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectEnglish), 40000, "selectEnglish is not available");
        searchObj.selectEnglish.click();
        console.log('select English');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.applyButton1), 40000, "applyButton1 is not available");
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))) {
            console.log('Elements are visible on the screen ');

        }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resetButton), 40000, "resetButton is not available");
        searchObj.resetButton.click();
        console.log('Click Reset button');
        console.log('Verified Medium Dropdown Filter And Content is Displayed')
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.gradeLevel), 40000, "gradeLevel is not available");
        searchObj.gradeLevel.click();
        console.log('click on Grade Level Filter');

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.gradeLevel1), 40000, "gradeLevel is not available");
        searchObj.gradeLevel1.click();
        console.log('Select Grade Filter');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.applyButton1), 40000, "applyButton1 is not available");
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))) {
            console.log('Elements are visible on the screen ');

        }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resetButton), 40000, "resetButton is not available");
        searchObj.resetButton.click();
        console.log('Click Reset button');
        console.log('Verified Grade Dropdown Filter And Content is Displayed')
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.subject), 40000, "subject is not available");
        searchObj.subject.click();
        console.log('click on Subject Filter');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.accountancy), 40000, "accountancy is not available");
        searchObj.accountancy.click();
        console.log('Select Subject Filter');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.applyButton1), 40000, "applyButton1 is not available");
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))) {
            console.log('Elements are visible on the screen ');

        }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resetButton), 40000, "resetButton is not available");
        searchObj.resetButton.click();
        console.log('Click Reset button');
        console.log('Verified Subject Dropdown Filter And Content is Displayed')

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickBoardAllMyContent), 40000, "clickBoardAllMyContent is not available");
        searchObj.clickBoardAllMyContent.click();
        console.log('click on Board Filter');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectBoardAllMyContent), 40000, "selectBoardAllMyContent is not available");
        searchObj.selectBoardAllMyContent.click();
        console.log('Select Board Filter');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.applyButton1), 40000, "applyButton1 is not available");
        searchObj.applyButton1.click();
        console.log('Click on Apply button');
        browser.sleep(1000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentName))) {
            console.log('Elements are visible on the screen ');

        }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resetButton), 40000, "resetButton is not available");
        searchObj.resetButton.click();
        console.log('Click Reset button');
        console.log('Verified Subject Dropdown Filter And Content is Displayed')
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.showFilter1), 40000, "showFilter1 is not available");
        searchObj.showFilter1.click();
        console.log('Verified Board Dropdown Filter And Content is Displayed');


    }
    catch (e) {
        console.log('Failed to Verify Course displays after applying filter Medium , Board, Grade, Subject Filter in All My Content');

    }

}



const verifyPagenationInAllMyContent = () => {
    try {
        browser.sleep(1000);
        console.log('Verify Pagenation in All My Content');
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.page1);
        console.log('Scroll down to the Page');
        browser.sleep(2000);
        searchObj.page2.click();
        browser.sleep(2000);
        console.log('Click on Page2');

        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))) {
            console.log('Verified Page 2 ');

        }
        browser.sleep(2000);
        searchObj.pagePrevious.click();
        browser.sleep(2000);
        console.log('Click on pagePrevious');

        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))) {
            console.log('Verified Page Previous ');

        }

        browser.sleep(2000);
        searchObj.pageNext.click();
        browser.sleep(2000);
        console.log('Click on Next Page');

        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))) {
            console.log('Verified Page Next ');

        }
        browser.sleep(1000);
        // searchObj.pageLast.click();
        // browser.sleep(2000);
        console.log('Click on Last Page');

        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))) {
            console.log('Verified Page Last');

        }
        browser.sleep(3000);
        searchObj.pageFirst.click();

        console.log('Click on First Page');

        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardListInAllMyContent))) {
            console.log('Verified Page First');

        }

        console.log('Succesfully Verified all the Page Pagenation');



    }
    catch (e) {
        console.log('Failed to Validate Pagination.');

    }

}
const createInviteOnlyBatch = (courseName) => {

    try {
        browser.sleep(2000);


        console.log("To verify navigate to Course section and search course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse is not available");
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput  is not available");
        searchObj.searchInput.sendKeys(courseName);
        searchObj.searchInput.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon), 20000, " searchIcon is not available");
        searchObj.searchIcon.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.getCourseName), 20000, " getCourseName is not available");
        searchObj.getCourseName.getText().then(function (coursename) {
            console.log('Coursename Taken is:' + coursename);
            searchObj.getCourseName.click();
        });
        browser.sleep(2000);
        searchObj.addIcon.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, "nameOfBatch  is not available");
        searchObj.nameOfBatch.sendKeys(courseName);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.aboutBatch), 20000, "aboutBatch  is not available");
        searchObj.aboutBatch.sendKeys(courseName);
        browser.sleep(2000);
        searchObj.startDate.click();
        browser.sleep(2000);
        searchObj.startDateCalendar.click();
        browser.sleep(2000);
        searchObj.endDate.click();
        browser.sleep(2000);
        searchObj.endDateCalendar.click();
        browser.sleep(2000);
        searchObj.mentorsInBatch.click();
        browser.sleep(2000);
        searchObj.selectMentorsInBatch.click();
        browser.sleep(2000);
        searchObj.mentorDropdown.click();
        browser.sleep(2000);
        searchObj.membersInBatch.click();
        browser.sleep(2000);
        searchObj.selectMembersInBatch.click();
        browser.sleep(2000);
        searchObj.nameOfBatch.click();
        browser.sleep(2000);
        searchObj.buttonCreate.click();
        console.log('Invite only batch for a course is created sucessfully');
    }
    catch (Exception) {
        console.log('Failed to create invite only batch');
    }
}

const navigateToWorkspaceFeatures = () => {
    try {
        browser.sleep(4000);
        console.log('User is trying to navigate to course batches in Workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 40000, "workSpace is not available");
        searchObj.workSpace.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseBatches), 40000, "courseBatches is not available");
        searchObj.courseBatches.click();

    }
    catch (e) {
        console.log('Could not access the features of Workspace');

    }

}

const validateCourseInCreatedByMeSection = () => {
    try {
        browser.sleep(2000);
        console.log('Validate Course in CreatedByMe Section');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createdByMe), 40000, "createdByMe is not available");
        searchObj.createdByMe.click();
        console.log('Clicked on CreateByme Section');
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseOnGoingBatch), 40000, "courseOnGoingBatch is not available");
        searchObj.courseOnGoingBatch.getText().then(function (coursename2) {
            console.log('course OnGoingBatch is :' + coursename2);

        });

    }
    catch (e) {
        console.log('Failed to Validate Assigned batches is not under Created by me section.');

    }

}


const courseSearchFilter = () => {

    try {

        console.log("verifying the course search by applying filters");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys('Course');
        searchObj.searchIcon.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.filterIcon), 20000, "filterIcon not available"); 
        // searchObj.filterIcon.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickFilterMedium), 20000, "clickFilterMedium not available");
        searchObj.clickFilterMedium.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFilterMedium), 20000, " selectFilterMedium not available");
        searchObj.selectFilterMedium.click();

        // searchObj.clickFilterMedium.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickFilterClass), 20000, "clickFilterClass not available");
        searchObj.clickFilterClass.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFilterClass), 20000, " selectFilterClass not available");
        searchObj.selectFilterClass.click();
        //  searchObj.clickFilterClass.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickFilterSubject), 20000, "clickFilterSubject not available");
        searchObj.clickFilterSubject.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFilterSubject), 20000, "selectFilterSubject not available");
        searchObj.selectFilterSubject.click();
        // searchObj.clickFilterSubject.click();

        browser.sleep(2000);
        // searchObj.clickSubmit.click();
        console.log("User is able to click on submit button");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(1000);
        searchObj.ResetSubmit.click();
        browser.sleep(1000);
        console.log("User is able to click on reset button");

        try {
            browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseToBeClicked), 20000, " courseToBeClicked not available");


            if (searchObj.courseToBeClicked.isDisplayed()) {
                var name = searchObj.courseToBeClicked.getText();
                console.log("Filters are applied " + name + " is the resultant course");

            }
        }
        catch (Exception) {
            console.log("Filters are applied but could not get the resultant course");
        }

    }

    catch (Exception) {
        console.log("Failed on searching courses by applying filters ");
    }
}
const vaidatePageLangaugeTranslation = () => {

    try {
        console.log("User is trying to Verify Langauge Translation ");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        searchObj.headerCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys('Course');
        browser.sleep(500);
        searchObj.searchIcon.click();
        browser.sleep(1000);
        console.log("User Searched Course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickLangDropdown), 20000, "clickLangDropdown not available");
        searchObj.clickLangDropdown.click();
        browser.sleep(1000);
        searchObj.sltHindiLang.click();
        console.log("Hindi Language Selected in the Dropdown");
        browser.sleep(1000);
        if (searchObj.assertLangContent.isDisplayed()) {
            console.log("Hindi Content Validated Succesfully");
        }
        else {
            console.log("Hindi Content not available for Validation");
        }
        browser.sleep(1000);


        searchObj.clickLangDropdownEnglish.click();
        browser.sleep(1000);
        searchObj.sltUrduLang.click();
        console.log("Urdu Language Selected in the Dropdown");
        browser.sleep(1000);
        if (searchObj.assertLangContent.isDisplayed()) {
            console.log("Urdu Content Validated Succesfully");
        }
        else {
            console.log("Urdu Content not available for Validation");
        }
        browser.sleep(1000);

        searchObj.clickLangDropdownEnglish.click();
        browser.sleep(1000);
        searchObj.sltEnglishLang.click();
        console.log("English Language Selected in the Dropdown");
        browser.sleep(1000);
        if (searchObj.assertLangContent.isDisplayed()) {
            console.log("English Content Validated Succesfully");
        }
        else {
            console.log("English Content not available for Validation");
        }
        browser.sleep(1000);

    }
    catch (Exception) {
        console.log("Failed To verify Langauge Translation ");
    }
}
const LangaugeTranslation = () => {

    try {
        console.log("User is trying to translate language");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        searchObj.headerCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys('Course');
        browser.sleep(500);
        searchObj.searchIcon.click();
        browser.sleep(1000);
        console.log("User Searched Course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickLangDropdown), 20000, "clickLangDropdown not available");
        searchObj.clickLangDropdown.click();
        browser.sleep(1000);
        searchObj.sltHindiLang.click();
        console.log("Hindi Language Selected in the Dropdown");
        browser.sleep(1000);
        if (searchObj.assertLangContent.isDisplayed()) {
            console.log("Hindi Content Validated Succesfully");
        }
        else {
            console.log("Hindi Content not available for Validation");
        }
        browser.sleep(1000);


        searchObj.clickLangDropdownEnglish.click();
        browser.sleep(1000);
        searchObj.sltUrduLang.click();
        console.log("Urdu Language Selected in the Dropdown");
        browser.sleep(1000);
        if (searchObj.assertLangContent.isDisplayed()) {
            console.log("Urdu Content Validated Succesfully");
        }
        else {
            console.log("Urdu Content not available for Validation");
        }
        browser.sleep(1000);

        searchObj.clickLangDropdownEnglish.click();
        browser.sleep(1000);
        searchObj.sltEnglishLang.click();
        console.log("English Language Selected in the Dropdown");
        browser.sleep(1000);
        if (searchObj.assertLangContent.isDisplayed()) {
            console.log("English Content Validated Succesfully");
        }
        else {
            console.log("English Content not available for Validation");
        }
        browser.sleep(1000);
    }
    catch (Exception) {
        console.log("Failed To verify Langauge Translation in Explore-CoursePage");
    }
}
const SearchCouseWithRegionalLang = () => {

    try {
        console.log("User is trying to Verify Regional Langauge Course Search ");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys("हिंदी");
        browser.sleep(500);
        searchObj.searchIcon.click();
        browser.sleep(1000);
        console.log("User Searched Hindi Course");
        // if(searchObj.assertLangContent.isDisplayed())
        // {
        // console.log("Hindi Content Validated Succesfully");
        // }
        // else
        // {
        //     console.log( "Hindi Content not available for Validation");
        // }

        searchObj.filterSearch.clear();
        searchObj.filterSearch.sendKeys("ಕನ್ನಡ");
        browser.sleep(1000);
        searchObj.clickSearch.click();
        browser.sleep(1000);
        console.log("User Searched ಕನ್ನಡ Course");
        // if(searchObj.assertLangContent.isDisplayed())
        // {
        // console.log("Tamil Content Validated Succesfully");
        // }
        // else
        // {
        //     console.log( "Tamil Content not available for Validation");
        // }

    }
    catch (Exception) {
        console.log("Failed To verify Regional Langauge Course Search ");
    }
}
const clickOnViewAll = () => {
    var course1;
    var course2;
    try {
        console.log("User is trying to click on view all and check the pagination");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        searchObj.headerCourse.click();

        course1 = searchObj.coursename1.getText();
        searchObj.viewAll.click();
        browser.sleep(500);
        searchObj.paginationTwo.click();
        browser.sleep(500);
        course2 = searchObj.coursename1.getText();

        //  expect(searchObj.courseName.getText().then(function(x){
        //     x.toEqual(searchObj.courseName.getText())}));

        //  console.log("Both course card are equals");
        console.log("Pagination is working fine in all pages after clicking on view all button.");
        return {
            course1,
            course2,
        }
    }
    catch (Exception) {
        console.log("Pagination is not working");
    }
}
const getContentFromQRCode = () => {

    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var qr = cred[18]['Title'];

        console.log("User is entering dialcode to get the content");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.qrCode), 20000, "qrCode not available");
        searchObj.qrCode.click();
        browser.sleep(500);
        searchObj.enterQRCode.sendKeys(qr);
        browser.sleep(1000);
        searchObj.submitButton.click();
        browser.sleep(1000);
        if (searchObj.courseCard.isPresent()) {
            searchObj.courseCard.click();
            console.log("User clicked on the course card");
            console.log("User is getting the content after entering dial code");
        }
        console.log("User is not getting the content after entering dial code");

        //   if(searchObj.resumeCourse.isDisplayed()) 
        //   {
        //     browser.sleep(1000); 
        //     searchObj.closeResumeWindow.click();
        //     console.log("resume window is present and handled");
        //    }


    }
    catch (Exception) {
        console.log("Failed to get the content after entering dialcode");
    }
}
const navigateToCourseAndSearchForOpenBatch = (coursename) => {

    try {
        console.log("To verify navigate to Course section, search course ");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys(coursename);
        browser.sleep(2000);
        searchObj.searchIcon.click();
        console.log("Clicked on the searchIcon");
        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available");
        searchObj.courseCard.click();
        browser.sleep(7000);
        console.log("Clicked on the course card");
        console.log("verified navigation to Course section, search course");
    }
    catch (Err) {
        console.log("Failed on navigating to Course section, search course " + Err);
    }
}
const batchNameAndEndDateIsMandatoryFields = () => {

    try {
        console.log("Batch name and End date are the mandatory fields");
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.batchDropdown);
        browser.executeScript('window.scrollTo(0,235);').then(function () {
            console.log('++++++SCROLLED DOWN+++++');
        });
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropdown), 20000, "createbatch not available");
        searchObj.batchDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "headerCourse not available");
        searchObj.addIcon.click();
        browser.sleep(500);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, " nameOfBatch is not available");
        searchObj.nameOfBatch.click();
        searchObj.nameOfBatch.sendKeys("batch1");
        console.log("Name Of The Batch is mandatory field");
        searchObj.startDate.isDisplayed();
        console.log("Start Date is mandatory field");
        browser.sleep(1000);
        searchObj.closeBatchPopup.click();

        console.log("Batch name and Start date are mandatory fields");
        console.log("Course Mentor is able to create open batch succesfully");
        browser.sleep(1000)
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    }
    catch (Exception) {
        console.log("failed in verifying Batch name and Start date are mandatory fields");
    }
}
const createOpenBatchWithEnrolmentDate = () => {
    try {
        console.log("User is trying to create open batch for a course");

        browser.executeScript('window.scrollTo(0,235);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "addIcon not available");
        searchObj.addIcon.click();
        console.log("Click on Add Icon");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, " nameOfBatch is not available");
        searchObj.nameOfBatch.sendKeys('BatchWithEnrolmentDate');
        searchObj.aboutBatch.click();
        searchObj.aboutBatch.sendKeys(' Open Batch');
        console.log("Enter Batch Name");
        browser.sleep(500);
        // searchObj.certificateNO.click();
        // console.log("Click on certificate no");
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startdate), 20000, " startdate is not available");
        // searchObj.startdate.click();
        // console.log("Click on Start Date");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
        // searchObj.startDateCalendar.click();
        // browser.sleep(500);
        // console.log("Select Start Date");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrolmentDate), 20000, "clickEnrolmentDate is not available");
        searchObj.clickEnrolmentDate.click();
        console.log("Click Enrollment Date");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectEnrolmentDate), 20000, "selectEnrolmentDate is not available");
        searchObj.selectEnrolmentDate.click();
        console.log("Select Enrolment Date");
        browser.sleep(500);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.updateBatch), 20000, "updateBatch not available");
        searchObj.updateBatch.click();
        console.log("Click on Create button");

        //browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchCreateTostrMsg), 20000, "batchCreateTostrMsg not available");

        console.log("Batch created Succesfully with Enrollment Date");

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrollmentEditButton), 20000, "clickEnrollmentEditButton is not available");
        searchObj.clickEnrollmentEditButton.click();
        console.log("Click on Enrolment Edit Icon");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrolmentDate), 20000, "clickEnrolmentDate is not available");
        searchObj.clickEnrolmentDate.click();
        console.log("Click on Enrolment Date");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.updateEnrollmentDate), 20000, "updateEnrollmentDate is not available");
        searchObj.updateEnrollmentDate.click();
        console.log("Update Enrolment Date");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDate), 20000, "endDate is not available");
        searchObj.endDate.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDateCalendar), 20000, "endDateCalendar is not available");
        searchObj.endDateCalendar.click();
        console.log("Select EndDate");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.updateBatch), 20000, "updateBatch not available");
        searchObj.updateBatch.click();
        console.log("Click on Update Button");
        browser.sleep(2000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchUpdateTostrMsg), 20000, "batchCreateTostrMsg not available");
        console.log("Batch updated successfully...");
        console.log("Batch end date succesfully updated for a batch which was created without end date");
        console.log("Batch created with all the available fields values");
    }
    catch (Exception) {
        console.log("Failed to create open batch");
    }
}
const createOpenBatch = () => {

    try {
        console.log("User is trying to create open batch for a course");
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.batchDropdown);
        // browser.executeScript('window.scrollTo(0,250);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropdown), 20000, "createbatch not available");
        searchObj.batchDropdown.click();
        browser.sleep(200);
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "createbatch not available");
        browser.sleep(1000);
        searchObj.addIcon.click();
        console.log("Click on Add Icon");
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, "nameOfBatch not available");
        searchObj.nameOfBatch.sendKeys("Batch");
        searchObj.aboutBatch.click();
        searchObj.aboutBatch.sendKeys(" Open Batch");
        console.log("Enter Batch Name");
        browser.sleep(5000);
        //  searchObj.certificateNO.click();
        //  console.log("Click on certificate no");
        // browser.sleep(500);

       
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startdate), 20000, " startdate is not available");
        searchObj.startdate.click();
        console.log("Click on Start Date");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
        searchObj.startDateCalendar.click();
        searchObj.startDateCalendar.sendKeys(todaysDate);
        console.log("Select Start Date");
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDate), 20000, "sendDate is not available");
        // searchObj.endDate.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDateCalendar), 20000, "endDateCalendar is not available");
        // searchObj.endDateCalendar.click();
        // console.log("Select EndDate");
        // browser.sleep(1000);

        //  browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkNoCertficate), 20000, "clkCheckBoxBacth not available");
        searchObj.clkNoCertficate.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkCheckBoxBacth), 20000, "clkCheckBoxBacth not available");
        searchObj.clkCheckBoxBacth.click();
        console.log("Batch Succesfully created  without Enrollment date");

        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.buttonCreate);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.buttonCreate), 20000, "clkCheckBoxBacth not available");
        searchObj.buttonCreate.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkExpandBatches), 20000, "clkExpandBatches not available");
        // searchObj.clkExpandBatches.click();
        browser.sleep(3000);
        expect(searchObj.assertCreatedBatch.isDisplayed()).toBeTruthy();
        browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewCourseDashBoard), 20000, "viewCourseDashBoard not available");
        // searchObj.viewCourseDashBoard.click();
        // browser.sleep(1000);
        //    browser.getCurrentUrl().contains(APP_URL+"/learn/course/do_");
        //  searchObj.batchCourseName.getText();

    }
    catch (Exception) {
        console.log("Failed to create open batch");
    }
}
const enrollForOpenBatch = () => {

    try {
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        expect(searchObj.userNameBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.stateBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.userIdBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.districtBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.blockBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.schoolIdBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.nameBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.mobileNumberBatch.isDisplayed()).toBeTruthy();
        //expect(searchObj.emailIdbatch.isDisplayed()).toBeTruthy();
        browser.sleep(4000);
        searchObj.checkBoxConsent.click();
        browser.sleep(4000);
        // browser.executeScript('window.scrollTo(0,100);').then(function () {
        //     console.log('++++++SCROLLED UP+++++');
        // });
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);


        searchObj.batchCourseName.getText().then(function (input) {
            console.log("User is successfully enrolled to Course : " + input);
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkStartLearning), 20000, "clkStartLearning not available");
        searchObj.clkStartLearning.click();
        browser.sleep(6000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.clkFullScreen);
        browser.executeScript('window.scrollTo(0,350);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkFullScreen), 20000, "fullscreen not available");
        // searchObj.clkFullScreen.click();
        browser.sleep(7000);
        console.log("The progress bar is getting updated once the user consume the course");
        browser.navigate().back();
        browser.sleep(4000);


    }
    catch (Exception) {
        console.log("Failed to enroll for an open batch");
    }
}
const checkTheCourseInMyCourseSection = () => {
    var batchname;
    try {
        console.log("Invited member is Checking availabilty of invited courses in My courses section.");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courses), 20000, "courses not available");
        searchObj.courses.click();
        browser.sleep(1000);

        searchObj.myLatestCousreCount.getText().then(function (count) {
            console.log("Click on Training Section and count is : " + count);
        });

        browser.sleep(1000);

        try {
            //searchObj.courseName.getText();
            searchObj.myLatestCoursNextButton.click();
            console.log("Click on nextButton");
        } catch (Exception) {
            console.log("Handled");
        }
        return batchname;
    }
    catch (Exception) {
        console.log("Failed to get the invited course in my course section.");
    }
}
const searchContentWithFilter = () => {

    try {
        console.log("User is in Explore-Course Page");
        console.log("Clicked on Topic Dropdown");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickTopticDropdown), 20000, "clickTopticDropdown not loaded");
        searchObj.clickTopticDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFirstContent), 20000, "selectFirstContent not loaded");
        searchObj.selectFirstContent.click();
        console.log("User is in Explore-Course Page");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFirstSubject), 20000, "selectFirstSubject not loaded");
        searchObj.selectFirstSubject.click();
        console.log("Selected First Topics");
        browser.sleep(1000);
        searchObj.clickDonebutton.click();
        console.log("Clicked on Done Button");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickSubmitButton), 20000, "clickSubmitButton not loaded");
        searchObj.clickSubmitButton.click();
        console.log("Clicked on Submit Button");
        browser.sleep(1000);
        if (searchObj.validateCourseResult.isPresent()) {
            console.log("Content is displayed for the filter TOPIC");
            searchObj.clikResettButton.click();
            console.log("Clicked on Reset Button");

        }

    }
    catch (Exception) {
        console.log("Failed on Searching Content using Filter Topics");
    }
}
const carryForwardSearchFilter = () => {

    try {
        console.log("User is in Explore-Course Page");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
        searchObj.headerCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickPurposeDropDown), 20000, "clickPurposeDropDown not loaded");
        searchObj.clickPurposeDropDown.click();
        console.log("Clicked on PurposeDropdown");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectPurposeDropdown), 20000, "selectPurposeDropdown not loaded");
        searchObj.selectPurposeDropdown.click();
        console.log("Selected Filters in PurposeDropdown");
        searchObj.clickSubmitButton.click();
        console.log("Clicked on Submit Button");
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.clickLatestCourseViewAllLink);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickLatestCourseViewAllLink), 20000, "clickLatestCourseViewAllLink not loaded");
        searchObj.clickLatestCourseViewAllLink.click();
        console.log("Clicked on ViewAll Link");

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickFilters), 20000, "clickFilters not loaded");
        // searchObj.clickFilters.click();
        // console.log("Clicked on Filters");

        if (searchObj.checkAppliedFilters.isDisplayed()) {
            console.log("Filters are carry forwarded succesfully");
        }
        else {
            console.log("Filters are not carry forwarded succesfully");
        }

    }
    catch (Exception) {
        console.log("Failed on Carry Forwarding Filters");
    }
}
const courseSearch = () => {

    try {
        console.log("verifying the course search");

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
        searchObj.headerCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys('Course');
        browser.sleep(500);
        searchObj.searchIcon.click();
        console.log("Clicked on the searchIcon");
        browser.sleep(500);
        if (searchObj.showResults.isDisplayed() && searchObj.courseCard.isDisplayed()) {
            console.log("User  search Course sucessfully from Course tab ");
            searchObj.courseCard.click();
            console.log("Clicked on Result CourseCard");
            browser.sleep(1000);
            // if(searchObj.verifyShareIconInCourseCard.isDisplayed())
            // {
            //     console.log("Share Icon is displayed Succesfully");
            // }
        }
    }
    catch (Exception) {
        console.log("Failed on searching the course");
    }
}
const searchWithQRcode = () => {

    try {
        console.log("user is trying to search content using QR code");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
        searchObj.headerCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterQRcodeButton), 20000, "enterQRcodeButton not loaded");
        searchObj.enterQRcodeButton.click();
        browser.sleep(1000);
        searchObj.enterQRcodeInSearchField.click();
        searchObj.enterQRcodeInSearchField.sendKeys('A3K3A2');
        browser.sleep(500);
        searchObj.submitQRcode.click();
        browser.sleep(1000);
        if (searchObj.linkedQRcodeContents.isDisplayed()) {
            // for(var i=0;i< searchObj.linkedQRcodeContents.size();i++)

            console.log("Linked contents are:Displayed ");


        }
        else {
            console.log("No Linked contents are available");
        }

        browser.sleep(1000);
        searchObj.QrcontentClk.click();
        browser.sleep(1000);
        console.log("Content Opened Succsfully");

    }
    catch (Exception) {
        console.log("Failed on trying to search content using QR code");
    }
}
const validateSignInPopupOnClickOnEnroll = () => {

    try {
        console.log("User is in Explore-Course Page");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
        searchObj.headerCourse.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "clickSecondCourseInOpenForEnrollment not loaded");
        searchObj.courseCard.click();
        browser.sleep(1000);
        console.log("Click on Searched Course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enrollButton), 20000, "enrollButton not loaded");
        searchObj.enrollButton.click();
        browser.sleep(1000);
        if (searchObj.assertSignInPopup.isDisplayed()) {
            console.log("SignInPopUp has appeared on Click on Enroll button in Explore Course Page");
        }
        searchObj.assertSignInPopup.click();
        browser.sleep(2000);
        console.log("User has re-directed to Login Screen");
        browser.sleep(2000);

        // utility.userLogin('Public User1');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.userName), 20000, "userName is not available");
        // searchObj.userName.sendKeys("usersun@gmail.com");
        // searchObj.password.sendKeys('password');
        // searchObj.login.click();
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '1', 'Public User1');
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.userName), 20000, "userName is not available");
        content.userName.sendKeys(cred[0]['Username']);
        content.password.sendKeys(cred[0]['Password']);
        content.login.click();

        if (searchObj.validateTOCForOpenBatchCourse.isDisplayed()) {
            console.log("TOC Page Displayed Succesfully for OpenBatch Course");
        }

        console.log("User is trying to enroll for an open batch");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enrollButton), 20000, "enrollButton not available");
        searchObj.enrollButton.click();
        console.log("Click on Enroll For Course");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.joinTraining), 20000, "joinTraining not available");
        searchObj.joinTraining.click();
        console.log("Click on Join Training");
        console.log("User is successfully clicking on join training button in popup");
        console.log("User is successfully enrolling to the course");
        console.log("Content is started playing");
        browser.sleep(2000);
        //   browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resumeCourse), 20000, "resumeCourse not available");
        //   searchObj.resumeCourse.isDisplayed();
        //   browser.sleep(1000);
        //   searchObj.batchCourseName.getText();
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.closeEditor2);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closeEditor2), 20000, "closeEditor1 not available");
        searchObj.closeEditor2.click();
        browser.sleep(2000);

        console.log("User is successfully enrolled to Course");
        console.log("The progress bar is getting updated once the user consume the course");

        console.log("User is trying to unenroll for an open batch");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.unEnrollButton), 20000, "unEnrollButton not available");
        searchObj.unEnrollButton.click();
        console.log("Click on UnEnrollButton For Course");
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.leaveTraining), 20000, "leaveTraining not available");
        searchObj.leaveTraining.click();
        console.log("Click on leave Training");
        browser.sleep(1000);
        console.log("User is successfully clicking on leaving training button in popup");
        console.log("User is successfully unenrolling to the course");



    }
    catch (Exception) {
        console.log("Failed on Validating SignInPopup on click on Enroll button in Explore-Course Page");
    }
}
const navigateToCourse = () => {

    try {
        console.log("To verify navigate to Course");

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
        searchObj.headerCourse.click();
        browser.sleep(1000);
        console.log(" navigated to Course");
    }
    catch (Exception) {
        console.log("Failed on navigating to Course section, search course ");
    }
}
const navigateToTOCInExploreCoursePage = () => {

    try {
        console.log("User is trying to navigate To TOC In ExploreCoursePage");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not loaded");
        searchObj.headerCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "clickOnFirstFeauredCourses not loaded");
        searchObj.searchInput.sendKeys("course");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon), 20000, "clickOnFirstFeauredCourses not loaded");
        searchObj.searchIcon.click();
        browser.sleep(2000);
        //    searchObj.openForEnrolmentSection.isDisplayed();
        //    console.log("User successfully verified open for enrolment section In ExploreCoursePage");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "clickOnFirstFeauredCourses not loaded");
        searchObj.courseCard.isDisplayed();

        console.log("User successfully verified featured courses section In ExploreCoursePage");
        searchObj.courseCard.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        if (searchObj.clickOnFirstTextBookTOC.isDisplayed()) {
            // searchObj.clickOnFirstTextBookTOC.click();
            // for(var i=0;i< searchObj.clickOnFirstCourseTOCUnits.size()-1;i++)
            {
                console.log("Available Content :Displayed ");
            }
            browser.sleep(1000);
            if (searchObj.clickOnFirstCourseTOCUnits.isDisplayed()) {
                console.log("Available Content has sub chapter ");
            }


        }
        else {
            console.log("Content is not available for consumption after clicking on Unit");

        }

        console.log("User has successfully  navigated To TOC In ExploreCoursePage");
    }

    catch (Exception) {
        console.log("Failed on navigate To TOC In  ExploreCoursePage");
    }
}

const collaborator1CanEditCourse = () => {

    try {


        console.log("Collaborator is trying to edit the course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        searchObj.workSpace.click();
        searchObj.collaborationSection.click();
        searchObj.searchForReview.click();
        searchObj.searchForReview.sendKeys(courseName);
        //  addMCAVObj.searchIconUpForReview .click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInCollaboration), 20000, "courseNameInCollaboration is not available");
        // courseNameInCollaboration =resov.courseNameInCollaboration.getText();
        // console.log(courseNameInCollaboration);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editIcon1), 20000, "editIcon1 is not available");


        console.log("Collaborator is trying to edit the course");
        browser.sleep(1500);
        searchObj.editIcon1.click();
        browser.sleep(1500);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "newchild not available");
        searchObj.newChild.click();
        browser.sleep(1000);
        searchObj.titleNameForCourse.click();
        searchObj.titleNameForCourse.clear();
        searchObj.titleNameForCourse.sendKeys('CourseB');
        searchObj.titleKeywordForCourse.sendKeys('math');
        searchObj.addResource.click();
        browser.sleep(1500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resourceSearch), 20000, " resourceSearch not available");
        searchObj.resourceSearch.click();
        searchObj.resourceSearch.sendKeys("pdf");
        browser.sleep(2000);
        searchObj.selectResourceType2.click();
        browser.sleep(1500);
        searchObj.clickAddbutton.click();
        console.log("Resouce Type Added Succesfully");
        searchObj.proceedButton.click();
        browser.sleep(1500);
        searchObj.save.click();
        browser.sleep(1000);
        searchObj.closeEditor1.click();

        console.log("Collaborator editted the course successfully");

    }
    catch (Exception) {
        console.log("Collaborator is not able to edit the course");
    }
}

const collaborator2CanEditCourse = () => {

    try {


        console.log("Collaborator is trying to edit the course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        searchObj.workSpace.click();
        searchObj.collaborationSection.click();
        searchObj.searchForReview.click();
        searchObj.searchForReview.sendKeys(courseName);
        //  addMCAVObj.searchIconUpForReview .click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInCollaboration), 20000, "courseNameInCollaboration is not available");
        // courseNameInCollaboration =resov.courseNameInCollaboration.getText();
        // console.log(courseNameInCollaboration);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editIcon1), 20000, "editIcon1 is not available");


        console.log("Collaborator is trying to edit the course");
        browser.sleep(1500);
        searchObj.editIcon1.click();
        browser.sleep(1500);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.newChild), 20000, "newchild not available");
        searchObj.newChild.click();
        browser.sleep(1000);
        searchObj.titleNameForCourse.click();
        searchObj.titleNameForCourse.clear();
        searchObj.titleNameForCourse.sendKeys('Course123');
        searchObj.titleKeywordForCourse.sendKeys('math');
        searchObj.addResource.click();
        browser.sleep(1500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.resourceSearch), 20000, " resourceSearch not available");
        searchObj.resourceSearch.click();
        searchObj.resourceSearch.sendKeys("resource");
        browser.sleep(2000);
        searchObj.selectResourceType2.click();
        browser.sleep(1500);
        searchObj.clickAddbutton.click();
        console.log("Resouce Type Added Succesfully");
        searchObj.proceedButton.click();
        browser.sleep(1500);
        searchObj.save.click();
        browser.sleep(1000);
        searchObj.closeEditor1.click();

        console.log("Collaborator editted the course successfully");

    }
    catch (Exception) {
        console.log("Collaborator is not able to edit the course");
    }
}
const createUpcomingOpenBatchForCourse = () => {

    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');

        console.log('Create Upcoming Batches');
        searchObj.addIcon.click();
        console.log('Click on Add Icon');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, "nameOfBatch  is not available");
        searchObj.nameOfBatch.sendKeys('UpcomingBatches');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.aboutBatch), 20000, "aboutBatch  is not available");
        searchObj.aboutBatch.sendKeys('UpcomingBatches');
        console.log('Enter Batch Name');
        // searchObj.certificateNO.click();
        // console.log('Click on Open Batch');
        searchObj.startDate.click();
        searchObj.endDateCalendar.click();
        console.log('Select Start Date');
        searchObj.endDate.click();
        searchObj.endDateCalendar.click();
        console.log('Select EndDate');
        searchObj.createBatchButton.click();
        searchObj.ongoingBatch.click();
        searchObj.upcomingBatch.click();
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.calenderIcon))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.calenderIcon))) {
            console.log('Upcoming open batch is created');
        }
        console.log('Course mentor successfully created open upcoming batch');
    }
    catch (Exception) {
        console.log('Failed to create open upcoming batch');
    }
}


const validateCourseInAssigToMeSection = (contentType) => {
    try {
        console.log('Validate Course in Assign me section');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assignedToMe), 40000, "assignedToMe is not available");
        searchObj.assignedToMe.click();
        console.log('Clicked on Assigned To Me Section');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseOnGoingBatch1), 40000, "courseOnGoingBatch1 is not available");
        searchObj.courseOnGoingBatch1.getText().then(function (courseOnGoingBatch) {
            console.log('course On Going Batch is :' + courseOnGoingBatch);
            //expect(courseOnGoingBatch).toEqual(contentType);

        });
        console.log('Logged in user created batches  Not under Assigned to me section');
    }
    catch (e) {
        console.log('Failed to Validate Logged in user created batches is not  under Assigned to me section.');

    }

}


const verifyCourseInOnGoingBatchSection = () => {
    try {
        console.log('User is verifying Course in Created By Section');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickCreateByMeSection), 40000, "clickCreateByMeSection is not available");
        searchObj.clickCreateByMeSection.click();
        console.log('clicked on CreatedByMe Section');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseNameInOnGoingBatches), 40000, "courseNameInOnGoingBatches is not available");
        searchObj.courseNameInOnGoingBatches.getText().then(function (courseOnGoingBatch) {
            console.log('course Name In OnGoing Batches is :' + courseOnGoingBatch);

        });
        console.log('Course displayed Succesfully under created by me section Created By Creator');
    }
    catch (e) {
        console.log('Failed to verifying Course in Created By Section.');

    }

}
const updateBatches = () => {
    try {
        console.log('User is Trying to Update OnGoing and UpComing Course');
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.lockicon))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.lockicon))) {
            console.log('Open batch have a open lock icon on the content card');
        }
        searchObj.batchContentCard.click();
        searchObj.nameOfBatch.clear();
        searchObj.nameOfBatch.sendKeys('UpdatedLatestCourse');
        console.log('Update Batch Name');
        browser.sleep(1000);
        searchObj.batchUpdate.click();
        browser.sleep(3000);
        searchObj.updatedBatchName.getText().then(function (updatedName) {
            expect(updatedName).toEqual("UpdatedLatestCourse");
            console.log("Update Batch Popup Closed Succesfully");
        })


    }
    catch (e) {
        console.log('Failed to update Ongoing and UpComing Batches Course in Created By Section');

    }

}
const validateAllBatches = () => {
    try {
        console.log('User is Trying to Validate all  OnGoing and UpComing Course And Expired Section in CreateByMe and Assign me Section');
        expect((searchObj.courseOnGoingBatch1).isPresent()).toBeTruthy;
        expect((searchObj.courseUpcomingBatch).isPresent()).toBeTruthy;
        expect((searchObj.courseExpiredBatch).isPresent()).toBeTruthy;
        searchObj.assignedToMe.click();
        // browser.sleep(2000);
        // expect((searchObj.courseOnGoingBatch1).isPresent()).toBeTruthy;
        // expect((searchObj.courseExpiredBatch).isPresent()).toBeTruthy;
        console.log('Succesfully Validated Ongoing UpComing Expired Section in CreatedByMe Section and Assigned Me Section')
    }
    catch (e) {
        console.log('Failed to Validate all  OnGoing and UpComing Course And Expired Section in CreateByMe and Assign me Section');

    }

}
const verifyBatchEditingFromExpiredCoursesSection = () => {
    try {
        console.log('User is trying to verify editing of Batch from Expired Courses section');
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.expiredCoursesCourse);
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.expiredCoursesCourse))) {

            searchObj.expiredCoursesCourse.click();
            expect(searchObj.nameOfBatch.isEnabled()).toBe(false)
            expect(searchObj.aboutBatch.isEnabled()).toBe(false)
            expect(searchObj.startDate.isEnabled()).toBe(false)
            expect(searchObj.endDate.isEnabled()).toBe(false)
            expect(searchObj.updateBatch.isEnabled()).toBe(true)
            expect(searchObj.mentorsInBatch1.isEnabled()).toBe(true)
            if (searchObj.nameOfBatch.isEnabled() && searchObj.aboutBatch.isEnabled() && searchObj.startDate.isEnabled() && searchObj.endDate.isEnabled() && searchObj.updateBatch.isEnabled() && searchObj.mentorsInBatch1.isEnabled()) {


                console.log('In Expired Courses section user is NOT ALLOWED TO EDIT any details of Courses')
                searchObj.closePopUp.click();
            }
        }
        else {
            console.log('No expired batch is available')

        }
    }
    catch (e) {
        console.log('Failed To verify editing of Batch from Expired Courses section');
    }
}



const verifyPagenation = () => {
    try {
        console.log('Verify Pagenation in  CourseBatches');
        searchObj.onGoingViewAll.click();
        console.log('clicked on Course Batches')

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.page1);
        console.log('Scroll down to the Page');
        searchObj.page2.click();
        console.log('Click on Page2');
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))) {
            console.log('Verified Page 2 ');

        }
        searchObj.pagePrevious.click();
        console.log('Click on pagePrevious');
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))) {
            console.log('Verified Page Previous ');

        }

        searchObj.pageNext.click();
        console.log('Click on Next Page');
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))) {
            console.log('Verified Page Next ');

        }
        searchObj.pageLast.click();
        console.log('Click on Last Page');
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))) {
            console.log('Verified Page Last');

        }
        searchObj.pageFirst.click();
        console.log('Click on First Page');
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.validatecourseCardList))) {
            console.log('Verified Page First');

        }
        console.log('Succesfully Verified all the Page Pagenation');
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.headerCourse);
        console.log('Scroll to Start of Page');
        searchObj.closeCourse.click();
        console.log('closeCourse');
        console.log('Succesfully Verified all the Page');
        console.log('Clicked on closeIcon in view all page, user returns to courses page');
    }
    catch (e) {
        console.log('Failed to Validate Pagination.');
    }
}


const validationMsgWhileAddingMoreThan100Members = () => {
    try {
        console.log('Verify Validation Msg while adding More than 100 Members');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 40000, "headerCourse is not available");
        searchObj.headerCourse.click();
        console.log('clicked on  Trainings');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 40000, "searchInput is not available");
        searchObj.searchInput.click();
        searchObj.searchInput.sendKeys('100UsersForAutomation')
        console.log('Entered Course Name');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchIcon), 40000, "searchIcon is not available");
        searchObj.searchIcon.click();
        console.log('clicked on Search Button');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard ), 20000, " searchPublishedCourses is not available");
        // searchObj.courseCard.click();
        // console.log('clicked on Course Card');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrollmentEditButton ), 20000, " clickEnrollmentEditButton is not available");
        // searchObj.clickEnrollmentEditButton.click();
        // console.log('click on edit batch icon');


        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.Validate100MemberValidationMsgFetch), 40000, "courseNameInOnGoingBatches is not available");
        // searchObj.courseNameInOnGoingBatches.getText().then(function (Validate100MemberValidationMsgFetch) {
        //     console.log('Validate100MemberValidationMsgFetch is :' + Validate100MemberValidationMsgFetch);

        // });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closePopUp), 20000, " clickEnrollmentEditButton is not available");
        searchObj.closePopUp.click();
        console.log('clicked on Close icon');
    }
    catch (e) {
        console.log('Failed to Validate Msg while adding More than 100 Members.');

    }

}

const validateAllElementsInLanguageSelectionAsHindi = () => {

    try {
        console.log("User is trying to validate All Elements In Language Selection As Hindi");
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown not loaded");
        // browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clickLangDropdown), 20000, " clickLangDropdown not loaded");
        searchObj.clickLangDropdown.click();
        browser.sleep(1000);
        searchObj.hindiInLanguageDropdown.click();

        expect(searchObj.libraryInHindi.isPresent()).toBe(true);
        if (searchObj.libraryInHindi.isDisplayed()) {
            console.log("libraryInHindi is Verifed Successfully ")
        }
        expect(searchObj.trainingsInHindi.isPresent()).toBe(true);
        if (searchObj.trainingsInHindi.isDisplayed()) {
            console.log("trainingsInHindi is Verifed Successfully ")
        }
        // // expect(searchObj.enterQRcodeInHindi.isPresent()).toBe(true);
        // // if(searchObj.enterQRcodeInHindi.isDisplayed())
        // // {
        // //  console.log("enterQRcodeInHindi is Verifed Successfully ")
        // // }
        // // searchObj.enterQRcodeInHindi.click();
        // // browser.sleep(1000);
        // // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enter6DigitQRcodeInHindi), 20000, "enter6DigitQRcodeInHindi not loaded");
        // // searchObj.enter6DigitQRcodeInHindi.sendKeys('234ZNY');
        // // browser.sleep(2000);
        // // searchObj.submitInQRcodeInHindi.click();
        // // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentNotAddedYetInHindi), 20000, "contentNotAddedYetInHindi not loaded");
        // // expect(searchObj.contentNotAddedYetInHindi.isPresent()).toBe(true);
        // // if(searchObj.contentNotAddedYetInHindi.isDisplayed())
        // // {
        // //  console.log("contentNotAddedYetInHindi is Verifed Successfully ")
        // // }
        // // expect(searchObj.stateMessageInHindi.isPresent()).toBe(true);
        // // if(searchObj.stateMessageInHindi.isDisplayed())
        // // {
        // //  console.log("stateMessageInHindi is Verifed Successfully ")
        // // }
        browser.sleep(1000);
        searchObj.libraryInHindi.click();
        browser.sleep(3000);
        expect(searchObj.searchFieldInHindi.isPresent()).toBe(true);
        if (searchObj.searchFieldInHindi.isDisplayed()) {
            console.log("searchFieldInHindi is Verifed Successfully ")
        }
        expect(searchObj.searchButtonInHindi.isPresent()).toBe(true);
        if (searchObj.searchButtonInHindi.isDisplayed()) {
            console.log("searchButtonInHindi is Verifed Successfully ")
        }
        // // expect(searchObj.subjectInCourseCardInHindi.isPresent()).toBe(true);
        // // if(searchObj.subjectInCourseCardInHindi.isDisplayed())
        // // {
        // //  console.log("subjectInCourseCardInHindi is Verifed Successfully ")
        // // }

        // // expect(searchObj.selectLanguageInHindi.isPresent()).toBe(true);
        // // if(searchObj.selectLanguageInHindi.isDisplayed())
        // // {
        // //  console.log("selectLanguageInHindi is Verifed Successfully ")
        // // }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectTrainingInHindi), 20000, " selectTrainingInHindi not loaded");
        browser.sleep(1000);
        searchObj.selectTrainingInHindi.click();
        browser.sleep(1000);
        // expect(searchObj.selectBoardInHindi.isPresent()).toBe(true);
        // if (searchObj.selectBoardInHindi.isDisplayed()) {
        //     console.log("selectBoardInHindi is Verifed Successfully ")
        // }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectClassInHindi), 20000, " selectClassInHindi not loaded");

        expect(searchObj.selectClassInHindi.isPresent()).toBe(true);
        if (searchObj.selectClassInHindi.isDisplayed()) {
            console.log("selectClassInHindi is Verifed Successfully ")
        }
        expect(searchObj.selectMediumInHindi.isPresent()).toBe(true);
        if (searchObj.selectMediumInHindi.isDisplayed()) {
            console.log("selectMediumInHindi is Verifed Successfully ")
        }
        expect(searchObj.selectSubjectInHindi.isPresent()).toBe(true);
        if (searchObj.selectSubjectInHindi.isDisplayed()) {
            console.log("selectSubjectInHindi is Verifed Successfully ")
        }
        // // expect(searchObj.exploreContentInHindi.isPresent()).toBe(true);
        // // if(searchObj.exploreContentInHindi.isDisplayed())
        // // {
        // //  console.log("exploreContentInHindi is Verifed Successfully ")
        // // }
        expect(searchObj.resetInHindi.isPresent()).toBe(true);
        if (searchObj.resetInHindi.isDisplayed()) {
            console.log("resetInHindi is Verifed Successfully ")
        }
        // // expect(searchObj.submitInHindi.isPresent()).toBe(true);
        // // if(searchObj.submitInHindi.isDisplayed())
        // // {
        // //  console.log("submitInHindi is Verifed Successfully ")
        // // }
        // expect(searchObj.viewAllInHindi.isPresent()).toBe(true);
        // if (searchObj.viewAllInHindi.isDisplayed()) {
        //     console.log("viewAllInHindi is Verifed Successfully ")
        //}
        // // browser.executeScript("arguments[0].scrollIntoView();", searchObj.helpCenterInHindi);
        // // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.helpCenterInHindi), 20000, " helpCenterInHindi not loaded");
        // // expect(searchObj.helpCenterInHindi.isPresent()).toBe(true);
        // // if(searchObj.helpCenterInHindi.isDisplayed())
        // // {
        // //  console.log("helpCenterInHindi is Verifed Successfully ")
        // // }
        // // expect(searchObj.contactForQueriesInHindi.isPresent()).toBe(true);
        // // if(searchObj.contactForQueriesInHindi.isDisplayed())
        // // {
        // //  console.log("contactForQueriesInHindi is Verifed Successfully ")
        // // }
        expect(searchObj.termsOfUseInHindi.isPresent()).toBe(true);
        if (searchObj.termsOfUseInHindi.isDisplayed()) {
            console.log("termsOfUseInHindi is Verifed Successfully ")
        }

        console.log("User successfully validated All Elements In Language Selection As Hindi");
    }
    catch (Exception) {
        console.log("Failed to validate All Elements In Language Selection As Hindi");
    }
}



const validateAllElementsInLanguageSelectionAsKannada = () => {

    try {
        console.log("User is trying to validate All Elements In Language Selection As Kannada");
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.libraryInHindi);

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clickLangDropdownEnglish), 20000, "clickLangDropdownEnglish not loaded");
        searchObj.clickLangDropdownEnglish.click();
        browser.sleep(1000);
        searchObj.kannadaInLanguageDropdown.click();

        expect(searchObj.libraryInKannada.isPresent()).toBe(true);
        if (searchObj.libraryInKannada.isDisplayed()) {
            console.log("libraryInKannada is Verifed Successfully ")
        }
        expect(searchObj.trainingsInKannada.isPresent()).toBe(true);
        if (searchObj.trainingsInKannada.isDisplayed()) {
            console.log("trainingsInKannada is Verifed Successfully ")
        }
        expect(searchObj.enterQRcodeInKannada.isPresent()).toBe(true);
        if (searchObj.enterQRcodeInKannada.isDisplayed()) {
            console.log("enterQRcodeInKannada is Verifed Successfully ")
        }
        searchObj.enterQRcodeInKannada.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enter6DigitQRcodeInKannada), 20000, "enter6DigitQRcodeInKannada not loaded");
        searchObj.enter6DigitQRcodeInKannada.sendKeys('abc343');
        browser.sleep(1000);

        searchObj.submitInQRcodeInKannada.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentNotAddedYetInKannada), 20000, "contentNotAddedYetInHindi not loaded");
        expect(searchObj.contentNotAddedYetInKannada.isPresent()).toBe(true);
        if (searchObj.contentNotAddedYetInKannada.isDisplayed()) {
            console.log("contentNotAddedYetInKannada is Verifed Successfully ")
        }
        expect(searchObj.stateMessageInKannada.isPresent()).toBe(true);
        if (searchObj.stateMessageInKannada.isDisplayed()) {
            console.log("stateMessageInKannada is Verifed Successfully ")
        }
        browser.sleep(1000);
        searchObj.libraryInKannada.click();
        browser.sleep(1000);
        expect(searchObj.searchFieldInKannada.isPresent()).toBe(true);
        if (searchObj.searchFieldInKannada.isDisplayed()) {
            console.log("searchFieldInKannada is Verifed Successfully ")
        }
        expect(searchObj.searchButtonInKannada.isPresent()).toBe(true);
        if (searchObj.searchButtonInKannada.isDisplayed()) {
            console.log("searchButtonInKannada is Verifed Successfully ")
        }
        // expect(searchObj.subjectInCourseCardInKannada.isPresent()).toBe(true);
        // if(searchObj.subjectInCourseCardInKannada.isDisplayed())
        // {
        //  console.log("subjectInCourseCardInKannada is Verifed Successfully ")
        // }
        expect(searchObj.selectLanguageInKannada.isPresent()).toBe(true);
        if (searchObj.selectLanguageInKannada.isDisplayed()) {
            console.log("selectLanguageInKannada is Verifed Successfully ")
        }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectTrainingInKannada), 20000, " selectTrainingInKannada not loaded");
        browser.sleep(1000);
        searchObj.selectTrainingInKannada.click();
        browser.sleep(1000);
        // expect(searchObj.selectBoardInKannada.isPresent()).toBe(true);
        // if(searchObj.selectBoardInKannada.isDisplayed())
        // {
        //  console.log("selectBoardInKannada is Verifed Successfully ")
        // }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectClassInKannada), 20000, " selectClassInHindi not loaded");

        expect(searchObj.selectClassInKannada.isPresent()).toBe(true);
        if (searchObj.selectClassInKannada.isDisplayed()) {
            console.log("selectClassInKannada is Verifed Successfully ")
        }
        expect(searchObj.selectMediumInKannada.isPresent()).toBe(true);
        if (searchObj.selectMediumInKannada.isDisplayed()) {
            console.log(" selectMediumInKannada is Verifed Successfully ")
        }
        expect(searchObj.selectSubjectInKannada.isPresent()).toBe(true);
        if (searchObj.selectSubjectInKannada.isDisplayed()) {
            console.log(" selectSubjectInKannada is Verifed Successfully ")
        }
        expect(searchObj.exploreContentInKannada.isPresent()).toBe(true);
        if (searchObj.exploreContentInKannada.isDisplayed()) {
            console.log("exploreContentInKannada is Verifed Successfully ")
        }
        expect(searchObj.resetInKannada.isPresent()).toBe(true);
        if (searchObj.resetInKannada.isDisplayed()) {
            console.log("resetInKannada  is Verifed Successfully ")
        }
        expect(searchObj.submitInKannada.isPresent()).toBe(true);
        if (searchObj.submitInKannada.isDisplayed()) {
            console.log(" submitInKannada  is Verifed Successfully ")
        }
        expect(searchObj.viewAllInKannada.isPresent()).toBe(true);
        if (searchObj.viewAllInKannada.isDisplayed()) {
            console.log(" viewAllInKannada is Verifed Successfully ")
        }
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.helpCenterInKannada);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.helpCenterInKannada), 20000, " helpCenterInHindi not loaded");
        expect(searchObj.helpCenterInKannada.isPresent()).toBe(true);
        if (searchObj.helpCenterInKannada.isDisplayed()) {
            console.log("helpCenterInKannada is Verifed Successfully ")
        }
        expect(searchObj.contactForQueriesInKannada.isPresent()).toBe(true);
        if (searchObj.contactForQueriesInKannada.isDisplayed()) {
            console.log("contactForQueriesInKannada is Verifed Successfully ")
        }
        expect(searchObj.termsOfUseInKannada.isPresent()).toBe(true);
        if (searchObj.termsOfUseInKannada.isDisplayed()) {
            console.log("termsOfUseInKannada is Verifed Successfully ")
        }

        console.log("User successfully validated All Elements In Language Selection As Kannada");
    }
    catch (Exception) {
        console.log("Failed to validate All Elements In Language Selection As Kannada");
    }
}
const validateAllElementsInLanguageSelectionAsTamil = () => {

    try {
        console.log("User is trying to validate All Elements In Language Selection As Tamil");
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.libraryInKannada);

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clickKannadaLangDropdown), 20000, "clickKannadaLangDropdown not loaded");
        searchObj.clickKannadaLangDropdown.click();
        browser.sleep(1000);
        searchObj.tamilInLanguageDropdown.click();

        expect(searchObj.libraryInTamil.isPresent()).toBe(true);
        if (searchObj.libraryInTamil.isDisplayed()) {
            console.log("libraryInTamil is Verifed Successfully ")
        }
        expect(searchObj.trainingsInTamil.isPresent()).toBe(true);
        if (searchObj.trainingsInTamil.isDisplayed()) {
            console.log("trainingsInTamil is Verifed Successfully ")
        }
        expect(searchObj.enterQRcodeInTamil.isPresent()).toBe(true);
        if (searchObj.enterQRcodeInTamil.isDisplayed()) {
            console.log("enterQRcodeInTamil is Verifed Successfully ")
        }
        searchObj.enterQRcodeInTamil.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enter6DigitQRcodeInTamil), 20000, "enter6DigitQRcodeInTamil not loaded");
        searchObj.enter6DigitQRcodeInTamil.sendKeys('abc342');
        browser.sleep(1000);
        searchObj.submitInQRcodeInTamil.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentNotAddedYetInTamil), 20000, "contentNotAddedYetInHindi not loaded");
        expect(searchObj.contentNotAddedYetInTamil.isPresent()).toBe(true);
        if (searchObj.contentNotAddedYetInTamil.isDisplayed()) {
            console.log("contentNotAddedYetInTamil is Verifed Successfully ")
        }
        expect(searchObj.stateMessageInTamil.isPresent()).toBe(true);
        if (searchObj.stateMessageInTamil.isDisplayed()) {
            console.log("stateMessageInTamil is Verifed Successfully ")
        }
        browser.sleep(1000);
        searchObj.libraryInTamil.click();
        browser.sleep(1000);
        expect(searchObj.searchFieldInTamil.isPresent()).toBe(true);
        if (searchObj.searchFieldInTamil.isDisplayed()) {
            console.log("searchFieldInTamil is Verifed Successfully ")
        }
        expect(searchObj.searchButtonInTamil.isPresent()).toBe(true);
        if (searchObj.searchButtonInTamil.isDisplayed()) {
            console.log("searchButtonInTamil is Verifed Successfully ")
        }
        // expect(searchObj.subjectInCourseCardInTamil.isPresent()).toBe(true);
        // if(searchObj.subjectInCourseCardInTamil.isDisplayed())
        // {
        //  console.log("subjectInCourseCardInTamil is Verifed Successfully ")
        // }
        expect(searchObj.selectLanguageInTamil.isPresent()).toBe(true);
        if (searchObj.selectLanguageInTamil.isDisplayed()) {
            console.log("selectLanguageInTamil is Verifed Successfully ")
        }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectTrainingInTamil), 20000, "selectTrainingInTamil not loaded");
        browser.sleep(1000);
        searchObj.selectTrainingInTamil.click();
        browser.sleep(1000);
        // expect(searchObj.selectBoardInTamil.isPresent()).toBe(true);
        // if(searchObj.selectBoardInTamil.isDisplayed())
        // {
        //  console.log("selectBoardInTamil is Verifed Successfully ")
        // }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectClassInTamil), 20000, " selectClassInTamil not loaded");

        expect(searchObj.selectClassInTamil.isPresent()).toBe(true);
        if (searchObj.selectClassInTamil.isDisplayed()) {
            console.log("selectClassInTamil is Verifed Successfully ")
        }
        expect(searchObj.selectMediumInTamil.isPresent()).toBe(true);
        if (searchObj.selectMediumInTamil.isDisplayed()) {
            console.log("selectMediumInTamil is Verifed Successfully ")
        }
        expect(searchObj.selectSubjectInTamil.isPresent()).toBe(true);
        if (searchObj.selectSubjectInTamil.isDisplayed()) {
            console.log("selectSubjectInTamil is Verifed Successfully ")
        }
        expect(searchObj.exploreContentInTamil.isPresent()).toBe(true);
        if (searchObj.exploreContentInTamil.isDisplayed()) {
            console.log("exploreContentInTamil is Verifed Successfully ")
        }
        expect(searchObj.resetInTamil.isPresent()).toBe(true);
        if (searchObj.resetInTamil.isDisplayed()) {
            console.log("resetInTamil  is Verifed Successfully ")
        }
        expect(searchObj.submitInTamil.isPresent()).toBe(true);
        if (searchObj.submitInTamil.isDisplayed()) {
            console.log("submitInTamil is Verifed Successfully ")
        }
        expect(searchObj.viewAllInTamil.isPresent()).toBe(true);
        if (searchObj.viewAllInTamil.isDisplayed()) {
            console.log(" viewAllInTamil is Verifed Successfully ")
        }
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.helpCenterInTamil);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.helpCenterInTamil), 20000, " helpCenterInTamil not loaded");
        expect(searchObj.helpCenterInTamil.isPresent()).toBe(true);
        if (searchObj.helpCenterInTamil.isDisplayed()) {
            console.log("helpCenterInTamil is Verifed Successfully ")
        }
        expect(searchObj.contactForQueriesInTamil.isPresent()).toBe(true);
        if (searchObj.contactForQueriesInTamil.isDisplayed()) {
            console.log("contactForQueriesInTamil is Verifed Successfully ")
        }
        expect(searchObj.termsOfUseInTamil.isPresent()).toBe(true);
        if (searchObj.termsOfUseInTamil.isDisplayed()) {
            console.log("termsOfUseInTamil is Verifed Successfully ")
        }

        console.log("User successfully validated All Elements In Language Selection As Tamil");
    }
    catch (Exception) {
        console.log("Failed to validate All Elements In Language Selection As Tamil");
    }
}
const validateAllElementsInLanguageSelectionAsUrdu = () => {

    try {
        console.log("User is trying to validate All Elements In Language Selection As Urdu");
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.libraryInTamil);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clickTamilLangDropdown), 20000, " clickTamilLangDropdown not loaded");
        searchObj.clickTamilLangDropdown.click();
        browser.sleep(1000);
        searchObj.urduInLanguageDropdown.click();

        expect(searchObj.libraryInUrdu.isPresent()).toBe(true);
        if (searchObj.libraryInUrdu.isDisplayed()) {
            console.log("libraryInUrdu is Verifed Successfully ")
        }
        expect(searchObj.trainingsInUrdu.isPresent()).toBe(true);
        if (searchObj.trainingsInUrdu.isDisplayed()) {
            console.log("trainingsInUrdu is Verifed Successfully ")
        }
        expect(searchObj.enterQRcodeInUrdu.isPresent()).toBe(true);
        if (searchObj.enterQRcodeInUrdu.isDisplayed()) {
            console.log("enterQRcodeInUrdu is Verifed Successfully ")
        }
        searchObj.enterQRcodeInUrdu.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enter6DigitQRcodeInUrdu), 20000, "enter6DigitQRcodeInUrdu not loaded");
        searchObj.enter6DigitQRcodeInUrdu.sendKeys('abc342');

        searchObj.submitInQRcodeInUrdu.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.contentNotAddedYetInUrdu), 20000, "contentNotAddedYetInUrdu not loaded");
        expect(searchObj.contentNotAddedYetInUrdu.isPresent()).toBe(true);
        if (searchObj.contentNotAddedYetInUrdu.isDisplayed()) {
            console.log("contentNotAddedYetInUrdu is Verifed Successfully ")
        }
        expect(searchObj.stateMessageInUrdu.isPresent()).toBe(true);
        if (searchObj.stateMessageInUrdu.isDisplayed()) {
            console.log("stateMessageInUrdu is Verifed Successfully ")
        }
        browser.sleep(1000);
        searchObj.libraryInUrdu.click();
        browser.sleep(1000);
        expect(searchObj.searchFieldInUrdu.isPresent()).toBe(true);
        if (searchObj.searchFieldInUrdu.isDisplayed()) {
            console.log("searchFieldInUrdu is Verifed Successfully ")
        }
        expect(searchObj.searchButtonInUrdu.isPresent()).toBe(true);
        if (searchObj.searchButtonInUrdu.isDisplayed()) {
            console.log("searchButtonInUrdu is Verifed Successfully ")
        }
        // expect(searchObj.subjectInCourseCardInUrdu()).toBe(true);
        // if(searchObj.subjectInCourseCardInUrdu.isDisplayed())
        // {
        //  console.log("subjectInCourseCardInUrdu is Verifed Successfully ")
        // }
        expect(searchObj.selectLanguageInUrdu.isPresent()).toBe(true);
        if (searchObj.selectLanguageInUrdu.isDisplayed()) {
            console.log("selectLanguageInUrdu is Verifed Successfully ")
        }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectTrainingInUrdu), 20000, "selectTrainingInUrdu not loaded");
        searchObj.selectTrainingInUrdu.click();
        browser.sleep(1000);
        // expect(searchObj.selectBoardInUrdu.isPresent()).toBe(true);
        // if(searchObj.selectBoardInUrdu.isDisplayed())
        // {
        //  console.log("selectBoardInUrdu is Verifed Successfully ")
        // }

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectClassInUrdu), 20000, " selectClassInUrdu not loaded");

        expect(searchObj.selectClassInUrdu.isPresent()).toBe(true);
        if (searchObj.selectClassInUrdu.isDisplayed()) {
            console.log("selectClassInUrdu is Verifed Successfully ")
        }
        expect(searchObj.selectMediumInUrdu.isPresent()).toBe(true);
        if (searchObj.selectMediumInUrdu.isDisplayed()) {
            console.log("selectMediumInUrdu is Verifed Successfully ")
        }
        expect(searchObj.selectSubjectInUrdu.isPresent()).toBe(true);
        if (searchObj.selectSubjectInUrdu.isDisplayed()) {
            console.log("selectSubjectInUrdu is Verifed Successfully ")
        }
        expect(searchObj.exploreContentInUrdu.isPresent()).toBe(true);
        if (searchObj.exploreContentInUrdu.isDisplayed()) {
            console.log("exploreContentInUrdu is Verifed Successfully ")
        }
        expect(searchObj.resetInUrdu.isPresent()).toBe(true);
        if (searchObj.resetInUrdu.isDisplayed()) {
            console.log("resetInUrdu  is Verifed Successfully ")
        }
        expect(searchObj.submitInUrdu.isPresent()).toBe(true);
        if (searchObj.submitInUrdu.isDisplayed()) {
            console.log("submitInUrdu is Verifed Successfully ")
        }
        expect(searchObj.viewAllInUrdu.isPresent()).toBe(true);
        if (searchObj.viewAllInUrdu.isDisplayed()) {
            console.log(" viewAllInUrdu is Verifed Successfully ")
        }
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.helpCenterInUrdu);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.helpCenterInUrdu), 20000, "helpCenterInUrdu not loaded");
        expect(searchObj.helpCenterInUrdu.isPresent()).toBe(true);
        if (searchObj.helpCenterInUrdu.isDisplayed()) {
            console.log("helpCenterInUrdu is Verifed Successfully ")
        }
        expect(searchObj.contactForQueriesInUrdu.isPresent()).toBe(true);
        if (searchObj.contactForQueriesInUrdu.isDisplayed()) {
            console.log("contactForQueriesInUrdu is Verifed Successfully ")
        }
        expect(searchObj.termsOfUseInUrdu.isPresent()).toBe(true);
        if (searchObj.termsOfUseInUrdu.isDisplayed()) {
            console.log("termsOfUseInUrdu is Verifed Successfully ")
        }

        console.log("User successfully validated All Elements In Language Selection As Urdu");
    }
    catch (Exception) {
        console.log("Failed to validate All Elements In Language Selection As Urdu");
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
        var now = new Date();
        var minutes = now.getMinutes().toString();
        courseName = "ಕನ್ನಡ";

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


    } catch (err) {
        console.log(err);
    }
    return courseName;
}
const editTheCourseInDraft = () => {
    try {
        browser.sleep(2000);
        // var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        // var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        console.log('User is trying to see the upload content in up for review page');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 40000, "workSpace is not available");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.sleep(2000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be abel to click on the drafts section to see draft contents')
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(8000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.newchild), 40000, "Didn't switched to different frame");
        resov.newchild.click();
        browser.sleep(2000);
        console.log('User should be able to click on New chlid/New siblings button to add nodes into the lessonplan')
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        content.titleN.click();
        content.titleN.clear();
        browser.sleep(1000);
        content.titleN.sendKeys("courseName");
        content.descriptionN.sendKeys('description');
        content.addTagN.sendKeys('tag');
        browser.sleep(1000);
        console.log('User should be able to click on the content from draft section to update/edit the content.')

        resov.reviewerSuggestion.click();
        browser.sleep(2000);
        expect(browser.wait(protractor.ExpectedConditions.visibilityOf(resov.reviewerSuggestionTitle))).toBeTruthy
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(resov.reviewerSuggestionTitle))) {
            console.log('This test case pass');
            console.log('User can able to check the rejeted content along with the reviewer sugesstion')
        }
        browser.sleep(1000);
        resov.closeLinkIcon.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();
        browser.sleep(1000);
        console.log('User has successfully verified the uploaded content in up for review page')

    }
    catch (Exception) {
        console.log('User is not able to see the upload content in the all uploads section');

    }

}

const sendForReviewTheRejectedCourse = () => {
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.sendForReview), 20000, "send for review not available");
    content.sendForReview.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
    content.saveform.click();
    browser.sleep(4000);
}

const userIsAbleToRateContent = (content) => {
    try {
        console.log("User is trying to rate the content");
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.headerCourse), 20000, "headerCourse not available");
        searchObj.headerCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys(content);
        browser.sleep(500);
        searchObj.searchIcon.click();
        console.log("Clicked on the searchIcon");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchPublishedCourses), 20000, "searchPublishedCourses not available");
        searchObj.searchPublishedCourses.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.enrollForCourse), 20000, "enrollForCourse not available");
        searchObj.enrollForCourse.click();
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.joinTraining), 20000, "joinTraining not available");
        searchObj.joinTraining.click();


        // browser.sleep(2000);
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);
        if (searchObj.nextArrowInContents.isPresent()) {
            // browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.nextArrowInContents), 20000, "nextArrowInContents not available");
            // searchObj.nextArrowInContents.click();  
            // browser.sleep(1000);
            // searchObj.nextArrowInContents.click();  
            browser.sleep(3000);
            // browser.switchTo().defaultContent();
            // browser.sleep(1000);
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.starRating), 20000, "starRating not available");
            searchObj.starRating.click();
            browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.submitRating), 20000, "submitRating not available");
            searchObj.submitRating.click();
            browser.sleep(1000);
            //browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.closeCourseButton), 20000, "closeCourseButton not available");
            searchObj.closeCourseButton.click();
        }
        browser.sleep(2000);
        console.log("User successfully rated the content");

    } catch (Exception) {
        console.log("User failed to rate the content");
    }
}
const unenrollFromBatch = () => {
    try {
        console.log("User is trying to unroll the course");
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,450);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(3000);
        searchObj.batchDetailsExpand.click();
        browser.sleep(3000);
        // browser.executeScript('window.scrollTo(0,250);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.unenrolButton), 20000, "unenrolButton not available");
        searchObj.unenrolButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.unenrolToCourse), 20000, "unenrolToCourse not available");
        searchObj.unenrolToCourse.click();
        browser.sleep(5000);
        console.log("User successfully unrolled from  the course");
        expect(searchObj.clkJoinCourse.isDisplayed()).toBeTruthy();
        browser.sleep(6000);

    } catch (Exception) {
        console.log("User failed to unroll the course");

    }
}
const consumeTheExpiredBatchCourseAndEnrolToOpenBatch = (content) => {
    try {
        console.log("User is trying to consume the expired course");
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.headerCourse), 20000, "headerCourse not available");
        searchObj.headerCourse.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchPlace), 20000, "searchPlace not available");
        searchObj.searchPlace.sendKeys(content);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchButton), 20000, "searchButton not available");
        searchObj.searchButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchPublishedCourses), 20000, "searchPublishedCourses not available");
        searchObj.searchPublishedCourses.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.resumeCourse), 20000, "resumeCourse not available");
        searchObj.resumeCourse.click();


        browser.sleep(2000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);
        // String progressBarStatus = tpdPage.progressBarStatus.getText();
        var progressBarStatus = "Your Progress 0%";

        if (searchObj.menuInContentPlayer.isPresent()) {
            console.log("Content is playing successfully");
        }

        if (searchObj.progressBar.isPresent()) {
            console.log("Grey color progress bar is displayed in Course TOC");
        }
        browser.sleep(3000);
        browser.switchTo().defaultContent();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.headerCourse);
        browser.sleep(2000);
        var expiredMessage = "Batch has ended on 2019-06-09, therefore your progress will not be updated.";
        expect(searchObj.batchStatusMessage.getText()).then(function (message) {
            message.toEqual(expiredMessage);
        });

        expect(searchObj.progressBarStatus.getText()).then(function (newProgressBarStatus) {
            newProgressBarStatus.toEqual(progressBarStatus);
        });

        console.log("Expired message is verified successfully");

        console.log("User successfully consumed the expired course");

    } catch (Exception) {
        console.log("User failed to consume the expired course");
    }
}
const createCourseAddResourceAndValidateContribution = () => {
    var courseName;
    try {

        console.log("user is trying to create Course Add Resource And Validate Contribution")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.nonAcademic.click();

        //   browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        //   courseName= "CourseA"+faker.randomData().firstname;
        //   content.name.sendKeys(courseName);
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        content.newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        content.titleN.click();
        content.titleN.clear();
        content.titleN.sendKeys(faker.randomData().firstname);
        content.descriptionN.sendKeys('description');
        content.addTagN.sendKeys('tag');
        content.addResource.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("Pdf");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        //   browser.sleep(2000);
        //   content.checkboxFirst.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.contributionName);
        browser.sleep(2000);
        searchObj.contributionName.isPresent().then(function (flag) {
            expect(flag).toBeTruthy();
            console.log(flag);
        });
        //   searchObj.contributionName.getText(then(function(input){
        //     console.log(input);
        //   }));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();
        browser.sleep(1000);
        console.log("user successfully created Course Add Resource And Validate Contribution")
        return courseName;
    } catch (Exception) {
        console.log("User failed created Course Add Resource And Validate Contribution")
    }
}
const verifyBatchOptionWorkSpace = () => {
    try {
        browser.sleep(4000);
        console.log('User is trying to navigate to course batches in Workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.workSpace), 40000, "workSpace is not available");
        searchObj.workSpace.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseBatches), 40000, "courseBatches is not available");
        searchObj.courseBatches.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseBatches), 40000, "courseBatches is not available");
        searchObj.verifyBatchCount.isPresent().then(function (flag) {
            expect(flag).toBeTruthy();
            console.log(flag);
        });
    }
    catch (e) {
        console.log('Could not access the features of Workspace');
    }
}
const searchSelfAssesmentInLib = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var selfContentSearch = cred[31]['CourseName'];
        console.log(selfContentSearch); ``
        browser.sleep(2000);
        console.log('User is trying to navigate To Library And Search For Book');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ETBPage.EtbElem().headerLibrary), 40000, "headerLibrary is not available");
        ETBPage.EtbElem().headerLibrary.click();
        browser.sleep(1000);
        //browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ETBPage.EtbElem().filterSearch), 40000, "filterSearch is not available");
        ETBPage.EtbElem().filterSearch.click();
        ETBPage.EtbElem().filterSearch.sendKeys(selfContentSearch);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ETBPage.EtbElem().searchIcon), 40000, "searchIcon is not available");
        ETBPage.EtbElem().searchIcon.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ETBPage.EtbElem().courseCard), 40000, "courseCard is not available");
        ETBPage.EtbElem().courseCard.click();
        browser.sleep(1000);
        searchObj.asserSelfContentLibSec.isPresent().then(function (flag) {
            expect(flag).toBeTruthy();
            console.log(flag);
        });
    }
    catch (e) {
        console.log('Could not access the Library Section');
        console.log(e);
    }
}
const createCourseWithSelfContentAssesment = () => {
    var courseName;
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var selfContentSearch = cred[31]['CourseName'];
        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.nonAcademic.click();

        //   browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        //   courseName= "CourseA"+faker.randomData().firstname;
        //   content.name.sendKeys(courseName);
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        content.newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        content.titleN.click();
        content.titleN.clear();
        content.titleN.sendKeys(faker.randomData().firstname);
        content.descriptionN.sendKeys('description');
        content.addTagN.sendKeys('tag');
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys(selfContentSearch);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.checkboxFirst), 50000, "checkboxFirst is not available");
        // content.checkboxFirst.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();
        browser.sleep(1000);
        console.log("User successfully created course")
        return courseName;
    } catch (Exception) {
        console.log("User failed to create course")
    }
}
const sendForReviewCourseWithName = () => {
    var courseName;
    try {
        console.log("User is trying to sendForReviewCourseWithName");
        browser.sleep(1000);
        wait.waitForElementToBeClickable(content.sendForReview, 20000, "send for review not available");
        content.sendForReview.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledCourse), 30000, "titleName is not available");
        etbv.untitledCourse.click();
        browser.sleep(500);
        etbv.untitledCourse.clear();
        courseName = "CourseA" + faker.randomData().firstname;
        console.log(courseName);
        etbv.untitledCourse.sendKeys(courseName);
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", content.topic);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topic), 20000, "topic not available");
        content.topic.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorImg), 20000, "topicSelectorImg not available");
        browser.sleep(500);
        content.topicSelectorImg.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorContent), 20000, "topicSelectorContent not available");
        content.topicSelectorContent.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorDone), 20000, "topicSelectorDone not available");
        content.topicSelectorDone.click();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.purposeOfCourse);
        searchObj.purposeOfCourse.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.purposeOfFirstCourse), 30000, "purposeOfFirstCourse button not available");
        searchObj.purposeOfFirstCourse.click();
        browser.sleep(500);
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.mediumOfInstruction);
        searchObj.mediumOfInstruction.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstmediumOfInstruction), 30000, "firstmediumOfInstruction button not available");
        searchObj.firstmediumOfInstruction.click();
        browser.sleep(500);
        searchObj.mediumOfInstruction.click();
        browser.sleep(500);
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.audienceType);
        searchObj.audienceType.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstAudienceType), 30000, "firstAudienceType button not available");
        searchObj.firstAudienceType.click();
        browser.sleep(500);
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.classesTaught);
        searchObj.classesTaught.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstclassTaught), 30000, "firstclassTaught button not available");
        searchObj.firstclassTaught.click();
        browser.sleep(500);
        searchObj.classesTaught.click();
        browser.sleep(500);
        searchObj.subjectsTaught.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstSubjectTaught), 30000, "firstclassTaught button not available");
        searchObj.firstSubjectTaught.click();
        browser.sleep(500);
        // searchObj.subjectsTaught.click();
        // browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", content.author);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        content.author.click();
        content.author.sendKeys("Ekstep");
        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");

        browser.executeScript("arguments[0].scrollIntoView();", etbv.consentCheckBox);
        etbv.consentCheckBox.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.saveform, 20000, "saveform not available");
        content.saveform.click();
        //content.saveButoonReview.click();
        browser.sleep(6000);
        console.log("User successfully sendForReviewCourseWithName");
        return courseName;
    } catch (er) {
        console.error("Failed to sendForReviewCourseWithName");
    }

}

const createCourseWithAllResourceTypeWithDoID = () => {
    var courseName;
    try {
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.nonAcademic.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
        // courseName="CourseA"+faker.randomData().firstname;
        // content.name.sendKeys(courseName);
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        content.newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        content.titleN.click();
        content.titleN.clear();
        content.titleN.sendKeys(faker.randomData().firstname);
        content.descriptionN.sendKeys('description');
        content.addTagN.sendKeys('tag');
        browser.sleep(1000);

        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("pdf");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(1000);
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("Resource");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);

        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("ecm");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        // browser.sleep(1000);
        // // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("html");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        // browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("h5p");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        // browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("epub");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        // browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("mp4");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);sendForReviewTheCourse
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        // browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("webm");
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never loaded");
        content.save.click();
        browser.sleep(1000);
        console.log("User successfully created course with all resource type");
        return courseName;
    } catch (Exception) {
        console.log("failed to execute create course with all resource type")
    }
}
const editDetailsForm = () => {
    var courseName;
    try {
        console.log("user is trying to editDetailsForm");
        wait.waitForElementVisibility(sanity.courseIcon, 50000, "clickAppIcon button not available");
        sanity.courseIcon.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(sanity.allImages, 30000, "allImage button not available");
        sanity.allImages.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(sanity.firststIconImage, 30000, "myImage button not available");
        sanity.firststIconImage.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.addCourseTitle), 20000, "title not available");
        sanity.addCourseTitle.click();
        sanity.addCourseTitle.clear();

        courseName = "courseC" + faker.randomData().firstname;
        sanity.addCourseTitle.sendKeys(courseName);

        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(6000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkContent.click();
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
        return courseName;
    } catch (er) {
        console.log("user failed to editDetailsForm");
    }
}


const contentSearchInDraftAndEdit = (corseNames) => {
    try {

        console.log("User able to search and edit draft")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);

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
        browser.sleep(9000);
        //  browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addChild), 40000, "addChild is not available");
        sanityPage.SanityElement().addChild.click();
        //browser.sleep(3000);

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
    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}



const editTheCourseInDraftAddNewResource = (corseNames) => {
    try {
        //     browser.sleep(2000);
        //     // var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        //     // var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        //     browser.sleep(1000);
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        //     content.headerDropdown.click();
        //     console.log('User is trying to see the upload content in up for review page');
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 40000, "workSpace is not available");
        //     content.workSpace.click();
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        //     resov.drafts.click();
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        //     resov.imageCard.click();
        //     console.log('User should be able to click on the drafts section to see draft contents')
        //     browser.sleep(4000);
        //     browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        //     browser.sleep(8000);
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(resov.newchild), 40000, "Didn't switched to different frame");
        //     resov.newchild.click();
        //     browser.sleep(2000);
        //     console.log('User should be able to click on New chlid/New siblings button to add nodes into the lessonplan')
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        //     content.titleN.click();
        //     content.titleN.clear();
        //     browser.sleep(1000);
        //     content.titleN.sendKeys("courseName");
        //     content.descriptionN.sendKeys('description');
        //     content.addTagN.sendKeys('tag');
        //     browser.sleep(2000);
        //     content.addResource.click(); 
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        //     content.resourceSearch.click();
        //    content.resourceSearch.sendKeys("html");
        //    browser.sleep(500);
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        //     content.selectResourceType2.click();
        //     browser.sleep(500);
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        //     content.clickAddbutton.click();
        //    // browser.sleep(2000);
        //    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.checkboxFirst), 50000, "checkboxFirst is not available");
        //    // content.checkboxFirst.click();
        //     browser.sleep(2000);
        //     browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        //     content.proceed.click();
        //     browser.sleep(3000);
        //     browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        //     content.save.click();        
        //     browser.sleep(3000);

        //     console.log('User should be able to click on the content from draft section to update/edit the content.')

        //     resov.reviewerSuggestion.click();
        //     browser.sleep(2000);
        //     expect(browser.wait(protractor.ExpectedConditions.visibilityOf(resov.reviewerSuggestionTitle))).toBeTruthy
        //     if (browser.wait(protractor.ExpectedConditions.visibilityOf(resov.reviewerSuggestionTitle)))
        //     {
        //         console.log('This test case pass');
        //         console.log('User can able to check the rejeted content along with the reviewer sugesstion')
        //     }
        //     browser.sleep(1000);
        //     resov.closeLinkIcon.click();
        //     browser.sleep(2000);
        //     console.log('User has successfully verified the uploaded content in up for review page')

        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        browser.sleep(3000);
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);
        //  browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addChild), 40000, "addChild is not available");

        sanityPage.SanityElement().addChild.click();
        //browser.sleep(3000); 

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




    }
    catch (Exception) {
        console.log('User is not able to see the upload content in the all uploads section');

    }

}





const verifyConsumesCourseInTrainingSec = () => {
    try {
        browser.sleep(4000);
        console.log('User is trying to navigate to course batches in Workspace');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 40000, "dropdownProfi is not available");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkProfileIcon), 40000, "clkProfileIcon is not available");
        searchObj.clkProfileIcon.click();
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.courseAttendeVerify);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseAttendeVerify), 40000, "coursecourseAttendeVerify  is not available");
        searchObj.courseAttendeVerify.isPresent().then(function (flag) {
            expect(flag).toBeTruthy();
            console.log(flag);
        });
    }
    catch (e) {
        console.log('Could not access the features of Workspace');
    }
}

const verifyCreateMyGroupAddMemberandAddActivity = () => {
    try {
        console.log('user is able to create myGroup,add member and addActivity');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton), 40000, "Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName), 40000, "Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription), 40000, "Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox), 40000, "Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton1), 40000, "CreateGroup submit button not available");
        searchObj.createGroupSubmitButton1.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully),40000,"Group admin Icon not available");
        // var adminText=searchObj.addedSuccessfully.getText();
        // expect((adminText).isDisplayed()).toBe(true);
        // browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addActivityButton), 40000, "Add activity button not available");
        searchObj.addActivityButton.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextButton),40000,"Next button not available");
        // searchObj.nextButton.click();
        // browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectCourse1), 40000, "Course not available");
        searchObj.selectCourse1.click();
        browser.sleep(3000);
        //contentFilterForGroups()
        //browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(2000);
        //browser.actions().mouseMove(searchObj.courseToAddInGroup).perform();
        browser.actions().dragAndDrop(searchObj.courseToAddInGroup, searchObj.courseToAddInGroup).mouseUp().perform();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addToGroupButton), 40000, "Add to Group Button not available");
        searchObj.addToGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully), 40000, "Successful Text not available");
        var successfulText = searchObj.addedSuccessfully.getText();
        expect((successfulText).isDisplayed()).toBe(true);
        browser.sleep(1000);

    }
    catch (Exception) {
        console.log('User is unable to create my Group,member and addActivity');
    }
}

const groupMemberCourseConsumptionstatus = () => {
    console.log('group member should be able start consuming the course');
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
    searchObj.profileButton.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroup), 40000, "myGroup icon not available");
    searchObj.myGroup.click();
    browser.sleep(3000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
    // searchObj.crossButton.click();
    // browser.sleep(3000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
    // searchObj.CreatedGroup.click();
    // browser.sleep(3000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFirstCourse), 40000, "Course not available");
    // searchObj.selectFirstCourse.click();
    // browser.sleep(3000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.joinCourseButton), 40000, "Join Course button not available");
    // searchObj.joinCourseButton.click();
    // browser.sleep(3000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.joinBatch),40000,"Join batch button not available");
    // searchObj.joinCourseButton.click();
    // browser.sleep(3000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startlearningButton), 40000, "start learning button not available");
    // searchObj.startlearningButton.click();
    // browser.sleep(3000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextModuleButton), 40000, "start learning button not available");
    // searchObj.nextModuleButton.click();
    // browser.sleep(3000);
    // searchObj.startlearningButton.isPresent().then(function (result) {
    //     if (result) {
    //         searchObj.startlearningButton.click();

    //     } else {
    //         searchObj.joinCourseButton.click();
    //         browser.sleep(2000);
    //         searchObj.startlearningButton.click();
    //     }
    // });
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextModuleButton), 40000, "start learning button not available");
    // searchObj.nextModuleButton.click();
    // browser.sleep(3000);
}

const verifylastUpdatedandCourseConsumption = () => {
    console.log('group member should be able start consuming the course');
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
    searchObj.profileButton.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroup), 40000, "myGroup icon not available");
    searchObj.myGroup.click();
    browser.sleep(3000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createdGroup), 40000, "Created group not available");
    // searchObj.createdGroup.click();
    // browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFirstCourse), 40000, "Course not available");
    searchObj.selectFirstCourse.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CourseCompletionpercentage), 40000, "Course completion not available");
    searchObj.CourseCompletionpercentage.isDisplayed();
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.lastUpdatedTime), 40000, "last Updated time not available");
    searchObj.lastUpdatedTime.isDisplayed();
}

const editCertificateRequirement = () => {
    try {
        console.log("User is trying to edit certificate requirement");
        browser.sleep(1500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrollmentEditButton), 20000, " clickEnrollmentEditButton not available");
        searchObj.clickEnrollmentEditButton.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.certificateYes), 20000, " certificateYes not available");
        searchObj.certificateYes.click();
        browser.sleep(1000);
        searchObj.updateBatch.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closeCertificate), 20000, " closeCertificate not available");
        searchObj.closeCertificate.click();
        console.log("User successfully editted certificate requirement");


    }
    catch (err) {
        console.log("User failed to edit certificate requirement");
    }
}
const ChangeLangWhileConsuming = (resourceName) => {

    try {
        console.log("User is trying to navigate To Library And Search For Resource");

        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(resourceName);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);


        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        // browser.navigate().back();
        // expect(searchObj.kannadLanVerify.isPresent()).toBe(true);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.clickFITBAnsTxtBox, 20000, "clickFITBAnsTxtBox not loaded");
        resov.clickFITBAnsTxtBox.click();
        browser.sleep(1000);
        console.log("Clicked on Answer Textbox in Player");
        resov.clickFITBAnsTxtBox.sendKeys("8");
        browser.sleep(2000);
        browser.switchTo().defaultContent();

        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        });
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clickLangDropdownEnglish), 20000, "clickLangDropdownEnglish not loaded");
        searchObj.clickLangDropdownEnglish.click();
        browser.sleep(1000);
        searchObj.kannadaInLanguageDropdown.click();
        browser.sleep(3000);
        searchObj.clkBackButton1.click();

        expect(searchObj.libraryInKannada.isPresent()).toBe(true);
        if (searchObj.libraryInKannada.isDisplayed()) {
            console.log("libraryInKannada is Verifed Successfully ")
        }


        browser.sleep(2000);

        browser.navigate().back();
        browser.sleep(4000);
    }

    catch (Exception) {
        console.log("Failed to Consume FITB Resource and Get the Score");
    }
}
const FullScreenMode = (resourceName) => {

    try {
        console.log("User is trying to navigate To Library And Search For Resource");

        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(3000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(resourceName);
        resov.searchIcon.click();
        browser.sleep(3000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(6000);
        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);

        wait.waitForElementVisibility(resov.clickFITBAnsTxtBox, 20000, "clickFITBAnsTxtBox not loaded");
        resov.clickFITBAnsTxtBox.click();
        browser.sleep(2000);
        console.log("Clicked on Answer Textbox in Player");
        resov.clickFITBAnsTxtBox.sendKeys("8");
        browser.sleep(2000);
        browser.switchTo().defaultContent();

        console.log("Entered Wrong Answer in Textbox");
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,600);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        // browser.executeScript("arguments[0].scrollIntoView();",resov.fullscreenclk);
        browser.sleep(1000);
        resov.fullscreenclk.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(3000);
        resov.clickFITBAnsTxtBox.sendKeys("8");
        browser.sleep(2000);
        resov.clickNextButtonMCQ.click();
        console.log("Clicked on Next Button for Wrong Answer in Player");
        browser.sleep(2000);

        expect(resov.verifyInCorrect.isDisplayed()).toBe(true);
        if (resov.verifyInCorrect.isDisplayed()) {
            console.log("Showing  Wrong Symbol while giving wrong answer");
            browser.executeScript("arguments[0].scrollIntoView();", resov.clickTryAgainButton);
            browser.sleep(1000);
            wait.waitForElementVisibility(resov.clickTryAgainButton, 20000, "clickTryAgainButton not loaded");
            resov.clickTryAgainButton.click();
            console.log("Clicked on Try Again Button");
        }
        wait.waitForElementVisibility(resov.clickFITBAnsTxtBox, 20000, "clickFITBAnsTxtBox not loaded");
        resov.clickFITBAnsTxtBox.click();
        resov.clickFITBAnsTxtBox.clear();
        console.log("Clicked on Answer Textbox  And Cleared Textin Player");
        resov.clickFITBAnsTxtBox.sendKeys("9");
        console.log("Entered Correct Answer in Textbox");
        browser.sleep(1000);
        resov.clickNextButtonMCQ.click();
        console.log("Clicked on Next Button for correct Answer in Player");
        if (resov.verifyCorrect.isDisplayed()) {
            console.log("Yes Correct ");
        }
        resov.clickNext.click();
        console.log("Clicked on Next Button");
        browser.switchTo().parentframe();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.giveRatings, 20000, "giveRatings not loaded");
        resov.giveRatings.click();
        console.log("Give Rating");
        wait.waitForElementVisibility(resov.submitRating, 20000, "submitRating not loaded");
        resov.submitRating.click();
        console.log("Clicked on submit Rating");
        wait.waitForElementVisibility(resov.verifyRatingSlideMsg, 20000, "verifyRatingSlideMsg not loaded");
        if (resov.verifyRatingSlideMsg.isDisplayed()) {
            console.log("Thank you for rating this content!");
        }
        console.log("Verifyed Succesfuly Toaster msg of Rating");
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.justCompletedMsg, 20000, "justCompletedMsg not loaded");
        if (resov.justCompletedMsg.isDisplayed()) {
            console.log("You just completed");
        }
        console.log("Verifyed Just Completed Label");
        wait.waitForElementVisibility(resov.ScoreLabel, 20000, "ScoreLabel not loaded");
        if (resov.ScoreLabel.isDisplayed()) {
            console.log("SCORE");
        }
        console.log("Verifyed Score Label");
        wait.waitForElementVisibility(resov.validateScoreResult, 20000, "validateScoreResult not loaded");
        if (resov.validateScoreResult.isDisplayed()) {
            console.log("15");
        }
        console.log("Verifyed Consumed Score ");
        browser.switchTo().parentframe();
        browser.sleep(2000);
    }

    catch (Exception) {
        console.log("Failed to Consume FITB Resource and Get the Score");
    }
}
const VerifyCourseWhichhasCertificate = () => {

    try {
        console.log("User is trying to navigate To Library And Search For Resource");

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);


        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(cred[32]['CourseName']);
        browser.sleep(1000);

        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");

    }
    catch (Exception) {

    }
}
const nestedCourseValidationAsAdmin = () => {
    try {
        console.log("User is trying to validate nested course progress");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 40000, "dropdownProfi is not available");
        content.headerDropdown.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroup), 40000, "myGroup is not available");
        searchObj.myGroup.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closeGroupPopup), 40000, "closeGroupPopup is not available");
        searchObj.closeGroupPopup.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.groupName), 40000, "groupName is not available");
        searchObj.groupName.click();
        browser.sleep(500);
        expect(searchObj.nestedCourseName.isDisplayed()).toBeTruthy();
        browser.sleep(500);
        searchObj.nestedCourseName.click();
        browser.sleep(1500);
        expect(searchObj.changeoptionNested.isDisplayed()).toBeTruthy();
        expect(searchObj.adminName.isDisplayed()).toBeTruthy();
        expect(searchObj.adminProgress.isDisplayed()).toBeTruthy();
        searchObj.adminProgress.getText().then(function (progress) {
            expect(progress).toEqual("0%");
            console.log("orgadmin progress is : " + progress);
        });
        browser.sleep(1000);
        expect(searchObj.userName.isDisplayed()).toBeTruthy();
        expect(searchObj.userProgress.isDisplayed()).toBeTruthy();
        searchObj.userProgress.getText().then(function (progress) {
            expect(progress).toEqual("0%");
            console.log("user progress is : " + progress);
        });

        browser.sleep(500);
        console.log("User successfully valodated nested course progress");

    }
    catch (err) {
        console.log("User failed to validate nested course progress");
    }
}


const checkAutoBatchCreated = () => {
    try {
        browser.sleep(2000);
        console.log("User is trying to checkAutoBatchCreated");
        expect(searchObj.addIcon.isDisplayed()).toBeTruthy();
        console.log("User successfully  checkAutoBatchCreated");
    } catch (e) {
        console.error("User failed to checkAutoBatchCreated");
    }
}
const checkForGenericCourseFramework = () => {
    try {
        console.log("User is trying to checkForGenericCourseFramework");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.nonAcademic.click();
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");

        var currentUrl = browser.getCurrentUrl();
        expect(currentUrl).toContain("TPD");
        searchObj.closeTpdEditor.click();


        console.log("User successfully  checkForGenericCourseFramework");
    } catch (e) {
        console.error("User failed to checkForGenericCourseFramework");
    }
}
const checkForCurriculumCourseFramework = () => {
    try {
        console.log("User is trying to checkForCurriculumCourseFramework");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.academic.click();
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");

        var currentUrl = browser.getCurrentUrl();
        expect(currentUrl).toContain("k-12");

        console.log("User successfully  checkForCurriculumCourseFramework");
    } catch (e) {
        console.error("User failed to checkForCurriculumCourseFramework");
    }
}
const checkEditFormOfCurriculumframework = () => {
    var courseName;
    try {
        console.log("User is trying to checkEditFormOfCurriculumframework");
        browser.sleep(1000);
        wait.waitForElementToBeClickable(searchObj.editIconLinkInTpdEditor, 20000, "editIconLinkInTpdEditor not available");
        searchObj.editIconLinkInTpdEditor.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledCourse1), 30000, "untitledCourse is not available");
        etbv.untitledCourse1.click();
        browser.sleep(500);
        etbv.untitledCourse1.clear();
        courseName = "CourseA" + faker.randomData().firstname;
        etbv.untitledCourse1.sendKeys(courseName);
        browser.sleep(500);
        wait.waitForElementVisibility(etbv.clickBoard, 30000, "board button not available");
        etbv.clickBoard.click();
        wait.waitForElementVisibility(etbv.selectBoard, 30000, "contuinew button not available");
        etbv.selectBoard.click();
        browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.topic), 20000, "topic not available");
        // content.topic.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorImg), 20000, "topicSelectorImg not available");
        // browser.sleep(1000);
        // content.topicSelectorImg.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorContent), 20000, "topicSelectorContent not available");
        // content.topicSelectorContent.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorDone1), 20000, "topicSelectorDone not available");
        // content.topicSelectorDone1.click();
        // browser.sleep(1000);
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.purposeOfCourse);
        // browser.sleep(500);
        // searchObj.purposeOfCourse.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.purposeOfFirstCourse), 30000, "purposeOfFirstCourse button not available");
        // searchObj.purposeOfFirstCourse.click();
        // browser.sleep(500);
        // //browser.executeScript("arguments[0].scrollIntoView();", searchObj.mediumOfInstruction);
        // searchObj.mediumOfInstruction.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstmediumOfInstruction), 30000, "firstmediumOfInstruction button not available");
        // searchObj.firstmediumOfInstruction.click();
        // browser.sleep(500);
        // searchObj.mediumOfInstruction.click();
        // browser.sleep(500);
        // //browser.executeScript("arguments[0].scrollIntoView();", searchObj.audienceType);
        // searchObj.audienceType.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstAudienceType), 30000, "firstAudienceType button not available");
        // searchObj.firstAudienceType.click();
        // browser.sleep(500);
        // //browser.executeScript("arguments[0].scrollIntoView();", searchObj.classesTaught);
        // searchObj.classesTaught.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstclassTaught), 30000, "firstclassTaught button not available");
        // searchObj.firstclassTaught.click();
        // browser.sleep(500);
        // searchObj.classesTaught.click();
        // browser.sleep(500);
        // searchObj.subjectsTaught.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstSubjectTaught), 30000, "firstclassTaught button not available");
        // searchObj.firstSubjectTaught.click();
        // browser.sleep(500);
        // searchObj.subjectsTaught.click();
        // browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", content.author);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        content.author.click();
        content.author.sendKeys("Ekstep");
        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");

        browser.executeScript("arguments[0].scrollIntoView();", etbv.consentCheckBox);
        etbv.consentCheckBox.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.saveform, 20000, "saveform not available");
        content.saveform.click();
        //content.saveButoonReview.click();
        browser.sleep(6000);
        console.log("User successfully checkEditFormOfCurriculumframework");
        return courseName;
    }
    catch (e) {
        console.error("User failed to  checkEditFormOfCurriculumframework");
    }
}
const CheckCertificateOptions = () => {
    try {
        console.log("User is trying to CheckCertificateOptions");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editCertificate), 20000, "editCertificate not available");
        searchObj.editCertificate.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addCertificateOption), 20000, "addCertificateOption not available");
        searchObj.addCertificateOption.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.certificateType), 20000, "certificateType not available");
        // searchObj.certificateType.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.certificateRule), 20000, "certificateRule not available");
        // searchObj.certificateRule.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createCertificate), 20000, "createCertificate not available");
        searchObj.createCertificate.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.certificateTemplatePreview), 20000, "certificateTemplatePreview not available");
        // searchObj.certificateTemplatePreview.click();    
        console.log("User successfully CheckCertificateOptions");
    }
    catch (e) {
        console.log("User failed to CheckCertificateOptions");
    }
}
const enrollForUpcomingOpenBatch = () => {

    try {
        console.log("User is trying to enrollForUpcomingOpenBatch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enrollForCourse), 20000, "enrollForCourse not available");
        searchObj.enrollForCourse.click();
        console.log("Click on Enroll For upcoming batch");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchmsg), 20000, "batchmsg not available");
        browser.sleep(1000);
        searchObj.batchmsg.getText().then(function (input) {
            expect(input).toEqual("The course's batch is available from 2020-12-25");
            console.log("User is successfully verified the message : " + input);
        });
        //searchObj.closemsg.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstCourseModule), 20000, "firstCourseModule not available");
        searchObj.firstCourseModule.click();

        browser.sleep(1000);
        // searchObj.batchmsg.getText().then(function(input){
        //     expect(input).toEqual("The course's batch is available from 2020-12-25");
        //   console.log("User is successfully verified the message : "+input);
        // });

        console.log("User successfully verified enrollForUpcomingOpenBatch");

    }
    catch (Exception) {
        console.log("Failed to enrollForUpcomingOpenBatch");
    }
}

const verifyBookUI = () => {
    try {
        console.log("User is trying to verifyBookUI");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.videoOption), 20000, "videoOption not available");
        //searchObj.videoOption.click();
        Console.log("User successfully verifyBookUIverifyBookUI ");
    } catch (e) {
        console.log("User failed to verifyBookUI")
    }
}
const verifyCourseUI = () => {
    try {
        console.log("User is trying to verifyCourseUI");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewCourseDashboard), 20000, "viewCourseDashboard not available");
        //searchObj.viewCourseDashboard.click();
        Console.log("User successfully verifyCourseUI");
    } catch (e) {
        console.log("User failed to verifyCourseUI")
    }
}
const checkCreateBatchOption = () => {
    try {
        browser.sleep(2000);
        console.log("User is trying to checkCreateBatchOption");
        expect(searchObj.addIcon.isDisplayed()).toBeTruthy();
        console.log("User successfully verified CreateBatch option not available");
    } catch (e) {
        console.error("User failed to checkCreateBatchOption");
    }
}
const checklastUpdatedOption = () => {
    try {
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        console.log("User is trying to checklastUpdatedOption");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewMentorDashboard), 20000, "viewMentorDashboard not available");
        searchObj.viewMentorDashboard.click();
        browser.sleep(2000);
        expect(searchObj.courseEndDateLabel.isDisplayed()).toBeTruthy();
        searchObj.courseEndDate.getText().then(function (input) {
            console.log(input);
        })
        console.log("User successfully verified lastUpdatedOption available");
    } catch (e) {
        console.error("User failed to checklastUpdatedOption");
    }
}
const createCourseWithLatestCourse = (course) => {
    var courseName;
    try {

        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.course), 20000, "Creation page not loaded");
        content.course.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nonAcademic), 20000, "nonAcademic editor never loaded");
        searchObj.nonAcademic.click();
        content.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        content.newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
        content.titleN.click();
        content.titleN.clear();
        content.titleN.sendKeys(faker.randomData().firstname);
        content.descriptionN.sendKeys('description');
        content.addTagN.sendKeys('tag');
        content.addResource.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys(course);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();

        //    browser.sleep(2000);
        //    browser.wait(protractor.ExpectedConditions.visibilityOf(content.checkboxFirst), 50000, "checkboxFirst is not available");
        //    content.checkboxFirst.click();

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();
        browser.sleep(1000);
        console.log("User successfully created course")
        return courseName;
    } catch (Exception) {
        console.log("User failed to create course")
    }
}
const enrollForexpiredBatch = () => {

    try {
        console.log("User is trying to enrollForexpiredBatch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enrollForCourse), 20000, "enrollForCourse not available");
        searchObj.enrollForCourse.click();
        console.log("Click on Enroll For expired batch");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchmsg), 20000, "batchmsg not available");
        browser.sleep(1000);
        searchObj.batchmsg.getText().then(function (input) {
            //expect(input).toEqual("The course's batch is available from 2020-12-25");
            console.log("User is successfully verified the message : " + input);
        });
        //searchObj.closemsg.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstCourseModule), 20000, "firstCourseModule not available");
        searchObj.firstCourseModule.click();

        browser.sleep(1000);
        // searchObj.batchmsg.getText().then(function(input){
        //     expect(input).toEqual("The course's batch is available from 2020-12-25");
        //   console.log("User is successfully verified the message : "+input);
        // });

        console.log("User successfully verified enrollForexpiredBatch");

    }
    catch (Exception) {
        console.log("Failed to enrollForexpiredBatch");
    }
}

const sendForReviewForBookAsCourse = () => {
    var courseName;
    try {
        console.log("User is trying to sendForReviewCourseWithName");
        browser.sleep(1000);
        wait.waitForElementToBeClickable(content.sendForReview, 20000, "send for review not available");
        content.sendForReview.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledCourse), 30000, "titleName is not available");
        etbv.untitledCourse.click();
        browser.sleep(500);
        etbv.untitledCourse.clear();
        courseName = "CourseA" + faker.randomData().firstname;
        console.log(courseName);
        etbv.untitledCourse.sendKeys(courseName);
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.clkBoard);
        browser.sleep(500);
        searchObj.clkBoard.click();
        browser.sleep(500);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.sltBoardValue), 30000, "firstmediumOfInstruction button not available");
        searchObj.sltBoardValue.click();
        browser.sleep(500);

        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.mediumOfInstruction);
        searchObj.mediumOfInstruction.click();
        browser.sleep(500);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstmediumOfInstruction), 30000, "firstmediumOfInstruction button not available");
        searchObj.firstmediumOfInstruction.click();
        browser.sleep(500);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.classesTaught);
        browser.sleep(500);
        searchObj.classesTaught.click();
        browser.sleep(500);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.firstclassTaught), 30000, "firstclassTaught button not available");
        searchObj.firstclassTaught.click();
        browser.sleep(500);

        browser.sleep(500);
        searchObj.subjectsTaught.click();
        browser.sleep(500);
        searchObj.firstSubjectTaught.click();


        browser.executeScript("arguments[0].scrollIntoView();", content.topic);
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topic), 20000, "topic not available");
        content.topic.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorImg), 20000, "topicSelectorImg not available");
        browser.sleep(500);
        content.topicSelectorImg.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorContent), 20000, "topicSelectorContent not available");
        content.topicSelectorContent.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.topicSelectorDone), 20000, "topicSelectorDone not available");
        content.topicSelectorDone.click();
        browser.sleep(1000);


        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.purposeOfCourse);
        // searchObj.purposeOfCourse.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.purposeOfFirstCourse), 30000, "purposeOfFirstCourse button not available");
        // searchObj.purposeOfFirstCourse.click();
        // browser.sleep(500);




        // browser.executeScript("arguments[0].scrollIntoView();", content.author);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        // content.author.click();
        // content.author.sendKeys("Ekstep");

        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2021");
        browser.sleep(1000);

        browser.executeScript("arguments[0].scrollIntoView();", etbv.consentCheckBox);
        etbv.consentCheckBox.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(content.saveform, 20000, "saveform not available");
        content.saveform.click();
        //content.saveButoonReview.click();
        browser.sleep(6000);
        console.log("User successfully sendForReviewCourseWithName");
        return courseName;
    } catch (er) {
        console.error("Failed to sendForReviewCourseWithName");
    }

}
const ExpiredBatchVisible = (coursename) => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        console.log("User is trying to click on Courses Tab")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.coursesLink), 20000, "Courses Tab is not available");
        searchObj.coursesLink.click();
        console.log("User is trying to send data to Search Bar")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchBar), 20000, "Unable to send data too search bar");
        searchObj.searchBar.sendKeys(coursename);
        console.log("User is trying to click on Search Button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchBtn), 20000, "Search Button is not available");
        searchObj.searchBtn.click();
        browser.sleep(3000);
        //let courseCardName=searchObj.courseTitle.getText();
        //expect(courseCardName.toEqual(coursename));
        if (searchObj.corsecardCoursesTab.isDisplayed()) {
            console.log("Valid Batch Course is displayed under corses Tab");
        }
        else {
            console.log("Valid Batch Course is not displayed under corses Tab");
        }
        console.log("User is trying to click on Course image")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseImg), 20000, "Course image is not available");
        searchObj.courseImg.click();
        console.log("User is trying to click on join course button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.joinCourse), 20000, "Join Course Button is not available");
        searchObj.joinCourse.click();
        console.log("User is trying to click on Don't share button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.dontShare), 20000, "Don't Share Button is not available");
        searchObj.dontShare.click();
        console.log("User is trying to click on Courses Tab")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.coursesTabActive), 20000, "Courses Tab is not available");
        searchObj.coursesTabActive.click();
        console.log("User is trying to click on Viewall Button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewAllButton), 20000, "Viewall Button is not available");
        searchObj.viewAllButton.click();
        console.log("User is trying to send data to Search Bar")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchBar), 20000, "Unable to send data too search bar");
        searchObj.searchBar.sendKeys(coursename);
        console.log("User is trying to click on Search Button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchBtn), 20000, "Search Button is not available");
        searchObj.searchBtn.click();
        if (searchObj.finalCourseTitle.isDisplayed()) {
            console.log("Searched Course is displayed under my courses section");
        }
        else {
            console.log("Searched Course is not displayed under my courses section");
        }
        console.log("User is trying to click on Courses Link")
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.coursesLink), 20000, "Courses Link is not available");
        searchObj.coursesLink.click();
        console.log("User is trying to send data on Search Bar")
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchBar), 20000, "Unable to send data on Search Bar ");
        // searchObj.searchBar.sendKeys('do_2131842004152565761431');
        searchObj.searchBar.sendKeys(cred[34]['CourseName']);
        console.log("User is trying to click on Search Button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchBtn), 20000, "Search Button is not available");
        searchObj.searchBtn.click();
        console.log("User is trying to click on course image")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.finalCourseTitle), 20000, "Course image is not available");
        searchObj.finalCourseTitle.click();
        browser.sleep(2000);
        if (searchObj.expiredBatchPopup.getText().toEqual("This course does not have any open batches")) {
            console.log("Searched course batch is expired")
        }
        else {
            console.log("Searched course batch is not expired")
        }
    }
    catch (Exception) {
        console.log("Failed to ExpiredBatchVisible");
    }
}

const NotificationBellIconOnPortalAfterLogin = () => {
    try {
        searchObj.notificationBellIcon.isDisplayed().then(function (displayed) {
            if (displayed) {
                console.log("Notification bell icon is displayed:")
            } else {
                console.log("Notification bell icon is not displayed:")
            }
        })
    } catch (e) {
        console.error("User failed to check Notification Bell Icon On Portal");
    }
}
const newCertificateTemplateCreation = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        console.log("User is trying to click on Courses Link")
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.coursesLink), 20000, "Courses Link is not available");
        searchObj.coursesLink.click();
        console.log("User is trying to send data on Search Bar")
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchBar), 20000, "Unable to send data on Search Bar ");
        // searchObj.searchBar.sendKeys('do_2131842004152565761431');
        searchObj.searchBar.sendKeys(cred[34]['CourseName']);
        console.log("User is trying to click on Search Button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchBtn), 20000, "Search Button is not available");
        searchObj.searchBtn.click();
        console.log("User is trying to click on Course Image")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseImg), 20000, "Cource Image is not available");
        searchObj.courseImg.click();
        console.log("User is trying to click on Add Certificate Link")
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropdown), 20000, "Add Certificate link is not available");
        searchObj.batchDropdown.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addCertificateLnk), 20000, "Add Certificate link is not available");
        searchObj.addCertificateLnk.click();
        console.log("User is trying to click on Add Certificate Plus Button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addCertificateplus), 20000, "Add Certificate Plus button is not available");
        searchObj.addCertificateplus.click();
        console.log("User is trying to click on Create Template Button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createTemplateBtn), 20000, "create Template button is not available");
        searchObj.createTemplateBtn.click();
        console.log("User is trying to send data on Certificate Title")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.certificateTitle), 20000, "Certificate Title Text box is not available ");
        searchObj.certificateTitle.sendKeys(cred[32]['Title']);
        console.log("User is trying to send data on State Name")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.stateName), 20000, "State Name Text box is not available");
        searchObj.stateName.sendKeys(cred[34]['Title']);
        console.log("User is trying to click on Browse button for selecting state logo1")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.stateLogo1), 20000, "State Logo1 Browse Button is Not available");
        searchObj.stateLogo1.click();
        browser.sleep(5000);
        console.log("User is trying to click on state logo")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.statelogoImage), 20000, "State Logo image is Not available");
        searchObj.statelogoImage.click();
        console.log("User is trying to click on select button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectButton), 20000, "Select button is Not available");
        searchObj.selectButton.click();
        console.log("User is trying to click on Browse button for selecting Signature1")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.signature1), 20000, "Signature1 Browse Button is Not available");
        searchObj.signature1.click();
        sanitiPageobject.uploadParticularFileForNegativeValidation("C:/Users/Qualitrix/Downloads/Signature.jpeg");
        browser.sleep(5000);
        console.log("User is trying to click on cancel button")
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.cancel), 20000, "Cancel Button is Not available");
        searchObj.cancel.click();
        console.log("User is trying to click on Browse button for selecting Signature1")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.signature1), 20000, "Signature1 Browse Button is Not available");
        searchObj.signature1.click();
        sanitiPageobject.uploadParticularFile("C:/Users/Qualitrix/Downloads/Signature1.png");
        browser.sleep(2000);
        console.log("User is trying to send data on Signatory1 Designation")
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.signatory1Designation), 20000, "Signatory1 Designation text box is not available");
        searchObj.signatory1Designation.sendKeys(cred[35]['Title']);
        console.log("User is trying to click on Checkbox")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkbox), 20000, "Terms & Conditions Checkbox is not available");
        searchObj.checkbox.click();
        browser.sleep(2000);
        console.log("User is trying to click on Refresh Button")
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.refreshBtn), 20000, "Refresh Button is not available");
        browser.executeScript("arguments[0].click();", searchObj.refreshBtn);
        browser.sleep(10000);
        // searchObj.refreshBtn.click();
        console.log("User is trying to click on Save Template Button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.saveTemplate), 20000, "Save Template Button is not available");
        browser.executeScript("arguments[0].click();", searchObj.saveTemplate);
        // searchObj.saveTemplate.click();
        // expect(searchObj.addCertificatePopup.getText().toEqual('Certificate added successfully'));
        browser.sleep(3000);
        console.log("User is trying to click on close icon Button")
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.closeIcon), 20000, "Close Icon  Button is not available");
        //searchObj.closeIcon.click();
        browser.executeScript("arguments[0].click();", searchObj.closeIcon);
        browser.sleep(1000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.selectCertificate);
        console.log("User is trying to click on Certificate type Drop down")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectCertificate), 20000, "Select Certificate Dropdown is not available");
        //searchObj.selectCertificate.click();
        browser.executeScript("arguments[0].click();", searchObj.selectCertificate);
        browser.sleep(1000);
        console.log("User is trying to select value in Certificate type Drop down")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectCompletionCourse), 20000, "Unable to select the value in select Certificate Dropdown");
        //searchObj.selectCompletionCourse.click();
        browser.executeScript("arguments[0].click();", searchObj.selectCompletionCourse);
        console.log("User is trying to click on Certificate Rules Drop down")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.SelectIssueCertificate), 20000, "Certificate Rules Dropdown is not available");
        //searchObj.SelectIssueCertificate.click();
        browser.executeScript("arguments[0].click();", searchObj.SelectIssueCertificate);
        console.log("User is trying to select value in Certificate Rules Drop down")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectAll), 20000, "Unable to select the value in Certificate Rules Dropdown");
        // searchObj.selectAll.click();
        browser.executeScript("arguments[0].click();", searchObj.selectAll);
        browser.sleep(3000);
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.certificateImage);
        console.log("User is trying to click on Preview button")
        browser.actions().mouseMove(searchObj.certificateImage).perform();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.previewButton), 20000, "Unable to click on preview button");
        browser.executeScript("arguments[0].click();", searchObj.previewButton);
        browser.sleep(3000);
        console.log("User is trying to click on Select Template button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectTemplateButton), 20000, "Unable to click on Select Template button");
        // searchObj.addCertificateButton.click();
        browser.executeScript("arguments[0].click();", searchObj.selectTemplateButton);
        searchObj.addCertificateButton.isEnabled(false);
        console.log("User is trying to click on CheckBox")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBox1), 20000, "Unable to click on check Box");
        // searchObj.checkBox1.click();
        browser.executeScript("arguments[0].click();", searchObj.checkBox1);
        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.refreshBtn);
        browser.sleep(2000);
        console.log("User is trying to click on Add Certificate button")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addCertificateButton), 20000, "Unable to click on Add Certificate button");
        // searchObj.addCertificateButton.click();
        browser.executeScript("arguments[0].click();", searchObj.addCertificateButton);
        //expect(searchObj.addCertificatePopup.getText().toEqual('Certificate added successfully'));
        console.log(searchObj.addCertificatePopup.getText());
    }
    catch (Exception) {
        console.log("Failed to newCertificateTemplateCreation");
    }
}

const startLeaning = () => {

    try {

        console.log("verifying the course search by applying filters");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys('Course');
        searchObj.searchIcon.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.courseToBeClicked), 20000, "searchInput not available");
        searchObj.courseToBeClicked.click();
        browser.sleep(3000);


        searchObj.joinCourse.isPresent().then(function (result) {
            if (result) {
                searchObj.joinCourse.click();
                browser.sleep(3000);
                searchObj.startlearningButton.click();
            } else {
                searchObj.startlearningButton.click();
                //content.continueLearning.click();
            }
        });
        // browser.sleep(2000);
        // expect(searchObj.moduleProgress.isEnabled()).toBe(true);
    }
    catch (Exception) {
        console.log("Failed to click start learning");
    }
}

const shareModule = () => {
    try {
        console.log("verifying the course search by applying filters");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys('do_2134414266110525441288');
        searchObj.searchIcon.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.courseToBeClicked), 20000, "searchInput not available");
        searchObj.courseToBeClicked.click();
        browser.sleep(3000);
        searchObj.joinCourse.isPresent().then(function (result) {
            if (result) {
                searchObj.joinCourse.click();
                browser.sleep(3000);
                searchObj.startlearningButton.click();
            } else {
                searchObj.clkContinuLearing.click();
            }
        });
        browser.sleep(3000);
        expect(searchObj.moduleProgress.isEnabled()).toBe(true)
        content.clickShare.click();
        console.log("Click on Search icon");
        browser.sleep(1000);
        content.clickCopy.click();
        console.log("Clicked on CopyLink");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.closeIconInShare), 20000, "closeIconInShare is not available");
        browser.sleep(1000);
        content.closeIconInShare.click();
        console.log("Click on copyClose icon");
        browser.sleep(1000);
        unenrollFromBatch();
    }
    catch (Exception) {
        console.log("Failed to click start learning");
    }
}

const verifyCollapseAllOption = () => {

    try {

        console.log("verifying the course search by applying filters");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys("AutomationCourseContent");
        searchObj.searchIcon.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.courseToBeClicked), 20000, "searchInput not available");
        searchObj.courseToBeClicked.click();
        browser.sleep(3000);

        searchObj.joinCourse.isPresent().then(function (result) {
            if (result) {
                searchObj.joinCourse.click();
                browser.sleep(3000);
                searchObj.startlearningButton.click();
                browser.sleep(500);
                content.continueLearning.click();

            } else {
                searchObj.startlearningButton.isPresent().then(function (result3) {
                    if (result3) {
                        searchObj.startlearningButton.click();
                        browser.sleep(1000);
                    } else {
                        content.continueLearning.click();
                        browser.sleep(3000);
                    }
                })

            }
        });
        browser.navigate().back();
        searchObj.clkCollapseAll.click();
        browser.sleep(2000);
        searchObj.clkExpandAll.click();
        browser.sleep(3000);

        // //browser.executeScript("arguments[0].scrollIntoView();", searchObj.checkBoxConsent);   
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.checkBoxConsent), 20000, "searchInput not available");
        // searchObj.checkBoxConsent.click();
        // browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.dontShare), 20000, "searchInput not available");
        // content.dontShare.click();
        // browser.sleep(3000);

        // searchObj.checkBoxConsent.click();
        // browser.sleep(2000);
        // content.dontShare.click();
        // console.log("Click on Search icon");        

        // browser.sleep(3000);
        // expect(searchObj.moduleProgress.isEnabled()).toBe(true)


    }
    catch (Exception) {
        console.log("Failed to click start learning");
    }
}
const publishCourseFromUpForReview = (coursename) => {
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


    tpdPage.tpdPage().publishTheCourse.isPresent().then(function (result) {
        if (result) {

            tpdPage.tpdPage().publishTheCourse.click();
            browser.sleep(4000);
            content.clickFirstChekcBox.click();
            browser.sleep(5000);
            content.clkcheckBoxPublising.each(function (input) {
                browser.sleep(200);
                input.click()
            });
            browser.sleep(2000);


        } else {

            browser.refresh();
            browser.sleep(6000);
            browser.refresh();
            browser.sleep(8000);

            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().publishTheCourse), 20000, "workspace page not loaded");
            tpdPage.tpdPage().publishTheCourse.click();
            browser.sleep(4000);

            content.clickFirstChekcBox.click();
            browser.sleep(5000);
            content.clkcheckBoxPublising.each(function (input) {
                browser.sleep(200);
                input.click()
            });
            browser.sleep(2000);

        }
    });




    browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
    tpdPage.tpdPage().confirmForPublishBook.click();
    browser.sleep(6000);

}
const clkMyGroups = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
    } catch (Exception) {
        console.log("clicking my groups failed");
    }
}

const courseByFilter = () => {
    try {
        console.log('user is able to create myGroup,add member and addActivity');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addActivityButton), 40000, "Add activity button not available");
        searchObj.addActivityButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectFirstCourse), 40000, "Cross button not available");
        searchObj.selectFirstCourse.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.filter), 40000, "Filter button not available");
        content.filter.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.subSelect), 40000, "Cross button not available");
        searchObj.clickBoardFilter.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.subSelectValue), 40000, "Cross button not available");
        searchObj.selectBoardFilter.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.MedSelect), 40000, "Cross button not available");
        searchObj.mediumDropdown.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.MedSelectValue), 40000, "Cross button not available");
        searchObj.selectMediumValue.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickclass), 40000, "Cross button not available");
        searchObj.clickclass.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.sltclass1), 40000, "Cross button not available");
        searchObj.sltclass1.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.subjectDropdown), 40000, "Cross button not available");
        searchObj.subjectDropdown.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectSubjectValue), 40000, "Cross button not available");
        searchObj.selectSubjectValue.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.contentType), 40000, "Cross button not available");
        searchObj.selectSubjectValue.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.contentTypeValue), 40000, "Cross button not available");
        searchObj.selectSubjectValue.click();
        browser.sleep(3000);
        browser.actions().mouseMove(searchObj.addToGroup).perform();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.addToGroup), 40000, "addToGroup button not available");
        content.addToGroup.click();
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log("clicking my groups failed");
    }
}

const enrollForOpenBatch2 = () => {

    try {
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(7000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        expect(searchObj.userNameBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.stateBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.userIdBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.districtBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.blockBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.schoolIdBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.nameBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.mobileNumberBatch.isDisplayed()).toBeTruthy();
        //expect(searchObj.emailIdbatch.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);


        searchObj.batchCourseName.getText().then(function (input) {
            console.log("User is successfully enrolled to Course : " + input);
        });
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkStartLearning), 20000, "clkStartLearning not available");
        // searchObj.clkStartLearning.click();
        // browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkFullScreen), 20000, "clkStartLearning not available");
        // searchObj.clkFullScreen.click();
        // browser.sleep(4000);
        // console.log("The progress bar is getting updated once the user consume the course");
        // browser.navigate().back();
        browser.sleep(6000);


    }
    catch (Exception) {
        console.log("Failed to enroll for an open batch");
    }
}

const createOpenBatchWithCloseEndDate = () => {

    try {
        console.log("User is trying to create open batch for a course");
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.addIcon);
        // browser.executeScript('window.scrollTo(0,250);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        //  browser.executeScript("arguments[0].scrollIntoView();", searchObj.addIcon);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropdown), 20000, "createbatch not available");
        searchObj.batchDropdown.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "createbatch not available");
        browser.sleep(4000);
        searchObj.addIcon.click();
        console.log("Click on Add Icon");
        browser.sleep(500);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, "nameOfBatch not available");
        searchObj.nameOfBatch.sendKeys("Batch");
        searchObj.aboutBatch.click();
        searchObj.aboutBatch.sendKeys(" Open Batch");
        console.log("Enter Batch Name");
        browser.sleep(500);
        //  searchObj.certificateNO.click();
        //  console.log("Click on certificate no");
        // browser.sleep(500);


        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startdate), 20000, " startdate is not available");
        searchObj.startdate.click();
        console.log("Click on Start Date");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
        searchObj.startDateCalendar.click();
        searchObj.startDateCalendar.sendKeys(todaysDate);
        console.log("Select Start Date");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDate), 20000, "sendDate is not available");
        searchObj.endDate.click();
        browser.sleep(200);
        searchObj.endDate.sendKeys(endDate);

        console.log("Select EndDate");
        browser.sleep(2000);

        //  browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkNoCertficate), 20000, "clkCheckBoxBacth not available");
        searchObj.clkNoCertficate.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkCheckBoxBacth), 20000, "clkCheckBoxBacth not available");
        searchObj.clkCheckBoxBacth.click();
        console.log("Batch Succesfully created  without Enrollment date");

        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.buttonCreate);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.buttonCreate), 20000, "clkCheckBoxBacth not available");
        searchObj.buttonCreate.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkExpandBatches), 20000, "clkExpandBatches not available");
        // searchObj.clkExpandBatches.click();
        browser.sleep(3000);
        expect(searchObj.assertCreatedBatch.isDisplayed()).toBeTruthy();
        browser.sleep(5000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewCourseDashBoard), 20000, "viewCourseDashBoard not available");
        // searchObj.viewCourseDashBoard.click();
        // browser.sleep(1000);
        //    browser.getCurrentUrl().contains(APP_URL+"/learn/course/do_");
        //  searchObj.batchCourseName.getText();

    }
    catch (Exception) {
        console.log("Failed to create open batch");
    }
}


const enrollForOpenBatchAndVerifyTimer = () => {

    try {
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        expect(searchObj.userNameBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.stateBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.userIdBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.districtBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.blockBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.schoolIdBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.nameBatch.isDisplayed()).toBeTruthy();
        expect(searchObj.mobileNumberBatch.isDisplayed()).toBeTruthy();
        //expect(searchObj.emailIdbatch.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(4000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(6000);


        searchObj.batchCourseName.getText().then(function (input) {
            console.log("User is successfully enrolled to Course : " + input);
        });
        expect(searchObj.assertTimer.isDisplayed()).toBeTruthy();
        browser.sleep(3000);
        expect(searchObj.assertTimeStamp.isDisplayed()).toBeTruthy();
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Failed to enroll for an open batch");
    }
}

const addGrpAndDeleteGrp = () => {
    try {
        console.log('user is able to create myGroup,add member and addActivity');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton), 40000, "Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName), 40000, "Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription), 40000, "Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox), 40000, "Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(5000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton), 40000, "CreateGroup submit button not available");
        // searchObj.createGroupSubmitButton.click();
        // browser.sleep(6000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton1), 40000, "CreateGroup submit button not available");
        searchObj.createGroupSubmitButton1.click();
        browser.sleep(6000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully),40000,"Group admin Icon not available");
        // var adminText=searchObj.addedSuccessfully.getText();
        // expect((adminText).isDisplayed()).toBe(true);
        // browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(3000);

        // expect(searchObj.grpcreatorName.isPresent()).toBeTruthy();
        // browser.sleep(5000);
        searchObj.clkMenugrps.click();
        browser.sleep(4000);


        searchObj.clkEditBtnGrps.click();
        browser.sleep(4000);
        searchObj.enterGroupName.sendKeys('EditedGroup')
        // searchObj.EditGroupInput.sendKeys('EditedGroup')
        browser.sleep(2000);
        sanity.description.click();
        sanity.description.sendKeys('EditedGroup')
        browser.sleep(2000);
        searchObj.UpdateGroup.click();
        browser.sleep(4000);
        expect(searchObj.editedGrpValidation.isPresent()).toBeTruthy();
        browser.sleep(2000);

        // expect(searchObj.memberCount.isPresent()).toBeTruthy();
        // browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkMenugrps), 40000, "Created group not available");
        searchObj.clkMenugrps.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.clkHamburgerMenuTopicDelete), 40000, "Created group not available");
        sanity.clkHamburgerMenuTopicDelete.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkDeleteGrpsPopup), 40000, "Created group not available");
        searchObj.clkDeleteGrpsPopup.click();
        browser.sleep(2000);


    } catch (err) {
        console.log(err)
    }
}

const EditTitleDescriptionTags = () => {
    try {
        console.log('user is able to edit Title,Description and tags');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(5000);
        var PageTitle = browser.getTitle();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Created group not available");
        sanity.groupActions.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.clkHamburgerMenuTopicEdit), 40000, "Created group not available");
        sanity.clkHamburgerMenuTopicEdit.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupName), 40000, "Created group not available");
        searchObj.GroupName.click();
        browser.sleep(100);
        searchObj.GroupName.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        browser.sleep(2000);
        var name_of_Group = "my_group" + " " + faker.randomData().firstname;
        searchObj.GroupName.sendKeys(name_of_Group);
        browser.sleep(1000);
        sanity.description.click();
        browser.sleep(100);
        sanity.description.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.description), 40000, "Created group not available");
        sanity.description.sendKeys("for validation of nested course for " + " " + name_of_Group);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.UpdateGroup), 40000, "Update group not available");
        searchObj.UpdateGroup.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.forum), 40000, "Forum Button not available");
        sanity.forum.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.categoryCard), 40000, "Forum Button not available");
        sanity.categoryCard.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.startDiscussion), 40000, "Forum Button not available");
        sanity.startDiscussion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.askQuestion), 40000, "Forum Button not available");
        sanity.askQuestion.sendKeys("This is my 1st idea");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.description), 40000, "Forum Button not available");
        sanity.description.sendKeys("This is the first idea to be shared");
        browser.sleep(3000);
        sanity.tags.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.tags), 40000, "Forum Button not available");
        sanity.tags.sendKeys("test1");
        browser.sleep(1000);
        // var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        // enter.perform();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.submitButton), 40000, "Forum Button not available");
        sanity.submitButton.click();
        browser.sleep(4000);
        //browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.clkMyDiscussion), 40000, "Forum Button not available");
        sanity.clkMyDiscussion.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.discussCard), 40000, "Forum Button not available");
        sanity.discussCard.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "groupActions Button not available");
        sanity.groupActions.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.clkHamburgerMenuTopicEdit), 40000, "groupActions Button not available");
        sanity.clkHamburgerMenuTopicEdit.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.askQuestion), 40000, "Forum Button not available");
        sanity.askQuestion.sendKeys("This is my 1st idea 1");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.description), 40000, "Forum Button not available");
        sanity.description.sendKeys("This is the first idea 1 to be shared");
        browser.sleep(3000);
        sanity.tags.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.tags), 40000, "Forum Button not available");
        sanity.tags.sendKeys("test1");
        browser.sleep(1000);
        // var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        // enter.perform();
        // browser.sleep(1000);
        browser.executeScript('arguments[0].scrollIntoView(true)', sanity.clkUpdateBtnTopcis.getWebElement());
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.clkUpdateBtnTopcis), 40000, "Forum Button not available");
        sanity.clkUpdateBtnTopcis.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,450);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        })
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.ReplyMessage), 40000, "Reply Button not available");
        searchObj.ReplyMessage.click();
        searchObj.ReplyMessage.sendKeys("test reply message" + faker.randomData());
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        })
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.postReply), 40000, "postReply Button not available");
        sanity.postReply.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.editReply), 40000, "editReply Button not available");
        searchObj.editReply.click();
        browser.sleep(300);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        })
        searchObj.replyCommentButton.click();
        browser.sleep(3000);
        searchObj.CommentText.click();
        browser.sleep(50);
        searchObj.CommentText.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        browser.sleep(50);
        searchObj.CommentText.sendKeys("Comment Replied");
        browser.executeScript('window.scrollTo(0,490);').then(function () {
            console.log('++++++SCROLLED Down+++++');
            browser.sleep(300);
            searchObj.CommentPostReplyButton.click();
            browser.sleep(3000);
            searchObj.deleteComment.click();
            browser.sleep(3000);
            browser.driver.switchTo().alert().accept();
            browser.sleep(3000);
        })
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "groupActions Button not available");
        sanity.groupActions.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.clkHamburgerMenuTopicDelete), 40000, "groupActions Button not available");
        sanity.clkHamburgerMenuTopicDelete.click();
        browser.sleep(3000);
        var popUpText = browser.driver.switchTo().alert().getText();
        expect(popUpText).toEqual("Are you sure you want to delete this topic? Your action cannot be undone.");
        browser.sleep(3000);
        browser.driver.switchTo().alert().dismiss().then(function () {
            console.log("Delete cancelled")
        })
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "groupActions Button not available");
        sanity.groupActions.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.clkHamburgerMenuTopicDelete), 40000, "groupActions Button not available");
        sanity.clkHamburgerMenuTopicDelete.click();
        browser.sleep(2000);
        browser.driver.switchTo().alert().accept();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.clkCloseIconDF), 40000, "groupActions Button not available");
        expect(sanity.clkCloseIconDF.isPresent()).toBeTruthy().then(function () {
            //sanity.clkCloseIconDF.click();
            console.log("Close Button is validated for My Discussion Page");
        })
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.clkTags), 40000, "groupActions Button not available");
        sanity.clkTags.click();
        browser.sleep(2000);
        expect(sanity.clkCloseIconDF.isPresent()).toBeTruthy().then(function () {
            //browser.sleep(3000);
            sanity.clkCloseIconDF.click();
            console.log("Close Button is validated for tags library page");
        })
        browser.sleep(4000);
        // expect(PageTitle).toContain('diksha_ntptest_org').then(function () {
        //     console.log("user is redirectedto the previous page when clicks on close option in the discussion forum");
        // })
    }
    catch (Exception) {
        console.log('user is not able to edit Title,Description and tags');
    }
}

const ActivityDashboard = () => {
    try {
        console.log('user is able to validate last Update from Activity Dashboard');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(5000);
        let Admin = sanity.AssertAdmin.getText();
        Admin.then(function (adminInGroup) {
            const words = adminInGroup.split(' ');
            var adminName = (words[0] + " " + words[1]).toLocaleLowerCase();
            console.log("Group Admin " + "|" + adminName + "|" + " is logged in");

            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.firstContent), 40000, "firstContent not available");
            sanity.firstContent.click();
            browser.sleep(2000);

            var DashBoardAdmin = sanity.AssertAdmin.getText();
            DashBoardAdmin.then(function (AdminInCourseDashboard) {
                var word = AdminInCourseDashboard.split('(');
                var adminIncourseDashBoard = (word[0]);
                console.log(adminIncourseDashBoard);
                if (adminIncourseDashBoard.localeCompare(adminName) == 0) {
                    console.log("Group Admin" + "|" + adminIncourseDashBoard + "|" + "accessing the course dashboard");
                }

                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.ActivityDashboard), 40000, "ActivityDashboard not available");
                sanity.ActivityDashboard.click();
                browser.sleep(3000);


                sanity.AdminInDashboard.getText().then(function (AdminPresenceInActivityDashboard) {
                    const words = AdminPresenceInActivityDashboard.split(' ');
                    var adminNameInActivityDashBoard = (words[0] + " " + words[1]);
                    if (adminNameInActivityDashBoard.localeCompare(adminIncourseDashBoard) == 0) {
                        console.log("Same Group Admin" + "|" + adminNameInActivityDashBoard + "|" + "is accesing the Activity Dashboard");
                    }
                })
            })
        })
    }
    catch (Exception) {
        console.log('user is not able to validate last Update from Activity Dashboard');
    }
}

const verifyTOCandCourseConsumption = () => {
    try {
        console.log('user can access toc of the course and should not able to consume course before adding it to the groups');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addActivityButton), 40000, "addActivityButton not available");
        searchObj.addActivityButton.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.SelectCourseByGroup), 40000, "SelectCourseByGroup not available");
        sanity.SelectCourseByGroup.click();
        browser.sleep(5000);
        browser.actions().dragAndDrop(sanity.SelectCourse, sanity.SelectCourse).mouseUp().perform();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.viewActivity), 40000, "viewActivity Button not available");
        sanity.viewActivity.click();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(3000);
        expect(sanity.ConsumeCourseforGroups.isPresent).toBeTruthy()
        if (browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.ConsumeCourseforGroups))) {
            console.log('Course cannot be consumed before adding it to groups ');
            sanity.ConsumeCourseforGroups.click();
        }
        (sanity.coursewithoutAddedToGrpPopUp.getText()).then(function (input) {
            console.log(input);
        })
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.RatingClose), 40000, "RatingClose not available");
        sanity.RatingClose.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('user cannot access toc of the course and able to consume course before adding it to the groups');
    }
}


const createCourseAssessment = () => {
    var coursename;
    try {
        console.log("User is trying to create a resource")
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(ccpage.contentCreation().workSpace, 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,350);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(1000);
        // browser.executeScript("arguments[0].scrollIntoView();", content.courseAssessment);
        wait.waitForElementVisibility(content.courseAssessment, 20000, "clickresource is not available");
        content.courseAssessment.click();
        wait.waitForElementVisibility(resov.resourceName, 20000, "resourceName is not available");
        coursename = "CourseAssess" + faker.randomData().firstname;
        resov.resourceName.sendKeys(coursename);
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.assessNumberAttempts), 20000, "Course creation editor never loaded");
        content.assessNumberAttempts.sendKeys("12");
        resov.startCreating.click();
        browser.sleep(4000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(7000);
        wait.waitForElementVisibility(resov.addShape, 20000, "addShape is not available");
        resov.addShape.click();
        wait.waitForElementVisibility(resov.addTriangle, 20000, "addTriangle is not available");
        resov.addTriangle.click();
        wait.waitForElementVisibility(resov.addImage, 20000, "Book page not loaded");
        resov.addImage.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.selectImg, 20000, "selectImg not loaded");
        resov.selectImg.click();
        browser.sleep(500);
        wait.waitForElementToBeClickable(resov.selectButton, 20000, "selectButton not loaded");
        resov.selectButton.click();
        browser.sleep(500);
        resov.addHotSpot.click();
        browser.sleep(200);
        resov.addscribblepad.click();
        resov.addActivity.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.searchActivity, 20000, "searchActivity not loaded");
        wait.waitForElementVisibility(resov.addbuttonActivity, 20000, "addbuttonActivity not loaded");
        resov.addbuttonActivity.click();
        browser.sleep(1000);
        wait.waitForElementToBeClickable(resov.clicksave, 20000, "clicksave never loaded");
        resov.clicksave.click();
        browser.sleep(2000);
        wait.waitForElementToBeClickable(resov.closebutton, 20000, "closebutton never loaded");
        resov.closebutton.click();
        browser.sleep(1000);
        console.log("User successfully created resource")
        return coursename;
    } catch (Exception) {
        console.log("User failed to create a resource");
    }
}

const sendForReviewTheCourseAssessment = () => {
    try {

        browser.sleep(1000);
        wait.waitForElementToBeClickable(content.sendForReview, 20000, "send for review not available");
        content.sendForReview.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.clickAppIcon, 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        wait.waitForElementVisibility(etbv.checkAppIcon, 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        wait.waitForElementVisibility(etbv.selectAppIcon, 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
        browser.sleep(500);
        wait.waitForElementVisibility(etbv.clickBoard, 30000, "board button not available");
        etbv.clickBoard.click();
        wait.waitForElementVisibility(etbv.selectBoard, 30000, "contuinew button not available");
        etbv.selectBoard.click();
        // wait.waitForElementVisibility(etbv.clickCurriculum, 30000, "clickCurriculum button not available");
        // etbv.clickCurriculum.click();
        // wait.waitForElementVisibility(etbv.selectCurriculum, 30000, "selectCurriculum button not available");
        // etbv.selectCurriculum.click();
        browser.sleep(500);
        etbv.clickMedium.click();
        wait.waitForElementVisibility(etbv.selectMedium, 30000, "contuinew button not available");
        etbv.selectMedium.click();
        browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        etbv.clickclass.click();
        wait.waitForElementVisibility(etbv.SelectClass, 30000, "contuinew button not available");
        etbv.SelectClass.click();
        browser.sleep(500);

        etbv.clicksubject.click();
        wait.waitForElementVisibility(etbv.selectSubject, 30000, "contuinew button not available");
        etbv.selectSubject.click();
        browser.sleep(500);


        browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
        wait.waitForElementVisibility(etbv.yearOfCreation, 30000, "yearOfCreation button not available");
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");



        //browser.executeScript("arguments[0].scrollIntoView();", content.displayScore);
        //wait.waitForElementVisibility(content.displayScore, 30000, "displayScore not available");
        // content.displayScore.click();
        // browser.sleep(1000);
        // content.displayScoreSelect.click();


        // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickContentType);
        // wait.waitForElementVisibility(etbv.clickContentType, 30000, "clickContentType button not available");
        // etbv.clickContentType.click();
        // browser.sleep(1000);
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.practiceResource2);
        // etbv.practiceResource2.click();


        browser.sleep(3000);
        wait.waitForElementVisibility(content.saveform, 20000, "submitForm not available");
        // content.saveform.click();

        content.saveButoonReview.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        });
        browser.sleep(5000);

    } catch (Exception) {
        console.log("User failed to create a resource");
    }
}




const createFutureBatch = () => {

    try {
        console.log("User is trying to create open batch for a course");
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.addIcon);
        browser.executeScript('window.scrollTo(0,350);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        //  browser.executeScript("arguments[0].scrollIntoView();", searchObj.addIcon);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropdown), 20000, "createbatch not available");
        searchObj.batchDropdown.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "createbatch not available");
        browser.sleep(4000);
        searchObj.addIcon.click();
        console.log("Click on Add Icon");
        browser.sleep(500);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, "nameOfBatch not available");
        searchObj.nameOfBatch.sendKeys("Batch");
        searchObj.aboutBatch.click();
        searchObj.aboutBatch.sendKeys(" Open Batch");
        console.log("Enter Batch Name");
        browser.sleep(500);
        //  searchObj.certificateNO.click();
        //  console.log("Click on certificate no");
        // browser.sleep(500);

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
       

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startdate), 20000, " startdate is not available");
        searchObj.startdate.click();
        console.log("Click on Start Date");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
        searchObj.startDateCalendar.click();
        searchObj.startDateCalendar.sendKeys(nextDate);
        console.log("Select Start Date");
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDate), 20000, "sendDate is not available");
        searchObj.endDate.click();
        browser.sleep(200);
        searchObj.endDate.sendKeys(futureDate);

        console.log("Select EndDate");
        browser.sleep(2000);

        //  browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkNoCertficate), 20000, "clkCheckBoxBacth not available");
        searchObj.clkNoCertficate.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkCheckBoxBacth), 20000, "clkCheckBoxBacth not available");
        searchObj.clkCheckBoxBacth.click();
        console.log("Batch Succesfully created  without Enrollment date");

        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.buttonCreate);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.buttonCreate), 20000, "clkCheckBoxBacth not available");
        searchObj.buttonCreate.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkExpandBatches), 20000, "clkExpandBatches not available");
        // searchObj.clkExpandBatches.click();
        browser.sleep(3000);
        expect(searchObj.assertCreatedBatch.isDisplayed()).toBeTruthy();
        browser.sleep(5000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewCourseDashBoard), 20000, "viewCourseDashBoard not available");
        // searchObj.viewCourseDashBoard.click();
        // browser.sleep(1000);
        //    browser.getCurrentUrl().contains(APP_URL+"/learn/course/do_");
        //  searchObj.batchCourseName.getText();

    }
    catch (Exception) {
        console.log("Failed to create open batch");
    }
}

const contentFilterForGroups = () => {
    try {

        browser.sleep(2000);
        console.log('User is trying to filter the content for groups');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.ContentfilterForGroup), 40000, "dropdownProfi is not available");
        content.ContentfilterForGroup.click();
        browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        })
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.groupFilterBoard), 40000, "clkProfileIcon is not available");
        etbv.groupFilterBoard.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectGroupFilterBoard), 40000, "clkProfileIcon is not available");
        etbv.selectGroupFilterBoard.click();
        browser.sleep(1000);
        //browser.executeScript("arguments[0].scrollIntoView();",etbv.groupFilterMedium);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.groupFilterMedium), 40000, "clkProfileIcon is not available");
        etbv.groupFilterMedium.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectFilterMedium), 40000, "clkProfileIcon is not available");
        etbv.selectFilterMedium.click();
        browser.sleep(1000);
        // browser.executeScript("arguments[0].scrollIntoView();",etbv.groupFilterClass);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.groupFilterClass), 40000, "clkProfileIcon is not available");
        // etbv.groupFilterClass.click();
        // browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.selectFilterClass), 40000, "clkProfileIcon is not available");
        // tpdPage.selectFilterClass.click();
        // browser.sleep(1000);
        //browser.executeScript("arguments[0].scrollIntoView();",etbv.groupFilterSubject);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.groupFilterSubject), 40000, "clkProfileIcon is not available");
        etbv.groupFilterSubject.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectFilterSubject), 40000, "clkProfileIcon is not available");
        etbv.selectFilterSubject.click();
        browser.sleep(1000);
        //browser.executeScript("arguments[0].scrollIntoView();",etbv.groupFilterContentType);
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        })
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.groupFilterContentType), 40000, "clkProfileIcon is not available");
        etbv.groupFilterContentType.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectFilterContentType), 40000, "clkProfileIcon is not available");
        etbv.selectFilterContentType.click();
        browser.sleep(1000);
    }
    catch (e) {
        console.log(err);
    }
}

const contentSearchInPublishedAndEdit = (corseNames) => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addChild), 40000, "addChild is not available");

        sanityPage.SanityElement().addChild.click();
        //browser.sleep(3000); 

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().clkContent.click();
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
    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}


const contentSearchInDraftAndEditWithChildSibling = (corseNames) => {
    try {

        console.log("User able to search and edit draft")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);

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
        browser.sleep(9000);
        for (let i = 1; i < 2; i++) {
            sanityPage.SanityElement().addChild.click();
            browser.sleep(4000);
            expect(sanityPage.SanityElement().addFromLibraryButton.isPresent()).toBeTruthy().then(function () {
                console.log("Library button is enabled");
            })

            browser.sleep(2000);
            sanityPage.SanityElement().childDesc.sendKeys("ChildDesc");
            console.log("Child and Sibling node added " + i + " times");
        }
        for (let i = 1; i < 2; i++) {
            sanityPage.SanityElement().addsibling.click();
            browser.sleep(4000);
            expect(sanityPage.SanityElement().addFromLibraryButton.isPresent()).toBeTruthy().then(function () {
                console.log("Library button is enabled");
            })
            browser.sleep(2000);
            sanityPage.SanityElement().childDesc.sendKeys("ChildDesc");
            console.log("Sibling node added " + i + " times");
        }

        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
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
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(5000);

    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}

const addChildSibling = () => {
    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().siblingKebabMenu), 40000, "siblingKebabMenu is not available");
        sanityPage.SanityElement().siblingKebabMenu.click();
        browser.sleep(300);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addSibling), 40000, "siblingKebabMenu is not available");

        sanityPage.SanityElement().addSibling.click();
        browser.sleep(300);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(300);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000, "Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(300);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000, "Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(300);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000, "Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(300);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000, "Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(300);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().siblingKebabMenu), 40000, "siblingKebabMenu is not available");

        sanityPage.SanityElement().siblingKebabMenu.click();
        browser.sleep(300);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addSibling), 40000, "siblingKebabMenu is not available");

        sanityPage.SanityElement().addChild.click();
        browser.sleep(300);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(300);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000, "Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(300);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().selectButton), 20000, "Select content Button not loaded");
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(300);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addContent), 20000, "Add content content Button not loaded");
        sanityPage.SanityElement().addContent.click();
        browser.sleep(300);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().contentFromLibrayBackButton), 20000, "Back Button not loaded");
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(300);

    }
    catch (Exception) {
        console.log('User not able to add child and sibling');

    }

}

const contentSearchInDraftAndEditwithDeleteNodes = (corseNames) => {
    try {

        console.log("User able to search and edit draft")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);

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
        browser.sleep(9000);
        for (let i = 1; i < 5; i++) {
            sanityPage.SanityElement().addChild.click();
            browser.sleep(4000);
            expect(sanityPage.SanityElement().addFromLibraryButton.isPresent()).toBeTruthy().then(function () {
                console.log("Library button is enabled");
            })
            browser.sleep(2000);
            sanityPage.SanityElement().childDesc.sendKeys("ChildDesc");
            browser.sleep(400);
            // if(i==5){
            //     browser.actions().dragAndDrop(searchObj.courseToAddInGroup, searchObj.courseToAddInGroup).mouseUp().perform();
            //     sanityPage.SanityElement().dltUnitnode.click();
            // }
            console.log("Child node added " + i + " times");
        }
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
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
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}

const searchDraftedContentInAllmyContentAndEdit = (corseNames) => {
    try {

        console.log("User able to search and edit drafted content");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workspaceHeaderDropDwn), 20000, "headerDropdown page not loaded");
        content.workspaceHeaderDropDwn.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.allMyContent), 40000, "allMyContent is not available");
        searchObj.allMyContent.click();
        console.log('User successfully navigated to All My Content');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard4), 40000, "imageCard is not available");
        resov.imageCard4.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);
        for (let i = 1; i < 5; i++) {
            sanityPage.SanityElement().addChild.click();
            browser.sleep(4000);
            expect(sanityPage.SanityElement().addFromLibraryButton.isPresent()).toBeTruthy().then(function () {
                console.log("Library button is enabled");
            })
            browser.sleep(2000);
            sanityPage.SanityElement().childDesc.sendKeys("ChildDesc");
            browser.sleep(400);
            // if(i==5){
            //     browser.actions().dragAndDrop(searchObj.courseToAddInGroup, searchObj.courseToAddInGroup).mouseUp().perform();
            //     sanityPage.SanityElement().dltUnitnode.click();
            // }
            console.log("Child node added " + i + " times");
        }
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
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
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}



const deleteChildAndSiblingNode = (corseNames) => {
    try {

        console.log("User able to search and edit content")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.sleep(3000);
        console.log('User successfully navigated to draft');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(5000);

        expect(sanityPage.SanityElement().addChild.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().addChild.click();
            console.log("Child Node added");
            browser.sleep(200);
            sanityPage.SanityElement().dltUnitnode.click();
            browser.sleep(200);
            content.yesButtonPopup.click();
            console.log("Child Node Deleted");
        })
        browser.sleep(1000);
        expect(sanityPage.SanityElement().addsibling.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().addChild.click();
            browser.sleep(100);
            sanityPage.SanityElement().childDesc.sendKeys("ChildDesc");
            browser.sleep(100);
            console.log("Sibling Node added ");
            sanityPage.SanityElement().addsibling.click();
            browser.sleep(200);
            sanityPage.SanityElement().dltUnitnode.click();
            browser.sleep(200);
            content.yesButtonPopup.click();
            console.log("Sibling Node Deleted");
        })
        browser.sleep(200);
        sanityPage.SanityElement().addChild.click();
        browser.sleep(1000);
        sanityPage.SanityElement().childDesc.sendKeys("ChildDesc");
        browser.sleep(3000);


        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
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
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}


const editWithNodesVerifyMandatoryFields = (corseNames) => {
    try {

        console.log("User able to search and edit draft")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);

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
        browser.sleep(9000);
        for (let i = 1; i < 5; i++) {
            if (i == 1 || i == 2) {

                sanityPage.SanityElement().addChild.click();
                browser.sleep(4000);
                sanityPage.SanityElement().childTitle.getText().then(function (input) {
                    expect(input).toEqual("Title")
                    console.log(input + " is validated");

                })
                sanityPage.SanityElement().assertDescription.getText().then(function (input1) {
                    expect(input1).toEqual("Description")
                    console.log(input1 + " is validated");

                })
                sanityPage.SanityElement().assertKeywords.getText().then(function (input2) {
                    expect(input2).toEqual("Keywords")
                    console.log(input2 + " is validated");

                })
                sanityPage.SanityElement().assertDescription.getText().then(function (input3) {
                    input3.includes("Topics")
                    console.log(input3 + " is validated");

                })
                browser.sleep(2000);
                sanityPage.SanityElement().childDesc.sendKeys("ChildDesc");
                browser.sleep(400);

                console.log("Child node added " + i + " times");


            }


            if (i == 3 || i == 4) {
                sanityPage.SanityElement().addsibling.click();
                browser.sleep(4000);
                sanityPage.SanityElement().childTitle.getText().then(function (input) {
                    expect(input).toEqual("Title")
                    console.log(input + " is validated");

                })
                sanityPage.SanityElement().assertDescription.getText().then(function (input1) {
                    expect(input1).toEqual("Description")
                    console.log(input1 + " is validated");

                })
                sanityPage.SanityElement().assertKeywords.getText().then(function (input2) {
                    expect(input2).toEqual("Keywords")
                    console.log(input2 + " is validated");

                })
                sanityPage.SanityElement().assertDescription.getText().then(function (input3) {
                    input3.includes("Topics");
                    console.log(input3 + " is validated");

                })
                browser.sleep(2000);
                sanityPage.SanityElement().childDesc.sendKeys("siblingDesc");
                browser.sleep(400);
                console.log("Sibling node added " + i + " times");

            }


        }
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
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
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}

const navigateToCourseAndVerify = (coursename) => {

    try {
        console.log("To verify navigate to Course section, search course ");
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        // browser.sleep(1000);
        // searchObj.headerCourse.click();
        // browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys(coursename);
        browser.sleep(500);
        searchObj.searchIcon.click();
        console.log("Clicked on the searchIcon");
        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available");
        searchObj.courseCard.click();
        browser.sleep(7000);
        console.log("Clicked on the course card");
        console.log("verified navigation to Course section, search course");
        expect(searchObj.coursemodules.isPresent()).toBeTruthy().then(function () {
            console.log("Course modules is validated")
        })
        expect(searchObj.courseinformation.isPresent()).toBeTruthy().then(function () {
            console.log("Course information is validated")
        })
        expect(searchObj.credits.isPresent()).toBeTruthy().then(function () {
            console.log("Credit information is validated")
        })
        expect(searchObj.batchDetails.isPresent()).toBeTruthy().then(function () {
            console.log("Batch Details is validated")
        })

    }
    catch (Err) {
        console.log("Failed on navigating to Course section, search course " + Err);
    }
}

const EditTargetFrameworkWithMultipleCategoricalValues = (corseNames) => {
    try {
        console.log("user is trying to edit a course")

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
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);
        expect(sanityPage.SanityElement().MedDropDown.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().MedDropDown), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().MedDropDown.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
                browser.sleep(1000);
            })
            console.log("Multiple medium is selected")
        })
        expect(sanityPage.SanityElement().classDropDown.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().classDropDown), 20000, "class covered not loaded");
                sanityPage.SanityElement().classDropDown.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Class is selected")
        })
        expect(sanityPage.SanityElement().subDropDown.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().subDropDown), 20000, "subject covered not loaded");
                sanityPage.SanityElement().subDropDown.click();
                browser.sleep(1000);
                sanityPage.SanityElement().MultipleSelect.click();
            })
            console.log("Multiple Subject is selected")
        })
        browser.sleep(3000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);

        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(2000);

    } catch (err) {
        console.log(err);
    }
}


const EditDraftedTargetFrameworkWithMultipleCategoricalValues = (corseNames) => {
    try {
        console.log("user is trying to create a course")

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workspaceHeaderDropDwn), 20000, "headerDropdown page not loaded");
        content.workspaceHeaderDropDwn.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.allMyContent), 40000, "allMyContent is not available");
        searchObj.allMyContent.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard4), 40000, "imageCard is not available");
        resov.imageCard4.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);
        expect(sanityPage.SanityElement().MedDropDown.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().MedDropDown), 20000, "Medium covered not loaded");
                sanityPage.SanityElement().MedDropDown.click();
                browser.sleep(1000);
                sanityPage.SanityElement().selectMedium.click();
                browser.sleep(1000);
            })
            console.log("Multiple medium is selected")
        })
        expect(sanityPage.SanityElement().classDropDown.isPresent()).toBeTruthy().then(function () {
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().classDropDown), 20000, "class covered not loaded");
                sanityPage.SanityElement().classDropDown.click();
                browser.sleep(1000);
                sanityPage.SanityElement().multiSelect2.click();
            })
            console.log("Multiple Class is selected")
        })
        expect(sanityPage.SanityElement().subDropDown.isPresent()).toBeTruthy().then(function () {
            browser.sleep(1000);
            browser.executeScript('window.scrollTo(0,1000);').then(function () {
                browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().subDropDown), 20000, "subject covered not loaded");
                sanityPage.SanityElement().subDropDown.click();
                browser.sleep(1000);
                sanityPage.SanityElement().multiSelect2.click();
            })
            console.log("Multiple Subject is selected")
        })
        browser.sleep(3000);
        sanityPage.SanityElement().saveAsDraft.click();
        browser.sleep(3000);

        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(2000);

    } catch (err) {
        console.log(err);
    }
}

const consentPopupShouldNotDisplayForMinorUser = () => {

    try {
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(7000);

        expect(searchObj.checkBoxConsent.isPresent()).toEqual(false);
        expect(searchObj.userNameBatch.isPresent()).toEqual(false);
        expect(searchObj.stateBatch.isPresent()).toEqual(false);
        expect(searchObj.mobileNumberBatch.isPresent()).toEqual(false);




    }
    catch (Exception) {
        console.log("Failed to enroll for an open batch");
    }
}

const editTheCourseFromDraft = (corseNames) => {
    try {

        console.log("user is trying to create a course")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);
        //  browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(2000);

        // browser.executeScript('window.scrollTo(0,1000);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        // sanityPage.SanityElement().courseadditionalCategory.click();
        // browser.sleep(2000);
        // sanityPage.SanityElement().selectAdditionalCategory.click();
        // browser.sleep(2000);
        // sanityPage.SanityElement().courseType.click();
        // browser.sleep(2000);

        // expect(sanityPage.SanityElement().ContinusProfList.isPresent()).toBeTruthy();
        // browser.sleep(2000);
        // sanityPage.SanityElement().selectcourseType.click();
        // browser.sleep(2000);
        // sanityPage.SanityElement().subjectCovered.click();
        // browser.sleep(2000);
        // sanityPage.SanityElement().selectSubject.click();
        // browser.sleep(2000);
        // browser.executeScript('window.scrollTo(0,1000);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        // sanityPage.SanityElement().selectBoardForcourse.click();
        // browser.sleep(2000);

        // sanityPage.SanityElement().selectBoard.click();
        // browser.sleep(2000);
        // browser.executeScript('window.scrollTo(0,1000);').then(function () {
        //     browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectMediumForCourse), 20000, "Medium covered not loaded");
        //     sanityPage.SanityElement().selectMediumForCourse.click();
        //     browser.sleep(2000);
        // })
        // sanityPage.SanityElement().selectMedium.click();
        // browser.sleep(2000);
        // browser.executeScript('window.scrollTo(0,1000);').then(function () {
        //     browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectClassForCourse), 20000, "class covered not loaded");
        //     sanityPage.SanityElement().selectClassForCourse.click();
        //     browser.sleep(2000);
        // })
        // sanityPage.SanityElement().selectclass.click();
        // browser.sleep(2000);
        // browser.executeScript('window.scrollTo(0,1000);').then(function () {
        //     browser.wait(protractor.ExpectedConditions.elementToBeClickable(sanityPage.SanityElement().selectSubjectForCourse), 20000, "subject covered not loaded");
        //     sanityPage.SanityElement().selectSubjectForCourse.click();
        //     browser.sleep(2000);
        // })
        // sanityPage.SanityElement().selectSubject2.click();
        // browser.sleep(2000);
        // sanityPage.SanityElement().Author.sendKeys("EKSTEP");
        // browser.sleep(300);
        // sanityPage.SanityElement().selectCopyRightYear.sendKeys("2021");
        // browser.sleep(300);

        // sanityPage.SanityElement().saveAsDraft.click();
        // browser.sleep(5000);


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
    }
    catch (Exception) {
        console.log('User is not able to see the upload content in the all uploads section');

    }

}



const verifyCourseCard = () => {
    try {

        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.coursesTab), 20000, "headerDropdown page not loaded");
        searchObj.coursesTab.click();
        console.log("Course tab is clicked");
        browser.sleep(2000);

        // searchObj.assertcoursecard.isPresent().toBeTruthy().then(function(){
        //     console.log(" course card is validated");
        // })

        // searchObj.assertCourseIcon.isDisplayed().toBeTruthy().then(function(){
        //     console.log("Course icon is validated");
        // })

        searchObj.assertCourseName.getText().then(function (input) {
            console.log(input + " name is validated");
        })

        searchObj.assertOrgname.getText().then(function (input) {
            console.log(input + " org name is validated");
        })


        console.log('Course card attributes are validated')
        browser.sleep(9000);


    }
    catch (Exception) {
        console.log('course card not found');

    }

}


const rejectContentWithAnyRegionalLanguage = (inputToContentName, regionallanguage) => {
    try {
        console.log('Reviewer is trying reject the content with input comment in regional language');
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
        content.searchForReview.sendKeys(inputToContentName);
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
        content.searchedContentForPublish.click();
        browser.sleep(8000);
        for (i = 1; i < 4; i++) {
            sanity.submitForreviewButton.isPresent().then(function (result2) {
                if (result2 === true) {
                    browser.refresh();
                    browser.sleep(200);
                } else {
                    tpdPage.tpdPage().rejectThecourse.isPresent().then(function (result) {
                        if (result === true) {
                            tpdPage.tpdPage().rejectThecourse.click();
                            browser.sleep(2000);
                            wait.waitForElementVisibility(resov.clkcommentBox, 40000, "reviewComment is not available");
                            resov.clkcommentBox.click();
                            resov.clkcommentBox.sendKeys(regionallanguage)
                            browser.sleep(2000);
                            wait.waitForElementVisibility(resov.clkSubmitReviw, 40000, "requestChangesButton is not available");
                            resov.clkSubmitReviw.click();
                            browser.sleep(2000);
                        }
                    });
                }
            })
        }
    }
    catch (e) {
        console.log('The reviewer failed to rejects the content, Exception');

    }
}

const creatorReviewComments = (inputToContentName) => {
    try {
        console.log('User  is trying to send the request changes for all upload content');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.drafts), 20000, "Creation page not loaded");
        content.drafts.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(inputToContentName);

        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.imageCard), 20000, "imagecard page not loaded");
        content.imageCard.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.reviewComments), 20000, "workspace page not loaded");
        content.reviewComments.click();
        browser.sleep(1000);

        //expect(content.commentsInput).isPresent().toBeTruthy();

        wait.waitForElementVisibility(content.commentBoxClose, 40000, "reviewComment is not available");
        content.commentBoxClose.click();
        browser.sleep(2000);

    }
    catch (e) {
        console.log('failed');

    }

}

const createOpenBatchWithEnrollMentEndDate = () => {

    try {
        console.log("User is trying to create open batch for a course");
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.addIcon);
        // browser.executeScript('window.scrollTo(0,280);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        //  browser.executeScript("arguments[0].scrollIntoView();", searchObj.addIcon);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropdown), 20000, "createbatch not available");
        searchObj.batchDropdown.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "createbatch not available");
        browser.sleep(4000);
        searchObj.addIcon.click();
        console.log("Click on Add Icon");
        browser.sleep(500);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, "nameOfBatch not available");
        searchObj.nameOfBatch.sendKeys("Batch");
        searchObj.aboutBatch.click();
        searchObj.aboutBatch.sendKeys(" Open Batch");
        console.log("Enter Batch Name");
        browser.sleep(500);
        //  searchObj.certificateNO.click();
        //  console.log("Click on certificate no");
        // browser.sleep(500);

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var sltDate = cred[33]['CourseName'];
        var sltEndDate = cred[33]['CourseDescription'];

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startdate), 20000, " startdate is not available");
        searchObj.startdate.click();
        console.log("Click on Start Date");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
        searchObj.startDateCalendar.click();
        browser.sleep(2000);
        searchObj.startDateCalendar.sendKeys(todaysDate);
        console.log("Select Start Date");
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrolmentDate), 20000, "sendDate is not available");
        searchObj.clickEnrolmentDate.click();
        browser.sleep(2000);
        searchObj.clickEnrolmentDate.sendKeys(sltEndDate);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDate), 20000, "sendDate is not available");
        searchObj.endDate.click();
        browser.sleep(2000);
        searchObj.endDate.sendKeys(sltEndDate);
        console.log("Select EndDate");
        browser.sleep(3000);





        //  browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkNoCertficate), 20000, "clkCheckBoxBacth not available");
        searchObj.clkNoCertficate.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkCheckBoxBacth), 20000, "clkCheckBoxBacth not available");
        searchObj.clkCheckBoxBacth.click();
        console.log("Batch Succesfully created  without Enrollment date");

        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.buttonCreate);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.buttonCreate), 20000, "clkCheckBoxBacth not available");
        searchObj.buttonCreate.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkExpandBatches), 20000, "clkExpandBatches not available");
        // searchObj.clkExpandBatches.click();
        browser.sleep(3000);
        expect(searchObj.assertCreatedBatch.isDisplayed()).toBeTruthy();
        browser.sleep(5000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewCourseDashBoard), 20000, "viewCourseDashBoard not available");
        // searchObj.viewCourseDashBoard.click();
        // browser.sleep(1000);
        //    browser.getCurrentUrl().contains(APP_URL+"/learn/course/do_");
        //  searchObj.batchCourseName.getText();

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkBatchDropdown), 20000, "sendDate is not available");
        searchObj.clkBatchDropdown.click();
        browser.sleep(2000);
        expect(searchObj.assertBatchDropdownOnGoing.isDisplayed()).toBeTruthy();
        expect(searchObj.assertBatchDropdownUpcoming.isDisplayed()).toBeTruthy();
        expect(searchObj.assertBatchDropdownExpired.isDisplayed()).toBeTruthy();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkBatchDropdown), 20000, "sendDate is not available");
        searchObj.clkBatchDropdown.click();
        browser.sleep(4000);
        expect(searchObj.assertStartAndEndDate.isDisplayed()).toBeTruthy();
        browser.sleep(3000);
        expect(searchObj.assertEnrollEndDateWithInBatchSec.isDisplayed()).toBeTruthy();
        browser.sleep(3000);


    }
    catch (Exception) {
        console.log("Failed to create open batch");
    }
}

const contentSearchInDraftAndUpdateChildNode = (corseNames) => {
    try {

        console.log("User able to search and edit draft")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard3), 40000, "imageCard is not available");
        resov.imageCard3.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addChild), 40000, "imageCard is not available");
        sanityPage.SanityElement().addChild.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().childTitleName), 40000, "imageCard is not available");
        sanityPage.SanityElement().childTitleName.sendKeys("ChildTitle");
        browser.sleep(2000);

        sanityPage.SanityElement().childDesc.sendKeys("ChildDesc");
        console.log("Child added ");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().childTopic), 40000, "Coursetopic is not available");
        sanityPage.SanityElement().childTopic.click();
        browser.sleep(4000);
        sanityPage.SanityElement().selectchildTopic.click();
        browser.sleep(4000);
        sanityPage.SanityElement().TopicSubmit.click();
        browser.sleep(1000);
        console.log("Topic is selected");

        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
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
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }
}

const validateEnrollmentEndDateNearJoinCourse = () => {

    try {
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(5000);
        expect(searchObj.assertEnrollEndDate.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
        expect(searchObj.assertEnrollEndDateWithYear.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
    }
    catch (Exception) {
        console.log("Failed to enroll for an open batch");
    }
}
const verifyCancelBtnInRejectAndPulbishPopup = (coursename) => {
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


    tpdPage.tpdPage().publishTheCourse.isPresent().then(function (result) {
        if (result) {

            tpdPage.tpdPage().publishTheCourse.click();
            browser.sleep(4000);
            tpdPage.tpdPage().clkNoBtnPublishPopup.click();
            browser.sleep(4000);

            expect(tpdPage.tpdPage().clkNoBtnPublishPopup.isPresent()).toEqual(false);
            browser.sleep(4000);

        } else {

            browser.refresh();
            browser.sleep(6000);
            browser.refresh();
            browser.sleep(8000);

            tpdPage.tpdPage().publishTheCourse.click();
            browser.sleep(4000);
            expect(tpdPage.tpdPage().clkNoBtnPublishPopup.isPresent()).toEqual(true);
            browser.sleep(4000);
            tpdPage.tpdPage().clkNoBtnPublishPopup.click();
            browser.sleep(4000);



        }
    });


    resov.clkRejectBtn.click();
    browser.sleep(4000);
    expect(tpdPage.tpdPage().cancelRejectButton.isPresent()).toEqual(true);
    browser.sleep(4000);
    tpdPage.tpdPage().cancelRejectButton.click();
    browser.sleep(4000);



}

const validateNcertCreatorInUpforReview = (coursename) => {
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
    content.searchedContentForPublish.getText().then(function (input) {
        console.log(input);
        expect(input).toEqual(coursename);
        console.log("NCERT creator submitted course for review is validated");
    })
}


const verifyRejectedContentInDraftSection = (inputToContentName) => {
    try {
        console.log('creator is trying to validate rejected content in draft section');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.drafts), 20000, "Creation page not loaded");
        content.drafts.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(inputToContentName);
        browser.sleep(4000);
        resov.imageCard.getText().then(function (input) {
            expect(input).toEqual(inputToContentName)
            console.log("Rejected content is verified successfully");
        })
    }
    catch (e) {
        console.log('The creator failed to validate the content in draft, Exception');
    }
}

const consumeCollection = (collectionName) => {

    try {

        console.log("verifying the course search by applying filters");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys(collectionName);
        searchObj.searchIcon.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.courseToBeClicked), 20000, "searchInput not available");
        searchObj.courseToBeClicked.click();
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log("Failed to consume collection content");
    }
}


const creatorReviewCommentsAndSendForReview = (inputToContentName) => {
    try {
        console.log('User  is trying to send the request changes for all upload content');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.drafts), 20000, "Creation page not loaded");
        content.drafts.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(inputToContentName);

        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.imageCard), 20000, "imagecard page not loaded");
        content.imageCard.click();
        browser.sleep(4000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.reviewComments), 20000, "workspace page not loaded");
        content.reviewComments.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.commentBoxClose, 40000, "reviewComment is not available");
        content.commentBoxClose.click();
        browser.sleep(2000);
        sanityPage.SanityElement().addChild.click();
        browser.sleep(2000);

        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkContent.click();
        browser.sleep(2000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(2000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(300);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(9000);

    }
    catch (e) {
        console.log('failed');

    }

}
const navigateToCourseAndSearchExpiredBatches = () => {

    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var expireDoid = cred[28]['Title'];

        console.log("To verify navigate to Course section, search course ");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys(expireDoid);
        browser.sleep(2000);
        searchObj.searchIcon.click();
        console.log("Clicked on the searchIcon");
        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseCard), 20000, "courseCard not available");
        searchObj.courseCard.click();
        browser.sleep(3000);
        expect(searchObj.assertNoBatchMessages.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
        console.log("Clicked on the course card");
        console.log("verified navigation to Course section, search course");
        return expireDoid;
    }
    catch (Err) {
        console.log("Failed on navigating to Course section, search course " + Err);
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

const publishCourseFromUpForReviewAndValidate = (coursename) => {
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


    tpdPage.tpdPage().publishTheCourse.isPresent().then(function (result) {
        if (result) {
            expect(content.name.isEnabled()).toBe(false).then(function () {
                console.log("name is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().childDesc.isEnabled()).toBe(false).then(function () {
                console.log("Description is disabled");
            })

            browser.sleep(300);
            browser.executeScript('window.scrollTo(0,800);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });
            browser.sleep(200);
            expect(sanityPage.SanityElement().selectBoardForcollection.isEnabled()).toBe(false).then(function () {
                console.log("selectBoardForcollection is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().audienceType.isPresent()).toBe(true).then(function () {
                console.log("audienceType is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().collMedium.isPresent()).toBe(true).then(function () {
                console.log("collMedium is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().collClass.isPresent()).toBe(true).then(function () {
                console.log("collClass is disabled");
            })
            browser.sleep(2000);
            expect(sanityPage.SanityElement().collSubj.isPresent()).toBe(true).then(function () {
                console.log("collSubj is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().Author.isEnabled()).toBe(false).then(function () {
                console.log("Author is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().attribution.isEnabled()).toBe(false).then(function () {
                console.log("attribution is disabled");
            })

            browser.sleep(300);
            expect(sanityPage.SanityElement().selectCopyRightYear.isEnabled()).toBe(false).then(function () {
                console.log("selectCopyRightYear is disabled");
            })
            browser.sleep(500);
            tpdPage.tpdPage().publishTheCourse.click();
            browser.sleep(4000);
            content.clickFirstChekcBox.click();
            browser.sleep(2000);
            content.clkcheckBoxPublising.each(function (input) {
                browser.sleep(200);
                input.click()
            });
            browser.sleep(2000);


        } else {

            browser.refresh();
            browser.sleep(6000);
            browser.refresh();
            browser.sleep(8000);
            expect(content.name.isEnabled()).toBe(false).then(function () {
                console.log("name is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().childDesc.isEnabled()).toBe(false).then(function () {
                console.log("Description is disabled");
            })

            browser.sleep(300);
            browser.executeScript('window.scrollTo(0,800);').then(function () {
                console.log('++++++SCROLLED Down+++++');
            });
            browser.sleep(200);
            expect(sanityPage.SanityElement().selectBoardForcollection.isEnabled()).toBe(false).then(function () {
                console.log("selectBoardForcollection is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().audienceType.isPresent()).toBe(true).then(function () {
                console.log("audienceType is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().collMedium.isPresent()).toBe(true).then(function () {
                console.log("collMedium is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().collClass.isPresent()).toBe(true).then(function () {
                console.log("collClass is disabled");
            })
            browser.sleep(2000);
            expect(sanityPage.SanityElement().collSubj.isPresent()).toBe(true).then(function () {
                console.log("collSubj is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().Author.isEnabled()).toBe(false).then(function () {
                console.log("Author is disabled");
            })
            browser.sleep(200);
            expect(sanityPage.SanityElement().attribution.isEnabled()).toBe(false).then(function () {
                console.log("attribution is disabled");
            })

            browser.sleep(300);
            expect(sanityPage.SanityElement().selectCopyRightYear.isEnabled()).toBe(false).then(function () {
                console.log("selectCopyRightYear is disabled");
            })
            browser.sleep(2000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().publishTheCourse), 20000, "workspace page not loaded");
            tpdPage.tpdPage().publishTheCourse.click();
            browser.sleep(4000);

            content.clickFirstChekcBox.click();
            browser.sleep(2000);
            content.clkcheckBoxPublising.each(function (input) {
                browser.sleep(200);
                input.click()
            });
            browser.sleep(2000);

        }
    });

    browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
    tpdPage.tpdPage().confirmForPublishBook.click();
    browser.sleep(6000);

}

const validateEndEnrollmentDate = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var do_id = cred[34]['CourseDescription'];
        browser.sleep(2000);
        console.log("User is trying to consume content");
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkLibraray), 20000, "clkLibraray  is not available");
        sanityPage.SanityElement().clkLibraray.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.sendKeys(do_id);
        browser.sleep(2000);
        sanityPage.SanityElement().clkSearchLib.click();
        browser.sleep(1000);
        content.courseCard.click();
        browser.sleep(2000);
        searchObj.assertenrollmentDate.getText().then(function (input) {
            console.log("enrollment date is" + input);
        })
        expect(searchObj.assertJoinCourse.isEnabled()).toBe(false).then(function () {
            console.log("join button is disabled");
        })
    }
    catch (Exception) {
        console.log("Failed to validate join course in expired batch.");
    }
}






const changeBMCValueAndVerifyAtHomeTab = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "Profile Icon not available");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkProfileIcon), 40000, "clkProfileIcon is not available");
        searchObj.clkProfileIcon.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.editBMC), 20000, "Edit Button Is Not Available");
        content.editBMC.click();

        browser.sleep(3000);
        browser.sleep(9000);
        wait.waitForElementVisibility(content.boardSelection, 30000);
        content.boardSelection.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(content.boardDropdown, 30000);
        content.boardDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.updateBoardValue, 30000);
        content.updateBoardValue.click();
        browser.sleep(11000);


        wait.waitForElementVisibility(content.mediumDropdown, 30000);
        content.mediumDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.selectmediumvalue2, 30000);
        content.selectmediumvalue2.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(content.gradeLevelDropDown, 30000);
        content.gradeLevelDropDown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.updateGradeLevelValue, 30000);
        content.updateGradeLevelValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.submitButtonForDropdowns, 30000);
        content.submitButtonForDropdowns.click();
        browser.sleep(4000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        wait.waitForElementVisibility(content.clkBackProfileBtn, 30000);
        content.clkBackProfileBtn.click();
        browser.sleep(5000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.HomeTab), 20000, "Home Page Is Not Opened ");
        expect(content.HomeTab.getText()).toEqual('Home');
        browser.sleep(3000);


        browser.sleep(3000);
        content.HomeTab.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.BoardUpdated), 20000, "Board Name Is Not Updated ");
        expect(content.BoardUpdated.getText()).toEqual('CBSE');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.MedUpdated), 20000, "Media Name Is Not Updated ");
        expect(content.MedUpdated.getText()).toEqual('Hindi');
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.LevelUpdated), 20000, "Level Name Is Not Updated ");
        expect(content.LevelUpdated.getText()).toEqual('Class 2');
        browser.sleep(3000);


    }

    catch (Exception) {
        console.log("Failed");
    }
}



const UpdateAndSendForReview = (corseNames) => {
    try {
        console.log("User able to search and edit draft")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
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
        browser.sleep(9000);
        for (let i = 1; i < 2; i++) {
            sanityPage.SanityElement().addChild.click();
            browser.sleep(4000);
            expect(sanityPage.SanityElement().addFromLibraryButton.isPresent()).toBeTruthy().then(function () {
                console.log("Library button is enabled");
            })
            browser.sleep(2000);
            sanityPage.SanityElement().childDesc.sendKeys("UpdateDescription");
            console.log("Child and Sibling node added " + i + " times");
        }
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().addContent.click();
        browser.sleep(3000);
        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log('User not able to search and edit draft');
    }
}

const verifyQRCodeSearchWorksFine = () => {

    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().EnterQRCode), 20000, "Enter QR Code is not available");
        browser.sleep(2000);
        tpdPage.tpdPage().EnterQRCode.click();
        tpdPage.tpdPage().EnterQRCode.sendKeys(cred[41]['Title']);


        browser.sleep(2000);
        tpdPage.tpdPage().searchQR.click();
        browser.sleep(4000);
        expect(sanityPage.SanityElement().clkLinkedContent.isDisplayed()).toBeTruthy();
        browser.sleep(2000);
        sanityPage.SanityElement().clkLinkedContent.click();
        browser.sleep(2000);

        console.log("Clicked on CourseCard");
        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        browser.sleep(6000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.clkFullScreen);
        browser.executeScript('window.scrollTo(0,350);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        console.log('Verified Linked Content Succsfully');

    }
    catch (err) {
        console.log(err);
    }
}

const VerifyThatClickingAddCertificate = () => {

    try {
        console.log("User is trying to create open batch for a course");

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropdown), 20000, "createbatch not available");
        searchObj.batchDropdown.click();
        browser.sleep(4000);

        browser.executeScript('window.scrollTo(0,280);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "createbatch not available");
        browser.sleep(4000);
        searchObj.addIcon.click();
        console.log("Click on Add Icon");
        browser.sleep(500);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, "nameOfBatch not available");
        searchObj.nameOfBatch.sendKeys("Batch");
        searchObj.aboutBatch.click();
        searchObj.aboutBatch.sendKeys(" Open Batch");
        console.log("Enter Batch Name");
        browser.sleep(500);


        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var sltDate = cred[33]['CourseName'];
        var sltEndDate = cred[33]['CourseDescription'];

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startdate), 20000, " startdate is not available");
        searchObj.startdate.click();
        console.log("Click on Start Date");
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
        searchObj.startDateCalendar.click();
        browser.sleep(2000);
        searchObj.startDateCalendar.sendKeys(sltDate);
        console.log("Select Start Date");
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clickEnrolmentDate), 20000, "sendDate is not available");
        searchObj.clickEnrolmentDate.click();
        browser.sleep(2000);
        searchObj.clickEnrolmentDate.sendKeys(sltEndDate);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.endDate), 20000, "sendDate is not available");
        searchObj.endDate.click();
        browser.sleep(2000);
        searchObj.endDate.sendKeys(sltEndDate);
        console.log("Select EndDate");
        browser.sleep(3000);


        searchObj.clkNoCertficate.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkCheckBoxBacth), 20000, "clkCheckBoxBacth not available");
        searchObj.clkCheckBoxBacth.click();
        console.log("Batch Succesfully created  without Enrollment date");



        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.buttonCreate);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.buttonCreate), 20000, "clkCheckBoxBacth not available");
        searchObj.buttonCreate.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.AddCertificate), 20000, "Add Certificate Is Not Opened ");
        content.AddCertificate.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.AddNewCertificate), 20000, "Add Certificate Is Not Opened ");
        content.AddNewCertificate.click();
        browser.sleep(3000);



        browser.wait(protractor.ExpectedConditions.visibilityOf(content.IssueCertificateTo), 20000, "Issue Certificate Is Not Opened ");
        expect(content.IssueCertificateTo.getText()).toEqual('Issue certificate to');
        console.log('Issue Certificate to Is displayed Succesfully');
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.defaultValue), 20000, "Progress Rule Displayed with default Value Is Not Correct ");
        expect(content.defaultValue.isDisplayed()).toBeTruthy();
        console.log('Progress Rule Displayed with default Value Succesfully');


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.plusIcon), 20000, "Plus Icon Is Not Displayed bellow Progress Rule ");
        expect(content.plusIcon.isDisplayed()).toBeTruthy();
        console.log('Plus Icon Is Displayed bellow Progress Rule Succesfully');

        browser.sleep(3000);

    }
    catch (Exception) {
        console.log("Failed to create open batch");
    }


}



const verifyThatUserIsAbleToEditScoreRuleAndView = () => {

    try {
        console.log("User is trying to create open batch for a course");

        browser.executeScript('window.scrollTo(0,280);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.plusIcon), 20000, "'+' Icon Is Not Displayed bellow Progress Rule ");
        expect(content.plusIcon.isDisplayed()).toBeTruthy();
        console.log(' Plus Icon Displayed bellow Progress Rule Succesfully');
        browser.sleep(3000);
        content.plusIcon.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.bestAttemptScore), 20000, "Best attempt score Is Not Displayed");
        expect(content.bestAttemptScore.isDisplayed()).toBeTruthy();
        console.log('Best attempt score Is Displayed ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.scoreRule), 20000, "Score Rule Is Not Displayed ");
        expect(content.scoreRule.getText()).toEqual('Score Rule');
        console.log('Score Rule to Is Displayed ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.greaterThan), 20000, "Greater than or Equal to Is Not Displayed ");
        expect(content.greaterThan.getText()).toEqual('Greater than or equal to');
        console.log('Greater than or equal to Is Displayed ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectDropDown), 20000, "Dropdown Is Not Displayed");
        expect(content.selectDropDown.isDisplayed()).toBeTruthy();
        console.log('Dropdown Is Displayed ');
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log("Failed to create open batch");
    }


}


const publishCourseFromUpForReview2 = (coursename) => {
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


    tpdPage.tpdPage().publishTheCourse.isPresent().then(function (result) {
        if (result) {

            tpdPage.tpdPage().publishTheCourse.click();

            browser.sleep(5000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
            tpdPage.tpdPage().confirmForPublishBook.click();
            browser.sleep(6000);

        } else {

            browser.refresh();
            browser.sleep(6000);
            browser.refresh();
            browser.sleep(8000);

            tpdPage.tpdPage().publishTheCourse.click();

            browser.sleep(5000);
            browser.wait(protractor.ExpectedConditions.visibilityOf(tpdPage.tpdPage().confirmForPublishBook), 20000, "workspace page not loaded");
            tpdPage.tpdPage().confirmForPublishBook.click();
            browser.sleep(6000);
        }
    });
}



const addChildAndSiblingNode = (corseNames) => {
    try {

        console.log("User able to search and edit content")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "drafts is not available");
        resov.drafts.click();
        browser.sleep(3000);
        console.log('User successfully navigated to draft');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(corseNames);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(5000);

        expect(sanityPage.SanityElement().addChild.isPresent()).toBeTruthy().then(function () {
            sanityPage.SanityElement().addChild.click();
            console.log("Child Node added");
            browser.sleep(200);
            sanityPage.SanityElement().childDesc.sendKeys("ChildDesc");
            browser.sleep(100);
        })
        browser.sleep(1000);
        expect(sanityPage.SanityElement().addsibling.isPresent()).toBeTruthy().then(function () {

            console.log("Sibling Node added ");
            sanityPage.SanityElement().addsibling.click();
            browser.sleep(200);
            sanityPage.SanityElement().addChild.click();
            browser.sleep(1000);
            sanityPage.SanityElement().childDesc.sendKeys("ChildDesc");
            browser.sleep(3000);
        })
        browser.sleep(200);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
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
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}

const verifyQuestionSet = () => {
    try {
        console.log("User able to search and edit content")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.assertquestionSet), 20000, "workspace page not loaded");
        expect(content.assertquestionSet.isPresent()).toBe(true).then(function () {
            content.assertquestionSet.getText().then(function (input) {
                console.log(input + "is validated.");
            })
        })
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.assertquestionSet), 20000, "workspace page not loaded");
        resov.clickQuestionSet.click();
        browser.sleep(11000);
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.questionSetsummaryType), 20000, "workspace page not loaded");
        content.questionSetsummaryType.click();
        browser.sleep(11000);
        content.summaryTypeValues.getText().then(function (input) {
            console.log(input)
        })
    }

    catch (Exception) {
        console.log('User not able to validate QuestionSet');
    }
}

const createOpenBatchWithEnableDiscussion = () => {

    try {
        console.log("User is trying to create open batch for a course");
        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.batchDropdown);
        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropdown), 20000, "createbatch not available");
        searchObj.batchDropdown.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "createbatch not available");
        browser.sleep(1000);
        searchObj.addIcon.click();
        console.log("Click on Add Icon");
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, "nameOfBatch not available");
        searchObj.nameOfBatch.sendKeys("Batch");
        searchObj.aboutBatch.click();
        searchObj.aboutBatch.sendKeys(" Open Batch");
        console.log("Enter Batch Name");
        browser.sleep(5000);
        expect(searchObj.assertEnableDissInBatchpopUp.isPresent()).toBe(true).then(function () {
            searchObj.assertEnableDissInBatchpopUp.getText().then(function (input) {
                console.log(input + " is validated");

            })
        })
        browser.sleep(2000);
        searchObj.yesRadbtnForBatchPopupdisc.click();

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var sltDate = cred[33]['CourseName'];

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startdate), 20000, " startdate is not available");
        searchObj.startdate.click();
        console.log("Click on Start Date");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
        searchObj.startDateCalendar.click();
        searchObj.startDateCalendar.sendKeys(sltDate);
        console.log("Select Start Date");
        browser.sleep(3000);

        searchObj.clkNoCertficate.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkCheckBoxBacth), 20000, "clkCheckBoxBacth not available");
        searchObj.clkCheckBoxBacth.click();
        console.log("Batch Succesfully created  without Enrollment date");

        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.buttonCreate);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.buttonCreate), 20000, "clkCheckBoxBacth not available");
        searchObj.buttonCreate.click();
        browser.sleep(3000);

        browser.sleep(3000);
        expect(searchObj.assertCreatedBatch.isDisplayed()).toBeTruthy();
        browser.sleep(4000);

    }
    catch (Exception) {
        console.log("Failed to create open batch with enable discussions");
    }
}

// const verifySwitchToJoyfulTheme = () => {

//     console.log("user is trying to create a course")
//         browser.sleep(1000);
//         browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
//         content.headerDropdown.click();

//         browser.sleep(3000);
//                 expect(searchObj.clkSwithToClassicTheme.isDisplayed()).toBeTruthy();
//                 searchObj.clkSwithToClassicTheme.click();
//                 browser.sleep(3000);
//                 browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdownForClassTheme), 20000, "headerDropdown page not loaded");
//                 content.headerDropdownForClassTheme.click();
//                 browser.sleep(4000);
//                         expect(searchObj.clkSwitchToJoyFullTheme.isDisplayed()).toBeTruthy();
//         browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkSwitchToJoyFullTheme), 40000, "myGroup icon not available");
//         searchObj.clkSwitchToJoyFullTheme.click();
//         browser.sleep(2000);
//         browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
//         content.headerDropdown.click();
//         browser.sleep(2000);
//         expect(searchObj.clkSwithToClassicTheme.isDisplayed()).toBeTruthy();
// }

const consumeWithForum = () => {

    try {
        console.log("User is trying to use forum");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.joinCourse), 20000, "generalDiscussion is not available");
        content.joinCourse.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "generalDiscussion is not available");
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.joinCourse), 20000, "generalDiscussion is not available");
        searchObj.doNotShare.click();

        browser.sleep(3000);
        expect(sanity.forum.isPresent()).toBe(true).then(function () {
            browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.forum), 20000, "Forum not available");
            sanity.forum.click();
            browser.sleep(2000);
        })
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
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().myDiscussions), 20000, "my discussion is not available");
        sanityPage.SanityElement().myDiscussions.click();
        browser.sleep(2000);

        //browser.executeScript("arguments[0].scrollIntoView();", searchObj.batchDropdown);
        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
    }
    catch (Exception) {
        console.log("Failed to create");
    }
}
const verifySwitchToJoyfulTheme = () => {

    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
    searchObj.profileButton.click();
    browser.sleep(3000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkSwithToClassicTheme), 40000, "myGroup icon not available");
    searchObj.clkSwithToClassicTheme.click();
}



const ViewTheFilterOptionsWhileAddingActivity = () => {
    try {
        console.log('user is able to create myGroup,add member and addActivity');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectGroup1), 40000, "Cross button not available");
        searchObj.selectGroup1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addActivityButton), 40000, "addActivityButton not available");
        searchObj.addActivityButton.click();
        browser.sleep(5000);

        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });


        expect(searchObj.explanationContent.isDisplayed()).toBeTruthy();
        console.log("Explanation Content Is Displayed ");

        expect(searchObj.learnngModule.isDisplayed()).toBeTruthy();
        console.log("Learning Module Is Displayed ");

        expect(searchObj.practiceQuestionSet.isDisplayed()).toBeTruthy();
        console.log("Practice Question Set  Is Displayed ");

        expect(searchObj.PDFTextBook.isDisplayed()).toBeTruthy();
        console.log("PDF Text Books Is Displayed ");

        expect(searchObj.teachingResource.isDisplayed()).toBeTruthy();
        console.log("Teaching Resource Is Displayed ");


        expect(searchObj.digitalTextBooks.isDisplayed()).toBeTruthy();
        console.log("Digital Text Books Is Displayed ");

        expect(searchObj.contentPlayList.isDisplayed()).toBeTruthy();
        console.log("Content PlayList Is Displayed ");

        expect(searchObj.tvClass.isDisplayed()).toBeTruthy();
        console.log("TV Class Is Displayed ");

        expect(searchObj.earlierYearPapers.isDisplayed()).toBeTruthy();
        console.log("Earlier Year Board Exam Paper Is Displayed ");

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.SelectCourseByGroup), 40000, "SelectCourseByGroup not available");
        sanity.SelectCourseByGroup.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.FilterByOption), 40000, "Filter By Option Is not available");
        expect(searchObj.FilterByOption.isDisplayed()).toBeTruthy();
        console.log("User Can View Filter By Option While Adding Activity");
        searchObj.FilterByOption.click();
        browser.sleep(3000);

        expect(searchObj.FilterIconLeft.isDisplayed()).toBeTruthy();
        console.log("User Can View Filter By Option On The Left Hand Side On Click Filter By Option");
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });



        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectBoard), 40000, "Select Board Dropdown not available");
        searchObj.selectBoard.click();
        browser.sleep(3000);

        content.updateBoardValue.click();
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectMedium), 40000, "Select Medium Dropdown not available");
        searchObj.selectMedium.click();
        browser.sleep(3000);


        content.selectMediumValue1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectClass), 40000, "Select Class Dropdown Is not available");
        searchObj.selectClass.click();
        browser.sleep(3000);

        content.selecClassValue1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.ResetValue), 40000, "Reset Value Button Is not available");
        searchObj.ResetValue.click();
        browser.sleep(3000);


    }

    catch (Exception) {
        console.log("Failed to create open batch");
    }


}



const verifyCloseOptionMusteSeenAtSearchBar = () => {
    try {
        console.log('user is able to create myGroup,add member and addActivity');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectGroup1), 40000, "Select Group1 Is Not available");
        searchObj.selectGroup1.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        expect(searchObj.CrossOption.isDisplayed()).toBeTruthy();
        console.log("Cross Option Displayed ");
        browser.sleep(3000);

        searchObj.searchWithinGroup.sendkeys("group1");
        browser.sleep(3000);

        searchObj.CrossOption.click();
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log("Failed to View Cross Option On  Search Bar");
    }
}


const verifyCommunicationConsole = () => {
    try {

        console.log('user is able to create View Communication Console Tab');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.communicationConsole), 40000, "Communication Console Tab Is not available");
        browser.sleep(3000);

        expect(searchObj.communicationConsole.isDisplayed()).toBeTruthy();
        console.log("Communication Console Tab Is Displayed Successfully");
        browser.sleep(3000);


    }
    catch (Exception) {
        console.log("Failed To Verify Communication Console");
    }
}


const verifyLastUpdatedDateAndTimeOnGroup = () => {
    try {
        console.log('user is able to create myGroup,add member and addActivity');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton), 40000, "Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName), 40000, "Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription), 40000, "Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox), 40000, "Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton1), 40000, "CreateGroup submit button not available");
        searchObj.createGroupSubmitButton1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addActivityButton), 40000, "Add activity button not available");
        searchObj.addActivityButton.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectCourse1), 40000, "Course not available");
        searchObj.selectCourse1.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(2000);

        browser.actions().dragAndDrop(searchObj.courseToAddInGroup, searchObj.courseToAddInGroup).mouseUp().perform();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addToGroupButton), 40000, "Add to Group Button not available");
        searchObj.addToGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully), 40000, "Successful Text not available");
        var successfulText = searchObj.addedSuccessfully.getText();
        expect((successfulText).isDisplayed()).toBe(true);
        browser.sleep(1000);


        searchObj.course1.click();
        browser.sleep(3000);
        searchObj.activityDashBoard.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.LastUpdate), 40000, "Last Update Information Is not available");
        expect(searchObj.LastUpdate.isDisplayed()).toBe(true);
        console.log('Last Updated Information Is Available To The Group Admin  ');

    }
    catch (Exception) {
        console.log('User Is Not Able to Create and View Last Updated Information To The Group Admin');
    }
}

const dwnldAndGenerateQRinBookFromDraft = (bookName) => {
    try {

        console.log("User able to search and edit drafted content")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workspaceHeaderDropDwn), 20000, "headerDropdown page not loaded");
        content.workspaceHeaderDropDwn.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.drafts), 40000, "allMyContent is not available");
        resov.drafts.click();
        console.log('User successfully navigated to All My Content');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(bookName);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
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
        sanityPage.SanityElement().clkDropDownQrcode.click();
        browser.sleep(300);
        sanityPage.SanityElement().clkDownloadQrcode.click();
        browser.sleep(300)
        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
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
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}



const dwnldAndGenerateQRinBookFromPublish = (bookName) => {
    try {

        console.log("User able to search and edit drafted content")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workspaceHeaderDropDwn), 20000, "headerDropdown page not loaded");
        content.workspaceHeaderDropDwn.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.Published), 40000, "allMyContent is not available");
        resov.Published.click();
        console.log('User successfully navigated to All My Content');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(bookName);
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkDropDownQrcode), 20000, "clkDropDownQrcode not available");
        sanityPage.SanityElement().clkDropDownQrcode.click();
        browser.sleep(300);
        sanityPage.SanityElement().clkGenerateQrCode4.click();
        browser.sleep(300);
        sanityPage.SanityElement().QrCodeValueEnter.click();
        browser.sleep(100);
        sanityPage.SanityElement().QrCodeValueEnter.sendKeys('3');
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkReqestQrCode), 20000, "clkReqestQrCode not available");
        sanityPage.SanityElement().clkReqestQrCode.click();
        browser.sleep(200);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().QRcodeTostrMsg), 20000, "QRcodeTostrMsg not available");
        expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
        console.log('QR Code Generated Succesfully');
        browser.sleep(3000);
        sanityPage.SanityElement().clkDropDownQrcode.click();
        browser.sleep(300);
        sanityPage.SanityElement().clkDownloadQrcode2.click();
        browser.sleep(300)
        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);
        sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
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
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(3000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(3000);
        //browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.NewCoursesubmitButton), 20000,"submit for review Button not loaded");
        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('User not able to search and edit draft');

    }

}


const verifyBookDetailsInSubmittedForReview = () => {
    try {

        console.log("User able validate content in submitted for review")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workspaceHeaderDropDwn), 20000, "headerDropdown page not loaded");
        content.workspaceHeaderDropDwn.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.submittedForReview), 40000, "allMyContent is not available");
        resov.submittedForReview.click();
        console.log('User successfully navigated to All My Content');

        browser.wait(protractor.ExpectedConditions.visibilityOf(resov.imageCard), 40000, "imageCard is not available");
        resov.imageCard.click();
        console.log('User should be able to click on the drafts section to see draft contents')
        browser.sleep(9000);
        (sanityPage.SanityElement().assertQrCodeRequiredField.isDisplayed()).toBeTruthy();
        (sanityPage.SanityElement().assertQrCode.isDisplayed()).toBeTruthy();

    }
    catch (Exception) {
        console.log('User not able to validate in submitted for review');
    }

}

const verifyDownlaodAsCSVMustBeDisplayedOnTheDashboard = () => {
    try {
        console.log('user is able to create myGroup,add member and addActivity');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton), 40000, "Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName), 40000, "Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription), 40000, "Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox), 40000, "Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton1), 40000, "CreateGroup submit button not available");
        searchObj.createGroupSubmitButton1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addActivityButton), 40000, "Add activity button not available");
        searchObj.addActivityButton.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectCourse1), 40000, "Course not available");
        searchObj.selectCourse1.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(2000);

        browser.actions().dragAndDrop(searchObj.courseToAddInGroup, searchObj.courseToAddInGroup).mouseUp().perform();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addToGroupButton), 40000, "Add to Group Button not available");
        searchObj.addToGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully), 40000, "Successful Text not available");
        var successfulText = searchObj.addedSuccessfully.getText();
        expect((successfulText).isDisplayed()).toBe(true);
        browser.sleep(1000);


        searchObj.course1.click();
        browser.sleep(3000);
        searchObj.activityDashBoard.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.downloadAsCSV), 40000, "Downlaod as CSV Is Not Displayed ");
        expect(searchObj.downloadAsCSV.isDisplayed()).toBe(true);
        console.log('Downlaod as CSV Is Displayed on the Dashboard  ');

    }
    catch (Exception) {
        console.log('User Is Not Able to Display Downlaod as CSV On the Dashboard');
    }
}
const verifyDownlaodedCSVFile = () => {
    try {
        browser.sleep(5000);
        var filename = getExcelPath.ConfigurePath().downloadLocalPath + "_Course batch.csv";
        console.log(filename);
        var fs = require('fs');
        searchObj.downloadAsCSV.click();
        browser.driver.wait(function () { return fs.existsSync(filename); }, 3000).then(function () {
            console.log('Admin Is Able To Download CSV File')
        });
    }
    catch (Exception) {
        console.log('Unable To Download CSV File');
    }
}

const verifyAllTheGroupMembers = () => {
    try {

        console.log('user is able to create myGroup,add member and addActivity');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(5000);

        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.AdminMember), 40000, "Admin Member Is Not Displayed ");
        expect(searchObj.AdminMember.isDisplayed()).toBe(true);
        console.log('Admin Member Is Displayed on the Dashboard  ');

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.member1), 40000, "Admin Member Is Not Displayed ");
        // expect(searchObj.member1.isDisplayed()).toBe(true);
        // console.log('Members Of Groups Displayed on the Dashboard  ');
        // browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.member2), 40000, "Admin Member Is Not Displayed ");
        expect(searchObj.member2.isDisplayed()).toBe(true);
        console.log('Members Of Groups Displayed on the Dashboard  ');
        browser.sleep(2000);


    }
    catch (Exception) {
        console.log('Unable To Verify All The Members Of Group');
    }
}

const viewTheContentOnCommunicationConsole = () => {
    try {
        browser.sleep(2000);
        searchObj.communicationConsole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addNewButton), 40000, "ADD NEW  Button Is Not Displayed ");
        expect(searchObj.addNewButton.isDisplayed()).toBe(true);
        console.log('ADD NEW Button is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.conversation), 40000, "Conversations Is Not Displayed ");
        expect(searchObj.conversation.isDisplayed()).toBe(true);
        console.log('Conversation is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameHeading), 40000, "Name Heading Is Not Displayed ");
        expect(searchObj.nameHeading.isDisplayed()).toBe(true);
        console.log('Name Heading is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameValue1), 40000, "Name Value1 Is Not Displayed ");
        expect(searchObj.nameValue1.isDisplayed()).toBe(true);
        console.log('Name Value1 is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.statusHeading), 40000, "Status Heading Is Not Displayed ");
        expect(searchObj.statusHeading.isDisplayed()).toBe(true);
        console.log('Status Heading is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.statusValue1), 40000, "Status Value1 Is Not Displayed ");
        expect(searchObj.statusValue1.isDisplayed()).toBe(true);
        console.log('Status Value1 is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.descriptionHeading), 40000, "Description Heading Is Not Displayed ");
        expect(searchObj.descriptionHeading.isDisplayed()).toBe(true);
        console.log('Description Heading is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.descriptionValue1), 40000, "Description Value1 Is Not Displayed ");
        expect(searchObj.descriptionValue1.isDisplayed()).toBe(true);
        console.log('Description Value1 is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startingmsgHeading), 40000, "Starting Message Heading Is Not Displayed ");
        expect(searchObj.startingmsgHeading.isDisplayed()).toBe(true);
        console.log('Starting Message Heading is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startingmsgValue1), 40000, "Starting Message Value1 Is Not Displayed ");
        expect(searchObj.startingmsgValue1.isDisplayed()).toBe(true);
        console.log('Starting Message Value1 is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.botURLHeading), 40000, "BOT URL Heading Is Not Displayed ");
        expect(searchObj.botURLHeading.isDisplayed()).toBe(true);
        console.log('BOT URL Heading is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.botURLValue1), 40000, "BOT URL Value1 Is Not Displayed ");
        expect(searchObj.botURLValue1.isDisplayed()).toBe(true);
        console.log('BOT URL Value1 is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.botIDHeading), 40000, "BOT ID Heading Is Not Displayed ");
        expect(searchObj.botIDHeading.isDisplayed()).toBe(true);
        console.log('BOT ID Heading is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.botIDValue1), 40000, "BOT ID Value1 Is Not Displayed ");
        expect(searchObj.botIDValue1.isDisplayed()).toBe(true);
        console.log('BOT ID Value1 is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.actionHeading), 40000, "ACTION Heading Is Not Displayed ");
        expect(searchObj.actionHeading.isDisplayed()).toBe(true);
        console.log('ACTION Heading is Viewed Successfully On Communication Console  ');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.actionKebab1), 40000, "ACTION Value1 Is Not Displayed ");
        expect(searchObj.actionKebab1.isDisplayed()).toBe(true);
        console.log('ACTION Value1 is Viewed Successfully On Communication Console  ');


    }
    catch (Exception) {
        console.log('Unable To View Content On Communication Console')
    }
}
const verifyUpdateGroupButtonOnEditGroupDetails = () => {
    try {
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkHamburgerMenuTopic), 20000, "clkHamburgerMenuTopic is not available");
        sanityPage.SanityElement().clkHamburgerMenuTopic.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkHamburgerMenuTopicEdit), 20000, "clkHamburgerMenuTopicEdit is not available");
        sanityPage.SanityElement().clkHamburgerMenuTopicEdit.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.UpdateGroup), 40000, "Update Group Not Displayed ");
        expect(searchObj.UpdateGroup.isDisplayed()).toBe(true);
        console.log('Update Group Can Seen Successfully Instead Of Submit Button ');
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log("Unable to Verify Update Group Button ");
    }
}

const openExistingGroup = () => {
    try {

        console.log('user is able to Open Existing Group');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(5000);

        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(3000);


    }
    catch (Exception) {
        console.log("Unable To Open Existing Group");
    }
}


const deleteExistingGroup = () => {
    try {

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })

        console.log('Delete Existing Group ');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkMenugrps), 40000, "Click Menu Group not available");
        searchObj.clkMenugrps.click();
        browser.sleep(3000);
        searchObj.deleteGroup.click();
        browser.sleep(3000);
        searchObj.clkDeleteGrpsPopup.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log("Unable To Delete The Existing Group");
    }
}

const verifyDeletedGroupNotAvailable = () => {
    try {

        console.log('verify user is able to Delete the Existing Group');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(3000);

        expect(searchObj.CreatedGroup.isPresent()).toBe(false).then(function () {
            console.log("User Is Not Displaying Group After Deleted by Admin ");
        })

    }
    catch (Exception) {
        console.log("Unble to delete Group From the User");
    }
}

const validateLoginPopup = () => {
    try {


        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(4000);

        expect(searchObj.assertLoginInPoup.isDisplayed()).toBe(true);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertLoginInPoup), 40000, "Click Menu Group not available");
        searchObj.assertLoginInPoup.click();
        browser.sleep(3000);

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '1', 'Creator');
        browser.sleep(4000);

        wait.waitForElementVisibility(content.userName, 20000);
        content.userName.sendKeys(cred[0]['Username']);
        browser.sleep(100);
        content.password.sendKeys(cred[0]['Password']);
        browser.sleep(100);

        content.login.click();
        browser.sleep(6000);
        expect(searchObj.assertCourseDetailsAfterLogin.isDisplayed()).toBe(true);
        browser.sleep(2000);


    }
    catch (Exception) {
        console.log("Unable To Delete The Existing Group");
    }
}

const verifyThatAskAQuestionIsReplacedWithDiscussionTopic = () => {
    try {

        console.log('user is able to Open Group and Discussion Forum');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkMenugrps), 40000, "Menu Groups not available");
        searchObj.clkMenugrps.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enableDiscussionsOpt), 40000, "Enable Discussion Option not available");
        searchObj.enableDiscussionsOpt.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewActivities), 40000, "View Activities not available");
        searchObj.viewActivities.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkDiscussionForum), 40000, "Discussion Forum not available");
        searchObj.clkDiscussionForum.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkGeneralDiscussion1), 40000, "General Discussion not available");
        searchObj.clkGeneralDiscussion1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDiscussion), 40000, "Start Discussion Button not available");
        searchObj.startDiscussion.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.discussionTopic), 40000, "Discussion Topic Not Displayed ");
        expect(searchObj.discussionTopic.isDisplayed()).toBe(true);
        console.log('Ask a Question is replaced with Discussion Topic in Start Discussion Screen ');
        console.log('Discussion Topic Is Displayed On Start Discussion Screen ');
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log("Unble Display Discussion Topic in Start Discussion Screen");
    }
}

const disableDiscussionForumOption = () => {
    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.buttonCancel), 40000, "Cancel not available");
        searchObj.buttonCancel.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.navigateBack), 40000, "Back Button not available");
        searchObj.navigateBack.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.navigateBack), 40000, "Back Button not available");
        searchObj.navigateBack.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkMenugrps), 40000, "Menu Groups not available");
        searchObj.clkMenugrps.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.disableDiscussionsOpt), 40000, "Disable Options not available");
        searchObj.disableDiscussionsOpt.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.confirmDisable), 40000, "Confirm Disable Button not available");
        searchObj.confirmDisable.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log("Unable to Disable Discussion Forum Option");
    }
}

const verifySubmitButtonOnDiscussionTopic = () => {
    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterDiscussionTopic), 40000, "Enter Discussion Topic not available");
        searchObj.enterDiscussionTopic.sendKeys('Demo1234');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterQuestionOrIdea), 40000, "Enter Question Or Idea not available");
        searchObj.enterQuestionOrIdea.sendKeys('Demo12345678');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitOnDiscussionTopic), 40000, "Submit Button Not Displayed ");
        expect(searchObj.submitOnDiscussionTopic.isDisplayed()).toBe(true);
        console.log('Submit Button Is Displayed On Discussion Topic ');
        browser.sleep(3000);


    }
    catch (Exception) {
        console.log("Submit Button Is Not Displayed On Discussion Topic");
    }
}

const userIsAbleToCreateAndVerifyGeneralDiscussionTopics = () => {
    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitOnDiscussionTopic), 40000, "Submit Button Not Displayed ");
        searchObj.submitOnDiscussionTopic.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createdTopic), 40000, "Created Topic Is Not Displayed ");
        expect(searchObj.createdTopic.isDisplayed()).toBe(true);
        console.log('Created Topic Is Displayed On Discussion Topic ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.generalDiscussion), 40000, "General Discussion Topic Is Not Displayed ");
        expect(searchObj.generalDiscussion.isDisplayed()).toBe(true);
        console.log('General Discussion Topic Is Displayed On Discussion Topic ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.voteIcon), 40000, "Votes Icon Not Displayed ");
        expect(searchObj.voteIcon.isDisplayed()).toBe(true);
        console.log('Votes Icon Is Displayed On Discussion Topic ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.navigateBack), 40000, "Back Button not available");
        searchObj.navigateBack.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.navigateBack), 40000, "Back Button not available");
        searchObj.navigateBack.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkMenugrps), 40000, "Menu Groups not available");
        searchObj.clkMenugrps.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.disableDiscussionsOpt), 40000, "Disable Options not available");
        searchObj.disableDiscussionsOpt.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.confirmDisable), 40000, "Confirm Disable Button not available");
        searchObj.confirmDisable.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log("Unable To Create And Verify Discussion Topic");
    }
}

const navigateToGeneralDiscussionPage = () => {
    try {
        console.log('user is able to Open Group and Discussion Forum');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkMenugrps), 40000, "Menu Groups not available");
        searchObj.clkMenugrps.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enableDiscussionsOpt), 40000, "Enable Discussion Option not available");
        searchObj.enableDiscussionsOpt.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewActivities), 40000, "View Activities not available");
        searchObj.viewActivities.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkDiscussionForum), 40000, "Discussion Forum not available");
        searchObj.clkDiscussionForum.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log("Unable To Navigate General Discussion Forum Page ");
    }
}


const verifyLoadingAnimationAfterClickingCloseButton = () => {
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

        browser.sleep(2000);
        sanityPage.SanityElement().clkCloseIconDF.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.animationPage), 40000, "Animation Page Is  Not Loaded");
        expect(searchObj.animationPage.isDisplayed()).toBe(true);
        console.log('Animation Page Is Loaded Successfully After Clicking Close Button  ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
        sanity.disableDiscussionIcon.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
        sanity.disablediscussionButton.click();
        browser.sleep(2000);
    } catch (Exception) {
        console.log("Unable To Load Animation Page After Clicking Close Button On Discussion Forum ");
    }
}

const verifyLoadingAnimationAfterClickingBackButton = () => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.navigateBack), 40000, "Back Button not available");
        searchObj.navigateBack.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.animationPage), 40000, "Animation Page Is  Not Loaded");
        expect(searchObj.animationPage.isDisplayed()).toBe(true);
        console.log('Animation Page Is Loaded Successfully After Clicking Back Button  ');
        browser.sleep(3000);



        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
        sanity.groupActions.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disableDiscussionIcon), 40000, "Disablediscussion Icon is not available");
        sanity.disableDiscussionIcon.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.disablediscussionButton), 40000, "Disablediscussion Button is not available");
        sanity.disablediscussionButton.click();
        browser.sleep(2000);
    } catch (Exception) {
        console.log("Unable To Load Animation Page After Clicking Back Button On Discussion Forum ");
    }
}



const VerifyThereAreNoTagsAvailableMessageOnPortal = () => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkTagOption), 40000, "Tag Option not available");
        searchObj.clkTagOption.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.tagPageAnimation), 40000, "Animation Page Is  Not Loaded");
        expect(searchObj.tagPageAnimation.isDisplayed()).toBe(true);
        console.log('Animation Page Is Loaded Successfully On Clicking Tag Option');
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.noTagsAvailableMsg), 40000, "No Tags Available Message Is Not Displayed");
        expect(searchObj.noTagsAvailableMsg.isDisplayed()).toBe(true);
        console.log('No Tags Available Message Is Displayed Successfully');
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(3000);
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


    } catch (Exception) {
        console.log("Unable To verify No Tags Available Display Message On Portal ")
    }
}


const VerfiyThatPlaceholderBelowDiscussionTopic = () => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkGeneralDiscussion1), 40000, "General Discussion not available");
        searchObj.clkGeneralDiscussion1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDiscussion), 40000, "Start Discussion Button not available");
        searchObj.startDiscussion.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.discussionTopic), 40000, "Discussion Topic Not Displayed ");
        expect(searchObj.discussionTopic.isDisplayed()).toBe(true);
        console.log('Ask a Question is replaced with Discussion Topic in Start Discussion Screen ');
        console.log('Discussion Topic Is Displayed On Start Discussion Screen ');
        browser.sleep(3000);

        expect(searchObj.assertDiscussionTopic.isDisplayed()).toBe(true);
        console.log('Placeholder below Discussion Topic Displays “Type here (minimum 8 characters)”');
        browser.sleep(3000);


        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.buttonCancel), 40000, "Cancel not available");
        searchObj.buttonCancel.click();
        browser.sleep(3000);

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


    } catch (Exception) {
        console.log("Unable To verify No Tags Available Display Message On Portal ")
    }
}

const verifyUseMustBeDisplayedWithListOfDiscussions = () => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.viewIcon), 40000, "General Discussion not available");
        searchObj.viewIcon.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDiscussion), 40000, "Start Discussion Button not available");
        searchObj.startDiscussion.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.discussionTopic), 40000, "Discussion Topic Not Displayed ");
        expect(searchObj.discussionTopic.isDisplayed()).toBe(true);
        console.log('Ask a Question is replaced with Discussion Topic in Start Discussion Screen ');
        console.log('Discussion Topic Is Displayed On Start Discussion Screen ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterDiscussionTopic), 40000, "Enter Discussion Topic not available");
        searchObj.enterDiscussionTopic.sendKeys('Demo1234');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterQuestionOrIdea), 40000, "Enter Question Or Idea not available");
        searchObj.enterQuestionOrIdea.sendKeys('Demo12345678');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitOnDiscussionTopic), 40000, "Submit Button Not Displayed ");
        expect(searchObj.submitOnDiscussionTopic.isDisplayed()).toBe(true);
        console.log('Submit Button Is Displayed On Discussion Topic ');
        searchObj.submitOnDiscussionTopic.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createdTopic), 40000, "Created Topic Is Not Displayed ");
        expect(searchObj.createdTopic.isDisplayed()).toBe(true);
        console.log('Created Topic Is Displayed On Discussion Topic ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.generalDiscussion), 40000, "General Discussion Topic Is Not Displayed ");
        expect(searchObj.generalDiscussion.isDisplayed()).toBe(true);
        console.log('General Discussion Topic Is Displayed On Discussion Topic ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.voteIcon), 40000, "Votes Icon Not Displayed ");
        expect(searchObj.voteIcon.isDisplayed()).toBe(true);
        console.log('Votes Icon Is Displayed On Discussion Topic ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDiscussion), 40000, "Start Discussion Button not available");
        searchObj.startDiscussion.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.discussionTopic), 40000, "Discussion Topic Not Displayed ");
        expect(searchObj.discussionTopic.isDisplayed()).toBe(true);
        console.log('Ask a Question is replaced with Discussion Topic in Start Discussion Screen ');
        console.log('Discussion Topic Is Displayed On Start Discussion Screen ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterDiscussionTopic), 40000, "Enter Discussion Topic not available");
        searchObj.enterDiscussionTopic.sendKeys('Demo5678');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterQuestionOrIdea), 40000, "Enter Question Or Idea not available");
        searchObj.enterQuestionOrIdea.sendKeys('Demo12345678');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitOnDiscussionTopic), 40000, "Submit Button Not Displayed ");
        expect(searchObj.submitOnDiscussionTopic.isDisplayed()).toBe(true);
        console.log('Submit Button Is Displayed On Discussion Topic ');
        searchObj.submitOnDiscussionTopic.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createdTopic2), 40000, "Created Topic Is Not Displayed ");
        expect(searchObj.createdTopic2.isDisplayed()).toBe(true);
        console.log('Created Topic2 Is Displayed On Discussion Topic ');
        browser.sleep(3000);


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


    } catch (Exception) {
        console.log("Unable To verify No Tags Available Display Message On Portal ")
    }
}



const VerifyThatPleaseElaborateSectionHasMin8Char = () => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkGeneralDiscussion1), 40000, "General Discussion not available");
        searchObj.clkGeneralDiscussion1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDiscussion), 40000, "Start Discussion Button not available");
        searchObj.startDiscussion.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.discussionTopic), 40000, "Discussion Topic Not Displayed ");
        expect(searchObj.discussionTopic.isDisplayed()).toBe(true);
        console.log('Ask a Question is replaced with Discussion Topic in Start Discussion Screen ');
        console.log('Discussion Topic Is Displayed On Start Discussion Screen ');
        browser.sleep(3000);

        expect(searchObj.assertElaborateSection.isDisplayed()).toBe(true);
        console.log('Elaborate section Displays “Type here (minimum 8 characters)” as placeholder');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.buttonCancel), 40000, "Cancel not available");
        searchObj.buttonCancel.click();
        browser.sleep(3000);

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


    } catch (Exception) {
        console.log("Unable To verify No Tags Available Display Message On Portal ")
    }
}


const verifyThatPlaceholderForTopicReplyAsMin10Char = () => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkGeneralDiscussion1), 40000, "General Discussion not available");
        searchObj.clkGeneralDiscussion1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDiscussion), 40000, "Start Discussion Button not available");
        searchObj.startDiscussion.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.discussionTopic), 40000, "Discussion Topic Not Displayed ");
        expect(searchObj.discussionTopic.isDisplayed()).toBe(true);
        console.log('Ask a Question is replaced with Discussion Topic in Start Discussion Screen ');
        console.log('Discussion Topic Is Displayed On Start Discussion Screen ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterDiscussionTopic), 40000, "Enter Discussion Topic not available");
        searchObj.enterDiscussionTopic.sendKeys('Demo1234');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterQuestionOrIdea), 40000, "Enter Question Or Idea not available");
        searchObj.enterQuestionOrIdea.sendKeys('Demo12345678');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitOnDiscussionTopic), 40000, "Submit Button Not Displayed ");
        expect(searchObj.submitOnDiscussionTopic.isDisplayed()).toBe(true);
        console.log('Submit Button Is Displayed On Discussion Topic ');
        searchObj.submitOnDiscussionTopic.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.generalDiscussion), 40000, "Created Topic Not Displayed ");
        searchObj.generalDiscussion.click();
        browser.sleep(5000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertMinLengthOnReply), 40000, "Minimum Leangth On Reply Not Displayed ");
        expect(searchObj.assertMinLengthOnReply.isDisplayed()).toBe(true);
        console.log('“Type here (minimum 10 characters)” is Displayed as placeholder for Topic Reply');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.minLengthValue), 40000, "Minimum Leangth Value Not Displayed ");
        expect(searchObj.minLengthValue.isDisplayed()).toBe(true);
        console.log('Minimum Value Leangth is 10 For Topic Reply ');
        browser.sleep(3000);

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


    } catch (Exception) {
        console.log("Unable To verify No Tags Available Display Message On Portal ")
    }
}


const verifyThatTextForLabelsCTAButtonsWatermarkMenusUpdated = () => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkGeneralDiscussion1), 40000, "General Discussion not available");
        searchObj.clkGeneralDiscussion1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDiscussion), 40000, "Start Discussion Button not available");
        searchObj.startDiscussion.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.discussionTopic), 40000, "Discussion Topic Not Displayed ");
        expect(searchObj.discussionTopic.isDisplayed()).toBe(true);
        console.log('Ask a Question is replaced with Discussion Topic in Start Discussion Screen ');
        console.log('Discussion Topic Label Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertelaborateLabel.isDisplayed()).toBe(true);
        console.log('Elaborate Question Label Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertTagLabel.isDisplayed()).toBe(true);
        console.log('Tags Label Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertDiscussionTopic.isDisplayed()).toBe(true);
        console.log('Discussion Topic Watermark Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertElaborateSection.isDisplayed()).toBe(true);
        console.log('Elaboration Question Watermark Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertTagWaterMark.isDisplayed()).toBe(true);
        console.log('Tag Option Watermark Is Displayed Successfully ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.buttonCancel), 40000, "Cancel not available");
        searchObj.buttonCancel.click();
        browser.sleep(3000);





        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterDiscussionTopic), 40000, "Enter Discussion Topic not available");
        // searchObj.enterDiscussionTopic.sendKeys('Demo1234');
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterQuestionOrIdea), 40000, "Enter Question Or Idea not available");
        // searchObj.enterQuestionOrIdea.sendKeys('Demo12345678');
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitOnDiscussionTopic), 40000, "Submit Button Not Displayed ");
        // expect(searchObj.submitOnDiscussionTopic.isDisplayed()).toBe(true);
        // console.log('Submit Button Is Displayed On Discussion Topic ');
        // searchObj.submitOnDiscussionTopic.click();
        // browser.sleep(5000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.generalDiscussion), 40000, "Created Topic Not Displayed ");
        // searchObj.generalDiscussion.click();
        // browser.sleep(5000);

        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertMinLengthOnReply), 40000, "Minimum Leangth On Reply Not Displayed ");
        // expect(searchObj.assertMinLengthOnReply.isDisplayed()).toBe(true);
        // console.log('“Type here (minimum 10 characters)” is Displayed as placeholder for Topic Reply');
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.minLengthValue), 40000, "Minimum Leangth Value Not Displayed ");
        // expect(searchObj.minLengthValue.isDisplayed()).toBe(true);
        // console.log('Minimum Value Leangth is 10 For Topic Reply ');
        // browser.sleep(3000);

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


    } catch (Exception) {
        console.log("Unable To View Label and Water Mark On Discussion Topic ")
    }
}


const verifyCamelCasingIsProperForDiscussionTopic = () => {
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

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkGeneralDiscussion1), 40000, "General Discussion not available");
        searchObj.clkGeneralDiscussion1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDiscussion), 40000, "Start Discussion Button not available");
        searchObj.startDiscussion.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.discussionTopic), 40000, "Discussion Topic Not Displayed ");
        expect(searchObj.discussionTopic.isDisplayed()).toBe(true);
        console.log('Ask a Question is replaced with Discussion Topic in Start Discussion Screen ');
        console.log('Discussion Topic Label Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertelaborateLabel.isDisplayed()).toBe(true);
        console.log('Elaborate Question Label Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertTagLabel.isDisplayed()).toBe(true);
        console.log('Tags Label Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertDiscussionTopic.isDisplayed()).toBe(true);
        console.log('Discussion Topic Watermark Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertElaborateSection.isDisplayed()).toBe(true);
        console.log('Elaboration Question Watermark Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertTagWaterMark.isDisplayed()).toBe(true);
        console.log('Tag Option Watermark Is Displayed Successfully ');
        browser.sleep(3000);

        expect(searchObj.assertCCDiscussionTopic.isDisplayed()).toBe(true);
        console.log('Discussion Topic Is Displayed In Camel Case ');
        browser.sleep(3000);

        expect(searchObj.assertCCelaborate.isDisplayed()).toBe(true);
        console.log('Elaborate Question Is Displayed In Camel Case ');
        browser.sleep(3000);

        expect(searchObj.assertCCTags.isDisplayed()).toBe(true);
        console.log('Tags Text Is Displayed In Camel Case ');
        browser.sleep(3000);

        expect(searchObj.assertCCTopicDesc.isDisplayed()).toBe(true);
        console.log('Description On Topics Is Displayed In Camel Case ');
        browser.sleep(3000);

        expect(searchObj.assertCCelaborateDesc.isDisplayed()).toBe(true);
        console.log('Elaborate Question Topic Is Displayed In Camel Case ');
        browser.sleep(3000);

        expect(searchObj.assertCCCancelButton.isDisplayed()).toBe(true);
        console.log('Cancel Button Is Displayed In Camel Case ');
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.buttonCancel), 40000, "Cancel not available");
        searchObj.buttonCancel.click();
        browser.sleep(3000);



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


    } catch (Exception) {
        console.log("Unable To View Text In The Form Of Camel Case ")
    }
}

const verifyCourseDetail = () => {
    try {


        // browser.sleep(3000);
        // browser.executeScript('window.scrollTo(0,0);').then(function () {
        //     console.log('++++++SCROLLED UP+++++');
        // });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(6000);

        browser.executeScript('window.scrollTo(0,450);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropDown), 40000, "Click Menu Group not available");
        searchObj.batchDropDown.click();
        browser.sleep(3000);
        expect(searchObj.assertCourseDetailsAfterLogin.isPresent()).toBe(true);
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(450,600);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.leaveCourse), 40000, "Click Menu Group not available");
        searchObj.leaveCourse.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.leaveCoursePopUp), 40000, "Click Menu Group not available");
        searchObj.leaveCoursePopUp.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log("Unable To Delete The Existing Group");
    }
}

const validateSubmittedForReview = (courseName) => {
    try {

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "Profile Icon not available");
        content.headerDropdown.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().workspaceButton), 20000, "workspace Icon not available");
        sanityPage.SanityElement().workspaceButton.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submittedForReview), 20000, "draft Icon not available");
        sanityPage.SanityElement().submittedForReview.click();
        browser.sleep(5000);
        sanityPage.SanityElement().submtdforRevImageCard.getText().then(function (input) {
            expect(input).toContain(courseName);
            console.log(input + "course is validated in submittedForreview Section");
        })
    }
    catch (err) {
        console.log("Failed");
    }
}


const validateCourseHaveNoCertificate = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var do_id = cred[36]['Title'];//"do_213434768087564288191"
        browser.sleep(2000);
        console.log("User is trying to consume content");
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkLibraray), 20000, "clkLibraray  is not available");
        sanityPage.SanityElement().clkLibraray.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.click();
        browser.sleep(2000);
        sanityPage.SanityElement().searchConLib.sendKeys(do_id);
        browser.sleep(2000);
        sanityPage.SanityElement().clkSearchLib.click();
        browser.sleep(1000);
        content.courseCard.click();
        browser.sleep(2000);
        sanityPage.SanityElement().oldBatchResume.click();
        browser.sleep(2000);
        var certificate = sanity.noCertificateMsg.getText();
        certificate.then(function (msg) {
            console.log("Message is :" + "[" + msg + "]" + " is validated.");
        })
    }
    catch (Exception) {
        console.log("Failed to validate no certificate message at right to corner in toc");
    }
}

const JoinCoursWithOpenBatch1 = () => {
    try {
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(7000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.checkBoxConsent);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);
    }
    catch (Exception) {
        log('Unable To Enroll Course');
    }
}

const verifyUserShoulBeAbleToConsumeCourse = () => {
    try {

        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        expect(searchObj.assertCourseInProgress.isDisplayed()).toBe(true);
        console.log('Selected Course Is In Progress ');
        browser.sleep(3000);

        searchObj.clkCourse.click();
        browser.sleep(3000);

        // expect(searchObj.assertModuleProgress.isDisplayed()).toBe(true);
        // console.log('Selected Course Module Is In Progress ');
        // browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        expect(searchObj.clickFullScreen.isDisplayed()).toBe(true);
        console.log('Full Screen Icon Is Available For The Course Selected ');
        browser.sleep(3000);

        searchObj.clickFullScreen.click();

        expect(searchObj.clickMinimize.isDisplayed()).toBe(true);
        console.log('User Can Be Able To Consume Course ');
        browser.sleep(3000);
    }
    catch (Exception) {
        log('Unable To Consume The Selected Course')
    }
}


const verifySynchProgressOptionAndSyncSuccess = () => {
    try {
        browser.sleep(6000);
        searchObj.clickMinimize.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.giveRatings, 20000, "giveRatings not loaded");
        resov.giveRatings.click();
        console.log("Give Rating");
        wait.waitForElementVisibility(resov.submitRating, 20000, "submitRating not loaded");
        resov.submitRating.click();
        console.log("Clicked on submit Rating");

        browser.sleep(9000);

        expect(searchObj.courseCompletionMsg.isDisplayed()).toBe(true);
        console.log('Course Consumed Completely ');
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.clossCompletionPopUp, 20000, "Course Completion not loaded");
        searchObj.clossCompletionPopUp.click();

        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.navigateBackButton, 20000, "Navigate Back Button not loaded");
        searchObj.navigateBackButton.click();

        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(2000);

        expect(searchObj.courseComplted.isDisplayed()).toBe(true);
        console.log('100% Course Consumed ');
        browser.sleep(1000);
        searchObj.clkKebabMenuForSync.click();
        browser.sleep(3000);

        expect(searchObj.assertSyncProgress.isDisplayed()).toBe(true);
        console.log('Course Sync Progress Option Is available Post Consumption');
        browser.sleep(1000);
        searchObj.assertSyncProgress.click();
        browser.sleep(500);


    }
    catch (Exception) {
        log('Unable To Verify The Sync Progress Option')
    }
}

const verifyCourseConsumeFromProfile = () => {
    try {
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        expect(searchObj.clickFullScreen.isDisplayed()).toBe(true);
        console.log('Full Screen Icon Is Available For The Course Selected ');
        browser.sleep(3000);

        searchObj.clickFullScreen.click();

        expect(searchObj.clickMinimize.isDisplayed()).toBe(true);
        console.log('User Can Be Able To Consume Course ');
        browser.sleep(3000);



    }
    catch (Exception) {
        log('Unable To Consume Course Through Profile')
    }
}



const verifyUserCanSeeOngoingCourseFromProfile = () => {
    try {
        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 40000, "dropdownProfi is not available");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkProfileIcon), 40000, "clkProfileIcon is not available");
        searchObj.clkProfileIcon.click();
        browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,900);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertLatestCourse), 20000, "Course Not available");
        expect(searchObj.assertLatestCourse.isDisplayed()).toBe(true);
        console.log('Course Name Is Available On Profile ');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertBatch), 20000, "Batch Not available");
        expect(searchObj.assertBatch.isDisplayed()).toBe(true);
        console.log('Course Batch Name Is Available On Profile ');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertOngoingBatch), 20000, "Course Status Not available");
        expect(searchObj.assertOngoingBatch.isDisplayed()).toBe(true);
        console.log('Course Status Is Ongoing Displayed On Profile ');

        browser.sleep(2000);

        searchObj.assertLatestCourse.click();

        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(6000);

        expect(searchObj.assertCourseInProgress.isDisplayed()).toBe(true);
        console.log('Selected Course Is In Progress ');
        browser.sleep(3000);

        searchObj.clkCourse.click();
        browser.sleep(3000);

        expect(searchObj.assertModuleProgress.isDisplayed()).toBe(true);
        console.log('Selected Course Module Is In Progress ');
        browser.sleep(3000);



    }
    catch (Exception) {
        log('Unable To Verify Ongoing Course In Progress')
    }
}


const JoinCourseWithOpenBatch = () => {

    try {
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(7000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.checkBoxConsent);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);


        searchObj.batchCourseName.getText().then(function (input) {
            console.log("User is successfully enrolled to Course : " + input);
        });
        browser.sleep(6000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        expect(searchObj.assertCourseInProgress.isDisplayed()).toBe(true);
        console.log('Selected Course Is In Progress ');
        browser.sleep(3000);

        searchObj.clkCourse.click();
        browser.sleep(3000);

        expect(searchObj.assertModuleProgress.isDisplayed()).toBe(true);
        console.log('Selected Course Module Is In Progress ');
        browser.sleep(3000);



    }
    catch (Exception) {
        console.log("Failed to enroll for an open batch");
    }
}

const verifyThatUserAbleToClickOnExplore = () => {
    try {

        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.exploreTab), 20000, "Explore Tab not available");
        expect(searchObj.exploreTab.isDisplayed()).toBe(true);
        console.log('Explre Tab Is Displayed ');
        browser.sleep(3000);
        searchObj.exploreTab.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertExploreClick), 20000, "Explore Tab not available");
        expect(searchObj.assertExploreClick.isDisplayed()).toBe(true);
        console.log('User Is Able To Click On Explore Tab ');
    }
    catch (Exception) {
        log(' Unable To View and Click On Explore Tab')
    }
}

const verifyTheContentInformation = () => {

    try {

        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        searchObj.clkCourse.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        searchObj.clkAbtTheContent.click();
        browser.executeScript('window.scrollTo(0,700);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);

        expect(searchObj.assertAuthorTitle.isDisplayed()).toBe(true);
        console.log('Author Title Is Displayed On Content Information');
        browser.sleep(3000);

        expect(searchObj.assertAuthorName.isDisplayed()).toBe(true);
        console.log('Author Name Is Displayed On Content Information');
        browser.sleep(3000);

        expect(searchObj.attributionTitle.isDisplayed()).toBe(true);
        console.log('Atribution Title Is Displayed On Content Information');
        browser.sleep(3000);

        expect(searchObj.attributeName.isDisplayed()).toBe(true);
        console.log('Atribution Name Is Displayed On Content Information');
        browser.sleep(3000);

        expect(searchObj.licenceTermTitle.isDisplayed()).toBe(true);
        console.log('Licence Title Is Displayed On Content Information');
        browser.sleep(3000);

        expect(searchObj.licenceName.isDisplayed()).toBe(true);
        console.log('Licence Name Is Displayed On Content Information');
        browser.sleep(3000);

        expect(searchObj.copyRightTitle.isDisplayed()).toBe(true);
        console.log('CopyRight Title Is Displayed On Content Information');
        browser.sleep(3000);

        expect(searchObj.copyRightValue.isDisplayed()).toBe(true);
        console.log('CopyRight Value Is Displayed On Content Information');
        browser.sleep(3000);

    }
    catch (Err) {
        console.log("Unable To View Content Information ");
    }
}


const verifyUserShoudlRedirectToOngoingCourseOnly = () => {
    try {
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);

        expect(searchObj.clkJoinCourse.isDisplayed()).toBe(true);
        console.log('User Redirected To Ongoing Coures Only');
        browser.sleep(3000);

        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(7000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.checkBoxConsent);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);
    }
    catch (Exception) {
        log('Unable To Redirect To Ongoing Course ');
    }
}

const userShouldSeeTheExpiredCourseBatch = () => {
    try {
        console.log("User is trying to navigate To Library And Search For Resource");
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(cred[41]['CourseName']);
        browser.sleep(1000);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");
        browser.sleep(1000);
        searchObj.clkExpandBatches.click();
        browser.sleep(1000);
        searchObj.clkDropDown.click();
        browser.sleep(1000);
        searchObj.clkExpired.click();
        browser.sleep(1000);
        expect(searchObj.assertExpiredBatch.isDisplayed()).toBe(true);
        console.log('User Should Be Able To See The Expired Course Batch');
        browser.sleep(3000);

    }
    catch (Exception) {
       console.log('unable to view expire batch')
    }
}

const verifyExpiredCourseWithOptionResumeAndEnroll = () => {
    try {
        console.log("User is trying to navigate To Library And Search For Resource");

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);
        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(cred[42]['CourseName']);
        browser.sleep(1000);
        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");
        browser.sleep(3000);

        expect(searchObj.assertResumebtnForExpBatch.isDisplayed()).toBe(true);
        console.log('Resume Button Is Availble on the Expired Batch Selected');
        browser.sleep(3000);

        expect(searchObj.assertJoinCourseBtnForExpBatch.isDisplayed()).toBe(true);
        console.log('Join Course Button Is Availble on the Expired Batch Selected');
        browser.sleep(3000);
    }
    catch (Exception) {

    }
}

const verifThatUserCanSeeTwoCourseCardsInProfileAsWellAsMyCourses = (courseName) => {
    try {
        browser.sleep(6000);
        searchObj.clickMinimize.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.giveRatings, 20000, "giveRatings not loaded");
        resov.giveRatings.click();
        console.log("Give Rating");
        wait.waitForElementVisibility(resov.submitRating, 20000, "submitRating not loaded");
        resov.submitRating.click();
        console.log("Clicked on submit Rating");

        browser.sleep(9000);

        expect(searchObj.courseCompletionMsg.isDisplayed()).toBe(true);
        console.log('Course Consumed Completely ');
        browser.sleep(4000);

        wait.waitForElementVisibility(searchObj.clossCompletionPopUp, 20000, "Course Completion not loaded");
        searchObj.clossCompletionPopUp.click();

        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.navigateBackButton, 20000, "Navigate Back Button not loaded");
        searchObj.navigateBackButton.click();

        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(searchObj.navigateBackButton, 20000, "Navigate Back Button not loaded");
        searchObj.navigateBackButton.click();
        browser.sleep(2000);

        content.clkHomeTab.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        searchObj.assertCourseCardOnProfile.getText().then(function (input) {
            expect(input).toEqual(courseName);
            console.log(input);
            console.log(courseName);
            console.log(input + "course Card Is Verified On Profile");
        })

        browser.sleep(4000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 40000, "dropdownProfi is not available");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkProfileIcon), 40000, "clkProfileIcon is not available");
        searchObj.clkProfileIcon.click();
        browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,900);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertLatestCourse), 20000, "Course Not available");
        expect(searchObj.assertLatestCourse.isDisplayed()).toBe(true);
        console.log('Course Name Is Available On Profile ');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertBatch), 20000, "Batch Not available");
        expect(searchObj.assertBatch.isDisplayed()).toBe(true);
        console.log('Course Batch Name Is Available On Profile ');

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertOngoingBatch), 20000, "Course Status Not available");
        expect(searchObj.assertOngoingBatch.isDisplayed()).toBe(true);
        console.log('Course Status Is Ongoing Displayed On Profile ');

        browser.sleep(2000);


    }
    catch (Exception) {
        log('Unable To Verify The Sync Progress Option')
    }
}

const userShouldSeeTheExpiredCourseBatchFromProfile = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 40000, "dropdownProfi is not available");
        content.headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkProfileIcon), 40000, "clkProfileIcon is not available");
        searchObj.clkProfileIcon.click();
        browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,1200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(2000);

        searchObj.viewMoreCourse.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,1200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        expect(searchObj.expiredBatch.isDisplayed()).toBe(true);
        console.log('Expired Batch Is Displayed Through Profile ');

        expect(searchObj.BatchName.isDisplayed()).toBe(true);
        console.log('Expired Batch Name Is Displayed Through Profile ');

        expect(searchObj.ExpiredCourseName.isDisplayed()).toBe(true);
        console.log('Expired Batch Name Is Displayed Through Profile ');

        searchObj.ExpiredCourseName.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        expect(searchObj.assertExpiredCourse.isDisplayed()).toBe(true);
        console.log('Expired Batch Information Is Displayed When Selected From Profile ');

        expect(searchObj.assertExpiredCourse1.isDisplayed()).toBe(true);
        console.log('Expired Batch Information Is Displayed When Selected From Profile ');
    }
    catch (Exception) {
        console.log('User Is Not Able to See the Expired Batch Through Profile')
    }
}


const verifyThatLoggedInUserCanApplyFilterAndGetTheResultsFilters = () => {
    try {

        browser.sleep(1000);
        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(searchObj.clickToSelectMedium, 20000, "Dropdown Medium not loaded");
        searchObj.clickToSelectMedium.click();
        browser.sleep(1000);
        searchObj.selTamil.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(searchObj.clickToSelectClass, 20000, "Dropdown Class not loaded");
        searchObj.clickToSelectClass.click();
        browser.sleep(1000);
        searchObj.selClass2.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(searchObj.assertTextBook, 20000, "TextBook not loaded");
        expect(searchObj.assertTextBook.isDisplayed()).toBe(true);
        console.log('Text Book Displayed ');
        browser.sleep(1000);

        wait.waitForElementVisibility(searchObj.assertBoardSelected, 20000, "Board not Selected");
        expect(searchObj.assertBoardSelected.isDisplayed()).toBe(true);
        console.log('Board Is Selected As Per The Applied Filter');
        browser.sleep(1000);

        wait.waitForElementVisibility(searchObj.assertMediumSelected, 20000, "Board not Selected");
        expect(searchObj.assertMediumSelected.isDisplayed()).toBe(true);
        console.log('Medium Selected As Per The Applied Filter');
        browser.sleep(1000);


        wait.waitForElementVisibility(searchObj.assertClassSelected, 20000, "Board not Selected");
        expect(searchObj.assertClassSelected.isDisplayed()).toBe(true);
        console.log('Classes Selected As Per The Applied Filter');
        browser.sleep(1000);


    }
    catch (Exception) {
        console.log('Unable to Get The Result On Applied Filter ')
    }
}

const userShouldSeeTheExpiredCourseBatchAndOngoingBatch = () => {
    try {
        console.log("User is trying to navigate To Library And Search For Resource");

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);


        wait.waitForElementVisibility(resov.headerLibrary, 20000, "headerLibrary not loaded");
        resov.headerLibrary.click();
        browser.sleep(1000);
        console.log("Clicked on Library");
        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(cred[37]['CourseDescription']);
        browser.sleep(1000);

        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");
        browser.sleep(1000);
        searchObj.clkExpandBatches.click();
        browser.sleep(1000);
        searchObj.clkDropDown.click();
        browser.sleep(1000);
        searchObj.clkExpired.click();
        browser.sleep(1000);


        expect(searchObj.assertExpiredBatch.isDisplayed()).toBe(true);
        console.log('User Should Be Able To See The Expired Course Batch');
        browser.sleep(3000);

    }
    catch (Exception) {

    }
}


const userShouldBeAbleToEnrollToNewBatchOnly = () => {
    try {
        console.log("User is trying to navigate To Library And Search For Resource");

        browser.sleep(10000);
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkProfileIcon), 40000, "clkProfileIcon is not available");
        searchObj.clkProfileIcon.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(cred[37]['CourseDescription']);
        browser.sleep(1000);

        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");

        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(7000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.checkBoxConsent);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);


        searchObj.batchCourseName.getText().then(function (input) {
            console.log("User is successfully enrolled to Ongoing Batch : " + input);
        });
        browser.sleep(6000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        expect(searchObj.assertCourseInProgress.isDisplayed()).toBe(true);
        console.log('Selected Ongoing Batch Course Is In Progress ');
        browser.sleep(3000);

    }
    catch (Exception) {

    }
}

const verifyThatUserAbleToUpdateTheGuestProfile = () => {
    try {

        wait.waitForElementVisibility(content.headerDropdown1, 20000);
        content.headerDropdown1.click();
        browser.sleep(300);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkProfileIcon), 40000, "clkProfileIcon is not available");
        searchObj.clkProfileIcon.click();
        browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        wait.waitForElementVisibility(content.btnEdit, 20000);
        content.btnEdit.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.clkRole, 20000);
        searchObj.clkRole.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.selParent, 20000);
        searchObj.selParent.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.clkState, 20000);
        searchObj.clkState.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.selAP, 20000);
        searchObj.selAP.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.clkDistrict, 20000);
        searchObj.clkDistrict.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.selChittoor, 20000);
        searchObj.selChittoor.click();
        browser.sleep(3000);

        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", content.submitForm);
        browser.sleep(1000);
        wait.waitForElementVisibility(content.submitForm, 20000);
        content.submitForm.click();

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        wait.waitForElementVisibility(searchObj.clkbtnEdit2, 20000);
        searchObj.clkbtnEdit2.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.clkBoardUpdate, 20000);
        searchObj.clkBoardUpdate.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.selNCERT, 20000);
        searchObj.selNCERT.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.clkMediumUpdate, 20000);
        searchObj.clkMediumUpdate.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.selHindi, 20000);
        searchObj.selHindi.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.clkClassUpdate, 20000);
        searchObj.clkClassUpdate.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.selClass, 20000);
        searchObj.selClass.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.submitButtonForDropdowns, 20000);
        content.submitButtonForDropdowns.click();

        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        expect(searchObj.assertUpdatedRole.isDisplayed()).toBe(true);
        console.log('Role Is Updated On The Guest Profile');
        browser.sleep(1000);

        expect(searchObj.assertUpdatedDist.isDisplayed()).toBe(true);
        console.log('District Is Updated On The Guest Profile ');
        browser.sleep(1000);

        expect(searchObj.assertUpdatedState.isDisplayed()).toBe(true);
        console.log('State Is Updated On The Guest Profile ');
        browser.sleep(1000);

        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        expect(searchObj.assertBoardUpdated.isDisplayed()).toBe(true);
        console.log('Board Is Updated On The Guest Profile ');
        browser.sleep(1000);

        expect(searchObj.assertMediumUpdated.isDisplayed()).toBe(true);
        console.log('Medium Is Updated On The Guest Profile ');
        browser.sleep(1000);

        expect(searchObj.assertClassUpdated.isDisplayed()).toBe(true);
        console.log('Class Is Updated On The Guest Profile ');
        browser.sleep(1000);



    }
    catch (Exception) {
        console.log('Unale To Update Guest Profile')
    }
}

const verifyThatUserIsDisplayedWithTheKebabMenuAndCompleteConsume = () => {
    try {
        browser.sleep(6000);
        searchObj.clickMinimize.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.giveRatings, 20000, "giveRatings not loaded");
        resov.giveRatings.click();
        console.log("Give Rating");
        wait.waitForElementVisibility(resov.submitRating, 20000, "submitRating not loaded");
        resov.submitRating.click();
        console.log("Clicked on submit Rating");

        browser.sleep(9000);

        expect(searchObj.courseCompletionMsg.isDisplayed()).toBe(true);
        console.log('Course Consumed Completely ');
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.clossCompletionPopUp, 20000, "Course Completion not loaded");
        searchObj.clossCompletionPopUp.click();

        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.navigateBackButton, 20000, "Navigate Back Button not loaded");
        searchObj.navigateBackButton.click();

        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(2000);

        expect(searchObj.courseComplted.isDisplayed()).toBe(true);
        console.log('User Consumed The Course 100% ');
        browser.sleep(1000);

        expect(searchObj.clkKebabMenuForSync.isDisplayed()).toBe(true);
        console.log('User is displayed with the kebab menu in the course progress section once course progress is 100% ');
        browser.sleep(1000);


    }
    catch (Exception) {
        console.log('Unable To Consume The Course Completely')
    }
}

const verifyThatWhenUserClicksOnKebabMenuSyncProgressNowIsDisplayed = () => {
    try {
        browser.sleep(2000);
        searchObj.clkKebabMenuForSync.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(searchObj.assertSyncProgress, 20000, "Sync Progress Now not loaded");
        expect(searchObj.assertSyncProgress.isDisplayed()).toBe(true);
        console.log('Sync progress now is  displayed Once the user reaches 100%.');

        browser.sleep(1000);
        searchObj.assertSyncProgress.click();
        browser.sleep(500);

    }
    catch (Exception) {
        console.log('Unable To Consume The Course Completely and To Display Sync Progress Now Option ')
    }
}

const verifyThatUserCanEnrollToOngoingBatchAlreadyExpiredBatch = () => {
    try {
        console.log("User is trying to Course and Try To Enroll");

        browser.sleep(3000);
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkProfileIcon), 40000, "clkProfileIcon is not available");
        searchObj.clkProfileIcon.click();
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(cred[39]['CourseDescription']);
        browser.sleep(1000);

        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");

        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course Is Displayed if he already enrolls to expired batch");
        browser.sleep(7000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.checkBoxConsent);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);


        searchObj.batchCourseName.getText().then(function (input) {
            console.log("User is successfully enrolled to Ongoing Batch : " + input);
        });
        browser.sleep(6000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        expect(searchObj.assertCourseInProgress.isDisplayed()).toBe(true);
        console.log('User can Enroll to Ongoing batch if he Already Enrolls to expired batch');
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('Unable To Enroll to ongoing batch if he already enrolls to expired batch ')
    }
}


const validateShareIcon = () => {
    try {
        console.log("User is trying to validate share icon in toc");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.shareIcon), 20000, "share not available");
        expect((searchObj.shareIcon).isPresent()).toBe(true);
        console.log("Share Icon is validated.");
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.shareIcon), 20000, "share not available");
        searchObj.shareIcon.click();
        console.log("Share Icon is clicked.");
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.sharePopUpCloseIcon), 20000, "share not available");
        searchObj.sharePopUpCloseIcon.click();
        browser.sleep(4000);
    }
    catch (Exception) {
        console.log('failed')
    }
}

const verifyThatTheKebabMenuAndTheTextSyncProgressNowIsDisplayedOldCourses = () => {
    try {
        console.log("User is trying to Course and Try To Enroll");

        browser.sleep(3000);
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        browser.sleep(1000);

        wait.waitForElementVisibility(resov.filterSearch, 20000, "filterSearch not loaded");
        resov.filterSearch.click();
        resov.filterSearch.sendKeys(cred[37]['Title']);
        browser.sleep(1000);

        resov.searchIcon.click();
        browser.sleep(1000);
        console.log("Clicked on Search Icon");
        wait.waitForElementVisibility(resov.resoCard, 20000, "courseCard not loaded");
        resov.resoCard.click();
        browser.sleep(1000);
        console.log("Clicked on CourseCard");
        browser.sleep(3000);

        expect(searchObj.courseComplted.isDisplayed()).toBe(true);
        console.log('User Consumed The Course 100% ');
        browser.sleep(1000);

        expect(searchObj.clkKebabMenuForSync.isDisplayed()).toBe(true);
        console.log('Kebab Menu Is Displayed for Old course  ');
        browser.sleep(1000);
        searchObj.clkKebabMenuForSync.click();


        browser.sleep(3000);
        wait.waitForElementVisibility(searchObj.assertSyncProgress, 20000, "Sync Progress Now not loaded");
        expect(searchObj.assertSyncProgress.isDisplayed()).toBe(true);
        console.log('Text "Sync progress now" is displayed for old course');

    }
    catch (Exception) {
        console.log('Unable To View Kebab Menue and text "Sync progress now" For Old Course ');
    }
}

const verifyThatTheTextSyncProgressNowIsDisplayedInAnyRegionalLanguage = () => {
    try {

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(3000);
        wait.waitForElementVisibility(searchObj.clickLangDropdown, 20000, "Language Select Dropdown not loaded");
        searchObj.clickLangDropdown.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.sltHindiLang, 20000, "Language Select Dropdown not loaded");
        searchObj.sltHindiLang.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        wait.waitForElementVisibility(searchObj.assertCourseProgressInHindi, 20000, "Course Progress In Hindi not loaded");
        expect(searchObj.assertCourseProgressInHindi.isDisplayed()).toBe(true);
        console.log('Course Progress Displayed In Hindi As Selected By User ');
        browser.sleep(2000);

        expect(searchObj.assertCourseCompleteInHindi.isDisplayed()).toBe(true);
        console.log('Course Complete Displayed In Hindi As Selected By User ');
        browser.sleep(2000);

        expect(searchObj.clkKebabMenuForSync.isDisplayed()).toBe(true);
        console.log('Kebab Menu Is Displayed for Old course  ');
        browser.sleep(1000);
        searchObj.clkKebabMenuForSync.click();

        expect(searchObj.assertCourseSyncInHindi.isDisplayed()).toBe(true);
        console.log('Text "Sync progress now" is Displayed In Hindi As Selected By User ');
        browser.sleep(2000);


        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(3000);
        wait.waitForElementVisibility(searchObj.clkLangDropdown, 20000, "Language Select Dropdown not loaded");
        searchObj.clkLangDropdown.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.sltKannadaLang, 20000, "Language Select Dropdown not loaded");
        searchObj.sltKannadaLang.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        wait.waitForElementVisibility(searchObj.assertCourseInProgKannada, 20000, "Course Progress In Hindi not loaded");
        expect(searchObj.assertCourseInProgKannada.isDisplayed()).toBe(true);
        console.log('Course Progress Displayed In Kannada As Selected By User ');
        browser.sleep(2000);

        expect(searchObj.assertCourseSyncInKannada.isDisplayed()).toBe(true);
        console.log('Text "Sync progress now" is Displayed In Kannada As Selected By User ');
        browser.sleep(2000);
    }
    catch (Exception) {
        console.log('Unable To Display "Sync progress now" in regional language selected by the user ');
    }
}

const verifyThatUserCanOnlyClickOnSyncProgressNowOnce = () => {
    try {

        browser.sleep(1000);
        expect(searchObj.clkKebabMenuForSync.isDisplayed()).toBe(true);
        console.log('User is displayed with the kebab menu in the course progress section once course progress is 100% ');
        browser.sleep(1000);

        searchObj.clkKebabMenuForSync.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.assertSyncProgress, 20000, "Sync Progress Now not loaded");
        expect(searchObj.assertSyncProgress.isDisplayed()).toBe(true);
        console.log('Sync In Progress Is Displayed Post Click On Kebab Menue ');
        browser.sleep(1000);

        searchObj.assertSyncProgress.click();
        browser.sleep(1000);

        expect(searchObj.assertToastMsg.isDisplayed()).toBe(true);
        console.log('text "You can view your updated course progress within 24 hours" Is Displayed Post Click On Sync In Progress');
        browser.sleep(1000);

    }
    catch (Exception) {
        console.log("Unable To Display Sync In Progress")
    }

}

const userClicksOnAddNewToAddDetailsOfANewConversation = () => {
    try {
        browser.sleep(2000);
        searchObj.communicationConsole.click();
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addNewButton), 40000, "ADD NEW  Button Is Not Displayed ");
        expect(searchObj.addNewButton.isDisplayed()).toBe(true);
        console.log('ADD NEW Button is Viewed Successfully On Communication Console  ');
        searchObj.addNewButton.click();
        browser.sleep(3000);

        expect(searchObj.assertConversationPage.isDisplayed()).toBe(true);
        console.log('Navigated To add details of a new conversation Page');
        browser.sleep(1000);

    }
    catch (Exception) {
        console.log('Unable To Navigate To add details of a new conversation Page');
    }
}

const verifyCourseData = () => {

    try {
        console.log("verifying the course search by applying filters");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.headerCourse), 20000, "headerCourse not available");
        browser.sleep(1000);
        searchObj.headerCourse.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.searchInput), 20000, "searchInput not available");
        searchObj.searchInput.sendKeys("AutomationCourseContent");
        searchObj.searchIcon.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.courseToBeClicked), 20000, "searchInput not available");
        searchObj.courseToBeClicked.click();
        browser.sleep(3000);
        searchObj.joinCourse.click();
        content.loginPopup.isPresent().then(function () {
            content.loginpopUpMsg.getText().then(function (loginPopupMsg) {
                console.log("Login Popup message is " + "[" + loginPopupMsg + "]");
            })
            content.loginPopup.click();
            browser.sleep(3000);
        })
        utility.userLoginPopup2("Public User1");
        browser.sleep(2000);
        searchObj.joinCourse.isPresent().then(function (result) {
            if (result) {
                searchObj.joinCourse.click();
                browser.sleep(3000);
                searchObj.startlearningButton.click();
                browser.sleep(500);
                content.continueLearning.click();

            } else {
                searchObj.startlearningButton.isPresent().then(function (result3) {
                    if (result3) {
                        searchObj.startlearningButton.click();
                        browser.sleep(1000);
                    } else {
                        content.continueLearning.click();
                        browser.sleep(3000);
                    }
                })

            }
        });
        browser.navigate().back();
        searchObj.clkCollapseAll.click();
        browser.sleep(2000);
        searchObj.clkExpandAll.click();
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", content.liscenceDropdown);
        content.liscenceDropdown.click();
        browser.executeScript("arguments[0].scrollIntoView();", content.liscenceterms);
        (content.liscenceterms.isPresent()).then(function (liscencelink) {
            console.log("Liscence terms are present " + "[" + liscencelink + "]");
        })
        browser.sleep(2000);
        content.liscenceterms.getText().then(function (liscencelinks) {
            console.log("Liscence terms are " + "[" + liscencelinks + "]");
        })
    }
    catch (Exception) {
        console.log("Failed to click start learning");
    }
}

const validateSchoolheadOfficial = () => {
    try {
        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED DOWN+++++');
        });
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clkpublishedUsertype), 20000, "clkpublishedUsertype value not available");
        content.clkpublishedUsertype.click();
        browser.sleep(2000);
        searchObj.listOfPublishedUserTypeDropDwn.getText().then(function (input) {
            console.log(input);
            (input).includes("School head OR Officials");
            (input).not.includes("Administrator");
        })
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.sltSchoolHeadOfficial), 20000, "sltSchoolHeadOfficial value not available");
        content.sltSchoolHeadOfficial.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

    }

    catch (Exception) {
        console.log("Failed");
    }
}

const hindiSubmitButton = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.hindisubmitButton), 20000, "hindisubmitButton not available");
        content.hindisubmitButton.click();
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Failed");
    }
}

const kanndaSubmitButton = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.kanndaSubmitButton), 20000, "kanndaSubmitButton not available");
        content.kanndaSubmitButton.click();
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Failed");
    }
}

const marathiSubmitButton = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.marathiSubmitButton), 20000, "marathiSubmitButton not available");
        content.marathiSubmitButton.click();
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Failed");
    }
}
const bengaliSubmitbutton = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.bengaliSubmitbutton), 20000, "bengaliSubmitbutton not available");
        content.bengaliSubmitbutton.click();
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Failed");
    }
}
const tamilSubmitButton = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.tamilSubmitButton), 20000, "tamilSubmitButton not available");
        content.tamilSubmitButton.click();
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Failed");
    }
}
const odiyaSubmitButton = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.odiyaSubmitButton), 20000, "odiyaSubmitButton not available");
        content.odiyaSubmitButton.click();
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Failed");
    }
}
const gujratiSubmitButton = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.gujratiSubmitButton), 20000, "gujratiSubmitButton not available");
        content.gujratiSubmitButton.click();
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Failed");
    }
}

const punjabiSubmitButton = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.punjabiSubmitButton), 20000, "punjabiSubmitButton not available");
        content.punjabiSubmitButton.click();
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Failed");
    }
}

const editLocationAttributesInProfileSection = () => {
    try {
        console.log('verify location details is editable for guest User');
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
        browser.sleep(9000);
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
        browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Location details cannot be changed or editable");
    }
}


const editLocationAttributesInProfile = () => {
    try {
        console.log('verify location details is editable for guest User');
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
        browser.sleep(9000);
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
        // browser.executeScript("arguments[0].scrollIntoView();", content.btnSubmit);
        // wait.waitForElementVisibility(content.btnSubmit, 20000);
        // content.btnSubmit.click();
        // browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Location details cannot be changed or editable");
    }
}

const editProfileDetails = () => {
    try {
        console.log('verify location details is editable for guest User');
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
        wait.waitForElementVisibility(content.sltState, 20000);
        content.sltState.click();
        browser.sleep(9000);
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
        // browser.executeScript("arguments[0].scrollIntoView();", content.hindisubmitButton);
        // wait.waitForElementVisibility(content.hindisubmitButton, 20000);
        // content.hindisubmitButton.click();
        // browser.sleep(5000);
    }
    catch (Exception) {
        console.log("Location details cannot be changed or editable");
    }
}

const validateSchoolHeadOfficialInPublishedUserType = () => {
    try {
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.digitalTextbookTab), 20000, "DigitalTextbookTab not available");
        content.digitalTextbookTab.click();
        browser.sleep(2000);
        validateSchoolheadOfficial();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.courseTab), 20000, "CourseTab not available");
        searchObj.courseTab.click();
        browser.sleep(2000);
        validateSchoolheadOfficial();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.tvClasstab), 20000, "TvClasstab not available");
        searchObj.tvClasstab.click();
        browser.sleep(2000);
        validateSchoolheadOfficial();
    }
    catch (Exception) {
        console.log("Failed");
    }
}

const verifyLoginPageinMergeAccount = () => {
    try {
        console.log('Validate merge account page have necessary login attributes.');
        browser.sleep(3000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.mergeAccount, 20000);
        content.mergeAccount.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.mergeAccpopUpbutton, 20000);
        content.mergeAccpopUpbutton.click();
        browser.sleep(10000);
        content.mergerAccountpage.getText().then(function (page) {
            console.log(page + " Account page is validated.")
            browser.sleep(1000);
        })
        expect(content.password.isPresent()).toBeTruthy();
        console.log("Password input is validated.");
        browser.sleep(1000);
        expect(content.googleSignInbutton.isPresent()).toBeTruthy();
        console.log("Sign in With Google button is validated.");
        browser.sleep(1000);
        expect(content.login.isPresent()).toBeTruthy();
        console.log("Sign in With Google button is validated ");
        browser.sleep(1000);
    }
    catch (Exception) {
        console.log("Merge Account is not visibled.");
    }
}

const editprofileWithDiffRegionalAlnguage = () => {
    try {

        editLocationAttributesInProfileSection();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(3000);
        wait.waitForElementVisibility(content.languageDropDown, 20000);
        content.languageDropDown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.sltHindiLanguage, 20000);
        content.sltHindiLanguage.click();
        browser.sleep(3000);
        editProfileDetails();
        hindiSubmitButton();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        wait.waitForElementVisibility(content.languageDropDown, 20000);
        content.languageDropDown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.sltKannadaLanguage, 20000);
        content.sltKannadaLanguage.click();
        browser.sleep(3000);
        editLocationAttributesInProfile();
        kanndaSubmitButton();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        wait.waitForElementVisibility(content.languageDropDown, 20000);
        content.languageDropDown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.sltMarathilanguage, 20000);
        content.sltMarathilanguage.click();
        browser.sleep(3000);
        editProfileDetails();
        marathiSubmitButton();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        wait.waitForElementVisibility(content.languageDropDown, 20000);
        content.languageDropDown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.sltBengaliLanguage, 20000);
        content.sltBengaliLanguage.click();
        browser.sleep(3000);
        editLocationAttributesInProfile();
        bengaliSubmitbutton();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        wait.waitForElementVisibility(content.languageDropDown, 20000);
        content.languageDropDown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.sltTamilLanguage, 20000);
        content.sltTamilLanguage.click();
        browser.sleep(3000);
        editProfileDetails();
        tamilSubmitButton();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(3000);
        wait.waitForElementVisibility(content.languageDropDown, 20000);
        content.languageDropDown.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(content.sltOdiyaLanguage, 20000);
        content.sltOdiyaLanguage.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        editLocationAttributesInProfile();
        odiyaSubmitButton();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        wait.waitForElementVisibility(content.languageDropDown, 20000);
        content.languageDropDown.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(3000);
        wait.waitForElementVisibility(content.sltGujratiLanguage, 20000);
        content.sltGujratiLanguage.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        editProfileDetails();
        gujratiSubmitButton();
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        wait.waitForElementVisibility(content.languageDropDown, 20000);
        content.languageDropDown.click();
        browser.sleep(1000);
        wait.waitForElementVisibility(content.sltPunjabilanguage, 20000);
        content.sltPunjabilanguage.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        editLocationAttributesInProfile();
        punjabiSubmitButton();
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log("Not able to edit profile with regional language");
    }
}

const createOpenBatchWithForum = () => {

    try {
        console.log("User is trying to create open batch for a course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropdown), 20000, "createbatch not available");
        searchObj.batchDropdown.click();
        browser.sleep(200);
        browser.executeScript('window.scrollTo(0,100);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "createbatch not available");
        browser.sleep(1000);
        searchObj.addIcon.click();
        console.log("Click on Add Icon");
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nameOfBatch), 20000, "nameOfBatch not available");
        searchObj.nameOfBatch.sendKeys("Batch");
        searchObj.aboutBatch.click();
        searchObj.aboutBatch.sendKeys(" Open Batch");
        console.log("Enter Batch Name");
        browser.sleep(5000);
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var sltDate = cred[33]['CourseName'];

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startdate), 20000, " startdate is not available");
        searchObj.startdate.click();
        console.log("Click on Start Date");
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.startDateCalendar), 20000, " startDateCalendar is not available");
        searchObj.startDateCalendar.click();
        searchObj.startDateCalendar.sendKeys(sltDate);
        console.log("Select Start Date");
        browser.sleep(3000);
        searchObj.clkNoCertficate.click();
        browser.sleep(2000);
        searchObj.enableDiscussionInCreateBatch.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.clkCheckBoxBacth), 20000, "clkCheckBoxBacth not available");
        searchObj.clkCheckBoxBacth.click();
        console.log("Batch Succesfully created  without Enrollment date");

        browser.sleep(2000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.buttonCreate);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchObj.buttonCreate), 20000, "clkCheckBoxBacth not available");
        searchObj.buttonCreate.click();
        browser.sleep(6000);
        expect(searchObj.assertCreatedBatch.isDisplayed()).toBeTruthy();
        browser.sleep(4000);

    }
    catch (Exception) {
        console.log("Failed to create open batch");
    }
}


const editpersonalDetailsAndValidateInProfielPage = () => {
    try {
        browser.sleep(2000);
        console.log('edit personal for guest User');
        browser.sleep(3000);
        wait.waitForElementVisibility(content.headerDropdown, 20000);
        content.headerDropdown.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.profileButton, 20000);
        content.profileButton.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(sanity.editpersonaldetails, 20000);
        sanity.editpersonaldetails.click();
        browser.sleep(4000);
        wait.waitForElementVisibility(sanity.nameForPersonalDetails, 20000);
        sanity.nameForPersonalDetails.click();
        sanity.nameForPersonalDetails.clear();
        browser.sleep(1000);
        sanity.nameForPersonalDetails.sendKeys("Guest name changed");
        browser.sleep(4000);
        sanity.submitPersonalDetils.click();
        browser.sleep(2000);
        sanity.assertProfileIcon.getText().then(function (input) {
            (input).includes("Guest name changed");
            console.log(input);
        })
    }
    catch (Exception) {
        console.log("Failed");
    }
}


const joinCourseAndValidateForumIcon = () => {
    try {
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(7000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.checkBoxConsent);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);
        expect(searchObj.validateForum.isPresent()).toBeTruthy();
        console.log("Forum is validated in course.");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
        expect(sanityPage.SanityElement().categories.isDisplayed()).toBeTruthy();
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
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitButton), 20000, "submitButton is not available");
        sanityPage.SanityElement().submitButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkMyDiscussion), 20000, "my discussion is not available");
        sanityPage.SanityElement().clkMyDiscussion.click();
        browser.sleep(3000);

    }
    catch (Exception) {
        console.log('Unable To Enroll Course');
    }
}

const verifyCommunicationConsolePagenation = () => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');

        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(2000);
        searchObj.communicationConsole.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,800);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clkSecondPagenationList), 20000, "clkSecondPagenationList button not loaded");
        content.clkSecondPagenationList.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clkNextPagenationList), 20000, "clkNextPagenationList button not loaded");
        content.clkNextPagenationList.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clkLastPagenationList), 20000, "clkLastPagenationList button not loaded");
        content.clkLastPagenationList.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clkPreviousPgenationList), 20000, "clkPreviousPgenationList button not loaded");
        content.clkPreviousPgenationList.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clkFirstPagenationList), 20000, "clkFirstPagenationList button not loaded");
        content.clkFirstPagenationList.click();
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('Failed')
    }
}

const validateCourseDashBoard = () => {
    try {
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');
        var do_id = cred[28]['TitleDescription'];
        var userid = cred[29]['TitleDescription'];
        navigateToCourseAndSearchForOpenBatch(do_id);
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.viewDashBoard), 20000, "headerDropdown page not loaded");
        content.viewDashBoard.click();
        browser.sleep(3000);
        expect(searchObj.validateForum.isPresent()).toBeTruthy();
        console.log("Forum icon is enable is dashboard.");
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().forum), 20000, "forum is not available");
        sanityPage.SanityElement().forum.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().categories), 20000, "categories is not available");
        expect(sanityPage.SanityElement().categories.isDisplayed()).toBeTruthy();
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
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.submitDiscussion), 20000, "submitButton is not available");
        searchObj.submitDiscussion.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkMyDiscussion), 20000, "my discussion is not available");
        sanityPage.SanityElement().clkMyDiscussion.click();
        browser.sleep(3000);
        for (i = 0; i < 1; i++) {
            searchObj.closeForum.click();
            browser.sleep(1000);
        }
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.sltCertificates), 20000, "Select Certificates is not available");
        content.sltCertificates.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchUserId), 20000, "headerDropdown page not loaded");
        content.searchUserId.sendKeys(userid);
        browser.sleep(2000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchButtonForuserId), 20000, "headerDropdown page not loaded");
        // content.searchButtonForuserId.click();
        // browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchButtonForuserId), 20000, "headerDropdown page not loaded");
        content.searchButtonForuserId.click();
        browser.sleep(2000);
        expect(content.assertBatchName.isPresent()).toBeTruthy();
        console.log("Batch Name is validated.");
        browser.sleep(1000);
        expect(content.assertUserName.isPresent()).toBeTruthy();
        console.log("User name is validated.");
        browser.sleep(1000);
        expect(content.assertuserDistrict.isPresent()).toBeTruthy();
        console.log("User District is validated.");
        browser.sleep(1000);
        expect(content.assertCourseProgress.isPresent()).toBeTruthy();
        console.log("Course Progress is validated.");
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.closeDashboardButton), 20000, "headerDropdown page not loaded");
        content.closeDashboardButton.click();
        browser.sleep(2000);
    }
    catch (Exception) {
        console.log('Failed');
    }
}

const userClicksOnThreeDotsInTheActionColumnAndVerify = () => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');

        browser.sleep(2000);
        searchObj.communicationConsole.click();
        browser.sleep(2000);

        searchObj.inputSearchName.click();

        searchObj.inputSearchName.sendKeys(cred[34]['TitleDescription']);
        browser.sleep(5000);
        searchObj.clkSearchName.click();

        wait.waitForElementVisibility(searchObj.KebabOptOnActionColumn, 20000, "Kebab Option On Action Column Is Not Present");
        expect(searchObj.KebabOptOnActionColumn.isDisplayed()).toBe(true);
        console.log('Kebab Option On Action Column Is Displayed ');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        searchObj.KebabOptOnActionColumn.click();
        browser.sleep(3000);


        wait.waitForElementVisibility(searchObj.editOptOnActionColumn, 20000, "Edit Option On Action Column Is Not Present");
        expect(searchObj.editOptOnActionColumn.isDisplayed()).toBe(true);
        console.log('Edit Option On Action Column Is Displayed After Clicking On three dots');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.deleteOptOnActionColumn, 20000, "Delete Option On Action Column Is Not Present");
        expect(searchObj.deleteOptOnActionColumn.isDisplayed()).toBe(true);
        console.log('Delete Option On Action Column Is Displayed After Clicking On three dots');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.DisableOptOnActionColumn, 20000, "Disable Option On Action Column Is Not Present");
        expect(searchObj.DisableOptOnActionColumn.isDisplayed()).toBe(true);
        console.log('Disable Option On Action Column Is Displayed After Clicking On three dots');
        browser.sleep(2000);

    }
    catch (Execption) {
        console.log('Unable To View Option On Action Column After Clicking On Three dots')
    }
}

const verifyConversationSetupScreenOnClickEditOption = () => {
    try {

        browser.sleep(2000);
        searchObj.editOptOnActionColumn.click();
        browser.sleep(4000);

        wait.waitForElementVisibility(searchObj.assertConversationName, 20000, "Conversation Name Is Not Present");
        expect(searchObj.assertConversationName.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Conversation Name Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConversationDesc, 20000, "Conversation Description Is Not Present");
        expect(searchObj.assertConversationDesc.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Conversation Description Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConversationPurpose, 20000, "Conversation Purpose Is Not Present");
        expect(searchObj.assertConversationPurpose.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Conversation Purpose Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertStartingMsg, 20000, "Starting Message Is Not Present");
        expect(searchObj.assertStartingMsg.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Starting Message Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.cancel, 20000, "Cancel Button Is Not Present");
        expect(searchObj.cancel.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Cancel Button Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertNextButton, 20000, "Next Button Is Not Present");
        expect(searchObj.assertNextButton.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Next Button Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConversationFlow, 20000, "Conversation Flow Is Not Present");
        expect(searchObj.assertConversationFlow.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Conversatin Flow Is Displayed On It');
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('User Is Unable To redirected to conversation setup screen ');
    }
}

const verifyConversationStatusIsChangedToLiveWhenClicksOnEnableOption = () => {
    try {

        browser.sleep(3000);
        searchObj.DisableOptOnActionColumn.click();
        browser.sleep(3000);
        searchObj.KebabOptOnActionColumn.click();
        browser.sleep(3000);
        searchObj.EnableOptOnActionColumn.click();

        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.assertLiveOption, 20000, "Satus Is Not Changed");
        expect(searchObj.assertLiveOption.isDisplayed()).toBe(true);
        console.log('status is changed to Live in the conversation listing table');
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('Unable To Display Status As Live In The Conversation Listing Table')
    }
}


const userProvidesMandatoryAndOptionalOnTheConversationListingScreen = () => {
    try {

        browser.sleep(3000);
        wait.waitForElementVisibility(searchObj.assertConversationName, 20000, "Conversation Name Is Not Present");
        expect(searchObj.assertConversationName.isDisplayed()).toBe(true);
        console.log('User Navigated To Conversation Listing Screen and Conversation Name Is Displayed On It');
        browser.sleep(2000);

        searchObj.enterConversationName.sendKeys('Automation_Demo');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConversationDesc, 20000, "Conversation Description Is Not Present");
        expect(searchObj.assertConversationDesc.isDisplayed()).toBe(true);
        console.log('User Navigated To Conversation Listing Screen and Conversation Description Is Displayed On It');
        browser.sleep(2000);

        expect(searchObj.assertNextButton.isEnabled()).toBe(false);
        console.log('The next button is disabled till the time All Manditory section is not correctly filled');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConversationPurpose, 20000, "Conversation Purpose Is Not Present");
        expect(searchObj.assertConversationPurpose.isDisplayed()).toBe(true);
        console.log('User Navigated To Conversation Listing Screen and Conversation Purpose Is Displayed On It');
        browser.sleep(2000);

        searchObj.enterconversationPurpose.sendKeys('Testing_Purpose');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertStartingMsg, 20000, "Starting Message Is Not Present");
        expect(searchObj.assertStartingMsg.isDisplayed()).toBe(true);
        console.log('User Navigated To Conversation Listing Screen and Starting Message Is Displayed On It');
        browser.sleep(2000);

        searchObj.enterStartingMsg.sendKeys('Msg1');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.cancel, 20000, "Cancel Button Is Not Present");
        expect(searchObj.cancel.isDisplayed()).toBe(true);
        console.log('User Navigated To Conversation Listing Screen and Cancel Button Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertNextButton, 20000, "Next Button Is Not Present");
        expect(searchObj.assertNextButton.isDisplayed()).toBe(true);
        console.log('User Navigated To Conversation Listing Screen and Next Button Is Displayed On It');
        browser.sleep(2000);
        expect(searchObj.assertNextButton.isEnabled()).toBe(true);
        console.log('The next button is Enabled Once All Manditory Section is filled');

        wait.waitForElementVisibility(searchObj.assertConversationFlow, 20000, "Conversation Flow Is Not Present");
        expect(searchObj.assertConversationFlow.isDisplayed()).toBe(true);
        console.log('User Navigated To Conversation Listing Screen and Conversatin Flow Is Displayed On It');
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('Unable To Navigate The Conversation Listing Screen and Fill Details');
    }
}


const userProvidesMandatoryAndOptionalOnTheConversationListingAndClickNext = () => {
    try {
        browser.sleep(2000);
        searchObj.assertNextButton.click();
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertNoLogicAdded, 20000, "No Logic Added Is Not Present");
        expect(searchObj.assertNoLogicAdded.isDisplayed()).toBe(true);
        console.log('User is redirected to the conversation flow screen with no logic added');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertAddLogicBtn, 20000, "Add Logic Button Is Not Present");
        expect(searchObj.assertAddLogicBtn.isDisplayed()).toBe(true);
        console.log('User is redirected to the conversation flow screen with Add Logic Button');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConvSetUpWithGreen, 20000, "Conversation Setup with Green Is Not Present");
        expect(searchObj.assertConvSetUpWithGreen.isDisplayed()).toBe(true);
        console.log('Conversation setup circle becomes green');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConvFlowWithBlue, 20000, "Conversation Flow with Green Is Not Present");
        expect(searchObj.assertConvFlowWithBlue.isDisplayed()).toBe(true);
        console.log('Conversation flow circle becomes dark blue');
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('User unable to redirected to the conversation flow screen with no logic added and a button to Add logic');
    }
}


const userClicksOnBackInConversationFlowScreen = () => {

    try {

        wait.waitForElementVisibility(searchObj.backBtnConvFlow, 20000, "Back Button on Conversation Flow Is Not Present");
        expect(searchObj.backBtnConvFlow.isDisplayed()).toBe(true);
        console.log('Back Button On Conversation Flow is Avaialable');
        searchObj.backBtnConvFlow.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConvSetUpWithBlue, 20000, "Conversation SetUp with Blue Is Not Present");
        expect(searchObj.assertConvSetUpWithBlue.isDisplayed()).toBe(true);
        console.log('Conversation Setup circle with Dark blue');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConversationName, 20000, "Conversation Name Is Not Present");
        expect(searchObj.assertConversationName.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Conversation Name Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConversationDesc, 20000, "Conversation Description Is Not Present");
        expect(searchObj.assertConversationDesc.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Conversation Description Is Displayed On It');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConversationPurpose, 20000, "Conversation Purpose Is Not Present");
        expect(searchObj.assertConversationPurpose.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Conversation Purpose Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertStartingMsg, 20000, "Starting Message Is Not Present");
        expect(searchObj.assertStartingMsg.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Starting Message Is Displayed On It');
        browser.sleep(2000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.cancel, 20000, "Cancel Button Is Not Present");
        expect(searchObj.cancel.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Cancel Button Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertNextButton, 20000, "Next Button Is Not Present");
        expect(searchObj.assertNextButton.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Next Button Is Displayed On It');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertConversationFlow, 20000, "Conversation Flow Is Not Present");
        expect(searchObj.assertConversationFlow.isDisplayed()).toBe(true);
        console.log('User Is Redirected to conversation setup screen and Conversatin Flow Is Displayed On It');
        browser.sleep(2000);

        expect(searchObj.assertNextButton.isEnabled()).toBe(true);
        console.log('User is redirected to conversation setup screen, with values pre-filled');

    }
    catch (Exception) {
        console.log('User uanble to redirected to conversation setup screen, with values pre-filled');
    }
}


const verifyConversationStatusIsChangedToDisabledWhenClicksOnDisableOption = () => {
    try {

        browser.sleep(3000);
        searchObj.DisableOptOnActionColumn.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(searchObj.assertDisabledOption, 20000, "Satus Is Not Changed");
        expect(searchObj.assertDisabledOption.isDisplayed()).toBe(true);
        console.log('status is changed to Disabled in the conversation listing table');
        browser.sleep(3000);
        searchObj.KebabOptOnActionColumn.click();
        browser.sleep(3000);
        searchObj.EnableOptOnActionColumn.click();
        browser.sleep(3000);

        wait.waitForElementVisibility(searchObj.assertLiveOption, 20000, "Satus Is Not Changed");
        expect(searchObj.assertLiveOption.isDisplayed()).toBe(true);
        console.log('status is changed to Live in the conversation listing table');
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('Unable To Display Status As Draft In The Conversation Listing Table')
    }
}


const verifyThatUserIsAbleToEnableDFInGroupsForEmailId = () => {
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

                expect(searchObj.assertToastMsgEnable.isPresent()).toBe(true);
                console.log('User is able to enable DF in groups Through Email Id');
                browser.sleep(3000);
                browser.sleep(6000);
                browser.refresh();
                //browser.actions().sendKeys(protractor.Key.ENTER).perform();

            } else {
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();

                expect(searchObj.assertToastMsgEnable.isPresent()).toBe(true);
                console.log('User is able to enable DF in groups Through Email Id');
                browser.sleep(3000);

                browser.sleep(6000);
                browser.refresh();
                //browser.actions().sendKeys(protractor.Key.ENTER).perform();
            }
        });


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

    } catch (Exception) {
        console.log("Unable To verify No Tags Available Display Message On Portal ")
    }
}

const verifyThatUserIsAbleToParticipateInDiscussionsInTheDFForGroups = () => {
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

                expect(searchObj.assertToastMsgEnable.isPresent()).toBe(true);
                console.log('User is able to enable DF in groups Through Email Id');
                browser.sleep(3000);
                browser.sleep(6000);
                browser.refresh();


            } else {
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();

                expect(searchObj.assertToastMsgEnable.isPresent()).toBe(true);
                console.log('User is able to enable DF in groups Through Email Id');
                browser.sleep(3000);

                browser.sleep(6000);
                browser.refresh();

            }
        });

        browser.sleep(2000);
        searchObj.clkDiscussionForum.click();
        browser.sleep(2000);
        searchObj.myDiscussions.click();
        browser.sleep(2000);
        searchObj.clkGeneralDisc.click();
        browser.sleep(2000);
        searchObj.enterAns.sendKeys('automation demo')
        browser.sleep(2000);
        searchObj.postReply.click();
        browser.sleep(2000);
        expect(searchObj.assertRecentPost.isPresent()).toBe(true);
        console.log('User Is Able To Participate Discussions In The DF For Group');
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        searchObj.closeForum.click();
        browser.sleep(3000);
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

    } catch (Exception) {
        console.log("User Is Able To Participate Discussions In The DF For Group ")
    }
}

const verifyThatUserIsAbleToEnableDFInGroupsWithSplChar = () => {
    try {
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);

        expect(searchObj.assertUserWithSplChar.isPresent()).toBe(true);
        console.log('User account with special characters in Username');
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

                expect(searchObj.assertToastMsgEnable.isPresent()).toBe(true);
                console.log('User is able to enable DF in groups Through Email Id');
                browser.sleep(3000);
                browser.sleep(6000);
                browser.refresh();


            } else {
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.groupActions), 40000, "Group actions is not available");
                sanity.groupActions.click();
                browser.sleep(3000);
                browser.wait(protractor.ExpectedConditions.visibilityOf(sanity.enableDiscussionIcon), 40000, "Enable discussion is not available");
                sanity.enableDiscussionIcon.click();

                expect(searchObj.assertToastMsgEnable.isPresent()).toBe(true);
                console.log('User is able to enable DF in groups Through Email Id');
                browser.sleep(3000);

                browser.sleep(6000);
                browser.refresh();

            }
        });

        // browser.sleep(2000);
        // searchObj.clkDiscussionForum.click();
        // browser.sleep(2000);
        // searchObj.myDiscussions.click();
        // browser.sleep(2000);
        // searchObj.clkGeneralDisc.click();
        // browser.sleep(2000);
        // searchObj.enterAns.sendKeys('automation demo')
        // browser.sleep(2000);
        // searchObj.postReply.click();
        // browser.sleep(2000);
        // expect(searchObj.assertRecentPost.isPresent()).toBe(true);
        // console.log('User Is Able To Participate Discussions In The DF For Group');
        // browser.sleep(3000);

        // browser.executeScript('window.scrollTo(0,0);').then(function () {
        //     console.log('++++++SCROLLED UP+++++');
        // });

        // searchObj.closeForum.click();
        browser.sleep(3000);
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

    } catch (Exception) {
        console.log("User Is Able To Participate Discussions In The DF For Group ")
    }
}

const addActivityToTheExistingGroup = () => {
    try {

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addActivityButton), 40000, "Add activity button not available");
        searchObj.addActivityButton.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.nextButton),40000,"Next button not available");
        // searchObj.nextButton.click();
        // browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selectCourse1), 40000, "Course not available");
        searchObj.selectCourse1.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(2000);

        browser.actions().dragAndDrop(searchObj.courseToAddInGroup, searchObj.courseToAddInGroup).mouseUp().perform();
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addToGroupButton), 40000, "Add to Group Button not available");
        searchObj.addToGroupButton.click();
        browser.sleep(3000);


        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addedSuccessfully), 40000, "Successful Text not available");
        // var successfulText = searchObj.addedSuccessfully.getText();
        // expect((successfulText).isDisplayed()).toBe(true);
        // browser.sleep(1000);


        // searchObj.course1.click();
        // browser.sleep(3000);
        // searchObj.activityDashBoard.click();
        // browser.sleep(5000);
    }
    catch (Exception) {
        console.log('Unable To Add Activity To the exising Group');
    }

}

const userCanClearAllNotifications = () => {
    try {
        browser.sleep(6000);
        browser.refresh();
        browser.sleep(3000);
        searchObj.notificationBellIcon.click();

        browser.sleep(6000);
        browser.refresh();
        browser.sleep(3000);

        searchObj.notificationBellIcon.click();
        browser.sleep(3000);
        searchObj.clearAllNotification.click();
        browser.sleep(3000);

        browser.sleep(3000);
        searchObj.notificationBellIcon.click();
        browser.sleep(3000);

        expect(searchObj.clearAllNotification.isPresent()).toBe(false).then(function () {
            console.log("User Can Clear All Notification In One Go");
        })

        expect(searchObj.assertNotification.isPresent()).toBe(false).then(function () {
            console.log("User Can Clear All Notification In One Go");
        })


    }
    catch (Exception) {
        console.log('User Unable To Clear All Notifications in One Go');
    }

}

const openExistingGroup1 = () => {
    try {

        console.log('user is able to Open Existing Group');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        // searchObj.crossButton.click();
        // browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(5000);

        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED up+++++');
        })
        browser.sleep(3000);


    }
    catch (Exception) {
        console.log("Unable To Open Existing Group");
    }
}

const verifyThatUserSeesACountAgainstTheBellIcon = () => {
    try {
        browser.sleep(3000);
        expect(searchObj.assertCountAtBellIcon.isPresent()).toBe(true);
        console.log('user Can see A Count Of Unread Message Against The Bell Icon');
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log('Unable To See Count On Bell Icon')
    }

}

const verifyAllTheNotificationsMustBeClickable = () => {
    try {
        browser.sleep(6000);
        browser.refresh();
        browser.sleep(3000);
        searchObj.notificationBellIcon.click();

        browser.sleep(6000);
        browser.refresh();
        browser.sleep(3000);

        searchObj.notificationBellIcon.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkNotification1), 40000, "Notification1 not available");
        searchObj.clkNotification1.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.btnCloseNotificationList), 40000, "Close Button not available");
        searchObj.btnCloseNotificationList.click();
        browser.sleep(3000);

        expect(searchObj.assertNotification1Clickable.isPresent()).toBe(true).then(function () {
            console.log("All the Notifications must be clickable");
        })


        searchObj.notificationBellIcon.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkNotification2), 40000, "Notification1 not available");
        searchObj.clkNotification2.click();
        browser.sleep(1000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.btnCloseNotificationList), 40000, "Close Button not available");
        searchObj.btnCloseNotificationList.click();
        browser.sleep(3000);

        expect(searchObj.assertNotification2Clickable.isPresent()).toBe(true).then(function () {
            console.log("All the Notifications must be clickable");
        })

        searchObj.notificationBellIcon.click();
        browser.sleep(3000);


        searchObj.clearAllNotification.click();
        browser.sleep(3000);







        // browser.sleep(3000);
        // searchObj.notificationBellIcon.click();
        // browser.sleep(3000);

        // expect(searchObj.assertNotification.isPresent()).toBe(false).then(function () {
        //     console.log("User Can Clear All Notification In One Go");
        // })


    }
    catch (Exception) {
        console.log('User Unable To Click All The Notifications');
    }


}

const verifyNotificationBell = (userName) => {
    try {
        // console.log('user is able to create myGroup,add member and addActivity');
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        // content.headerDropdown.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        // searchObj.profileButton.click();
        // browser.sleep(3000);
        //browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(4000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.moreUser), 40000, "Profile Button not available");
        // searchObj.moreUser.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.userSelected), 40000, "Profile Button not available");
        // searchObj.userSelected.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.changeUserButton), 40000, "Profile Button not available");
        // searchObj.changeUserButton.click();
        // browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.notificationBell), 40000, "Profile Button not available");
        searchObj.notificationBell.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.messageNotification), 40000, "Profile Button not available");
        searchObj.messageNotification.getText().then(function (input) {
            console.log(input);
        })
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log('User is unable to create my Group,member and addActivity');
    }
}








const validateMemeberNotificationWhenAddedToGroup = (userName) => {
    try {
        console.log('user is able to create myGroup,add member and addActivity');
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton), 40000, "Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName), 40000, "Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription), 40000, "Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox), 40000, "Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton1), 40000, "CreateGroup submit button not available");
        searchObj.createGroupSubmitButton1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addmemberButton), 40000, "Created group not available");
        searchObj.addmemberButton.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.EnterUserId), 40000, "Created group not available");
        searchObj.EnterUserId.sendKeys("contentreviewersun");
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.verifyUserId), 40000, "Created group not available");
        searchObj.verifyUserId.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addingMembertoGroup), 40000, "Created group not available");
        searchObj.addingMembertoGroup.click();
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addingMembertoGroup), 40000, "Created group not available");
        // searchObj.addingMembertoGroup.click();
        // browser.sleep(3000);

        // searchObj.contenttoasterMsg.getText().then(function(input){
        //     console.log(input);
        // })
        browser.sleep(2000);
        searchObj.backButton.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.hamburgerMenu), 40000, "Created group not available");
        searchObj.hamburgerMenu.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.removeMember), 40000, "Created group not available");
        searchObj.removeMember.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.removeMemberPopup), 40000, "Created group not available");
        searchObj.removeMemberPopup.click();
        browser.sleep(3000);
    }
    catch (Exception) {
        console.log('User is unable to create my Group,member and addActivity');
    }
}

const switchToUserAndCopyUserID = () => {
    try {

        console.log('User  is trying to switch user');
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        content.headerDropdown.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profilePage), 40000, "Profile Button not available");
        searchObj.profilePage.click();
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addAnotheruser), 20000, "workspace page not loaded");
        // searchObj.addAnotheruser.click();
        // browser.sleep(3000);

        // var userName = faker.randomData().firstname;
        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.userNameInput), 20000, "workspace page not loaded");
        // searchObj.userNameInput.sendKeys(userName);
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addUser), 20000, "workspace page not loaded");
        // searchObj.addUser.click();
        // browser.sleep(3000);

        // searchObj.contenttoasterMsg.getText().then(function(input){
        //     console.log(input);
        // })

        // browser.sleep(7000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
        // content.headerDropdown.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.moreUser), 40000, "Profile Button not available");
        // searchObj.moreUser.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.userSelected), 20000, "workspace page not loaded");
        // searchObj.userSelected.click();
        // browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.changeUserButton), 20000, "workspace page not loaded");
        // searchObj.changeUserButton.click();
        // browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        var userId = searchObj.userIdName.getText().then(function (input) {
            console.log("userId is " + input);
        })

        // return input;

    }
    catch (Exception) {
        console.log('Unable To create new user and switch')
    }
}

const removeActivityFromExistingGroup = () => {
    try {

        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,300);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkFirstActivity), 40000, "Activity Course not available");
        searchObj.clkFirstActivity.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkRemoveActivity), 40000, "Remove Activity not available");
        searchObj.clkRemoveActivity.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkBtnRemove), 40000, "Remove Button not available");
        searchObj.clkBtnRemove.click();
        browser.sleep(3000);


    }
    catch (Exception) {
        console.log('Unable To Remove Activity From the Group')
    }
}

const verifyThatUserCanDeleteNotificationsOneByOne = () => {
    try {
        browser.sleep(6000);
        browser.refresh();
        browser.sleep(3000);
        searchObj.notificationBellIcon.click();

        browser.sleep(6000);
        browser.refresh();
        browser.sleep(3000);

        searchObj.notificationBellIcon.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.deleteNotification), 40000, "Delete Button not available");
        searchObj.deleteNotification.click();
        browser.sleep(3000);


        expect(searchObj.assertUnassignedMsg.isPresent()).toBe(false).then(function () {
            console.log("Notification Unassigned Deleted First");
        })

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.deleteNotification2), 40000, "Delete Button not available");
        searchObj.deleteNotification2.click();
        browser.sleep(3000);

        expect(searchObj.assertAssignedMsg.isPresent()).toBe(false).then(function () {
            console.log("Notification Assigned Deleted First");
        })


    }
    catch (Exception) {
        console.log('Unable To Delete Notification One By One ');
    }

}

const verifyGroupMemberIsNotifiedWhenAnActivityAdded = () => {
    try {
        browser.sleep(6000);
        browser.refresh();
        browser.sleep(3000);
        searchObj.notificationBellIcon.click();

        browser.sleep(6000);
        browser.refresh();
        browser.sleep(3000);

        searchObj.notificationBellIcon.click();
        browser.sleep(3000);

        expect(searchObj.assertAssignedMsg.isPresent()).toBe(true).then(function () {
            console.log("Group Member Is Able To Notified When An Activity Is Added");
        })


    }
    catch (Exception) {
        console.log('Group Member To  Is Unable Notified When An Activity Is Added ');
    }
}

const verifyGroupMemberIsNotifiedWhenAnActivityIsRemoved = () => {
    try {
        browser.sleep(6000);
        browser.refresh();
        browser.sleep(3000);
        searchObj.notificationBellIcon.click();

        browser.sleep(6000);
        browser.refresh();
        browser.sleep(3000);

        searchObj.notificationBellIcon.click();
        browser.sleep(3000);

        expect(searchObj.assertUnassignedMsg.isPresent()).toBe(true).then(function () {
            console.log("Group Member Is Able To Notified When An Activity Is Removed");
        })
    }
    catch (Exception) {
        console.log('Group Member To  Is Unable Notified When An Activity Is Removed ');
    }
}
const userShouldBeRedirectedToConversationListingScreen = () => {
    try {
        browser.sleep(3000);
        searchObj.communicationConsole.click();
        browser.sleep(3000);

        expect(searchObj.addNewButton.isPresent()).toBe(true).then(function () {
            console.log("User Is Redirected to Conversation Listing Screen and Add New Button Is Available");
        })
        browser.sleep(1000);

        expect(searchObj.clkSearchName.isPresent()).toBe(true).then(function () {
            console.log("User Is Redirected to Conversation Listing Screen and Click Search Name Filed Exist");
        })
        browser.sleep(1000);

        expect(searchObj.assertConversations.isPresent()).toBe(true).then(function () {
            console.log("User Is Redirected to Conversation Listing Screen and Conversation Option Is Listed");
        })
        browser.sleep(2000);



    }
    catch (Exception) {
        console.log('user is not Redirected To Conversation Listing Screen ')
    }
}

const verifyuserShouldBeAbleToSearchByName = () => {
    try {

        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readParticularDataFromExcelFile(sheetPath, '3');

        browser.sleep(2000);
        searchObj.inputSearchName.click();

        searchObj.inputSearchName.sendKeys(cred[34]['TitleDescription']);
        browser.sleep(5000);
        searchObj.clkSearchName.click();

        wait.waitForElementVisibility(searchObj.KebabOptOnActionColumn, 20000, "Kebab Option On Action Column Is Not Present");
        expect(searchObj.KebabOptOnActionColumn.isDisplayed()).toBe(true);
        console.log('Kebab Option On Action Column Is Displayed ');
        browser.sleep(2000);


        wait.waitForElementVisibility(searchObj.assertbotName, 20000, "Bot Name Is Not Present");
        expect(searchObj.assertbotName.isDisplayed()).toBe(true);
        console.log('user Is able to Display Bot Name Successfully ');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertbotStaus, 20000, "Bot Status Is Not Present");
        expect(searchObj.assertbotStaus.isDisplayed()).toBe(true);
        console.log('user Is able to Display Bot Status Successfully with the Bot Name as Keyword');
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertbotDesc, 20000, "Bot Desc Is Not Present");
        expect(searchObj.assertbotDesc.isDisplayed()).toBe(true);
        console.log('user Is able to Display Bot Description Successfully with the Bot Name as Keyword');
        browser.sleep(2000);

        browser.sleep(2000);
        searchObj.inputSearchName.click();

        searchObj.inputSearchName.sendKeys('test1234');
        browser.sleep(5000);
        searchObj.clkSearchName.click();

    }
    catch (Execption) {
        console.log('User Is Unable To search by Name')
    }
}

const verifyCertificateIssuingCriteriaIsAdded = () => {
    try {

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.dropDownIssueCertificate), 40000, "Dropdown Button not available");
        searchObj.dropDownIssueCertificate.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkMyStateTeacher), 40000, "My State Teacher not available");
        searchObj.clkMyStateTeacher.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,250);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });


        browser.wait(protractor.ExpectedConditions.visibilityOf(content.plusIcon), 40000, "Plus Icon not available");
        content.plusIcon.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,450);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.dropDownIssueCertificate), 40000, "Dropdown Button not available");
        searchObj.dropDownIssueCertificate.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkmerit), 40000, "Grade Value not available");
        searchObj.clkmerit.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkAllElements), 40000, "CheckBox not available");
        searchObj.checkAllElements.click();
        browser.sleep(3000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.selCertificate1), 40000, "Certificate not available");
        searchObj.selCertificate1.click();
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkPreview), 40000, "Preview not available");
        searchObj.clkPreview.click();
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.btnSelTemplate);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.btnSelTemplate), 40000, "Preview not available");
        searchObj.btnSelTemplate.click();
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();", searchObj.btnAddCertificate);
        browser.sleep(3000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.btnAddCertificate), 40000, "Add Certificate Button not available");
        searchObj.btnAddCertificate.click();
        browser.sleep(1000);

        expect(searchObj.assertCertificateAdded.isPresent()).toBe(true).then(function () {
            console.log("Certificate Added Successfully ");
        })
        browser.sleep(2000);

    }
    catch (Exception) {
        console.log('Unable To Add Certificate')
    }

}

const validateTags = () => {
    try {
        console.log('user is able to create myGroup,add member and addActivity');
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.profileButton), 40000, "Profile Button not available");
        searchObj.profileButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.myGroupButton), 40000, "myGroup icon not available");
        searchObj.myGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.crossButton), 40000, "Cross button not available");
        searchObj.crossButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupButton), 40000, "Create Group button not available");
        searchObj.createGroupButton.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupName), 40000, "Enter Group name box not available");
        searchObj.enterGroupName.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.enterGroupDescription), 40000, "Enter Deescription box not available");
        searchObj.enterGroupDescription.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.GroupcheckBox), 40000, "Check box not available");
        searchObj.GroupcheckBox.click();
        browser.sleep(5000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.createGroupSubmitButton1), 40000, "CreateGroup submit button not available");
        searchObj.createGroupSubmitButton1.click();
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.CreatedGroup), 40000, "Created group not available");
        searchObj.CreatedGroup.click();
        browser.sleep(3000);


    } catch (err) {
        console.log(err)
    }
}


const verifyUserShouldBeDisplayedWithLoader = () => {

    try {
        console.log("User is trying to enroll for an open batch");
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        console.log("Click on Enroll For Course");
        browser.sleep(7000);

        browser.executeScript('window.scrollTo(0,500);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.checkBoxConsent);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        browser.sleep(2000);
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);


        searchObj.batchCourseName.getText().then(function (input) {
            console.log("User is successfully enrolled to Course : " + input);
        });
        browser.sleep(6000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);


        expect(searchObj.assertCourseCardImage.isDisplayed()).toBe(true);
        console.log('Course Card Image Is Displayed Post Join The Course ');
        browser.sleep(1000);

        expect(searchObj.assertCourseModule.isDisplayed()).toBe(true);
        console.log('Course Module Is Displayed Post Join The Course ');
        browser.sleep(1000);

        expect(searchObj.assertCourseUnit.isDisplayed()).toBe(true);
        console.log('Course Unit Is Displayed Post Join The Course ');
        browser.sleep(1000);

        expect(searchObj.assertCourseDetails.isDisplayed()).toBe(true);
        console.log('Course Details Is Displayed Post Join The Course ');
        browser.sleep(1000);

        expect(searchObj.navigateBackButton.isDisplayed()).toBe(true);
        console.log('Back Button Is Displayed Post Join The Course ');
        browser.sleep(1000);

        expect(searchObj.startlearningButton.isDisplayed()).toBe(true);
        console.log('Start Learning Button Is Displayed Post Join The Course ');
        browser.sleep(1000);


        expect(searchObj.assertCourseInProgress.isDisplayed()).toBe(true);
        console.log('Selected Course Is In Progress ');
        browser.sleep(3000);

        searchObj.clkCourse.click();
        browser.sleep(3000);

        expect(searchObj.assertModuleProgress.isDisplayed()).toBe(true);
        console.log('Selected Course Module Is In Progress ');
        browser.sleep(3000);



    }
    catch (Exception) {
        console.log("Failed to enroll for an open batch And Display the Content");
    }
}

const verifyThatUserShouldBeDisplayedWithCourseCompletionMessage = (courseName) => {
    try {
        browser.sleep(6000);
        searchObj.clickMinimize.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(resov.giveRatings, 20000, "giveRatings not loaded");
        resov.giveRatings.click();
        console.log("Give Rating");
        wait.waitForElementVisibility(resov.submitRating, 20000, "submitRating not loaded");
        resov.submitRating.click();
        console.log("Clicked on submit Rating");

        browser.sleep(9000);

        expect(searchObj.courseCompletionMsg.isDisplayed()).toBe(true);
        console.log('Course Consumed Completely ');
        browser.sleep(4000);


    }
    catch (Exception) {
        log('Unable To Consume Course Comeletely ')
    }
}




const validateCreateBatchOption = () => {

    try {
        console.log("User is trying to create open batch for a course");
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.batchDropdown), 20000, "createbatch not available");
        searchObj.batchDropdown.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.addIcon), 20000, "createbatch not available");
        browser.sleep(4000);
        expect(searchObj.addIcon.isPresent()).toEqual(true);
        console.log("create Batch is validated");
        browser.sleep(4000);

    }
    catch (Exception) {
        console.log("Failed to create open batch");
    }
}


const createCourseAndReturnDoidAndCourseName = () => {
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
        var currentUrl = browser.getCurrentUrl()

        sanityPage.SanityElement().addChild.click();
        browser.sleep(3000);

        sanityPage.SanityElement().childDesc1.sendKeys("CdildDesc");
        browser.sleep(3000);

        // browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().addFromLibraryButton), 20000,"Add library Button not loaded");
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(5000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(4000);

        sanityPage.SanityElement().addContent.click();
        browser.sleep(4000);

        sanityPage.SanityElement().contentFromLibrayBackButton.click();
        browser.sleep(4000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().submitForreviewButton), 20000, "submit Button not loaded");
        sanityPage.SanityElement().submitForreviewButton.click();
        browser.sleep(2000);
        sanityPage.SanityElement().termsAndConditionCheckbox.click();
        browser.sleep(300);

        sanityPage.SanityElement().NewCoursesubmitButton.click();
        browser.sleep(10000);

    } catch (err) {
        console.log(err);
    }
    return { courseName, currentUrl };
}


const createBookAndAddCoursesInChildAndUnitLevel = (doid, course) => {
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

        sanityFun.FillBmesWhileCreatingBook();

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

        for (let i = 1; i < 3; i++) {
            sanityPage.SanityElement().addChild.click();
            browser.sleep(4000);

            sanityPage.SanityElement().childDesc.sendKeys("CdildDesc");
            browser.sleep(4000);

            sanityPage.SanityElement().addFromLibraryButton.click();
            browser.sleep(4000);

            sanityPage.SanityElement().searchContentFromLibrary.click();
            sanityPage.SanityElement().searchContentFromLibrary.sendKeys(doid);
            browser.sleep(2000);
            sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);
            browser.sleep(3000);
            sanityPage.SanityElement().searchContentFromLibrary.click();
            sanityPage.SanityElement().searchContentFromLibrary.clear();
            sanityPage.SanityElement().searchContentFromLibrary.sendKeys(course);
            browser.sleep(2000);
            sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);

            // sanityPage.SanityElement().clkContent.click();
            browser.sleep(4000);
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
            searchObj.expandChapter.click();
            browser.sleep(500);
            searchObj.courseInChildNode.getText().then(function (input) {
                input.includes(course);
            })
        }
        searchObj.childNode.click()
        browser.sleep(2000);
        sanityPage.SanityElement().addFromLibraryButton.click();
        browser.sleep(4000);
        sanityPage.SanityElement().searchContentFromLibrary.click();
        sanityPage.SanityElement().searchContentFromLibrary.sendKeys(course);
        browser.sleep(2000);
        sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);

        // sanityPage.SanityElement().clkContent.click();
        browser.sleep(4000);
        sanityPage.SanityElement().selectButton.click();
        browser.sleep(6000);
        searchObj.assertAlreadyAddedToFolder.getText().then(function (input) {
            input.includes("Already present in this folder");
        })
        expect(searchObj.assertAddContentButton.isEnabled()).toBe(false);
        browser.sleep(1000);
        searchObj.closeAddContentPopup.click();
        browser.sleep(2000);
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


const verifyAdditionalCategoryFilter = () => {
    try {

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.homeTab), 40000, "hometab button not available");
        searchObj.homeTab.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.digitalTextbookInHomeTab), 40000, "digitalTextbookInHomeTab button not available");
        searchObj.digitalTextbookInHomeTab.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertContentTypeFilter), 40000, "assertContentTypeFilter button not available");
        searchObj.assertContentTypeFilter.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertContentTypeFilter), 40000, "assertContentTypeFilter button not available");
        expect(searchObj.assertContentTypeFilter.isPresent()).toBe(true);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertAdditionalCategory), 40000, "assertAdditionalCategory button not available");
        searchObj.assertAdditionalCategory.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertAdditionalCategory), 40000, "assertAdditionalCategory button not available");
        expect(searchObj.assertAdditionalCategory.isPresent()).toBe(true);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.lessonPlanadditionalCategory), 40000, "lessonPlanadditionalCategory button not available");
        searchObj.lessonPlanadditionalCategory.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.backButtonInExplorePage), 40000, "lessonPlanadditionalCategory button not available");
        searchObj.backButtonInExplorePage.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.digitalTextbookInHomeTab), 40000, "digitalTextbookInHomeTab button not available");
        searchObj.digitalTextbookInHomeTab.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertContentTypeFilter), 40000, "assertContentTypeFilter button not available");
        expect(searchObj.assertContentTypeFilter.isPresent()).toBe(true);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertAdditionalCategory), 40000, "assertAdditionalCategory button not available");
        searchObj.assertAdditionalCategory.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.assertAdditionalCategory), 40000, "assertAdditionalCategory button not available");
        expect(searchObj.assertAdditionalCategory.isPresent()).toBe(true);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.lessonPlanadditionalCategory), 40000, "lessonPlanadditionalCategory button not available");
        searchObj.lessonPlanadditionalCategory.click();
        browser.sleep(3000);


    }
    catch (Exception) {
        console.log("additional Category is not present");
    }
}

const createCourseAndSendForReviewBySearchingContentInLibrary = (contentLibraryType) => {
    var courseName;
    try {
        console.log("user is trying to create a course");
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
        browser.sleep(4000);
        sanityPage.SanityElement().searchContentFromLibrary.click();
        sanityPage.SanityElement().searchContentFromLibrary.sendKeys(contentLibraryType);
        browser.sleep(2000);
        sanityPage.SanityElement().searchContentFromLibrary.sendKeys(protractor.Key.ENTER);
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

    } catch (err) {
        console.log(err);
    }
    return courseName;
}


const validateAndVerifyBannerContent = () => {
    try {
        console.log("user is trying to consume content by clicking on banner");
        browser.sleep(3000);
        wait.waitForElementVisibility(content.HomeTab, 20000);
        content.HomeTab.click();
        browser.sleep(3000);

        // wait.waitForElementVisibility(content.changePreference, 20000);
        // content.changePreference.click();
        // browser.sleep(3000);

        // wait.waitForElementVisibility(content.boardDropdown, 30000);
        // content.boardDropdown.click();
        // browser.sleep(3000);

        // wait.waitForElementVisibility(content.boardValueSelection, 30000);
        // content.boardValueSelection.click();
        // browser.sleep(6000);

        // wait.waitForElementVisibility(content.mediumDropdown, 30000);
        // content.mediumDropdown.click();
        // browser.sleep(3000);

        // wait.waitForElementVisibility(content.selectMediumValue, 30000);
        // content.selectMediumValue.click();
        // browser.sleep(4000);

        // wait.waitForElementVisibility(content.gradeLevelDropDown, 30000);
        // content.gradeLevelDropDown.click();
        // browser.sleep(3000);

        // wait.waitForElementVisibility(content.selectGradeLevelValue, 30000);
        // content.selectGradeLevelValue.click();
        // browser.sleep(2000);

        // wait.waitForElementVisibility(content.submitButtonForDropdowns, 30000);
        // content.submitButtonForDropdowns.click();
        // browser.sleep(20000);

        browser.getCurrentUrl().then(function (url1) {
            expect((content.clkBanner).isPresent()).toBe(true).then(function () {
                console.log("Additional Icons are present in featured section");
                content.clkBanner.click();
                browser.sleep(2000);
            })
            browser.sleep(2000);
            browser.getCurrentUrl().then(function (url2) {
                expect((url1)).not.toMatch(url2);
                console.log("Actions performed")
                browser.sleep(2000);
            })
        })

        wait.waitForElementVisibility(content.clickFilterBoard, 30000);
        content.clickFilterBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectFilterBoard, 30000);
        content.selectFilterBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clickFilterMedium, 30000);
        content.clickFilterMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectFilterMedium, 30000);
        content.selectFilterMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clickclass, 30000);
        content.clickclass.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.SelectClass, 30000);
        content.SelectClass.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clicksubject, 30000);
        content.clicksubject.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectSubject, 30000);
        content.selectSubject.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.contentType, 30000);
        content.contentType.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.contentTypeValue, 30000);
        content.contentTypeValue.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.courseCard, 30000);
        content.courseCard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.joinCourse1, 30000);
        content.joinCourse1.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.consentTnCcheckbox, 30000);
        content.consentTnCcheckbox.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.doNotShare, 30000);
        searchObj.doNotShare.click();
        browser.sleep(9000);

        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(content.batchDropDown, 30000);
        content.batchDropDown.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.leaveCourse, 30000);
        content.leaveCourse.click();
        browser.sleep(4000);

        wait.waitForElementVisibility(content.leaveCoursePopUp, 30000);
        content.leaveCoursePopUp.click();
        browser.sleep(8000);

    }
    catch (Exception) {
    }
}

const validateContinueLearningSection= (courseName) => {
    try {

        let var1 ="//span[contains(text(),'Continue Learning')]";
        let var2 ="//following::*[contains(text(),'";
        let var3 = courseName;
        let var4 = "')]";

        var continueLearningSectionContent = element(by.xpath(var1+var2+var3+var4));

        console.log("user is trying to consume content by clicking on banner");
        browser.sleep(3000);
        wait.waitForElementVisibility(content.HomeTab, 20000);
        content.HomeTab.click();
        browser.sleep(5000);

        wait.waitForElementVisibility(searchObj.searchBar, 20000);
        searchObj.searchBar.sendKeys(courseName);
        browser.sleep(2000);

        wait.waitForElementVisibility(content.searchButton, 30000);
        content.searchButton.click();
        browser.sleep(10000);
        
        wait.waitForElementVisibility(content.courseCard, 30000);
        content.courseCard.click();
        browser.sleep(2000);
        
        wait.waitForElementVisibility(content.joinCourse1, 30000);
        content.joinCourse1.click();
        browser.sleep(8000);

        wait.waitForElementVisibility(content.consentTnCcheckbox, 30000);
        content.consentTnCcheckbox.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.doNotShare, 30000);
        searchObj.doNotShare.click();
        browser.sleep(4000);

        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });

        browser.sleep(3000);
        wait.waitForElementVisibility(searchObj.back, 30000);
        searchObj.back.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.HomeTab, 20000);
        content.HomeTab.click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,1300);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
        browser.sleep(2000);
        content.nextArrow.click();
        browser.sleep(1000);
        content.prevArrowBtn.click();
        browser.sleep(2000);
        continueLearningSectionContent.click();
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,200);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        wait.waitForElementVisibility(content.batchDropDown, 30000);
        content.batchDropDown.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.leaveCourse, 30000);
        content.leaveCourse.click();
        browser.sleep(4000);

        wait.waitForElementVisibility(content.leaveCoursePopUp, 30000);
        content.leaveCoursePopUp.click();
        browser.sleep(8000);
    }
    catch (Exception) {
    }
}


const exploreTabwithBrowseByCategories = ()  => {
    try{

        console.log("Filter by explore by categories.")
        wait.waitForElementVisibility(searchObj.exploreTab, 20000);
        searchObj.exploreTab.click();
        browser.sleep(5000);

        wait.waitForElementVisibility(searchObj.browseByCategories, 20000);
        searchObj.browseByCategories.click();
        browser.sleep(2000);
        
    }
    catch (Exception) {
    }
}

const exploreTabwithBrowseByBoard = ()  => {
    try{

        console.log("Filter by explore by categories.")
        wait.waitForElementVisibility(searchObj.exploreTab, 20000);
        searchObj.exploreTab.click();
        browser.sleep(5000);

        wait.waitForElementVisibility(searchObj.browseByBoard, 20000);
        searchObj.browseByBoard.click();
        browser.sleep(2000);
        
    }
    catch (Exception) {
    }
}

const exploreTabwithBrowseByRoles = ()  => {
    try{

        console.log("Filter by explore by categories.")
        wait.waitForElementVisibility(searchObj.exploreTab, 20000);
        searchObj.exploreTab.click();
        browser.sleep(5000);

        wait.waitForElementVisibility(searchObj.browseByRoles, 20000);
        searchObj.browseByRoles.click();
        browser.sleep(2000);
        
    }
    catch (Exception) {
    }
}


const homeTabwithBrowseBySubject = ()  => {
    try{
        console.log("Filter by explore by categories.")
        wait.waitForElementVisibility(searchObj.homeTab, 20000);
        searchObj.homeTab.click();
        browser.sleep(5000);
        wait.waitForElementVisibility(sanity.browseBySubjects, 20000);
        sanity.browseBySubjects.click();
        browser.sleep(2000);
        
    }
    catch (Exception) {
    }
}

const homeTabwithBrowseByCategories = ()  => {
    try{

        console.log("Filter by explore by categories.")
        wait.waitForElementVisibility(searchObj.homeTab, 20000);
        searchObj.homeTab.click();
        browser.sleep(5000);

        wait.waitForElementVisibility(searchObj.browseByCategories, 20000);
        searchObj.browseByCategories.click();
        browser.sleep(2000);
        
    }
    catch (Exception) {
    }
}



const validateFiltersInBrowseByCategries= () => {
    try {

        console.log("user is trying to consume content by clicking on banner");
        browser.sleep(3000);
        wait.waitForElementVisibility(searchObj.contentTypeByPrimaryCategory, 30000);
        searchObj.contentTypeByPrimaryCategory.getText().then(function(input){
            (input).includes("Digital Textbook");
            console.log("The navigation filter by primary category is validated.");
        })
        browser.sleep(2000);
        searchObj.appliedFilters.getText().then(function(input){
            (input).includes("Digital Textbook");
            console.log("Applied primary category filter is validated.");
        })
        wait.waitForElementVisibility(content.clicksubject, 30000);
        content.clicksubject.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectSubject, 30000);
        content.selectSubject.click();
        browser.sleep(2000);

        searchObj.filterBasedOnSubject.getText().then(function(input){
            (input).includes("Accountancy");
            console.log(input);
        })

        wait.waitForElementVisibility(content.clickFilterBoard, 30000);
        content.clickFilterBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectFilterBoard, 30000);
        content.selectFilterBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clickFilterMedium, 30000);
        content.clickFilterMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectFilterMedium, 30000);
        content.selectFilterMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clickclass, 30000);
        content.clickclass.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.SelectClass, 30000);
        content.SelectClass.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.back, 30000);
        searchObj.back.click();
        browser.sleep(3000);
    }
    catch (Exception) {
    }
}


const validateFiltersInBrowseByBoard = () => {
    try {

        console.log("user is trying to consume content by clicking on banner");
        browser.sleep(3000);
        wait.waitForElementVisibility(searchObj.validateDefaultBoardType, 30000);
        searchObj.validateDefaultBoardType.getText().then(function(input){
            (input).includes("CBSE/NCERT");
            console.log("The navigation filter by primary category is validated.");
        })
        browser.sleep(2000);
        searchObj.appliedFilterBoardType.getText().then(function(input){
            (input).includes("CBSE/NCERT");
            console.log("Applied primary category filter is validated.");
        })
        wait.waitForElementVisibility(content.clicksubject, 30000);
        content.clicksubject.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectSubject, 30000);
        content.selectSubject.click();
        browser.sleep(2000);

        searchObj.filterBasedOnSubject.getText().then(function(input){
            (input).includes("Accountancy");
        })

        // wait.waitForElementVisibility(content.clickFilterBoard, 30000);
        // content.clickFilterBoard.click();
        // browser.sleep(2000);

        // wait.waitForElementVisibility(content.selectFilterBoard, 30000);
        // content.selectFilterBoard.click();
        // browser.sleep(2000);

        wait.waitForElementVisibility(content.clickFilterMedium, 30000);
        content.clickFilterMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectFilterMedium, 30000);
        content.selectFilterMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clickclass, 30000);
        content.clickclass.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.SelectClass, 30000);
        content.SelectClass.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.back, 30000);
        searchObj.back.click();
        browser.sleep(3000);
    }
    catch (Exception) {
    }
}

const validateFiltersInBrowseByRoles = () => {
    try {

        wait.waitForElementVisibility(content.clickFilterBoard, 30000);
        content.clickFilterBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectFilterBoard, 30000);
        content.selectFilterBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clickFilterMedium, 30000);
        content.clickFilterMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectFilterMedium, 30000);
        content.selectFilterMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clickclass, 30000);
        content.clickclass.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.SelectClass, 30000);
        content.SelectClass.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clicksubject, 30000);
        content.clicksubject.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectSubject, 30000);
        content.selectSubject.click();
        browser.sleep(2000);

        searchObj.filterBasedOnSubject.getText().then(function(input){
            (input).includes("Accountancy");
        })

        wait.waitForElementVisibility(searchObj.back, 30000);
        searchObj.back.click();
        browser.sleep(3000);
    }
    catch (Exception) {
    }
}

const validateFiltersInBrowseBySubject = () => {
    try {

        searchObj.validateDefaultBoard.getText().then(function(input){
            (input).includes("state (tamil nadu)");
        })
        browser.sleep(2000);
        searchObj.validateDefaultMedium.getText().then(function(input){
            (input).includes("english")
        })
        browser.sleep(2000);
        searchObj.validateDefaultClass.getText().then(function(input){
            (input).includes("class 1")
        })
        browser.sleep(2000);
        searchObj.filterBasedOnSubject.getText().then(function(input){
            (input).includes("Accountancy")
        })
        browser.sleep(2000);
        searchObj.contentDrpDownForHomeTab.click();
        browser.sleep(2000);
        searchObj.contentTypeValue.click();
        browser.sleep(3000);  
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        wait.waitForElementVisibility(searchObj.back, 30000);
        searchObj.back.click();
        browser.sleep(3000); 
    }
    catch (Exception) {
    }
}

const validateFiltersInBrowseByCategriesWithHomeTab= () => {
    try {

        searchObj.validateDefaultBoard.getText().then(function(input){
            (input).includes("state (tamil nadu)");
        })
        browser.sleep(2000);
        searchObj.validateDefaultMedium.getText().then(function(input){
            (input).includes("english")
        })
        browser.sleep(2000);
        searchObj.validateDefaultClass.getText().then(function(input){
            (input).includes("class 1")
        })
        browser.sleep(2000);
        // searchObj.filterBasedOnSubject.getText().then(function(input){
        //     (input).includes("Accountancy")
        // })
        browser.sleep(2000);
        searchObj.validateDefaultContenttype.getText().then(function(input){
            (input).includes("Digital Textbook")
        })
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        wait.waitForElementVisibility(searchObj.back, 30000);
        searchObj.back.click();
        browser.sleep(3000);
    }
    catch (Exception) {
    }
}

const recentlyPublishedCourse = (courseName) => {
    try {

        let var1 ="//*[contains(text(),'Recently published courses')]";
        let var2 ="//following::*[contains(text(),'";
        let var3 = courseName;
        let var4 = "')]";

        var recentlyPublishedCourseContent = element(by.xpath(var1+var2+var3+var4));

        console.log("user is trying to consume content by clicking on banner");
        browser.sleep(3000);
        wait.waitForElementVisibility(content.HomeTab, 20000);
        content.HomeTab.click();
        browser.sleep(5000);
        browser.executeScript('window.scrollTo(0,2000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });

        browser.sleep(5000);

        searchObj.viewAllButtonForrecentlyPublishedCourse.click();
        browser.sleep(3000);
        recentlyPublishedCourseContent.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.clkJoinCourse), 20000, "clkJoinCourse not available");
        searchObj.clkJoinCourse.click();
        browser.sleep(6000);
        // browser.executeScript('window.scrollTo(0,200);').then(function () {
        //     console.log('++++++SCROLLED Down+++++');
        // });
        // browser.executeScript("arguments[0].scrollIntoView();", searchObj.checkBoxConsent);
        // browser.sleep(2000);

        //browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.checkBoxConsent), 20000, "checkBoxConsent not available");
        searchObj.checkBoxConsent.click();
        browser.sleep(3000);

        browser.executeScript("arguments[0].scrollIntoView();", searchObj.share);
        browser.sleep(2000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.share), 20000, "share not available");
        searchObj.share.click();
        browser.sleep(4000);
        
        wait.waitForElementVisibility(content.batchDropDown, 30000);
        content.batchDropDown.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.leaveCourse, 30000);
        content.leaveCourse.click();
        browser.sleep(4000);

        wait.waitForElementVisibility(content.leaveCoursePopUp, 30000);
        content.leaveCoursePopUp.click();
        browser.sleep(8000);
    }
    catch (Exception) {
    }
}


const validateFilters = () => {
    try {
        
        browser.sleep(3000);
        wait.waitForElementVisibility(content.HomeTab, 20000);
        content.HomeTab.click();
        browser.sleep(5000);
        searchObj.browsebyCategorylabel.isPresent().toBe(true);
        searchObj.browsebySubjlabel.isPresent().toBe(true);
        searchObj.browseOthercategoryLabel.isPresent().tobe(true);
        browser.wait(protractor.ExpectedConditions.visibilityOf(searchObj.exploreTab), 20000, "Explore Tab not available");
        expect(searchObj.exploreTab.isDisplayed()).toBe(true);
        console.log('Explre Tab Is Displayed ');
        browser.sleep(3000);
        searchObj.exploreTab.click();
        browser.sleep(3000);
        searchObj.browsebyCategorylabel.isPresent().toBe(true);
        searchObj.browseByBoardLabel.isPresent().toBe(true);
        searchObj.browsebyAudienceLabel.isPresent().toBe(true);
        browser.sleep(1000);
        searchObj.digitalTextbookInHomeTab.click();
        browser.sleep(3000);
        wait.waitForElementVisibility(content.clickFilterBoard, 30000);
        content.clickFilterBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectFilterBoard, 30000);
        content.selectFilterBoard.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clickFilterMedium, 30000);
        content.clickFilterMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectFilterMedium, 30000);
        content.selectFilterMedium.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clickclass, 30000);
        content.clickclass.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.SelectClass, 30000);
        content.SelectClass.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.clicksubject, 30000);
        content.clicksubject.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(content.selectSubject, 30000);
        content.selectSubject.click();
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.assertAdditionalCategory, 30000);
        searchObj.assertAdditionalCategory.click()
        browser.sleep(2000);

        wait.waitForElementVisibility(searchObj.lessonPlanadditionalCategory, 30000);
        searchObj.lessonPlanadditionalCategory.click();
        browser.sleep(2000);
        
    }
    catch (Exception) {
    }
}



module.exports = {

    createCourse,
    publishCourseFromUpForReview,
    sendForReviewTheCourse,
    publishTheCourseFromUpForReview,
    createInviteOnlyBatchForLatestCourse,
    navigateToCourseAndSearch,
    createCourseWithAllResourceType,
    navigateToCourseSearchAndConsume,
    searchCollaboratorBySearchField,
    collaboratorSendTheCourseForReview,
    saveAndSendNewCourseForReview,
    checkTheCourseInReviewSubmision,
    createCourseAddCollaborator,
    collaboratorCanEditCourse,
    reviewStatusCollaborator,
    collaboratorNotAbleToDeleteCourse,
    SendForLimitedSharing,
    navigateToAllMyContent,
    applyStatusFilterinAllMyContent,
    applyFilterinAllMyContent,
    verifyPagenationInAllMyContent,
    createInviteOnlyBatch,
    navigateToWorkspaceFeatures,
    validateCourseInCreatedByMeSection,
    courseSearchFilter,
    vaidatePageLangaugeTranslation,
    LangaugeTranslation,
    SearchCouseWithRegionalLang,
    clickOnViewAll,
    getContentFromQRCode,
    navigateToCourseAndSearchForOpenBatch,
    batchNameAndEndDateIsMandatoryFields,
    createOpenBatchWithEnrolmentDate,
    createOpenBatch,
    enrollForOpenBatch,
    checkTheCourseInMyCourseSection,
    searchContentWithFilter,
    carryForwardSearchFilter,
    courseSearch,
    searchWithQRcode,
    validateSignInPopupOnClickOnEnroll,
    navigateToCourse,
    navigateToTOCInExploreCoursePage,
    collaborator1CanEditCourse,
    collaborator2CanEditCourse,
    createUpcomingOpenBatchForCourse,
    validateCourseInAssigToMeSection,
    verifyCourseInOnGoingBatchSection,
    updateBatches,
    validateAllBatches,
    verifyBatchEditingFromExpiredCoursesSection,
    verifyPagenation,
    validationMsgWhileAddingMoreThan100Members,
    validateAllElementsInLanguageSelectionAsHindi,
    validateAllElementsInLanguageSelectionAsKannada,
    validateAllElementsInLanguageSelectionAsTamil,
    validateAllElementsInLanguageSelectionAsUrdu,
    createCourseWithRegionalLanguage,
    editTheCourseInDraft,
    sendForReviewTheRejectedCourse,
    userIsAbleToRateContent,
    unenrollFromBatch,
    consumeTheExpiredBatchCourseAndEnrolToOpenBatch,
    createCourseAddResourceAndValidateContribution,
    verifyBatchOptionWorkSpace,
    searchSelfAssesmentInLib,
    createCourseWithSelfContentAssesment,
    sendForReviewCourseWithName,
    createCourseWithAllResourceTypeWithDoID,
    editDetailsForm,
    editTheCourseInDraftAddNewResource,
    verifyConsumesCourseInTrainingSec,
    editCertificateRequirement,
    ChangeLangWhileConsuming,
    FullScreenMode,
    VerifyCourseWhichhasCertificate,
    nestedCourseValidationAsAdmin,
    ClickOnviewAllAndSearch,
    verifyCreateMyGroupAddMemberandAddActivity,
    groupMemberCourseConsumptionstatus,
    verifylastUpdatedandCourseConsumption,
    checkAutoBatchCreated,
    checkForGenericCourseFramework,
    checkForCurriculumCourseFramework,
    checkEditFormOfCurriculumframework,
    CheckCertificateOptions,
    enrollForUpcomingOpenBatch,
    verifyBookUI,
    verifyCourseUI,
    checkCreateBatchOption,
    checklastUpdatedOption,
    createCourseWithLatestCourse,
    enrollForexpiredBatch,
    sendForReviewForBookAsCourse,
    ExpiredBatchVisible,
    NotificationBellIconOnPortalAfterLogin,
    newCertificateTemplateCreation,
    startLeaning,
    shareModule,
    verifyCollapseAllOption,
    courseByFilter,
    clkMyGroups,
    enrollForOpenBatch2,
    createOpenBatchWithCloseEndDate,
    enrollForOpenBatchAndVerifyTimer,
    addGrpAndDeleteGrp,
    EditTitleDescriptionTags,
    ActivityDashboard,
    verifyTOCandCourseConsumption,
    createCourseAssessment,
    sendForReviewTheCourseAssessment,
    searchContent,
    deleteWorSpaceContent,
    createFutureBatch,
    contentFilterForGroups,
    contentSearchInDraftAndEdit,
    contentSearchInPublishedAndEdit,
    addChildSibling,
    contentSearchInDraftAndEditWithChildSibling,
    contentSearchInDraftAndEditwithDeleteNodes,
    searchDraftedContentInAllmyContentAndEdit,
    consentPopupShouldNotDisplayForMinorUser,
    deleteChildAndSiblingNode,
    editWithNodesVerifyMandatoryFields,
    navigateToCourseAndVerify,
    EditTargetFrameworkWithMultipleCategoricalValues,
    EditDraftedTargetFrameworkWithMultipleCategoricalValues,
    editTheCourseFromDraft,
    verifyCourseCard,
    rejectContentWithAnyRegionalLanguage,
    creatorReviewComments,
    contentSearchInDraftAndUpdateChildNode,
    validateNcertCreatorInUpforReview,
    verifyRejectedContentInDraftSection,
    createOpenBatchWithEnrollMentEndDate,
    validateEnrollmentEndDateNearJoinCourse,
    verifyCancelBtnInRejectAndPulbishPopup,
    consumeCollection,
    creatorReviewCommentsAndSendForReview,
    navigateToCourseAndSearchExpiredBatches,
    updateCollectionAndSendForReviewFromDraft,
    VerifyThatClickingAddCertificate,
    changeBMCValueAndVerifyAtHomeTab,
    UpdateAndSendForReview,
    verifyQRCodeSearchWorksFine,
    verifyThatUserIsAbleToEditScoreRuleAndView,
    publishCourseFromUpForReview2,
    publishCourseFromUpForReviewAndValidate,
    validateEndEnrollmentDate,
    verifySwitchToJoyfulTheme,
    addChildAndSiblingNode,
    verifyQuestionSet,
    createOpenBatchWithEnableDiscussion,
    consumeWithForum,
    ViewTheFilterOptionsWhileAddingActivity,
    verifyCloseOptionMusteSeenAtSearchBar,
    verifyCommunicationConsole,
    verifyLastUpdatedDateAndTimeOnGroup,
    dwnldAndGenerateQRinBookFromDraft,
    dwnldAndGenerateQRinBookFromPublish,
    verifyBookDetailsInSubmittedForReview,
    verifyDownlaodAsCSVMustBeDisplayedOnTheDashboard,
    verifyDownlaodedCSVFile,
    verifyAllTheGroupMembers,
    viewTheContentOnCommunicationConsole,
    verifyUpdateGroupButtonOnEditGroupDetails,
    openExistingGroup,
    deleteExistingGroup,
    verifyDeletedGroupNotAvailable,
    validateLoginPopup,
    verifyThatAskAQuestionIsReplacedWithDiscussionTopic,
    disableDiscussionForumOption,
    verifySubmitButtonOnDiscussionTopic,
    userIsAbleToCreateAndVerifyGeneralDiscussionTopics,
    navigateToGeneralDiscussionPage,
    verifyLoadingAnimationAfterClickingCloseButton,
    verifyLoadingAnimationAfterClickingBackButton,
    VerifyThereAreNoTagsAvailableMessageOnPortal,
    VerfiyThatPlaceholderBelowDiscussionTopic,
    VerifyThatPleaseElaborateSectionHasMin8Char,
    verifyUseMustBeDisplayedWithListOfDiscussions,
    verifyThatPlaceholderForTopicReplyAsMin10Char,
    verifyThatTextForLabelsCTAButtonsWatermarkMenusUpdated,
    verifyCamelCasingIsProperForDiscussionTopic,
    verifyCourseDetail,
    validateSubmittedForReview,
    validateCourseHaveNoCertificate,
    JoinCoursWithOpenBatch1,
    verifyUserShoulBeAbleToConsumeCourse,
    verifySynchProgressOptionAndSyncSuccess,
    verifyCourseConsumeFromProfile,
    publishContentFromUpForReviewBucket,
    verifyUserCanSeeOngoingCourseFromProfile,
    JoinCourseWithOpenBatch,
    verifyThatUserAbleToClickOnExplore,
    verifyTheContentInformation,
    verifyUserShoudlRedirectToOngoingCourseOnly,
    userShouldSeeTheExpiredCourseBatch,
    verifyExpiredCourseWithOptionResumeAndEnroll,
    verifThatUserCanSeeTwoCourseCardsInProfileAsWellAsMyCourses,
    userShouldSeeTheExpiredCourseBatchFromProfile,
    verifyThatLoggedInUserCanApplyFilterAndGetTheResultsFilters,
    userShouldSeeTheExpiredCourseBatchAndOngoingBatch,
    userShouldBeAbleToEnrollToNewBatchOnly,
    verifyThatUserAbleToUpdateTheGuestProfile,
    verifyThatUserIsDisplayedWithTheKebabMenuAndCompleteConsume,
    verifyThatWhenUserClicksOnKebabMenuSyncProgressNowIsDisplayed,
    verifyThatUserCanEnrollToOngoingBatchAlreadyExpiredBatch,
    validateShareIcon,
    verifyThatTheKebabMenuAndTheTextSyncProgressNowIsDisplayedOldCourses,
    verifyThatTheTextSyncProgressNowIsDisplayedInAnyRegionalLanguage,
    verifyThatUserCanOnlyClickOnSyncProgressNowOnce,
    userClicksOnAddNewToAddDetailsOfANewConversation,
    verifyCourseData,
    publishContentFromUpForReviewBucket2,
    validateSchoolHeadOfficialInPublishedUserType,
    editLocationAttributesInProfileSection,
    verifyLoginPageinMergeAccount,
    editprofileWithDiffRegionalAlnguage,
    hindiSubmitButton,
    kanndaSubmitButton,
    marathiSubmitButton,
    bengaliSubmitbutton,
    tamilSubmitButton,
    odiyaSubmitButton,
    gujratiSubmitButton,
    punjabiSubmitButton,
    editLocationAttributesInProfile,
    validateCourseDashBoard,
    createOpenBatchWithForum,
    joinCourseAndValidateForumIcon,
    editpersonalDetailsAndValidateInProfielPage,
    verifyCommunicationConsolePagenation,
    userClicksOnThreeDotsInTheActionColumnAndVerify,
    verifyConversationSetupScreenOnClickEditOption,
    verifyConversationStatusIsChangedToLiveWhenClicksOnEnableOption,
    userProvidesMandatoryAndOptionalOnTheConversationListingScreen,
    userProvidesMandatoryAndOptionalOnTheConversationListingAndClickNext,
    userClicksOnBackInConversationFlowScreen,
    verifyConversationStatusIsChangedToDisabledWhenClicksOnDisableOption,
    verifyThatUserIsAbleToEnableDFInGroupsForEmailId,
    verifyThatUserIsAbleToParticipateInDiscussionsInTheDFForGroups,
    verifyThatUserIsAbleToEnableDFInGroupsWithSplChar,
    addActivityToTheExistingGroup,
    userCanClearAllNotifications,
    openExistingGroup1,
    verifyThatUserSeesACountAgainstTheBellIcon,
    verifyAllTheNotificationsMustBeClickable,
    publishContent,
    switchToUserAndCopyUserID,
    validateMemeberNotificationWhenAddedToGroup,
    verifyNotificationBell,
    removeActivityFromExistingGroup,
    verifyThatUserCanDeleteNotificationsOneByOne,
    verifyGroupMemberIsNotifiedWhenAnActivityAdded,
    verifyGroupMemberIsNotifiedWhenAnActivityIsRemoved,
    userShouldBeRedirectedToConversationListingScreen,
    verifyuserShouldBeAbleToSearchByName,
    verifyCertificateIssuingCriteriaIsAdded,
    validateTags,
    validateCreateBatchOption,
    verifyUserShouldBeDisplayedWithLoader,
    verifyThatUserShouldBeDisplayedWithCourseCompletionMessage,
    createBookAndAddCoursesInChildAndUnitLevel,
    createCourseAndReturnDoidAndCourseName,
    verifyAdditionalCategoryFilter,
    createCourseAndSendForReviewBySearchingContentInLibrary,
    validateAndVerifyBannerContent,
    validateContinueLearningSection,
    exploreTabwithBrowseByRoles,
    exploreTabwithBrowseByBoard,
    exploreTabwithBrowseByCategories,
    validateFiltersInBrowseByCategries,
    validateFiltersInBrowseByBoard,
    validateFiltersInBrowseByRoles,
    homeTabwithBrowseBySubject,
    validateFiltersInBrowseBySubject,
    homeTabwithBrowseByCategories,
    validateFiltersInBrowseByCategriesWithHomeTab,
    recentlyPublishedCourse,
    validateFilters,
}