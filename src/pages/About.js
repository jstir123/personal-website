import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    about: {
        textAlign: 'center',
        maxWidth: '750px',
        margin: '5vh auto',
        padding: '1.5em',
        boxSizing: 'border-box',
        border: '2pt solid #fff',
        borderRadius: '10px',
    },
    text: {
        height: 'auto',
        textAlign: 'justify',
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
                    Hi I’m JT Stirling! I’m a self taught developer in Fort Lauderdale, FL. A little over two years ago I began coding. It started with an introductory training at work. My company was looking for employees interested in learning about Robotic Process Automation (RPA), and I jumped at the opportunity to try something new. I ended up forming an interest that sparked two years of learning and exploration.
                </p>
                <p>
                    I went on to obtain an Accredited RPA Developer certification from Blue Prism, but I wanted to be able to do more. I started teaching myself to code in the evenings and on weekends. I spent countless hours in online classes; everything from Intro to JavaScript on Codecademy to learning about data structures and algorithms through MITx. I took every chance I could to further my knowledge and skill set.
                </p>
                <p>
                    Initially, most of the code I was writing was for personal projects. However, I ended up getting in touch with some colleagues in my company’s Intelligent Automation practice. They needed someone who knew Python, and I was happy to help. I was able to deliver results that exceeded their expectations, and was quickly welcomed as a member of the team. Since then I have continued to help out with automation initiatives, and I have even put my web development skills into practice by building a prototype of a website that will serve as the “hub” for users to access all of the team’s automation tools.
                </p>
                <p>
                    I still have a lot to learn, but that is precisely why coding has become one of my passions. The field is always innovating, and always challenging us to keep up. There is always an opportunity to solve a problem, and always room to improve.
                </p>
            </div>
        </div>
    );
}

export default About;