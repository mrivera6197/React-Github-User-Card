import './App.css';
import React from 'react'
import axios from 'axios'
import Card from './Card'

class App extends React.Component {
  constructor() {
    super()
  this.state = {
    users: {},
    followers: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/mrivera6197')
    .then((res) => res.json())
    .then((data)=> {
      this.setState({
        users: data
      })
    })
    .catch((err)=> console.log('error', err))
    axios.get('https://api.github.com/users/mrivera6197/followers')
    .then((res => {
      this.setState({
        followers: res.data
      })
    }))
  }

  render() {
    return (
      <div>
        <h1>github user card</h1>
        <Card users={this.state.users} followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
