import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-8">Welcome to the Workout App</h1>
      <nav>
        <ul>
          <li><Link to="/exercise">Generate Exercises</Link></li>
          <li><Link to="/workout">Create Workout</Link></li>
          <li><Link to="/workout-split">Create Workout Split</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
