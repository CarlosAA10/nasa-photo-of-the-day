import React, { useState, useEffect } from "react"; 
import NasaCardInfo from "./NasaCardInfo"; 
import axios from "axios"

export default function NasaCard() {

    const [info, setInfo] = useState({}); 

    useEffect (() => {
     axios.get('https://api.nasa.gov/planetary/apod?api_key=8hMpW0PNEK4kI7K3dxZPr5J4PbohcBaXIUxZBHa8')
        .then(response => {
        setInfo(response.data); 
        // console.log(response.data); 
        })
        .catch(error => {
        console.log(`you got an error ${error}`)
        }); 
    }, []); 

    console.log(info); 

    return (
        <div>
            <p>Hello World</p>
            <div>
                <NasaCardInfo
                copyright={info.copyright}
                hdurl={info.hdurl}
                explanation={info.explanation}
                media_type={info.media_type}
                />
            </div>
        </div>
    )

}