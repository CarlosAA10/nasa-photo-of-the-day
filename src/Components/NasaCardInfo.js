import React from "react"; 

import styled from "styled-components"; 

const TheH2 = styled.h2`
    font-size: 3rem; 
    padding: 2%; 
    width: 50%; 
    
    border: 3px solid red; 
    background: cyan; 
    border-radius: 24px; 
`; 

const TheP = styled.p`
    color: white; 
    font-size: 1.5rem; 

`; 

const TheDiv = styled.div`
    display:flex; 
    align-items:center;
    flex-direction:column; 

`; 

const NasaCardInfo = (props) => {
    // console.log(`this is the props:`, props); 
    console.log(`this is info`, props)
    return (
        <div className="planet-card">
            <img className="planetary-image" alt="view of the earth from far away" src={props.hdurl}/> 
            
            <TheDiv>
                <TheH2>Picture provided by {props.copyright}</TheH2>
                <TheP> {props.explanation} </TheP>
                <TheP> this is an {props.media_type} </TheP>
            </TheDiv>

        </div>
    ); 
}; 

export default NasaCardInfo; 