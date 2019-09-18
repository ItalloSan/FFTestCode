/*
 *
 * Campaigns actions
 *
 */

import {
  LOAD_INFLUENCER,
  LOAD_INFLUENCER_SUCCESS,
  LOAD_INFLUENCER_FAILURE,
} from './constants';

export function loadInfluencer() {
  return {
    type: LOAD_INFLUENCER,
  };
}

export function influencerLoaded(influencer) {
  return {
    type: LOAD_INFLUENCER_SUCCESS,
    influencer,
  };
}

export function influencerLoadingError(error) {
  return {
    type: LOAD_INFLUENCER_FAILURE,
    error,
  };
}
