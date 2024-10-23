import React from 'react';
import ExerciseComponent from '../components/ExerciseComponent';

const Exercise = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Exercise Generator</h1>
      <ExerciseComponent />
    </div>
  );
};

export default Exercise;
