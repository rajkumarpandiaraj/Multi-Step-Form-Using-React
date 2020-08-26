import React, {useContext} from 'react';
import {globalContext} from '../contexts/Globalstate'


function Confirm() {
    const {state, handleNext, handlePrev} = useContext(globalContext);
    const {firstName, lastName, email, occupation, city, bio} = state
    return (
        <>
            <div className='confirmation'>
                <h1>Confirm</h1>
                <div className='details'>
                    <div className='confirm'>
                        <h3>FirstName</h3>
                        <p>{firstName}</p>
                    </div>
                    <div className='confirm'>
                        <h3>LastName</h3>
                        <p>{lastName}</p>
                    </div>
                    <div className='confirm'>
                        <h3>Email</h3>
                        <p>{email}</p>
                    </div>
                    <div className='confirm'>
                        <h3>Occupation</h3>
                        <p>{occupation}</p>
                    </div>
                    <div className='confirm'>
                        <h3>City</h3>
                        <p>{city}</p>
                    </div>
                    <div className='confirm'>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </div>
                </div>
                <button className='btn btn-next' onClick={handleNext} >CONTINUE</button>
                <button className='btn btn-prev' onClick={handlePrev} >BACK</button>
            </div>
        </>
    )
}

export default Confirm
