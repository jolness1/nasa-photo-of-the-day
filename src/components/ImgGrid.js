import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImgCard from './ImgCard';

export default function ImgGrid(){
    const [imgState, setImgState] = useState();
    const [dateState, setDateState] = useState('date');
    const [titleState, setTitleState] = useState('title');
    const [explainState, setExplainState] = useState('information');

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=vRYa6NBtdb9a5fCt7UQEoUHdgaeaY0gmTqEj3S1M')
            .then(response => {
                console.log(response.data);
                setImgState(response.data.url);
                setDateState(response.data.date);
                setTitleState(response.data.title);
                setExplainState(response.data.explanation);
            })
    }, [])

    return(
        <div className='img-info' >
            <ImgCard imgUrl={ imgState } date={ dateState } title={titleState} explanation={explainState} />
        </div>
         )
    }