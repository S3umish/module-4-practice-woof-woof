
import React from 'react'

const DogInfo = (props) => {

    const goodDogColor = props.dog.isGoodDog ? "yellow" :"red"

    const imgStyle = {
        boxShadow: `0 0 30px 15px ${goodDogColor}, 0 0 50px 15px ${goodDogColor}, 0 0 75px 45px ${goodDogColor}`
    }

    const goodDogButtonText = props.dog.isGoodDog ? "Good Dog" : "Bad Dog"

    return (
        <div id="dog-info">
            <img src= {props.dog.image} style={imgStyle} alt="puppy" />
            <h2>{props.dog.name}</h2>
            <button onClick={()=> props.handleClick(props.dog.id, !props.dog.isGoodDog)}>{goodDogButtonText}</button>
            
        </div>
    )
}

export default DogInfo

