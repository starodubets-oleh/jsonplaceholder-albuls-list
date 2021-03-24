import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDispatch } from 'react-redux'

import { setDeleteAlbum } from '../redux/actions/action'

const DeleteAlbumButton = ({ idAlbum }) => {

  const dispatch = useDispatch()

  const deleteRow = () => dispatch(setDeleteAlbum())

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