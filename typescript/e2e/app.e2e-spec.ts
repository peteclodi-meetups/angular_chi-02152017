import { AngularChi02152017Page } from './app.po';

describe('angular-chi-02152017-typescript App', function() {
  let page: AngularChi02152017Page;

  beforeEach(() => {
    page = new AngularChi02152017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
