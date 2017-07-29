import { QPage } from './app.po';

describe('q App', () => {
  let page: QPage;

  beforeEach(() => {
    page = new QPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
