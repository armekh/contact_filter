import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList.js'

export default class App extends Component {
  render() {
   
    return (
      <div className="App">
         <ContactList  /> 
      </div>
    );
  }
}

