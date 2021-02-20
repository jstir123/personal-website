import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    projects: {
        maxWidth: '1275px',
        margin: '5vh auto',
        marginBottom: '150px',
        textAlign: 'center',
        boxSizing: 'border-box'
    },
    header: {
        marginBottom: '5vh'
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 4em',
        boxSizing: 'border-box'
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

    const styles = {
        card: {
            height: 'auto',
            width: '100%',
            maxWidth: '700px'
        },
        imageContainer: {
            display: 'none'
        },
        content: {
            width: '100%'
        },
        header: {
            textTransform: 'capitalize'
        }
    }

    return (
        <div className={classes.projects}>
            <h2 className={classes.header}>Projects</h2>
            <div className={classes.cards}>
                {projects.map(project => (
                    <Card
                        title={project.name.replace('-', ' ')}
                        body={project.description}
                        links={[{name: 'GitHub', path: project.html_url}]}
                        styles={styles}
                        key={project.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;