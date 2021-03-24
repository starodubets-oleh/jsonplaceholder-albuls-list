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
        putAlbumsPhotoListIsLoading,
        SET_EDIT_ALBUM,
        putEditAlbum,
        SET_DELETE_ALBUM,
        putDeleteAlbum,
        SET_ADD_ALBUM,
        putAddAlbum
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
      yield alert(JSON.stringify(error))
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
      yield alert(JSON.stringify(error))
  } finally {
      yield put(putAlbumsPhotoListIsLoading(false))
  }
}
function* watchAlbumsPhotoList(){
  yield takeLatest(SET_ALBUMS_PHOTOS_LIST, workerAlbumsPhotoList)
}
//--------------------------------------

function fetcEditAlbum(payload) {
  console.log(payload);
  return axios.put(`http://jsonplaceholder.typicode.com/albums/${payload.idAlbum}`, {
    title: payload.name,
    id: payload.idAlbum
  })
  .then(res => res.data)
}
function* workerEditAlbum({payload}) {
  try {
      const data = yield call(fetcEditAlbum, payload)
      yield put(putEditAlbum(data))
      alert('Is edited' + JSON.stringify(data))
  } catch (error) {
      yield alert(JSON.stringify(error))
  }
}
function* watchEditAlbum(){
  yield takeLatest(SET_EDIT_ALBUM, workerEditAlbum)
}
//--------------------------------

function fetcDeleteAlbum(payload) {
  return axios.delete(`http://jsonplaceholder.typicode.com/albums/${payload}`)
  .then(res => res.data)
}
function* workerDeleteAlbum({payload}) {
  try {
      const data = yield call(fetcDeleteAlbum, payload)
      yield put(putDeleteAlbum(data))
      alert('Is Deleted')
  } catch (error) {
      yield alert(JSON.stringify(error))
  }
}
function* watchDeleteAlbum(){
  yield takeLatest(SET_DELETE_ALBUM, workerDeleteAlbum)
}
//---------------------------------

function fetcAddAlbum(payload) {
  return axios.post(`http://jsonplaceholder.typicode.com/albums`, payload)
  .then(res => res.data)
}
function* workerAddAlbum({payload}) {
  try {
      const data = yield call(fetcAddAlbum, payload)
      yield put(putAddAlbum(data))
      alert('Is added' + JSON.stringify(data))
  } catch (error) {
      yield alert(JSON.stringify(error))
  }
}
function* watchAddAlbum(){
  yield takeLatest(SET_ADD_ALBUM, workerAddAlbum)
}

export default function* rootSaga() {
  yield all([
    watchAlbumsIsLoading(),
    watchAlbums(),
    watchAlbumsPhotoListIsLoading(),
    watchAlbumsPhotoList(),
    watchEditAlbum(),
    watchDeleteAlbum(),
    watchAddAlbum()
  ])
}