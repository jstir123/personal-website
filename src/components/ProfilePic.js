import React from 'react';
import { createUseStyles } from 'react-jss';
import ProfPic from '../images/Prof-Pic-1.JPG';

const useStyles = createUseStyles({
    profilePic: {
        height: '100%',
        width: '100%',
        borderRadius: 150,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: 'auto'
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