import { ElementFinder, element, by } from "protractor";

export class keycloakLoginPage
{
    firstEditBox: ElementFinder;
    secondEditBox: ElementFinder;
    actionButton: ElementFinder;
    getResult: ElementFinder;

    constructor()
    {
        this.firstEditBox =  element(by.id('username'));
        this.secondEditBox = element(by.id('password'));
        this.actionButton = element(by.css("button[type='submit']"));
    }
}