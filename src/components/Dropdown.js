import React from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    list: {
        listStyle: 'none',
        maxWidth: '475px',
        margin: '0px',
        padding: '0'
    },
    item: {
        display: 'flex',
        height: '50px',
        alignItems: 'center',
        border: '2pt solid white',
        borderRadius: '5px',
        background: '#000',
        padding: '5px 2.5%'
    }
})

const Dropdown = () => {
    const classes = useStyles();

    return (
        <ul className={classes.list}>
            <li className={classes.item}>Hi</li>
        </ul>
    );
}

export default Dropdown;