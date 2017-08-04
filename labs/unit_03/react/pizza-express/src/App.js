import React, { Component } from 'react';
import Description from './components/Description';
import MenuList from './components/MenuList';
import LocationList from './components/Locationlist.jsx';
import Contact from './components/Contact';
import NavBar from './components/navbar.jsx'
import Splash from './components/splash.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Splash />
        <Description />
        <MenuList />
        <LocationList />
        <Contact />
      </div>
    );
  }
}

export default App;
