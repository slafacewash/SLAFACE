import React from 'react';
import {Button, Input} from 'semantic-ui-react'

function Login2(){

  return(
    <div>
    <Input/>
    <Button onClilck = { (e) => {
      console.log(e)
      alert(e.target.value)
    } }> 로그인 </Button>
    </div>

  )
}

class Login extends React.Component{
  constructor(){
    super()
    this.state = {id : "sfasd"}
  }

  render(){
    return(
      <div>
      <Input/>
      <Button value - {this.state.id} onClilck = { (event) => {
        alert(event.target.value)
      } }> Login </Button>
      </div>
    )
  }
}


function App() {
  return (
    <div>
  <p> 안녕하세요 </p>
  <Login/>
  </div>
  );
}

export default App;
