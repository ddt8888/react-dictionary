import './App.css'
import React, { Component } from 'react'
import animals from './DummyData'
import words from './worddummy'

class App extends Component {
    state = {
        number: 0,
        numbers: '',
        index: 0
    }
    pickRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    setNumber = () => {
        this.setState({ index: this.pickRandomNumber(0, words.length - 1) })
    }
    checkDuplication = (numbers, picked) => {
        return numbers.find(num => num === picked)
    }
    showRandomNumber = () => {
        // 중복위험 있는 코드
        // const numbers = [0, 0, 0, 0, 0, 0]
        const numbers = []
        let cnt = 0;
        // const picks = numbers.map(n => this.pickRandomNumber(1, 45))
        while (numbers.length < 6) {
            const picked = this.pickRandomNumber(1, 45)
            const isDuplicated = this.checkDuplication(numbers, picked)
            if (isDuplicated) {
                console.log('duplicated...', isDuplicated)
                numbers.push(this.pickRandomNumber(1, 45))
            } else {
                numbers.push(picked)
            }
            cnt++;
        }
        this.setState({ number: this.pickRandomNumber(1, 45), numbers: numbers.join(' ') })
    }
    // // 초기에 웹화면이 렌더링 되었을 때 타이머를 설정
    componentDidMount() {
        this.countID = setInterval(this.showRandomNumber, 1000)
        this.wordID = setInterval(this.setNumber, 800)
    }
    // // 사용자가 웹화면을 벗어나면 타이머를 해제함
    componentWillUnmount() {
        clearInterval(this.countID)
        clearInterval(this.wordID)
    }
    render() {
        const { number, numbers, index } = this.state
        const word_picked = words[index]
        const Style = {
            background: 'tan',
            margin: '0 auto',
            width: '30%',
            textAlign: 'center',
            padding: '20px'
        }

        return (
            <div style={Style}>
                <h1>Lotto Random Number !</h1>
                <h2>Lotto Numbers   {numbers}</h2>
                <h2> + Bonus Number {number}</h2>
                <hr></hr>
                <h1>Flash Card</h1>
                <h2>Word : {word_picked.word}</h2>
                <h2>Meaning : {word_picked.meaning}</h2>

            </div>
        )
    }
}

export default App;