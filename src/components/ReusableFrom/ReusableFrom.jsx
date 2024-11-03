import React from 'react';

const ReusableFrom = ({fromtitle,submitText='Submit',handleFrom,children}) => {
    const handleFromData=e=>{
        e.preventDefault();
        const data={
            name:e.target.name.value,
            password:e.target.password.value,
            email:e.target.email.value
        }
        handleFrom(data)
    }
    return (
        <div>
            {/* <h2>{fromtitle}</h2> */}
            {children}
            <form onSubmit={handleFromData}>
                <input type="text" name='name' />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name='password' />
                <br />
                <input type="submit" value={submitText} />
            </form>   
        </div>
    );
};

export default ReusableFrom;