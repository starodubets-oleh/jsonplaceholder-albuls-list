import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Loading from './Loading'

const useStyles = makeStyles({
  photoAlbum: {
    width: 150,
  },
  photoAlbumImg: {
    objectFit: 'cover',
    width: '100%'
  }
});

const PhotoAlbum = ({ img, titel }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const isload = useCallback(() => setIsLoading(false), [])
  return (
    <div className={classes.photoAlbum}>
      {isLoading ? <Loading /> : null}
      <img onLoad={isload} className={classes.photoAlbumImg} src={img} alt={titel} />
    </div>
  )
}
export default PhotoAlbum