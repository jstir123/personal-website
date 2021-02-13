import React from 'react';
import { createUseStyles } from 'react-jss';
import ProfPic from '../images/Prof-Pic-1.gif';

const useStyles = createUseStyles({
    profilePic: {
        height: '100%',
        width: '40%',
        minWidth: '325px',
        margin: '5vh 0'
    },
    frame: {
        height: '325px',
        width: '325px',
        borderRadius: '100%',
        margin: 'auto',
        overflow: 'hidden'
    },
    image: {
        height: '325px',
        width: 'auto'
        
    },
    '@media (max-width: 525px)': {
        profilePic: {
            width: '90%',
            minWidth: '250px'
        },
        frame: {
            height: '250px',
            width: '250px',
            borderRadius: '100%',
            margin: 'auto',
            overflow: 'hidden'
        },
        image: {
            height: '250px',
            width: 'auto'
            
        }
    }
})

const ProfilePic = () => {
    const classes = useStyles();

    return (
        <div className={classes.profilePic}>
            <div className={classes.frame}>
                <img className={classes.image} src={ProfPic} alt="Not Found"/>
            </div>
        </div>
    );
}

export default ProfilePic;