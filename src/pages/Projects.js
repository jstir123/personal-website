import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    projects: {
        maxWidth: '1275px',
        margin: '5vh 4em',
        textAlign: 'center'
    },
    header: {
        marginBottom: '5vh'
    },
    card: {
        height: 'auto',
        width: '100%',
        margin: 'auto',
        marginBottom: '3em',
        maxWidth: '700px',
        border: '2pt solid #fff',
        borderRadius: '10px'
    },
    content: {
        width: '100%',
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
                transform: 'scale(1.03)'
            }
        }
    }
})

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch('https://api.github.com/users/jstir123/repos')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={classes.projects}>
            <h2 className={classes.header}>Projects</h2>
            {projects.map(project => (
                <div className={classes.card} key={project.id}>
                    <div className={classes.content}>
                        <h3 >
                            {project.name}
                        </h3>
                        <p>
                            {project.description}
                        </p>
                        <div className={classes.links}>
                            <a href={project.html_url} target='_blank' rel='noopener noreferrer'>
                                <button>
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;