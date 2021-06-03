import React from "react"
import DogItem from './DogItem'


const DogList = (props) => {
    const dogsToRender = props.dogs.map( dog => {
        return <DogItem key={dog.id} dog={dog} handleClick={props.handleClick}/>
    })
    
    return (
        <div id="dog-list">
            {dogsToRender}
        </div>
    )
        
}

export default DogList