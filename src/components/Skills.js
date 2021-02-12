import React from 'react';
import { createUseStyles } from 'react-jss';
import ReactLogo from '../images/react-logo.png';
import PythonLogo from '../images/python-logo.png';
import JavaScriptLogo from '../images/javascript-logo.png';
import DjangoLogo from '../images/django-logo.jpg';

const useStyles = createUseStyles({
    skills: {
        width: '40%',
        textAlign: 'center',
        margin: '5vh 0',
        minWidth: '450px'
    },
    logos: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2em 0',
        '& div': {
            margin: '1em'
        },
        '& p': {
            margin: '1em 0'
        }
    },
    skill: {
        width: '30%'
    },
    image: {
        width: '100%',
        '&:hover': {
            animation: 'spin .5s ease-in-out'
        }
    },
    '@media (max-width: 525px)': {
        skills: {
            marginTop: '3em',
        }
    }
})

const Skills = () => {
    const classes = useStyles();

    const skills = [
        {image: ReactLogo, name: 'React'},
        {image: PythonLogo, name: 'Python'},
        {image: JavaScriptLogo, name: 'JavaScript'},
        {image: DjangoLogo, name: 'Django'}
    ]

    return (
        <div className={classes.skills}>
            <h3>Skills</h3>
            <div className={classes.logos}>
                {skills.map(skill => (
                    <div className={classes.skill} key={skill.name}>
                        <img className={classes.image} src={skill.image} alt=""/>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Skills;