const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');

describe('Crea is Able to CreateQuestionAS4McQ,4MTF,4FLB and its navigate and Consume by other Users and Creator Can Delete that resource', () => {

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
    it('CreateResourceWith4MCQ4FTB4MTF', function () {
       
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
     //   let contentName=resourcePageObj.ValidateAllQuestionTypeInAddQuestionPage();
            let contentName = resourcePageObj.createQuestionsWith4MCQ4FTB4MTF();

   
   
     //     resourcePageObj.sendForReviewTheResource();
    //    resourcePageObj.reviewInSubmissions(contentName);
    //     utility.userLogout();
    //     utility.userLogin('Reviewer');
    //     resourcePageObj.publishTheResourceFromUpForReview(contentName);
    //     utility.userLogout();
    //         utility.userLogin('Public User2');
    //         resourcePageObj.navigateToLibraryAndSearchForResource(contentName);
       
     //   utility.handleDropDown();
        
        // utility.handleLocationPopup();
        // utility.userLogin('Creator');
        // let contentName = createRW4M4F4MPageObj.createQuestionsWith4MCQ4FTB4MTF();
        // // createRW4M4F4MPageObj.sendForReviewTheResource();
        // createRW4M4F4MPageObj.reviewInSubmissions(contentName);
        //utility.userLogout();
        // utility.userLogin('Reviewer');
        // createRW4M4F4MPageObj.publishTheResourceFromUpForReview(contentName);
        // utility.userLogout();


        //     utility.userLogin('Public User2');
        //     createRW4M4F4MPageObj.navigateToLibraryAndSearchForResource(contentName);
        //     utility.userLogout();

        //     utility.userLogin('Creator');
        //     createRW4M4F4MPageObj.deleteCreatedItems();


    })

});