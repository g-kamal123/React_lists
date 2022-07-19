import React, { Component } from 'react'

export class Print extends Component {
  render() {
    return (
      <div>
        <table>
            <tbody>
            <tr>
                <td>Product Id</td>
                <td>Product Name</td>
                <td>Product Price</td>
            </tr>
            {this.props.print.map((item,index)=>
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
            )}
            </tbody>
        </table>
      </div>
    )
  }
}

export default Print