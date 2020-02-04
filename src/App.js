import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      people:[],
    }

    this.getPeople = this.getPeople.bind(this);
  }


getPeople(){
  return axios.get("http://swapi.co/people")
  .then((response) => {
    console.log(response.data.results);
    this.setState( { people: response.data.results } )
  })
}

componentDidMount(){
  this.getPeople()
}
  render(){
    const {people} = this.state;
    return (
    <div className="App"> 
      <List people={people}/>
    </div>
    );
  }
}

export default App;
