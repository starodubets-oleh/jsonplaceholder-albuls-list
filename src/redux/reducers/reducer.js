import {
  PUT_ALBUMS,
  PUT_ALBUMS_IS_LOADING,
  PUT_ALBUMS_PHOTOS_LIST,
  PUT_ALBUMS_PHOTOS_LIST_IS_LOADING
} from '../actions/action'

const initialState = {
  albums: [],
  albumsIsLoading: false,
  photosList: [],
  photosListIsLoading: false
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
      default:
          return state
  }
}