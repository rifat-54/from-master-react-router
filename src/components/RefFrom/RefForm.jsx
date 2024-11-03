import React, { useEffect, useRef } from 'react';

const RefForm = () => {
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const passwordRef=useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleFrom=e=>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleFrom}>
                <input ref={nameRef} type="text" name='name' />
                <br />
                <input defaultValue={'pagla@343.com'} ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name='phone' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;