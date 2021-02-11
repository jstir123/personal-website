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
        marginTop: '8em',
        minWidth: '450px'
    },
    logos: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2em 0',
        // minWidth: '450px',
        '& div': {
            margin: '1em'
        },
        '& h4': {
            fontSize: '20x',
            margin: '1em 0'
        }
    },
    skill: {
        width: '17%'
    },
    image: {
        width: '100%'
    },
    '@media (max-width: 1269px)': {
        skill: {
            width: '30%'
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
            <h1>Skills</h1>
            <div className={classes.logos}>
                {skills.map(skill => (
                    <div className={classes.skill} key={skill.name}>
                        <img className={classes.image} src={skill.image} alt=""/>
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Skills;