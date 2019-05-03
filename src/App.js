import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '2',
  }
];
const users = [
  {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  {
    id: 2,
    name: 'mahmoud hammad',
    userName: 'fucker',
  },
  {
    id: 2,
    name: 'mahmoud',
    userName: 'fucker',
  },
  {
    id: 2,
    name: ' hammad',
    userName: 'fucker',
  },
  {
    id: 1,
    name: 'mahmoud hammad',
    userName: 'fucker',
  },
]
const movies = [
 {
    id: 1,
    name: 'Porn',
  },
 {
    id: 2,
    name: 'the avengers END GAME',
  },
 {
    id: 3,
    name: 'خوستيقه',
  },
]

class LikedList extends Component{
  render(){
    return <ul>
      {this.props.users.map((f)=>
        f.id=== this.props.movieid&& <li>{f.name}</li>   )}
        
    </ul>
  }

}

class Movies extends Component{
  render(){
    return(
      <ul >
        {this.props.movies.map((a)=>(
          <div className="bord">
            <h3> {a.name} </h3>
            <LikedList movie={a.name} movieid={a.id} users={this.props.users}/>
          </div>
        ))}
      </ul>
    )
  }
}

class App extends Component {
render() {
    return (
      <div>
        <Movies profiles={profiles} users={users} movies={movies}/>
      </div>
    )
  }
}

export default App