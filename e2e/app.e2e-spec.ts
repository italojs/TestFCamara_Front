import { MacawWebBackofficePage } from './app.po';

describe('macaw-web-backoffice App', () => {
  let page: MacawWebBackofficePage;

  beforeEach(() => {
    page = new MacawWebBackofficePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
