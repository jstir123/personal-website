import React from 'react';
import { createUseStyles } from 'react-jss';

import Intro from '../components/Intro';
import ProfilePic from '../components/ProfilePic';

const useStyles = createUseStyles({
    home: {
        maxWidth: '1525px',
        margin: 'auto'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 0',
        marginTop: '40px',
        padding: '5em 7em'
    }
})

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <div className={classes.container + ' ' + classes.purpleMist}>
                <Intro />
                <ProfilePic />
            </div>
        </div>
    );
}

export default Home;