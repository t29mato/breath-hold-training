import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class News extends Component {
  render() {
    return (
      <div>
        <h2>新着情報</h2>
        <Card>
          <Card.Body>・2018/10/25(木) 22:45 [Ver1.0.1]<br/>音声ファイルを毎回読み込む仕様を修正したため、通信量の削減と音声アナウンスが遅れる不具合を修正しました。</Card.Body>
        </Card>
        <br/>
        <Card>
          <Card.Body>・2018/10/24(水) 09:00 [Ver1.0.0]<br/>息止め練習アプリを公開しました。</Card.Body>
        </Card>
      </div>
    )
  }
}
