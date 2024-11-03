import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import SimpleFrom from '../SimpleFrom/SimpleFrom';
import Sister from '../Sister/Sister';

const Dad = ({asset}) => {
    return (
        <div>
            <h2>dad</h2>
            <section>
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;