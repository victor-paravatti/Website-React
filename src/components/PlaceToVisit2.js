import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    colorText: {
      color: '#E63946',
    },
    title: {
      color: '#fafafa',
      fontSize: '4.5rem',
    },
    container: {
      textAlign: 'center',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[5]} checked={checked} />
      <ImageCard place={places[4]} checked={checked} />
    </div>
  );
}
