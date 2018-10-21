import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap';

/*
1. 初期画面描画
2. スタートボタン押下
3. 開始5秒前のアナウンス
4. 開始と同時に吸って5秒
5. 5秒経過後に、10秒の吐いて
　- 4, 5の時は常に秒 数が表示される
6. 150秒経過で終了。
7. 息止めトレーニングに
*/

export default class DeepBreathTraining extends Component {

  constructor() {
    super();
    this.state = {
      time: 0,
      countdown: 0,
      cycle: 0,
      message: 'スタートボタンを押してください',
      finishFlag: false,
    }
  }
  
  update() {
    var time = this.state.time;
    var cycle = this.state.cycle;
    if (time === 15 * 1) {
      this.finish()
      return;
    };
    if ((time) % 15 === 0) {
      this.setState({ cycle: cycle + 1, message: '吸って〜' })
    }
    if ((time) % 15 === 5) {
      this.setState({ message: '吐いて〜' })
    }
    if ((time) % 15 < 5) {
      this.setState ({ countdown: 5 - (time % 15) })
    } else {
      this.setState ({ countdown: 15 - (time % 15) })
    }
    this.setState ({ time: time + 1 })
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
    this.setState({
      time: 0,
      cycle: 0,
      countdown: 0,
      message: 'リセットされました'
    });
  }  

  finish() {
    this.stop();
    this.setState({finishFlag: true})
    console.log('終了!')
  }

  render() {
    return (
      <div>
        <h2>深呼吸トレーニングへようこそ</h2>
        <ProgressBar now={60} />
        <p>トレーニング時間：{ this.state.time }秒</p>
        <p>サイクル：{ this.state.cycle }回目</p>
        <p>メッセージ：{ this.state.message }</p>
        <p>カウントダウン：{ this.state.countdown }秒</p>
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

