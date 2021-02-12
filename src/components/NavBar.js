import React from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import Dropdown from './Dropdown';
import GithubLogo from '../images/github-logo.png';
import LinkedInLogo from '../images/linkedin-logo.png';
import MenuIcon from '../images/menu-icon.png';

const useStyles = createUseStyles({
    navBar: {
        position: 'relative',
        display: 'flex',
        height: '100%',
        width: '100%',
        maxWidth: '2000px',
        margin: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 1)'
        // backdropFilter: 'blur(50px)'
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
        height: '30px',
        background: '#fff',
        border: '2px solid white',
        borderRadius: 25,
        margin: 5
    },
    menu: {

    },
    menuIcon: {
        height: '60%',
        cursor: 'pointer'
    },
    dropdown: {
        position: 'absolute',
        top: '70px',
        left: '0',
        width: '100%'

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
        transform: 'scale(1.5)',
        animation: 'glow .03s ease-in-out infinite alternate'
    };

    return (
        <>
        <div className={classes.navBar}>
            <div className={classes.container + ' ' + classes.justifyEnd + ' ' + classes.largeNav}>
                <span className={classes.email}>jstir123@gmail.com</span>
                <a href='https://www.github.com/jstir123' target='_blank' rel='noopener noreferrer'>
                    <img className={classes.navIcon} src={GithubLogo} alt=""/>
                </a>
                <a href='https://www.trippit.co' target='_blank' rel='noopener noreferrer'>
                    <img className={classes.navIcon} src={LinkedInLogo} alt=""/>
                </a>
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
            <div className={classes.dropdown}>
                <Dropdown />
            </div>
        </div>
        <div className={classes.divider}></div>
        </>
    );
}

export default NavBar;