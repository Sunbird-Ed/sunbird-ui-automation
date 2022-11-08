let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let AllureReporter = require('jasmine-allure-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    allScriptsTimeout: 100000, 

    framework: 'jasmine2',
    restartBrowserBetweenTests: false,
    waitForAngularEnabled: false,
    suites: {
        


    sanity1: 'test/specs/sanity1/*.spec.js',
  sanity2: 'test/specs/sanity2/*.spec.js',
   sanity3: 'test/specs/sanity3/*.spec.js',
     // sanity3: 'test/specs/sanity3/verifyTheBestScoreDisplayedinCourseToc.spec.js',
    //sanity3: 'test/specs/sanity3/downloadUsersCsvData.spec.js',
 //userOrgAndCredentials: 'test/specs/userOrgAndCredentials/*.spec.js',
 //Consumption: 'test/specs/Consumption/*.spec.js',
  //sourcing1: 'test/specs/sourcing1/*.spec.js',
  //sourcing2: 'test/specs/sourcing2/*.spec.js',
  //sourcing3: 'test/specs/sourcing3/*.spec.js',

  //TPDCollobration: 'test/specs/TPDCollobaration/*.spec.js',
        //useronboarding: 'test/specs/userOrgAndCredentials/*.spec.js',
   // contentcreation: 'test/specs/content-creation/*.spec.js',
   // QuestionScenrio: 'test/specs/QuestionScenrio-CC/*.spec.js',
    //  tpd1: 'test/specs/tpd/*.spec.js', 
    //  tpd2: 'test/specs/TPD2/*.spec.js', 
    //   tpd3: 'test/specs/TPDCollobaration/*.spec.js',

    //    ETB: 'test/specs/ETBSpecs/*.spec.js',  
    //  smoke : 'test/specs/smoke/*.spec.js', 
       
     //sample-execution

       //  VerifyHideActionOnEledment1:['test/specs/tpd/EditCertificateRequirementFromNoToYes.spec.js'],
        //    VerifyHideActionOnEledment3:['test/specs/ETBSpecs/copyBookAndSendForReview.spec.js'],
        //     VerifyHideActionOnElement2:['test/specs/ETBSpecs/generateQRCode.spec.js'],
        //    VerifyHideActionOnEledment4:['test/specs/ETBSpecs/VerifyCopyRightDetails.spec.js'],
        // searchSelfAssesmentInLibSearch:['test/specs/ETBSpecs/CreateBookInRegionalLanguageUsingTOCUploadAndDownload.spec.js'],
        //  VerifyHideActionOnEledment5:['test/specs/ETBSpecs/DownloadQrcodeInDraftPublishedAndLimitedSharing.spec.js'],
        // VerifyHideActionOnEledment6:['test/specs/ETBSpecs/CreateBookWithNoContentAndFilledEditDetailsForm.spec.js'],
        //  VerifyHideActionOnEledment7:['test/specs/ETBSpecs/TenantSpecificValidation.spec.js'],
       //  VerifyHideActionOnEledment8:['test/specs/sanity2/CreateCourseAndVerify.spec.js'],
        },
    allScriptsTimeout: 40000,

    // suites: {
    //     contentcreation: 'test/specs/content-creation/*.spec.js',
    //     sanity: 'spec/sanitytests/*.js',
    //     full: 'spec/*.js'
    
    // },


    //Run Only in Chrome Browser
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            w3c: false
            },
        version: '78.0.3904.108',
        platform: 'Any',
        shardTestFiles: true,
        maxInstances:2,
        chromeOptions: {
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
