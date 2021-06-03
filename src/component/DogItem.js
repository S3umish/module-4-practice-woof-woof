import React from "react"

const DogItem = (props) => {
    return(
        (<span onClick={(e)=> props.handleClick(props.dog)}>
            {props.dog.name}</span>)
    )
}

export default DogItem