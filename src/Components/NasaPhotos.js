import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

let NasaPhotos = () => {
    let [photos, setPhotos] = useState([]);

    useEffect( () => {
        axios
        // .get('https://api.nasa.gov/planetary/apod?hd=true')
        .get('https://api.nasa.gov/planetary/apod?date=2019-03-03&api_key=DEMO_KEY')
        // .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
            console.log(res);
            setPhotos(res.data);
        });
    }, []);

    return (
        <div>
            <NasaCard
            id= { photos.id }
            title= { photos.title }
            date= { photos.date }
            explanation= { photos.explanation }
            url= { photos.url } 
            />
        </div>
    );
}

export default NasaPhotos;