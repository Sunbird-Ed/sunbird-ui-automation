const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyCEBpageobj = require(protractor.basePath + '/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
const VDNfun = require(protractor.basePath + '/test/pageObject/VDNPageObj.js');


describe('Verify sourcing org admin is able to accept nomination ', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url = getAppURL.ConfigurePath().AppURL;
        var AppendExplore = '/sourcing';
        browser.get(Url + AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize();

    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });
    
    it('newspec', function () {
        utility.userLogin('Admin');
        let projectName = VDNfun.createProjectWithCourse();
        console.log(projectName);
        utility.userLogout();
        utility.userLoginContributer('Cont OrgAdmin');
        VDNfun.addSample(projectName);
        utility.userLogout();
        utility.userLogin('Admin');
        VDNfun.verifySourcingOrgAdminIsAbleToAcceptNomination(projectName);
        utility.userLogout();
        utility.userLoginContributer('ConOrgAdmin');
        let data=VDNfun.verifyProjectAvailableInAllProjectsTab(projectName);
        let questionTitle=data.quesSetTitle;
        let contentTitleName =data.contentName;
        console.log(questionTitle);
        console.log(contentTitleName);
        utility.userLogout();
        utility.userLoginContributer('Cont OrgAdmin');
        VDNfun.reviewContent(projectName,contentTitleName);
        utility.userLogout();
        utility.userLogin('Admin');
        VDNfun.verifyProjectCount(questionTitle,projectName,"sendBackForCorrection");
        utility.userLogout();
    })
});