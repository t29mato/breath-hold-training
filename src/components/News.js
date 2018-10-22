import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class News extends Component {
  render() {
    return (
      <div>
        <h2>新着情報</h2>
        <Card>
          <Card.Body>・2018/10/22(月)<br/>公開しました。</Card.Body>
        </Card>
      </div>
    )
  }
}
