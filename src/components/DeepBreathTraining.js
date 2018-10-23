import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ProgressBar, Alert, Button } from 'react-bootstrap';

/*
1. 初期画面描画
2. 開始ボタン押下
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
      interval: 0,
      message: '開始ボタンを押してください',
      startFlag: false,
      breathInFlag: false,
      finishFlag: false,
    }
    this.breathInterval = 15; // 15秒 (吸って5秒, 吐いて10秒)
    this.breathInInterval = 5; // 5秒
    this.breathOutInterval = 10; // 10秒
    this.breathTimes = 10; // 3回
    this.audioElem = new Audio();
  }

  update() {
    var time = this.state.time;
    var interval = this.state.interval;
    if (time === this.breathInterval * this.breathTimes) {
      this.finish()
      return;
    };
    if (time % this.breathInterval === 0) {
      this.setState({ interval: interval + 1, message: '吸って〜', breathInFlag: true })
      this.playSound('BreathIn');
    }
    if (time % this.breathInterval === 5) {
      this.setState({ message: '吐いて〜', breathInFlag: false })
      this.playSound('BreathOut');
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
      interval: 0,
      message: '開始ボタンを押してください',
      startFlag: false,
      finishFlag: false,
    });
  }

  finish() {
    this.stop();
    this.setState({
      finishFlag: true,
      message: '深呼吸トレーニングは終了です。このまま息止めトレーニングに進みましょう。',
    })
    this.playSound('FinishDeepBreathTraining');
  }

  calculateTotalProgress() {
    return this.state.time / (this.breathInterval * this.breathTimes) * 100;
  }

  calculateIntervalProgress() {
    if (this.state.time % this.breathInterval === 0) {
      return 0;
    }
    if (this.state.breathInFlag) {
      return (this.state.time % this.breathInterval) / this.breathInInterval * 100;
    } else {
      return (this.breathInterval - this.state.time % this.breathInterval) / this.breathOutInterval * 100;
    }
  }

  playSound(fileName) {
    this.audioElem.src = 'mp3/' + fileName + '.mp3';
    this.audioElem.play();
  }

  render() {
    return (
      <div>
        <h2>深呼吸トレーニング</h2>
        <Alert variant={'primary'}>
          { this.state.message }
        </Alert>
        <ProgressBar now={ this.calculateIntervalProgress() }/>
        <p></p>
        <h5>トレーニング時間：{ this.state.time }秒 ({ this.state.interval }サイクル目)</h5>
        <ProgressBar now={ this.calculateTotalProgress() } />
        <p></p>
        <Row>
          <Col>
            <Button
              variant="primary"
              disabled={this.state.startFlag}
              onClick={ () => this.start() }
              block
            >
              開始
            </Button>
          </Col>
          <Col>
            <Button
              variant="dark"
              disabled={!this.state.startFlag}
              onClick={ () => this.reset() }
              block
            >
              リセット
            </Button>
          </Col>
        </Row>
        <div
          className={ this.state.finishFlag ? '': 'd-none' }
        >
        <Link to='/breath-hold'>息止めトレーニングに進む</Link></div>
      </div>
    )
  }
}

