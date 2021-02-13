import React from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    list: {
        listStyle: 'none',
        height: '99%',
        margin: '0px',
        padding: '0',
        border: '2pt solid white',
        borderRadius: '4px',
        backdropFilter: 'blur(30px)'
    },
    item: {
        display: 'flex',
        height: '50px',
        alignItems: 'center',
        padding: '5px 2.5%'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    navIcon: {
        height: '50px',
        background: '#fff',
        border: '2px solid white',
        borderRadius: 25,
        margin: 5,
        marginTop: 50
    },
    email: {
        marginTop: 50,
        color: '#fff',
        fontSize: '1.1em'
    },
    divider: {
        width: '95%',
        height: '1.5pt',
        background: '#fff',
        margin: 'auto',
        maxWidth: '2000px',
        animation: 'box-glow .02s ease-in-out infinite alternate'
    }
})

const Dropdown = ({ links, socials, email }) => {
    const classes = useStyles();
    const activeStyle = {
        animation: 'glow .03s ease-in-out infinite alternate'
    };

    return (
        <ul className={classes.list}>
            {links.map(link => (
                <div key={link.name}>
                    <NavLink 
                            exact to={link.path}
                            className={classes.navLink}
                            activeStyle={activeStyle}
                        >
                        <li className={classes.item}>
                            <h6>{link.name}</h6>
                        </li>
                    </NavLink>
                    <div className={classes.divider}></div>
                </div>
            ))}
            <li className={classes.item + ' ' + classes.justifyCenter}>
                {socials.map(social => (
                    <a href={social.path} target='_blank' rel='noopener noreferrer'>
                        <img className={classes.navIcon} src={social.logo} alt=""/>
                    </a>
                ))}
            </li>
            <li className={classes.item + ' ' + classes.justifyCenter}>
                <span className={classes.email}>{email}</span>
            </li>
        </ul>
    );
}

export default Dropdown;