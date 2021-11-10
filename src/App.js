import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./Pages/homePage/homePage.page";
import ShowDetails from "./Pages/showDetails/showDetails.page";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://www.reddit.com/r/pics/.json?jsonp=")
      .then((response) => response.json())
      .then((pics) => this.setState({ data: pics.data.children }));
      
  }

  render() {
    const { data } = this.state;
 
    return (
      <Switch>
        <Route exact path='/' render={()=> <HomePage images={data} />} />
        <Route path = '/showDetails/:imageId' render={()=> <ShowDetails images={data} />} />
       </Switch>
    );
  }
}

export default App;
