import React, { Component } from 'react'

export default class Training extends Component {
  constructor() {
    super();
    this.state = {
      button: {
        start: false,
      },
      timer: {
        hours: '00',
        minutes: '00',
        seconds: '00',
        time: 0
      }
    }
  }

  start() {
    this.intervalTimer = setInterval(() => this.update(), 1000)
  }

  update() {
    const time = this.state.timer.time + 1
    const hours = this.toHours(time)
    const minutes = this.toMinutes(time)
    const seconds = this.toSeconds(time) 
    console.log(seconds);

    this.setState({
      timer: {
        hours: this.toText(hours),
        minutes: this.toText(minutes),
        seconds: this.toText(seconds),
        time: time
      }
    })
  }

  toHours (time) {
    return parseInt(time / 60 / 60)
  }

  toMinutes (time) {
    return parseInt(time / 60 % 60)
  }

  toSeconds (time) {
    return time % 60
  }

  toText (time) {
    return ('00' + time).slice(-2)
  }


  render() {
    return (
      <div>
        <h2>トレーニングへようこそ</h2>
        <p>トレーニングします</p>
        <button type='button' name='button' onClick={ () => this.start() }>スタート</button>
        <p>{this.state.timer.time}</p>
      </div>  
    )
  }
}

