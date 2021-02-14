import React from 'react';
import { createUseStyles } from 'react-jss';

import ResumePDF from '../images/Resume.pdf';

const useStyles = createUseStyles({
    resume: {
        height: '100%',
        width: '100vw',
        margin: 'auto',
        maxWidth: '1275px',
        boxSizing: 'border-box'
    },
})

const Resume = () => {
    const classes = useStyles();

    return (
        <div className={classes.resume}>
            <iframe
                title='Resume'
                src={ResumePDF}
                width='100%'
                height='99%'
                frameborder='0'
                style={{border: 'none'}}
            />
        </div>
    );
}

export default Resume;