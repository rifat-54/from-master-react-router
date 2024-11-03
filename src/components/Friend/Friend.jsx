import React, { useContext } from 'react';
import { assetContext } from '../GrandPa/GrandPa';

const Friend = () => {
    const gift=useContext(assetContext)
    return (
        <div>
            <h2>Friend</h2>
            <p>has : {gift}</p>
        </div>
    );
};

export default Friend;