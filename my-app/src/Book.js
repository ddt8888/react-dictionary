import React from 'react'

function Person({ title, author, summary, genre, release, ISBN }) {
    return (
        <>
            <h5> 도서코드 : {ISBN} </h5>
            <h1> 도서명 : {title} </h1>
            <h3> 작가명 : {author} </h3>
            <h3> 분류 : &lt;{genre}&gt; </h3>
            <h3> 출간일 : {release} </h3>
            <h4> 요약 : {summary} </h4>
        </>
    )

}
export default Person;