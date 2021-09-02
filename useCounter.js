import { useState } from "react"

export const useCounter = ( value = 10 ) => {

    const [ state, setState ] = useState(value);

    const increment = ( factor=1 ) => {
        setState( state + factor );
    };

    const decrement = ( factor=1 ) => {
        setState( state - factor );
    }

    const reset = () => {
        setState( value );
    };  

    return { state, increment, decrement, reset };     

}
