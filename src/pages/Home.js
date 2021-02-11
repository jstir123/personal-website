import React from 'react';
import { createUseStyles } from 'react-jss';

import Intro from '../components/Intro';
import ProfilePic from '../components/ProfilePic';
import TrippitCard from '../components/TrippitCard';
import Skills from '../components/Skills';

const useStyles = createUseStyles({
    home: {
        height: '100%',
        margin: 'auto',
        maxWidth: '1275px',
        boxSizing: 'border-box'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 4em',
        boxSizing: 'border-box'
    }
})

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <Intro />
                <ProfilePic />
            </div>
            <div className={classes.container}>
                <TrippitCard />
                <Skills />
            </div>
        </div>
    );
}

export default Home;