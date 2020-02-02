import { Before, After, Status } from "cucumber";
import { browser } from "protractor";

// Before({tags: "@keycloakLogin"}, function () {
//     browser.driver

//     browser.driver.manage().window().maximize();
// })

Before(function () {
    browser.driver
   console.log("******************* Scenario Execution Started! *******************");
    
    browser.driver.manage().window().maximize();
});


After(async function(scenario) {
    console.log("******************* Scenario Execution Completed! *******************");
    if(scenario.result.status=== Status.FAILED)
    {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});