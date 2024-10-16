import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import Workout from './pages/Workout';
import WorkoutSplit from './pages/WorkoutSplit';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/workout-split" element={<WorkoutSplit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
