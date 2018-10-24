import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class News extends Component {
  render() {
    return (
      <div>
        <h2>新着情報</h2>
        <Card>
          <Card.Body>・2018/10/24(水) 09:00<br/>息止め練習アプリを公開しました。(Ver1.0.0)</Card.Body>
        </Card>
      </div>
    )
  }
}
