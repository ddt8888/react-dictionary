import React from 'react'

function Todo({ user, name, done, description }) {
    // 초기 데이터 선언
    // constructor 함수 사용하지않아도 아래 주석처럼 입력가능
    // state = {
    //     name: "cleaning",
    //     done: false,
    //     description: "cleaning my room"
    // }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: "cleaning",
    //         done: false,
    //         description: "cleaning my room"
    //     }
    //     // 핸들러함수에 있는 화살표함수를 안쓸때 아래 코드를 입력해야 this를 인식할수 있다.
    //     // this.changeTodoName = this.changeTodoName.bind(this)
    // }
    // //이벤트 핸들러 함수
    // changeTodoName = () => {
    //     console.log(this)
    //     this.setState({ name: "learning react" })
    //     this.setState({ description: "learning react to basic" })
    // }
    // render() {
    //     const { name, done, description } = this.state
    return (
        <>
            <h3>user: {user}</h3>
            <h3>name: {name}</h3>
            <h4>done: {done ? "finished" : "not done!"}</h4>
            <p>description: {description}</p>
            <button type="button">할일 이름 바꾸기</button>
        </>
    )
}

export default Todo;