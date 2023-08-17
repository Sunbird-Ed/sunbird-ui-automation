let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let AllureReporter = require('jasmine-allure-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
     seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
    //allScriptsTimeout: 10000000000,

    framework: 'jasmine2',
    restartBrowserBetweenTests: false,
    waitForAngularEnabled: false,
    suites: {

        

vdn1 : 'test/specs/Sanity2/*.spec.js',
      // vdn2 : 'test/specs/Sanity3/*.spec.js',
     // vdn3 : 'test/specs/Sanity4/*.spec.js',
       

      //vdn1 : 'test/specs/Sanity2/verifyDraftAndApprovalPendingStatusInTOCFromIndividualContributorSide.spec.js',
       vdn3 : 'test/specs/Sanity4/VerifySourcingOrgAdminisabletoRejectNomination.js',

      //  vdn3 : 'test/specs/RegressionSourcing1/SourcingorgAdminabletoseeStateSystem.js'
        // vdn3 : 'test/specs/Sanity4/verifyDefaultContributionOrgAdminIsAbleAssignRolesWithNominationEnabled.spec.js',
        // vdn3 : 'test/specs/Sanity4/VerifyCreatedProjectsAreAvailableOnAllProjectsTabForIndContributor.spec.js',
        // vdn3 : 'test/specs/Sanity4/verifyDefaultContributionOrgAdminIsAbleAssignRolesWithNominationDisabled.spec.js',
        // vdn3 : 'test/specs/Sanity4/verifyMyContentsTabIsAvailable.spec.js',
        //vdn3 : 'test/specs/Sanity4/verifyDraftStatusInApprovedProject.spec.js'

    },

    allScriptsTimeout: 4000000000,

    // suites: {
    //     contentcreation: 'test/specs/content-creation/*.spec.js',`
    //     sanity: 'spec/sanitytests/*.js',
    //     full: 'spec/*.js'

    // },


    //Run Only in Chrome Browser
    capabilities: {
        browserName: 'chrome',
        version: '114.0.5735.91',
        platform: 'Any',
        shardTestFiles: true,
        maxInstances: 3,
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
