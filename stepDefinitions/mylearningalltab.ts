import { Given, When, Then } from 'cucumber';
import {browser,element,by } from "protractor";
import  {mylearningpage} from "../pageObjects/mylearningallpage";
import chai from "chai";



let mlp =new mylearningpage();
var expect = chai.expect;


Given('I am landed on UC portal Login page', function () {
    
    browser.waitForAngularEnabled(false);
    browser.get('https://iam-nad.techmahindra.com/cu-portal-staging/');

    
  });

  
  When('I Entered {string} in username field and {string} in password field', async(string, string2)=> {
        
       await browser.waitForAngularEnabled(false);
       await mlp.usernamefield.sendKeys(string);
       await browser.driver.sleep(10000);
       await mlp.passwordfield.sendKeys(string2);
       await browser.driver.sleep(10000);
       
  });

  Then('I clicked on submit button', async () =>{
      await mlp.submitbutton.click();
      await browser.driver.sleep(10000);

    
  });

  Then('Verify the dashboard title {string}', async (string)=> {
    mlp.dashboard.getText().then(function(title){

      expect(title).to.equal(string);
    });
  
  });
  
  When('I cliked on my learning icon', async() => {
       
    await mlp.myLearningIcon.click();
    await browser.driver.sleep(10000);
  });

  Then('Verify the my learning page title {string}', async (string) => {
    
    await mlp.mylearningtitle.getText().then(function(title)
    {
     expect(title).to.equal(string);
     console.log(title);

    });


  });
    
            
  Given('I cliked on my learning icon and my learning page opens up', function () 
 {
     mlp.myLearningIcon.click();
      
    
  });

    
  Then('Verify the All tab is present {string}', async (string) => {
    
    await mlp.mylearningtitle.getText().then(function(title)
    {
     expect(title).to.equal(string);
     console.log(title);

    });

    Then('Verify the mandatory section title {string}', async (string)=> {
      
      await mlp.mandatorysection.getText().then(function(title)
      {
        expect(title).to.equal(string);
        console.log(title);

      });

          
  
  });

   

  Then('Verify the image of the course {string}', async (string)=>
  {
    await mlp.courseimage.getText().then(function(img)
    {
      expect(img).to.equal(string);
      console.log(img);
    });


  });


  Then('Verify the title of the course {string}', async (string)=>
  {
    await mlp.coursetitle.getText().then(function(title)
    {
      expect(title).to.equal(string);
      console.log(title);
    });

  
  });

    

  Then('Verify the rating five stars are displyed {string}', async (string)=>
  {
    await expect(mlp.rating.isDisplayed).to.equal(true);
      
        
  });

   

  Then('Verify the count of people rated {string}', async (string)=>
  {
    expect(mlp.ratingcount.isDisplayed).to.equal(true);

  });

   

  Then('Verify the enrollment date {string}', async (string)=>
  {
    expect(mlp.enrollmentdate.isDisplayed).to.equal(true);
         
  
  });

   

 Then ('Verify the total Lectures Completed is present {string}', async (string)=>
  {
      await mlp.completedlecture.getText().then(function(text)
      {
        expect(text).to.equal(string);
        console.log(text);

      });
         
  
  });
    
    
  });
