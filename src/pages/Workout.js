import React from 'react';
import WorkoutComponent from '../components/WorkoutComponent';

const Workout = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create a Workout</h1>
      <WorkoutComponent />
    </div>
  );
};

export default Workout;
