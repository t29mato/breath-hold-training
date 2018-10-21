import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>ホームへようこそ</h2>
        <p><Link to='/deep-breath'>トレーニングを開始する</Link></p>
      </div>  
    )
  }
}
