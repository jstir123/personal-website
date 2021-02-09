import React from 'react';
import { createUseStyles } from 'react-jss';
import ProfileBody from '../components/ProfileBody';

import ProfileHeader from '../components/ProfileHeader';

const useStyles = createUseStyles({
    home: {
        margin: 'auto'
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
            <ProfileBody />
        </div>
    );
}

export default Home;