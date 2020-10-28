import React from 'react'
import './App.css'

class Card extends React.Component {
    render(){
        return(
            <div className='container'>
                <div className='card' >
                    <div className='card-info'>
                        <img width='200px'className='photo' src={this.props.users.avatar_url} />
                        <p className='username'>{this.props.users.login}</p>
                        <p className='name'>{this.props.users.name}</p>
                        <p>{this.props.users.location}</p>
                        <a href={this.props.users.url}></a>
                    </div>
                </div>
                    {
                        this.props.followers.map((follower) => {
                        return ( 
                            <div className='card'>
                                <div className='card-info'>
                                <img width='200px' src={follower.avatar_url} key={follower}/>
                                <p className='username'>{follower.login}</p>
                                <p className='name'>{follower.name}</p>
                                <p>{follower.location}</p>
                                <a href={follower.url}></a>
                                </div>
                            </div> 
                            )
                        })
                    }
                </div>
        )
    }
}

export default Card 