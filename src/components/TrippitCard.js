import React from 'react';
import Card from './Card';
import TrippitExample from '../images/trippit-example.png';

const TrippitCard = () => {
    const title = 'Trippit.co';
    const body = 'Trippit makes it easy to remember all of your favorite adventures! Keep track of what hotel you stayed at, where you ate, and what you enjoyed most. Best of all you can share your trips with friends in order to plan the next perfect getaway!';
    const links = [
        {name: 'Website', path: 'www.trippit.co'},
        {name: 'GitHub', path: 'www.github.com'}
    ];
    const styles = {
        card: {
            height: '355px',
            width: '725px'
        },
        image: {
            width: '95%',
            padding: '30px 0 0 25px',
            transform: 'rotate(-15deg)'
        }
    };

    return (
        <Card
            image={TrippitExample}
            title={title}
            body={body}
            links={links}
            styles={styles}
        />
    );
}

export default TrippitCard;