const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL= require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const lspPageObj = require(protractor.basePath + '/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath + '/test/pageObject/tpdPageObj.js');
const resourcePageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');


describe('Book creator should be able to delete a book from following bucket', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();    
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });

 it('Bookcreatorshouldbeabletodeleteabookfromfollowingbucket  ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let bookName= sanityfun.createBookTnContentCred();
        console.log(bookName);
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        tpdPageObj.publishCourseFromUpForReview(bookName);
        utility.userLogout();
        utility.userLogin('ContentCreator');
        resourcePageObj.deletecreatedbookIntheallmycontent(bookName);
    })
})