import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    colorText: {
        color: '#E63946',
      },
      container: {
        textAlign: 'center',
      },
      title: {
        color: '#fff',
        fontSize: '3.0rem',
      },



}));
const Title = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
          <h2 className={classes.title}>
            Galeria De imagens do <span className={classes.colorText}>Campeão.</span>
          </h2>            
        </div>
    )
}

export default Title
