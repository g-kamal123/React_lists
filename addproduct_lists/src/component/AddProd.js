import React, { Component } from 'react'
import Print from './Print'

export class AddProd extends Component {
    state = {
        id:'',
        name:'',
        price:'',
        inputArray:[{
            id:101,
            name:'ABC',
            price:'USD 100'
        }]
    }

    inputIdHandler = (event)=>{
        var inp = event.target.value
        this.setState({
            id:inp
        })
    }
    inputNameHandler = (event)=>{
        var inp = event.target.value
        this.setState({
            name:inp
        })
    }
    inputPriceHandler = (event)=>{
        var inp = event.target.value
        this.setState({
            price:inp
        })
    }
    addProductHandler = (event)=>{
        var arr = {
            id:this.state.id,
            name:this.state.name,
            price:this.state.price
        }
        var toAdd = [arr,...this.state.inputArray]
        this.setState({
            inputArray:toAdd
        })
    }
  render() {
    return (
        <div className='gui'>
      <form>
        <p>
            <label htmlFor='a'>Product Id</label>
            <input id='a' value={this.state.id} onChange={this.inputIdHandler}/>
        </p>
        <p>
            <label htmlFor='b'>Product Name</label>
            <input id='b' value={this.state.name} onChange={this.inputNameHandler}/>
        </p><p>
            <label htmlFor='c'>Product Price</label>
            <input id='c' value={this.state.price} onChange={this.inputPriceHandler}/>
        </p>
      </form>
      <button onClick={this.addProductHandler}>ADD PRODUCT</button>
      <Print print={this.state.inputArray}/>
      </div>
    )
  }
}

export default AddProd