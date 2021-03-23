import {call, put, all, takeLatest} from 'redux-saga/effects'

import axios from 'axios'
import {
        SET_ALBUMS_IS_LOADING,
        SET_ALBUMS,
        putAlbums,
        putAlbumsIsLoading,
        SET_ALBUMS_PHOTOS_LIST,
        SET_ALBUMS_PHOTOS_LIST_IS_LOADING,
        putAlbumsPhotoList,
        putAlbumsPhotoListIsLoading
} from '../actions/action'


function* workerAlbumsIsLoading({payload}) {
  const data = yield payload
  yield put(putAlbumsIsLoading(data)) 
}

function* watchAlbumsIsLoading() {
  yield takeLatest(SET_ALBUMS_IS_LOADING, workerAlbumsIsLoading)
}

function fetcAlbums() {
  return axios.get(`http://jsonplaceholder.typicode.com/albums`)
  .then(res => res.data)
}
function* workerAlbums({payload}) {
  try {
      yield put(putAlbumsIsLoading(true))
      const data = yield call(fetcAlbums, payload)
      yield put(putAlbums(data))
  } catch (error) {
      yield put(putAlbums(error))
  } finally {
      yield put(putAlbumsIsLoading(false))
  }
}
function* watchAlbums(){
  yield takeLatest(SET_ALBUMS, workerAlbums)
}

//-------------------------------------------------

function* workerAlbumsPhotoListIsLoading({payload}) {
  const data = yield payload
  yield put(putAlbumsPhotoListIsLoading(data)) 
}

function* watchAlbumsPhotoListIsLoading() {
  yield takeLatest(SET_ALBUMS_PHOTOS_LIST_IS_LOADING, workerAlbumsPhotoListIsLoading)
}

function fetcAlbumsPhotoList(payload) {
  return axios.get(`http://jsonplaceholder.typicode.com/albums/${payload}/photos`)
  .then(res => res.data)
}
function* workerAlbumsPhotoList({payload}) {
  try {
      yield put(putAlbumsPhotoListIsLoading(true))
      const data = yield call(fetcAlbumsPhotoList, payload)
      yield put(putAlbumsPhotoList(data))
  } catch (error) {
      yield put(putAlbumsPhotoList(error))
  } finally {
      yield put(putAlbumsPhotoListIsLoading(false))
  }
}
function* watchAlbumsPhotoList(){
  yield takeLatest(SET_ALBUMS_PHOTOS_LIST, workerAlbumsPhotoList)
}


export default function* rootSaga() {
  yield all([
    watchAlbumsIsLoading(),
    watchAlbums(),
    watchAlbumsPhotoListIsLoading(),
    watchAlbumsPhotoList()
  ])
}