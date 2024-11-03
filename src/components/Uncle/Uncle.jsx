import React from 'react';
import Cousign from '../Cousing/Cousign';

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section>
                <Cousign name={'pagla'}></Cousign>
                <Cousign name={'sagla'} asset={asset}></Cousign>
            </section>
        </div>
    );
};

export default Uncle;