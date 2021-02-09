import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    profileBody: {
        height: 1500,
        width: '100%',
        // maxWidth: 1700,
        margin: 'auto',
        boxSizing: 'border-box',
        overflow: 'hidden',
        perspective: '400px'
    },
    headText: {
        marginTop: 0,
        fontSize: '8vw'
    },
    bodyText: {
        fontWeight: 'bold',
        fontSize: '6vw'
    },
    '@media (max-width: 450px)': {
        bodyText: {
            fontSize: '3em'
        },
        headText: {
            fontSize: '6em'
        }
    }
})

const ProfileBody = () => {
    const classes = useStyles();

    return (
        <div className={classes.profileBody}>
            <div className='about-me-container'>
                <h3 className={classes.headText}>About Me</h3>
                <p className={classes.bodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, qui aliquam quos sunt at vel porro magnam molestias fuga reiciendis voluptatem, aliquid repellat ex commodi optio aperiam deserunt quibusdam fugiat.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus itaque hic dolor deserunt expedita, voluptas nam vero perspiciatis sint molestias voluptatum incidunt tempore architecto repellat porro in quisquam, debitis exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium excepturi qui, omnis perspiciatis voluptatum aperiam incidunt architecto. Cupiditate quos impedit ipsa rem laboriosam voluptatum iure blanditiis, architecto dolorum sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga earum modi vitae accusantium at incidunt optio iure. Voluptate dignissimos qui tenetur laborum id quasi eius ea nulla, doloremque officia?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, qui aliquam quos sunt at vel porro magnam molestias fuga reiciendis voluptatem, aliquid repellat ex commodi optio aperiam deserunt quibusdam fugiat.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus itaque hic dolor deserunt expedita, voluptas nam vero perspiciatis sint molestias voluptatum incidunt tempore architecto repellat porro in quisquam, debitis exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium excepturi qui, omnis perspiciatis voluptatum aperiam incidunt architecto. Cupiditate quos impedit ipsa rem laboriosam voluptatum iure blanditiis, architecto dolorum sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga earum modi vitae accusantium at incidunt optio iure. Voluptate dignissimos qui tenetur laborum id quasi eius ea nulla, doloremque officia
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus itaque hic dolor deserunt expedita, voluptas nam vero perspiciatis sint molestias voluptatum incidunt tempore architecto repellat porro in quisquam, debitis exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium excepturi qui, omnis perspiciatis voluptatum aperiam incidunt architecto. Cupiditate quos impedit ipsa rem laboriosam voluptatum iure blanditiis, architecto dolorum sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga earum modi vitae accusantium at incidunt optio iure. Voluptate dignissimos qui tenetur laborum id quasi eius ea nulla, doloremque officia?</p>
            </div>
        </div>
    );
}

export default ProfileBody;