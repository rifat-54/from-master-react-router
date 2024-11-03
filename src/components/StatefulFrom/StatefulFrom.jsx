import React, { useState } from 'react';

const StatefulFrom = () => {

    const[email,setEmail]=useState(null)
    const[password,setPassword]=useState(null);
    const[name,setName]=useState('pagla baba')
    const [error,setError]=useState('');

    const handleStateFrom=(e)=>{
        e.preventDefault();
        if(password.length<6)
        {
            setError('password must be 6 character');
        }else{
            setError('');
            console.log(email,password,name)
        }
    }

    const handleName=e=>{
        setName(e.target.value);
    }

    const handlePassword=e=>{
        setPassword(e.target.value)
    }
    const handleEmail=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value);

    }

    return (
        <div>
            <form onSubmit={handleStateFrom}>
                <input
                onChange={handleName}
                value={name}
                type="text" name='name' />
                <br />
                <input
                onChange={handleEmail}
                type="email" name="email" id="" />
                <br />
                <input
                onChange={handlePassword}
                type="password" name='password' required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulFrom;