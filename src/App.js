import React, { Component }from 'react';
import './App.css';

import DogInfo from './component/DogInfo'
import DogList from './component/DogList'

const URL = 'http://localhost:3000/pups'

class App extends Component {

  state = {
    dogId: 1,
    dogs: []
  }

  componentDidMount = () => {
    fetch(URL)
    .then(res=>res.json())
    .then(dogs => {
         console.log(dogs)  
        this.setState({ dogs })
    })
  }

   toggleIsGoodDog = (dogId, isGoodDog)=> {

    const newDogsArray = this.state.dogs.map(dog => {
      if (dog.id === dogId){
        dog.isGoodDog = isGoodDog
      }
      return dog
    })
     this.setState({dogs: newDogsArray})
     fetch(URL + `/${dogId}`,{
       method: "PATCH",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({
         isGoodDog
       })
     })

   }

  displayDog = (dog) => {
    this.setState({
      dogId: dog.id
      
    })
  }

  dogToRender = () => {
    return this.state.dogs.find(dog => dog.id === this.state.dogId)
  }

  

  render(){
    return (
      
      <div className="App">
        {/* <div id="filter-div">
          <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div> */}

        <div>
          <DogList dogs={this.state.dogs} handleClick={this.displayDog}/>
          <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            {this.state.dogs[0] && <DogInfo  dog= {this.dogToRender()} handleClick={this.toggleIsGoodDog} />}
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
