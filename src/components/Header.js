import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav }from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>息止め練習アプリ_0.0.14</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className='nav-link' to='./'>ホーム</Link>
            <Link className='nav-link' to='./deep-breath'>深呼吸トレーニング</Link>
            <Link className='nav-link' to='./breath-hold'>息止めトレーニング</Link>
            <Link className='nav-link' to='./tutorial'>使い方</Link>
            <Link className='nav-link' to='./news'>新着情報</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}