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
const mylearningallpage_1 = require("../pageObjects/mylearningallpage");
const chai_1 = __importDefault(require("chai"));
let mlp = new mylearningallpage_1.mylearningpage();
var expect = chai_1.default.expect;
cucumber_1.Given('I am landed on UC portal Login page', function () {
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.get('https://iam-nad.techmahindra.com/cu-portal-staging/');
});
cucumber_1.When('I Entered {string} in username field and {string} in password field', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield mlp.usernamefield.sendKeys(string);
    yield protractor_1.browser.driver.sleep(10000);
    yield mlp.passwordfield.sendKeys(string2);
    yield protractor_1.browser.driver.sleep(10000);
}));
cucumber_1.Then('I clicked on submit button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield mlp.submitbutton.click();
    yield protractor_1.browser.driver.sleep(10000);
}));
cucumber_1.Then('Verify the dashboard title {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    mlp.dashboard.getText().then(function (title) {
        expect(title).to.equal(string);
    });
}));
cucumber_1.When('I cliked on my learning icon', () => __awaiter(void 0, void 0, void 0, function* () {
    yield mlp.myLearningIcon.click();
    yield protractor_1.browser.driver.sleep(10000);
}));
cucumber_1.Then('Verify the my learning page title {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield mlp.mylearningtitle.getText().then(function (title) {
        expect(title).to.equal(string);
        console.log(title);
    });
}));
cucumber_1.Given('I cliked on my learning icon and my learning page opens up', function () {
    mlp.myLearningIcon.click();
});
cucumber_1.Then('Verify the All tab is present {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield mlp.mylearningtitle.getText().then(function (title) {
        expect(title).to.equal(string);
        console.log(title);
    });
    cucumber_1.Then('Verify the mandatory section title {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
        yield mlp.mandatorysection.getText().then(function (title) {
            expect(title).to.equal(string);
            console.log(title);
        });
    }));
    cucumber_1.Then('Verify the image of the course {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
        yield mlp.courseimage.getText().then(function (img) {
            expect(img).to.equal(string);
            console.log(img);
        });
    }));
    cucumber_1.Then('Verify the title of the course {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
        yield mlp.coursetitle.getText().then(function (title) {
            expect(title).to.equal(string);
            console.log(title);
        });
    }));
    cucumber_1.Then('Verify the rating five stars are displyed {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(mlp.rating.isDisplayed).to.equal(true);
    }));
    cucumber_1.Then('Verify the count of people rated {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
        expect(mlp.ratingcount.isDisplayed).to.equal(true);
    }));
    cucumber_1.Then('Verify the enrollment date {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
        expect(mlp.enrollmentdate.isDisplayed).to.equal(true);
    }));
    cucumber_1.Then('Verify the total Lectures Completed is present {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
        yield mlp.completedlecture.getText().then(function (text) {
            expect(text).to.equal(string);
            console.log(text);
        });
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsZWFybmluZ2FsbHRhYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9teWxlYXJuaW5nYWxsdGFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUErQztBQUMvQyx3RUFBaUU7QUFDakUsZ0RBQXdCO0FBSXhCLElBQUksR0FBRyxHQUFFLElBQUksa0NBQWMsRUFBRSxDQUFDO0FBQzlCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFHekIsZ0JBQUssQ0FBQyxxQ0FBcUMsRUFBRTtJQUV6QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7QUFHckUsQ0FBQyxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMscUVBQXFFLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFFL0YsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLE1BQU0sR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUV2QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFLEdBQVMsRUFBRTtJQUMxQyxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFHdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxxQ0FBcUMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzFELEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztRQUV6QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUUsR0FBUSxFQUFFO0lBRTdDLE1BQU0sR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRDQUE0QyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFFbEUsTUFBTSxHQUFHLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7UUFFdEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQixDQUFDLENBQUMsQ0FBQztBQUdMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxnQkFBSyxDQUFDLDREQUE0RCxFQUFFO0lBRWpFLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7QUFHOUIsQ0FBQyxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsd0NBQXdDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUU5RCxNQUFNLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztRQUV0RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBCLENBQUMsQ0FBQyxDQUFDO0lBRUgsZUFBSSxDQUFDLDZDQUE2QyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7UUFFbEUsTUFBTSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUV0RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLENBQUMsQ0FBQyxDQUFDO0lBSVAsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUlILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO1FBRTlELE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxHQUFHO1lBRS9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFHTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBR0gsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7UUFFOUQsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7WUFFakQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUdMLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFJSCxlQUFJLENBQUMsb0RBQW9ELEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtRQUV6RSxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHdEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUlILGVBQUksQ0FBQywyQ0FBMkMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO1FBRWhFLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUlILGVBQUksQ0FBQyxxQ0FBcUMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO1FBRTFELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUlKLGVBQUksQ0FBRSx5REFBeUQsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO1FBRTVFLE1BQU0sR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFFckQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixDQUFDLENBQUMsQ0FBQztJQUdQLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=