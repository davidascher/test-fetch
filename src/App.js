import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentWillMount() {
    let self = this;
    fetch('https://api.github.com/')
      .then(resp => resp.json())
      .then(function(data) {
        return self.setState({'title': data.current_user_url})
      }
    ).catch(function(err) {
      console.log("ERROR fetching", err)
    })
  }
  render() {
    if (this.state && this.state.title) {
      let title = this.state.title
      return (
        <div>current user url: <strong>{title}</strong></div>
      )
    } else {
      return (
        <div className="App">
          <h2>Welcome to React</h2>
        </div>
      );
    }
  }
}

export default App;
