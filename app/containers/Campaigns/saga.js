import { take, call, put, select } from 'redux-saga/effects';
import { LOAD_INFLUENCER} from './constants';
import { loadInfluencer } from './actions';
import { makeSelectLoadInfluencer } from './selectors';
import request from 'utils/request';


// RUN OUT OF TIME BUT THIS WOULD BE CHANGED TO ACT AS A SERVICE AN API
export function* getRepos() {
  // Select username from store
  const username = 'facebook';
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export default function* campaignsSaga() {
  // See example in containers/HomePage/saga.js
}
