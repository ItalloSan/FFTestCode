import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCampaign = state => state.campaigns || initialState;

const makeSelectLoadInfluencer = () =>
  createSelector(
    selectCampaign,
    campaignState => campaignState.influencer,
  );

export { selectCampaign, makeSelectLoadInfluencer };
