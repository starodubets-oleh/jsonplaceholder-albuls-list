import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { setAlbums } from '../redux/actions/action'
import { albums, isLoadingAlbums } from '../redux/selectors/selector'

import Loading from './Loading';
import TableAlbums from './TableAlbums'

const AlbumList = () => {

  const dispatch = useDispatch()

  const albumsList = useSelector(albums)
  const isLoading = useSelector(isLoadingAlbums)

  useEffect(() => {
    dispatch(setAlbums())
  }, [dispatch]);

  return (
    <>
      <h1>Album List</h1>
      {!isLoading ?
        <TableAlbums
          rows={albumsList}
        />
        :
        <Loading />
      }
    </>
  )
}

export default AlbumList