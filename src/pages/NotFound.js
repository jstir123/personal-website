import React from 'react';
import Card from '../components/Card';

const NotFound = () => {
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
        }
    }
    return (
        <div>
            <Card
                title={'Page not Found'}                
                styles={styles}
            />
        </div>
    );
}

export default NotFound;