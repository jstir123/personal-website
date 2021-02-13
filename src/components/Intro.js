import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    intro: {
        height: '100%',
        width: '60%',
        margin: '5vh 0',
        minWidth: '460px',
        '& span': {
            color: 'orange'
        }
    },
    '@media (max-width: 525px)': {
        intro: {
            width: '100%',
            minWidth: '290px'
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