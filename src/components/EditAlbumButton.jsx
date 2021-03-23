import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import EditAlbum from './ModalEditAlbum'

const EditAlbumButton = ({ idAlbum }) => {
  const [openEdit, setOpenEdit] = useState(false)

  const openModal = () => {
    setOpenEdit(true)
  }

  return (
    <>
      <Button
        color='primary'
        onClick={openModal}
      >
        <EditIcon />
      </Button>
      <EditAlbum
        idAlbum={idAlbum}
        isOpen={openEdit}
      />
    </>
  );
}

export default EditAlbumButton