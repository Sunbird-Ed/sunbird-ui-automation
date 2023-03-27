const { browser } = require("protractor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/ETBPageObj/EtbPageObj.js');
const sanityfun =require(protractor.basePath+'/test/pageObject/SanityPageObj.js');

describe('SearchTVLesonTypeContent review and publish.', () => {

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
        browser.close();

    });
    it('SearchTVLesonTypeContent',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('ContentCreator');
        let resourceName=resourcePageObj.createResource();
        resourcePageObj.sendForReviewTheResourceWithTVLessonInAdditionalCateg();
        utility.userLogout();
        utility.userLogin('ContentReviewer');
        resourcePageObj.publishTheResourceFromUpForReview(resourceName);
        utility.userLogout();
        utility.userLogin('ContentCreator');
        sanityfun.TVClassSearch(resourceName);
    })
});
   
