import React from 'react';

const SimpleFrom = () => {

    const handleFrom=(e)=>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value);
    }
    return (
        <div>
            <form onSubmit={handleFrom}>
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;