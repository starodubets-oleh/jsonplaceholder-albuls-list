import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';

import AddNewAlbum from './AddNewAlbum'
import ModalAlbum from './ModalAlbum';

const AddNewAlbumButton = () => {
  const [openEdit, setOpenEdit] = useState(false)

  const openModal = useCallback(() => setOpenEdit(true), [])

  const closeModal = useCallback(() => setOpenEdit(false), [])

  return (
    <>
      <Button
        color='primary'
        onClick={openModal}
        variant='contained'
      >
        ADD NEW ALBUM
      </Button>
      <ModalAlbum
        isOpen={openEdit}
        close={closeModal}
      >
        <AddNewAlbum />
      </ModalAlbum>
    </>
  );
}

export default AddNewAlbumButton