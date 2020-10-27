import './App.css';
import React from 'react'
import axios from 'axios'

class App extends React.Component {

  state = {
    users: [],
  }

  componentDidMount() {
    fetch('https://api.github.com/users/mrivera6197/')
    .then((res) => res.json())
    .then((data)=> {
      this.setState({
        users: data
      })
    })
    .catch((err)=> console.log('error', err))
  }

  render() {
    return (
      <div>
        <h1>github user card</h1>
        <div className='userContainer'>
          {
            this.state.users.map((user => (
            <img width='200px' src={user.avatar_url} key={user} /> 
            )))
          }
        </div>
      </div>
    )
  }
}

export default App;
