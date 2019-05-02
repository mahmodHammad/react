import { Link } from 'react-router-dom'

import React, { Component } from 'react'
import ListContacts from './ListContacts'
import Lista from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'




class App extends Component {
  state = {
    contacts: [
 
    ]
  }
  componentDidMount(){
     ContactsAPI.getAll().then((contacts)=>{this.setState(()=>({contacts}))})
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))

    ContactsAPI.remove(contact)
  }


createContact=(contact)=>{
   ContactsAPI.create(contact).then((contact)=>{
      this.setState((current)=>({
         contact:current.contacts.concat([contact])
      }))
   })
}

//   createContact = (contact) => {
//     ContactsAPI.create(contact)
//       .then((contact) => {
//         this.setState((currentState) => ({
//           contacts: currentState.contacts.concat([contact])
//         }))
//       })
//   }
  render() {
    return (
      <div>
        <Route exact path="/" render={()=>(
           <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            />
            )}/>
        <Route path="/create" render={({history})=>(
            <CreateContact onCreateContact={(con)=>{
               this.createContact(con)
               history.push('/')
               // console.log(history , history.push('/'))
            }}/>
         )}/>
       
      </div>
    )
  }
}

export default App