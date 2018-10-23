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
          <Nav.Link href="./">ホーム</Nav.Link>
          <Nav.Link href="./deep-breath">深呼吸トレーニング</Nav.Link>
          <Nav.Link href="./breath-hold">息止めトレーニング</Nav.Link>
          <Nav.Link href="./tutorial">使い方</Nav.Link>
          <Nav.Link href="./news">新着情報</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}