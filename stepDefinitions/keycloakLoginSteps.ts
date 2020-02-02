import { Given, When, Then } from "cucumber";
import {browser, element, by } from "protractor";
import { keycloakLoginPage } from "../pageObjects/keycloakLoginPage";
import chai from "chai";

let kclpObj = new keycloakLoginPage(); 
var expect = chai.expect;

Given('I landed on Keycloak Login page', function () {
    
    browser.waitForAngularEnabled(false);
    browser.get('https://iam-nad.techmahindra.com/cu-portal-staging/');

    //(browser.getTitle()).toEqual("RMP");
  });

  
  When('I enter {string} in username and {string} in password', async(string, string2) => {
    
    await browser.waitForAngularEnabled(false);
    await  kclpObj.firstEditBox.sendKeys(string);
    await browser.driver.sleep(10000);
    await kclpObj.secondEditBox.sendKeys(string2);
    await  browser.driver.sleep(10000);
  });

  When('I click Submit button', async() => {
       
    await kclpObj.actionButton.click();
    await browser.driver.sleep(10000);
  });

  Then('I should be LoggedIn successfully and {string} Dashboard page is displayed.', async (string) => {
    await browser.getTitle().then(function (title) {            
        console.log(title);
        expect(title).to.equal(string);
        
    });
  });
