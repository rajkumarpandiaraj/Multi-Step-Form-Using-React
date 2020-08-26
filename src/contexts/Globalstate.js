import React, { useState, useEffect } from "react";

export const globalContext = React.createContext();
const initialState ={
    firstName : '',
    lastName : '',
    email : '',
    occupation : '',
    city : '',
    bio : '',
    step : 1
}
export function Globalstate({children}) {
    const [state, setState] = useState(initialState);

    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        console.log(state.step);
    }, [state.step])

    const handlePrev = (e) =>{
        e.preventDefault();
        setState({
            ...state,
            step : state.step - 1
        })
    }

    const handleNext = (e) =>{
        e.preventDefault();
        setState({
            ...state,
            step : state.step + 1
        })
    }
    return (
        <div>
            <globalContext.Provider value ={{
                state,
                handleChange,
                handlePrev,
                handleNext
            }}>
                {children}
            </globalContext.Provider>
        </div>
    )
}

export default Globalstate
