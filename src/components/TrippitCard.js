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
            position: 'relative',
            height: 'auto',
            width: '100%',
            maxWidth: '700px'
        },
        image: {
            position: 'absolute',
            bottom: '-30%',
            left: '7%',
            height: '120%',
            transform: 'rotate(-15deg)'
        }
    };

    return (
        <div style={{zIndex: '-1'}}>
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