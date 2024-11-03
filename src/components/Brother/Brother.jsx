import React, { useContext } from 'react';
import { moneyContext } from '../GrandPa/GrandPa';

const Brother = () => {
    const [money,setmoney]=useContext(moneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>grandpa: {money}</p>
        </div>
    );
};

export default Brother;