import { SkrillconPage } from './app.po';

describe('skrillcon App', function() {
  let page: SkrillconPage;

  beforeEach(() => {
    page = new SkrillconPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
