import React, { Component } from 'react';
import ShoseItem from './shoseItem';
import data from "./data.json"
export default class Shose extends Component {
    constructor (props){
        super(props);
        this.state = {
            listShose: data,
            detail: data[0],
        }
    }

    
    handleDetail = (shoes)=>{
        this.setState({
            detail: shoes,
        });
    }
    renderListShoes = ()=>{
       return this.state.listShose.map((item)=>{
            return <ShoseItem key={item.id} shoes={item} getDetail={this.handleDetail}/>
            
        })
    }
    
    
    render() {
    const {detail} = this.state;
    return (
      <div>
        <h3>Shoes</h3>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h3>Detail Shoes</h3>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{detail.name}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{detail.price}$</td>
                            </tr>
                            <tr>
                                <td>Descriptions</td>
                                <td>{detail.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-8'>
                    <div className='row'>{this.renderListShoes()}</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
