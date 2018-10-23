import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Alert, Table, Button } from 'react-bootstrap';

/*
0. 描画
1. 息止めトレーニングの開始ボタン押下
2. タイマー開始
3. 息が続かなくなったらタイマーを手動で停止させる
4. 息止めていた時間だけ、もしくは最低2分間、休憩してもらう
5. 休憩時間が終了したら息どめ開始が押せるようになる
6. 3かい繰り返したら、終了
7. 結果を表示する
*/

export default class BreathHoldTraining extends Component {

  constructor() {
    super();
    this.state = {
      time: 0,
      interval: 0,
      message: '開始ボタンを押してください',
      info: '息止め時間',
      startFlag: false,
      holdFlag: false,
      finishFlag: false,
      startButton: true,
      finishButton: false,
      resetButton: false,
    }
    this.interval = 3; // 3回で終了
    this.minRestTime = 120; // 最低120秒(2分間)は休憩する
    this.score = [];
    this.audioElem = new Audio();
  }

  update() {
    if (this.state.holdFlag) { // 息止め中
      this.setState ({ time: this.state.time + 1 })
    } else { // 休憩中
      if (this.state.time > 0) {
        this.setState ({ time: this.state.time - 1 })
      } else { // 休憩終了
        this.stop();
        this.setState({
          startButton: true,
          message: this.state.interval + '回目の休憩終了です、練習再開できます。',
        });
        this.playSound('FinishRestTime');
      }
    }
  }

  start() {
    this.intervalTimer = setInterval(() => this.update(), 1000);
    this.setState ({
      startFlag: true,
      holdFlag: true,
      startButton: false,
      finishButton: true,
      resetButton: false,
      interval: this.state.interval + 1,
      message: '息止め終了と同時に終了ボタンを押してください。'
    });
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
      info: '息止め時間',
      startFlag: false,
      holdFlag: false,
      finishFlag: false,
      startButton: true,
      finishButton: false,
      resetButton: false,
    });
    this.score = [];
  }

  finish() {
    this.score += this.state.time;
    if (this.state.interval === this.interval) { // 3回終了
      this.stop();
      this.setState({
        startButton: false,
        finishButton: false,
        resetButton: true,
        message: 'トレーニングは終了です、お疲れ様でした。',
      })
    } else { // 3回未満
      this.setState({
        time: this.state.time > this.minRestTime ? this.state.time : this.minRestTime,
        holdFlag: false,
        finishButton: false,
        resetButton: true,
        info: '残り休憩時間',
      })
      this.setState({
        message: this.state.interval + '回目の息止め終了。息止め時間か最低2分間の休憩が必要なためカウントダウン開始します。',
      })
      this.playSound('StartCountDown');
    }
  }

  playSound(fileName) {
    this.audioElem.src = 'mp3/' + fileName + '.mp3';
    this.audioElem.play();
  }


  render() {
    return (
      <div>
        <h2>息止めトレーニング</h2>
        <Alert variant={'primary'}>
          { this.state.message }
        </Alert>
        <h5>{ this.state.info }：{ this.state.time }秒 ({ this.state.interval }回目)</h5>
        <p></p>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>1回目</th>
              <th>2回目</th>
              <th>3回目</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ this.score[0] > 0 ? this.score[0] + '秒' : '' } </td>
              <td>{ this.score[1] > 0 ? this.score[1] + '秒' : '' } </td>
              <td>{ this.score[2] > 0 ? this.score[2] + '秒' : '' } </td>
            </tr>
          </tbody>
        </Table>

        <Row>
        <Col>
            <Button
              variant="primary"
              disabled={ !this.state.startButton }
              onClick={ () => this.start() }
              block
            >
              開始
            </Button>
          </Col>
          <Col>
            <Button
              variant="dark"
              disabled={ !this.state.finishButton }
              onClick={ () => this.finish() }
              block
            >
              終了
            </Button>
          </Col>
          <Col>
            <Button
              variant="dark"
              disabled={ !this.state.resetButton }
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

