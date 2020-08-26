import React, {useContext} from 'react';
import Userdetails from './Userdetails';
import Personaldetails from './Personaldetails';
import Confirm from './Confirm';
import Success from './Success';
import {globalContext} from '../contexts/Globalstate'


function Userform() {
    const {state} = useContext(globalContext);
    const {step} = state ;

    switch(step){
        case 1 :
            return  <Userdetails/>
        case 2 : 
            return  <Personaldetails/>
        case 3 : 
            return  <Confirm/>
        case 4 : 
            return  <Success/>
        default : 
            return 'Something Went Wrong'
    }

}

export default Userform
