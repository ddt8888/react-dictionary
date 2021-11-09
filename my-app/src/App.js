// import './App.css'
// import React, { Component } from 'react'

// 타이머 출력

// class App extends Component {
//   state = {
//     count: 0
//   }
//   increaseCount = () => {
//     this.setState({ count: this.state.count + 1 })
//   }
//   // 초기에 웹화면이 렌더링 되었을 때 타이머를 설정
//   componentDidMount() {
//     this.countID = setInterval(this.increaseCount, 1000)
//   }
//   // 사용자가 웹화면을 벗어나면 타이머를 해제함
//   componentWillUnmount() {
//     clearInterval(this.countID)
//   }
//   render() {
//     const { count } = this.state
//     return (
//       <div>
//         <h1>Increase automatically !</h1>
//         <h2>{count}</h2>
//       </div>
//     )
//   }
// }

// export default App;


// 버튼 만들기
// import './App.css'
// import React, { Component } from "react"
// import Button from './Button'

// class App extends Component {
//   handleClick = () => alert('clicked button')
//   render() {
//     return (
//       // 여기서 size는 props 개념(=> Button.js 로 넘어간다.)
//       <div>
//         <Button size='small' color='blue' width='fullWidth'>Add Todo</Button>
//         <p></p>
//         <Button size='medium' color='tomato'>
//           <img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img>
//           Add Todo
//         </Button>
//         <p></p>
//         <Button size='large' color='grey' handleClick={this.handleClick} disabled={true}>Add Todo</Button>
//       </div>

//     )
//   }
// }

// export default App

// 블로그 연습과제 1
import './App.css'
import { Component } from "react"
import Nav from './Nav'

class App extends Component {
  state = {
    menus: [
      {
        siteTitle: '구글',
        siteUrl: 'https://www.google.com'
      },
      {
        siteTitle: '네이버',
        siteUrl: 'https://www.naver.com'
      },
      {
        siteTitle: '사전 검색 서비스',
        siteUrl: 'https://ddt8888.github.io/dictionary-front/'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Nav menus={this.state.menus}></Nav>
      </div>
    );
  }
}

export default App