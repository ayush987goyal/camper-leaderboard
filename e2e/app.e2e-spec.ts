import { CamperLeaderboardPage } from './app.po';

describe('camper-leaderboard App', () => {
  let page: CamperLeaderboardPage;

  beforeEach(() => {
    page = new CamperLeaderboardPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
