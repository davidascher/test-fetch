import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('https://api.github.com/')
      .then(resp => resp.json())
      .then((data) => {
        this.setState({'current_user_url': data.current_user_url})
      }
    ).catch(function(err) {
      console.log("ERROR fetching", err)
    })
  }
  render() {
    if (this.state && this.state.current_user_url) {
      let title = this.state.current_user_url
      return (
        <div className="App">
          <div>Fetch call HAS returned: <strong>{title}</strong></div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <h2>Fetch call has not returned</h2>
        </div>
      );
    }
  }
}

export default App;
