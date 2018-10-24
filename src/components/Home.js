import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>ホーム</h2>
        <p>[注意] 本アプリでは練習の際に音声アナウンスを利用しますのでご注意ください。</p>
        <p><Link to='./deep-breath'>トレーニングを開始する</Link></p>
      </div>
    )
  }
}
