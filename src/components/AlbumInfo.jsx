import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setAlbumsPhotoList } from '../redux/actions/action'
import { isLoadingPhotos, photos } from '../redux/selectors/selector'

import TablePhotos from './TablePhotos'
import Loading from './Loading'

const AlbumInfo = () => {
  const { id } = useParams();

  const dispatch = useDispatch()

  const photosList = useSelector(photos)
  const isLoading = useSelector(isLoadingPhotos)

  useEffect(() => {
    dispatch(setAlbumsPhotoList(id))
  }, [id, dispatch]);


  return (
    <>
      <h1>Photos List - ID: {id}</h1>
      {!isLoading ?
        <TablePhotos
          rows={photosList}
        />
        :
        <Loading />
      }
    </>
  )
}

export default AlbumInfo