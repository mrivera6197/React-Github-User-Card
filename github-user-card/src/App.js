import './App.css';
import React from 'react'
import axios from 'axios'
import Card from './Card'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    users: 'mrivera6197',
    followers: [],
    }
  }

  componentDidMount() {
    this.getUser(this.state.users)
  }

  handleUserChange = (e) => {
    this.setState({
      users: e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.getUser(this.state.users)

  }

  getUser = (users) => {
    fetch(`https://api.github.com/users/${users}`)
    .then((res) => res.json())
    .then((data)=> {
      this.setState({
        users: data
      })
    })
    .catch((err)=> console.log('error', err))
    axios.get(`https://api.github.com/users/${users}/followers`)
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
        <form onSubmit={this.handleSearch}>
          <label>
            username
          <input 
          onChange={this.handleUserChange} 
          type='text' 
          value={this.state.users} 
          placeholder='username'
          />
          <button>Search User</button>
          </label>
        </form>
        <Card users={this.state.users} followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
