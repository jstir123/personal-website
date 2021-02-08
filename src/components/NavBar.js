import React from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    navBar: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navLink: {
        margin: '1.5em',
        fontSize: '1.3em',
        fontWeight: 'bold',
        '&:hover': {
            transform: 'scale(1.1)',
            // textDecoration: 'underline'
        }
    }
})

const NavBar = () => {
    const classes = useStyles();
    const links = [
        {'name': 'Home', 'path': '/'},
        {'name': 'Resume', 'path': '/resume'},
        {'name': 'Projects', 'path': '/projects'}
    ]

    return (
        <div className={classes.navBar}>
            {links.map(link => (
                <NavLink 
                    exact to={link.path}
                    className={classes.navLink}
                    activeStyle={{textDecoration: 'underline', transform: 'scale(1.1)'}}
                >
                    {link.name}
                </NavLink>
            ))}
        </div>
    );
}

export default NavBar;