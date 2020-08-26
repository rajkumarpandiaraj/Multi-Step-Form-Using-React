import React, {useContext} from 'react';
import {globalContext} from '../contexts/Globalstate'

function Userdetails() {
    const {state, handleChange, handleNext} = useContext(globalContext);
    const {firstName, lastName, email} = state
    return (
        <>
            <div className='user-detail-form'>
                <h1>Enter User Details</h1>
                <form>
                    <input  value={firstName} onChange={handleChange} name='firstName' type='text' placeholder='FirstName' />
                    <input  value={lastName} onChange={handleChange} name='lastName' type='text' placeholder='LastName' />
                    <input  value={email} onChange={handleChange} name='email' type='text' placeholder='Email' />
                    <button className='btn btn-next' onClick={handleNext} >CONTINUE</button>
                </form>
            </div>
        </>
    )
}

export default Userdetails
