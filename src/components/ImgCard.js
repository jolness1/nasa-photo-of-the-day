import React from 'react';
import styled, { keyframes } from 'styled-components';


export default function ImgCard({ title, imgUrl, date, explanation }) {
    return (
        <div>
            <div><h1>{title} </h1></div>
            <a href={imgUrl}>
                <Potd src={imgUrl} alt="NASA" />
            </a>
            <h2>Release: {date}</h2>
            <Imgblurb>{explanation
            }</Imgblurb>

        </div>
    )
}

const Potd = styled.img`
    width: 70%;
    height: auto;
    /* border-style: solid;
    border-width: 5px;
    border-color: white; */
    border-radius: 70px;
    box-shadow: 25px 25px 50px black;
    `;


const Imgblurb = styled.div`
  width: 60%;
  margin: 0 auto;
  font-size: 1.2rem;
  color: white;
    `;