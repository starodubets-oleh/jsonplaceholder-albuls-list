import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from 'axios';
import { useDispatch } from 'react-redux'

import { setAlbums } from '../redux/actions/action'

const DeleteAlbumButton = ({ idAlbum }) => {

  const dispatch = useDispatch()

  const deleteRow = () => {
    axios.delete(`http://jsonplaceholder.typicode.com/albums/${idAlbum}`)
      .then(() => {
        alert('Is Deleted')
        dispatch(setAlbums())
      })
      .catch(err => alert(JSON.stringify(err)))
  }

  return (
    <Button
      color='secondary'
      onClick={deleteRow}
    >
      <DeleteForeverIcon />
    </Button>
  );
}

export default DeleteAlbumButton