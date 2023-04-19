let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let AllureReporter = require('jasmine-allure-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');



exports.config = {

    // seleniumAddress: 'http://localhost:4444/wd/hub',
     directConnect: true,
    // allScriptsTimeout: 10000000000,

    framework: 'jasmine2',
    restartBrowserBetweenTests: false,
    waitForAngularEnabled: false,
    suites: {

    //  sanity1: 'test/specs/sanity1/*.spec.js',
    //   sanity2: 'test/specs/sanity2/*.spec.js',
    //   sanity3: 'test/specs/sanity3/*.spec.js',
        
        // SunbirdPortal1: 'test/specs/Sunbird_ED_Portal_1/*.spec.js',
        //   SunbirdPortal2: 'test/specs/SUNBIRD_ED_Portal_2/*.spec.js',
       //  SunbirdPortal3: 'test/specs/Sunbird_ED_Portal_3/*.spec.js',
        // SunbirdPortal4: 'test/specs/Sunbird_ED_Portal_4/*.spec.js',
        // SunbirdPortal5: 'test/specs/Sunbird_ED_Portal_5/*.spec.js',
       //  SunbirdPortal6: 'test/specs/Sunbird_ED_Portal _6/*.spec.js',
        // SunbirdPortal7: 'test/specs/Sunbird_ED_Portal_7/*.spec.js',
        // SunbirdPortal8: 'test/specs/Sunbird_ED_Portal_8/*.spec.js',
        // SunbirdPortal9: 'test/specs/Sunbird_ED_Portal_9/*.spec.js',
        // SunbirdPortal10: 'test/specs/Sunbird_ED_Portal_10/*.spec.js',



        // SunbirdUCI: 'test/specs/Sunbird_ED_Portal_10/createBookAndInsideTocValidateTheCreatedNodesAndTheSequence.spec.js',
        // SunbirdObserv : 'test/specs/Sunbird_Observ/*.spec.js',
    //    SunbirdLern : 'test/specs/Sunbird Lern/*.spec.js',

        // sunbirdKnowledge1: 'test/specs/SUNBIRD_Knowledge_1/*.spec.js',
      //   sunbirdKnowledge2: 'test/specs/SUNBIRD_Knowledge_2/*.spec.js',
     //    sunbirdKnowledge3: 'test/specs/SUNBIRD_Knowledge_3/*.spec.js',
       //  sunbirdKnowledge4: 'test/specs/SUNBIRD_Knowledge_4/*.spec.js',
     //    sunbirdKnowledge5: 'test/specs/SUNBIRD_Knowledge_5/*.spec.js',
        // SunbirdKnowledge6: 'test/specs/SUNBIRD_Knowledge_6/*.spec.js',
      
   //   SunbirdKnowledge6: 'test/specs/Sunbird_UCI/*.spec.js',

        // Sunbird_Enquiry : 'test/specs/Sunbird_ED_Portal_7/CheckTrackableCollection.spec.js',
        // sanity1: 'test/specs/Sunbird_ED_Portal_1/verifyUserShouldBeDisplayedWithTheEnrollmentCloseMessage.spec.js',
        // Sunbird_Enquiry : 'test/specs/SUNBIRD_Knowledge_6/verifyDifferentReportsInAdminDashboardAndvalidate.spec.js',
        // sanity1: 'test/specs/Sunbird_ED_Portal_3/verifyThatUserUhouldGetTheSelectedTemplateWhichWasSelectedDuringCreationWhilePreviewing.spec.js',
        // Sunbird_Enquiry : 'test/specs/SUNBIRD_Knowledge_6/verifyCopyRightYearForNewResourceContent.spec.js',
        // sanity1: 'test/specs/SUNBIRD_Inquiry/verifyThatCreatorIsAbleToPreviewTheMCQQuestionVideoAsSolutionInLandscapeMode.spec.js',
        // Sunbird_Enquiry : 'test/specs/SUNBIRD_Inquiry/verifyThatUserIsAbleToZoomInFurtherForThePopupImageByCliclingOnZoomOutIcon.spec.js',
        // sanity1: 'test/specs/sanity1/verifyCreatorIsAbleToCopyTheBook.spec.js',
        // Sunbird_Enquiry : 'test/specs/SUNBIRD_Inquiry/*.spec.js',
        
        // sanity1: 'test/specs/SUNBIRD_Knowledge_6/verifyThatAllMathematicalEquationsAndSymbolsAreRenderedProperlyForMTF.spec.js',
        // // Sunbird_Enquiry : 'test/specs/SUNBIRD_Inquiry/*.spec.js',
        // sanity1: 'test/specs/sanity2/CreateResourceAndVerify.spec.js',        
        // userOrgAndCredentials: 'test/specs/Sunbird_ED_Portal_10/PostInDiscussionForm.spec.js',
        
        //sanity2: 'test/specs/SUNBIRD_Knowledge_6/verify.spec.js',
        
        // sanity1: 'test/specs/SUNBIRD_Inquiry/verifyWheterAllTheAvailableQuestionsAreGettingListedInTheSection.spec.js',
        // userOrgAndCredentials: 'test/specs/userOrgAndCredentials/*.spec.js',
        // userOrgAndCredentials: 'test/specs/userOrgAndCredentials/validateTncpopUpInManageOption.spec.js',

        // TPD: 'test/specs/TPD2/ConsumeCourseNextModule.spec.js',
        // TpdCollaboration : 'test/specs/TPDCollobaration/*.spec.js',
        // tpd: 'test/specs/tpd/*.spec.js',
        // sanity2: 'test/specs/userOrgAndCredentials/validateOnboardingDetails.spec.js',
        // userOrgAndCredentials: 'test/specs/userOrgAndCredentials/*.spec.js',
        // Consumption: 'test/specs/Consumption/*.spec.js',
        // sourcing3: 'test/specs/sourcing3/*.spec.js',
        // sourcing4: 'test/specs/sourcing4/*.spec.js',
        // sourcing1: 'test/specs/sourcing1/*.spec.js',
        // sourcing2: 'test/specs/sourcing2/*.spec.js',
        // sourcing3: 'test/specs/sourcing3/*.spec.js',
        // sourcing21:'test/specs/so8/*.spec.js',
        // consumption1: 'test/specs/consumption1/*.spec.js',
        // consumption2: 'test/specs/consumption2/*.spec.js',
        // consumption3: 'test/specs/consumption3/SelectDifferentFiltersAndVerifyFiltersRetainedInAllTheTabs.spec.js',
        // consumption4: 'test/specs/consumption4/*.spec.js',
        // contentcreation: 'test/specs/content-creation/*.spec.js',
    //   testing:'test/specs/sanity2/CreateBookAndVerify.spec.js',
    //   test2:'test/specs/sanity2/CreateCourseAndVerify.spec.js',
      // test3:'test/specs/FilterScenarioED_Portal/VerifyDigitalTxtBookFilterPersistOnlyInDigitalTxtbookNotInOtherTabs.spec.js',
//test:'test/specs/SUNBIRD_Knowledge_5/VerifyUpdatedChangedInMetadataPageWhenUserClickBackBtnAndDoChangesAndComeBack.spec.js'

//test:'test/specs/SUNBIRD_Knowledge_4/CreateResourceWith4MCQ4FTB4MTF.spec.js'

//test1:'test/specs/SUNBIRD_Knowledge_2/AdminContentCreatorShouldNotBeAbleEditAdoptedBookInAllTextbookSection.spec.js'


//test:'test/specs/SUNBIRD_Knowledge_6/openDraftBookAndUpdateChildNodesWithQrCodeOfDiffTenant.spec.js'
//test:'test/specs/SUNBIRD_Knowledge_1/validateWorkspaceOptionAndSection.spec.js'
//test:'test/specs/SUNBIRD_Knowledge_6/CopyMP4ContentAndSendForReview.spec.js'
//test:'test/specs/SUNBIRD_Knowledge_3/EditPublishedWebMUploadContentWithSameTypeWebmAndVerify.spec.js'
test:'test/specs/SUNBIRD_Knowledge_3/ImageContainerShouldNotDisplayForGridAndImageHorizontalayout.spec.js'
},
    allScriptsTimeout: 4000000000,

    // suites: {
    //     contentcreation: 'test/specs/content-creation/*.spec.js',`
    //     sanity: 'spec/sanityte`sts/*.js',
    //     full: 'spec/*.js'
    // },

  
   
    //Run Only in Chrome Browser
    capabilities: {
        browserName: 'chrome',
        version: '78.0.3904.108',
        platform: 'Any',
        shardTestFiles: true,
        maxInstances:3,
        chromeOptions: {
            w3c: false,
            prefs: {
                profile: {
                    default_content_settings: {
                        popups: 0,
                    },
                },
                download: {
                    default_directory: "/home/qualitrix/Documents/diksha-Protractor/downloads/",
                    //  default_directory: "/home/qualitrix/Documents/diksha-Protractor/test/pageObject",
                }
            },
            args: ['--disable-infobars', '--no-sandbox', '--disable-dev-shm-usage',
                //          args: ['--incognito',

                // '--disable-extensions',
                // '--verbose',
                // '--no-sandbox'
                // '--headless'
                //,'--start-maximized'
                //  ,'--incognito'
                //,'--disable-setuid-sandbox'

            ]
        }
    },
    
    
    //Run in both chrome and firefox browsers parallelly
    // multiCapabilities: [
    //     {
    //         'browserName': 'chrome',
    //         'chromeOptions': {
    //             'args': ['--disable-infobars']
    //         }
    //     },
    //     {
    //         'browserName': 'firefox',
    //         'moz:firefoxOptions': {
    //             'args': ['--safe-mode']
    //         }
    //     }
    // ],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 2500000,
        isVerbose: true,
        realtimeFailure: true,
        includeStackTrace: true,
    },
    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
    },
    onPrepare: function () {
        protractor.basePath = __dirname;
        browser.ignoreSynchronization = false;
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true,
        }));
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Report/screenshots'
            , takeScreenShotsOnlyForFailedSpecs: true
        }).getJasmine2Reporter());
        // *************************************************************************************
        // by.addLocator('dropdownText', function (Text, opt_parentElement) {
        //     // This function will be serialized as a string and will execute in the
        //     // browser. The first argument is the text for the list. The second
        //     // argument is the parent element, if any.
        //     var using = opt_parentElement || document;
        //     var nodes = using.querySelectorAll('[li]');

        //     // Return an array of listValues with the text.
        //     return Array.prototype.filter.call(nodes, function (node) {
        //         return (node.getAttribute('li') === Text);
        //     });
        // });
        // **************************Not being used,hence could be removed later**************************************************
        by.addLocator('dropdown', function (value, parentElement) {
            parentElement = parentElement || document;
            var nodes = parentElement.querySelectorAll('[li]');
            return Array.prototype.filter.call(nodes, function (node) {
                return (node.getAttribute('li') === value);
            });
        });
        // *******************************************Allure Report*****************************************

        const reporter = new AllureReporter({
            allureReport: {
                resultsDir: 'allure-results'
            }
        });
        var today = new Date();
        var timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm-' + today.getSeconds() + 's';
        ScreenShotName = 'Ekstep_Admin' + '-' + timeStamp;
        jasmine.getEnv().addReporter(reporter);
        // jasmine.getEnv().topSuite().afterEach({
        //     fn: async function () {
        //         try {
        //             await browser.takeScreenshot().then(function (png) {
        //                 allure.createAttachment(ScreenShotName, new Buffer.from(png, 'base64'));
        //             });
        //         } catch (e) {
        //             console.log(e);
        //         }
        //     }
        // });
        var originalAddExpectationResult = jasmine.Spec.prototype.addExpectationResult;
        jasmine.Spec.prototype.addExpectationResult = function () {
            if (!arguments[0]) {
                screenshot(arguments[1].message);
            }
            return originalAddExpectationResult.apply(this, arguments);
        };
        var screenshot = function (message) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment(message, function () {
                    return new Buffer.from(png, 'base64')
                }, 'image/png')();
            })
        }
    }
};