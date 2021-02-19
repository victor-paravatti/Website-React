import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline} from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';
import PlaceToVisit1 from './components/PlaceToVisit1';
import PlaceToVisit2 from './components/PlaceToVisit2';
import Slider1 from './components/Slider1';
import Title from './components/Title';
import {SliderData} from './components/SliderData'
import'./App.css'
import Scroll from './components/Scroll';
import Joao from './components/Joao';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/fundo7.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'absolute',
    backgroundColor: 'black'
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Scroll showBelow={250} />
      <CssBaseline />
      
      <Header />
      <PlaceToVisit />
      <PlaceToVisit1 />
      <PlaceToVisit2 />
      <Title />
      <Slider1 slides={SliderData}/>
      <Joao/>
    </div>
  );
}
