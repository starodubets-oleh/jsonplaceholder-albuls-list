import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import { setAlbums } from '../redux/actions/action'
import { albums, isLoadingAlbums } from '../redux/selectors/selector'

import Loading from './Loading';
import TableAlbums from './TableAlbums'
import AddNewAlbumButton from './AddNewAlbumButton'

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const AlbumList = () => {

  const classes = useStyles();

  const dispatch = useDispatch()

  const albumsList = useSelector(albums)
  const isLoading = useSelector(isLoadingAlbums)

  useEffect(() => {
    dispatch(setAlbums())
  }, [dispatch]);

  return (
    <div className={classes.main}>
      <h1>Album List</h1>
      <AddNewAlbumButton />
      {!isLoading ?
        <TableAlbums
          rows={albumsList}
        />
        :
        <Loading />
      }
    </div>
  )
}

export default AlbumList