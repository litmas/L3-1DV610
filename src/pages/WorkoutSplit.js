import React from 'react';
import WorkoutSplitComponent from '../components/WorkoutSplitComponent';

const WorkoutSplit = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create a Workout Split</h1>
      <WorkoutSplitComponent />
    </div>
  );
};

export default WorkoutSplit;
