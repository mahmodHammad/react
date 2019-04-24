import React , {Component} from 'react'

class Family extends Component{
   state={
      text:''
   }
   
   changeText(value){
      
      this.setState(()=>({
         text:value
      }))
   }
   rest(){
      this.setState(()=>({
         text:''
      }))
      
   }
   render(){
      const actualData=this.state.text===''?this.props.members: this.props.members.filter((r)=>r.name.includes(this.state.text))
   
      return<div>

      <table>
         <tr id="t01"><th>Firstname</th><th>Age</th> <th>Gender</th> <th>hoppy</th>  </tr>
         {actualData.map((e)=><tr>
            <th  key={e.name}> {e.name}   <button onClick={()=>this.props.delete(e)}>delete</button> </th>
            <th key={e.age}>{e.age} </th>
            <th key={e.job}>{e.jop} </th>
            <th key={e.hoppy}>{e.hoppy } </th>
         </tr>)}
         </table>

         <input value={this.state.text} placeholder="search" onChange={(event)=>this.changeText(event.target.value)}  ></input> 
         {this.state.text!==''&& <span>showing{actualData.length} member from {this.props.members.lenght} kaka <button onClick={()=>this.rest()}>reset</button> </span>}
         <h1>{this.state.text}</h1>
      </div>
   }
}

class App extends Component{
  state={
   members:[
      {
         "name":"mahmoud" ,
         "age": 15,
         "hoppy" :"drawing" ,
         "jop" :"engineer" ,
      },
      {
         "name":"hosasm" ,
         "age":91 ,
         "hoppy" : "dansing" ,
         "jop" :"engineer" ,
      },
      {
         "name":"sara" ,
         "age": 23,
         "hoppy" : "blow job" ,
         "jop" : "bitch",
      },
      {
         "name": "amira",
         "age": 20,
         "hoppy" : "loving me" ,
         "jop" :"nurce" ,
      },
      {
         "name": "heba",
         "age":22 ,
         "hoppy" : "drawing",
         "jop" : "doctor",
      },
   ]
}

delete=(e)=>{
   this.setState(()=> ({ 
   members:this.state.members.filter((s)=>s.name!==e.name)
}))
}


  render(){
     return <div>
        <Family members={this.state.members} delete={this.delete} ></Family>
     </div>
  }
}

export default App