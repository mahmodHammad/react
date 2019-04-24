import React , {Component} from 'react'





class Home extends Component{
  state={
    members:[
      {
        "name":"mama",
        "age":65,
        "sex":"female"
    },
      {
        "name":"heba",
        "age":25,
        "sex":"female"
    },
      {
        "name":"mahmoud",
        "age":20,
        "sex":"male"
    },
      {
        "name":"nenp",
        "age":3,
        "sex":"female"
    },
    ]
  }


  render(){
    return(<div>hi </div>    )
  }
}

























  //</div>class Ages extends Component{
//   render(){
//     // console.log(this.props.people)
//     return(
//       <div>
         
//          <ul>
//             {this.props.people.map((e)=><li key={e.name}>
//             {e.name}
//             <button onClick={()=>this.props.select(e)} >choose me</button> 
//             <button onClick={()=>this.props.details(e)} >show details</button> 
//             <p>jees</p>
//            {/* { this.props.details.map((e)=><li >{e.age} {e.college}</li>)} */}
//             </li>)}
//             <div>
//             {this.props.people.map((e)=><li >{e.college}</li>)}
//             </div>
//          </ul>
//          <h3>s</h3>
      
//       </div>     
//     )
//   }  
// }   

class App extends Component{
  state={
    
    contacts:[
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ]
    }

removeContact =(contacts)=>{
  this.setState((currentState)=>({
    contacts:currentState.contacts.filter((l)=>l.id!==contacts.id)
  }))
}

// choosePerson=(persons)=>{
//   this.setState((current)=>({
//     people:current.people.filter((e)=>e.name===persons.name) ,
//   }))
// }
  render(){
    return <div>
      <Home/>
      {/* <Ages people={this.state.people} select={this.choosePerson} details={this.details}/> */}
      <ListContacts contacts={this.state.contacts}  onDeleteContact={this.removeContact}/>
    </div>
  }
}


 class ListContacts  extends Component{
   state={
    query:''
   }
   updateQuery=(query)=>{
     this.setState(()=>({
       query:query.trim()
     }))
   }
  render(){ 
    const { query } = this.state
    const { contacts, onDeleteContact } = this.props

    const showingContacts = query === ''? this.props.contacts: contacts.filter((c) => (c.name.includes(query)))

         return(<div className='list-contacts'>
       <br></br>


         <div className="list-contacts-top">
          <input value={query}  type="text" onChange={(event)=>this.updateQuery(event.target.value)} ></input>
         </div>

         <ol className='contact-list'>
       {showingContacts.map((name)=>(
         <li key={name.id} className='contact-list-item'>
           <div className='contact-avatar' style={{backgroundImage:`url(${name.avatarURL})`}}>
           </div>
           <div className='contact-details'>
             <p>{name.name}</p>
             <p>{name.handle}</p>
             <button
            onClick={() => onDeleteContact(name)}
            className='contact-remove'>
              Remove></button>
           </div>
         </li>
         
       ))}
       </ol>
     </div>
     )
  }
}  

export default App
































// import React, { Component } from 'react'
// import ListContacts from './ListContacts'
// import Lista from './ListContacts'
// import * as ContactsAPI from './utils/ContactsAPI'
// import CreateContact from './CreateContact'
// import { Route } from 'react-router-dom'



// class App extends Component {
//   state = {
//     contacts: []
//   }
//   componentDidMount() {
//     ContactsAPI.getAll()
//       .then((contacts) => {
//         this.setState(() => ({
//           contacts
//         }))
//       })
//   }
//   removeContact = (contact) => {
//     this.setState((currentState) => ({
//       contacts: currentState.contacts.filter((c) => {
//         return c.id !== contact.id
//       })
//     }))

//     ContactsAPI.remove(contact)
//   }
//   createContact = (contact) => {
//     ContactsAPI.create(contact)
//       .then((contact) => {
//         this.setState((currentState) => ({
//           contacts: currentState.contacts.concat([contact])
//         }))
//       })
//   }
//   render() {
//     return (
//       <div>
//         <Route exact path='/' render={() => (
//           <ListContacts
//             contacts={this.state.contacts}
//             onDeleteContact={this.removeContact}
//           />
//         )} />
//         <Route path='/create' render={({ history }) => (
//           <CreateContact
//             onCreateContact={(contact) => {
//               this.createContact(contact)
//               history.push('/')
//             }}
//           />
//         )} />
//       </div>
//     )
//   }
// }

