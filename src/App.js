import React, { Component } from 'react';
import {connect} from 'react-redux'
import Search from './components/search'

import './App.css';

class App extends Component {


getKeywords= e=>{
  let key = e.target.value;
  console.log(key)
}

  render() {
    return (
      <div className="App">
      
      <Search keywords={this.getKeywords}/>
      <h2>booklist</h2>
      <h2>chossenbook</h2>
      </div>
    );
  }
}



export default connect(null,null)(App);
