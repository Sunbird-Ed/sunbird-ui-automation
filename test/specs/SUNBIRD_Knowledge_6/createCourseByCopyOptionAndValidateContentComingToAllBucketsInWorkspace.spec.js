const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const shareTCPageObj = require(protractor.basePath+'/test/pageObject/collectionPageObj.js');

describe('createCourseByCopyOptionAndValidateContentComingToAllBucketsInWorkspace', () => {
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

    it('createCourseByCopyOptionAndValidateContentComingToAllBucketsInWorkspace',function(){
        utility.handleDropDown();
        //browser.sleep(20000);
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        sanityFun.copyBookAsCourse('PortalContent');
        sanityFun.sendCopiedBookForReviewAndValidateInDraftBucket();
    });
});