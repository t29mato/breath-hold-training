import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav }from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Breath Hold Training</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to='/'>ホーム</Link>
            <Link to='/deep-breath'>深呼吸トレーニング</Link>
            <Link to='/breath-hold'>息止めトレーニング</Link>
            <Link to='/tutorial'>使い方</Link>
            <Link to='/news'>新着情報</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}