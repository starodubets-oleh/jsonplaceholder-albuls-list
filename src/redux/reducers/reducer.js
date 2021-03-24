import {
  PUT_ADD_ALBUM,
  PUT_ALBUMS,
  PUT_ALBUMS_IS_LOADING,
  PUT_ALBUMS_PHOTOS_LIST,
  PUT_ALBUMS_PHOTOS_LIST_IS_LOADING,
  PUT_DELETE_ALBUM,
  PUT_EDIT_ALBUM
} from '../actions/action'

const initialState = {
  albums: [],
  albumsIsLoading: false,
  photosList: [],
  photosListIsLoading: false,
  ansverDelete: {},
  ansverEdit: {},
  addNewAlbums: {}
}

export const data = (state = initialState, {type, payload}) => {
  switch (type) {
      case PUT_ALBUMS:
          return{
              ...state,
              albums: payload
          }
      case PUT_ALBUMS_IS_LOADING:
          return{
              ...state,
              albumsIsLoading: payload
          }
      case PUT_ALBUMS_PHOTOS_LIST:
          return{
              ...state,
              photosList: payload
          }
      case PUT_ALBUMS_PHOTOS_LIST_IS_LOADING:
          return{
              ...state,
              photoListIsLoading: payload
          }
      case PUT_DELETE_ALBUM:
          return{
              ...state,
              ansverDelete: payload
          }
      case PUT_EDIT_ALBUM:
          return{
              ...state,
              ansverEdit: payload
          }
      case PUT_ADD_ALBUM:
          return{
              ...state,
              addNewAlbums: payload
          }
      default:
          return state
  }
}