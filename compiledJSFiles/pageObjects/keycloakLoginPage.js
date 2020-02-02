"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class keycloakLoginPage {
    constructor() {
        this.firstEditBox = protractor_1.element(protractor_1.by.id('username'));
        this.secondEditBox = protractor_1.element(protractor_1.by.id('password'));
        this.actionButton = protractor_1.element(protractor_1.by.css("button[type='submit']"));
    }
}
exports.keycloakLoginPage = keycloakLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Y2xvYWtMb2dpblBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9rZXljbG9ha0xvZ2luUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLGlCQUFpQjtJQU8xQjtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUksb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNKO0FBYkQsOENBYUMifQ==