import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import Workout from './pages/Workout';
import WorkoutSplit from './pages/WorkoutSplit';
import Header from "./tailwindComps/Header";
import '../src/tailwindComps/index.css'

/**
 * Renders the main application component that contains routing for different pages.
 *
 * @return {JSX.Element} The main application component containing routing elements.
 */
function App() {
  return (
    <BrowserRouter>
    <Header />
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
