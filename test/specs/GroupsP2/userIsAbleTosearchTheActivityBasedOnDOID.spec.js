const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

describe('userIsAbleTosearchTheActivityBasedOnDOID', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/explore';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().deleteAllCookies();
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();

    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    
    it('userIsAbleTosearchTheActivityBasedOnDOID', function () {
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let data = sanityfun.createCollectionAndSendForReviewWithDoid();
        let content = data.keywrdNam;
        let urldata = data.currentUrl;
        urldata.then(function (input) {
        var doid = input.split("/")[6];
        console.log("RajuDOiD " +doid);
        utility.userLogout();
        utility.userLogin('Reviewer');
        tpdPageObj.publishCourseFromUpForReview(content);
        utility.userLogout();
        utility.userLogin('Public User2');
        sanityfun.verifyAddActivitySearchedByKeyword(doid);
       })
    })
});

