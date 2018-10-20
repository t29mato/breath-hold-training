import React, { Component } from 'react'
import HeaderView from './HeaderView'

export default class TrainingView extends Component {
  render() {
    return (
      <div>
        <HeaderView/>
        <h2>トレーニングへようこそ</h2>
        <p>トレーニングします</p>
      </div>  
    )
  }
}

