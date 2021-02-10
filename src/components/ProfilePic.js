import React from 'react';
import { createUseStyles } from 'react-jss';
import ProfPic from '../images/Prof-Pic-1.jpg';

const useStyles = createUseStyles({
    profilePic: {
        height: '100%',
        width: '100%',
        textAlign: 'center'
    },
    image: {
        height: '325px',
        width: '325px',
        borderRadius: '100%'
    }
})

const ProfilePic = () => {
    const classes = useStyles();

    return (
        <div className={classes.profilePic}>
            <img className={classes.image} src={ProfPic} alt="Not Found"/>
        </div>
    );
}

export default ProfilePic;