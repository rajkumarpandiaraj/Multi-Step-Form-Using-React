import React, {useContext} from 'react';
import {globalContext} from '../contexts/Globalstate'


function Personaldetails() {
    const {state, handleChange, handleNext, handlePrev} = useContext(globalContext);
    const {occupation, city, bio} = state ;
    return (
        <>
            <div className='personal-details-form'>
                <h1>Enter Personal Details</h1>
                <form>
                    <input onChange={handleChange}  name='occupation' value={occupation} type='text' placeholder='Occupation' />
                    <input onChange={handleChange}  name='city' value={city} type='text' placeholder='City' />
                    <input onChange={handleChange}  name='bio' value={bio} type='text' placeholder='Bio' />
                    <button className='btn btn-next' onClick={handleNext} >CONTINUE</button>
                    <button className='btn btn-prev' onClick={handlePrev} >BACK</button>
                </form>
            </div>
        </>
    )
}

export default Personaldetails
