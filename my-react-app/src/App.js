// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";


class App extends Component {
  state = {
    firstName: 'Russia',
    city: 'Moscow',
    region:'Europe',
    food:['Borscht', 'Blin', 'Kvas']
  }

  handleClick = () => {
    // to update state this.setState()
    this.setState({
      city: 'Vladivostok',
      region: 'Asia'
    });
  }

  //lifecycle 
  render() {
    return (
      //jsx
      // this refering to App
      <div>
        🇷🇺 Fact about Russia 🇷🇺<br></br>
        {this.state.firstName} is the largest country in the world. <br></br> And the famous city of {this.state.firstName} is {this.state.city}, which is located in {this.state.region}
        <br></br><br></br><button onClick={this.handleClick}>Change</button><br></br><br></br>

        {this.state.food.map((info) => {
          return (
            <div>
              {info}
            </div>
          )
        })}

      </div>
    )
  }

}

export default App;
