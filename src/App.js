import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import scissors from "./images/icon-scissors.svg";
import rock from "./images/icon-rock.svg";
import paper from "./images/icon-paper.svg";

function App() {
  const [img1, setImg1] = useState(scissors);
  const [img2, setImg2] = useState(rock);
  const [hasWon, setHasWon] = useState('YOU LOSE')
  const[score, setScore]= useState(0)

  let rps =['rock', 'paper', 'scissors'];

  function handleChange() {
    let randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber);
    console.log(rps[randomNumber]);

    let result = rps[randomNumber];
    if (rps[randomNumber]== 'rock') {
      setImg1(rock);
    } else if (rps[randomNumber]== 'paper') {
      setImg1(paper);
    } else {
      setImg1(scissors)
    }

    function handleChange1() {
      let randomNumber = Math.floor(Math.random() * 3)
      console.log(randomNumber);
      console.log(rps[randomNumber]);
  
      let result1 = rps[randomNumber];
      if (rps[randomNumber]== 'rock') {
        setImg2(rock);
      } else if (rps[randomNumber]== 'paper') {
        setImg2(paper);
      } else {
        setImg2(scissors)
      }

      if (result == result1) {
        setHasWon('It is a Tie');
      } else if (result == 'rock' && result1 == 'scissors') {
        setHasWon('You WIN')
      } else if (result == 'rock' && result1 == 'paper') {
        setHasWon('You LOSE')
      } else if (result == 'paper' && result1 == 'scissors') {
        setHasWon ('You LOSE')
      }  else if (result == 'paper' && result1 == 'rock') {
          setHasWon('You WIN')
      } else if (result == 'scissors' && result1 == 'rock') {
        setHasWon('You LOSE')
      }  else if (result == 'scissors' && result1 == 'paper') {
        setHasWon('You WIN')
      }

      console.log(hasWon);

      if (hasWon == 'You WIN') {
        setScore(score + 1);
      }

      
    }
    handleChange1();
  
  }
  return (
<div className="App">

  <div className="lastdiv">
  </div>

    <div className="div05">
      <div className="div03">
        <h1>ROCK PAPER SCISSORS</h1>
      </div>
      <div className="div04">
        <p>SCORE</p>
        <h1 className="h11">{score}</h1>
      </div>
    </div>
 
<div className="lastdiv">
  
</div>

 <div className="container">
    <div>
    <div>
        <h1>You Picked</h1>
    </div>
    <div className="div01">
        <img className="imgg" src={img1} alt="" />
    </div>
    </div>
    <div>
      <h2 className="h22">{hasWon}</h2>
      <button className="btn" onClick={()=> {
      handleChange();
      }}
      >
      Play Again
      </button>
    </div>
    <div>
      <div>
      <h1>The House Picked</h1>
      </div>
      <div className="div02">
      <img className="imgg1" src={img2} alt="" />
      </div>
    </div>
 </div>
    <div className="rules">
    <a className="h33" href="">RULES</a> 
    </div>   


</div>
  );
}

export default App;
