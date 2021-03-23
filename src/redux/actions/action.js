export const SET_ALBUMS = 'SET_ALBUMS'
export const PUT_ALBUMS = 'PUT_ALBUMS'
export const SET_ALBUMS_IS_LOADING = 'SET_ALBUMS_IS_LOADING'
export const PUT_ALBUMS_IS_LOADING = 'PUT_ALBUMS_IS_LOADING'
export const SET_ALBUMS_PHOTOS_LIST = 'SET_ALBUMS_PHOTOS_LIST'
export const PUT_ALBUMS_PHOTOS_LIST = 'PUT_ALBUMS_PHOTOS_LIST'
export const SET_ALBUMS_PHOTOS_LIST_IS_LOADING = 'SET_ALBUMS_PHOTOS_LIST_IS_LOADING'
export const PUT_ALBUMS_PHOTOS_LIST_IS_LOADING = 'PUT_ALBUMS_PHOTOS_LIST_IS_LOADING'

export const setAlbums = (state) => {
  return {
      type: SET_ALBUMS,
      payload: state
  }
}
export const putAlbums = (albums) => {
  return{
      type: PUT_ALBUMS,
      payload: albums
  }
}

export const setAlbumsIsLoading = (state) => {
  return {
      type: SET_ALBUMS_IS_LOADING,
      payload: state
  }
}

export const putAlbumsIsLoading = (isLoading) => {
  return{
      type: PUT_ALBUMS_IS_LOADING,
      payload: isLoading
  }
}
export const setAlbumsPhotoList = (state) => {
  return {
      type: SET_ALBUMS_PHOTOS_LIST,
      payload: state
  }
}
export const putAlbumsPhotoList = (photos) => {
  return{
      type: PUT_ALBUMS_PHOTOS_LIST,
      payload: photos
  }
}

export const setAlbumsPhotoListIsLoading = (state) => {
  return {
      type: SET_ALBUMS_PHOTOS_LIST_IS_LOADING,
      payload: state
  }
}

export const putAlbumsPhotoListIsLoading = (isLoading) => {
  return{
      type: PUT_ALBUMS_PHOTOS_LIST_IS_LOADING,
      payload: isLoading
  }
}