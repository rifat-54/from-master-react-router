import React, { useContext } from 'react';
import Cousign from '../Cousing/Cousign';
import { moneyContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const [taka,settaka]=useContext(moneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <p>money: {taka}</p>
            <section>
                <Cousign name={'hanga'}></Cousign>
                <Cousign name={'panga'}></Cousign>
            </section>
            <button onClick={()=>settaka(taka+1000)}>add 1000 taka</button>
        </div>
    );
};

export default Aunty;