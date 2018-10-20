import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeaderView extends Component {
  render() {
    return (
      <ul>
        <li><Link to='/'>トレーニング</Link></li>
        <li><Link to='/result'>結果</Link></li>
        <li><Link to='/tutorial'>チュートリアル</Link></li>
      </ul>
    )
  }
}