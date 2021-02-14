import React from 'react';
import Card from './Card';
import TrippitExample from '../images/trippit-example.png';

const TrippitCard = () => {
    const title = 'Trippit.co';
    const body = 'Checkout my main project! Built with React, Redux, and Django REST framework Trippit makes it easy to remember all of your favorite adventures. Keep track of what hotel you stayed at, where you ate, and what you enjoyed most. Best of all you can share your trips with friends in order to help them plan their next getaway!';
    const links = [
        {name: 'Website', path: 'https://www.trippit.co'},
        {name: 'GitHub', path: 'https://www.github.com/jstir123'}
    ];
    const styles = {
        card: {
            position: 'relative',
            height: 'auto',
            width: '100%',
            maxWidth: '700px'
        },
        image: {
            position: 'absolute',
            bottom: '-30%',
            left: '4%',
            height: '120%',
            transform: 'rotate(-15deg)'
        }
    };

    return (
        <div>
            <Card
                image={TrippitExample}
                title={title}
                body={body}
                links={links}
                styles={styles}
            />
        </div>
    );
}

export default TrippitCard;