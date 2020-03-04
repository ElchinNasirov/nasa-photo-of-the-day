import React from "react";

const NasaCard = ( (props) => {

    return(
        <div className= "" key= { props.id }>
            <p> <b>Date:</b> { props.date } </p>
            <h2> Title: <em>{ props.title }</em></h2>

            <div className= "">
                
                <img src= { props.url } alt= "A Picture"/>

                <p> <b>Explanation:</b> <em>{ props.explanation }</em> </p>
            </div>
        </div>
    )
})

export default NasaCard;