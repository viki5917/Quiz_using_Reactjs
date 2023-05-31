import React,{useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank';
import '../App.css';

function EndScreen() {
  const {score,setScore,setGamestate}=useContext(QuizContext);
  const restatquiz=()=>{
    setScore(0);
    setGamestate("menu");
  }
  return (
    <div className='EndScreen'>
      <h1>Quiz Finished</h1>
      <h3>{score}/{Questions.length}</h3>
      <button onClick={restatquiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen