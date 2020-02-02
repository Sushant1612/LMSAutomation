import {Config} from "protractor";
import * as reporter from "cucumber-html-reporter";
//var reporter = require('cucumber-html-reporter');

export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //with below property, you dont need to start selenium server 
    directConnect:true,
    // set to "custom" instead of cucumber.
    framework: 'custom',

     // path relative to the current config file
     frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/mylearning.feature'],
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },

    cucumberOpts: {
     //group by tags
     // tags: "@keycloakLogin",
      
      format: 'json:./cucumberreport.json',

     
      
       // require step definitions
      require: [
        './stepDefinitions/*.js' // accepts a glob
      ]
    },

    onComplete: () => {
      //  var reporter = require('cucumber-html-reporter');
 
        var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  79.0.3945.117",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);
      }

  };