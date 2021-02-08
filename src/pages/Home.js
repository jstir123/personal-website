import React from 'react';
import { createUseStyles } from 'react-jss';

import ProfileHeader from '../components/ProfileHeader';

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
            <ProfileHeader />
        </div>
    );
}

export default Home;