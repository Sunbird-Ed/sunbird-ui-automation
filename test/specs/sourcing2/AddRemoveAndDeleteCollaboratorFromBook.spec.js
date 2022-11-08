const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL = require(protractor.basePath + '/test/pathFolder/changePath.js');
const addSARCATTPRPageObj = require(protractor.basePath + '/test/pageObject/resourcePageObj.js');
const sanityfun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
const collectionPageObj = require(protractor.basePath + '/test/pageObject/collectionPageObj.js');
const etbPage = require(protractor.basePath + '/test/pageObject/etbPageObj.js');

describe('AU_033,AddRemoveAndDeleteCollaboratorFromBook', () => {

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
    it('AddRemoveAndDeleteCollaboratorFromBook ', function () {
        utility.handleDropDown();
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let bookName = sanityfun.createBookSaveAsDraft();
        sanityfun.addCollborator(bookName);
        // let bookName = "BookBKasandra";
        addSARCATTPRPageObj.removeCollboratortoDraftAndSaveBook(bookName);

    });
});
