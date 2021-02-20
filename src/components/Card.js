import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    card: {
        display: 'flex',
        justifyContent: 'center',
        border: '2px solid #fff',
        width: '350px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        minWidth: '360px',
        margin: '5vh 0'
    },
    imageContainer: {
        width: '40%'
    },
    image: {
    
    },
    content: {
        width: '60%',
        textAlign: 'center',
        padding: '1.5em',
        minWidth: '300px',
        boxSizing: 'border-box',
        '& h3': {
            marginBottom: '15px'
        }
    },
    links: {
        '& button': {
            color: 'orange',
            background: 'transparent',
            border: '2px solid orange',
            borderRadius: '25px',
            height: '40px',
            width: '115px',
            margin: '1.5em 7px 0px 7px',
            fontSize: '1.1em',
            cursor: 'pointer',
            transition: '0',
            '&:hover': {
                color: '#fff',
                textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px purple, 0 0 40px purple, 0 0 50px purple, 0 0 60px purple, 0 0 70px purple',
                // animation: 'glow .03s ease-in-out infinite alternate',
                // border: '3px solid orange'
                transform: 'scale(1.03)'
            }
        }
    },
    '@media (max-width: 1200px)': {
        content: {
            width: '100%',
        },
        imageContainer: {
            display: 'none'
        }
    },
    '@media (max-width: 525px)': {
        card: {
            minWidth: '325px',
            marginTop: '3em'
        }
    }
})

const Card = ({ image, title, body, links, styles }) => {
    const classes = useStyles();

    return (
        <div className={classes.card} style={styles.card}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={image} alt="" style={styles.image}/>
            </div>
            <div className={classes.content}>
                <h3 >
                    {title}
                </h3>
                <p>
                    {body}
                </p>
                <div className={classes.links}>
                    {links.map(link => (
                        <a href={link.path} target='_blank' rel='noopener noreferrer' key={link.name}>
                            <button>
                                {link.name}
                            </button>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

Card.defaultProps = {
    image: null,
    title: '',
    body: '',
    links: [],
    styles: {}
}

export default Card;