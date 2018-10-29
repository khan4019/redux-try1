import 'babel-polyfill';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchAll, getComments } from './api';

/*
  worker Saga will be fired on FETCH_POSTS_REQUESTED actions
*/
export function *fetchData() {
  const routes = ['/posts', '/comments'];
  const data = yield routes.map((r) => call(fetchAll, r));
  yield put({type: 'FETCH_DATA_SUCCEEDED', data});
}

/*
  worker Saga will be fired on ADD_COMMENT, EDIT_COMMENT and REMOVE_COMMENT actions
*/
export function *invalidateData() {
  yield put({type: 'INVALIDATE_DATA'});
}

/*
  Starts fetchPosts on each dispatched FETCH_POSTS_REQUESTED actions
*/
export function *watchFetchData() {
  yield takeEvery('FETCH_DATA_REQUESTED', fetchData);
}

/*
  Invalidates data on each dispatched ADD_COMMENT action
*/
export function *watchComments() {
  yield takeEvery(['ADD_COMMENT', 'EDIT_COMMENT', 'REMOVE_COMMENT'], invalidateData);
}

/*
  Single entry point to start all Sagas at once
*/
export default function *rootSaga() {
  yield [
    watchFetchData(),
    watchComments()
  ]
}
