"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe("Keyclock login", function () {
    var originalTimeout;
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
    });
    it("basic program to open Open EDx website", function () {
        //browser.get('https://iam-nad.techmahindra.com/cu-portal-staging/#/cu/main/dashboard/homes');
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://iam-nad.techmahindra.com/cu-portal-staging/');
        protractor_1.browser.driver;
        protractor_1.browser.driver.manage().window().maximize();
        expect(protractor_1.browser.getTitle()).toEqual("RMP");
    });
    it("Login to Studio Application", function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_2.element(protractor_2.by.id('username')).sendKeys('neeta.donge');
        protractor_2.element(protractor_2.by.xpath("//div[@class='mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon mdc-text-field--upgraded']//div[@class='mdc-notched-outline__idle']")).sendKeys('neeta');
        protractor_2.element(protractor_2.by.css("button[type='submit']")).click();
        //var nextPageButton = $('#submit');
        //nextPageButton.click();
        protractor_1.browser.driver.sleep(20000);
        protractor_1.browser.getTitle().then(function (title) {
            expect(protractor_1.browser.getTitle()).toEqual("Cloud University");
            console.log(title);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtQztBQUNuQywyQ0FBdUM7QUFFdkMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXZCLElBQUksZUFBZSxDQUFDO0lBRXBCLFVBQVUsQ0FBQztRQUNQLGVBQWUsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUM7UUFDbkQsT0FBTyxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTtRQUN6Qyw4RkFBOEY7UUFDOUYsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1FBQ25FLG9CQUFPLENBQUMsTUFBTSxDQUFBO1FBRWQsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsNkJBQTZCLEVBQUU7UUFDOUIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZKQUE2SixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbk0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqRCxvQ0FBb0M7UUFDcEMseUJBQXlCO1FBQ3pCLG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFDbkMsTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9