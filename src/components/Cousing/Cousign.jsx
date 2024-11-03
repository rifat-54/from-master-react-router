import React from 'react';
import Special from '../Special/Special';
import Friend from '../Friend/Friend';

const Cousign = ({name,asset}) => {
    return (
        <div>
            <h2>Cousign</h2>
            <p>{name}</p>
            {
                asset && <Special asset={asset}></Special>
            }
            {
                name==='panga' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousign;