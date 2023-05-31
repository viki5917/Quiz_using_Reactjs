import React ,{useState,useContext}from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {

  const { score,setScore,setGamestate}=useContext(QuizContext);

    const[currentQuestion,setCurrentQuestion] =useState(0);
    const [optionChoosen,setOptionChoose]=useState("");

    const nextQuestion=()=>{
        if(Questions[currentQuestion].answer==optionChoosen){
          setScore(score+1);
          console.log(score);
        }
        
        setCurrentQuestion(currentQuestion+1);
    }
    const finishQuiz=()=>{
      if(Questions[currentQuestion].answer==optionChoosen){
        setScore(score+1);
      }
      setGamestate("endscreen")
    }


  return (
    <div className='Quiz'>
      <span>Question:{currentQuestion+1}/{Questions.length}</span>
        <h1>{Questions[currentQuestion].prompt}</h1>
        <div className='options'>
            <button onClick={()=>setOptionChoose("A")}>{Questions[currentQuestion].optionA}</button>
            <button onClick={()=>setOptionChoose("B")}>{Questions[currentQuestion].optionB}</button>
            <button onClick={()=>setOptionChoose("C")}>{Questions[currentQuestion].optionC}</button>
            <button onClick={()=>setOptionChoose("D")}>{Questions[currentQuestion].optionD}</button>
        </div>
        {currentQuestion==Questions.length-1 ?(
          <button className="finishbtn" onClick={finishQuiz}>Finish Quiz</button>
        ):(<button className="nextbtn" onClick={nextQuestion}>Next Question</button> )}
        
    </div>
  )
}

export default Quiz


 