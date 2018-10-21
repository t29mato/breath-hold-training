import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/*
1. 初期画面描画
2. スタートボタン押下
3. 開始5秒前のアナウンス
4. 開始と同時に吸って5秒
5. 5秒経過後に、10秒の吐いて
　- 4, 5の時は常に秒 数が表示される
6. 150秒経過で終了。
7. 息止めトレーニングに
8. 息止めトレーニングのスタートボタン押下
9. タイマースタート
10. 息が続かなくなったらタイマーを手動で停止させる
11. 息止めていた時間だけ、タイマースタートして、休憩してもらう
12. 休憩時間が終了したら息どめ開始が押せるようになる
13. 3かい繰り返したら、終了
*/

export default class DeepBreathTraining extends Component {
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
        <h2>深呼吸トレーニングへようこそ</h2>
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

