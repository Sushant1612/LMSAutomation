"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const keycloakLoginPage_1 = require("./pageObjects/keycloakLoginPage");
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
        let kclpObj = new keycloakLoginPage_1.keycloakLoginPage();
        protractor_1.browser.waitForAngularEnabled(false);
        kclpObj.firstEditBox.sendKeys('neeta.donge');
        protractor_1.browser.driver.sleep(10000);
        kclpObj.secondEditBox.sendKeys("neeta");
        protractor_1.browser.driver.sleep(10000);
        kclpObj.actionButton.click();
        protractor_1.browser.driver.sleep(10000);
        protractor_1.browser.getTitle().then(function (title) {
            expect(protractor_1.browser.getTitle()).toEqual("Cloud University");
            console.log(title);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Y2xvYWtMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2tleWNsb2FrTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUM7QUFFbkMsdUVBQW9FO0FBRXBFLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUV2QixJQUFJLGVBQWUsQ0FBQztJQUVwQixVQUFVLENBQUM7UUFDUCxlQUFlLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDO1FBQ25ELE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7SUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsd0NBQXdDLEVBQUU7UUFDekMsOEZBQThGO1FBQzlGLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQztRQUNuRSxvQkFBTyxDQUFDLE1BQU0sQ0FBQTtRQUVkLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLDZCQUE2QixFQUFFO1FBQzlCLElBQUksT0FBTyxHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztRQUV0QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO1lBQ25DLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==