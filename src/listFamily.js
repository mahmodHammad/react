import React , {Component} from 'react'

class Home extends Component{

  state={
    text:''
  }

 updateText=(inps)=>{
   this.setState(()=>({
     text:inps
   }))
 }

 reset=()=>this.updateText('')
 
  render(){

    const actualData= this.state.text===''?this.props.mems:this.props.mems.filter((r)=>r.name.includes(this.state.text))

    return(<div>
      <table className="table" >
        <tr id="t01"><th>Firstname</th><th>Age</th> <th>Gender</th></tr>
{/* MAP OVER ALL DATA AND DISAPLAY IT in a table */}
        {actualData.map((e)=><tr>
          <th  key={e.name}> {e.name}   <button onClick={()=>this.props.delete(e)}>delete</button>
            </th>
          <th key={e.age}>{e.age} </th>
          <th key={e.sex}>{e.sex} </th>
            </tr>)}
        </table>

        {/* get input to filter the data  */}
      <input type="text" placeholder="search" 
        value={this.state.text} 
        onChange={(event)=>this.updateText(event.target.value)}>
        </input>
{actualData !==this.props.mems &&(
  <div> showing {actualData.length} of {this.props.mems.length} <span><button onClick={this.reset}>show all</button></span> </div>
)}        
      <h1>{this.state.text}</h1>
     </div>    )
  }
}

class App extends Component{
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
        "name":"neno",
        "age":3,
        "sex":"female"
    },
    ]
  }


deleteItem=(inp)=>{
  this.setState(()=>({
    members:this.state.members.filter((f)=>f.name!==inp.name)
  }))
}

  render(){
    return <div>
      <Home mems={this.state.members } delete={this.deleteItem} />
    </div>
  }
}

export default App


  // display=(current)=>{
  //   const mems=this.props.mems
  //   console.table(mems , this.props.mems)
  //   this.setState(()=>({
  //    mems :current===''?mems:mems.filter((e)=>e.name===current)
  //   }))
  // }























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

