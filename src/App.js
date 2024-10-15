import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../src/pages/Home'
import Exercise from '../src/pages/Exercise'
import Workout from '../src/pages/Workout'
import WorkoutSplit from '../src/pages/WorkoutSplit'

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Exercises" element={<Exercise />} />
          <Route path="/Workout" element={<Workout />} />
          <Route path="/WorkoutSplit" element={<WorkoutSplit />} />
        </Routes>
      </BrowserRouter>
    </div>
  ) 
} 

export default App;