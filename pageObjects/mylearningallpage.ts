import { ElementFinder, element,by} from 'protractor';

export class mylearningpage{

usernamefield:ElementFinder
passwordfield:ElementFinder
submitbutton:ElementFinder
myLearningIcon:ElementFinder
dashboard:ElementFinder
mylearningtitle:ElementFinder
alltab:ElementFinder
mandatorysection:ElementFinder
courseimage:ElementFinder
rating:ElementFinder
ratingcount:ElementFinder
enrollmentdate:ElementFinder
completedlecture:ElementFinder
coursetitle:ElementFinder



constructor()
{
    this.usernamefield = element(by.id('username'));
    this.passwordfield = element(by.id('password'));
    this.submitbutton = element(by.css("button[type='submit']"));
    this.myLearningIcon= element(by.css('[class="ru-icon-my-learning"]'));
    this.dashboard  = element(by.css('[class="title ng-star-inserted"]'));
    this.mylearningtitle = element(by.css('[class="title ng-star-inserted"]'));
    this.alltab = element(by.id('mat-tab-label-0-0'));
    this.courseimage = element(by.css('[class="banner-img"]'));
    this.rating =element(by.id('rating'));
    this.ratingcount = element(by.css('[class="rating-block"]'));
    this.enrollmentdate = element(by.css('[class="progress-text-block"]'));
    this.completedlecture = element(by.css('[class="stats"]'));
    this.coursetitle = element(by.css('[title="Basic Information Security Awareness Training"]'));


      

}

}
