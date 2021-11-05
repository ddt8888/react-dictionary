import React from 'react'

//Person(props)에서 props 대신 { country, name, age }을 나열해도 됨.
//이때 객체이기 때문에 중괄호 필수!!!
// function Person(props) {
const Person = (props) => {
    //초기 데이터
    // const name = "kimsang"
    // const age = 27
    const { country, name, age } = props  // 부모로부터 전달되는 값

    // HTML 템플릿
    return (
        //<fragment>
        <>
            <h1> {country} </h1>
            <h3> {name} </h3>
            <h4> {age} </h4>
        </>
        //</fragment>
    )

}
export default Person;