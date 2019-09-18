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
  loading: false,
  error: false,
  influencer: false,
};

/* eslint-disable default-case, no-param-reassign */
const campaignsReducer = (state = initialState, action) =>
  
  produce(state, draft => {
    switch (action.type) {
      case LOAD_INFLUENCER:
        draft.loading = true;
        draft.error = false;
        draft.influencer = false;
        break;

      case LOAD_INFLUENCER_SUCCESS:
        //console.log('action', action);
        draft.influencer = action.influencer;
        draft.loading = false;
        break;

      case LOAD_INFLUENCER_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default campaignsReducer;
