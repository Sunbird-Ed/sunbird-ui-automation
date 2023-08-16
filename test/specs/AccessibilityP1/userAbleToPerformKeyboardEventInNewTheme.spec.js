const utility = require(protractor.basePath +"/test/utility/utilityFunctions.js");
let getAppURL = require(protractor.basePath +"/test/pathFolder/changePath.js");
const resource = require(protractor.basePath +"/test/pageObject/resourcePageObj.js");

describe("userAbleToPerformKeyboardEventInOldAndNewTheme", () => {
  beforeEach(() => {
    browser.ignoreSynchronization = true;
    var Url = getAppURL.ConfigurePath().AppURL;
    var AppendExplore = "/explore";
    browser.get(Url + AppendExplore, 40000);
    browser.manage().timeouts().implicitlyWait(30000);
    browser.driver.manage().window().maximize();
  });

  afterEach(() => {
    browser.waitForAngularEnabled(false);
    browser.manage().deleteAllCookies();
  });

  it("userAbleToPerformKeyboardEventInNewTheme", function () {
    utility.handleDropDown();
    utility.handleLocationPopup();
    resource.userSltDifferentTabsUsingKeyboardEvents();
   
  });
});
