import React from 'react';
import useInputState from '../../Hook/useInputState';

const HookFrom = () => {
    // const [name,handleNameChange] =useInputState('pagla');
    const emailChange=useInputState('pagla@ha.com')
    const handleFrom=e=>{
        e.preventDefault();
        console.log('come from data ',emailChange.value);
    }

    return (
        <div>
            <form onSubmit={handleFrom}>
                {/* <input
                value={name} onChange={handleNameChange}
                type="text" name='name' /> */}
                <br />
                <input {...emailChange} type="email" name="email" id="" />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookFrom;