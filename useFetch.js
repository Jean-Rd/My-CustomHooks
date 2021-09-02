import { useEffect, useState, useRef } from "react"

export const useFetch = ( url ) => {

    const amMounted = useRef( true );

    useEffect( () => {
        // carga el fetch true; se desmonta/anula entonces false
        amMounted.current = true;
        return () => {
            amMounted.current = false;
        }
    }, [])

    const [ info, setinfo ] = useState({
        loading: true,
        error: null,
        data: null
    });

    useEffect( () => {

        setinfo({
            loading: true,
            error: null,
            data: null
        })

        fetch( url )
            .then( response => response.json() )
            .then( json => { 

                if(amMounted.current) {
                    setinfo( { 
                        loading: false,
                        error: null,
                        data: json
                     } );
                } 
             } )
    }, [ url ] )

    return info
    
}
