import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to the Workout App</h1>
      <nav className="flex justify-center">
        <ul className="space-y-4 text-lg font-semibold">
          <li className="flex justify-center">
            <Link 
              className="px-5 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg"
              to="/exercise"
            >
              Generate Exercises
            </Link>
          </li>
          <li className="flex justify-center">
            <Link 
              className="px-5 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg"
              to="/workout"
            >
              Create Workout
            </Link>
          </li>
          <li className="flex justify-center">
            <Link 
              className="px-5 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg"
              to="/workout-split"
            >
              Create Workout Split
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
