/*
 *
 * Campaigns reducer
 *
 */
import produce from 'immer';
import {
  LOAD_INFLUENCER,
  LOAD_INFLUENCER_SUCCESS,
  LOAD_INFLUENCER_FAILURE,
} from './constants';

export const initialState = {
  influencer: {},
};

/* eslint-disable default-case, no-param-reassign */
const campaignsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_INFLUENCER:
        draft.loading = true;
        draft.error = false;
        draft.userData.influencer = false;
        break;

      case LOAD_INFLUENCER_SUCCESS:
        draft.userData.influencer = action.influencer;
        draft.loading = false;
        break;

      case LOAD_INFLUENCER_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default campaignsReducer;
