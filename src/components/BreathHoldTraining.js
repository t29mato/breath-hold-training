import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/*
0. 描画
1. 息止めトレーニングのスタートボタン押下
2. タイマースタート
3. 息が続かなくなったらタイマーを手動で停止させる
4. 息止めていた時間だけ、タイマースタートして、休憩してもらう
5. 休憩時間が終了したら息どめ開始が押せるようになる
6. 3かい繰り返したら、終了
7. 結果を表示する
*/

export default class BreathHoldTraining extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      finishFlag: false
    }
  }

  
  update() {
    var time = this.state.time;
    if (time >= 8) {
      this.finish()
      return;
    };
    this.setState ({ time: time + 1 })
    console.log(time);
    if (time < 5) { return; }
    if ((time - 5) % 15 === 0) { console.log('吸って〜'); }
    if ((time - 5) % 15 === 5) { console.log('吐いて〜'); }
  }

  start() {
    this.intervalTimer = setInterval(() => this.update(), 1000);
    console.log('開始5秒前');
  }

  stop() {
    clearInterval(this.intervalTimer);
  }

  reset() {
    this.stop();
    this.setState({ time: 0 });
  }  

  finish() {
    this.stop();
    this.setState({finishFlag: true})
    console.log('終了!')
  }

  render() {
    return (
      <div>
        <h2>息止めトレーニングへようこそ</h2>
        <p>タイマー： { this.state.time }</p>
        <p>メッセージ</p>
        <button type='button' name='start' onClick={ () => this.start() }>スタート</button>
        <button type='button' name='reset' onClick={ () => this.reset() }>リセット</button>
        <div
          style={{ display: this.state.finishFlag ? '': 'none' }}
        >
        <Link to='/breath-hold'>息止めトレーニングに進む</Link></div>
      </div>  
    )
  }
}

