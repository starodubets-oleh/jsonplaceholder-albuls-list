import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core';

import { setEditAlbum } from '../redux/actions/action'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    display: 'flex',
    flexDirection: 'column'
  },
}));

const EditAlbum = ({ idAlbum }) => {
  const classes = useStyles();

  const dispatch = useDispatch()

  const [name, setName] = useState('');

  const handleChangeName = useCallback(({ target: { value } }) => setName(value), [])

  const editAlbim = useCallback((event) => {
    event.preventDefault()
    dispatch(setEditAlbum({ idAlbum, name }))
  }, [dispatch, idAlbum, name])
  return (
    <>
      <h2>Editi Album Name</h2>
      <form onSubmit={editAlbim} className={classes.root} noValidate autoComplete="off">
        <TextField value={name} onChange={handleChangeName} label="Enter new name" />
        <Button type='submit' color='primary' >
          SAVE
        </Button>
      </form>

    </>
  );
}

export default EditAlbum