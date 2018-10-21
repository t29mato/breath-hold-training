import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProgressBar, Alert } from 'react-bootstrap';

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
      countdown: '',
      cycle: 0,
      message: 'スタートボタンを押してください',
      startFlag: false,
      breathInFlag: false,
      finishFlag: false,
    }
    this.cycleInterval = 15; // 15秒 (吸って5秒, 吐いて10秒)
    this.breathInInterval = 5; // 15秒 (吸って5秒, 吐いて10秒)
    this.breathOutInterval = 10; // 15秒 (吸って5秒, 吐いて10秒)
    this.cycleTimes = 1; // 3回
  }

  update() {
    var time = this.state.time;
    var cycle = this.state.cycle;
    if (time === this.cycleInterval * this.cycleTimes) {
      this.finish()
      return;
    };
    if (time % 15 === 0) {
      this.setState({ cycle: cycle + 1, message: '吸って〜', breathInFlag: true })
    }
    if (time % 15 === 5) {
      this.setState({ message: '吐いて〜', breathInFlag: false })
    }
    if (time % 15 < 5) {
      this.setState ({ countdown: 5 - (time % 15) })
    } else {
      this.setState ({ countdown: 15 - (time % 15) })
    }
    this.setState ({ time: this.state.time + 1 })
  }

  start() {
    this.intervalTimer = setInterval(() => this.update(), 1000);
    this.setState ({ startFlag: true });
  }

  stop() {
    clearInterval(this.intervalTimer);
  }

  reset() {
    this.stop();
    this.setState({
      time: 0,
      cycle: 0,
      countdown: '',
      message: 'スタートボタンを押してください',
      startFlag: false,
      finishFlag: false,
    });
  }  

  finish() {
    this.stop();
    this.setState({
      finishFlag: true,
      startFlag: false, 
      message: 'お疲れ様でした、深呼吸トレーニングは終了です。このまま息止めトレーニングに進みましょう。',
    })
  }

  render() {
    return (
      <div>
        <h2>深呼吸トレーニングへようこそ</h2>
        <Alert variant={'primary'}>
          { this.state.message }
        </Alert>
        <h5>トレーニング時間：{ this.state.time }秒 ({ this.state.cycle }サイクル目)</h5>
        <ProgressBar now={ this.state.time / (this.cycleInterval * this.cycleTimes) * 100} />
        <p></p>
        <h5>カウントダウン：{ this.state.countdown + '秒' }</h5>
        <ProgressBar now={ this.state.breathInFlag ? (this.breathInInterval -this.state.countdown) / this.breathInInterval * 100 : 0 }/>
        <button type='button' name='start' onClick={ () => this.start() }>スタート</button>
        <button type='button' name='reset' onClick={ () => this.reset() }>リセット</button>
        <div
          className={ this.state.finishFlag ? '': 'd-none' }
        >
        <Link to='/breath-hold'>息止めトレーニングに進む</Link></div>
      </div>  
    )
  }
}

