import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    card: {
        display: 'flex',
        justifyContent: 'center',
        border: '2px solid #fff',
        width: '400px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        minWidth: '360px',
        marginTop: '4em'
    },
    imageContainer: {
        width: '40%'
    },
    image: {
        // margin: '0'
    },
    content: {
        width: '60%',
        textAlign: 'center',
        padding: '1.5em',
        minWidth: '350px',
        boxSizing: 'border-box',
        '& h3': {
            margin: '0',
            marginBottom: '15px',
            fontSize: '44px'
        },
        '& p': {
            fontSize: '20px',
            margin: '0'
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
            transition: '.1s',
            '&:hover': {
                color: '#fff',
                animation: 'glow .03s ease-in-out infinite alternate',
                transform: 'scale(1.02) translateY(-1px)'
            }
        }
    },
    '@media (max-width: 1200px)': {
        content: {
            width: '100%',
        },
        imageContainer: {
            visibility: 'hidden',
            width: '0',
            height: '0'
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
                        <a href={link.path} key={link.name}>
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