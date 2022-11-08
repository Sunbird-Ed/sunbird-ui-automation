//const { protractor } = require("protractor/built/ptor");

const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const addSARCATTPRPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const collectionPageObj = require(protractor.basePath+'/test/pageObject/collectionPageObj.js');
const etbPage = require(protractor.basePath + '/test/pageObject/etbPageObj.js');
const sanityPage=require(protractor.basePath +'/test/pageObject/SanityPageObj.js')

describe('verifyUserAbleToAddCollaboratorOnLiveAndDraftTextBook', () => {

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
    it('verifyUserAbleToAddCollaboratorOnLiveAndDraftTextBook ',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let bookName=sanityPage.createBookSaveAsDraft();
        sanityPage.addCollboratortoDraftAndSaveBook(bookName);
        
    });
});