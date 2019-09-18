import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCampaign = state => state.campaigns || initialState;
console.log('state', selectCampaign);
const makeSelectLoadInfluencer = () =>
  createSelector(
    selectCampaign,
    campaignState => campaignState.influencer,
  );

export { selectCampaign, makeSelectLoadInfluencer };
