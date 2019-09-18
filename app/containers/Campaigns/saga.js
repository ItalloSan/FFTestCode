import { takeLatest, put } from 'redux-saga/effects';
import { LOAD_INFLUENCER } from './constants';
import { influencer } from './dummyData';
import { influencerLoaded, influencerLoadingError } from './actions';
// import { makeSelectLoadInfluencer } from './selectors';

// RUN OUT OF TIME BUT THIS WOULD BE CHANGED TO ACT AS A SERVICE AN API
export function* getInfluencer() {
  try {
    // Call our request helper (see 'utils/request')
    const influenc = influencer;
    yield put(influencerLoaded(influenc));
  } catch (err) {
    yield put(influencerLoadingError(err));
  }
}

export default function* campaignsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_INFLUENCER, getInfluencer);
}
