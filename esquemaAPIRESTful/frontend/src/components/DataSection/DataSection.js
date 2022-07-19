import React, {useEffect, useState} from "react";
import axios from 'axios'


const   DataSection =  ({data})   =>  {
    const [show, setShow]   =   useState();

    useEffect(() => {
        
        getData()
        .then( (prod) => {
            console.log("Respuesta getProduct: ", prod)
            setShow(prod.data)
        })
      
    })

    const getData   =   async ()    =>  {
        const res   =   await axios.get(`http://localhost:8080${data}`)
        return res
    }

    return(
        <div>

            <p>{data}</p>
            <section>{JSON.stringify(show)}</section>
        </div>
    )
}

export default DataSection