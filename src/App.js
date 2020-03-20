import React from "react";
import NasaCard from "./Components/NasaCard"; 
import "./App.css";
import styled from "styled-components"; 

const TheP = styled.p`
    padding-top: 3%; 
    background: salmon;  
    color: white; 
    font-size: 2rem; 

`;

function App() {

  return (
    <div className="App">
      <TheP>
        Welcome to your nearest Space Exploration Cadet Station 🚀!
        Enjoy the transitional photos these next couple of days will bring!
      </TheP>
      <NasaCard/> 
    </div>
  
  );
}

export default App;


// api_key is: 8hMpW0PNEK4kI7K3dxZPr5J4PbohcBaXIUxZBHa8