import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    about: {
        textAlign: 'center',
        maxWidth: '750px',
        margin: '5vh auto',
        marginBottom: '150px',
        padding: '1.5em',
        boxSizing: 'border-box',
        border: '2pt solid #fff',
        borderRadius: '10px',
    },
    text: {
        '& p': {
            margin: '1em 0'
        }
    }
})

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.about}>
            <h2>About Me</h2>
            <div className={classes.text}>
                <p>
                    Hi, I’m JT Stirling. I’m a self taught software developer in Fort Lauderdale, FL. In 2018 I graduated from Miami University of Ohio with a BS in Finance. I then started working as a Business Process Improvement Consultant at Protiviti. I greatly value all that I have learned as a consultant, but over the past two years I have gravitated towards a more technical role.
                </p>
                <p>
                    It started with an introductory training at work. Protiviti was looking for individuals interested in learning about Robotic Process Automation (RPA). I was, and I went on to obtain an Accredited RPA Developer certification. I also began learning how to code in my free time. I spent hours in online classes; everything from Intro to JavaScript on Codecademy to learning about data structures and algorithms through MITx. However, most of my learning came from my experience building Trippit, a web app that allows users to keep track of and share their past trips.
                </p>
                <p>
                    Over the past few months I’ve also been working closely with Protiviti’s Intelligent Automation team. As a new member of the team I have contributed numerous Python scripts, while maintaining my responsibilities on client projects. Most recently, I built a prototype of a website that will serve as a “hub” for all of our automation tools.
                </p>
                <p>
                    While I am thankful for the opportunities that I have had with Protiviti, I am excited to move on to a new role that will allow me to focus on software development. I am looking for a position that values teamwork, problem solving, and continuous growth. With my business background and the soft skills that I have learned throughout my consulting career I believe that I will bring a diverse perspective to any team.
                </p>
            </div>
        </div>
    );
}

export default About;