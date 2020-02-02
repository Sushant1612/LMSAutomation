"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var mylearningalltab = /** @class */ (function () {
    function mylearningalltab() {
        this.mylearningicon = protractor_1.element(protractor_1.by.className('ru-icon-my-learning'));
        this.Mandatorytext = protractor_1.element(protractor_1.by.linkText("MANDATORY (1)"));
        this.courseimage = protractor_1.element(protractor_1.by.css('[class="banner-img"]'));
        this.coursename = protractor_1.element(protractor_1.by.linkText("Basic Information Security Awareness Training"));
        this.courserating = protractor_1.element(protractor_1.by.css('[class="ng-star-inserted"]'));
        this.ratingcount = protractor_1.element(protractor_1.by.css('.ng-star-inserted'));
        this.startlearningbutton = protractor_1.element(protractor_1.by.buttonText(' START LEARNING '));
        this.Lecatureprogress = protractor_1.element(protractor_1.by.css('.stats'));
        this.Gridicon = protractor_1.element(protractor_1.by.css('[class="ru-icon-grid active"]'));
    }
    return mylearningalltab;
}());
exports.mylearningalltab = mylearningalltab;
