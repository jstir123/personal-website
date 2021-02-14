import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import Dropdown from './Dropdown';
import GithubLogo from '../images/github-logo.png';
import LinkedInLogo from '../images/linkedin-logo.png';
import MenuIcon from '../images/menu-icon.png';
import CloseIcon from '../images/close-icon.png';

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
        transition: '0.5s',
        '&:hover': {
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px purple, 0 0 40px purple, 0 0 50px purple, 0 0 60px purple, 0 0 70px purple'
            // animation: 'glow .03s ease-in-out infinite alternate'
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
        width: '100%',
        height: 'calc(100vh - 70px)',
        overflow: 'hidden'
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
        },
        dropdown: {
            display: 'none'
        }
    }
})

const NavBar = () => {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        {'name': 'Home', 'path': '/'},
        {'name': 'About', 'path': '/about'},
        {'name': 'Resume', 'path': '/resume'},
        {'name': 'Projects', 'path': '/projects'}
    ];
    const socials = [
        {'logo': GithubLogo, 'path': 'https://www.github.com/jstir123'},
        {'logo': LinkedInLogo, 'path': 'https://www.linkedin.com/in/john-stirling-a22432129/'}
    ];
    const email = 'jstir123@gmail.com';
    const activeStyle = {
        transform: 'scale(1.5)',
        textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px purple, 0 0 40px purple, 0 0 50px purple, 0 0 60px purple, 0 0 70px purple',
        // animation: 'glow .03s ease-in-out infinite alternate'
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <>
        <div className={classes.navBar}>
            <div className={classes.container + ' ' + classes.justifyEnd + ' ' + classes.largeNav}>
                <span className={classes.email}>{email}</span>
                {socials.map(social => (
                    <a href={social.path} target='_blank' rel='noopener noreferrer' key={social.path}>
                        <img className={classes.navIcon} src={social.logo} alt=""/>
                    </a>
                ))}
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
                <img
                    className={classes.menuIcon}
                    onClick={() => toggleMenu()}
                    src={MenuIcon}
                    alt=""
                    style={{
                        display: menuOpen ? 'none' : 'block'
                    }}
                />
                <img
                    className={classes.menuIcon}
                    onClick={() => toggleMenu()}
                    src={CloseIcon}
                    alt=""
                    style={{
                        display: menuOpen ? 'block' : 'none'
                    }}
                />
            </div>
            <div 
                className={classes.dropdown}
                onClick={() => toggleMenu()}
                style={{
                    visibility: menuOpen ? 'visible' : 'hidden',
                    animation: menuOpen ? 'growDown 100ms ease-in-out forwards' : ''
                }}
            >
                <Dropdown links={links} socials={socials} email={email} />
            </div>
        </div>
        <div className={classes.divider}></div>
        </>
    );
}

export default NavBar;