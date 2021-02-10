import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    intro: {
        height: '100%',
        width: '100%',
        '& h1': {
            color: '#fff',
            fontSize: '72px',
            margin: '0 0 0 0'
        },
        '& h3': {
            color: '#fff',
            fontSize: '48px',
            margin: '0 0 0 0',
            width: '750px'
        },
        '& span': {
            color: 'orange'
        }
    }
})

const Intro = () => {
    const classes = useStyles();

    return (
        <div className={classes.intro}>
            <h1>Hi, I'm JT.</h1>
            <h3>I'm a <span>Full Stack Web Developer</span> living in South Florida.</h3>
        </div>
    );
}

export default Intro;