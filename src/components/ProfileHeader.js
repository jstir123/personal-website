import React from 'react';
import { createUseStyles } from 'react-jss';

import ProfilePic from './ProfilePic';
import ProfileBody from './ProfileBody';

const useStyles = createUseStyles({
    profileHeader: {
        width: '100%',
        marginTop: '3em',
        textAlign: 'center'
    },
    profilePic: {
        height: 250,
        width: 250,
        margin: 'auto'
    },
    name: {
        margin: '0.5em 0',
        marginBottom: '0.5em'
    }
})

const ProfileHeader = () => {
    const classes = useStyles();

    return (
        <div className={classes.profileHeader}>
            <div className={classes.profilePic}>
                <ProfilePic />
            </div>
            <h1 className={classes.name}>JT Stirling</h1>
        </div>
    );
}

export default ProfileHeader;