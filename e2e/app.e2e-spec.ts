import { HeroWayPage } from './app.po';

describe('hero-way App', () => {
  let page: HeroWayPage;

  beforeEach(() => {
    page = new HeroWayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
