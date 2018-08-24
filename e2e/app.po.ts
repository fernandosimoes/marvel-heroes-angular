import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  browserInstance() {
    return browser;
  }

  getTitle() {
    return element(by.tagName('h2'));
  }

  getHeroesLength() {
    return element.all(by.tagName('li'));
  }

  goToHeroDetails() {
    return element.all(by.tagName('li a'));
  }

  backToHeroes() {
    return element(by.css('.back'));
  }

}
