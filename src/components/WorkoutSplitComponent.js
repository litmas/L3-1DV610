import React, { useState } from 'react';
import WorkoutPlanner from '../assignmentL2/workoutModule/workoutPlanner.js';

const WorkoutSplitComponent = () => {
  const [splitType, setSplitType] = useState('');
  const [tempSplitType, setTempSplitType] = useState(''); // Temporary state for user input
  const [workoutType, setWorkoutType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState({});
  const [error, setError] = useState(null);

  const workoutPlanner = new WorkoutPlanner();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSplitType(tempSplitType); // Set the actual split type from temp state
      const createdSplit = await workoutPlanner.createWorkoutSplit(tempSplitType, workoutType, difficulty);
      setWorkoutPlan(createdSplit);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700 font-bold">Split Type:</span>
          <select
            value={tempSplitType}
            onChange={(e) => setTempSplitType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border rounded-md bg-white focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="pplSplit">Push/Pull/Legs Split</option>
            <option value="arnoldSplit">Arnold Split</option>
            <option value="fullBodySplit">Full Body Split</option>
            <option value="upperLowerSplit">Upper/Lower Split</option>
            <option value="fourDaySplit">Four-Day Split</option>
            <option value="fiveDaySplit">Five-Day Split</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-700 font-bold">Workout Type:</span>
          <input
            type="text"
            value={workoutType}
            onChange={(e) => setWorkoutType(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-bold">Difficulty:</span>
          <input
            type="text"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Create Workout Split
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{`Error: ${error}`}</p>}

      {Object.keys(workoutPlan).length > 0 && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            {splitType.charAt(0).toUpperCase() + splitType.slice(1)} Workout Plan
          </h2>
          {Object.entries(workoutPlan).map(([day, muscles]) => (
            <div key={day} className="mb-6">
              <h3 className="text-lg font-bold text-gray-700">{day}</h3>
              {typeof muscles === 'object' && !Array.isArray(muscles) ? (
                Object.entries(muscles).map(([muscleGroup, exercises]) => (
                  <div key={muscleGroup} className="mt-4">
                    <h4 className="text-md font-bold text-gray-600">{muscleGroup}</h4>
                    <ul className="list-disc list-inside mt-2">
                      {exercises.map((exercise, index) => (
                        <li key={index} className="mb-2">
                          <span className="font-semibold">Name:</span> {exercise.name} <br />
                          <span className="font-semibold">Type:</span> {exercise.type} <br />
                          <span className="font-semibold">Muscle:</span> {exercise.muscle} <br />
                          <span className="font-semibold">Difficulty:</span> {exercise.difficulty} <br />
                          <span className="font-semibold">Instructions:</span> {exercise.instructions}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p>{muscles}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutSplitComponent;
