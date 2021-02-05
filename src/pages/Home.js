import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    home: {
        // background: 'lightblue'
    },
    h1: {
        margin: 0
    }
})

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <h1 className={classes.h1}>Welcome!</h1>
        </div>
    );
}

export default Home;