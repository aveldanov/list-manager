import React, { Component } from 'react';
import './App.css';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Landing from './components/Layout/Landing/Landing';
import Dashboard from './components/Layout/Dashboard/Dashboard';
import List from './components/List/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Landing /> */}
        {/* <Dashboard /> */}
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
