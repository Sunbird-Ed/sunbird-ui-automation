const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/ETBPageObj/EtbPageObj.js');
const sanityfun =require(protractor.basePath+'/test/pageObject/SanityPageObj.js');

describe('TvLessonOptionInResourceSendForReviewfor review and publish.', () => {

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
    it('TvLessonOptionInResourceSendForReview',function(){
       utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let resourceName=resourcePageObj.createResource();
        resourcePageObj.sendForReviewTheResourceWithTVLessonInAdditionalCateg();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(resourceName);
        utility.userLogout();
        utility.userLogin('Creator');
        sanityfun.TVClassSearch(resourceName);


    })

    
   
});
   
