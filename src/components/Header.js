import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <ul>
        <li><Link to='/tutorial'>使い方</Link></li>
        <li><Link to='/news'>新着情報</Link></li>
      </ul>
    )
  }
}