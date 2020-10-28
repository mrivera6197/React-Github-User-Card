import React from 'react'

class Card extends React.Component {
    render(){
        return(
            <div className='userContainer'>
                <img width='200px'className='photo' src={this.props.users.avatar_url} />
                <div className='info'>
                    <p>{this.props.users.login}</p>
                    <p>{this.props.users.name}</p>
                    <p>{this.props.users.location}</p>
                    <a href={this.props.users.url}></a>
                    {
                        this.props.followers.map((follower) => {
                        return ( 
                            <div>
                                <img width='200px' src={follower.avatar_url} key={follower}/>
                                <p>{follower.login}</p>
                                <p>{follower.name}</p>
                                <p>{follower.location}</p>
                                <a href={follower.url}></a>
                            </div> 
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Card 