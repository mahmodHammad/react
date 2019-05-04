import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

const numQuestions = 0;
const numCorrect = 0;



class App extends Component {
  
  state={
    score:0,
    question :0
  }
  
  validate=(v1 ,v2 ,v3 ,ans ,t)=>{
    let correct =v1+v2+v3;
    if(t===1){
      if(correct===ans){
        this.setState({
        score:this.state.score+1 ,
        question:this.state.question+1
      })
      }
      else{
        this.setState({
          score:this.state.score ,
          question:this.state.question+1
        })
      }
    } 
    else{
      if(correct!==ans){
        this.setState({
        score:this.state.score+1 ,
        question:this.state.question+1
      })
      }
      else{
        this.setState({
          score:this.state.score ,
          question:this.state.question+1
        })
      }
    }
  }
      
  

  render() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return (
      <div className="App">
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">

            <h1 className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}  </h1>
          
          </div>
          <button onClick={()=>this.validate(value1 ,value2 ,value3 ,proposedAnswer ,1)} className="true" >True</button>
          <button onClick={()=>this.validate(value1 ,value2 ,value3 ,proposedAnswer ,0) }className="false" >False</button>
          <div className="text ">
            <div className="score ">
              <h3> Your Score</h3>
              {Math.round(this.state.score / this.state.question *100) >49?<h4 className="pass"> {  this.state.question !==0&&Math.round(this.state.score / this.state.question *100)} %  </h4>:<h4 className="fall"> {  this.state.question !==0&&Math.round(this.state.score / this.state.question *100)} %  </h4>}
              {/* <h4> {  this.state.question !==0&&Math.round(this.state.score / this.state.question *100)} %  </h4> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App