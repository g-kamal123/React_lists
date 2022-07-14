import React, { Component } from 'react'

export class Switch extends Component {
    state= {
        grp1Array:['Ajax','Jquery','Javascript','MooTools','Prototype','Dojo'],
        grp2Array:['Asp.NET','C#','VB.NET','Java','PHP','Python'],
        selectedItemsOfGrp1:[],
        selectedItemsOfGrp2:[]
    }

    selectedGrp1ArrayHandler = (event)=>{
        event.preventDefault()
        // alert('hello')
        var inp = event.target.value
        // var arr = this.state.grp1Array.filter((item)=>{
        //     if(item===inp)
        //     return item
        // })
        // console.log(inp)
        var arrt = [inp,...this.state.selectedItemsOfGrp1]
        var count =0
        arrt.map((item)=>{
            if(item===inp)
            count++
        })
        if(count%2===0){
            arrt=arrt.filter((item)=>{
                if(item!=inp)
                return item
            })
        }
        // console.log(arrt)
        this.setState({
            selectedItemsOfGrp1:arrt
        })
    }
    selectedGrp2ArrayHandler = (event)=>{
        event.preventDefault()
        var inp = event.target.value
        var arrt = [inp,...this.state.selectedItemsOfGrp2]
        var count =0
        arrt.map((item)=>{
            if(item===inp)
            count++
        })
        if(count%2===0){
            arrt=arrt.filter((item)=>{
                if(item!=inp)
                return item
            })
        }
        this.setState({
            selectedItemsOfGrp2:arrt
        })
    }
    leftToRightHandler = (event)=>{
        event.preventDefault()

        // alert('click')
        var arr =[...this.state.grp1Array]
        // console.log(this.state.selectedItemsOfGrp1)
        this.state.selectedItemsOfGrp1.map((item)=>{
            // alert(item)
            arr = arr.filter((item1)=>{
                if(item1!=item)
                return item
            })
            // arr = [...arr,arrItem]
        })
        // arr = [...new Set(arr)]
        console.log(arr)
        var arr1 = [...this.state.selectedItemsOfGrp1,...this.state.grp2Array]
        document.getElementById('left').selectedIndex=-1
        this.setState({
            grp1Array:arr,
            grp2Array:arr1,
            selectedItemsOfGrp1:'',
            selectedItemsOfGrp2:''
        })
    }
    rightToLeftHandler= (event)=>{
        event.preventDefault()
        var arr =[...this.state.grp2Array]
        this.state.selectedItemsOfGrp2.map((item)=>{
            arr = arr.filter((item1)=>{
                if(item1!=item)
                return item
            })
        })
        var arr1 = [...this.state.selectedItemsOfGrp2,...this.state.grp1Array]
        document.getElementById('right').selectedIndex=-1
        this.setState({
            grp1Array:arr1,
            grp2Array:arr,
            selectedItemsOfGrp1:'',
            selectedItemsOfGrp2:''
        })
    }
  render() {
    return (
      <div className='switch'>
        <div>
        <h5>Group1</h5>
        <select id='left' onClick={this.selectedGrp1ArrayHandler} multiple={true}>
            {this.state.grp1Array.map((item)=>
            <option>{item}</option>)}
        </select>
        </div>
        <div className='inputbtn'>
        <input type='button' value='>' onClick={this.leftToRightHandler}/>
        <input type='button' value='<' onClick={this.rightToLeftHandler}/>
        </div>
        <div>
        <h5>Group2</h5>
        <select id='right' onClick={this.selectedGrp2ArrayHandler} multiple={true}>
            {this.state.grp2Array.map((item)=>
            <option>{item}</option>)}
        </select>
        </div>
      </div>
    )
  }
}

export default Switch