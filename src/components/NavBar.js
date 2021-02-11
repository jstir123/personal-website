import React from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import GithubLogo from '../images/github-logo.png';
import LinkedInLogo from '../images/linkedin-logo.png';
import MenuIcon from '../images/menu-icon.png';

const useStyles = createUseStyles({
    navBar: {
        display: 'flex',
        height: '100%',
        width: '100%',
        maxWidth: '2000px',
        margin: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 1)'
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
        '&:hover': {
            animation: 'glow .03s ease-in-out infinite alternate'
        }
    },
    navIcon: {
        height: '50%',
        background: '#fff',
        borderRadius: 5,
        margin: 5
    },
    menu: {

    },
    menuIcon: {
        height: '60%',
        cursor: 'pointer'
    },
    largeNav: {

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
        margin: 'auto',
        maxWidth: '2000px'
    },
    '@media (max-width: 850px)': {
        largeNav: {
            display: 'none'
        }
    },
    '@media (min-width: 851px)': {
        menu: {
            display: 'none'
        }
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
            <div className={classes.container + ' ' + classes.justifyEnd + ' ' + classes.largeNav}>
                <span className={classes.email}>jstir123@gmail.com</span>
                <img className={classes.navIcon} src={GithubLogo} alt=""/>
                <img className={classes.navIcon} src={LinkedInLogo} alt=""/>
            </div>
            <div className={classes.container + ' ' + classes.justifyStart + ' ' + classes.largeNav}>
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
            <div className={classes.container + ' ' + classes.justifyStart + ' ' + classes.menu}>
                <img className={classes.menuIcon} src={MenuIcon} alt=""/>
            </div>
        </div>
        <div className={classes.divider}></div>
        </>
    );
}

export default NavBar;