import { NgFootbalPage } from './app.po';

describe('ng-footbal App', () => {
  let page: NgFootbalPage;

  beforeEach(() => {
    page = new NgFootbalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
