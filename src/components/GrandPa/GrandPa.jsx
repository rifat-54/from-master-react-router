import React, { createContext, useState } from 'react';
import './grandpa.css'
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Anunty/Aunty';


export const assetContext=createContext('gold')
export const moneyContext=createContext(1000)

const GrandPa = () => {
    const asset='diamond';
    const [money,setmoney]=useState(1000)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>money: {money}</p>
            <moneyContext.Provider value={[money,setmoney]}>
            <assetContext.Provider value='gold'>
            <section className='flex'>
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunty></Aunty>
            </section>
            </assetContext.Provider>
            </moneyContext.Provider>
            
            
        </div>
    );
};

export default GrandPa;