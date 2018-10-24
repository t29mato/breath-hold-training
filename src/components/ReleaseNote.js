import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class News extends Component {
  render() {
    return (
      <div>
        <h2>リリースノート</h2>
        <Card>
          <Card.Body>
            ・2018/10/25(木) 08:00 [Ver1.0.2]<br/>
            1. [息止めトレーニング] スコアが120秒の時に、1回目に1, 2回目に2, 3回目に0と表示される不具合修正<br/>
            2. [深呼吸トレーニング] 終了時にアナウンスを流すように修正<br/>
            3. [ホーム] 本アプリで音声を利用する注意文言を表示
            </Card.Body>
        </Card>
        <br/>
        <Card>
          <Card.Body>
            ・2018/10/24(水) 22:45 [Ver1.0.1]<br/>
            1. 音声ファイルを毎回読み込む仕様を修正したため、通信量の削減と音声アナウンスが遅れる不具合を修正しました。</Card.Body>
        </Card>
        <br/>
      </div>
    )
  }
}
