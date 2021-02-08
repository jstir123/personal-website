import React from 'react';
import { createUseStyles } from 'react-jss';

import ProfilePic from './ProfilePic';

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
        margin: '0.5em 0'
    },
    bio: {
        width: '90%',
        margin: 'auto',
        marginTop: '3em'
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
            <div className={classes.bio}>
                <h3 style={{marginBottom: 0}}>About Me</h3>
                <p style={{marginTop: 15}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, qui aliquam quos sunt at vel porro magnam molestias fuga reiciendis voluptatem, aliquid repellat ex commodi optio aperiam deserunt quibusdam fugiat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus itaque hic dolor deserunt expedita, voluptas nam vero perspiciatis sint molestias voluptatum incidunt tempore architecto repellat porro in quisquam, debitis exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium excepturi qui, omnis perspiciatis voluptatum aperiam incidunt architecto. Cupiditate quos impedit ipsa rem laboriosam voluptatum iure blanditiis, architecto dolorum sapiente.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga earum modi vitae accusantium at incidunt optio iure. Voluptate dignissimos qui tenetur laborum id quasi eius ea nulla, doloremque officia?</p>
            </div>
        </div>
    );
}

export default ProfileHeader;