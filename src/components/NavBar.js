import React from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import GithubLogo from '../images/github-logo.png';
import LinkedInLogo from '../images/linkedin-logo.png';

const useStyles = createUseStyles({
    navBar: {
        display: 'flex',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        margin: '0 2.5%'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    justifyStart: {
        justifyContent: 'flex-start'
    },
    navLink: {
        marginLeft: '2em',
        fontSize: '16pt',
        color: '#fff',
        padding: '19px 0',
        transition: '0.75s',
        // animation: '$glow 5s linear infinite',
        '&:hover': {
            // transform: 'scale(1.05)',
            animation: 'glow .03s ease-in-out infinite alternate'
        }
    },
    navIcon: {
        height: '50%',
        background: '#fff',
        borderRadius: 5,
        margin: 5
    },
    email: {
        marginRight: '1em',
        color: '#fff',
        fontSize: '12pt'
    },
    divider: {
        width: '95%',
        height: '1.5pt',
        background: '#363636',
        margin: 'auto'
    }
})

const NavBar = () => {
    const classes = useStyles();
    const links = [
        {'name': 'Home', 'path': '/'},
        {'name': 'About', 'path': '/about'},
        {'name': 'Resume', 'path': '/resume'},
        {'name': 'Projects', 'path': '/projects'}
    ];
    const activeStyle = {
        // textShadow: '0 0 5px #fff, 0 0 5px #fff, 0 0 5px orange, 0 0 5px orange, 0 0 5px orange, 0 0 5px orange, 0 0 5px orange',
        transform: 'scale(1.5)',
        animation: 'glow .03s ease-in-out infinite alternate'
    };

    return (
        <>
        <div className={classes.navBar}>
            <div className={classes.container + ' ' + classes.justifyEnd}>
                <span className={classes.email}>jstir123@gmail.com</span>
                <img className={classes.navIcon} src={GithubLogo} alt=""/>
                <img className={classes.navIcon} src={LinkedInLogo} alt=""/>
            </div>
            <div className={classes.container + ' ' + classes.justifyStart}>
            {links.map(link => (
                    <NavLink 
                        exact to={link.path}
                        className={classes.navLink}
                        activeStyle={activeStyle}
                        key={link.name}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </div>
        <div className={classes.divider}></div>
        </>
    );
}

export default NavBar;