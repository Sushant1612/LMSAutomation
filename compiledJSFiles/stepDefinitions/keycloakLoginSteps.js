"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const keycloakLoginPage_1 = require("../pageObjects/keycloakLoginPage");
const chai_1 = __importDefault(require("chai"));
let kclpObj = new keycloakLoginPage_1.keycloakLoginPage();
var expect = chai_1.default.expect;
cucumber_1.Given('I landed on Keycloak Login page', function () {
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.get('https://iam-nad.techmahindra.com/cu-portal-staging/');
    //(browser.getTitle()).toEqual("RMP");
});
cucumber_1.When('I enter {string} in username and {string} in password', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield kclpObj.firstEditBox.sendKeys(string);
    yield protractor_1.browser.driver.sleep(10000);
    yield kclpObj.secondEditBox.sendKeys(string2);
    yield protractor_1.browser.driver.sleep(10000);
}));
cucumber_1.When('I click Submit button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield kclpObj.actionButton.click();
    yield protractor_1.browser.driver.sleep(10000);
}));
cucumber_1.Then('I should be LoggedIn successfully and {string} Dashboard page is displayed.', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.getTitle().then(function (title) {
        console.log(title);
        expect(title).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Y2xvYWtMb2dpblN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2tleWNsb2FrTG9naW5TdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBaUQ7QUFDakQsd0VBQXFFO0FBQ3JFLGdEQUF3QjtBQUV4QixJQUFJLE9BQU8sR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7QUFDdEMsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixnQkFBSyxDQUFDLGlDQUFpQyxFQUFFO0lBRXJDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsb0JBQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQztJQUVuRSxzQ0FBc0M7QUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsdURBQXVELEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFFckYsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLE1BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxNQUFPLG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVCQUF1QixFQUFFLEdBQVEsRUFBRTtJQUV0QyxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2RUFBNkUsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ25HLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbkMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=