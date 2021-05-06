const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('searchAllContentInExplorePage ', () => {

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
     //   utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    it('searchAllContentInExplorePage',function(){
        utility.handleDropDown();
        utility.handleLocationPopup();
       // utility.userLogin('Public User1');
        etbFun.searchContentInExplorePage('Textbook');
        etbFun.searchContentInExplorePage('Collection');
        etbFun.searchContentInExplorePage('Lessonplan');
        etbFun.searchContentInExplorePage('Resource');
        etbFun.searchContentInExplorePage('SelfAssessment');
        etbFun.searchContentInExplorePage('PracticeResource');
        etbFun.searchContentInExplorePage('LearningOutcomeDefinition');
        etbFun.searchContentInExplorePage('ExplanationResource');


        
    })
    
    

 
});
   
