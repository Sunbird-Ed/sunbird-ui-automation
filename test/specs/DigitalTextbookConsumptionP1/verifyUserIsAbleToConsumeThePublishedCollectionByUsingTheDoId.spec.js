const { browser } = require("protractor");
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const collectionPageObj = require(protractor.basePath + '/test/pageObject/collectionPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');


describe('verify User Is Able To Consume The Published Collection By Using The Do Id', () => {

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
    it('verifyUserIsAbleToConsumeThePublishedCollectionByUsingTheDoId', async function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let do_id = await collectionPageObj.createCollectionAndGetDoId();        
        console.log("   Do id received in test case  :"+do_id);    
        browser.sleep(3000);
        utility.userLogout();
        utility.userLogin('Reviewer');  
        tpdPageObj.publishCourseFromUpForReviewByUsingTheDoId(do_id);
        browser.sleep(2000);
        utility.userLogout();
        utility.userLogin('Public User2');
        tpdPageObj.navigateToCourseAndSearchForCollectionByDoId(do_id);    

    })
});



