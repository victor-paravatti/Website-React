import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: '#DCDCDC',
        color: 'black',
        "&:hover, &.Mui-focusVisible": {
            transition:'0.3s',
            color: '#397BA6',
            backgroundColor: '#DCDCDC'

        },
        right: '5%',
        
    }
}))


const Scroll = ({
    showBelow
}) => {

    const classes = useStyles();
    
    const [show, seteShow] = useState (showBelow ? false : true)

    const handleScroll = (e) => {
        if (window.pageYOffset > showBelow) {
            if(!show) seteShow(true)
        }else{
            if (show) seteShow(false)
        }

    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleClick= () => {
        window['scrollTo']({ top: 0, behavior:'smooth' })
    }
    return (
        <div>
            {show && 
                <IconButton onClick={handleClick} className={classes.toTop}>
                    <ExpandLessIcon />
                </IconButton>

            }
            
        </div>
    )
}

export default Scroll
