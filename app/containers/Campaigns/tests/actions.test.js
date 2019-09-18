import { loadInfluencer } from '../actions';

import { LOAD_INFLUENCER } from '../constants';

describe('Campaigns actions', () => {
  describe('Load Influencer', () => {
    it('should return the correct Influencer', () => {
      const fixture = {
        firsttName: 'Max',
        lastName: 'Maxx',
      };
      const expectedResult = {
        type: LOAD_INFLUENCER,
        Influencer: fixture,
      };
      expect(loadInfluencer()).toEqual(expectedResult);
    });
  });
});
