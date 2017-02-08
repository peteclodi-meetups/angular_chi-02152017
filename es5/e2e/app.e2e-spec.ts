import { Es5Page } from './app.po';

describe('es5 App', function() {
  let page: Es5Page;

  beforeEach(() => {
    page = new Es5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
