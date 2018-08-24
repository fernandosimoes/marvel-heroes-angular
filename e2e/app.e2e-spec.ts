import { AppPage } from './app.po';
import { browser } from 'protractor';
import { } from 'jasmine';


describe('marvel-heroes App', () => {
  let page: AppPage;
  const titleHeroes = 'List of heroes Marvel Api';
  const titleHeroesDetails = 'DETAILS';

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitle().getText()).toEqual(titleHeroes);
  });

  it('List of heroes lenght', () =>{
    page.navigateTo();
    browser.waitForAngular();
    expect(page.getHeroesLength().count()).toBe(10);
  })

  it('Navigate to hero details', () =>{
    page.navigateTo();

    browser.waitForAngular();
    page.goToHeroDetails().first().click();
    browser.waitForAngular();
    expect(page.getTitle().getText()).toContain(titleHeroesDetails);
  })

  it('Back to Heroes', () => {
    page.navigateTo();
    browser.waitForAngular();
    page.goToHeroDetails().first().click();
    browser.waitForAngular();
    page.backToHeroes().click();
    browser.waitForAngular();
    expect(page.getTitle().getText()).toEqual(titleHeroes);
    expect(page.getHeroesLength().count()).toBe(10);
  })
});
