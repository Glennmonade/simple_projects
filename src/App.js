import Home from "./HomePage/Home";
import { homeObj } from "./HomePage/Data";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WeatherContent from "./ProjectContent/WeatherApp/WeatherContent";
import { contentObjOne, contentObjTwo } from "./ProjectContent/Data";
import QuizContent from "./ProjectContent/QuizGame/QuizContent";


function App() {
  return (
    <>
    <Router  basename = "/simple_projects">
      <Routes>
        <Route path="/" element={<Home {...homeObj}/>} />
        <Route path="/weather-content" element={<WeatherContent {...contentObjOne}/>} />
        <Route path="/quiz-content" element={<QuizContent {...contentObjTwo}/>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
