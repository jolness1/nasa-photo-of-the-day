
import React from "react";
import "./App.css";
import ImgGrid from "./components/ImgGrid";
import styled, { keyframes } from "styled-components";
import redLogo from "./1000px-NASA_Worm_logo.svg.png"



function App() {
  return (
    <div className="App">
      <h1>GREETINGS and welcome to</h1>
      <div> 
        <NasaLogo src= {redLogo}/>
      </div>
     
      
      <BeautBlub>These are some beautiful Images we though you might enjoy! </BeautBlub>

      <ImgGrid />
      <ImgGrid />
      <ImgGrid />
      <ImgGrid />
      <ImgGrid />
      <ImgGrid />
    </div>
  );
}

const NasaLogo = styled.img`
  width: 20%;
  &:hover{
      transform: scale(2);
      transition: transform 0.5s ease-in-out;
        }
      transition: transform 0.5s ease-in-out;
      /* box-shadow: 25px 25px 10px black; */ 
      //despite transparent background image is a square, box shadow looks dumb
`
const BeautBlub = styled.div`
  font-size:2.4rem;

`

export default App;