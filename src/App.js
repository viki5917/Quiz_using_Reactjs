import React,{useState, useContext} from 'react'; 
import './App.css';
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizContext } from './Helpers/Contexts';

function App() {

  const [gamestate,setGamestate] =useState("menu");
  const [score,setScore]=useState(0);


  return (
    <div className="App">
      <h1>Quiz app</h1>
      <QuizContext.Provider value={{gamestate,setGamestate,score,setScore}}>
        {gamestate === "menu" && <MainMenu />}
        {gamestate === "quiz" && <Quiz />}
        {gamestate === "endscreen" && <EndScreen />}
      </QuizContext.Provider>

    </div>
  );
}

export default App;
