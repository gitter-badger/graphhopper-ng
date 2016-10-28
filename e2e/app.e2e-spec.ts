import { GraphhopperNgPage } from './app.po';
import { browser } from 'protractor';
import { protractor } from 'protractor';

declare var $: any;

describe('graphhopper-ng App', function() {
  let page: GraphhopperNgPage;

  beforeEach(() => {
    page = new GraphhopperNgPage();
    page.navigateTo();
  });

  it('should display message saying app works', () => {
    expect(page.getParagraphText()).toEqual('Graphhopper NG');
  });

  it('should add marker on map', () => {
    expect(page.countMarkers()).toBe(0);
    page.addMarker();
    page.clickOnMap(200, 200);
    expect(page.countMarkers()).toBe(1);
//    page.removeMarker();
//    page.clickOnMap(210, 210);
//    expect(page.countMarkers()).toBe(0);
  });

  it('should search for London', () => {
    page.search("london");
    browser.wait(protractor.ExpectedConditions.presenceOf($('#place-input[ng-reflect-model="London, UK"]')), 2000);    
    expect(page.getLocation()).toEqual("London, UK");
  });


});
