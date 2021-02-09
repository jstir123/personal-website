import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    home: {
        margin: 'auto'
    }
})

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.home}>
            
        </div>
    );
}

export default Home;