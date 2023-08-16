const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');
const cont = require(protractor.basePath+ '/test/pageObject/contentCreationPageObj.js');

describe('validateContentsComingToAllSectionsLikeDraftSubmittedForReviewPublishedAndAllMyContentSectionsForCourse', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    
    it('validateContentsComingToAllSectionsLikeDraftSubmittedForReviewPublishedAndAllMyContentSectionsForCourse', function () {
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let courseName= sanityfun.createCourseAndValidateInAllContentBucketSections();
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        sanityfun.validateContentInPublishedSectionAfterPublishmentOfContent(courseName);
    })
});