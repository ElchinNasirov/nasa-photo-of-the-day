import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

// Import Styled Components
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 3%;
`;



let NasaPhotos = () => {
    let [photos, setPhotos] = useState([]);

    useEffect( () => {
        axios
        .get('https://api.nasa.gov/planetary/apod?date=2019-03-03&api_key=DEMO_KEY')
        .then(res => {
            console.log(res);
            setPhotos(res.data);
        });
    }, []);

    return (
        <Container>
            <NasaCard
            id= { photos.id }
            title= { photos.title }
            date= { photos.date }
            explanation= { photos.explanation }
            url= { photos.url } 
            />
        </Container>
    );
}

export default NasaPhotos;