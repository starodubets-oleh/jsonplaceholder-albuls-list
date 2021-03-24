import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core';

import { setAddAlbum } from '../redux/actions/action'

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

const EditAlbum = () => {
  const classes = useStyles();

  const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [albimId, setAlbimId] = useState('');

  const changeNmae = useCallback((event) => {
    const text = event.target.value
    setName(text)
  }, [])
  const changeUserId = useCallback((event) => {
    const text = event.target.value
    setUserId(text)
  }, [])
  const changeAlbumId = useCallback((event) => {
    const text = event.target.value
    setAlbimId(text)
  }, [])

  const addAlbim = useCallback((event) => {
    event.preventDefault()
    dispatch(setAddAlbum({
      title: name,
      id: albimId,
      userId
    }))
  }, [albimId, dispatch, name, userId])
  return (
    <>
      <h2>Editi Album Name</h2>
      <form onSubmit={addAlbim} className={classes.root} noValidate autoComplete="off">
        <TextField value={name} onChange={changeNmae} label="Enter new name" />
        <TextField value={userId} onChange={changeUserId} label="Enter user id" type='number' />
        <TextField value={albimId} onChange={changeAlbumId} label="Enter album id" type='number' />
        <Button type='submit' color='primary' >
          ADD
        </Button>
      </form>

    </>
  );
}

export default EditAlbum