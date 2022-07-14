import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    input:'',
    inputArray : []
  }

  inputHandler = (event)=>{
    var inp = event.target.value
    this.setState({
      input:inp
    })
  }
  buttonHandler = (event)=>{
    if(this.state.input===''){
      alert('enter an item to add')
      return
    }
    var arr = [this.state.input,...this.state.inputArray]
    this.setState({
      inputArray:arr,
      input:''  
    })
  }
  deleteHandler = (event)=>{
    var inp = event.target.parentElement.childNodes[1].innerText
    // console.log(inp)
    var arr = this.state.inputArray.filter((item)=>{
      if(item!=inp)
      return item
    })
    this.setState({
      inputArray:arr,
    })
  }
  render(){
  return (
    <div className="App">
     <div className='stars'>
      <span className='item wars'><input value='STAR WARS' disabled/></span>
      <span className='input item'><input placeholder='ENter New Item' value={this.state.input} onChange={this.inputHandler}/>
      <button onClick={this.buttonHandler}>Add</button></span>
      {this.state.inputArray.map((item)=>
      <span className='item'><button className='delete' onClick={this.deleteHandler}>X</button><span>{item}</span></span>)}
     </div>
    </div>
  )
  }
}

export default App;
