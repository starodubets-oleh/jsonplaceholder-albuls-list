import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useDispatch } from 'react-redux'

import { setAlbums } from '../redux/actions/action'
import { Button } from '@material-ui/core';

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

  const editAlbim = (event) => {
    event.preventDefault()
    axios.put(`http://jsonplaceholder.typicode.com/albums/${idAlbum}`, {
      id: idAlbum,
      title: name
    })
      .then((res) => {
        alert('Edited: ' + JSON.stringify(res.data))
        dispatch(setAlbums())
      })
      .catch(err => alert(JSON.stringify(err)))
  }

  return (
    <>
      <h2>Editi Album Name</h2>
      <form onSubmit={editAlbim} className={classes.root} noValidate autoComplete="off">
        <TextField value={name} onChange={({ target: { value } }) => setName(value)} id="standard-basic" label="Enter new name" />
        <Button type='submit' color='primary' >
          SAVE
        </Button>
      </form>

    </>
  );
}

export default EditAlbum