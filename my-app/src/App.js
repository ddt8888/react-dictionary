// import Person from './Person';
// import Todo from "./Todo";
// import Book from "./Book";
// import NameTag from "./NameTag";
// import Counter from "./Counter"
// import YoutubeVideo from './YoutubeVideo';
// import dummyData from './DummyData';
import './App.css';
import React, { Component } from 'react';
import Word from './Word';
// import Movie from './Movie';
// import words from './kor_dic_coll.json'

// function App() {
//   return (
//     <div className="App">
//       <>

//         <div id="search-box">
//           <input id="search" type="text" value="" placeholder="단어를 검색하세요.."></input>
//           <input id="submit" type="submit" value="search"></input>
//           <input id="btn" type="button" onclick="location.href='/'" value="Reset"></input>
//           <p></p>
//           <hr></hr>
//         </div>
//       </>
//       {words.map(word => {
//         return (
//           <>
//             <div class="item">
//               <div class="word">
//                 <a href={word.r_link} target="_blank" rel="noreferrer">
//                   {word.r_word}<sup>{word.r_seq ? word.r_seq : ""}
//                   </sup> {word.r_chi}</a> - {word.r_pos}</div>
//               <p class="description">{word.r_des}</p>
//             </div>
//             <hr></hr>
//           </>
//         )
//       }
//       )}
//     </div>
//   );
// }

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     loading: true,
  //     movies: []
  //   }
  // }

  // componentDidMount() {
  //   fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
  //     .then(res => res.json())
  //     .then(result => {
  //       const { data: { movies } } = result
  //       console.log(movies)
  //       this.setState({ loading: false, movies })
  //     })
  // }

  // render() {
  //   const { loading, movies } = this.state
  //   const style = {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     width: '60%',
  //     margin: '100px auto',
  //     textAlign: 'center'
  //   }
  //   const loadingStyle = {
  //     position: 'absolute',
  //     left: '50%',
  //     top: '50%',
  //     transform: 'translate(-50%, -50%)',
  //     fontSize: '2rem'
  //   }
  //   if (loading) {
  //     return (
  //       <div style={loadingStyle}>
  //         <h1>Loading ...</h1>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div style={style}>
  //         {movies.map(movie => {
  //           return (
  //             <Movie
  //               key={movie.id}
  //               title={movie.title}
  //               genres={movie.genres}
  //               cover={movie.medium_cover_image}
  //               summary={movie.summary}
  //             ></Movie>
  //           )
  //         })}
  //       </div>
  //     )
  //   }
  // }

  //생성자 함수 생성
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      words: []
    }
  }

  componentDidMount() {
    fetch('https://dictionary-search2.herokuapp.com/api/words')
      .then(res => res.json())
      .then(result => {
        const { words } = result
        console.log(words)
        this.setState({ loading: false, words })
      })
  }

  render() {
    const { loading, words } = this.state
    const style = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%',
      margin: '100px auto',
      textAlign: 'center'
    }
    const loadingStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '2rem'
    }
    if (loading) {
      return (
        <div style={loadingStyle}>
          <h1>Loading ...</h1>
        </div>
      )
    } else {
      return (
        <div style={style}>
          {words.map(word => {
            return (
              <Word
                key={word._id}
                r_seq={word.r_seq}
                r_word={word.r_word}
                r_link={word.r_link}
                r_chi={word.r_chi}
                r_des={word.r_des}
                r_pos={word.r_pos}
              ></Word>
            )
          })}
        </div>
      )
    }
  }

}
export default App;

// {dummyData.map(d => {
//   return (
//     <YoutubeVideo
//       key={d.videoId}
//       videoId={d.videoId}
//       videoName={d.videoName}
//       videoLength={d.videoLength}
//       videoDescription={d.videoDescription}
//       videoAuthor={d.videoAuthor}>
//       {/* 컨텐츠 삽입 */}
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/kK9oLiI1ZV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     </YoutubeVideo>
//   )
// }
// )}

