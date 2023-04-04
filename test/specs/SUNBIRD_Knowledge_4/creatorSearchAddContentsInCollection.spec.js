const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const collectionPo = require(protractor.basePath +'/test/pageObject/collectionPageObj.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('creatorSearchAddContentsInCollection', () => {

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
    it('creatorSearchAddContentsInCollection ',function(){
        utility.handleDropDown();
        
        utility.handleLocationPopup();
        utility.userLogin('Creator');
                let collectionName = collectionPo.createCollectionAndSaveAsDraft();
        utility.userLogout();
        utility.userLogin('Creator');
        tpdPageObj.addChildAndSiblingNode(collectionName);
    })

    
   
});
   
