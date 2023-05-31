import React,{useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import '../App.css';

function MainMenu() {
    const {gamestate,setGamestate}=useContext(QuizContext);
  return (
    <div className='Menu'>
        <button onClick={()=>{
            setGamestate("quiz")
        }}>Start Quiz</button>
    </div>
  )
}

export default MainMenu